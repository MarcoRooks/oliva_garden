import * as React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom';


export default function Cart() {

  const [isOpen, setIsOpen] = React.useState(false);

  const list = (anchor) => (
    <Box
      p={2}
      width='250px'
      textAlign='center'
      role="presentation"
      variant='permanent'
      onClick={()=>setIsOpen(false)}
      onKeyDown={()=>setIsOpen(false)}
    >
      <h4>Carrito de compras</h4>
      <List>
        {/*Where index is located, the total quantity of items can be chosen */}
        <Divider />
        {['hamburguesa', 'croissant', 'pizza', 'comida', 'croissant', 'pizza', 'comida', 'croissant', 'pizza', 'comida', 'croissant', 'pizza', 'comida'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <p>{index}</p>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button component={Link} to='/checkout'>Tramitar Pedido</Button>
    </Box>
  );



  return (
    <div className='bottom'>

      <div className='cart-flex'>
        <Button sx={{color: 'green', height:'85%', width:'50%'}} onClick={()=>setIsOpen(true)}><ShoppingCartCheckoutIcon/>Carrito de Compra</Button>
        <Drawer
            anchor='left'
            variant="temporary"
            ModalProps={{
              keepMounted: true,
            }}
            open={isOpen}
            onClose={()=>setIsOpen(false)}
          >
            {list()}
          </Drawer>
        <Button sx={{color: 'red', height:'85%', width:'50%'}}><DeleteIcon/>Eliminar Compra</Button>
      </div>
    </div>
  );
}
