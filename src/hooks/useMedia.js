import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export const useMedia = () => {
  const theme = useTheme();
  const matchesTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return { matchesTablet, matchesMobile };
};
