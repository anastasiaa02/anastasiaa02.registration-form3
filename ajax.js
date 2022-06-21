/* Article FructCode.com */
$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#result_form').html('Name: '+result.name+'<br>Email: '+result.email+'<br>Password: '+result.password+'<br>Retype password: '+result.password2);
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Error. No data yet.');
    	}
 	});
}