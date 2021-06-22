import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     {id: 1, name: 'Glasses set', description: 'Crystal glasses for decoration', price: '$25', image:'https://images.ctfassets.net/5de70he6op10/12RywheTZ14s0JmJ6x4hRV/e7e3e15048ce3dc95860587641fb8332/2_dresses.jpg?q=80&fm=webp'},
//     {id: 2, name: 'Hat', description: 'Print and wool material', price: '$115', image: 'https://images.ctfassets.net/5de70he6op10/57f2weW4kUAfG6E7tfvHNq/5b5e609f7be1c4b16fc0b843a003616e/2_hats.jpg?q=80&fm=webp'},
//     {id: 3, name: 'Glasses set', description: 'Crystal glasses for decoration', price: '$25', image:'https://images.ctfassets.net/5de70he6op10/12RywheTZ14s0JmJ6x4hRV/e7e3e15048ce3dc95860587641fb8332/2_dresses.jpg?q=80&fm=webp'},
//     {id: 4, name: 'Hat', description: 'Print and wool material', price: '$115', image: 'https://images.ctfassets.net/5de70he6op10/57f2weW4kUAfG6E7tfvHNq/5b5e609f7be1c4b16fc0b843a003616e/2_hats.jpg?q=80&fm=webp'},
//     {id: 5, name: 'Glasses set', description: 'Crystal glasses for decoration', price: '$25', image:'https://images.ctfassets.net/5de70he6op10/12RywheTZ14s0JmJ6x4hRV/e7e3e15048ce3dc95860587641fb8332/2_dresses.jpg?q=80&fm=webp'},
//     {id: 6, name: 'Hat', description: 'Print and wool material', price: '$115', image: 'https://images.ctfassets.net/5de70he6op10/57f2weW4kUAfG6E7tfvHNq/5b5e609f7be1c4b16fc0b843a003616e/2_hats.jpg?q=80&fm=webp'},
//     {id: 7, name: 'Glasses set', description: 'Crystal glasses for decoration', price: '$25', image:'https://images.ctfassets.net/5de70he6op10/12RywheTZ14s0JmJ6x4hRV/e7e3e15048ce3dc95860587641fb8332/2_dresses.jpg?q=80&fm=webp'},
//     {id: 8, name: 'Hat', description: 'Print and wool material', price: '$115', image: 'https://images.ctfassets.net/5de70he6op10/57f2weW4kUAfG6E7tfvHNq/5b5e609f7be1c4b16fc0b843a003616e/2_hats.jpg?q=80&fm=webp'}
// ];

const Products = ({products}) => {
    const classes = useStyles();

 return (

    <main className={classes.content}>
        <div className={classes.toolbar}/> 
    <Grid container justify= "center" spacing={4}>
         { products.map((product) => (
            <Grid item key={product.id} xs={12}  sm={6}  md={4}  lg={3}>
                <Product product={product}/>   
            </Grid>

          ))}
    </Grid>
</main>

 )
   
}

export default Products;