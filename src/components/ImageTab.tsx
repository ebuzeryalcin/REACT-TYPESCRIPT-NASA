import { Box, CardContent, CardMedia, Paper, Typography } from '@mui/material';


interface PostData{
    items: Item[], //1
    href: string
}
  
interface Item{ //1
    data: ItemDetail[], //2
    href: string,
    links: LinkDetail[]
}
  
interface ItemDetail { //3
    nasa_id: string,
    title: string, //4
    date_created: string
    center: string
    description: string
    keywords: KeywordDetail[]
    // keywords?: string[];
}
  
interface KeywordDetail {
    keyword: string
}
  
interface LinkDetail {
    href: string
}

interface ImageTabProps {
    image?: string;
    title?: string;
    date?: string;
    description?: string;
    id?: string;
    center?: string;
    // keywords?: string[];
    // location?: string;
  }

const ImageTab = ({

    image,
    title,
    center,
    date,
    description,
    // location,
    // keywords,
    }: ImageTabProps): JSX.Element => {
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
          },
        }}
      >
        <Box minWidth={"50%"} sx={{ display: "inline-grid", flex: "1 1 0%" }}>
          <CardMedia component="img" image={image} />
        </Box>
        <Box minWidth={"50%"} sx={{ flex: "1 1 0%" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
                <Typography variant="subtitle2" mb={1} color="#2196f3">
                {center} • {date}
                </Typography>
            </Box>
            <Box sx={{ paddingTop: "8px" }} />
            <Typography variant="h5">{title}</Typography>
            <Box sx={{ paddingTop: "8px" }} />
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Box sx={{ flex: "1 1 0%" }} />
            <Box
              sx={{ display: "flex", flexWrap: "wrap", paddingTop: "16px" }}
            >
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Paper>
  )
}

export default ImageTab;
