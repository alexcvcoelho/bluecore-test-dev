const table = 'User'

exports.up = function (knex) {
  return knex.schema.createTable(table, (table) => {
    table.increments('Id')
    table.string('Name', 255).notNullable()
    table.string('Username', 255).notNullable()
    table.string('Password', 255).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable(table)
}
