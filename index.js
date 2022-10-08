// 导航条定位弹窗
let cityChoose = document.getElementsByClassName('nav-popper')
// getElementsByClassName拿到的是一个数组
for (let i = 0; i < cityChoose.length; i++) {
  cityChoose[i].onmouseover = function () {
    this.style.backgroundColor = '#ffffff'
  }
  cityChoose[i].onmouseout = function () {
    this.style.backgroundColor = '#e3e4e5'
  }
}

// 导航列表弹窗
let navText = document.getElementsByClassName('nav-text')
for (let i = 0; i < navText.length; i++) {
  navText[i].onmouseover = function () {
    this.style.color = '#e33232'
  }
  navText[i].onmouseout = function () {
    this.style.color = '#f00'
  }
}
let navTextRed = document.getElementsByClassName('nav-text-red')
for (let i = 0; i < navTextRed.length; i++) {
  navTextRed[i].onmouseover = function () {
    this.style.color = '#e33232'
  }
  navTextRed[i].onmouseout = function () {
    this.style.color = '#f00'
  }
}

// 京东logo动画
let logo = document.getElementById('logo')
logo.onmouseover = function () {
  this.style.backgroundImage =
    'url(https://img1.360buyimg.com/da/jfs/t1/16273/9/11655/153805/5c90a4f3E683206d9/eef283b0ed619fe4.gif?v=0.49537290807778644)'
}
logo.onmouseout = function () {
  this.style.backgroundImage =
    'url(https://misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/sprite/header/sprite.png)'
}

// 搜索按钮移入变色
let searchButton = document.getElementById('search-button')
searchButton.onmouseover = function () {
  this.style.backgroundColor = '#c81623'
}
searchButton.onmouseout = function () {
  this.style.backgroundColor = '#e1251b'
}

// 购物车移入变色
let carBox = document.getElementById('shopping-car-box')
carBox.onmouseover = function () {
  this.style.border = '1px solid #c81623'
}
carBox.onmouseout = function () {
  this.style.border = '1px solid #eee'
}
let carText = document.getElementById('car-text')
carText.onmouseover = function () {
  this.style.color = '#c81623'
}
carText.onmouseout = function () {
  this.style.color = '#e1251b'
}

// 热搜词移入变色
let hotWordsTextRed = document.getElementById('hot-words-text-red')
hotWordsTextRed.onmouseover = function () {
  this.style.color = '#c81623'
}
hotWordsTextRed.onmouseout = function () {
  this.style.color = '#f00'
}
let hotWordsText = document.getElementsByClassName('hot-words-text')
for (let i = 0; i < hotWordsText.length; i++) {
  hotWordsText[i].onmouseover = function () {
    this.style.color = '#c81623'
  }
  hotWordsText[i].onmouseout = function () {
    this.style.color = '#999'
  }
}

// 头部导航条移入变色
let navItemText = document.getElementsByClassName('nav-item-text')
for (let i = 0; i < navItemText.length; i++) {
  navItemText[i].onmouseover = function () {
    this.style.color = '#c81623'
  }
  navItemText[i].onmouseout = function () {
    this.style.color = '#333'
  }
}

// 商品分类移入背景变色
let classItem = document.getElementsByClassName('class-item')
for (let i = 0; i < classItem.length; i++) {
  classItem[i].onmouseover = function () {
    this.style.backgroundColor = '#d9d9d9'
  }
  classItem[i].onmouseout = function () {
    this.style.backgroundColor = '#fefefe'
  }
}

// 商品分类文字移入变色
let classItemText = document.getElementsByClassName('class-item-text')
for (let i = 0; i < classItemText.length; i++) {
  classItemText[i].onmouseover = function () {
    this.style.color = '#c81623'
  }
  classItemText[i].onmouseout = function () {
    this.style.color = '#333'
  }
}

// 登录文字移入变色
let loginUserText = document.getElementsByClassName('login-user-text')
for (let i = 0; i < loginUserText.length; i++) {
  let carry
  loginUserText[i].onmouseover = function () {
    carry = this.style.color
    this.style.color = '#c81623'
  }
  loginUserText[i].onmouseout = function () {
    this.style.color = carry
  }
}

// 新人福利和PLUS会员移入变色
let userButton = document.getElementsByClassName('user-button')
for (let i = 0; i < userButton.length; i++) {
  let carryBack, carryText
  userButton[i].onmouseover = function () {
    carryBack = this.style.backgroundColor
    carryText = this.style.color
    this.style.backgroundColor = '#c81623'
    this.style.color = '#fff'
  }
  userButton[i].onmouseout = function () {
    this.style.backgroundColor = carryBack
    this.style.color = carryText
  }
}

// 京东快报的更多移入变色
let newsTitleMoreBox = document.getElementById('news-title-more-box')
newsTitleMoreBox.onmouseover = function () {
  document.getElementById('news-title-more').style.color = '#c81623'
  document
    .getElementsByClassName('news-title-more-icon')[0]
    .setAttribute('class', 'iconfont icon-arrow-right-red news-title-more-icon')
}
newsTitleMoreBox.onmouseout = function () {
  document.getElementById('news-title-more').style.color = '#999'
  document
    .getElementsByClassName('news-title-more-icon')[0]
    .setAttribute('class', 'iconfont icon-arrow-right news-title-more-icon')
}

// 京东快报新闻列表移入变色
let newsListItem = document.getElementsByClassName('news-list-item')
for (let i = 0; i < newsListItem.length; i++) {
  newsListItem[i].onmouseover = function () {
    this.style.color = '#c81623'
  }
  newsListItem[i].onmouseout = function () {
    this.style.color = '#999'
  }
}

// 各种服务移入变色
let serviceItem = document.getElementsByClassName('service-item')
let serviceItemText = document.getElementsByClassName('service-item-text')
let serviceItemIcon = document.getElementsByClassName('service-item-icon')
for (let i = 0; i < serviceItem.length; i++) {
  let carry
  serviceItem[i].onmouseover = function () {
    serviceItemText[i].style.color = '#c81623'
    carry = serviceItemIcon[i].className
    let carryChange = carry.replace('origin', 'red')
    serviceItemIcon[i].setAttribute('class', carryChange)
  }
  serviceItem[i].onmouseout = function () {
    serviceItemText[i].style.color = '#333'
    serviceItemIcon[i].setAttribute('class', carry)
  }
}
