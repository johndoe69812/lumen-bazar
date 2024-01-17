import clsx from "clsx";
import ProgressBar from "./progress-bar";
import { StorySlide } from "../types";
import { HTMLAttributes, useEffect, useRef } from "react";
import { useStories } from "../stories-context";
import { storyTimer } from "../utils";

type Props = HTMLAttributes<HTMLDivElement> & {
  id: string;
  slides: StorySlide[];
  isVisible?: boolean;
  onFinish: () => void;
};

const StroyCard = (props: Props) => {
  const { id, slides, isVisible = false, onFinish, ...rest } = props;

  const cardRef = useRef<HTMLDivElement>(null);
  const { currentStory, currentSlide, setCurrentSlide } = useStories();

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    storyTimer.onEnd(() => {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide((p) => p + 1);
      } else {
        onFinish();
      }
    });
  }, [isVisible, currentSlide, slides.length, onFinish, setCurrentSlide]);

  // Stop when touched
  useEffect(() => {
    const card = cardRef.current;

    if (!isVisible || !card) {
      return;
    }

    const pauseTimer = () => {
      storyTimer.pause();
    };

    const resumeTimer = () => {
      storyTimer.resume();
    };

    card.addEventListener("mousedown", pauseTimer);
    card.addEventListener("mouseup", resumeTimer);
    window.addEventListener("focus", resumeTimer);

    storyTimer.start();

    return () => {
      storyTimer.stop();
      card.removeEventListener("mousedown", pauseTimer);
      card.removeEventListener("mouseup", resumeTimer);
      window.removeEventListener("focus", resumeTimer);
    };
  }, [isVisible, id, currentSlide]);

  useEffect(() => {
    if (!isVisible) {
      setCurrentSlide(0);
    }
  }, [currentStory, slides.length, isVisible]);

  return (
    <div
      id={id}
      style={rest.style}
      ref={cardRef}
      className={clsx("absolute w-full h-full shrink-0", rest.className)}
    >
      <div
        className="w-full h-full p-4"
        style={{
          background: slides[currentSlide]?.background,
        }}
      >
        {isVisible && (
          <ProgressBar
            id={id}
            currentSlide={currentSlide}
            slidesLength={slides.length}
          />
        )}
        <div className="inset-0">
          <img
            src={slides[currentSlide]?.image}
            className="max-w-full mx-auto"
          />
          <h1 className="mt-10 text-4xl font-bold">
            {slides[currentSlide]?.title}
          </h1>
          {slides[currentSlide]?.description && (
            <p>{slides[currentSlide].description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StroyCard;
