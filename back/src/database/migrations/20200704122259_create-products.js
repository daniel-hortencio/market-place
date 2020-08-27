
//Método que cria a tabela
exports.up = function(knex) {
  return knex.schema.createTable('products', function(table){
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('brand').notNullable()
      table.string('gender').notNullable()
      table.string('price').notNullable()
  })
};

//Método que deleta a tabela a tabela
exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
