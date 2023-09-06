// const express = require('express');
// const router = express.Router();

// const Purchase = require('./purchase-model');
// const PurchaseItem = require('./purchaseitem-model');


// // POST create purchase
// router.post('/purchases', async (req, res) => {

//     // Get user
//     const user = await User.query().findById(req.body.userId);
  
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
  
//     // Calculate total from cart
//     const cart = await Cart.query().findOne({user: user});
  
//     let total = 0;
//     for (item of cart.cartItems) {
//       total += item.ticket.Price * item.Quantity; 
//     }
  
//     // Create purchase
//     const purchase = await Purchase.query().insert({
//       user: user, 
//       TotalAmount: total,
//       PurchaseDate: new Date() 
//     });
  
//     // Create purchase items 
//     for (item of cart.cartItems) {
//       await PurchaseItem.query().insert({
//         purchase: purchase,
//         ticket: item.ticket,
//         Quantity: item.Quantity
//       });
//     }
  
//     // Clear cart
//     await CartItem.query()
//       .delete()
//       .where({cartId: cart.id});
  
//     res.json(purchase);
  
//   });
//
//
//   const knex = require('../knexfile').development;

// Create a new purchase for a user
async function createPurchase(req, res) {
  try {
    // Extract the user ID and total amount from the request
    const { UserID, TotalAmount } = req.body;

    // Insert the purchase data into the Purchase table and return the newly created purchase
    const [newPurchase] = await knex('Purchase').insert({ UserID, TotalAmount }).returning('*');

    res.status(201).json(newPurchase);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the purchase.' });
  }
}

// Add an item to a purchase
async function addItemToPurchase(req, res) {
  try {
    const { purchaseID } = req.params;
    const { TicketID, Quantity } = req.body;

    // Insert the purchase item data into the PurchaseItem table
    await knex('PurchaseItem').insert({ PurchaseID: purchaseID, TicketID, Quantity });

    res.status(201).json({ message: 'Item added to the purchase successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the item to the purchase.' });
  }
}

// Make a purchase by adding items to a cart
async function makePurchase(req, res) {
  try {
    // Extract the user ID and cart ID from the request
    const { UserID, CartID } = req.body;

    // Retrieve the cart items based on the CartID
    const cartItems = await knex('CartItem').select('TicketID', 'Quantity').where({ CartID });

    if (cartItems.length === 0) {
      return res.status(400).json({ error: 'The cart is empty. Add items to the cart before making a purchase.' });
    }

    // Calculate the total amount for the purchase
    const totalAmount = cartItems.reduce((total, item) => {
      // You should fetch the price of the ticket from the Ticket table based on the TicketID.
      // This is a simplified example.
      const itemPrice = 10; // Replace with actual price fetching logic.
      return total + itemPrice * item.Quantity;
    }, 0);

    // Create a new purchase with the calculated total amount
    const [newPurchase] = await knex('Purchase').insert({ UserID, TotalAmount: totalAmount }).returning('*');

    // Add cart items to the purchase
    for (const cartItem of cartItems) {
      await knex('PurchaseItem').insert({ PurchaseID: newPurchase.PurchaseID, TicketID: cartItem.TicketID, Quantity: cartItem.Quantity });
    }

    // Clear the cart by deleting cart items
    await knex('CartItem').where({ CartID }).del();

    res.status(201).json(newPurchase);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while making the purchase.' });
  }
}

module.exports = {
  createPurchase,
  addItemToPurchase,
  makePurchase,
};

