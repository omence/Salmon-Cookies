'use strict';
var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var stores = [];

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;

  stores.push(this);
  this.render();

  createTableFooter();
}

Store.prototype.generateRandomCustPerHour = function(min, max) {
  for (var i = 0; i < openHours.length; i++) {
    var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
    this.custPerHour.push(randomCust);
  }
};

Store.prototype.generateHourlySales = function() {

  this.generateRandomCustPerHour(this.min, this.max);

  for (var i = 0; i < openHours.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avg);
    this.cookiesPerHour.push(perHour);

    this.dailyTotal += perHour;
  }
};

Store.prototype.render = function() {

  this.generateHourlySales();

  var tbodyEl = document.getElementById('tbl-body');
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for(var i = 0; i < openHours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var totalEl = document.createElement('td');
  totalEl.textContent = this.dailyTotal;
  trEl.appendChild(totalEl);

  tbodyEl.appendChild(trEl);
};

function createTable() {
  var mainEl = document.getElementById('main-content');
  var tblEl = document.createElement('table');
  tblEl.id = 'sales-table';
  mainEl.appendChild(tblEl);
}

function createTableHeader() {
  var tblEl = document.getElementById('sales-table');
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var emptyTh = document.createElement('th');

  trEl.appendChild(emptyTh);

  for(var i = 0; i < openHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = openHours[i];
    trEl.appendChild(thEl);
  }

  var totalEl = document.createElement('th');
  totalEl.textContent = 'Total';
  trEl.appendChild(totalEl);

  theadEl.appendChild(trEl);
  tblEl.appendChild(theadEl);
}

function createTableBody() {
  var tblEl = document.getElementById('sales-table');
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbl-body';
  tblEl.appendChild(tbodyEl);
}

function createTableFooter() {
  var tfootElCheck = document.getElementById('tbl-foot');

  if(tfootElCheck) {
    tfootElCheck.remove();
  }

  var tblEl = document.getElementById('sales-table');
  var tfootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');

  tfootEl.id = 'tbl-foot';

  var emptyThEl = document.createElement('th');
  trEl.appendChild(emptyThEl);

  var grandTotal = 0;
  for(var i = 0; i < openHours.length; i++) {
    var tdEl = document.createElement('td');
    var totals = 0;

    for(var j = 0; j < stores.length; j++) {
      totals += stores[j].cookiesPerHour[i];
    }

    tdEl.textContent = totals;
    trEl.appendChild(tdEl);

    grandTotal += totals;
  }

  var grandTotalEl = document.createElement('td');
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);

  tfootEl.appendChild(trEl);
  tblEl.appendChild(tfootEl);
}


(function run() {
  createTable();
  createTableHeader();
  createTableBody();
})();

new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


document.getElementById('sales-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = event.target.storename.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  new Store(name, min, max, avg);

  event.target.storename.value = '';
  event.target.min.value = '';
  event.target.max.value = '';
  event.target.avg.value = '';
});