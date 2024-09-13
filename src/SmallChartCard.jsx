import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const StyledSmallChartCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  minHeight: 358,
  minWidth: 240,
  width: 400,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.25),
  },
}));

const ChartHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  padding: theme.spacing(2.5, 2.5, 4),
  marginTop: theme.spacing(0.75),
  maxWidth: '100%',
  width: 285,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.25),
  },
}));

const SmallChartCard = () => {
  return (
    <StyledSmallChartCard>
      <ChartHeader>
        <Typography variant="h6" component="h2">
          Chart Title
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TrendingUpIcon color="success" fontSize="small" />
          <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
            1.10% Since yesterday
          </Typography>
        </Box>
      </ChartHeader>
      <ChartContainer>
        <Typography variant="caption" color="error" sx={{ alignSelf: 'flex-end', mr: 2 }}>
          300
        </Typography>
        <Box sx={{ display: 'flex', alignSelf: 'flex-start', mt: 0.625, textAlign: 'right' }}>
          <Typography variant="caption" color="secondary" sx={{ alignSelf: 'flex-end', mt: 6 }}>
            300
          </Typography>
          <Box
            component="img"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7ca1185-b796-4ddf-9fb7-a08265138dd0?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da"
            alt="Small chart"
            sx={{
              objectFit: 'contain',
              flexShrink: 0,
              maxWidth: '100%',
              aspectRatio: '1.21',
              width: 170,
            }}
          />
        </Box>
      </ChartContainer>
    </StyledSmallChartCard>
  );
};

export default SmallChartCard;