
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('brand').notNullable()
        table.string('gender').notNullable()
        table.decimal('price').notNullable()
        table.string('imageURL')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
