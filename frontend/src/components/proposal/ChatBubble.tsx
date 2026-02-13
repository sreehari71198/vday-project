"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ChatBubbleProps = {
  content: string;
  type: "text" | "image";
  profileImage?: string;
  alt?: string;
  emphasis?: boolean;
};

export default function ChatBubble({
  content,
  type,
  profileImage,
  alt,
  emphasis,
}: ChatBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="flex items-start gap-3"
    >
      {profileImage && (
        <Image
          src={profileImage}
          alt="Profile"
          width={36}
          height={36}
          className="rounded-full border border-white/20 object-cover"
        />
      )}
      <div className="rounded-2xl bg-white/10 px-4 py-3 text-white shadow-md max-w-[80%]">
        {type === "text" ? (
          <p className={emphasis ? "text-xl md:text-2xl font-semibold" : "text-base"}>
            {content}
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl"
          >
            <Image
              src={content}
              alt={alt ?? "image"}
              width={480}
              height={320}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}