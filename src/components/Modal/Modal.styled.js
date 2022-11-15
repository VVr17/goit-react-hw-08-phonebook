import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background-color: ${p => p.theme.colors.backdropColor};
`;
export const ModalStyled = styled.div`
  background-color: ${p => p.theme.colors.white};
  width: 95%;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  padding: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.boxShadow.second};
  border-radius: ${p => p.theme.radii.normal};

  ${p => p.theme.mediaQueries.medium} {
    width: 460px;
    padding: ${p => p.theme.space[4]}px;
  }

  ${p => p.theme.mediaQueries.large} {
    width: 500px;
    padding: ${p => p.theme.space[4]}px;
  }
`;
