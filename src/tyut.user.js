
// ==UserScript==
// @name  crack tyut
// @description 破解教务评教时间
// @author	eric
// @version 1.2
// @include *jwcurp.tyut.edu.cn:80*
// @include http://202.207.247.44*
// @include http://202.207.240.58*
// @include 
// @run-at document-end
// @grant GM_log
// ==/UserScript==

var start=0;
var end=4;
var arr=new Array("老师教的很好","老师讲的很认真","老师用心的讲课","老师很热心","老师很负责")
if (unsafeWindow.flag==false){
	//console.log(unsafeWindow.flag);
	var aim = document.getElementsByName('zgpj');
	var rando=rnd(start,end);
	//console.log(rando);
	aim[0].value=arr[rando];
	var check=document.getElementsByTagName('input');
	var i=0;
	for(;i<check.length;i++){
		if(check[i].value=='10_1'){
			check[i].checked=true;
			//console.log(i);
		}
	}

	//console.log(aim[0].value);
	//console.log("here")
	unsafeWindow.setFlag();
	unsafeWindow.hideDiv();
	//console.log(unsafeWindow.flag);
}
function rnd(start, end){
	return Math.floor(Math.random() * (end - start) + start);
}
