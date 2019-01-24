<?php 
    $name = $email = $message = $formcontent = $recipient = $subject = $mailheader = "";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $formcontent = "Poslao: " . $name . "\r \n" . $message;
    $recipient = "acervatio.social@gmail.com";
    $subject = "Feedback, pitanja i ideje";
    $mailheader = "From:" . $email . "\r \n";
    mail($recipient, $subject, $formcontent, $mailheader);
    header('Location: sent.html');
    exit();
?>