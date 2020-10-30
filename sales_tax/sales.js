const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const combineSales = function(sales) { //adds all sales together
  let totalSales = 0;
  for (let number of sales) {
    totalSales += number;
  }
  return totalSales;
};

const taxCalc = function(sales, taxes) {
  let final = Math.floor(sales + (sales * taxes));
  let sub = final - sales;
  return [sales, sub];
};

const calculateSalesTax = function(salesData, taxRates) {
  const final = {};
  let total = [];
  for (const entry in salesData) { //loops through salesData object
    const sales = combineSales(salesData[entry].sales);
    if (salesData[entry].province === "AB") { //adds tax by province
      total = taxCalc(sales, taxRates.AB);
    } else if (salesData[entry].province === "BC") {
      total = taxCalc(sales, taxRates.BC);
    } else if (salesData[entry].province === "SK") {
      total = taxCalc(sales, taxRates.SK);
    }
    if (final[salesData[entry].name]) {
      final[salesData[entry].name].totalSales += total[0];
      final[salesData[entry].name].totalTaxes += total[1];
    } else {
      final[salesData[entry].name] = {};
      final[salesData[entry].name].totalSales = total[0];
      final[salesData[entry].name].totalTaxes = total[1];
    }
  }
  return final;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));

