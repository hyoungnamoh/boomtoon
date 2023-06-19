import Image from 'next/image';
import * as S from './styles';

const RecommenedBanner = () => {
  return (
    <S.RecommenedBannerWrap>
      <Image src={'/images/banner/badposition.webp'} alt={'2023 banner thumbnail1'} width={720} height={300} />
    </S.RecommenedBannerWrap>
  );
};

export default RecommenedBanner;
