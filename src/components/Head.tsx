import { Divider, Grid, Typography } from "@mui/material"

function Head() {
  return (
    <>
    <Grid container>
      <Grid minWidth='269px' marginBottom={3}>
        <Typography variant="h5">NASA Image Explorer</Typography>
      </Grid>
      <Grid>
        <Divider />
      </Grid>
    </Grid>
    </>
  )
}

export default Head