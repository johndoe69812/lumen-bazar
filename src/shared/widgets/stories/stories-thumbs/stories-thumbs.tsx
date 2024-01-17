"use client";

import { IoArrowForward } from "@react-icons/all-files/io5/IoArrowForward";
import { IoArrowBack } from "@react-icons/all-files/io5/IoArrowBack";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import StoryThumb from "./story-thumb";
import { StoryList } from "../types";
import clsx from "clsx";
import { STORIES_THUMBS_GAP } from "../constants";
import { shouldShowStoryThumb } from "../utils";
import { useStories } from "../stories-context";

type Props = {
  list: StoryList;
  listHolderClassName?: string;
  thumbClassName?: string;
};

const StoriesThumbs = ({ list }: Props) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const { setCurrentSlide, setCurrentStory, setIsExpanded } = useStories();

  const [itemsInView, setItemsInView] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isForwardArrow, setIsForwardArrows] = useState(false);

  const handlePrevThumbClick = useCallback(() => {
    setCurrent((p) => Math.max(p - 2, 0));
  }, []);

  const handleNextThumbClick = useCallback(() => {
    setCurrent((p) => {
      return Math.min(p + 2, list.length - itemsInView);
    });
  }, [list.length, itemsInView]);

  useEffect(() => {
    const outerElement = outerRef.current;
    const innerElement = innerRef.current;

    if (!outerElement || !innerElement) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      setItemsInView(
        Math.ceil(outerElement.offsetWidth / (STORIES_THUMBS_GAP + 96))
      );
      if (innerElement.offsetWidth > outerElement.offsetWidth) {
        setIsForwardArrows(true);
      } else {
        setIsForwardArrows(false);
      }
    });

    resizeObserver.observe(outerElement);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (current + itemsInView < list.length) {
      setIsForwardArrows(true);
    } else {
      setIsForwardArrows(false);
    }
  }, [current, itemsInView, list.length]);

  return (
    <>
      <div
        ref={outerRef}
        className="mt-12 w-full gap-4"
        style={
          {
            "--scroll-offset": `-${(STORIES_THUMBS_GAP + 96) * current}px`,
            "--thumbs-gap": `${STORIES_THUMBS_GAP}px`,
          } as CSSProperties
        }
      >
        <div className="relative flex overflow-hidden p-1">
          {current > 0 && (
            <button
              className="absolute z-10 flex left-0 justify-center items-center shrink-0 rounded-full w-24 h-24 bg-gray-100 text-4xl hover:bg-gray-200"
              onClick={handlePrevThumbClick}
            >
              <IoArrowBack />
            </button>
          )}
          {isForwardArrow && (
            <button
              className="absolute z-10 flex right-0 justify-center items-center shrink-0 rounded-full w-24 h-24 bg-gray-100 text-4xl hover:bg-gray-200"
              onClick={handleNextThumbClick}
            >
              <IoArrowForward />
            </button>
          )}
          <div
            ref={innerRef}
            className="flex transition duration-500 translate-x-[var(--scroll-offset)]"
          >
            {list.map((story, index) => {
              const showThumb = shouldShowStoryThumb(
                current,
                index,
                itemsInView,
                list.length
              );

              return (
                <StoryThumb
                  key={index}
                  className={clsx(
                    !showThumb && "opacity-0 pointer-events-none",
                    `story-${index}`,
                    index > 0 && `ml-[var(--thumbs-gap)]`
                  )}
                  thumbImage={story.thumbImage}
                  onClick={() => {
                    setCurrentSlide(0);
                    setCurrentStory(index);
                    setIsExpanded(true);
                  }}
                  isViewed={story.isViewed ?? false}
                  title={index + story.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesThumbs;
