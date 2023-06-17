import styled from 'styled-components';

export const TabItemContainer = styled.header`
  position: sticky;
  top: 98px;
  z-index: 10;
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 48px;
`;

export const TabItem = styled.button<{ isSelected?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: ${({ isSelected }) => (isSelected ? '700' : '400')};
  overflow: hidden;
  line-height: 1.5;
  color: ${({ isSelected }) => (isSelected ? '#FC3DAB' : '#757575')};
  border-bottom: ${({ isSelected }) => (isSelected ? '1px solid #fc3dab' : 'none')};
`;
