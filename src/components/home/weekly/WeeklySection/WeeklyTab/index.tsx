import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { WEEKLY_TAB_LIST } from './constants';
import * as S from './styles';

const WeeklyTab = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: (typeof WEEKLY_TAB_LIST)[number];
  setSelectedTab: Dispatch<SetStateAction<(typeof WEEKLY_TAB_LIST)[number]>>;
}) => {
  const onClickWeeklyTab = (tabItem: (typeof WEEKLY_TAB_LIST)[number]) => {
    window.localStorage.setItem('weeklyContentsType', tabItem.key);
    setSelectedTab(tabItem);
  };

  return (
    <S.WeeklyTabItemContainer>
      {WEEKLY_TAB_LIST.map(tabItem => (
        <S.WeeklyTabItem
          key={tabItem.key}
          isSelected={tabItem.key === selectedTab?.key}
          onClick={() => onClickWeeklyTab(tabItem)}
        >
          {tabItem.value}
        </S.WeeklyTabItem>
      ))}
    </S.WeeklyTabItemContainer>
  );
};

export default WeeklyTab;
