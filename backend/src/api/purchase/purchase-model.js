const { Model } = require('objection');

class Purchase extends Model {
    static get tableName() {
        return 'Purchase'
    }
}

module.exports = Purchase;