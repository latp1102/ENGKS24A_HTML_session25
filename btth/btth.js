const cards = [];

/**
 * hàm thêm giá vào giỏ hàng
 * @param {*} price lấy giá
 * @returns giỏ hàng sau khi thêm
 * Auth: 11/03/2025
 */
const addPrice = (price) => {
  cards.push(price);
  return cards;
};
/**
 *
 * @param {*} index vị trí muốn xóa
 * @param {*} newPrice cập nhật giá
 * @returns giá sau khi thêm
 */
const updatePrice = (index, newPrice) => {
  cards[index] = newPrice;

  return cards;
};

const removePrice = (index) => {
  if (index < 0 || index > cards.length) {
    return "Vị trí không hợp lệ";
  }
  // xóa vị trí của phần tử trong mảng
  cards.splice(index, 1);

  return cards;
};

const toatlPrice = () => {
    let total = 0;

    for (let i = 0; i < cards.length; i++) {

        total += cards[i];
    }

    return total;
};

const resultAdd1 = addPrice(10000);
const resultAdd2 = addPrice(20000);
const resultAdd3 = addPrice(30000);
// console.log("resultAdd1", resultAdd1);
// console.log("resultAdd2", resultAdd2);
console.log("resultAdd3", resultAdd3);

const resultUpdate1 = updatePrice(0, 40000);
console.log("resluUpdaet", resultUpdate1);

resultRemove1 = removePrice(1);
console.log("resultRemove1", resultRemove1);

const resultTotalPrice = toatlPrice(1);

console.log("resultTotalPrice", resultTotalPrice.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
