<?php

use PHPMailer\PHPMailer\PHPMailer;
require 'PHPMailer//PHPMailer.php';

// Создаем письмо
$mail = new PHPMailer();
$mail->setFrom('test@domain.ru', 'Иван Иванов'); // от кого (email и имя)
$mail->addAddress('test@ya.ru', 'Вася Петров');  // кому (email и имя)
$mail->Subject = 'Новый заказ';                         // тема письма
// html текст письма
$mail->msgHTML("<html><body>
                <h1>Ура! Новый заказ!</h1>
                <p>Это тестовое письмо.</p>
                </html></body>");
// Отправляем
if ($mail->send()) {
  echo 'Письмо отправлено!';
} else {
  echo 'Ошибка: ' . $mail->ErrorInfo;
}

?>