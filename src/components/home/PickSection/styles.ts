import Image from 'next/image';
import styled from 'styled-components';

export const PickSectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 34px 15px 33px;
  background-color: #212121;
`;

export const PickSectionTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 14px;
`;

export const PickSectionTitle = styled.strong`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #fc3dab;
  gap: 8px;
`;

export const PickContent = styled.article`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 277px;
  cursor: pointer;
  margin: 0 9px;
`;

export const BestImage = styled(Image)`
  margin-top: 12px;
  width: 36px;
  height: 16px;
  padding: 0 4px 2px 0px;
`;

export const PickContentTitle = styled.span`
  margin-left: 4px;
  color: #212121;
  font-size: 16px;
  width: 100%;
  color: #212121;
  font-size: 16px;
  text-overflow: ellipsis;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
`;

export const PickContenntSubTitle = styled.span`
  color: #fff;
  font-size: 12px;
`;
