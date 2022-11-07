import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  margin-bottom: 1rem;
  padding: 1rem 1.6rem;
  background: ${({ theme }) => theme.colors.aside};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_40};
  z-index: ${({ theme }) => theme.layers.menu};
  gap: 1rem;
`;
