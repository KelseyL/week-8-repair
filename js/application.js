jQuery(document).ready(function($) {

	$('#subscribe').click(function(event) {
		if( $('#subscribe:checked').val() )
		{
			$('#subscribe-email').slideDown('slow');
		}else{
			$('#subscribe-email').slideUp('slow');
		}
	});

	$('#submit').click(function(event) {
		console.log("Submit button was clicked");
	});
	$('#form').validate({
		errorClass : "inputError",

		errorPlacement : function (error, element){
			console.log(element);
			//var e = "<label>Hello error</label>";
			//$(element).prepend(e);
		},

		rules : {
			username : {
				required :true,
				email :true
			},

			password : {
				required :true,
				minlength : 6,
				maxlength : 10
			}

		},

		messages : {
			username : {
				required : "fill the box please",
				email : "your email looks funny"
			},

			password : {
				required : "pass the word please",
				minlength : jQuery.format("need at least {0} characters"),
				maxlength : jQuery.format("can't have more than {0} characters")
			}

		}

	});
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

