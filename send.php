<?php

$_POST['mail'];
$_POST['body'];
$to = "darricck04@gmail.com";
$subject = "Mail from portfolio";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>Od: $_POST['imie']</p>
<table>
<tr>
<th>Treśc:</th>
</tr>
<tr>
<td>$_POST['body'];</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";
$headers .= 'Cc: myboss@example.com' . "\r\n";

mail($to,$subject,$message,$headers);
?>