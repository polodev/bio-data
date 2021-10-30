var items = [
  {
    key: `Name`,
    value: `Shibu Chandra Debnath`,
  },
  {
    key: `Contacts`,
    value: `
      Mobile: 01670978989 <br>
      Email: shibu@bimafy.com 
    `,
  },
  {
    key: `Date Of Birth`,
    value: `Nov 10, 1990`,
  },
  {
    key: `Height`,
    value: `5 feet 7 inch`,
  },
  {
    key: `Blood Group`,
    value: `B+`,
  },
  {
    key: `Education`,
    value: `
     <strong>Post Graduation Diploma in ICT (concentration in PHP)</strong> <br>
     - Bangladesh Computer Council(FTFL) <br>
     <strong> BBS in Marketing </strong> <br> 
     - Govt. Titumir College
    `,
  },
  {
    key: `Work <br> Exeperiences`,
    value: `

    <p class="">
      <a href="https://polodev.github.io/">Full CV - https://polodev.github.io/</a>
    </p>

    <strong> Jun 2019 - present </strong> <br>
    <div class='company'>Flair Technology - <a href="https://bimafy.com">Bimafy.com</a> </div>
    <div class='description'>
      <div class="role">Co-founder and CTO</div>
    </div>
    <hr>

    <strong> Jan 2019 - present </strong> <br>
    <div class='company'>
      <a href="https://themeforest.net/user/radiustheme/portfolio">Radius Theme</a>
    </div>
    <div class='description'>
      <div class="role">Themes and plugin developer</div>
    </div>
    <hr>
    <strong> April 2018 - Sep 2018 </strong> <br>
    <div class='company'>Great & Smart Technology Ltd</div>
    <div class='description'>
      <div class="role">Technical trainer of web development with php, laravel and mysql.</div>
      <div>As a technical trainer I teach php, mysql, laravel.</div>
    </div>
    <hr>
      <strong> Sep 2017 — April 2018 </strong> <br>
      <div class='company'>Ernst & Young (LICT Project)</div>
      <div class='description'>
        <div class="role">Technical trainer of web development with php, laravel and mysql.</div>
        <div>As a Web Developer trainer of Lict project, I teach php, mysql, laravel.</div>
      </div>
    <hr>
      <strong>Feb 2016 — May 2017</strong><br>
      <div class='company'>IB Hubs (Hyderabad and Bangalore India) and CyberEye™ Research Labs & Security Solutions Pvt. Ltd</div>
      <div class='description'>
        <div class="role">Front End Web Developer.</div>
      </div>


    `,
  },
  {
    key: `Father`,
    value: `
    
    Horipad chandra debnath<br>
    Profession - Business <br>
    Contact - 01713608143 <br>
    
    `,
  },
  {
    key: `Mother`,
    value: `
    
    Anima Rani Debnath<br>
    Profession - Housewife <br>
    Mobile - 01790943994 <br>
    
    `,
  },
  {
    key: `Siblings`,
    value: `
    
    3 elder sisters ( All married ) <br>
    1 younger Brother work and live in Malaysia <br>
    I am the 4th among siblings <br>
    
    `,
  },
  {
    key: `Dhaka Address `,
    value: `
    House 15, Road 11, Gudaraghat, Uttar Badda, Dhaka
    `,
  },
  {
    key: `Permanent Address`,
    value: `
      Vil: Palashpur <br>
      Pos + Upazila - Kachua <br>
      Dis: Chandpur <br>
      <br>   

      And <br>
      Vil: Fatepur <br>
      Pos. - Tulpai <br>
      Upazila. - Kachua <br>
      Dis: Chandpur <br>   
    `,
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