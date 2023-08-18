import { styled } from "styled-components";
import RefreshIcon from '@mui/icons-material/Refresh';

export const StyledPlatformWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledLoading = styled(RefreshIcon)`
  animation-name: spin;
  animation-duration: 1000ms;
  animation-timing-function: linear;
  color: red;

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }
`;