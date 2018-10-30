'use strict';
var firstAndPike = {
  nameofStore: '1st and Pike',
  minCusPerhr: 23,
  maxCusPerhr: 65,
  aveNumCookSale: 6.3,
  openHours: [
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
  ],
  randomN: function() {
    var ranNum = Math.floor(
      Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
    );
    return Math.floor(ranNum * this.aveNumCookSale);
  },

  render() {
    var container = document.createElement('section');
    var NameStore = document.createElement('h3');
    var salesList = document.createElement('ul');

    NameStore.textContent = this.nameofStore;
    var totalCookies = 0;
    for (var i = 0; i < this.openHours.length; i++) {
      var ret = this.randomN();
      totalCookies += ret;
      var txtOut = document.createElement('li');
      txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
      salesList.appendChild(txtOut);
    }
    var totaltxt = document.createElement('li');
    totaltxt.textContent = `Total: ${totalCookies} cookies`;
    salesList.appendChild(totaltxt);

    container.appendChild(NameStore);
    container.appendChild(salesList);

    var main = document.getElementById('main-content');
    main.appendChild(container);
  }
};
firstAndPike.render();

var seaTac = {
  nameofStore: 'Seatac Airport',
  minCusPerhr: 3,
  maxCusPerhr: 24,
  aveNumCookSale: 1.2,
  openHours: [
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
  ],
  randomN: function() {
    var ranNum = Math.floor(
      Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
    );
    return Math.floor(ranNum * this.aveNumCookSale);
  },

  render() {
    var container = document.createElement('section');
    var NameStore = document.createElement('h3');
    var salesList = document.createElement('ul');

    NameStore.textContent = this.nameofStore;
    var totalCookies = 0;
    for (var i = 0; i < this.openHours.length; i++) {
      var ret = this.randomN();
      totalCookies += ret;
      var txtOut = document.createElement('li');
      txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
      salesList.appendChild(txtOut);
    }
    var totaltxt = document.createElement('li');
    totaltxt.textContent = `Total: ${totalCookies} cookies`;
    salesList.appendChild(totaltxt);

    container.appendChild(NameStore);
    container.appendChild(salesList);

    var main = document.getElementById('main-content');
    main.appendChild(container);
  }
};
seaTac.render();

var seattleCenter = {
  nameofStore: 'Seattle Center',
  minCusPerhr: 11,
  maxCusPerhr: 38,
  aveNumCookSale: 3.7,
  openHours: [
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
  ],
  randomN: function() {
    var ranNum = Math.floor(
      Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
    );
    return Math.floor(ranNum * this.aveNumCookSale);
  },

  render() {
    var container = document.createElement('section');
    var NameStore = document.createElement('h3');
    var salesList = document.createElement('ul');

    NameStore.textContent = this.nameofStore;
    var totalCookies = 0;
    for (var i = 0; i < this.openHours.length; i++) {
      var ret = this.randomN();
      totalCookies += ret;
      var txtOut = document.createElement('li');
      txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
      salesList.appendChild(txtOut);
    }
    var totaltxt = document.createElement('li');
    totaltxt.textContent = `Total: ${totalCookies} cookies`;
    salesList.appendChild(totaltxt);

    container.appendChild(NameStore);
    container.appendChild(salesList);

    var main = document.getElementById('main-content');
    main.appendChild(container);
  }
};
seattleCenter.render();

var capHill = {
  nameofStore: 'Capital Hill',
  minCusPerhr: 20,
  maxCusPerhr: 38,
  aveNumCookSale: 2.3,
  openHours: [
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
  ],
  randomN: function() {
    var ranNum = Math.floor(
      Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
    );
    return Math.floor(ranNum * this.aveNumCookSale);
  },

  render() {
    var container = document.createElement('section');
    var NameStore = document.createElement('h3');
    var salesList = document.createElement('ul');

    NameStore.textContent = this.nameofStore;
    var totalCookies = 0;
    for (var i = 0; i < this.openHours.length; i++) {
      var ret = this.randomN();
      totalCookies += ret;
      var txtOut = document.createElement('li');
      txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
      salesList.appendChild(txtOut);
    }
    var totaltxt = document.createElement('li');
    totaltxt.textContent = `Total: ${totalCookies} cookies`;
    salesList.appendChild(totaltxt);

    container.appendChild(NameStore);
    container.appendChild(salesList);

    var main = document.getElementById('main-content');
    main.appendChild(container);
  }
};
capHill.render();

