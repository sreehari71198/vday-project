export type ProposalStepId =
  | "step1"
  | "step1b"
  | "step1c"
  | "step2"
  | "step3"
  | "step4"
  | "step5"
  | "step6";

export type ProposalMessage = {
  id: string;
  type: "text" | "image" | "video";
  content: string;
  alt?: string;
  emphasis?: boolean;
};

export type ProposalOption = {
  label: string;
  nextStep?: ProposalStepId;
  action?: "finish" | "none";
  isMoving?: boolean;
  disableOnTouch?: boolean;
};

export type ProposalStep = {
  id: ProposalStepId;
  messages: ProposalMessage[];
  options: ProposalOption[];
};

export const proposalFlow: {
  profileImage: string;
  steps: Record<ProposalStepId, ProposalStep>;
} = {
  profileImage: "/images/my_profile.jpeg",
  steps: {
    step1: {
      id: "step1",
      messages: [
        {
          id: "step1-message",
          type: "text",
          content: "Heyy Sugam Ahno",
        },
      ],
      options: [
        { label: "Athelloo", nextStep: "step2" },
        { label: "allenkil?", nextStep: "step1b" },
      ],
    },
    step1b: {
      id: "step1b",
      messages: [
        {
          id: "step1b-image",
          type: "image",
          content: "/images/my_cute.jpeg",
          alt: "My cute moment",
        },
        {
          id: "step1b-message",
          type: "text",
          content: "Ippo sugayo?",
        },
      ],
      options: [
        { label: "Aaayi", nextStep: "step2" },
        { label: "Ayyada illa?", nextStep: "step1c" },
      ],
    },
    step1c: {
      id: "step1c",
      messages: [
        {
          id: "step1c-image",
          type: "image",
          content: "/images/anthass_image.jpeg",
          alt: "Anthass moment",
        },
        {
          id: "step1c-message",
          type: "text",
          content: "dhe orumathiri anthass venam",
        },
      ],
      options: [{ label: "Sheri aayi", nextStep: "step2" }],
    },
    step2: {
      id: "step2",
      messages: [
        {
          id: "step2-message",
          type: "text",
          emphasis: true,
          content:
            "Valach kettillathe karyam parayaam ..enikk ishtan kalyanm kaikkan thalparyam und..hehe 💖💌💘",
        },
      ],
      options: [{ label: "Aarod choichu ishtapedan", nextStep: "step3" }],
    },
    step3: {
      id: "step3",
      messages: [
        {
          id: "step3-video",
          type: "video",
          content: "/videos/srinivasan_proposal.mp4",
        },
      ],
      options: [{ label: "Ishta pedan ulla karanm?", nextStep: "step4" }],
    },
    step4: {
      id: "step4",
      messages: [
        {
          id: "step4-video",
          type: "video",
          content: "/videos/mohanlal_minnaram.mp4",
        },
      ],
      options: [{ label: "oooohhhoooo", nextStep: "step5" }],
    },
    step5: {
      id: "step5",
      messages: [
        {
          id: "step5-message",
          type: "text",
          content: "Ishtam ahno?",
        },
      ],
      options: [
        { label: "Yes", nextStep: "step6" },
        {
          label: "No",
          action: "none",
          isMoving: true,
          disableOnTouch: true,
        },
      ],
    },
    step6: {
      id: "step6",
      messages: [
        {
          id: "step6-message",
          type: "text",
          content: "enikk ariyamayirunnu",
        },
        {
          id: "step6-image",
          type: "image",
          content: "/images/my_cute_2.jpeg",
          alt: "Happy moment",
        },
      ],
      options: [{ label: "Finish", action: "finish" }],
    },
  },
};