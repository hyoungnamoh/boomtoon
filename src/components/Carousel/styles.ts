import styled from 'styled-components';

export const CarouselWrap = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  height: 100%;
`;

export const CarouselImageWrap = styled.div<{ carouselIndex: number; carouselTransition: string; height: number }>`
  width: 100%;
  transform: ${({ carouselIndex }) => `translateX(-${carouselIndex * 100}%)`};
  transition: ${({ carouselTransition }) => carouselTransition};
  height: ${({ height }) => `${height}px`};
`;

export const PagingBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 8px;
  right: 20px;
  bottom: 26px;
  width: 76px;
  height: 28px;
  border-radius: 14.3px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const PageInfo = styled.span`
  font-size: 10px;
  color: white;
  font-weight: 400;
  line-height: 1.5;
`;

export const PrevImage = styled.img`
  opacity: 0.3;
  padding-right: 9px;
`;

export const NextImage = styled.img`
  opacity: 0.3;
  padding-left: 9px;
`;

export const PrevButton = styled.button`
  position: absolute;
  width: 50%;
  left: 0;
  height: 100%;

  &:hover {
    ${PrevImage} {
      opacity: 1;
    }
  }
`;

export const NextButton = styled.button`
  position: absolute;
  width: 50%;
  right: 0;
  height: 100%;

  &:hover {
    ${NextImage} {
      opacity: 1;
    }
  }
`;
