import styled from 'styled-components';

export const TopButtonWrap = styled.aside<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  cursor: pointer;
`;
