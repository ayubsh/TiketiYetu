const express = require('express');
const router = express.Router();

const Purchase = require('./purchase-model');
const PurchaseItem = require('./purchaseitem-model');


// // POST create purchase
router.post('/purchases', async (req, res) => {

//     // Get user
    const user = await User.query().findById(req.body.userId);
  
    if (!user) {
      return res.status(404).send('User not found');
    }
  
//     // Calculate total from cart
    const cart = await Cart.query().findOne({user: user});
  
    let total = 0;
    for (item of cart.cartItems) {
      total += item.ticket.Price * item.Quantity; 
    }
  
//     // Create purchase
    const purchase = await Purchase.query().insert({
      user: user, 
      TotalAmount: total,
      PurchaseDate: new Date() 
    });
  
//     // Create purchase items 
    for (item of cart.cartItems) {
      await PurchaseItem.query().insert({
        purchase: purchase,
        ticket: item.ticket,
        Quantity: item.Quantity
      });
    }
  
//     // Clear cart
    await CartItem.query()
      .delete()
      .where({cartId: cart.id});
  
    res.json(purchase);
  
  });
//
//

module.exports = router;

