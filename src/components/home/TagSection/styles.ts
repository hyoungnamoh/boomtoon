import styled from 'styled-components';

export const TagSectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 28px 16px;
  background-color: #fff5fb;
`;

export const TagSectionTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Highlight = styled.strong`
  font-size: 20px;
  color: #fc3dab;
`;

export const TagSectionTitle = styled.strong`
  font-size: 20px;
  color: #212121;
  cursor: default;
`;

export const TagItem = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 38px;
  border-radius: 19px;
  box-shadow: rgb(247, 216, 234) 0px 2px 4px 0px;
  padding-left: 11px;
  padding-right: 14px;
  margin-right: 6px;
  margin-bottom: 4px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  min-width: fit-content;
`;

export const TagName = styled.span`
  font-size: 12px;
  color: rgb(54, 54, 54);
  font-weight: 400;
  margin-left: 8px;
`;
