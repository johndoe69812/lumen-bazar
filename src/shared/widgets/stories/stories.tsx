"use client";

import { StoryList } from "./types";
import StoryViewer from "./story-viewer";
import StoriesProvider, { useStories } from "./stories-context";
import StoriesThumbs from "./stories-thumbs";

type Props = {
  list: StoryList;
  listHolderClassName?: string;
  thumbClassName?: string;
};

const Stories = () => {
  const { stories, isExpanded, setIsExpanded } = useStories();

  return (
    <>
      <StoriesThumbs list={stories} />
      {isExpanded && <StoryViewer onClose={() => setIsExpanded(false)} />}
    </>
  );
};

const StoriesWithContext = ({ list }: Props) => {
  return (
    <StoriesProvider stories={list}>
      <Stories />
    </StoriesProvider>
  );
};

export default StoriesWithContext;
