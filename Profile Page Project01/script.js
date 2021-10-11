var Zoom_Desktop=false;
var In_Login_Page=false;
var Click_Curtain=false;
var Click_Light=false;

function sleep(milli_sec){
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
	  if ((new Date().getTime() - start) > milli_sec){
		break;
	  }
	}
}

function Zoom_In_Desktop(){
	Zoom_Desktop=true;
	var Orig_Desktop= document.querySelector(".Laptop");
	
	Orig_Desktop.style.transition= "2s";
	Orig_Desktop.style.zIndex = "5"
	Orig_Desktop.style.transform= "scale(5)";
	Orig_Desktop.style.animationPlayState= "paused";

}
function Login(){
	var Login_Page= document.querySelector(".Computer_Login");
	Login_Page.style.zIndex="5";
	Login_Page.style.visibility="visible";
	document.querySelector(".Wave_Front").style.animationPlayState= "paused";
	document.querySelector(".Wave_Middle").style.animationPlayState= "paused";
	document.querySelector(".Wave_Back").style.animationPlayState= "paused";
	sleep(2);
	var ele = document.querySelector(".Password");
	ele.style.animation = 'none';
	ele.offsetHeight; /* trigger reflow */
	ele.style.animation = null; 

	In_Login_Page=true;
}

function Zoom_Out_Desktop(){
	Zoom_Desktop=false;
	var Orig_Desktop= document.querySelector(".Laptop");
	var Login_Page= document.querySelector(".Computer_Login");
	Orig_Desktop.style.transition= "2s";
	Orig_Desktop.style.zIndex = "1"
	Orig_Desktop.style.transform= "scale(1)";
	Login_Page.style.visibility="hidden";

	document.querySelector(".Wave_Front").style.animationPlayState= "running";
	document.querySelector(".Wave_Middle").style.animationPlayState= "running";
	document.querySelector(".Wave_Back").style.animationPlayState= "running";
	document.querySelector(".Computer").style.visibility="hidden";
	In_Login_Page=false;

	document.getElementById( Content_ID.get(Cur_dir)).style.visibility="hidden";
}

function Computer_UI(){
	document.querySelector(".Password").style.animationPlayState= "paused";

	document.querySelector(".Laptop").style.animationPlayState= "paused";
	document.querySelector(".Computer").style.zIndex = "6";
	document.querySelector(".Computer").style.visibility="visible";

	document.getElementById("Intro_Page").style.visibility="visible";
}

function Reset_Terminal(){
	var Container=document.getElementsByClassName("Terminal")[0];
	for(var i=0;i<9;i++){
		var Be_removed= document.getElementsByClassName("New_Div")[0];
		Container.removeChild(Be_removed);
	}
	Insert_Cnt=0;
}


function Back_dir_first(){
	Insert_Cnt=Insert_Cnt+1;

	var Container=document.getElementsByClassName("Terminal")[0];
	var Old_Div= document.getElementsByClassName("Cur_Input_Line")[0];
	var Div= document.createElement("div");
	Div.style.position="relative";
	Div.style.width="100%";
	Div.style.height="10%";
	Div.style.fontSize="20px";
	Div.style.fontFamily="monospace";
	Div.style.fontWeight="700";
	Div.style.zIndex="5";
	Div.style.marginBottom="1px";
	Div.className="New_Div";
	
	var Ter_content=document.createElement("span");
	Ter_content.style.color="#fff";
	Ter_content.textContent='Back to parent directory first ! (hint: "cd ..") ';
	Div.appendChild(Ter_content);

	Container.insertBefore(Div, Old_Div);


	if(Insert_Cnt>9){
		var Be_removed= document.getElementsByClassName("New_Div")[0];
		Container.removeChild(Be_removed);
	}
}

function Dir_init(){
	Cur_dir="#Intro";
	var File=document.querySelector(Cur_dir);
	File.style.color="#fff";
	File.style.backgroundColor="rgb(47, 47, 47)";
}

