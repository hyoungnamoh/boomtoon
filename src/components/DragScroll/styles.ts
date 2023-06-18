import styled from 'styled-components';

export const DragScrollWrap = styled.div<{ gap?: number }>`
  width: 100%;
  display: flex;
  overflow: hidden;
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};
`;
