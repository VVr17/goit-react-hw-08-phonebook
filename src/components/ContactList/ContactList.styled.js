import styled from '@emotion/styled';

export const Contacts = styled.ul`
  list-style: none;

  li {
    padding: ${p => p.theme.space[2]}px;
    border-radius: ${p => p.theme.space[1]}px;
    box-shadow: ${p => p.theme.boxShadow.first};
    background-color: ${p => p.theme.colors.backgroundContactCardColor};

    :not(:last-of-type) {
      margin-bottom: ${p => p.theme.space[2]}px;
    }

    ${p => p.theme.mediaQueries.medium} {
      padding: ${p => p.theme.space[3]}px;
    }

    ${p => p.theme.mediaQueries.large} {
      padding: ${p => p.theme.space[4]}px;
    }
  }
`;
