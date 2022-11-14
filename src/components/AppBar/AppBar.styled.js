import styled from '@emotion/styled';

export const Header = styled.header`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.accentBackgroundColor};

  ${p => p.theme.mediaQueries.medium} {
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[4]}px;
  }

  ${p => p.theme.mediaQueries.large} {
    padding-right: ${p => p.theme.space[6]}px;
    padding-left: ${p => p.theme.space[6]}px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  ${p => p.theme.mediaQueries.medium} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 768px;
  }

  ${p => p.theme.mediaQueries.large} {
    max-width: 900px;
  }
`;