var Content_ID= new Map([["#Intro","Intro_Page"],["#Algo","Algo_Page"],["#Front","Frontend_Page"],["#Back","Backend_Page"]]);
function Show_Intro(){
	document.getElementById( Content_ID.get(Cur_dir)).style.visibility="hidden";

	Cur_dir="#Intro";
	var File=document.querySelector(Cur_dir);
	File.style.color="#fff";
	File.style.backgroundColor="rgb(47, 47, 47)";

	var Content= document.getElementById("Intro_Page");
	Content.style.visibility="visible";
}
function Show_Algo(){
	document.getElementById( Content_ID.get(Cur_dir)).style.visibility="hidden";

	Cur_dir="#Algo";
	var File=document.querySelector(Cur_dir);
	File.style.color="#fff";
	File.style.backgroundColor="rgb(47, 47, 47)";

	var Content= document.getElementById("Algo_Page");
	Content.style.visibility="visible";
}
function Show_Front(){
	document.getElementById( Content_ID.get(Cur_dir)).style.visibility="hidden";

	Cur_dir="#Front";
	var File=document.querySelector(Cur_dir);
	File.style.color="#fff";
	File.style.backgroundColor="rgb(47, 47, 47)";

	var Content= document.getElementById("Frontend_Page");
	Content.style.visibility="visible";
}
function Show_Back(){
	document.getElementById( Content_ID.get(Cur_dir)).style.visibility="hidden";

	Cur_dir="#Back";
	var File=document.querySelector(Cur_dir);
	File.style.color="#fff";
	File.style.backgroundColor="rgb(47, 47, 47)";

	var Content= document.getElementById("Backend_Page");
	Content.style.visibility="visible";
}


var Cur_dir="#Intro";
function Intro_dir(){
	if(Cur_dir!="#Intro"){
		document.getElementById( Content_ID.get(Cur_dir)).style.visibility="hidden";
		var File=document.querySelector(Cur_dir);
		File.style.color="rgb(143, 143, 143)";
		File.style.backgroundColor="transparent";
		Cur_dir="#Intro";	
	}
	Show_Intro();
}

function Algo_dir(By_UI){
	if( Cur_dir!="#Intro" && !By_UI){
		Back_dir_first();
		return
	} 
	if(By_UI || Cur_dir!="#Algo"){
		document.getElementById( Content_ID.get(Cur_dir)).style.visibility="hidden";
		var File=document.querySelector(Cur_dir);
		File.style.color="rgb(143, 143, 143)";
		File.style.backgroundColor="transparent";
	}
	Show_Algo();
}
function Front_dir(By_UI){
	if(Cur_dir!="#Intro" && !By_UI){
		Back_dir_first();
		return
	} 
	if(By_UI || Cur_dir!="#Front"){
		document.getElementById( Content_ID.get(Cur_dir)).style.visibility="hidden";
		var File=document.querySelector(Cur_dir);
		File.style.color="rgb(143, 143, 143)";
		File.style.backgroundColor="transparent";
	}
	Show_Front();
}
function Back_dir(By_UI){
	if(Cur_dir!="#Intro" && !By_UI){
		Back_dir_first();
		return
	} 
	if(By_UI || Cur_dir!="#Back"){
		document.getElementById( Content_ID.get(Cur_dir)).style.visibility="hidden";
		var File=document.querySelector(Cur_dir);
		File.style.color="rgb(143, 143, 143)";
		File.style.backgroundColor="transparent";
	}
	Show_Back();
}

function Terminal_Operation(Command){
	if(Command=="clear"){
		Reset_Terminal();
	}
	else if(Command=="cd .."){
		Intro_dir(false);
	}
	else if(Command=="cd Algo"){
		Algo_dir(false);
	}
	else if(Command=="cd Front-end"){
		Front_dir(false);
	}
	else if(Command=="cd Back-end"){
		Back_dir(false);
	}
}

var Insert_Cnt=0;
function New_Div(Cur_text){
	Insert_Cnt=Insert_Cnt+1;
	console.log(Cur_text);
	var Div= document.createElement("div");
	Div.style.position="relative";
	Div.style.width="100%";
	Div.style.height="10%";
	Div.style.fontSize="20px";
	Div.style.fontFamily="monospace";
	Div.style.fontWeight="700";
	Div.style.zIndex="5";
	Div.style.marginBottom="1px";
	Div.className="New_Div";
	// last input line
	var Ter_green=document.createElement("span");
	Ter_green.style.color="chartreuse";
	Ter_green.textContent="Jason";
	var Ter_gray_1=document.createElement("span");
	Ter_gray_1.style.color="rgb(167, 166, 166)";
	Ter_gray_1.textContent=":";
	var Ter_blue=document.createElement("span");
	Ter_blue.style.color="cyan";
	Ter_blue.textContent="~/Desktop/Website";
	var Ter_gray_2=document.createElement("span");
	Ter_gray_2.style.color="rgb(167, 166, 166)";
	Ter_gray_2.textContent="$";
	var Ter_content=document.createElement("span");
	Ter_content.style.color="#fff";
	Ter_content.textContent=Cur_text;

	Div.appendChild(Ter_green);
	Div.appendChild(Ter_gray_1);
	Div.appendChild(Ter_blue);
	Div.appendChild(Ter_gray_2);
	Div.appendChild(Ter_content);

	var Container=document.getElementsByClassName("Terminal")[0];
	var Old_Div= document.getElementsByClassName("Cur_Input_Line")[0];
	
	if(Insert_Cnt>9){
		var Be_removed= document.getElementsByClassName("New_Div")[0];
		Container.removeChild(Be_removed);
	}
	
	Container.insertBefore(Div, Old_Div);

}

