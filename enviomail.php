<?php 
 require("sendgrid-php/sendgrid-php.php");

//daniel.aguinaga@pro20.pe
    $email = new \SendGrid\Mail\Mail();
    $nombre = $_POST['nombre'];
	$correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
	$mensaje = "Nombre: ".$nombre."<br> Email: $correo<br> Teléfono: $telefono <br>Mensaje:".$_POST['mensaje'];
    
    $email->setFrom("daniel.aguinaga@cinecorporativo.pe", "pro20page");
    $email->setSubject("Formulario Rellenado Pagina Pro20 de $nombre");
    $email->addTo("daniel.aguinaga@pro20.pe", "Daniel");
   // $email->addContent("text/plain", "Esto es una prueba con sengrid para pro20");
    $email->addContent( "text/html", $mensaje);
    $sendgrid = new \SendGrid('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');

try {
    $response = $sendgrid->send($email);
    header("Location: index.html");
    die();
    /*
    echo "<pre>";
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
    echo "</pre>";
    */
    
} catch (Exception $e) {
    echo 'Caught exception: '.  $e->getMessage(). "\n";
}