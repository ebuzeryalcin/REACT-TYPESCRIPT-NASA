import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import SatelliteAltTwoToneIcon from '@mui/icons-material/SatelliteAltTwoTone';

import Head from "../components/Head";
import Search from "../components/Search";
import NoResult from "../components/NoResult";

import {
  Collection,
  CardData,
  NasaData,
  BackendResponse,
} from "../models/model";

import { fetchData } from "../hooks/functions";
import { NEWEST_URL, SEARCH_URL } from "../hooks/urls";

// import TotalResults from "../components/TotalResults";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 678,
      md: 999,
      lg: 1200,
      xl: 1536,
    },
  },
});

const SearchResultsPage = (): JSX.Element => {
  const search = useLocation().search;
  const keyword = new URLSearchParams(search).get("q")?.toString();
  const location = new URLSearchParams(search).get("location")?.toString();
  const page = new URLSearchParams(search).get("page")?.toString();

  const parsedPage = page !== undefined ? parseInt(page) : 1;

  const [result, setResult] = useState<Collection>();
  const [currentPage, setCurrentPage] = useState<number>(parsedPage);

  const navigate = useNavigate();

  useEffect(() => {
    const queryData = async () => {
      let data: BackendResponse;

      if (!keyword && !location) {
        data = await fetchData(NEWEST_URL);
        setResult(data.collection);
      } else {
        data = await fetchData(SEARCH_URL(keyword, location, currentPage));
        setResult(data.collection);
      }
    };

    queryData();
  }, [keyword, location, currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setCurrentPage(value);
    navigate(`/search?q=${keyword}&location=${location}&page=${value}`);
  };

  const mainPage = (event: React.SyntheticEvent): void => {
    navigate("/");
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          paddingTop: "64px",
          paddingBottom: "80px",
          paddingRight: "20px",
          paddingLeft: "20px",
          minWidth: "269px",
        }}
      >
        <Grid item xs={12}>
          <Head />
        <Grid item>
          <Button
            startIcon={<SatelliteAltTwoToneIcon />}
            onClick={mainPage}
            sx={{
              variant: {
                xs: "outlined",
                sm: "outlined",
                md: "outlined",
                lg: "contained",
                xl: "contained",
              },
            }}
          >
            Home
          </Button>
        </Grid>
        </Grid>

        <Grid item xs={12} sm={4} md={4} sx={{ minWidth: "300px" }}>
          <Search />
        </Grid>
        
        <Grid item xs={12}>
          {result?.items.length === 0 ? (
            <NoResult />
          ) : (
            <ThemeProvider theme={theme}>
              {result?.items.map((item: CardData) => {
                return item.data.map((element: NasaData): JSX.Element => {
                  const datefied = new Date(
                    element.date_created
                  ).toDateString();

                  return (
                    
                      <Link
                        to={`/Detailed/${item.data[0].nasa_id}`}
                        state={{ nasaItem: item }}
                        style={{ textDecoration: "none" }}
                        key={item && item.data[0].nasa_id}
                      >
                        <Grid
                          container
                          item
                          xs={12}
                          sm={6}
                          md={4}
                          sx={{ display: "inline-block" }}
                        >
                          <Grid item>
                            <Card
                              sx={{ minWidth: "250px", minHeight: 455, m: 1 }}
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  height="200"
                                  image={item && item.links[0].href}
                                  alt="NASA"
                                />
                                <CardContent>
                                  <Typography
                                    variant="subtitle2"
                                    mb={1}
                                    color="#2196f3"
                                  >
                                    {item && item.data[0].center} •{" "}
                                    {item && item.data[0].date_created}
                                  </Typography>

                                  <Typography
                                    className="title-style"
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                  >
                                    <p>{item && item.data[0].title}</p>
                                  </Typography>
                                  <Typography
                                    className="desc-style"
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    {item && item.data[0].description}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            </Card>
                          </Grid>
                        </Grid>
                      </Link>
                  );
                });
              })}

              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "24px",
                }}
              >
                <Pagination
                  count={
                    result?.metadata?.total_hits !== undefined
                      ? Math.ceil(result.metadata?.total_hits / 100)
                      : 1
                  }
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </Grid>
          </ThemeProvider>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default SearchResultsPage;
