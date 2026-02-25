/**
 * 🛺 Auto Rickshaw Fare Calculator - Number & Math
 *
 * Bhaiyya ji ka auto rickshaw hai. Meter se fare calculate hota hai.
 * Different math operations chahiye — round karna, min/max nikalna,
 * strings se numbers parse karna. Tu Bhaiyya ji ka meter software bana!
 *
 * Methods to explore: parseFloat(), parseInt(), .toFixed(),
 *   Math.ceil(), Math.max(), Math.min(), Math.abs()
 *
 * Functions:
 *
 *   1. parseFare(fareString)
 *      - Customer bolte hain "152.50" as string — parseFloat() se number banao
 *      - Agar result NaN hai ya fareString string nahi hai, return -1
 *      - Example: parseFare("152.50") => 152.5
 *      - Example: parseFare("abc") => -1
 *
 *   2. roundFare(amount, decimalPlaces)
 *      - .toFixed(decimalPlaces) se fare round karo
 *      - Result STRING return hota hai (toFixed returns string)
 *      - Agar amount number nahi hai ya decimalPlaces non-negative integer nahi hai, return ""
 *      - Example: roundFare(152.567, 2) => "152.57"
 *      - Example: roundFare(152.567, 0) => "153"
 *
 *   3. calculateSurge(baseFare, surgeMultiplier)
 *      - baseFare * surgeMultiplier karo
 *      - Math.ceil() se always round UP (auto wale ko paisa milna chahiye!)
 *      - Agar baseFare ya surgeMultiplier positive number nahi hai, return 0
 *      - Example: calculateSurge(100, 1.5) => 150
 *      - Example: calculateSurge(73, 1.8) => 132 (Math.ceil(131.4))
 *
 *   4. findCheapestAndCostliest(...fares)
 *      - Rest parameter (...) se variable number of fares le
 *      - Math.min() aur Math.max() se cheapest aur costliest dhundho
 *      - Non-number values filter out karo
 *      - Agar koi valid number nahi mila, return null
 *      - Return: { cheapest, costliest }
 *      - Example: findCheapestAndCostliest(150, 80, 200) => { cheapest: 80, costliest: 200 }
 *
 *   5. getDistanceDifference(from, to)
 *      - parseInt() se string km markers ko numbers mein convert karo
 *      - Math.abs() se absolute difference nikalo (direction matter nahi karta)
 *      - Agar parse ke baad koi NaN hai, return -1
 *      - Example: getDistanceDifference(5, 12) => 7
 *      - Example: getDistanceDifference("15", "8") => 7
 *
 * @example
 *   parseFare("152.50")                    // => 152.5
 *   roundFare(152.567, 2)                  // => "152.57"
 *   findCheapestAndCostliest(150, 80, 200) // => { cheapest: 80, costliest: 200 }
 */
export function parseFare(fareString) {
  // Your code here 
  if (typeof fareString !== "string") {
    return -1
  } else {
    fareString = parseFloat(fareString)
    if (!isNaN(fareString)) {
      return fareString
    } else {
      return -1;
    }
  }
}

export function roundFare(amount, decimalPlaces) {
  // Your code here

  amount = parseFloat(amount)
  decimalPlaces = parseFloat(decimalPlaces)
  if (!isNaN(amount) && !isNaN(decimalPlaces) && Number.isInteger(decimalPlaces)) {
    if (amount >= 0 && decimalPlaces >= 0) {
      return Number(amount).toFixed(decimalPlaces)
    } else {
      return ""
    }
  } else {
    return ""
  }

}

export function calculateSurge(baseFare, surgeMultiplier) {
  // Your code here
  if (parseFloat(baseFare) !== NaN && parseFloat(surgeMultiplier) !== NaN && baseFare > 0 && surgeMultiplier > 0 && typeof (baseFare) !== "string" && typeof (surgeMultiplier) !== "string") {
    return Math.ceil(baseFare * surgeMultiplier)
  } else {
    return 0
  }
}

export function findCheapestAndCostliest(...fares) {
  // Your code here
  let result = null;
  let values = []
  fares.filter((e) => {
    if (typeof (e) === "number") {
      values.push(e)
    }
  })

  if (values.length !== 0) {
    result = {};
    result.cheapest = Math.min(...values)
    result.costliest = Math.max(...values)
    return result
  } else {
    return result
  }

}

export function getDistanceDifference(from, to) {
  // Your code 
  from = Number(from);
  to = Number(to);
  if (parseInt(from) !== NaN && parseInt(to) !== NaN && !isNaN(from) && !isNaN(to)) {
    from = parseInt(from)
    to = parseInt(to)
    return Math.abs(from - to)
  } else {
    return -1
  }
}
