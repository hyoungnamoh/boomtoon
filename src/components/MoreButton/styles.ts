import styled from 'styled-components';

export const MoreButtonWrap = styled.button<{ white?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ white }) => (white ? '#fff' : '#363636')};
  font-size: 12px;
`;
