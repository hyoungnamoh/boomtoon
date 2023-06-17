import { useEffect, useState } from 'react';
import WeeklyContents from './WeeklyContents';
import WeeklyTab from './WeeklyTab';
import { WEEKLY_TAB_LIST } from './WeeklyTab/constants';

const WeeklySection = () => {
  const [selectedTab, setSelectedTab] = useState<(typeof WEEKLY_TAB_LIST)[number]>(
    WEEKLY_TAB_LIST[new Date().getDay()],
  );

  useEffect(() => {
    const storageData = window.localStorage.getItem('weeklyContentsType');
    const initailTab =
      WEEKLY_TAB_LIST.find(tabItem => tabItem.key === storageData) || WEEKLY_TAB_LIST[new Date().getDay()];

    setSelectedTab(initailTab);
  }, []);

  return (
    <>
      <WeeklyTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <WeeklyContents selectedTab={selectedTab} />
    </>
  );
};

export default WeeklySection;
