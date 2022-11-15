import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  min-width: 100px;
  min-height: 30px;

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeight.semiBold};
  text-transform: uppercase;
  cursor: pointer;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondaryColor};
  background-color: ${p => {
    switch (p.name) {
      case 'primary':
        return p.theme.colors.secondaryColor;
      case 'darkMode':
        return 'transparent';
      default:
        return 'transparent';
    }
  }};
  color: ${p => {
    switch (p.name) {
      case 'primary':
        return p.theme.colors.secondaryTextColor;
      case 'darkMode':
        return p.theme.colors.secondaryTextColor;
      default:
        return p.theme.colors.secondaryColor;
    }
  }};
  border-color: ${p => {
    switch (p.name) {
      case 'primary':
        return p.theme.colors.secondaryColor;
      case 'darkMode':
        return p.theme.colors.secondaryTextColor;
      default:
        return p.theme.colors.secondaryColor;
    }
  }};
  border-radius: ${p => p.theme.radii.normal};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${p =>
      p.name === 'darkMode'
        ? 'transparent'
        : p.theme.colors.accentBackgroundColor};
    border-color: ${p =>
      p.name === 'darkMode'
        ? p.theme.colors.secondaryTextColor
        : p.theme.colors.accentBackgroundColor};
    color: ${p => p.theme.colors.accent};
    box-shadow: 0px 4px 4px ${p => p.theme.colors.btnShadowColor};
  }

  /* :not(:last-of-type) {
    margin-right: ${p => p.theme.space[3]}px;
  } */
`;
