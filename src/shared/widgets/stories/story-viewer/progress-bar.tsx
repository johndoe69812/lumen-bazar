import clsx from "clsx";
import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { storyTimer } from "../utils";

type Props = {
  id: string;
  currentSlide: number;
  slidesLength: number;
};

type Ref = ForwardedRef<HTMLDivElement>;

const ProgressBar = forwardRef((props: Props) => {
  const { id, currentSlide, slidesLength } = props;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentProgressBar = ref.current?.children[
      currentSlide
    ] as HTMLDivElement;

    const progressThumb = currentProgressBar?.children[0] as HTMLElement;
    console.log("progressThumb", currentSlide, progressThumb);

    storyTimer.onTimeUpdate((permile) => {
      progressThumb.style.transform = `scaleX(${permile})`;
    });
  }, [currentSlide]);

  return (
    <div ref={ref} className="absolute left-0 w-full flex gap-1 px-4">
      {Array(slidesLength)
        .fill(0)
        .map((_, index) => (
          <div
            key={`${id}-${index}`}
            className="w-full h-1 rounded-lg overflow-hidden bg-neutral-300"
          >
            <div
              className={clsx(
                "w-full h-full origin-left bg-neutral-800 scale-x-0"
              )}
            />
          </div>
        ))}
    </div>
  );
});

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
