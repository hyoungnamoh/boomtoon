import Image from 'next/image';
import styled from 'styled-components';

export const ForYouSectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 22px 0 50px 16px;
`;

export const ForYouSectionTitleRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ForYouSectionTitle = styled.span`
  font-size: 16px;
  color: #000000;
  margin-left: 10px;
`;

export const ForYouContent = styled.article`
  display: flex;
  flex-direction: column;
  width: 115.2px;
  cursor: pointer;
  position: relative;
  margin-right: 16px;
`;

export const ForYouContentThumbnail = styled(Image)`
  border-radius: 50%;
`;

export const ForYouDailyBadge = styled(Image)`
  align-self: center;
  position: absolute;
  top: 107px;
`;

export const ForYouContentTitle = styled.span`
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
  text-align: center;
  margin-top: 14px;
`;

export const Creator = styled.span`
  color: #757575;
  font-size: 12px;
  text-overflow: ellipsis;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.5;
  text-align: center;
  margin-top: 2px;
`;
