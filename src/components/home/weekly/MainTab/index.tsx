import * as S from './styles';

const MainTab = () => {
  return (
    <S.TabItemContainer>
      <S.TabItem isSelected={true}>Daily</S.TabItem>
      <S.TabItem>Best</S.TabItem>
      <S.TabItem>Free</S.TabItem>
      <S.TabItem>BL</S.TabItem>
    </S.TabItemContainer>
  );
};

export default MainTab;
