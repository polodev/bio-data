var items = [
  {
    key: `নাম`,
    value: `শিবু চন্দ্র দেব নাথ (পলু)`,
  },
  {
    key: `Contacts`,
    value: `
      মোবাইল: 01670978989 <br>
      ইমেইল: shibu@bimabd.com 
    `,
  },
  {
    key: `জন্ম তারিখ`,
    value: `Nov ১০, ১৯৯০`,
  },
  {
    key: `উচ্চতা`,
    value: `৫ ফিট ৮ ইঞ্চি (১৭৩ সেমি.)`,
  },
  {
    key: `শিক্ষাগত যোগ্যতা`,
    value: `
     <strong>Post Graduation Diploma in ICT (concentration in PHP)</strong> <br>
     - Bangladesh Computer Council(FTFL) <br>
     <strong> BBS in Marketing </strong> <br> 
     - Govt. Titumir College
    `,
  },
  {
    key: `কাজের অভিজ্ঞতা`,
    value: `

    <p class="">
      <a href="https://polodev.github.io/">Full CV - https://polodev.github.io/</a>
    </p>

    <strong> Jun 2019 - present </strong> <br>
    <div class='company'>Flair Technology - <a href="https://bimabd.com">Bimabd.com</a> </div>
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
    key: `বাবা`,
    value: `
    
    হরিপদ চন্দ্র দেবনাথ <br>
    পেশা - ব্যাবসা <br>
    মোবাইল - ০১৭১৩৬০৮১৪৩ <br>
    
    `,
  },
  {
    key: `মা`,
    value: `
    
    অনিমা রানী দেবনাথ <br>
    পেশা - গৃহিণী <br>
    মোবাইল - ০১৭৯০৯৪৩৯৯৪ <br>
    
    `,
  },
  {
    key: `ভাই বোন`,
    value: `
    
    বড় ৩ বোন বিবাহিত <br>
    ছোট ভাই মালয়েশিয়াতে থাকে <br>
    আমার অবস্থান ভাই বোন দের মাঝে ৪র্থ <br>
    
    `,
  },
  {
    key: `ঢাকা ঠিকানা - `,
    value: `
      বাড়ি ১৫, রোড ১১, গুদারাঘাট, উত্তর বাড্ডা ঢাকা     
    `,
  },
  {
    key: `স্থায়ী ঠিকানা - `,
    value: `
      গ্রামঃ পলাশপুর <br>
      পোস্ট + উপজেলা. - কচুয়া <br>
      জেলা: চাঁদপুর <br>
      <br>   

      অথবা <br>
      গ্রামঃ ফতেপুর <br>
      পোস্টঃ - তুলপাই <br>
      উপজেলা. - কচুয়া <br>
      জেলা: চাঁদপুর <br>   
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