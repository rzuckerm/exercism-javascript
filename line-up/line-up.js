//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ORDINALS = { 1: "st", 2: "nd", 3: "rd" };

export const format = (name, number) => {
  const ordinal = ORDINALS[number % 10] && (number % 100 < 11 || number % 100 > 13) ? ORDINALS[number % 10] : "th";
  return `${name}, you are the ${number}${ordinal} customer we serve today. Thank you!`;
};
