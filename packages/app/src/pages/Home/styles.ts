import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.aside};
  border-right: 1px solid ${({ theme }) => theme.colors.gray_40};
  width: 100%;
  height: 100%;
`;
