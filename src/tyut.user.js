// ==UserScript==
// @name  crack tyut
// @description 破解教务评教时间
// @author	eric
// @version 1.2.2
// @include *jwcurp.tyut.edu.cn:80*
// @include http://202.207.247.44*
// @include http://202.207.240.58*
// @include 
// @run-at document-start
// @grant GM_log
// @grant GM_setValue
// @grant GM_getValue
//@grant GM_deleteValue
// ==/UserScript==
var arr=new Array("老师教的很好","老师讲的很认真","老师用心的讲课","老师很热心","老师很负责")
var start=0;
var end=arr.length;
var i=0;
var timeout=1000;
console.log("start");
noalert();
document.onreadystatechange = function () {
	noalert();
    if (document.readyState == "complete") {
        console.log("complete");
		pg();
		if (unsafeWindow.flag==false){
			setTimeout(submit,timeout);
		}
    }
}
function pg(){
var pic=document.getElementsByTagName('img');
if(pic[14]){
		console.log("choose");
		for(i=0;i<pic.length;i++){
			if(pic[i].title=="评估")
				break;
		}
		if(i<pic.length){
			console.log(i+"checked");
			unsafeWindow.evaluation(pic[i]);
		}
		else{
			console.log("评完啦啦啦！！！");
		}
	//待完成,获取成功,等待跳转页面后的处理
}
}
function submit(){
if (unsafeWindow.flag==false){
	console.log("flag");
	console.log(unsafeWindow.flag);
	var aim = document.getElementsByName('zgpj');
	var rando=rnd(start,end);
	aim[0].value=arr[rando];
	var check=document.getElementsByTagName('input');
	for(i=0;i<check.length;i++){
		if(check[i].value=='10_1'){
			check[i].checked=true;
		}
	}
	unsafeWindow.setFlag();
	unsafeWindow.hideDiv();
	unsafeWindow.check();//自动提交
	//unsafeWindow.document.StDaForm.submit();//自动提交
}
}
function next(){
	if(unsafeWindow.document.title=="问卷评估结果"){
		unsafeWindow.location.href='jxpgXsAction.do?oper=listWj';
	}
}
	function noalert(){
		var _alert = alert;
		unsafeWindow.alert = function(s) {
		if(s=="评估失败，请返回！")
			unsafeWindow.alert("评的快了，请歇息一会");
        console.log(s);
}
	}
function stop(){
	window.stop();
	}	
function rnd(start, end){
	return Math.floor(Math.random() * (end - start) + start);
}
