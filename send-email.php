<?php
  $data = json_decode(file_get_contents("php://input"), true);
  $to = "youremail@example.com";
  $subject = "Form Submission";
  $message = "Name: " . $data['name'] . "\n" .
             "Email: " . $data['email'] . "\n" .
             "Message: " . $data['message'];
  $headers = "From: webmaster@example.com";
  mail($to, $subject, $message, $headers);
?>
