import { useRouter } from 'next/router';
import * as S from './styles';

const TopBar = () => {
  const router = useRouter();
  return (
    <S.TopBarWrap>
      <S.SwitchContainer>
        <S.SwitchContentsContainer>
          <S.AdultSwitch src={'/images/nav/btn-pc-nav-adult-nor.svg'} />
        </S.SwitchContentsContainer>
      </S.SwitchContainer>
      <S.NavContainer>
        <S.LogoButton onClick={() => router.push('/')}>
          <S.Logo src={'/images/nav/ic-pc-nav-home.svg'} />
        </S.LogoButton>
        <S.NavButtonContentContainer>
          <S.NavBarItemButton>
            <S.NavBarItemImage src={'/images/nav/btn-nav-shop-nor.svg'} />
          </S.NavBarItemButton>
          <S.NavBarItemButton>
            <S.NavBarItemImage src={'/images/nav/btn-nav-gift-nor.svg'} />
          </S.NavBarItemButton>
          <S.NavBarItemButton>
            <S.NavBarItemImage src={'/images/nav/btn-nav-search-nor.svg'} />
          </S.NavBarItemButton>
          <S.NavBarItemButton>
            <S.NavBarItemImage src={'/images/nav/btn-nav-my-nor.svg'} />
          </S.NavBarItemButton>
        </S.NavButtonContentContainer>
      </S.NavContainer>
    </S.TopBarWrap>
  );
};

export default TopBar;
