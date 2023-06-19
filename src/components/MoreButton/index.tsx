import Image from 'next/image';
import * as S from './styles';

const MoreButton = ({ white }: { white?: boolean }) => {
  return (
    <S.MoreButtonWrap white={white}>
      เพิ่มเติม
      <Image
        src={white ? '/images/common/ic-main-more-w.svg' : '/images/common/ic-main-more-b.svg'}
        alt="More"
        width={14}
        height={20}
      />
    </S.MoreButtonWrap>
  );
};

export default MoreButton;
