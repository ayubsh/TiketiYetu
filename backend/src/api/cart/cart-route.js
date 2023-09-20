const express = require('express');
const router = express.Router();

const Cart = require('./cart-model');
const CartItem = require('./cartitem-model');

const User = require('../users/user-model');


// POST create cart 
router.post('/', async (req, res, next) => {
  try {
    const {User_id} = req.body;
    const user = await User.query().findById(User_id);
		console.log(user);

     if (!user) {
       return res.status(404).send('User not found');
     }

    const newcart = await Cart.query().insert({
      User_id  // Set user relationship
    });

    res.json(newcart);
  } catch (error) {
    next(error)
  }
});


// CartItem routes

// GET cart items by cart id
// app.get('/cart-items/:cartId', async (req, res) => {
//   const items = await CartItem.query()
//     .where({ cartId: req.params.cartId });

//   res.json(items);
// });

// POST add item to cart
router.post('/cartitem', async (req, res, next) => {
  try {
      const {Cart_id, Ticket_id, Quantity} = req.body;

    // Get cart and ticket
    // const cart = await Cart.query().findById(req.body.cartId);
    // const ticket = await Ticket.query().findById(req.body.ticketId);

    // if (!cart) {
    //   return res.status(404).send('Cart not found');
    // }

    // if (!ticket) {
    //   return res.status(404).send('Ticket not found');
    // }

    // Create cart item
    const newitem = await CartItem.query().insert({
      Quantity,
      Cart_id,
      Ticket_id
    });

    res.json(newitem);
  } catch (error) {
    next(error);
  }

});

module.exports = router;
