exports.up = function(knex) {
    return knex.schema.createTable("tables", (table) => {
      table.increments("table_id").primary();
      table.string("table_name").notNullable();
      table.integer("capacity").notNullable().unsigned().defaultTo(1);
      table.boolean("is_occupied").defaultTo(false);
      table
          .integer("reservation_id")
          .unsigned()
          .references("reservation_id")
          .inTable("reservations")
          .onDelete("CASCADE");
      table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("tables");
  };
  