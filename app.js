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
createTable();
console.log('createTable', createTable);

var stores = [];
console.log('stores', stores);
function Stores(Name,minCustomersPerHour,maxCustomersPerHour,averageCookiesSold) {
  this.nameofStore = Name;
  this.minCusPerhr = minCustomersPerHour;
  this.maxCusPerhr = maxCustomersPerHour;
  this.aveNumCookSale = averageCookiesSold;

  stores.push(this);
  this.render();
}
console.log(Stores);
Stores.prototype.render = function() {
  var theadEL = document.getElementById('table-head');
  var tbodyEL = document.getElementById('table-body');
  var tfootEL = document.getElementById('table-foot');

  this.openHours = [
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
  function randomN() {
    var ranNum = Math.floor(
      Math.random() * (this.maxCusPerhr - this.minCusPerhr) +
      this.minCusPerhr);
    return Math.floor(ranNum * this.aveNumCookSale);
  }
  console.log('something',randomN);

  for (var r =0; r < stores; r++) {
    var bodyrowEL = document.createElement('tr');
    tbodyEL.appendChild(bodyrowEL);
  }
  
  var totalCookies = 0;
  for (var i = 0; i < this.openHours.length; i++) {
    var ret = this.randomN;
    totalCookies += ret;
    var thEL = document.createElement('th');
    thEL.textContent = this.openHours[i];
    theadEL.appendChild(thEL);
    var tdEL = document.createElement('td');
    tdEL.textContent = ret;
  }
  bodyrowEL.appendChild(tdEL);
};

Stores.prototype.render();

new Stores('1st and Pike', 23, 65, 6.3);
new Stores('seaTac', 3, 24, 1.2);
new Stores('Seattle Center', 11, 38, 3.7);
new Stores('Capitol Hill', 20, 38, 2.3);