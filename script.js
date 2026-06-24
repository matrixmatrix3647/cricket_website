alert("welome to cricket selection");
let form=document.getElementById("myform");
form.addEventListener("submit",function(e){
	e.preventDefault()
	let name=document.getElementById("name").value;
	let age=document.getElementById("age").value;
	let email=document.getElementById("email").value;
	let phone=document.getElementById("phone").value;
	let role=document.getElementById("role").value;
	let hand=document.getElementById("hand").value;

	if(name==""|| age==""|| email==""|| phone==""){
		e.preventDefault();
		alert("please fill the field!");
	}
	else if(role=="select"|| hand=="select"){
		e.preventDefault();
		alert("please select the field!");
	}else if(age>25){
		e.preventDefault();
		alert("sorry age must be under 25");
	}
	else{
		fetch(form.action,{
			method:"POST",
            body:new FormData(form),
            headers:{"Accept":"application/json"}

		}).then(function(){
			window.location.href="response.html";
		}
		)
	}
});