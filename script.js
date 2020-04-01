function login() {
	var name = document.getElementById("userinput").value;
	var password = document.getElementById("userinput1").value;

	
	if(name === "")
	{
		alert("Username cannot be empty");
		return;
	}
	if(password === "")
	{
		alert("Password cannot be empty");
		return;
	}
	if(name==="shubhank" && password==="12345")
	{
		window.location = "https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"
		return;
	}
	else{
		alert("wrong credentials");
	}


}