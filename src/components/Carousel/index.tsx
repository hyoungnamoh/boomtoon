import Image from 'next/image';
import React from 'react';
import * as S from './styles';
import useCarousel from './useCarousel';

const Carousel = ({
  imageList,
  width,
  height,
  delay,
}: {
  imageList: string[];
  width: number;
  height: number;
  delay: number;
}) => {
  const { setIsStopped, images, carouselIndex, carouselTransition, onPrev, getCurrentPage, onNext } = useCarousel({
    imageList,
    delay,
  });

  return (
    <>
      <S.CarouselWrap onMouseEnter={() => setIsStopped(true)} onMouseLeave={() => setIsStopped(false)}>
        {images.map((image, index) => {
          return (
            <S.CarouselImageWrap
              key={`${image}-${index}`}
              carouselIndex={carouselIndex}
              carouselTransition={carouselTransition}
              height={height}
            >
              <Image width={width} height={height} src={image} alt={`Carousel image${index}`} priority={true} />
            </S.CarouselImageWrap>
          );
        })}
        <S.PagingBox>
          <S.PrevButton onClick={onPrev}>
            <S.PrevImage src={'/images/common/group-20.webp'} />
          </S.PrevButton>
          <S.PageInfo>
            {getCurrentPage({ currentIndex: carouselIndex })} / {imageList.length}
          </S.PageInfo>
          <S.NextButton onClick={onNext}>
            <S.NextImage src={'/images/common/group-20-copy.webp'} />
          </S.NextButton>
        </S.PagingBox>
      </S.CarouselWrap>
    </>
  );
};

export default Carousel;
