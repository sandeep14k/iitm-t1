import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledWelcomeCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: theme.spacing(1.5),
  height: '100%',
  backgroundColor: theme.palette.info.light,
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

const WelcomeContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: theme.spacing(3),
  minWidth: 240,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.25),
  },
}));

const WelcomeCard = () => {
  return (
    <StyledWelcomeCard>
      <WelcomeContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Welcome to your dashboard!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!
        </Typography>
      </WelcomeContent>
      <Box
        component="img"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8b2ae66210dad1c5c08d7710a891c5ebb7681cde375a3dabd6f66f239a838b7?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da"
        alt="Welcome illustration"
        sx={{
          objectFit: 'contain',
          flex: 1,
          width: '100%',
          aspectRatio: '1.73',
          minWidth: 240,
        }}
      />
    </StyledWelcomeCard>
  );
};

export default WelcomeCard;