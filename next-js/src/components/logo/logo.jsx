import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export const Logo = forwardRef(
  ({ href = '/', isSingle = false, disableLink = false, sx, className, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_MAIN = theme.vars.palette.primary.main;

    const singleLogo = (
      <Box
        component="img"
        alt="logo"
        src={`${CONFIG.assetsDir}/assets/images/home/logotipo-fradema-single.png`}
        sx={{
          width: 1200,
          height: 180,
          display: { xs: 'none', md: 'block' },
        }}
      />
    );

    const fullLogo = (
      <img
        component="img"
        alt="logo"
        src={`${CONFIG.assetsDir}/assets/images/home/logotipo-fradema.png`}
        sx={{
          width: 420,
          height: 120,
        }}
      />
    );

    const baseStyles = {
      flexShrink: 0,
      color: 'inherit',
      display: 'inline-flex',
      verticalAlign: 'middle',
      width: isSingle ? 520 : 280,
      height: isSingle ? 60 : 60,
      ...sx,
    };

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : '')}
        aria-label="logo"
        sx={{
          ...baseStyles,
          ...(disableLink && { pointerEvents: 'none' }),
        }}
        {...other}
      >
        {isSingle ? singleLogo : fullLogo}
      </Box>
    );
  }
);
