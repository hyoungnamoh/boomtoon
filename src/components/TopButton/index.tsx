import Image from 'next/image';
import * as S from './styles';
import { useEffect, useState } from 'react';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  const onClickTopButton = () => {
    window.scroll({
      top: 0,
    });
  };
  return (
    <S.TopButtonWrap isVisible={isVisible} onClick={onClickTopButton}>
      <Image src={'/images/common/btn-fab-up-nor.svg'} alt="Top button" width={24} height={24} />
    </S.TopButtonWrap>
  );
};

export default TopButton;
