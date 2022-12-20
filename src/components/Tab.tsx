import React from "react";
import NewestCard from "./NewestCard";
import PopularCard from "./PopularCard";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import type {} from "@mui/lab/themeAugmentation";
import { TabContext, TabList } from "@mui/lab";
import { Grid } from "@mui/material";
import Head from "./Head";
import Search from "./Search";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ 
          paddingTop: "64px", 
          paddingBottom: "80px", 
          paddingRight: '20px',
          paddingLeft: '20px',
          minWidth: "269px" 
        }}
      >
        <Grid item xs={12}>
          <Head />
        </Grid>

        <Grid item xs={12} sm={4} md={4} sx={{ minWidth: '300px' }}>
          <Search />
        </Grid>
        <Grid item xs={12}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 6, minWidth: '269px' }}>
              <TabList
                onChange={handleChange}
                aria-label="Tabs"
              >
                <Tab label="NEWEST" value="1" />
                <Tab label="POPULAR" value="2" />
              </TabList>
            </Box>
          </TabContext>
            {value === "1" && <NewestCard />}
            {value === "2" && <PopularCard />}
        </Grid>
      </Grid>
    </>
  );
}
