import * as S from './styles';

const TopBar = () => {
  return (
    <S.TopBarWrap>
      <S.SwitchContainer>
        <S.SwitchContentsContainer>
          <S.AdultSwitch src={'/images/nav/btn-pc-nav-adult-nor.svg'} />
        </S.SwitchContentsContainer>
      </S.SwitchContainer>
      <S.NavContainer>
        <S.LogoButton>
          <S.Logo src={'/images/nav/ic-pc-nav-home.svg'} />
        </S.LogoButton>
        <S.NavButtonContentContainer>
          <S.NavBarItemWrap>
            <S.NavBarItemImage src={'/images/nav/btn-nav-shop-nor.svg'} />
          </S.NavBarItemWrap>
          <S.NavBarItemWrap>
            <S.NavBarItemImage src={'/images/nav/btn-nav-gift-nor.svg'} />
          </S.NavBarItemWrap>
          <S.NavBarItemWrap>
            <S.NavBarItemImage src={'/images/nav/btn-nav-search-nor.svg'} />
          </S.NavBarItemWrap>
          <S.NavBarItemWrap>
            <S.NavBarItemImage src={'/images/nav/btn-nav-my-nor.svg'} />
          </S.NavBarItemWrap>
        </S.NavButtonContentContainer>
      </S.NavContainer>
    </S.TopBarWrap>
  );
};

export default TopBar;
