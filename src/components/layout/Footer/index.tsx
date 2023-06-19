import Image from 'next/image';
import * as S from './styles';
import Accordion from '@/components/Accordion/inedx';
import useAccordion from '@/components/Accordion/useAccordion';

const Footer = () => {
  const { handleButtonClick, parentRef, childRef, open } = useAccordion({ defaultOpen: true });

  return (
    <S.FooterWrap>
      <S.FooterItemContainer>
        <S.AgreementAndBrandLinkRow>
          <S.AgreementLinkContainer>
            <S.AgreementLink>ข้อตกลงการใช้งาน</S.AgreementLink>
            <S.AgreementLink>นโยบายความเป็นส่วนตัว</S.AgreementLink>
          </S.AgreementLinkContainer>
          <S.BrandLinkButtonContainer>
            <S.BrandLinkButton>
              <Image src={'/images/common/ic-footer-twitter.svg'} alt={'twitter link'} width={24} height={24} />
            </S.BrandLinkButton>
            <S.BrandLinkButton>
              <Image src={'/images/common/ic-footer-fb.svg'} alt={'facebook link'} width={24} height={24} />
            </S.BrandLinkButton>
            <S.BrandLinkButton>
              <Image src={'/images/common/ic-footer-tiktok.svg'} alt={'tiktoc link'} width={24} height={24} />
            </S.BrandLinkButton>
            <S.BrandLinkButton>
              <Image src={'/images/common/ic-footer-insta.svg'} alt={'insta link'} width={24} height={24} />
            </S.BrandLinkButton>
            <S.BrandLinkButton>
              <Image src={'/images/common/ic-footer-youtube.svg'} alt={'youtube link'} width={24} height={24} />
            </S.BrandLinkButton>
          </S.BrandLinkButtonContainer>
        </S.AgreementAndBrandLinkRow>
        <S.Divider />
        <S.CompanyInfoContainer>
          <S.AccordionRow>
            <Image src={'/images/nav/ic-nav-logo-g.png'} alt={'company'} width={117} height={24} />
            <S.AccordionButton onClick={handleButtonClick}>
              KIDARISTUDIO INC.
              <Image
                src={open ? '/images/common/btn-comm-acc-open.svg' : '/images/common/btn-comm-acc-close.svg'}
                alt="company info accordion"
                width={14}
                height={24}
              />
            </S.AccordionButton>
          </S.AccordionRow>
          <Accordion
            parentRef={parentRef}
            childRef={childRef}
            content={
              <S.FooterAccordionContent open={!!open}>
                เนื้อหาทั้งหมดในเว็บไซต์ Boomtoon นี้สงวนลิขสิทธิ์ตามกฎหมายลิขสิทธิ์
                ห้ามนำเนื้อหาทั้งหมดหรือบางส่วนดัดแปลง คัดลอก นำไปใช้ หรือนำไปเผยแพร่ต่อ ไม่ว่าในกรณีใดๆ
                ทั้งสิ้นโดยไม่ได้รับอนุญาตจากเจ้าของลิขสิทธิ์ หรือ Kidari Studio หากฝ่าฝืนมีโทษสูงสุดตามกฎหมายลิขสิทธิ์
              </S.FooterAccordionContent>
            }
          />
          <S.CompanyInfo>ⓒ 2021 KIDARISTUDIO INC. All rights reserved</S.CompanyInfo>
        </S.CompanyInfoContainer>
      </S.FooterItemContainer>
    </S.FooterWrap>
  );
};

export default Footer;
