const sequelize = require('../config/connection');
// import seed data here:
// const seedExample = require('./exampleData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    // run seed functions here:
    // await seedExample();

    process.exit(0);
};

seedAll();

// input the following command in gitBash or cmd line to seed files:
// npm run seed