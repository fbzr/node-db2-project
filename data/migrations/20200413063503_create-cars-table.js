
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('vin', 128).unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.integer('mileage').notNullable();
        tbl.enu('transmission', ['AT', 'MT', 'CVT']);
        tbl.enu('title', ['CLEAN', 'SALVAGE', 'REBUILT', 'JUNK']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
