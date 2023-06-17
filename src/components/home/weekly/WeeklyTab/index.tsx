import * as S from './styles';

const WeeklyTab = () => {
  return (
    <S.WeeklyTabItemContainer>
      <S.WeeklyTabItem>ทั้งหมด</S.WeeklyTabItem>
      <S.WeeklyTabItem>MON</S.WeeklyTabItem>
      <S.WeeklyTabItem>TUE</S.WeeklyTabItem>
      <S.WeeklyTabItem>WED</S.WeeklyTabItem>
      <S.WeeklyTabItem>THU</S.WeeklyTabItem>
      <S.WeeklyTabItem isSelected={true}>FRI</S.WeeklyTabItem>
      <S.WeeklyTabItem>SAT</S.WeeklyTabItem>
      <S.WeeklyTabItem>SUN</S.WeeklyTabItem>
      <S.WeeklyTabItem>ทุกสิบวัน</S.WeeklyTabItem>
    </S.WeeklyTabItemContainer>
  );
};

export default WeeklyTab;
