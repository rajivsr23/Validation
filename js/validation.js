function validateForm(){
	for(var i=0;i<entry.elements.length;i++){
		if(entry.elements[i].className=="req" && entry.elements[i].value.length==0){
			alert('Please fill in all the required fields');
			return false;
		}
	}


var email=document.getElementById('email').value;
var atpos=email.indexOf('@');
var dotpos=email.lastIndexOf('.');
if(atpos<1 || dotpos<Atpos+2 || dotpos+2>=x.length){
alert('Please type a valid email address');
return false;	
}
}