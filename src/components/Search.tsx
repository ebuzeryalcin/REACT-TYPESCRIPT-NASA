// import { Button, Stack, TextField } from '@mui/material';

// export default function Form() {
//   return (
//     <>
//     <Stack m={0} p={0} spacing={2}>
//       <TextField id="outlined-Search" label="Search" variant="outlined" />
//       <TextField id="outlined-Location" label="Location" variant="outlined" />
//       <Button variant="contained" size="large">Search</Button>
//     </Stack>
//     </>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 568,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Search = (): JSX.Element => {
  const [keyword, setKeyword] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  // const [page] = useState<number>(1);

  const navigate = useNavigate();

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/search?q=${keyword}&location=${location}`);
    // navigate(`/search?q=${keyword}&location=${location}&page=${page}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <form onSubmit={onFormSubmit}>
          <Box
            sx={{
              "& > :not(style)": {
                m: 1,
                width: {
                  xs: "38ch",
                  sm: "38ch",
                  md: "40ch",
                  lg: "46ch",
                  xl: "46ch",
                },
              },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              InputProps={{
              }}
            />
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              InputProps={{
              }}
            />
            <Box sx={{ width: "100%" }}>
              <Button variant="contained" sx={{ width: "100%" }} type="submit">
                Search
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default Search;
