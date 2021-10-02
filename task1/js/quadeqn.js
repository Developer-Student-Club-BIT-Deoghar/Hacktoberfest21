function solve() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var x1,x2;
    var str = "2";
    var supe = str.sup();
    var step1 = document.getElementById("step1");
    var step2 = document.getElementById("step2");
    var step3 = document.getElementById("step3");
    var step4 = document.getElementById("step4");
    var answer= document.getElementById("answer");
  
    x1 = (((-b) + (Math.sqrt((b ** 2)- (4 * a * c)))) / (2 * a));
    x2 = (((-b) - (Math.sqrt((b ** 2)- (4 * a * c)))) / (2 * a));
    
    answer.innerHTML = "x = "+ x1.toPrecision(2) +" or x = " + x2.toPrecision(2);
    
    step1.innerHTML = ("[ "+ a +"x"+supe +" + "+ b + "x +" +c + " ] = 0");
    step2.innerHTML= ("x"+supe +" + "+b+"/"+a + "x +" +c+"/"+a+"=0");
    step3.innerHTML=("[ x"+supe +" + "+b+"/"+a+"x + "+b+"/"+" (4) "+a+supe+" ] = [ "+b+supe+"/"+" (4) "+a+supe+" − "+c+"/"+a+" ]");
    step4.innerHTML=(("[ x +"+b+"/"+"(2)"+a)+supe+" ] = [ "+b+supe+"−(4)"+"("+a+")"+"("+c+")"+"/"+" (4)"+a+supe+" ]");
  }