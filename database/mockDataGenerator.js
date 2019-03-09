const faker = require("faker");
faker.seed(31337);

const createFakeItem = id => {
  const itemFeatures = [];
  const numOfFeatures = Math.floor(Math.random() * (6 - 2 + 1)) + 2;

  for (let i = 0; i < numOfFeatures; i++) {
    itemFeatures.push({
      feature: faker.company.catchPhrase(),
      featureDescription: (() => {
        return `${faker.hacker.phrase()} ${faker.hacker.phrase()}`;
      })()
    });
  }
  return {
    featureId: id,
    featuresList: itemFeatures
  };
};

const batchData = num => {
  const results = [];
  for (i = 1; i < num + 1; i++) {
    results.push(createFakeItem(i));
  }
  return results;
};

module.exports = { createFakeItem, batchData };
