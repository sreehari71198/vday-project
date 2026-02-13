export type QuestionConfig = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  correctMessage: string;
  wrongMessage: string;
};

export const questions: QuestionConfig[] = [
  {
    id: 1,
    question: "Enthaa per?  Whaatt is your name??",
    options: ["Jojo", "S Jyothi Prasad", "Shottaa"],
    correctAnswer: "Shottaa",
    correctMessage: "Sheri utharam shuttumani",
    wrongMessage: "Sredhukkunnillew",
  },
  {
    id: 2,
    question: "Jojo Evide thamasikkunnu?",
    options: ["Ente Manassilll!!", "Pakki Junction", "Bellandur"],
    correctAnswer: "Bellandur",
    correctMessage: "Sheri utharam shuttumani",
    wrongMessage: "Over akkanda thetti",
  },
  {
    id: 3,
    question: "Best Event organisers in Kerala.",
    options: [
      "Dolphin Events and Wedding Planner",
      "K&K Events Pvt Ltd",
      "PakyoEvents",
    ],
    correctAnswer: "K&K Events Pvt Ltd",
    correctMessage: "Kanji & Kunju utharam  forever",
    wrongMessage: "Google nokkanda thetta",
  },
];