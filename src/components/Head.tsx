import { Divider, Grid, Typography } from "@mui/material"

function Head() {
  return (
    <>
    <Grid direction={'column'}>
      <Grid marginBottom={3}>
        <Typography variant="h5">NASA Image Explorer</Typography>
      </Grid>
      <Divider />
    </Grid>
    </>
  )
}

export default Head