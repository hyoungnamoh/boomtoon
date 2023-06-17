import Image from 'next/image';
import * as S from './styles';
import { WeeklyContent } from '../types';

const WeeklyContentsItem = ({ content }: { content: WeeklyContent }) => {
  return (
    <S.WeeklyContentsItemWrap>
      <Image
        src={content.thumbnails.find(thumbnail => thumbnail.type === 'SQUARE')?.imagePath || ''}
        width={162}
        height={161}
        alt={content.title}
      />
      {content.badge.up && <S.UpImage src={'/images/common/ic-comm-badge-up.svg'} alt="up" width={28} height={28} />}
      <S.ContentTitle>{content.title}</S.ContentTitle>
      <S.ViewCountAndCreatorRow>
        <Image src={'/images/common/ic-comm-view.svg'} alt="view_count" width={16} height={16} />
        <S.ViewCount>{(content.viewCount / 1000).toFixed(1)}k</S.ViewCount>
        <S.Divider />
        <S.Creator>{content.creators}</S.Creator>
      </S.ViewCountAndCreatorRow>
    </S.WeeklyContentsItemWrap>
  );
};

export default WeeklyContentsItem;
