<?php

$recepient = "vashapochta@gmail.com"; /* почта получателя */
$sitename = "vashsaite.ru"; /* сайт с которого пришло письмо */

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$date = trim($_POST["date"]);

$pagetitle = "Заявка с формы обратного звонка на сайте \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nДата звонка: $date";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

