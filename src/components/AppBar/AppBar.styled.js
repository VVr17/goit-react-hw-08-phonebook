import styled from '@emotion/styled';

export const Header = styled.header`
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.accentBackgroundColor};

  ${p => p.theme.mediaQueries.medium} {
    display: flex;
    justify-content: space-between;
  }
`;
