import { MouseEvent, MutableRefObject } from "react";

const drag = {
  onDragStart(
    e: MouseEvent,
    isClick: MutableRefObject<boolean>,
    targetOffset: MutableRefObject<number>
  ) {
    e.preventDefault();
    isClick.current = true;
    targetOffset.current = e.clientX;
  },

  onDragEnd(e: MouseEvent, isClick: MutableRefObject<boolean>) {
    e.preventDefault();
    isClick.current = false;
  },

  onDragMove(
    e: MouseEvent,
    isClick: MutableRefObject<boolean>,
    targetOffset: MutableRefObject<number>,
    scrollRef: MutableRefObject<HTMLUListElement | null>
  ) {
    e.preventDefault();
    if (isClick.current && scrollRef.current) {
      const moveX = targetOffset.current - e.clientX;

      scrollRef.current.scrollLeft += moveX;
      targetOffset.current = e.clientX;
    }
  },
};

export default drag;
