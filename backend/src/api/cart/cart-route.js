const express = require('express');
const cartController = require('../controllers/cartController');
const router = express.Router();

// POST /carts - Create a new cart
router.post('/', cartController.createCart);

// POST /carts/:cartID/items - Add an item to the cart
router.post('/:cartID/items', cartController.addItemToCart);

module.exports = router;

    In your cartController.js file, define the controller functions that handle creating a cart and adding cart items, along with the appropriate relationships:

javascript

const knex = require('../knexfile').development;

// Create a new cart for a user
async function createCart(req, res) {
  try {
    // Extract the user ID from the request, assuming it's sent in req.body.UserID
    const userID = req.body.UserID;

    // Insert the cart data into the Cart table and return the newly created cart
    const [newCart] = await knex('Cart').insert({ UserID: userID }).returning('*');

    res.status(201).json(newCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the cart.' });
  }
}

// Add an item to a cart
async function addItemToCart(req, res) {
  try {
    const { cartID } = req.params;
    const { TicketID, Quantity } = req.body;

    // Insert the cart item data into the CartItem table
    await knex('CartItem').insert({ CartID: cartID, TicketID, Quantity });

    res.status(201).json({ message: 'Item added to the cart successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the item to the cart.' });
  }
}

module.exports = {
  createCart,
  addItemToCart,
};
