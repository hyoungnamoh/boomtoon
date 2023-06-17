import styled, { keyframes } from 'styled-components';

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
`;

export const FooterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
`;

export const AgreementAndBrandLinkRow = styled.div`
  display: flex;
`;

export const AgreementLinkContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  padding: 16px;
`;

export const AgreementLink = styled.button`
  display: flex;
  flex: 1;
  font-size: 12px;
  color: #363636;
  font-weight: 400;
  height: 38px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const BrandLinkButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

export const BrandLinkButton = styled.button``;

export const CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 16px 67px;
`;

export const AccordionRow = styled.div`
  display: flex;
  align-items: center;
`;

export const AccordionButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #363636;
  font-weight: 700;
  margin-left: 8px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const FooterAccordionContent = styled.p<{ open: boolean }>`
  display: inline-block;
  font-size: 10px;
  color: #363636;
  font-weight: 400;
  white-space: pre-wrap;
  padding-top: 20px;
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 1s forwards;
  transition: height 1s forwards;
`;

export const CompanyInfo = styled.p`
  font-size: 10px;
  color: #757575;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 16px;
`;
