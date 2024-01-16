import { SLIDE_VISIBLE_TIME } from "../constants";

type TimerCallback = (permil: number) => void;

class StoryTimer {
  startTime: number;
  isPaused: boolean;
  isStopped: boolean;
  timerCallback?: TimerCallback;
  endCallback?: () => void;

  constructor() {
    this.startTime = 0;
    this.isPaused = false;
    this.isStopped = true;
  }

  start() {
    this.startTime = Date.now();
    this.isStopped = false;

    const trackProgress = () => {
      let currentTime = Date.now();
      const completion = (currentTime - this.startTime) / SLIDE_VISIBLE_TIME;
      !this.isPaused && this.timerCallback?.(completion);

      if (completion >= 1 || this.isStopped) {
        this.endCallback?.();
        return;
      }

      requestAnimationFrame(trackProgress);
    };

    requestAnimationFrame(trackProgress);
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  stop() {
    this.isStopped = true;
  }

  onTimeUpdate(callback: TimerCallback) {
    this.timerCallback = callback;
  }

  onEnd(callback: () => void) {
    this.endCallback = callback;
  }
}

export const storyTimer = new StoryTimer();
