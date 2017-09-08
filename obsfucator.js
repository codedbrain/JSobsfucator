

var code = ".replace(/.{7}/g,function(w){document.write(String.fromCharCode(parseInt((w.replace(/ /g,'0').replace(/	/g,'1')),2)))})";


function obsfucate(){
	var output = idgrab('output');
	var inputter = idgrab('inputter');
	//checks for a new line character 
    inputter = inputter.value.replace(/(\r\n|\r|\n|\n\r)/g, ' ');  
    inputter = inputter.split('').map(function(w){return lengthchecker(w)}).join('');
    //&nbsp and &#9 are used to prevent browsers from removing whitespaces.
    inputter = inputter.replace(/0/g,"&nbsp;").replace(/1/g,"&#9;");
    output.innerHTML = "'" + inputter + "'" + code;

}

function idgrab(id){
	return document.getElementById(id);
}

function lengthchecker(input){
	 var rvalue = input.charCodeAt(0).toString(2);
	 //The binary number thus obtained may be less than 7bits. So , to make it  7bits we prepend total no. of zeros required .
	 var rvalue =  Array(7-rvalue.length).fill('0').join('').concat(rvalue);
	 return rvalue;
}

