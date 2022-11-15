import styled from '@emotion/styled';

export const ContactStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;

  ${p => p.theme.mediaQueries.medium} {
    flex-direction: row;
  }

  p {
    text-transform: capitalize;
    font-weight: ${p => p.theme.fontWeight.semiBold};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.18;

    ${p => p.theme.mediaQueries.medium} {
      font-size: ${p => p.theme.fontSizes.s};
    }

    ${p => p.theme.mediaQueries.large} {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }
`;
