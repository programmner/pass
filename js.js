var cap=document.querySelector(".cap")
var num=document.querySelector(".num")
var small=document.querySelector(".small")
var sym=document.querySelector(".sym")
var btn=document.querySelector("button")
var pass="";
var a="abcdefghijklmnopqrstuvwxyz";
var A="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var n="1234567890"
var s="@#$%^&*()_+";
var out=document.querySelector(".ou")
function generate(value){
pass+=value[Math.floor(Math.random()*value.length)]
}
var f;
btn.addEventListener("click",function(){
	if(cap.checked){
		generate(A)
	}
		if(num.checked){
		generate(n)
	}
		if(small.checked){
		generate(a)
	}
		if(sym.checked){
		generate(s)
	}

  out.value=pass
  pass=""
})