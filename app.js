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
      Math.random() * (this.maxcust - this.mincust) + this.mincust
    );
    return Math.floor(ranNum * 6.3);
  },

  render() {
    var container = document.createElement('section');
    var NameStore = document.createElement('h3');
    var salesList = document.createElement('ul');

    NameStore.textContent=this.nameofStore;

    for (var i = 0; i < this.openHours.length; i++) {
      var ret = this.randomN();
      var txtOut = document.createElement('li');
      txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
      salesList.appendChild(txtOut);
    }

    container.appendChild(NameStore);
    container.appendChild(salesList);

    var main = document.getElementById('main-content');
    main.appendChild(container);
  }
};
