import MoreButton from '@/components/MoreButton';
import * as S from './styles';
import DragScroll from '@/components/DragScroll';
import { NEWEST_CONTENTS } from './constants';
import Image from 'next/image';

const NewSection = () => {
  return (
    <S.NewSectionWrap>
      <S.NewSectionTitleRow>
        <S.NewSectionTitle>เรื่องใหม่มาแรง</S.NewSectionTitle>
        <MoreButton />
      </S.NewSectionTitleRow>
      <DragScroll gap={13}>
        {NEWEST_CONTENTS.map(content => {
          return (
            <S.NewContent key={content.id}>
              <Image
                src={content.thumbnails.find(thumbnail => thumbnail.type === 'VERTICAL')?.imagePath || ''}
                width={157}
                height={206}
                alt={content.title}
              />
              {content.badge.up && (
                <S.UpImage src={'/images/common/ic-comm-badge-up.svg'} alt="up" width={28} height={28} />
              )}
              <S.NewContentTitleRow>
                {content.badge.scheduled && (
                  <Image src={'/images/common/badge-daily.svg'} width={32} height={14} alt="daily" />
                )}
                <S.NewContentTitle>{content.title}</S.NewContentTitle>
              </S.NewContentTitleRow>
              <S.ViewCountAndCreatorRow>
                <Image src={'/images/common/ic-comm-view.svg'} alt="view_count" width={16} height={16} />
                <S.ViewCount>{(content.viewCount / 1000).toFixed(1)}k</S.ViewCount>
                <S.Divider />
                <S.Creator>{content.creators}</S.Creator>
              </S.ViewCountAndCreatorRow>
            </S.NewContent>
          );
        })}
      </DragScroll>
    </S.NewSectionWrap>
  );
};

export default NewSection;
