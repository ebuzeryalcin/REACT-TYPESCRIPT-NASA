import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

const NoResult = (): JSX.Element => {
  return (
    <Alert
      severity="info"
      variant="outlined"
      sx={{ width: "760px", height: "50px", marginTop: "8px" }}
    >
      <Typography variant="body1" sx={{ fontWeight: "500", marginTop: "-2px" }}>
        No search results were found
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "12px" }}>
        Please refine your search query
      </Typography>
    </Alert>
  );
};

export default NoResult;
