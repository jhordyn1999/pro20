<?php
 require("sendgrid-php/sendgrid-php.php");

//daniel.aguinaga@pro20.pe
    $email = new \SendGrid\Mail\Mail();
    $empleo = $_POST['idempleo'];
    $file = $_FILES['file-picker'];
     
    // aca obtengo los atributos del FILE
     $tmp_name    = $_FILES['file-picker']['tmp_name']; 
     $name        = $_FILES['file-picker']['name'];  
     $size        = $_FILES['file-picker']['size'];  
     $type        = $_FILES['file-picker']['type'];  
     $error       = $_FILES['file-picker']['error']; 
     $handle = fopen($tmp_name, "r");  
     $content = fread($handle, $size);
     fclose($handle);                  
  


	$mensaje = "Curriculum Vitae: ";
    $email->setFrom("daniel.aguinaga@cinecorporativo.pe", "pro20pageCV");
    $email->setSubject("Curriculum Vitae para el puesto de $empleo");
    $email->addTo("daniel.aguinaga@pro20.pe", "Daniel");
    $email->addContent("text/plain","Curriculum Vitae: ");

    $file_encoded = base64_encode($content);
    $email->addAttachment(
        $file_encoded,
        $type,
        $name,
        "attachment"
    );

    $sendgrid = new \SendGrid('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');

try {
    $response = $sendgrid->send($email);
    header("Location: bolsatrabajo.html");
    die();
    /*
    echo "<pre>";
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
    echo "</pre>";*/
} catch (Exception $e) {
    echo 'Caught exception: '.  $e->getMessage(). "\n";
}