// var getUrl = 'https://test.deepsec.cn';
window.onload = function() {
    var basePath = '';
    // var basePath = 'https://test.deepsec.cn';
    // var basePath = 'https://www.zengxin.com.cn';
    //C:/Users/admin/Desktop/future/zengxin/web
    // var basePath = 'file:///Users/qze/www/web/'
    function sawl_go(url) {
        url = '/' + url;
        top.location = basePath + url;
    }
    var go = document.getElementById('golian');
    var index = document.getElementById('index');
    var productservice = document.getElementById('productservice');
    var addcredit = document.getElementById('addcredit');
    var notarization = document.getElementById('notarization');
    var xinxinsearch = document.getElementById('xinxinsearch');
    var xinyunyun = document.getElementById('xinyunyun');
    var intelligent = document.getElementById('intelligent');
    var solve = document.getElementById('solve');
    var propertyright = document.getElementById('propertyright');
    var finance = document.getElementById('finance');
    var industry = document.getElementById('industry');
    var consultation = document.getElementById('consultation');
    var about = document.getElementById('about');
    var gongzheng = document.getElementById('gongzheng');
    // var detailstwo = document.getElementById('detailstwo');
    // var details = document.getElementById('details');
    // var detailstwothree = document.getElementById('detailstwothree');
    // var detailsFour = document.getElementById('detailsFour');
    // var blockchain = document.getElementById('blockchain');
    var brows = document.getElementById('brow');
    var login = document.getElementById('login');
    brows.onclick = function() {
        sawl_go('deepchain/deepchain.html')
        }
    // 深安链
    // go.onclick = function() {
    //     //     sawl_go('browsers/browser.html')
    //     //     }
    go.onclick = function() {
        sawl_go('browsers/browser.html')
    }
        //首页
    index.onclick = function() {
            sawl_go('index.html')
        }
    //登陆
    login.onclick = function() {
        sawl_go('login.html')
    }
        //增信存证
    productservice.onclick = function() {
            sawl_go('productservice/productservice.html')
        }
        //增信e签
    addcredit.onclick = function() {
            sawl_go('productservice/addcredit.html')
        }
        //赋强公证
    notarization.onclick = function() {
            sawl_go('productservice/notarization.html')
        }
        //增信搜
    xinxinsearch.onclick = function() {
            sawl_go('productservice/xinxinsearch.html')
        }
        //增信搜
    xinyunyun.onclick = function() {
            sawl_go('productservice/xinyunyun.html')
        }
        //增信搜
    intelligent.onclick = function() {
            sawl_go('productservice/intelligent.html')
        }
        //增信搜
    intelligent.onclick = function() {
            sawl_go('productservice/intelligent.html')
        } //银行
    solve.onclick = function() {
            sawl_go('solve/solve.html')
        } //知识产权保护
    propertyright.onclick = function() {
            sawl_go('solve/propertyright.html')
        } //互联网金融
    finance.onclick = function() {
            sawl_go('solve/finance.html')
        } //公证行业
    industry.onclick = function() {
            sawl_go('solve/industry.html')
        } //新闻资讯
    consultation.onclick = function() {
            sawl_go('consultation/consultation.html')
        } //关于我们
    about.onclick = function() {
            sawl_go('about.html')
        } //公证书查验
    gongzheng.onclick = function() {
            sawl_go('cenccs/notary-inspection.html')
        } //又逢大时代文章




    // brows.onclick = function() {
    //     sawl_go('deepchain/index.html')
    // }
    // details.onclick = function() {
    //         sawl_go('indexnews/details.html')
    //     } //拐点来临文章
    // detailstwo.onclick = function() {
    //         sawl_go('indexnews/detailstwo.html')
    //     } //深安未来文章
    // detailstwothree.onclick = function() {
    //         sawl_go('indexnews/detailstwothree.html')
    //     } //深安未来放大招文章
    // detailsFour.onclick = function() {
    //     sawl_go('indexnews/detailsFour.html')
    // } //区块链公证文章
    // blockchain.onclick = function() {
    //     sawl_go('indexnews/blockchain.html')
    // }
}
