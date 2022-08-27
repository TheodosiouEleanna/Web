$(document).ready(function(){
  
	$('#form').on('submit', function(e){

		e.preventDefault();

    let username = $("input[name = username]").val();
    let old_password = $("input[name = oldPassword]").val();
    let new_password = $("input[name = newPassword]").val();
    let new_password2 = $("input[name = newPassword2]").val();
    
    console.log(username);

    $.ajax({
      url:'includes/profileCheck.inc.php',
      type: 'POST',
      dataType:'Text',
      data: {username:username, oldPassword: old_password, newPassword:new_password, newPassword2:new_password2},
      success : function(response){
        console.log(response);

        $("#errors").css("display", "block");

        let errors = JSON.parse(response);
        
				if (errors['status'] == 1) {
					$("#errors").html('<p>'+errors.message+'</p>');
				}
        else {
          $("#form")[0].reset()
					$("#errors").html('<p>'+errors.message+'</p>');
        }
      }
    });
  });
}); 

					

