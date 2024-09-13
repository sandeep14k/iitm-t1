import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLargeChartCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  minHeight: 358,
  minWidth: 240,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.25),
    maxWidth: '100%',
  },
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  width: '100%',
  minHeight: 268,
  marginTop: theme.spacing(1.25),
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}));

const ChartBars = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  zIndex: 10,
  flexWrap: 'wrap',
  gap: theme.spacing(1.25),
  alignItems: 'flex-end',
  margin: `0 ${theme.spacing(0.75)}`,
  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(0.625),
  },
}));

const ChartBarGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  gap: theme.spacing(0.25),
  marginTop: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(2.5),
  },
}));

const ChartBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexShrink: 0,
  backgroundColor: theme.palette.primary.main,
  width: 41,
}));

const ChartBarSecondary = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexShrink: 0,
  backgroundColor: theme.palette.secondary.main,
  width: 41,
}));

const LargeChartCard = () => {
  return (
    <StyledLargeChartCard>
      <Typography variant="h6" component="h2" gutterBottom>
        Chart Title
      </Typography>
      <ChartContainer>
        <Box
          component="img"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0afc35becdacfcf002eed8b129d5e70aad170afc06615e5cd0490ba40eaf73f9?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da"
          alt="Chart background"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <ChartBars>
          <ChartBarGroup>
            <ChartBar sx={{ height: 78 }} />
            <ChartBarSecondary sx={{ height: 33, alignSelf: 'flex-end', marginTop: 2.75 }} />
          </ChartBarGroup>
          <ChartBarGroup>
            <ChartBar sx={{ height: 74 }} />
            <ChartBarSecondary sx={{ height: 64, alignSelf: 'flex-start', marginTop: 0.625 }} />
          </ChartBarGroup>
          <ChartBarGroup sx={{ alignSelf: 'stretch' }}>
            <ChartBar sx={{ height: 234 }} />
            <ChartBarSecondary sx={{ height: 167, alignSelf: 'flex-end', marginTop: 4 }} />
          </ChartBarGroup>
          <ChartBarGroup>
            <ChartBar sx={{ height: 137 }} />
            <ChartBarSecondary sx={{ height: 131, alignSelf: 'flex-start', marginTop: 0.375 }} />
          </ChartBarGroup>
          <ChartBarGroup>
            <ChartBar sx={{ height: 154, alignSelf: 'flex-start', marginTop: 0.5 }} />
            <ChartBarSecondary sx={{ height: 161 }} />
          </ChartBarGroup>
          <ChartBarGroup>
            <ChartBar sx={{ height: 167 }} />
            <ChartBarSecondary sx={{ height: 127, alignSelf: 'flex-end', marginTop: 2.5 }} />
          </ChartBarGroup>
        </ChartBars>
      </ChartContainer>
    </StyledLargeChartCard>
  );
};

export default LargeChartCard;