var Theme=false;
function Change_Theme(){
	if(Theme){
		Theme=false;
		var ele= document.querySelectorAll(".HTML_text");
		ele[0].style.color="#fff";
		ele[1].style.color="#fff";
		ele[2].style.color="#fff";
		ele[3].style.color="#fff";
		
		document.querySelector("#Link_01").style.color="cyan";
		document.querySelector(".Computer_Text").style.backgroundColor="rgba(100, 100, 100, 0.281)";
	}
	else{
		Theme=true;
		var ele=document.querySelectorAll(".HTML_text");
		ele[0].style.color="#000";
		ele[1].style.color="#000";
		ele[2].style.color="#000";
		ele[3].style.color="#000";
		document.querySelector("#Link_01").style.color="rgb(0, 98, 255)";
		document.querySelector(".Computer_Text").style.backgroundColor="#fff";
	}
}

var Input_Cnt=0;
function Ternimal_Input(event){
	var Focus_ele=document.activeElement.className;

	var Is_Typing=(Focus_ele == "Ter_Input");
	if(Is_Typing ){
		if( ( event.code== 'Backspace' ) ){
			if(Input_Cnt>0){
				Input_Cnt=Input_Cnt-1;
				document.querySelector(".Blink").style.transform= "translateX("+(Input_Cnt*12).toString()+"px)";
			}
			
		}
		else if( event.code== 'Enter'){
			var Cur_text=document.getElementsByClassName("Ter_Input")[0].value;
			New_Div(Cur_text);
			document.getElementsByClassName("Ter_Input")[0].value="";
			// init caret
			document.querySelector(".Blink").style.transform= "translateX(0px)";
			Input_Cnt=0;
			// check command
			Terminal_Operation(Cur_text);
		}
		else{
			Input_Cnt=Input_Cnt+1;
			document.querySelector(".Blink").style.transform= "translateX("+(Input_Cnt*12).toString()+"px)";
		}
	}
}

function Move_Curtain(){
	var ele=document.querySelector(".Curtain");
	ele.style.transition= "2s";

	if(Click_Curtain==false){
		ele.style.top="0%"
		Click_Curtain=true;
	}
	else{
		ele.style.top="-40%"
		Click_Curtain=false;
	}
}
var View_Changed=false;
function Change_View(){
	console.log("Change");
	if(View_Changed==false){
		document.querySelector(".City_View_Night").style.visibility="visible";
		document.querySelector(".City_View_Day").style.visibility="hidden";
		View_Changed=true;
	}
	else{
		document.querySelector(".City_View_Night").style.visibility="hidden";
		document.querySelector(".City_View_Day").style.visibility="visible";
		View_Changed=false;
	}
}

function Turn_Light(){
	var ele=document.querySelector(".Light_Effect");

	if(Click_Light==false){
		ele.style.visibility="hidden";
		Click_Light=true;
	}
	else{
		ele.style.visibility="visible";
		Click_Light=false;
	}
}

function hasClass(element, className) {
	do {
	  if (element.classList && element.classList.contains(className)) {
		return true;
	  }
	  element = element.parentNode;
	} while (element);
	return false;
  }

function In_Laptop(obj){
	if(hasClass(obj,"Laptop") ) return true;
	if(hasClass(obj,"Computer_Login") ) return true;
	if(hasClass(obj,"Computer") ) return true;
	if(hasClass(obj,"Login_Page") ) return true;
	return false;
}

function Click_Obj(event){
	console.log(event.target);
	var In_Lap=In_Laptop(event.target)
	var In_Login_Btn=hasClass(event.target,"Login_Btn");
	if( hasClass(event.target,"Window") ){
		Change_View();
	}
	else if( In_Login_Btn &&Zoom_Desktop==true){
		Computer_UI();
	}
	else if(  In_Lap&&Zoom_Desktop==true&&In_Login_Page==false){
		Login();
	}
	else if( In_Lap && Zoom_Desktop==false){
		Zoom_In_Desktop();
	}
	else if( (!In_Lap) && Zoom_Desktop==true){
		Zoom_Out_Desktop();
	}
}



document.querySelector(".Computer_Close_Btn").addEventListener("click",Zoom_Out_Desktop);
document.addEventListener("click",Click_Obj);
window.addEventListener('keydown',Ternimal_Input);

Dir_init();