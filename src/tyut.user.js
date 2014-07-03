// ==UserScript==
// @name  crack tyut
// @description 破解教务评教时间
// @author	eric
// @version 1.2.1
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
/*if ('loading' == document.readyState) {
  alert("This script is running at document-start time.");
} else {
  alert("This script is running with document.readyState: " + document.readyState);
}*/
//document.onreadystatechange =pg();

/*while(!('complete' == document.readyState)) {
	setTimeout(function () {
		console.log("waiting");
	},1000);
}*/
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
//if(pic[14]){
if(pic[14]){
		console.log("choose");
		//i=GM_getValue("jwcheck",0);
		for(i=0;i<pic.length;i++){
			if(pic[i].title=="评估")
				break;
		}
		/*while(pic[i].title!="评估"&&i<pic.length){
			i++;
			console.log("i++");
		}*/
		if(i<pic.length){
			//console.log(pic[i].src);
			//GM_setValue("jwcheck",i);
			console.log(i+"checked");
			unsafeWindow.evaluation(pic[i]);
		}
		else{
			console.log("评完啦啦啦！！！");
		}
			
	//待完成,获取成功,等待跳转页面后的处理
	
}
//else
	//console.log("no pic[14]");
	//GM_deleteValue("jwcheck");//提示语句没有定义，以后再修
	//GM_deleteValue("to");
}
//}


function submit(){
if (unsafeWindow.flag==false){
	console.log("flag");
	console.log(unsafeWindow.flag);
	var aim = document.getElementsByName('zgpj');
	var rando=rnd(start,end);
	//console.log(rando);
	aim[0].value=arr[rando];
	var check=document.getElementsByTagName('input');
	for(i=0;i<check.length;i++){
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
	unsafeWindow.check();//自动提交
	//console.log(unsafeWindow.document.title);
	//console.log(GM_getValue("to",1000));
	//unsafeWindow.document.StDaForm.submit();//自动提交
	//setTimeout(stop,GM_getValue("to",1000);
}
}
function next(){
	if(unsafeWindow.document.title=="问卷评估结果"){
		//console.log("href");
		unsafeWindow.location.href='jxpgXsAction.do?oper=listWj';
	}
	//else{
	 	//timeout+=200;
		//GM_setValue("to",timeout);
	//}
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
