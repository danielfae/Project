// $(window).load(function() {
//   $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
// });
$( "#submitbutton" ).click(submit);
$("#landing").hide();
$("#flecha").hide();
$( "#landing" ).click(next);
// $(submit).click(){
//   $('form').on('submit', function(e){
//   	submit();
    
//   });
var q1=0,q2=0,q3=0,q4=0,q5=0,q6=0;

function results(){
	q1=parseInt($("input[name=question1]:checked")[0].dataset.value);
	q2=parseInt($("input[name=question2]:checked")[0].dataset.value);
	q3=parseInt($("input[name=question3]:checked")[0].dataset.value);
	q4=parseInt($("input[name=question4]:checked")[0].dataset.value);
	q5=parseInt($("input[name=question5]:checked")[0].dataset.value);
	q6=parseInt($("input[name=question6]:checked")[0].dataset.value);
}

// $(#submitbutton).click(results);

var n=0;
var movement=0;

function scrollWin(x,y)

{ window.scroll(x,y); }

function next(){
var ant=document.getElementById('question'+n);
var sig=document.getElementById('question'+(n+1));
if (n==0) {
	// Scroll until the end

	scrollWin(0,340);
	// document.getElementById('main').setAttribute('style','top:-679px;');
		// document.getElementsByClassName('hero-overlay')[0].classList.add('.animated');
		// document.getElementsByClassName('hero-overlay')[0].classList.add('.bounceOutRight');
			
				document.getElementsByClassName('hero-overlay')[0].setAttribute('style','height:0px;');
	// document.getElementsByClassName('hero-overlay')[0].setAttribute('style','display:none;');
	n=n+1;
	sig.classList.add('active');
	document.getElementById('timeline').setAttribute('style','left:'+movement+'px;'); 

	//after 2400 submit() and give results
}
else{
	if (n==6 || movement<=-2000) {
		document.getElementById('timeline').setAttribute('style','left:'+(movement-400)+'px;');
		submit();
		n=n+1;
		if (n==8) {
			document.getElementsByClassName('hero-overlay')[0].removeAttribute('style','height:0px;');
			n=0;
			movement=0;
			document.getElementById('timeline').setAttribute('style','left:'+movement+'px;');

			};
		console.log("forward to", "Results in Panel#"+n);
	}
	else{
		if (n==5) {
	$("#flecha").show();		
	$("#landing").show();		
	document.getElementById('landing').classList.remove('animated');
    document.getElementById('landing').classList.remove('bounceOutUp');
	document.getElementById('landing').classList.add('animated');
    document.getElementById('landing').classList.add('bounceInDown');
		};
	n=n+1;
	console.log("forward to", "question"+n);
	movement=movement-400;
	document.getElementById('timeline').setAttribute('style','left:'+movement+'px;');
	ant.classList.remove('active');
	sig.classList.add('active');
		}
	}
}

function prev(){

console.log("back to", "question"+(n-1));

if (n==0 || n==1) {
	
}
else{
	if (n==7 || n==8) {
	n=7;
	n=n-1;
	document.getElementById('timeline').setAttribute('style','left:'+(movement+800)+'px;');
	console.log("Back to", "Questioning in #"+n);	
	}
	else{
	n=n-1;
	movement=movement+400;
	document.getElementById('timeline').setAttribute('style','left:'+movement+'px;');
	var ant=document.getElementById('question'+(n+1));
	var sig=document.getElementById('question'+n);
	sig.classList.add('active');
	ant.classList.remove('active');
		}
	}
}


function abutton(){
	console.log("Button", "question"+n+"a");
	document.getElementById("radio"+n+"a").checked = true;
}

function bbutton(){
	console.log("Button", "question"+n+"b");
	document.getElementById("radio"+n+"b").checked = true;
}

function cbutton(){
	console.log("Button", "question"+n+"c");
	document.getElementById("radio"+n+"c").checked = true;
}

function dbutton(){
	console.log("Button", "question"+n+"d");
	document.getElementById("radio"+n+"d").checked = true;
}


function submit(){
	
	// if (q1==0 || q2==0 || q3==0 || q4==0 || q5==0 || q6==0) {
	// 	results();
	// 	alert("Please Complete The Survey!");
	// }
	// else{
	results();	
	leading=q1+q2+q3+q4+q5+q6;
	document.getElementById('landing').classList.add('animated');
    document.getElementById('landing').classList.add('bounceOutUp');
	document.getElementsByClassName('resultado')[0].innerHTML=leading+"%";
	document.getElementsByClassName('resultado')[0].classList.add('animated');
	document.getElementsByClassName('resultado')[0].classList.add('bounceInRight');
	// document.getElementsByClassName('hero-overlay')[0]
	// document.getElementsByClassName('hero-overlay')[0]
	// }
}