import styled from '@emotion/styled';

export const ContactStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: ${p => p.theme.colors.backgroundContactCardColor}; */

  p {
    text-transform: capitalize;
    font-weight: ${p => p.theme.fontWeight.semiBold};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.18;

    ${p => p.theme.mediaQueries.smallOnly} {
      margin-bottom: ${p => p.theme.space[1]}px;
    }

    ${p => p.theme.mediaQueries.medium} {
      font-size: ${p => p.theme.fontSizes.s};

      :not(:last-of-type) {
        margin-right: ${p => p.theme.space[3]}px;
      }
    }

    ${p => p.theme.mediaQueries.large} {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }
`;
