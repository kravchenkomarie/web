<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

if (mail("kravchenkomarie@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

?>