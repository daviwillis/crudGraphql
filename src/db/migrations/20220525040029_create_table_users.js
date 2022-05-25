/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table =>{
      table.increments('id')
      table.string('nome').notNullable()
      table.specificType('cpf', 'char(11)').notNullable().primary()
      table.string('telefone').notNullable()
      table.timestamp('dataCriacao').defaultTo(knex.fn.now())
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users')
  
};
