export type StoryList = Story[];

export type StorySlide = {
  id: string;
  image: string;
  title: string;
  description: string;
  background: string;
  link: {
    title: string;
    url: string;
  };
};

export type Story = {
  id: string;
  title: string;
  thumbImage: string;
  isViewed?: boolean;
  slides: StorySlide[];
};
