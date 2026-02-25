/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */

export function createThaliDescription(thali) {
  // Your code here
  try {
    let result = "";
    const name = thali["name"];
    const item = thali["items"];
    const price = thali["price"];
    const isVeg = thali["isVeg"];
    const vailid = typeof name === "string" && Array.isArray(item) && typeof price === "number" && typeof isVeg === "boolean"

    if (vailid) {
      result = `${name.toUpperCase()} (${isVeg ? "Veg" : "Non-Veg"}) - Items: ${item.join(", ")} - Rs.${price.toFixed(2)}`
    }

    return result
  } catch (error) {
    return ""
  }
}

export function getThaliStats(thalis) {
  // Your code here
  let result = null;
  if (Array.isArray(thalis) && thalis.length > 0) {
    const prices = thalis.map((thali) => thali.price)
    result = {
      totalThalis: 0,
      vegCount: 0,
      nonVegCount: 0,
      avgPrice: Number(0).toFixed(2),
      cheapest: Number(0),
      costliest: Number(0),
      names: []
    }

    result.totalThalis = thalis.length;

    result.vegCount = thalis.filter((thali) => thali?.isVeg).length;

    result.nonVegCount = thalis.filter((thali) => !thali?.isVeg).length;
    result.avgPrice = (prices.reduce((acc, crr) => { return acc + crr }, 0) / prices.length).toFixed(2)
    result.cheapest = Math.min(...prices);
    result.costliest = Math.max(...prices);


    result.names = thalis.map((thali) => thali.name)
  }
  return result
}

export function searchThaliMenu(thalis, query) {
  // Your code here
  let result = [];
  if (Array.isArray(thalis) && typeof query === "string") {
    query = query.toLowerCase()

    result = thalis.filter((thali) => {
      const Name = String(thali.name).toLowerCase();
      const items = thali.items.toString();
      if (Name.includes(query) || items.includes(query)) {
        return thali
      }
    })

  }
  return result
}

export function generateThaliReceipt(customerName, thalis) {
  // Your code here
  let result = "";
  if (typeof customerName === "string" && Array.isArray(thalis) && thalis.length > 0) {
    const item_line = thalis.map((thali) => `- ${thali.name} x Rs.${thali.price}`);
    let total = 0;
    thalis.forEach((thali) => {
      total += thali.price
    })
    result = `THALI RECEIPT\n---\nCustomer: ${customerName.toUpperCase()}\n${item_line.join("\n")}\n---\nTotal: Rs.${total}\nItems: ${item_line.length}`
  }
  return result
}
