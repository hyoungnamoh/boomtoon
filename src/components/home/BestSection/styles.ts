import Image from 'next/image';
import styled from 'styled-components';

export const BestSectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 8px 16px;
`;

export const BestSectionTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px 10px;
`;

export const BestSectionTitle = styled.strong`
  font-size: 20px;
  color: #212121;
`;

export const BestContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px;
  column-gap: 16px;
  row-gap: 12px;
  height: 396px;
  padding-bottom: 12px;
  flex-direction: column;
`;

export const BestContent = styled.article`
  display: flex;
  align-items: center;
  gap: 24px;
  cursor: pointer;
`;

export const Ranking = styled.span`
  font-weight: bold;
  font-size: 18px;
  width: 20px;
  height: 22px;
  position: relative;
`;

export const BestThumbnail = styled(Image)`
  border-radius: 4px;
`;

export const SoaredImage = styled(Image)`
  position: absolute;
  top: 1px;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  padding-right: 12px;
`;

export const BestContentTitle = styled.span`
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

export const ViewCountRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewCount = styled.span`
  color: #757575;
  font-size: 12px;
  margin-left: 2px;
  text-overflow: ellipsis;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
`;

export const Creator = styled.span`
  color: #757575;
  font-size: 12px;
  text-overflow: ellipsis;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.5;
`;
