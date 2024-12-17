interface MetaData {
  title: string;
  description: string;
  items: string[];
  tabs: {
    [key: string]: {
      title: string;
      description: string;
      items: string[];
    };
  };
  cards: {
    title: string;
    description: string;
    thumbnail?: string;
    priority: number;
    tag: string;
  }[];
}

export const metaData: MetaData = {
  title: "Expertise",
  description: "This page contains information about expertise.",
  items: ["Meta Item 1", "Meta Item 2", "Meta Item 3"],
  tabs: {
    all: {
      title: "All",
      description: "This tab contains all projects.",
      items: [],
    },
    ai_ml: {
      title: "AI/ML",
      description: "This tab contains information about AI/ML expertise.",
      items: ["AI/ML Item 1", "AI/ML Item 2", "AI/ML Item 3"],
    },
    full_stack: {
      title: "Full Stack",
      description:
        "This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.",
      items: ["Full Stack Item 1", "Full Stack Item 2", "Full Stack Item 3"],
    },
  },
  cards: [
    {
      title: "AI/ML",
      description:
        "This card contains information about AI/ML expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.",
      thumbnail: "ai-ml-thumbnail.jpg",
      priority: 1,
      tag: "AI/ML",
    },
    {
      title: "Full Stack",
      description: "This card contains information about Full Stack expertise.",
      thumbnail: "full-stack-thumbnail.jpg",
      priority: 2,
      tag: "Full Stack",
    },
    {
      title: "AI/ML",
      description:
        "This card contains information about AI/ML expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.",
      thumbnail: "ai-ml-thumbnail.jpg",
      priority: 1,
      tag: "AI/ML",
    },
    {
      title: "Full Stack",
      description: "This card contains information about Full Stack expertise.",
      thumbnail: "full-stack-thumbnail.jpg",
      priority: 2,
      tag: "Full Stack",
    },
    {
      title: "AI/ML",
      description:
        "This card contains information about AI/ML expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.",
      thumbnail: "ai-ml-thumbnail.jpg",
      priority: 1,
      tag: "AI/ML",
    },
    {
      title: "Full Stack",
      description: "This card contains information about Full Stack expertise.",
      thumbnail: "full-stack-thumbnail.jpg",
      priority: 2,
      tag: "Full Stack",
    },
    {
      title: "AI/ML",
      description:
        "This card contains information about AI/ML expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.",
      thumbnail: "ai-ml-thumbnail.jpg",
      priority: 1,
      tag: "AI/ML",
    },
    {
      title: "Full Stack",
      description: "This card contains information about Full Stack expertise.",
      thumbnail: "full-stack-thumbnail.jpg",
      priority: 2,
      tag: "Full Stack",
    },
    {
      title: "AI/ML",
      description:
        "This card contains information about AI/ML expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.",
      thumbnail: "ai-ml-thumbnail.jpg",
      priority: 1,
      tag: "AI/ML",
    },
    {
      title: "Full Stack",
      description: "This card contains information about Full Stack expertise.",
      thumbnail: "full-stack-thumbnail.jpg",
      priority: 2,
      tag: "Full Stack",
    },
    {
      title: "AI/ML",
      description:
        "This card contains information about AI/ML expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.This tab contains information about Full Stack expertise.",
      thumbnail: "ai-ml-thumbnail.jpg",
      priority: 1,
      tag: "AI/ML",
    },
    {
      title: "Full Stack",
      description: "This card contains information about Full Stack expertise.",
      thumbnail: "full-stack-thumbnail.jpg",
      priority: 2,
      tag: "Full Stack",
    },
  ],
};

export const tabs = {
  all: "All",
  aiMl: "AI/ML",
  fullStack: "Full Stack",
};

export const getMetaItems = (): string[] => {
  return metaData.items;
};