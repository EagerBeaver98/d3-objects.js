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

const combineSales = function(sales) {

};

const calculateSalesTax = function(salesData, taxRates) {
  //split by comp
  for (const name of salesData) {
    
  }
  //add provincial sales totals
  //apply provincial tax
  //sub sales from total to get tax
  //combine provincial totals
};