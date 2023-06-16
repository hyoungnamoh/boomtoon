import { ReactNode } from 'react';
import * as S from './styles';

const MainContentContainer = ({ children }: { children: ReactNode }) => {
  return (
    <S.MainContentWrap>
      <S.MainContent>{children}</S.MainContent>
    </S.MainContentWrap>
  );
};

export default MainContentContainer;
