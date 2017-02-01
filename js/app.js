
$(document).ready(function(){
	
	var i=0;
	var j=0;


	$("#btn").click(function(){

		var name=$("#name").val();

		if(name==""){
			$("#pname").text("Name required")

			}
			else{
				$("#pname").text("");
				i=1;

			}


	
	

		var password=$("#password").val();
		var passlength=password.length;

		if(passlength<6){

			$("#ppass").text("Password must be minimum 6 character long");
			}
			else{

				$("#ppass").text("");
				j=1;
			}


		if(i==1&&j==1){
			$("#success").text("Successful");

			}

	});	



});