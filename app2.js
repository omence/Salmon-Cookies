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
var openHours = ['Stores:', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total:'];

// var theadEL = document.getElementById('table-head');
// for(var i = 0; i < openHours.length; i++) {
//   var headRow = document.createElement('tr');
//   var head = document.createElement('th');
//   head.textContent = openHours[i];
//   theadEL.appendChild(headRow);
//   headRow.appendChild(head);
// }

createTable();
console.log('createTable', createTable);

var stores = [];
console.log('stores', stores);
function Stores(
  Name,
  maxCustomersPerHour,
  minCustomersPerHour,
  averageCookiesSold
) {
  this.Name = Name;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.minCustomersPerHour = minCustomersPerHour;
  this.averageCookiesSold = averageCookiesSold;
  this.totalCookies = 0;
  stores.push(this);
  this.render();
}
console.log(Stores);

Stores.prototype.randNum = function() {
  var ranNum = Math.floor(
    Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) +
      this.minCustomersPerHour
  );
  return Math.floor(ranNum * this.averageCookiesSold);
};

Stores.prototype.render = function() {
  var theadEL = document.getElementById('table-head');
  var tbodyEL = document.getElementById('table-body');
  var tfootEL = document.getElementById('table-foot');

  theadEL.appendChild(tbodyEL);

  var bodyrowEL = document.createElement('tr');
  var bodyHead = document.createElement('th');
  bodyHead.textContent = this.Name;
  tbodyEL.appendChild(bodyrowEL);
  bodyrowEL.appendChild(bodyHead);


  for (var i = 0; i < 15; i++) {
    var tdEL = document.createElement('td');
    tdEL.textContent = this.randNum();
    bodyrowEL.appendChild(tdEL);
  }
};

Stores.prototype.render();

new Stores('1st and Pike', 65, 23, 6.3);
new Stores('seaTac', 24, 3, 1.2);
new Stores('Seattle Center', 38, 11, 3.7);
new Stores('Capitol Hill', 38, 20, 2.3);
