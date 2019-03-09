const faker = require("faker");
faker.seed(31337);

const createFakeItem = id => ({
  titleId: id,
  feature: faker.company.catchPhrase(),
  featureDescription: (() => {
    return `${faker.hacker.phrase()} ${faker.hacker.phrase()}`;
  })()
});

const batchData = num => {
  const results = [];
  for (i = 1; i < num + 1; i++) {
    results.push(createFakeItem(i));
  }
  return results;
};

module.exports = { createFakeItem, batchData };
