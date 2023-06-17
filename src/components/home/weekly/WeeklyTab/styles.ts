import styled from 'styled-components';

export const WeeklyTabItemContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 56px;
  align-items: center;
`;

export const WeeklyTabItem = styled.button<{ isSelected?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 16px;
  cursor: pointer;
  height: 32px;

  font-weight: ${({ isSelected }) => (isSelected ? '700' : '400')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#212121')};
  background-color: ${({ isSelected }) => (isSelected ? '#fc3dab' : '#fff')};
`;
