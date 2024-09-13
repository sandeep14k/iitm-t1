import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const StyledStatCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  minWidth: 240,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.25),
  },
}));

const StatContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 98,
});

const StatCard = ({ title, value, change, chartSrc }) => {
  return (
    <StyledStatCard>
      <StatContent>
        <Typography variant="caption" fontWeight="bold" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <TrendingUpIcon color="success" fontSize="small" />
          <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
            {change} Since yesterday
          </Typography>
        </Box>
      </StatContent>
      <Box
        component="img"
        src={chartSrc}
        alt="Stat chart"
        sx={{
          width: 140,
          aspectRatio: '1.43',
          objectFit: 'contain',
        }}
      />
    </StyledStatCard>
  );
};

export default StatCard;