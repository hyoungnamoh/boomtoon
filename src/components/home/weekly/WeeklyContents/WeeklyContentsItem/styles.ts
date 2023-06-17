import styled from 'styled-components';

export const WeeklyContentsItemWrap = styled.button`
  display: flex;
  flex-direction: column;
  max-width: 161.25px;
  margin: 0 4px;
  cursor: pointer;
  margin-bottom: 18px;
`;

export const ContentTitle = styled.span`
  font-size: 16px;
  color: #212121;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  margin-top: 10px;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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