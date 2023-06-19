import { ReactNode } from 'react';
import * as S from './styles';
import useDragScroll from './useDragScroll';

const DragScroll = ({ children, gap }: { children: ReactNode; gap?: number }) => {
  const { onDragStart, onDragMove, onDragEnd, scrollRef } = useDragScroll();

  return (
    <S.DragScrollWrap
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
      gap={gap}
    >
      {children}
    </S.DragScrollWrap>
  );
};

export default DragScroll;
