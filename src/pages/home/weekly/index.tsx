import Carousel from '@/components/Carousel';
import WeeklySection from '@/components/home/weekly/WeeklySection';
import MainTab from '@/components/MainTab';
import { WEEKLY_BANNER_IMAGES } from './constants';

const WeeklyPage = () => {
  return (
    <>
      <MainTab selectedTab={'Daily'} />
      <Carousel imageList={WEEKLY_BANNER_IMAGES} width={720} height={305} delay={3000} />
      <WeeklySection />
    </>
  );
};

export default WeeklyPage;
