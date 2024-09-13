import React from 'react';
import { Box, Container, Grid, Typography, TextField, Avatar, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WelcomeCard from './WelcomeCard';
import ChartCard from './ChartCard';
import StatCard from './StatCard';
import LargeChartCard from './LargeChartCard';
import SmallChartCard from './SmallChartCard';

const StyledDashboard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: theme.palette.grey[100],
}));

const StyledSidebar = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
  minHeight: '945px',
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 3),
  width: '97%',
  backgroundColor: theme.palette.background.paper,
  minHeight: '72px',
  boxShadow: '0px 2px 2px rgba(163, 171, 185, 0.26)',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.25),
  },
}));

const StyledSearchForm = styled(TextField)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.625),
  alignSelf: 'stretch',
  margin: 'auto 0',
  backgroundColor: theme.palette.grey[200],
  borderRadius: '54px',
  width: '261px',
  '& .MuiInputBase-root': {
    paddingLeft: theme.spacing(1),
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
  },
}));

const StyledUserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center',
  alignSelf: 'stretch',
  margin: 'auto 0',
  fontSize: '0.875rem',
  fontWeight: 500,
  letterSpacing: '0.05em',
  lineHeight: 1,
  textAlign: 'right',
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  return (
    <StyledDashboard>
      <StyledSidebar>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, bgcolor: 'grey.200', minHeight: 72 }}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6205158143242dff97436b34a8581e7ae319999a2c17927eaeee66af70b9be95?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da" alt="Logo" style={{ width: 84, aspectRatio: '3.82' }} />
        </Box>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a943f9ab51c35ea1c19496efa9065ef082aae3245c9b865c701374d27c253331?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da" alt="Navigation" style={{ alignSelf: 'center', width: 200, aspectRatio: '0.57' }} />
      </StyledSidebar>
      <Box sx={{ flexGrow: 1, flexShrink: 0, alignSelf: 'flex-start', width: 'fit-content', maxWidth: '100%' }}>
        <StyledHeader>
          <StyledSearchForm
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
          <StyledUserInfo>
            <IconButton size="small">
              <NotificationsIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body2">Matt Appleyard</Typography>
            <Avatar src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b283449c7482b8e977dcfe5782bcf5b93cc8634216e9c8719f864e8daa433b9?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da" />
          </StyledUserInfo>
        </StyledHeader>
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <WelcomeCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <ChartCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard
                title="CHART TITLE"
                value="2,643"
                change="+1.10%"
                chartSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4f755e2b1d304a61524d2c972a49f6a2ac3db6178bfc3cbe2fc0e0bcb3da54eb?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard
                title="CHART TITLE"
                value="2,643"
                change="+1.10%"
                chartSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fa058d5249ba7535aa310badd69214b733930e2743ca60766d3750109fa3ce30?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard
                title="CHART TITLE"
                value="2,643"
                change="+1.10%"
                chartSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/29bb40c644bf538b68ce3dd71804cabdbeded6194ebda6dc5f30313d654b2aab?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <LargeChartCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <SmallChartCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </StyledDashboard>
  );
};

export default Dashboard;