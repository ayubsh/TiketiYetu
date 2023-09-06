const { Model } = require('objection')

class Cart extends Model {
    static get tableName() {
        return 'Cart'
    }
}

module.exports = Cart;