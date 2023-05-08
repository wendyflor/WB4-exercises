const partCode1 = "XYZ:1234-L";

const part1 = parsePartCode(partCode1);
console.log("part code: ", partCode1);
console.log("part1.supplierCode:", part1.supplierCode);
console.log("part1.productNumber:", part1.productNumber);
console.log("part1.size: ", part1.size);

function parsePartCode(partCode) {
  const colonPos = partCode.indexOf(":");
  const dashPos = partCode.indexOf("-");

  const thissupplierCode = partCode.substring(0, colonPos);
  const productNumber = partCode.substring(colonPos + 1, dashPos);
  const size = partCode.substring(dashPos + 1);
  return {
    supplierCode: thissupplierCode,
    productNumber: productNumber,
    size: size,
  };
}

//const partCode1 = {
// supplierCode: '1234',
// productNumber: '987',
// size: 'L'
//}

//let partCode1 = "XYZ:1234-L";
//let part1 = parsePartCode(partCode1);
//console.log("Supplier: "+ part1.supplierCode + "Product Numbe: " + part1.productNumber +
//"Size: " + part1.size):

//printContact(partCode1);

//function printContact(partCode1) {
console.log();
//}
