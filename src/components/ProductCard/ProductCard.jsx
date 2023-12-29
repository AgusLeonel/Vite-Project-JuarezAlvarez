import React from 'react';
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
            <CardMedia
              sx={{ height: 140 }}
              image={product.image || ''}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;