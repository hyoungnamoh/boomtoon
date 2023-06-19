import Image from 'next/image';
import styled from 'styled-components';

export const NewSectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 8px;
`;

export const NewSectionTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px 10px;
`;

export const NewSectionTitle = styled.strong`
  font-size: 20px;
  color: #212121;
`;

export const NewContent = styled.article`
  display: flex;
  flex-direction: column;
  height: 276px;
  width: 157px;
  cursor: pointer;
  position: relative;
  margin: 0 6.5px;
`;

export const UpImage = styled(Image)`
  position: absolute;
  right: 0;
`;

export const NewContentTitleRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const NewContentTitle = styled.span`
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

export const ViewCountAndCreatorRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewCount = styled.span`
  color: #757575;
  font-size: 12px;
  margin-left: 2px;
`;

export const Creator = styled.span`
  color: #757575;
  font-size: 12px;
  text-overflow: ellipsis;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.5;
  max-width: 90px;
`;

export const Divider = styled.div`
  width: 1px;
  margin: 0 8px;
  height: 60%;
  background-color: #e0e0e0;
`;
