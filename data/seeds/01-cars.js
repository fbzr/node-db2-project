
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: 'JH4DC54813L015825',
          make: 'Acura',
          model: 'RSX',
          mileage: 242257,
          transmission: 'MT',
          title: 'REBUILT'
        },
        {
          vin: '5FNRL5H48CB503526',
          make: 'Honda',
          model: 'Odyssey',
          mileage: 97242,
          transmission: 'AT',
          title: 'CLEAN'
        },
        {
          vin: '1N6AD07U28CU30900',
          make: 'Nissan',
          model: 'Frontier',
          mileage: 164284,
          transmission: 'AT',
          title: 'CLEAN'
        },
        {
          vin: '2B4GP2535YR736780',
          make: 'Dodge',
          model: 'Caravan',
          mileage: 205310,
          transmission: 'AT',
          title: 'REBUILT'
        },
        {
          vin: '1VXBR12EXCP901214',
          make: 'Toyota',
          model: 'Corolla',
          mileage: 138421,
          transmission: 'MT'
        }
      ]);
    });
};
