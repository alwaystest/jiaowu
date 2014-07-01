// ==UserScript==
// @name  crack tyut
// @description 破解教务评教时间
// @author	eric
// @version 1.1
// @include *jwcurp.tyut.edu.cn:80*
// @include http://202.207.247.44*
// @include 
// @run-at document-end
// @grant GM_log
// ==/UserScript==

if (unsafeWindow.flag==false){
	console.log(unsafeWindow.flag);
	var aim = document.getElementsByName('zgpj');
	
	aim[0].value="老师教的很认真";
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
	console.log(unsafeWindow.flag);
}
