import React from 'react';
import NewestCard from './NewestCard';
import PopularCard from './PopularCard';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import type {} from '@mui/lab/themeAugmentation';
import { TabContext, TabList} from '@mui/lab';
import { Grid } from '@mui/material';
import Head from './Head';
import Search from './Search';
import { Container } from '@mui/system';

export default function LabTabs() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
    <Container>
      <Grid container spacing={3} pt={9}>
      <Grid item xs={12}>
        <Head />
      </Grid>

      <Grid item xs={4}>
        <Search />
      </Grid>
      <Grid item xs={8}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="NEWEST" value="1" />
              <Tab label="POPULAR" value="2" />
            </TabList>
          </Box>
        </TabContext>
          <Grid container direction={'column'} spacing={2}>
              {value === "1" && <NewestCard />}
              {value === "2" && <PopularCard />}
          </Grid>
      </Box>
      </Grid>
        </Grid>
      </Container>
    </>
  );
}
