import MoreButton from '@/components/MoreButton';
import * as S from './styles';
import DragScroll from '@/components/DragScroll';
import { FOR_YOU_CONTENTS } from './constants';
import Image from 'next/image';

const ForYouSection = () => {
  return (
    <S.ForYouSectionWrap>
      <S.ForYouSectionTitleRow>
        <Image src={'/images/common/ic-main-for-u.png'} alt="For you" width={72} height={42} />
        <S.ForYouSectionTitle>สนใจเรื่องนี้ไหม?</S.ForYouSectionTitle>
      </S.ForYouSectionTitleRow>
      <DragScroll>
        {FOR_YOU_CONTENTS.map(content => {
          return (
            <S.ForYouContent key={content.id}>
              <S.ForYouContentThumbnail
                src={content.thumbnails.find(thumbnail => thumbnail.type === 'SQUARE')?.imagePath || ''}
                width={115.2}
                height={115.2}
                alt={content.title}
              />
              {content.badge.scheduled && (
                <S.ForYouDailyBadge src={'/images/common/badge-daily.svg'} width={32} height={14} alt="daily" />
              )}
              <S.ForYouContentTitle>{content.title}</S.ForYouContentTitle>
              <S.Creator>{content.creators}</S.Creator>
            </S.ForYouContent>
          );
        })}
      </DragScroll>
    </S.ForYouSectionWrap>
  );
};

export default ForYouSection;
