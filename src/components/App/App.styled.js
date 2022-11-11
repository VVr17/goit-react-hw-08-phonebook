import styled from '@emotion/styled';

export const Title = styled.h1`
  display: block;
  padding-top: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.accentTextColor};
  line-height: 1.18;
  letter-spacing: 0.05em;
  text-align: center;

  ${p => p.theme.mediaQueries.large} {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Text = styled.p`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeight.semiBold};
`;
