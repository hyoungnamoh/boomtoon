import MoreButton from '@/components/MoreButton';
import * as S from './styles';
import DragScroll from '@/components/DragScroll';
import { TODAY_CONTENTS } from './constants';
import Image from 'next/image';

const TodaySection = () => {
  return (
    <S.TodaySectionWrap>
      <S.TodaySectionTitleRow>
        <S.TodaySectionTitle>
          <S.Today>SATURDAY</S.Today> SPECIAL
        </S.TodaySectionTitle>
        <MoreButton />
      </S.TodaySectionTitleRow>
      <DragScroll>
        {TODAY_CONTENTS.map(content => {
          return (
            <S.TodayContent key={content.id}>
              <Image
                src={content.thumbnails.find(thumbnail => thumbnail.type === 'MAIN')?.imagePath || ''}
                width={144}
                height={96}
                alt={content.title}
              />
              {content.badge.up && (
                <S.UpImage src={'/images/common/ic-comm-badge-up.svg'} alt="up" width={28} height={28} />
              )}
              <S.TodayContentTitleRow>
                {content.badge.scheduled && (
                  <Image src={'/images/common/badge-daily.svg'} width={32} height={14} alt="daily" />
                )}
                <S.TodayContentTitle>{content.title}</S.TodayContentTitle>
              </S.TodayContentTitleRow>
              <S.ViewCountAndCreatorRow>
                <Image src={'/images/common/ic-comm-view.svg'} alt="view_count" width={16} height={16} />
                <S.ViewCount>{(content.viewCount / 1000).toFixed(1)}k</S.ViewCount>
                <S.Divider />
                <S.Creator>{content.creators}</S.Creator>
              </S.ViewCountAndCreatorRow>
            </S.TodayContent>
          );
        })}
      </DragScroll>
    </S.TodaySectionWrap>
  );
};

export default TodaySection;
