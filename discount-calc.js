const cart1 = [ ["pencils", 1],["pens", 0],["erasers", 1] ]; // => 12
const cart2 = [ ["pencils", 1],["pens", 1],["erasers", 1] ]; // => 15
const cart3 = [ ["pencils", 2],["pens", 2],["erasers", 1] ]; // => 16.8
const cart4 = [ ["pencils", 3],["pens", 5],["erasers", 2] ]; // => 36
const cart5 = [ ["erasers", 7],["pencils", 7],["pens", 7] ]; // => 85.8

// array of discounts [product, rule, threshold]
const discounts = [
  ["pencils", "bogo"],
  ["pens", 0.2, 2],
];

// array of prices
const prices = [
  ["pencils", 5],
  ["pens", 3],
  ["erasers", 7],
];

const checkDiscount = (product) => {
  const discountArr = discounts.find((discount) => discount[0] === product);
  return discountArr ? discountArr : null;
};

const getCostPerUnit = (product) => {
  const priceArr = prices.find((price) => price[0] === product);
  return priceArr[1];
};

const calc = (cart) => {
  let total = 0;

  cart.forEach((item) => {
    const product = item[0],
      quantity = item[1],
      discount = checkDiscount(product),
      costPerUnit = getCostPerUnit(product);

    if (discount) {
      const discountType = discount[1],
        threshold = discount[2];

      switch (discountType) {
        case "bogo": // basic BOGO - 50% off accounting for odd num quantity
          if (quantity % 2 === 0) {
            total += quantity * costPerUnit * 0.5;
          } else {
            total += (quantity - 1) * costPerUnit * 0.5 + costPerUnit;
          }
          break;

        default:
          // calc discount based on discountType (expecting percent as decimal)
          let subTotal = quantity * costPerUnit,
            discountedAmount = 0;

          if (threshold && threshold <= quantity) {
            discountedAmount = discountType * subTotal;
          }

          total += subTotal - discountedAmount;
          break;
      }
    } else {
      // no discount available
      total += quantity * costPerUnit;
    }
  });

  return total;
};

console.log(calc(cart1));
console.log(calc(cart2));
console.log(calc(cart3));
console.log(calc(cart4));
console.log(calc(cart5));
