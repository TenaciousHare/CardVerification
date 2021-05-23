const checkCardNumber = function (cardNumber) {
  const cardNumberAsString = String(cardNumber);
  const cardNumberLength = cardNumberAsString.length;
  const cardNumberAsArray = cardNumberAsString.split("");

  return LuhnAlgorithm(cardNumberAsArray, cardNumberLength)
    ? `The card has the correct number. Issued by ${whatCardIsIt(
        cardNumberAsString,
        cardNumberLength
      )}.`
    : `Invalid card number`;
};
export default checkCardNumber;

function whatCardIsIt(cardNumberAsString, cardNumberLength) {
  const isMasterCard =
    cardNumberLength === 16 &&
    (cardNumberAsString.startsWith("51") ||
      cardNumberAsString.startsWith("52") ||
      cardNumberAsString.startsWith("53") ||
      cardNumberAsString.startsWith("54") ||
      cardNumberAsString.startsWith("55"));
  const isVisa =
    (cardNumberLength === 13 || cardNumberLength === 16) &&
    cardNumberAsString.startsWith("4");
  const isAmericanExpress =
    cardNumberLength === 15 &&
    (cardNumberAsString.startsWith("34") ||
      cardNumberAsString.startsWith("37"));

  let thisCardIs = "";
  switch (true) {
    case isMasterCard:
      thisCardIs = "Mastercard";
      break;
    case isVisa:
      thisCardIs = "Visa";
      break;
    case isAmericanExpress:
      thisCardIs = "AmericanExpress";
      break;
    default:
      thisCardIs = "Unknown";
      break;
  }
  return thisCardIs;
}

function LuhnAlgorithm(cardNumberAsArray, cardNumberLength) {
  const countingArray = [];
  for (let i = 0; i < cardNumberLength; i++) {
    if (i % 2 === 0) {
      countingArray[i] = String(cardNumberAsArray[i] * 2);
    } else {
      countingArray[i] = cardNumberAsArray[i];
    }
  }
  for (let i = 0; i < cardNumberLength; i++) {
    if (countingArray[i].length === 2) {
      countingArray[i] = countingArray[i][0] * 1 + countingArray[i][1] * 1;
    }
  }
  const sum = countingArray.reduce((total, item) => (total += item * 1), 0);
  const verify = sum % 10 === 0;
  return verify;
}
