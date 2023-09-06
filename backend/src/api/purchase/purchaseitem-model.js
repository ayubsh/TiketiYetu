const { Model } = require('objection');

class PurchaseItem extends Model {
    static get tableName() {
        return 'PurchaseItem';
    }
}

module.exports = PurchaseItem;