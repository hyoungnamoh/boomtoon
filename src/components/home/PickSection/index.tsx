import MoreButton from '@/components/MoreButton';
import * as S from './styles';
import DragScroll from '@/components/DragScroll';
import { PICK_CONTENTS } from './constants';
import Image from 'next/image';

const PickSection = () => {
  return (
    <S.PickSectionWrap>
      <S.PickSectionTitleRow>
        <S.PickSectionTitle>
          BOOMTOON’s
          <Image src={'/images/ic-main-pick.webp'} width={48} height={24} alt="pick" />
        </S.PickSectionTitle>
        <MoreButton white />
      </S.PickSectionTitleRow>
      <DragScroll>
        {PICK_CONTENTS.map(content => {
          return (
            <S.PickContent key={content.id}>
              <Image src={content.thumbnail} width={150} height={198} alt={content.title} />
              {content.badge && (
                <S.BestImage src={'/images/common/badge-best.svg'} width={32} height={14} alt="daily" />
              )}
              <S.PickContentTitle>{content.title}</S.PickContentTitle>
              <S.PickContenntSubTitle>{content.subTitle}</S.PickContenntSubTitle>
            </S.PickContent>
          );
        })}
      </DragScroll>
    </S.PickSectionWrap>
  );
};

export default PickSection;
