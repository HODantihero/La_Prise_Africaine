<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $emailHeader = "From: ".$name."<".$email.">\r\n";

    $recipient = "dc@lapriseafricaine.com";

    mail($recipient, $subject, $message, $emailHeader)
    or die ("Error!");

    echo "message send";
?>