import { WEEKLY_TAB_LIST } from '../WeeklyTab/constants';
import WeeklyContentsItem from './WeeklyContentsItem';
import { WEEKLY_CONTENTS } from './constants';
import * as S from './styles';
import { WeeklyContent } from './types';

const WeeklyContents = ({ selectedTab }: { selectedTab: (typeof WEEKLY_TAB_LIST)[number] }) => {
  return (
    <S.WeeklyContentsContainer>
      {WEEKLY_CONTENTS[selectedTab.key].map(content => {
        return <WeeklyContentsItem key={content.id} content={content} />;
      })}
    </S.WeeklyContentsContainer>
  );
};

export default WeeklyContents;
