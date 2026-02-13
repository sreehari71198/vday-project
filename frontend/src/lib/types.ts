export type Question = {
  id: string;
  prompt: string;
  options: string[];
  answer: string;
};

export type ProposalScene =
  | { type: "text"; content: string }
  | { type: "image"; src: string; alt: string }
  | { type: "gif"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  image: string;
};

export type HomeTile = {
  title: string;
  description: string;
  href: string;
};

export type GameTile = {
  title: string;
  description: string;
  href: string;
};