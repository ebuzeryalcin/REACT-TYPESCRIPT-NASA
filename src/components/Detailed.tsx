import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import type {} from "@mui/lab/themeAugmentation";
import { TabContext, TabList } from "@mui/lab";
import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Container } from "@mui/system";

import ImageTab from "./ImageTab";
import ExifTab from "./ExifTab";
import { useLocation } from "react-router-dom";

export default function Detailed() {
  const location = useLocation();
  const { nasaItem } = location.state;
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#F9FAFB",
        }}
      >
        <Box
          sx={{
            paddingTop: "24px",
            borderBottom: "1px solid",
            borderColor: "rgba(0, 0, 0, 0.12)",
            backgroundColor: "white",
          }}
        >
          <Container>
            <Breadcrumbs>
              <Link
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                color="inherit"
                href="/"
              >
                <HomeIcon />
                <Typography>NASA Image Explorer</Typography>
              </Link>
              <Typography>Title</Typography>
            </Breadcrumbs>
            <Box
              sx={{
                display: "flex",
                paddingBottom: "16px",
                flexDirection: {
                  xs: "row"
                },
              }}
            >
              <Box
                sx={{
                  paddingRight: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    paddingRight: "8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <InfoOutlinedIcon />
                </Box>
                <Typography>nasa_id</Typography>
              </Box>
              <Box
                sx={{
                  paddingRight: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    paddingRight: "8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <HomeIcon />
                </Box>
                <Typography>Center</Typography>
              </Box>
              <Box
                sx={{
                  paddingRight: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    paddingRight: "8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CalendarMonthOutlinedIcon />
                </Box>
                <Typography>MM/DD/YYY</Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                backgroundColor: "white",
                borderBottom: 1,
                borderColor: "divider",
                mb: 6,
                pl: '10vw',
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="Tabs"
              >
                <Tab label="IMAGE" value="1" />
                <Tab label="EXIF DATA" value="2" />
              </TabList>
            </Box>
          </TabContext>
          <Grid
            container
            direction={"column"}
            spacing={2}
            sx={{ pl: '10vw', pr: '10vw', pb: '10vw' }}
          >
            {value === "1" && (
              <ImageTab
                image={nasaItem.links[0].href}
                title={nasaItem.data[0].title}
                center={nasaItem.data[0].center}
                date={nasaItem.data[0].date_created}
                description={nasaItem.data[0].description}
              />
            )}
            {value === "2" && <ExifTab />}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
