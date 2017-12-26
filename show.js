var data = [{
        "img": "images/img1.jpg",
        "linkto": "http://sale.jd.com/act/ctHBlMszhA2W3b.html?cpdad=1DLSUE"
    },
    {
        "img": "images/img2.jpg",
        "linkto": "http://sale.jd.com/act/zNfxw2eUbno3DiA1.html?cpdad=1DLSUE"
    },
    {
        "img": "images/img3.jpg",
        "linkto": "http://sale.jd.com/act/dAV73ysTPg.html?cpdad=1DLSUE"
    },
    {
        "img": "images/img4.jpg",
        "linkto": "http://sale.jd.com/act/tr0MjmLox86UgAX.html?from=jdsj_04_101182&cpdad=1DLSUE"
    }
]

function Slider(obj) {
    this.obj = obj;
    this.init();
    this.renderToDom();
    this.bindEvent();
}
Slider.prototype = {
    /*<ul id="list">
    <li><img src="images/img1.jpg" alt=""></li>
    <li><img src="images/img2.jpg" alt=""></li>
    <li><img src="images/img3.jpg" alt=""></li>
    <li><img src="images/img4.jpg" alt=""></li>
</ul>
<ol id="list2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ol>
<div id="left"> < </div>
<div id="right"> > </div>*/
    constructor: Slider,
    init: function() {
        this.slider = document.getElementById("slider");
        this.str = '';
        this.str2 = '';
        this.timer = null;
        this.num = 0;
    },
    renderToDom: function() {
        for (var i = 0; i < this.obj.data.length; i++) {
            this.ul = document.createElement("ul");
            this.ul.id

                = "list";
            this.str += `<li><img src="${this.obj.data[i].img}" alt=""></li>`;
            this.ol = document.createElement("ol");
            this.ol.id

                = "list2";
            this.str2 += `<li>${i+1}</li>`;
        }
        this.ul.innerHTML = this.str;
        this.ol.innerHTML = this.str2;
        this.slider.appendChild(this.ul);
        this.slider.appendChild(this.ol);
        this.slider.innerHTML += "<div id='left'> < </div><div id='right'> > </div>";
    },
    bindEvent: function() {
        left = document.getElementById("left");
        right = document.getElementById("right");
        list = document.getElementById("list");
        ulis = list.getElementsByTagName("li");
        list2 = document.getElementById("list2");
        olis = list2.getElementsByTagName("li");
        if (this.obj.isAutoPlay) {
            left.style.display = "block"
            right.style.display = "block"
        } else {
            left.style.display = "none"
            right.style.display = "none"
        }
        olis[0].className = "c";
        that = this;
        right.onclick = function() {
            that.ifpd(true);
        }
        left.onclick = function() {
            that.ifpd();
        }
        this.timer = setInterval(right.onclick, this.obj.timeOut)
        this.slider.onmouseover = function() {
            clearInterval(that.timer);
        }
        this.slider.onmouseout = function() {
            that.timer = setInterval(right.onclick, that.obj.timeOut)
        }
        for (var j = 0; j < olis.length; j++) {
            olis[j].index = j;
            olis[j].onmouseover = function() {
                that.ptsx(this.index);
                that.num = this.index;
            }
        }
    },
    ifpd: function(f) {
        if (f) {
            this.num++;
            if (this.num > ulis.length - 1) this.num = 0;
        } else {
            this.num--;
            if (this.num < 0) this.num = ulis.length - 1;
        }
        this.ptsx(this.num);
    },
    ptsx: function(n) {
        for (var i = 0; i < ulis.length; i++) {
            ulis[i].style.display = "none";
            olis[i].className = ''
        }
        ulis[n].style.display = "block";
        olis[n].className = "c"
    }
}

var slider1 = new Slider({
        data: data,
        isAutoPlay: true,
        timeOut: 1000
    })