var shown = false;
function showhideEmail() {
	// body...
	if(shown){
		document.getElementById('email').innerHTML = 'Show my email';
		shown = false;
	}else{
		var myemail = "<a href='mailto:padidara"+"@"+"mail.uc.edu'>padidara"+"@"+"mail.uc.edu</a>";
		document.getElementById('email').innerHTML=myemail;
		shown=true;

	}
}