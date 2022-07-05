// this is a seed file model, replace 'example' to desired name/information.

const { example } = require('../models');

const exampleData = [
    {
        // this seeds rows with information given the refrenced models columns
        example1: 'example',
        // this is a column and its given info
        example2: 'example',
        example3: 'example',
    }
];

const seedExample = () => example.bulkCreate(exampleData);

module.exports = seedExample;