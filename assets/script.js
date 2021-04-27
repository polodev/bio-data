var items = [
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
  {
    key: `hello`,
    value: `hello`,
  },
];

(function () {
var App = {
  init: function () {
    this.domCached()
    this.render()
  },
  items: items,
  domCached: function () {
    this.table_content = document.getElementById('table_content')
  },
  generateTd: function (tdValue, tr, bsTdClass) {
    let td = document.createElement('td');
    td.className = bsTdClass;
    td.innerHTML = tdValue;
    tr.appendChild(td);
  },
  render: function () {
    this.items.forEach(item => {
      let tr = document.createElement('tr');
      tr.className = 'd-flex';
      this.generateTd(item.key, tr, 'col-3 col-lg-2 text-right')
      this.generateTd(item.value, tr, 'col-9 col-lg-10')
      this.table_content.appendChild(tr);
    })
  }
}
App.init();
}()); 