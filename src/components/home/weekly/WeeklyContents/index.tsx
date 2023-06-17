import WeeklyContentsItem from './WeeklyContentsItem';
import { WEEKLY_CONTENTS } from './constants';
import * as S from './styles';

const WeeklyContents = () => {
  return (
    <S.WeeklyContentsContainer>
      {WEEKLY_CONTENTS.map(content => {
        return <WeeklyContentsItem key={content.id} content={content} />;
      })}
    </S.WeeklyContentsContainer>
  );
};

export default WeeklyContents;
