import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { Story } from "./types";

type ContextValue = {
  stories: Story[];
  currentStory: number;
  currentSlide: number;
  isExpanded: boolean;
  setCurrentStory: Dispatch<SetStateAction<number>>;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
};

const StoriesContext = createContext<ContextValue>(null!);

export const StoriesProvider = ({
  stories,
  children,
}: {
  children: ReactNode;
  stories: Story[];
}) => {
  const [currentStory, setCurrentStory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const value = useMemo(
    () => ({
      stories,
      currentStory,
      currentSlide,
      isExpanded,
      setCurrentStory,
      setCurrentSlide,
      setIsExpanded,
    }),
    [stories, currentStory, currentSlide, isExpanded]
  );

  return (
    <StoriesContext.Provider value={value}>{children}</StoriesContext.Provider>
  );
};

export const useStories = () => {
  const context = useContext(StoriesContext);

  if (!context) {
    throw new Error("useStories is not found");
  }

  return context;
};

export default StoriesProvider;
