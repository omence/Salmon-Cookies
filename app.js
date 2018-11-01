'use strict';
function createTable() {
  var main = document.getElementById('main-content');
  var tblEL = document.createElement('table');
  var theadEL = document.createElement('thead');
  var tbodyEL = document.createElement('tbody');
  var tfootEL = document.createElement('tfoot');

  main.appendChild(tblEL);
  tblEL.appendChild(theadEL);
  theadEL.appendChild(tbodyEL);
  tbodyEL.appendChild(tfootEL);

  tblEL.id = 'stores-table';
  theadEL.id = 'table-head';
  tbodyEL.id = 'table-body';
  tfootEL.id = 'table-foot';
  tblEL.className = 'tbl';
}
console.log('createTable', createTable);
var openHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];

var stores = [];

function Stores(Name, minCustomersPerHour, maxCustomersPerHour, averageCookiesSold) {
  this.Name = Name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesSold = averageCookiesSold;
  //this.cookiesPerHr = [];
  //this.avarageNumPeo = [];
  //this.hoursOpen = openHours;
  //this.totalcookiesPerday = 0;

  Stores.push(this);
  this.render();

  this.randomcusPerHourGen = function() {
    for (var i = 0; i < openHours.length; i++) {
      var ranNum = Math.floor(
        Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour);
      return Math.floor(ranNum * this.aveNumCookSale);
    }
  };
}
Stores.prototype.render = function() {
  var tblEL = document.getElementById('Stores-table');
  var tbodyEL = document.getElementById('table-body');
  var tfootEL = document.getElementById('table-foot');
  var theadEL = document.getElementById('table-head');
  var rowEL = document.createElement('tr');

  // for (var i = 0; i < openHours.length; i++) {
  // var tabHead = document.createElement('td');
  // tabHead.textContent = openHours;
  // headRow.appendChild(tabHead);
  // theadEL.appendChild(headRow);

  // var rowHead = document.createElement('th');
  // rowHead.textContent = this.nameofStore;
  // rowEL.appendChild(rowHead);
  // tbodyEL.appendChild(rowEL);
  // theadEL.appendChild(tbodyEL);

  // for (var i = 0; i < openHours.length; i++) {
  //   var ret = randomN;
  //   totalCookies += ret;
  //   var thEL = document.createElement('th');
  //   thEL.textContent = openHours[i];
  //   tbodyEL.appendChild(thEL);
  //   var tdEL = document.createElement('td');
  //   tdEL.textContent = ret;
  // }
//   bodyrowEL.appendChild(tdEL);
};

Stores.prototype.render();

new Stores('1st and Pike', 23, 65, 6.3);
new Stores('seaTac', 3, 24, 1.2);
new Stores('Seattle Center', 11, 38, 3.7);
new Stores('Capitol Hill', 20, 38, 2.3);
