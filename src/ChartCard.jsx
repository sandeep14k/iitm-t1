import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledChartCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  minWidth: 240,
  width: 400,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.25),
  },
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.75),
  alignItems: 'flex-end',
  paddingTop: theme.spacing(2.25),
  marginTop: theme.spacing(1),
  maxWidth: '100%',
  width: 352,
}));

const ChartBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexShrink: 0,
  backgroundColor: theme.palette.primary.main,
  width: 46,
}));

const ChartCard = () => {
  return (
    <StyledChartCard>
      <Typography variant="h6" component="h2" gutterBottom>
        Chart Title
      </Typography>
      <ChartContainer>
        <ChartBar sx={{ marginTop: 24, height: 14 }} />
        <ChartBar sx={{ marginTop: 14, height: 47 }} />
        <ChartBar sx={{ alignSelf: 'flex-start', marginTop: 3, height: 93 }} />
        <ChartBar sx={{ marginTop: 14, height: 49 }} />
        <ChartBar sx={{ alignSelf: 'flex-start', height: 105 }} />
        <ChartBar sx={{ marginTop: 20, height: 23 }} />
      </ChartContainer>
    </StyledChartCard>
  );
};

export default ChartCard;