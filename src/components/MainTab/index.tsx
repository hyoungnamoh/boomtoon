import { useRouter } from 'next/router';
import { MAIN_TAB_LIST } from './constants';
import * as S from './styles';

const MainTab = ({ selectedTab }: { selectedTab?: (typeof MAIN_TAB_LIST)[number] }) => {
  const router = useRouter();
  return (
    <S.TabItemContainer>
      {MAIN_TAB_LIST.map(tab => {
        return (
          <S.TabItem
            key={tab}
            isSelected={tab === selectedTab}
            onClick={tab === 'Daily' ? () => router.push('/home/weekly') : undefined}
          >
            {tab}
          </S.TabItem>
        );
      })}
    </S.TabItemContainer>
  );
};

export default MainTab;
