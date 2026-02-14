"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './DrinkingGame.module.css';

const DrinkingGame: React.FC = () => {
  const [round, setRound] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);

  // Round Configuration
  // Round 1 -> Sreehari -> me1.mp4
  // Round 2 -> Jojo -> jojo1.mp4
  // Round 3 -> Sreehari -> me2.mp4
  // Round 4 -> Jojo -> jojo2.mp4
  // Round 5 -> Sreehari -> me3.mp4
  
  const spinWheel = () => {
    if (isSpinning || gameOver) return;

    setIsSpinning(true);

    // Determine target based on round (1-indexed)
    // Rounds 1, 3, 5: Sreehari (Left: 90-270)
    // Rounds 2, 4: Jojo (Right: -90 to 90, effectively 270-450 or -90-90)
    
    // Let's normalize to 0-360 for calculation
    // Top is 0.
    // Right is 90? No, standard CSS rotation:
    // 0deg is usually pointing up if the image is oriented that way.
    // Let's assume standard clock: 0 is 12 o'clock.
    // 90 is 3 o'clock. 180 is 6 o'clock. 270 is 9 o'clock.
    
    let minAngle, maxAngle;

    // Round 1 (Sreehari) -> LEFT HALF
    // Round 2 (Jojo) -> RIGHT HALF
    
    // Let's rethink angles.
    // Wheel at 0deg: 
    // - Top (Pointer) is at 12 o'clock.
    // - Right Half (Jojo) covers 0 to 180 (Clockwise)? Or -90 to 90?
    // - Left Half (Sreehari) covers 180 to 360?
    
    // If the image has "Me" on Left and "Jojo" on Right.
    // Left side corresponds to 9 o'clock area.
    // Right side corresponds to 3 o'clock area.
    
    // To make Pointer (12 o'clock) point to "Me" (Left/9 o'clock):
    // We need to rotate 9 o'clock to 12 o'clock.
    // That means rotating Clockwise by 90 degrees.
    // So Target Rotation = 90deg (approx).
    // Range for Left Half at Top: 0 to 180?
    // If we rotate 0deg: Top is Top.
    // If we rotate 90deg: Left (270 orig) is at Top.
    // If we rotate 180deg: Bottom (180 orig) is at Top.
    // If we rotate 270deg: Right (90 orig) is at Top.
    
    // So:
    // To show LEFT (Sreehari) at Top: Rotate between 0 and 180?
    // To show RIGHT (Jojo) at Top: Rotate between 180 and 360?
    
    // Let's try this mapping based on "Left Half" and "Right Half":
    // Sreehari (Left): Target Rotation 0-180.
    // Jojo (Right): Target Rotation 180-360.
    
    // Wait, if 0 is top... 
    // If the wheel is split vertically.
    // Left Half is 180 to 360 (or -180 to 0).
    // Right Half is 0 to 180.
    // No, standard angle: 0 is Right (East), 90 is Bottom (South), 180 is Left (West), 270 is Top (North).
    // CSS rotate(0deg) usually keeps the image as is.
    // If image has Sreehari on Left and Jojo on Right.
    // Sreehari is at 270 (Top) to 90 (Bottom) going counter-clockwise?
    // Let's assume standard "Clock" visualization.
    // Sreehari = 6 to 12 (Left side).
    // Jojo = 12 to 6 (Right side).
    
    // Pointer is at 12.
    // To point to Sreehari (Left side):
    // We need to rotate the wheel such that a point on the Left side ends up at 12.
    // Points on Left side are currently at angles like 9 o'clock (270deg), 8 o'clock (240deg), etc.
    // To bring 9 o'clock (270) to 12 o'clock (0/360), we add 90 degrees.
    // To bring 6 o'clock (180) to 12 o'clock, we add 180 degrees.
    // So range for Sreehari to be at Top: 0 to 180 degrees of rotation?
    // Let's verify.
    // Rotate 90: Original 270 (Left) becomes 360/0 (Top). Correct. Sreehari is Left.
    // Rotate 45: Original 315 (Top-Left) becomes 360/0 (Top). Correct.
    // So Sreehari (Left Half) -> Target Rotation [0, 180].
    
    // Jojo (Right Half):
    // Points on Right side are at 3 o'clock (90deg).
    // To bring 3 o'clock (90) to 12 o'clock (0/360), we rotate -90 or +270.
    // So range for Jojo to be at Top: 180 to 360 degrees.
    // Rotate 270: Original 90 (Right) becomes 360/0 (Top). Correct.
    
    // So:
    // Sreehari: 0 - 180
    // Jojo: 180 - 360
    
    const isSreehari = round === 1 || round === 3 || round === 5;
    
    if (isSreehari) {
      // Sreehari (Left Half on image -> Needs 0-180 rotation to be at Top)
      minAngle = 10;   // Avoid exact boundary
      maxAngle = 170;
    } else {
      // Jojo (Right Half on image -> Needs 180-360 rotation to be at Top)
      minAngle = 190;
      maxAngle = 350;
    }
    
    // Random offset within the range
    const randomOffset = Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;
    
    // Full rotations (3-5)
    // 360 * 3 = 1080
    // 360 * 5 = 1800
    const randomRotations = 360 * (Math.floor(Math.random() * 3) + 3); // 3, 4, or 5
    
    // We need to add this to the CURRENT rotation to ensure smooth spinning forward
    // But we also need to respect the target sector.
    // The randomOffset is an absolute angle (0-360 space essentially).
    // We want finalRotation = randomOffset + k * 360.
    // And finalRotation > currentRotation.
    
    // Current rotation might be large (e.g. 5000).
    // We want to add at least randomRotations.
    
    const nextRotationBase = rotation + randomRotations;
    
    // Adjust to land on the correct offset
    // We want (nextRotationBase + adjustment) % 360 = randomOffset % 360 ? 
    // Actually, just taking (currentRotation - (currentRotation % 360)) + randomRotations + randomOffset might work?
    // No, simpler:
    // Just add the full rotations to the current value, then add the difference to reach the target offset.
    
    // Better approach:
    // Calculate the target angle relative to 0.
    // targetAngle = randomOffset.
    // currentAngle % 360 is where we are.
    // distance = targetAngle - (currentRotation % 360).
    // If distance < 0, distance += 360.
    // finalRotation = currentRotation + distance + randomRotations.
    
    // But wait, user said "LEFT half (Sreehari) = 90deg–270deg". 
    // And "RIGHT half (Jojo) = -90deg–90deg".
    // These ranges overlap at boundaries but are distinct 180 sectors.
    // 90 to 270 is 180 degrees.
    // -90 to 90 is 180 degrees.
    
    // Let's use the logic:
    // 1. Calculate target offset in [minAngle, maxAngle].
    // 2. Ensure we rotate forward.
    
    // We need to normalize current rotation to know "where we are" in 0-360 space?
    // Actually, `rotation` state stores the total accumulated rotation.
    
    // Let's try:
    // newRotation = currentRotation + randomRotations + (targetOffset - (currentRotation % 360))?
    // This aligns the wheel to the targetOffset.
    
    // Example: Current = 0. Sreehari. Offset = 100. Rotations = 1080.
    // New = 0 + 1080 + (100 - 0) = 1180.
    // 1180 % 360 = 100. Correct.
    
    // Example: Current = 1180. Jojo. Offset = 10. Rotations = 1080.
    // 1180 % 360 = 100.
    // New = 1180 + 1080 + (10 - 100) = 2260 - 90 = 2170?
    // 2170 % 360 = 10. Correct.
    // Wait, (10 - 100) is -90. This means rotating backwards by 90 deg relative to the full spin.
    // We want to ensure we spin forward "enough".
    // If target - current%360 is negative, we add 360 to it?
    // Or just let `randomRotations` absorb it (since it's large).
    // 1080 - 90 = 990. That's still plenty of spin (2.75 rotations).
    // User said "Spin 3-5 full rotations".
    // If I subtract up to 360, I might drop below 3 full rotations.
    // So let's make sure `randomRotations` is big enough or add extra 360 if delta is negative.
    
    let delta = randomOffset - (rotation % 360);
    if (delta < 0) {
        delta += 360;
    }
    
    // Now delta is between 0 and 360.
    const finalRotation = rotation + randomRotations + delta;
    
    setRotation(finalRotation);

    // Timeout for animation end
    setTimeout(() => {
      setIsSpinning(false);
      
      // Determine video based on round
      // Round 1 -> me1
      // Round 2 -> jojo1
      // Round 3 -> me2
      // Round 4 -> jojo2
      // Round 5 -> me3
      
      let videoName = '';
      if (round === 1) videoName = 'me1.mp4';
      else if (round === 2) videoName = 'jojo1.mp4';
      else if (round === 3) videoName = 'me2.mp4';
      else if (round === 4) videoName = 'jojo2.mp4';
      else if (round === 5) videoName = 'me3.mp4';
      
      setCurrentVideo(videoName);
      
      // Wait 500ms then show modal
      setTimeout(() => {
        setShowModal(true);
      }, 500);
      
    }, 3500); // 3.5s match CSS
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
    
    if (round < 5) {
      setRound(prev => prev + 1);
    } else {
      setGameOver(true);
    }
  };

  const getButtonText = () => {
    if (gameOver) return "It was never 50/50. I always choose you ❤️ (AI inte Kavitha)";
    // "Give 1st Peg 🥃"
    const ordinal = ["1st", "2nd", "3rd", "4th", "5th"];
    return `Give ${ordinal[round - 1]} Peg 🥃`;
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.header}>
        Peg: {gameOver ? 5 : round} / 5
      </div>

      <div className={styles.wheelContainer}>
        <div className={styles.pointer}></div>
        <img 
          src="/images/wheel.PNG" 
          alt="Wheel" 
          className={styles.wheel} 
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>

      {!gameOver && (
          <button 
            className={styles.spinButton}
            onClick={spinWheel}
            disabled={isSpinning}
          >
            {getButtonText()}
          </button>
      )}

      {gameOver && (
          <div className={styles.finalMessage}>
              It was never 50/50. I always choose you ❤️ (AI inte Kavitha)
          </div>
      )}

      {showModal && currentVideo && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={handleCloseModal}>×</button>
            <video 
              src={`/videos/${currentVideo}`} 
              autoPlay 
              controls 
              className={styles.videoPlayer}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DrinkingGame;
