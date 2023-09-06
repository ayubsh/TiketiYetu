const { Model } = require('objection');


class CartItem extends Model {
    static get tableName() {
        return 'CartItem';
    }
}

module.exports = CartItem;