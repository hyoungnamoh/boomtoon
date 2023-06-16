import styled from 'styled-components';

export const TopBarWrap = styled.header`
  position: sticky;
  z-index: 3000;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 98px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(224, 224, 224);
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  padding-right: 20px;
  background-color: rgb(252, 61, 171);
`;

export const SwitchContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 720px;
`;

export const AdultSwitch = styled.img`
  cursor: pointer;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 67px;
  max-width: 720px;
`;

export const LogoButton = styled.button``;

export const Logo = styled.img`
  padding-left: 5px;
  padding-right: 5px;
  width: 32px;
`;

export const NavButtonContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const NavBarItemWrap = styled.span`
  position: relative;
  display: flex;
  width: 50px;
  height: 50px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
`;

export const NavBarItemImage = styled.img`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 22px;
  height: 22px;
  object-fit: contain;
`;
