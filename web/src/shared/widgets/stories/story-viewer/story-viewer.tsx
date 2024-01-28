import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { useCallback, useEffect, useMemo, useRef } from "react";
import preventBodyScroll from "@/shared/utils/prevent-body-scroll";
import enableBodyScroll from "@/shared/utils/enable-body-scroll";
import { useStories } from "../stories-context";
import StroyCard from "./story-card";

import styles from "./story-card.module.css";
import clsx from "clsx";
import StoryArrow from "./story-arrow";

type Props = {
  onClose: (closedStoryIndex?: number) => void;
};

const StoryViewer = (props: Props) => {
  const { onClose } = props;

  const storiesSlider = useRef<HTMLDivElement>(null);
  const {
    stories,
    currentStory,
    currentSlide,
    setCurrentSlide,
    setCurrentStory,
    setIsExpanded,
  } = useStories();

  const totalSlides = useMemo(
    () => stories[currentStory].slides.length,
    [stories, currentStory]
  );

  const totalStories = stories.length;

  const onStoryFinished = useCallback(() => {
    if (currentStory + 1 < stories.length) {
      setCurrentStory((p) => p + 1);
    } else {
      setIsExpanded(false);
    }
  }, [currentStory, stories.length, setCurrentStory, setIsExpanded]);

  const handlePreviousStory = useCallback(() => {
    const slider = storiesSlider.current;

    if (!slider) return;

    slider.style.transition = "500ms";
    slider.style.transform = "rotateY(90deg)";

    slider.ontransitionend = () => {
      setCurrentStory((p) => (p > 0 ? p - 1 : p));
      slider.style.transition = "0ms";
      slider.style.transform = "rotateY(0deg)";
    };
  }, [setCurrentStory]);

  const handleNextStory = useCallback(() => {
    const slider = storiesSlider.current;

    if (!slider) return;

    slider.style.transition = "500ms";
    slider.style.transform = "rotateY(-90deg)";

    slider.ontransitionend = () => {
      setCurrentStory((p) => (p < totalStories - 1 ? p + 1 : p));
      slider.style.transition = "0ms";
      slider.style.transform = "rotateY(0deg)";
    };
  }, [totalStories, setCurrentStory]);

  const handlePreviousClick = useCallback(() => {
    const isFirst = currentSlide === 0;

    if (isFirst) {
      handlePreviousStory();
    } else {
      setCurrentSlide((p) => p - 1);
    }
  }, [currentSlide, handlePreviousStory, setCurrentSlide]);

  const handleNextClick = useCallback(() => {
    const isLastSlide = currentSlide === totalSlides - 1;

    if (isLastSlide) {
      handleNextStory();
    } else {
      setCurrentSlide((p) => p + 1);
    }
  }, [currentSlide, totalSlides, handleNextStory, setCurrentSlide]);

  useEffect(() => {
    preventBodyScroll();

    return () => {
      enableBodyScroll();
    };
  }, [totalSlides]);

  const hasPrevStory = currentStory > 0;
  const hasNextStory = currentStory < stories.length - 1;

  return (
    <div className="fixed z-30 inset-0 flex justify-center items-center">
      <div
        className="absolute inset-0 opacity-70 bg-neutral-950"
        onClick={() => onClose()}
      />
      <div className="relative shrink-0 h-[80vh] max-w-[80vw] aspect-[9/16] rounded-2xl">
        <button
          className="absolute right-0 top-0 z-10 text-4xl translate-x-[120%] text-gray-200"
          title="Close story"
          onClick={() => onClose()}
        >
          <IoClose />
        </button>

        {hasPrevStory && (
          <StoryArrow dir="prev" onClick={handlePreviousClick} />
        )}
        <div className={styles.scene}>
          <div ref={storiesSlider} className={clsx(styles.cube)}>
            <StroyCard
              key="current"
              id="current"
              slides={stories[currentStory].slides}
              className={clsx(styles.face, styles.front)}
              onFinish={onStoryFinished}
              isVisible
            />
            {hasNextStory && (
              <StroyCard
                key="next"
                id="next"
                slides={stories[currentStory + 1].slides}
                className={clsx(styles.face, styles.right)}
                onFinish={onStoryFinished}
              />
            )}
            {hasPrevStory && (
              <StroyCard
                key="prev"
                id="prev"
                slides={stories[currentStory - 1].slides}
                className={clsx(styles.face, styles.left)}
                onFinish={onStoryFinished}
              />
            )}
          </div>
        </div>
        {hasNextStory && <StoryArrow dir="next" onClick={handleNextClick} />}
      </div>
    </div>
  );
};

export default StoryViewer;
