// 모바일 메뉴
const $open = document.querySelector(".bars");
const $close = document.querySelector(".close");
const $M_nav = document.querySelector(".M_nav");
const $M_gnb = document.querySelector(".M_gnb");

const GNB = `<ul class="gnb_inner">
<li>
  <a href="#" class="gnb_title gnb_inner_title">천문대소개</a>
  <ul class="mobile_sub">
    <li><a href="#">인사말</a></li>
    <li><a href="#">현황및조직도</a></li>
    <li><a href="#">시설안내</a></li>
    <li><a href="#">홍보자료</a></li>
  </ul>
</li>
<li>
  <a href="#" class="gnb_title gnb_inner_title">이용안내</a>
  <ul class="mobile_sub">
    <li><a href="#">관람안내</a></li>
    <li><a href="#">관측대상</a></li>
    <li><a href="#">오시는길</a></li>
  </ul>
</li>
<li>
  <a href="#" class="gnb_title gnb_inner_title">예약안내</a>
  <ul class="mobile_sub">
    <li><a href="./html/sub_individual.html">관람예약(개인)</a></li>
    <li><a href="./html/sub_group.html">관람예약(단체)</a></li>
    <li><a href="#">특별프로그램</a></li>
    <li><a href="#">봉사활동</a></li>
  </ul>
</li>
<li>
  <a href="#" class="gnb_title gnb_inner_title">천문대소식</a>
  <ul class="mobile_sub">
    <li><a href="#">행사사진</a></li>
    <li><a href="#">천문정보</a></li>
    <li><a href="#">아스트로갤러리</a></li>
  </ul>
</li>
<li>
  <a href="#" class="gnb_title gnb_inner_title">커뮤니티</a>
  <ul class="mobile_sub">
    <li><a href="#">공지사항</a></li>
    <li><a href="#">방문후기</a></li>
    <li><a href="#">질문과답변</a></li>
    <li><a href="#">자주하는질문</a></li>
  </ul>
</li>
</ul>`;

$M_gnb.innerHTML = GNB;

$open.addEventListener("click", function () {
  $M_nav.classList.toggle("on");
});
$close.addEventListener("click", function () {
  $M_nav.classList.remove("on");
});

// 날씨 정보
function loadItems() {
  return fetch(
    "https://www.7timer.info/bin/api.pl?lon=127.354&lat=36.382&product=civillight&output=json"
  )
    .then((data) => data.json())
    .then((list) => list.dataseries);
}

function displayItems(items) {
  console.log(items);
  const container = document.querySelector("#weather");
  const info = items[0];
  const info2 = items[1];
  container.innerHTML = `
  <li>
    <p>
      <img src="./img/${info.weather}.png" alt="날씨아이콘" class="weather_img"/>
    </p>
    <p>오늘의 날씨</p>
    <span>${info.temp2m.max} &#8451;</span>
  </li>
  <li>
    <p>
      <img src="./img/${info2.weather}.png" alt="날씨아이콘" class="weather_img"/>
    </p>
    <p>내일의 날씨</p>
    <span>${info2.temp2m.max} &#8451;</span>
  </li>
  `;
}

loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
  })
  .catch(console.log);

// tab메뉴 : 공지사항, 방문후기
const $tabTitle = document.querySelectorAll(".sec4_title > li");
const $tabList = document.querySelectorAll(".sec4_list_con > ul");
console.log($tabTitle);
console.log($tabList);

$tabTitle.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    $tabTitle.forEach((a) => {
      a.classList.remove("on");
    });
    $tabTitle[i].classList.add("on");

    $tabList.forEach((b) => {
      b.classList.remove("on");
    });
    $tabList[i].classList.add("on");
  });
});

// sub_개인예약 Accordion
const $accordion = document.querySelector(".accordion>ul");
const $list = document.querySelectorAll(".accordion>ul>li");
const $title = document.querySelectorAll(".inform_title");
console.log($accordion);
console.log($list);
console.log($title);

function toggleAccordion() {
  const thisItem = this.parentNode;
  console.log(thisItem);
  $list.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("on");
      return;
    }
    item.classList.remove("on");
  });
}

$title.forEach((item) => {
  item.addEventListener("click", toggleAccordion);
});
