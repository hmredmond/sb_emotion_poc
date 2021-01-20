import styled from '@emotion/styled/macro';
import { css } from '@emotion/react/macro';

export const Logo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: App-logo-spin infinite 20s linear;
  
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Styles = {
  title : { orange: css`color: orange`, 
  green : css`color: green`}
};