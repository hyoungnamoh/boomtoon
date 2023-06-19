import Image from 'next/image';
import * as S from './styles';

const EventBanner = () => {
  return (
    <S.EventBannerWrap>
      <Image src={'/images/banner/1677489460859.webp'} alt={'2023 banner thumbnail2'} width={720} height={270} />
    </S.EventBannerWrap>
  );
};

export default EventBanner;
