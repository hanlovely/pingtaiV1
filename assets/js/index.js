// var uls = document.getElementById('uls');
// var ulis = uls.getElementsByTagName('li');
// var ols = document.getElementById('ols');
// var olis = ols.getElementsByTagName('li');
// var left = document.getElementById('left');
// var right = document.getElementById('right');
var box = document.getElementById('box');
var qiuone = document.querySelector('.qiuone');
var qiutwo = document.querySelector('.qiutwo');
var qiuthree = document.querySelector('.qiuthree');
var qiufuor = document.querySelector('.qiufuor');
var childone = document.querySelector('.childone');
var childtwe = document.querySelector('.childtwe');
var childThree = document.querySelector('.childThree');
var childFour = document.querySelector('.childFour');
var header = document.querySelector('.header');
var headers = document.querySelector('.headers');
// var count = 0;
// var timer = null;
// timer = setInterval(auto, 2500);
// olis[0].id = 'current';

// function auto() {
//     count++;
//     if (count > ulis.length - 1) {
//         count = 0;
//     }
//     for (var i = 0; i < ulis.length; i++) {
//         ulis[i].style.display = 'none';
//         olis[i].id = '';
//     }
//     ulis[count].style.display = 'block';
//     olis[count].id = 'current'
// }
// right.onclick = function() {
//     auto();
// }
// box.onmouseover = function() {
//     clearInterval(timer);
// }
// box.onmouseout = function() {
//     timer = setInterval(auto, 2500);
// }
// left.onclick = function() {
//         count--;
//         if (count < 0) {
//             count = ulis.length - 1;
//         }
//         for (var i = 0; i < ulis.length; i++) {
//             ulis[i].style.display = 'none';
//             olis[i].id = '';
//         }
//         ulis[count].style.display = 'block'; // backgroundColor  display
//         olis[count].id = 'current'

//     }
   
// for (var i = 0; i < olis.length; i++) {
//     olis[i].aaa = i;
//     olis[i].onclick = function() {
//         for (var i = 0; i < ulis.length; i++) {
//             ulis[i].style.display = 'none';
//             olis[i].id = '';
//         }
//         ulis[this.aaa].style.display = 'block';
//         olis[this.aaa].id = 'current';

//         count = this.aaa;
//     }
// }
 // 给小圆球绑定滑过事件
qiuone.onmouseover = function() {
    childFour.style.boxShadow = "0px 7px 40px 10px rgba(13, 37, 62, 0.1)"
}
qiuone.onmouseout = function() {
    childFour.style.boxShadow = ""
}
qiutwo.onmouseover = function() {
    childone.style.boxShadow = "0px 7px 40px 10px rgba(13, 37, 62, 0.1)"
}
qiutwo.onmouseout = function() {
    childone.style.boxShadow = ""
}

qiuthree.onmouseout = function() {
    childThree.style.boxShadow = ""
}
qiuthree.onmouseover = function() {
    childThree.style.boxShadow = "0px 7px 40px 10px rgba(13, 37, 62, 0.1)"
}
qiufuor.onmouseout = function() {
    childtwe.style.boxShadow = ""
}
qiufuor.onmouseover = function() {
        childtwe.style.boxShadow = "0px 7px 40px 10px rgba(13, 37, 62, 0.1)"
    }
    // windowAddMouseWheel();




// function windowAddMouseWheel() {
//     var scrollFunc = function(e) {
//         var t = document.documentElement.scrollTop || document.body.scrollTop;
//         console.log(t)
//         if (t >= 100) {
//             header.style.cssText = "background:rgba(0,0,0,0.8);transition: background 1s ease,transform 1s ease-in 1s"
//         } else {
//             header.style.background = ""
//         }
//     };
//     //滚动滑轮触发scrollFunc方法 
//     window.onmousewheel = document.onmousewheel = scrollFunc;
// }