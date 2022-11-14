import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';

export default function MuiPagination() {
  return (
    <Box justifyContent={'center'} alignItems={'center'} display={'flex'}
        sx={{
        margin: '20px 0px'
    }} 
    >
      <Pagination count={10}/>
    </Box>
  );
}