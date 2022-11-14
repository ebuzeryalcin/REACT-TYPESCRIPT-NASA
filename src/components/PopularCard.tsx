import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import useFetch from "../hooks/UseFetch";
import '../styles/styles.css';

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

export default function MediaCard() {
  
  const navigate = useNavigate();

  const detailedCard = (id: string) => {
    navigate(`/Detailed/${id}`);
  };

  const { data, error } =  useFetch<PostData>(
    "https://images-assets.nasa.gov/popular.json"
  );

 
  if (error) console.log(error);

  return (
    <>
    <Grid container spacing={2}>
      {data && data.items.map((item, i) => (

        <Link  to={`/Detailed/${item.data[0].nasa_id}`}
        state={{nasaItem: item}}
        style={{ textDecoration: "none" }} 
        key={item && item.data[0].nasa_id}>
          <Card sx={{ maxWidth: 364, height: 495, mt: 1, ml: 4, mb: 2 }}>
            <CardActionArea onClick={() => detailedCard(item.data[0].nasa_id)}>
            <CardMedia
                component="img"
                height="200"
                image={item && item.links[0].href}
                alt="NASA"
              />
              <CardContent>
                <Typography variant="subtitle2" mb={1} color="#2196f3">
                {item && item.data[0].center} • {item && item.data[0].date_created}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                  <p>{item && item.data[0].title}</p>
                </Typography>
                <Typography className="desc-style" variant="body2" color="text.secondary">
                {item && item.data[0].description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </Grid>
    </>
  );
}
