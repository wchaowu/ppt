
var showMap = $("#showMap");
var closeMap =  $(".closediv");
var openObj = null;
showMap.bind("click",function (){
    openObj = $("#map");
	openObj.show("slow");
});
closeMap.bind("click",function (){
 	openObj.hide("slow")
	//document.getElementById("map").style.display = "none";
});
var showJosnp = $("#showJosnp")
showJosnp.bind("click",function(){
	openObj =  $("#josnp")
	openObj.show("slow");
});
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true
  });
   editor.setOption("theme", "ambiance");