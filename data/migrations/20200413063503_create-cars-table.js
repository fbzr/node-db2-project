
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.text('vin', 128).primary().unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.integer('mileage').notNullable();
        tbl.enu('transmission', ['AT', 'MT', 'CVT']);
        tbl.enu('title', ['Clean', 'Salvage', 'Rebuilt', 'Junk', 'Dismantled']);
    });
};

exports.down = function(knex) {
  
};
