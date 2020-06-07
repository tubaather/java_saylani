var arr1 = [0, 1, 2]; 
var arr2 = [1, 0, 1]; 
var arr3 = [8, 28, 1]; 
 
var number = [arr1, arr2, arr3];  
for(var i = 0; i <3; i++) { 
    document.write(number[i] + "<br>"); 
} 

//
for(var i = 1; i <=10; i++) { 
    document.write(i + "<br>"); 
} 
//
var num=prompt("Please enter your num");
var f;
for (f=1; f<=10; f++)
{
	var mul;
	mul=num*f;
	document.write(num+ "*"+f+"="+ mul +"<br>");
}

//q5
var fruits=["appple","mango","banana","peach"]
for (g=1; g<=3; g++)
{
	
	document.write(fruits[g]+ "is at index "+g+"<br>");
}
//
for(var i = 1; i <=10; i++) { 
    document.write("coutning:"+i + "<br>"); 
} 
//
for(var i = 10; i >=1; i--) { 
    document.write(" reverse coutning:"+i + "<br>"); 
} 
//

for(var i = 0; i <=10; i=i+2 ) { 
    document.write("even:"+i + "<br>"); 
} 
for(var i = 1; i <=10; i=i+2 ) { 
    document.write("odd:"+i + "<br>"); 
} 
var a=["pineapple","cake","juice","mint"];
var search=prompt("Please enter what you want to search");
for(var i = 0; i <4; i++ ) { 
  if(a[i]== search){

  	document.write(a[i]+" is at index: "+i + "<br>"); }


} 

//

var no=[1,87,32,43];
var larg=1;
for(var i = 0; i <=5; i++ ) { 
      if(larg>no[i]) {
         larg=no[i];

     }
 }
 document.write("largest:"+larg+ "<br>");
 //
var num=5;
 var f;
for (h=1; h<=100; h++)
{
	var mul;
	mul=num*h;
	document.write(num+ "*"+h+"="+ mul +"<br>");
}
 

  
 