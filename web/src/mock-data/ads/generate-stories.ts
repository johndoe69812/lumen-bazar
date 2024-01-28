export const generateStories = async (total: number) => {
  const stories = Array(total)
    .fill(0)
    .map((_, storyIndex) => {
      return {
        id: `story-${storyIndex}`,
        title: `Story - ${storyIndex}`,
        thumbImage: `${process.env.NEXT_PUBLIC_HOSTNAME}/story-1.jpg`,
        slides: Array(2)
          .fill(0)
          .map((_, slideIndex) => {
            return {
              id: `Slide - ${slideIndex}`,
              image: `${process.env.NEXT_PUBLIC_HOSTNAME}/story-1-img.png`,
              description: `Slide from story ${storyIndex}`,
              title: `My Story Slide #${slideIndex}`,
              background: "white",
              link: {
                title: "My Link",
                url: "url",
              },
            };
          }),
      };
    });

  return stories;
};
