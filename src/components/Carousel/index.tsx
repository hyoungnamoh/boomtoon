import Image from 'next/image';
import React, { useState } from 'react';
import * as S from './styles';
import useInterval from '@/hooks/useInterval';

const makeNewDataArray = (arr: string[]) => {
  const dataStart = arr[0];
  const dataEnd = arr[arr.length - 1];
  const modifiedArray = [dataEnd, ...arr, dataStart];
  return modifiedArray;
};

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
  const [images, setImages] = useState(makeNewDataArray(imageList));
  const [carouselIndex, setCurrCarousel] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState('');
  const [isStopped, setIsStopped] = useState(false);

  useInterval(
    () => {
      onNext();
    },
    isStopped ? null : delay,
  );

  const onNext = () => {
    const imageListLength = imageList.length;
    const newCurr = carouselIndex + 1;

    setCurrCarousel(newCurr);
    setImages(makeNewDataArray(imageList));
    if (newCurr === imageListLength + 1) {
      moveToNthSlide({ index: 1 });
    }

    setCarouselTransition('transform 500ms ease-in-out');
  };

  const onPrev = () => {
    const imageListLength = imageList.length;
    const newCurr = carouselIndex - 1;
    setCurrCarousel(newCurr);
    setImages(makeNewDataArray(imageList));

    if (newCurr === 0) {
      moveToNthSlide({ index: imageListLength });
    }

    setCarouselTransition('transform 500ms ease-in-out');
  };

  const moveToNthSlide = ({ index }: { index: number }) => {
    setTimeout(() => {
      setCarouselTransition('');
      setCurrCarousel(index);
    }, 500);
  };

  const getCurrentPage = ({ currentIndex }: { currentIndex: number }) => {
    if (currentIndex < 1) {
      return imageList.length + currentIndex;
    }
    if (currentIndex > imageList.length) {
      return currentIndex - imageList.length;
    }

    return currentIndex;
  };

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
            {getCurrentPage({ currentIndex: carouselIndex })}/{imageList.length}
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
