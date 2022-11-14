import { Button, Stack, TextField } from '@mui/material';

export default function Form() {
  return (
    <>
    <Stack m={0} p={0} spacing={2}>
      <TextField id="outlined-Search" label="Search" variant="outlined" />
      <TextField id="outlined-Location" label="Location" variant="outlined" />
      <Button variant="contained" size="large">Search</Button>
    </Stack>
    </>
  );
}