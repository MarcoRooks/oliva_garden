import * as React from 'react';
import '../order/orders.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


const Orders = () => {
  const [amount,setAmount]= useState(0)

  
  
  const data =[
    { 
      id: 1,
      name: 'Croissant',
      description: 'made with love and care',
      amount: {amount}

    },
    {
      id: 2,
      name: 'Burger',
      description: 'made with love and care',
    },
    {
      id:3,
      name: 'pizza',
      description: 'made with love and care',
    }
  ]

  return (
    <div className='body orders'>
      <div className='container-orders'>
        {data.map((order, index) => (
          <Card sx={{ width:250 , m:1}} key={order.id} index={index} className={order.name+index}>
          <CardMedia
            component="img"
            alt="Croissant"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {order.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {order.description}
            </Typography>
          </CardContent>
          <CardActions>
            <div>
              <div className='orders-card-buttons'>
                <Button onClick={() => setAmount(amount - 1)} size="small">-</Button>
                <TextField disabled='disabled' size='small' id="outlined-basic"  variant="outlined" sx={{width:'75px'}} value={amount} />
                <Button onClick={() => setAmount(amount + 1)} size="small">+</Button>
              </div>
            <Button size="small" sx={{m:1}}>Añadir {amount} cantidad al pedido</Button>
            </div>
          </CardActions>
        </Card>
        ))}
      
      </div>
        
    </div>
  )
}

export default Orders