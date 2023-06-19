import useInterval from '@/hooks/useInterval';
import { useState } from 'react';

const makeNewDataArray = (arr: string[]) => {
  const dataStart = arr[0];
  const dataEnd = arr[arr.length - 1];
  const modifiedArray = [dataEnd, ...arr, dataStart];
  return modifiedArray;
};

const useCarousel = ({ imageList, delay }: { imageList: string[]; delay: number }) => {
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

  return {
    setIsStopped,
    images,
    carouselIndex,
    carouselTransition,
    onPrev,
    getCurrentPage,
    onNext,
  };
};

export default useCarousel;
