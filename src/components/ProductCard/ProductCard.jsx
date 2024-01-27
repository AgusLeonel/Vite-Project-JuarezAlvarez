import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Link key={product.id} to={`/item/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card sx={{ maxWidth: 345, margin: 2 }}>
            {product.img && (
              <CardMedia
                component="img"
                alt={product.title}
                height="140"
                image={product.img}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;