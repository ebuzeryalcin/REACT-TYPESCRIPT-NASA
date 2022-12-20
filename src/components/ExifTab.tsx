import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface dataProps {
  ApertureValue?: number,
  artist?: string,
  cfaPattern?: string,
  colorSpace?: string,
}

const ExifTab = ({
  ApertureValue,
  artist,
  cfaPattern,
  colorSpace,
}: dataProps): JSX.Element => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              <TableCell>Key</TableCell>
              <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {/* {row.name} */}
              </TableCell>
              <TableCell align="right">{ApertureValue}</TableCell>
              <TableCell align="right">{artist}</TableCell>
              <TableCell align="right">{cfaPattern}</TableCell>
              <TableCell align="right">{colorSpace}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExifTab