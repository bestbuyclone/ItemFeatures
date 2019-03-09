const faker = require("faker");
faker.seed(31337);

const createFakeItem = id => ({
  titleId: id,
  features: (() => {
    const itemFeatures = [];
    const numOfFeatures = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
    for (i = 0; i < numOfFeatures; i++) {
      const feature = {
        feature: faker.company.catchPhrase(),
        featureDescription: (() => {
          `${faker.hacker.phrase()} ${faker.hacker.phrase()}`;
        })()
      };
      itemFeatures.push(feature);
      console.log(itemFeatures);
    }
  })()
});

const batchData = num => {
  const results = [];
  for (i = 1; i < num + 1; i++) {
    results.push(createFakeItem(i));
  }
  return results;
};

console.log(batchData(4));

module.exports = { createFakeItem, batchData };

// const createFakeItem = id => ({
//   titleId: id,
//   feature1: faker.company.catchPhrase(),
//   featureDescription1: (() => {
//     return `${faker.hacker.phrase()} ${faker.hacker.phrase()}`;
//   })()
// });
