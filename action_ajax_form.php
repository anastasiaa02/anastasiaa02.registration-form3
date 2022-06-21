<?php

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["password2"])) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
    	'email' => $_POST["email"],
        'password' => $_POST["password"],
        'password2' => $_POST["password2"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>