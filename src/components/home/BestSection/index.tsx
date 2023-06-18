import MoreButton from '@/components/MoreButton';
import * as S from './styles';
import DragScroll from '@/components/DragScroll';
import { BEST_CONTENTS } from './constants';
import Image from 'next/image';

const BestSection = () => {
  return (
    <S.BestSectionWrap>
      <S.BestSectionTitleRow>
        <S.BestSectionTitle>Best</S.BestSectionTitle>
        <MoreButton />
      </S.BestSectionTitleRow>
      <S.BestContentContainer>
        {BEST_CONTENTS.map(content => {
          return (
            <S.BestContent key={content.id}>
              <Image
                src={content.thumbnails.find(thumbnail => thumbnail.type === 'SQUARE')?.imagePath || ''}
                alt={content.title}
                width={120}
                height={120}
              />
              <S.Ranking>
                {content.rankingNo}
                {content.rankingGap > 0 && (
                  <S.SoaredImage src={'/images/common/ic-ranking-up-p.svg'} alt="soared" width={8} height={8} />
                )}
              </S.Ranking>
              <S.ContentInfo>
                <S.BestContentTitle>{content.title}</S.BestContentTitle>
                <S.Creator>{content.creators}</S.Creator>
                <S.ViewCountRow>
                  <Image src={'/images/common/ic-comm-view.svg'} alt="view_count" width={16} height={16} />
                  <S.ViewCount>{content.viewCount}</S.ViewCount>
                </S.ViewCountRow>
              </S.ContentInfo>
            </S.BestContent>
          );
        })}
      </S.BestContentContainer>
    </S.BestSectionWrap>
  );
};

export default BestSection;
