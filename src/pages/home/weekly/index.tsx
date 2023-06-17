import MainContentContainer from '@/components/layout/MainContentContainer';
import TopBar from '@/components/layout/TopBar';
import MainTab from '@/components/home/weekly/MainTab';
import Carousel from '@/components/Carousel';
import Footer from '@/components/layout/Footer';
import WeeklySection from '@/components/home/weekly/WeeklySection';
import TopButton from '@/components/TopButton';

const WEEKLY_BANNER_IMAGES = [
  '/images/banner/weekly/weekly-banner-1.webp',
  '/images/banner/weekly/weekly-banner-2.webp',
];

const WeeklyPage = () => {
  return (
    <>
      <TopBar />
      <MainContentContainer>
        <MainTab />
        <Carousel imageList={WEEKLY_BANNER_IMAGES} width={720} height={305} delay={3000} />
        <WeeklySection />
      </MainContentContainer>
      <Footer />
      <TopButton />
    </>
  );
};

export default WeeklyPage;
