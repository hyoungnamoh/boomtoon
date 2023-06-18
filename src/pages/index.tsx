import Carousel from '@/components/Carousel';
import { HOME_BANNER_IMAGES } from './constants';
import MainTab from '@/components/MainTab';
import NewSection from '@/components/home/NewSection';
import TodaySection from '@/components/home/TodaySection';
import TagSection from '@/components/home/TagSection';
import BestSection from '@/components/home/BestSection';
import Image from 'next/image';
import ForYouSection from '@/components/home/ForYouSection';
import PickSection from '@/components/home/PickSection';

export default function Home() {
  return (
    <>
      <Carousel imageList={HOME_BANNER_IMAGES} width={720} height={450} delay={3000} />
      <MainTab />
      <NewSection />
      <TodaySection />
      <TagSection />
      <BestSection />
      <Image src={'/images/banner/badposition.webp'} alt={'2023 banner thumbnail1'} width={720} height={300} priority />
      <ForYouSection />
      <PickSection />
      {/* <div style={{ width: '100%', height: 270 }}> */}
      <Image
        src={'/images/banner/1677489460859.webp'}
        alt={'2023 banner thumbnail2'}
        width={720}
        height={270}
        priority
      />
      {/* </div> */}
    </>
  );
}
