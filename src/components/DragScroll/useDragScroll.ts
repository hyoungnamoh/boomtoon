import { MouseEvent, useRef, useState } from 'react';

const useDragScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (!scrollRef.current) {
      return;
    }
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (!isDrag || !scrollRef.current) {
      return;
    }
    const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
    scrollRef.current.scrollLeft = startX - e.pageX;

    if (scrollLeft === 0) {
      setStartX(e.pageX);
    } else if (scrollWidth <= clientWidth + scrollLeft) {
      setStartX(e.pageX + scrollLeft);
    }
  };

  return {
    onDragStart,
    onDragMove,
    onDragEnd,
    scrollRef,
  };
};

export default useDragScroll;
