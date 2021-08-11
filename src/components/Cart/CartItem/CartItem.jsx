import React from 'react';
import { Typography, Button, Card, CardAction, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({item}) => {
    const classes = useStyles();
    return (
        <Card>

            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.CardContent}>
                <Typography variant="h4"></Typography>

            </CardContent>
            
        </Card>
    )
}

export default CartItem
