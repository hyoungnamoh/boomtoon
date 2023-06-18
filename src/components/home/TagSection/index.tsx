import MoreButton from '@/components/MoreButton';
import * as S from './styles';
import DragScroll from '@/components/DragScroll';
import { TAG_LIST } from './constants';
import Image from 'next/image';

const TagSection = () => {
  return (
    <S.TagSectionWrap>
      <S.TagSectionTitleRow>
        <S.TagSectionTitle>
          สไตล์ที่ใช่ <br />
          ให้ <S.Highlight>BOOMTOON</S.Highlight> ค้นหาให้เอง
        </S.TagSectionTitle>
      </S.TagSectionTitleRow>
      <DragScroll>
        {TAG_LIST.map(tag => {
          return (
            <S.TagItem key={tag.id}>
              <Image src={'/images/common/ic-comm-tag-p.svg'} width={10} height={10} alt={tag.name} />
              <S.TagName>{tag.name}</S.TagName>
            </S.TagItem>
          );
        })}
      </DragScroll>
    </S.TagSectionWrap>
  );
};

export default TagSection;
