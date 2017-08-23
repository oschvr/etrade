
<?php

    header('content-type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *'); 

        $name = strip_tags(trim($_POST['name']));
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST['phone']);
        $message = trim($_POST['message']);
        $option = trim($_POST['option']);
        $to = 'contacto@etrade.mx';
        $subject = 'Mensaje de Contacto | etrade.mx';

        $headers = "From: " . $name . " <" . $email . ">";

        $contactMessage =  "Nombre: ". $name . "\nCorreo: ". $email . "\n Teléfono (Opcional): ". $phone ."\nInterés / Servicio: " . $option . "\nMensaje:". $message;

        if(empty($name) or empty($message) or empty($option) or !filter_var($email, FILTER_VALIDATE_EMAIL)){
            http_response_code(400);
            echo "<div class='alert alert-danger'><strong>Oops!</strong> Hubo un problema con tus datos. Intenta de nuevo.</div>";
        } else {
            if(mail($to, $subject, $contactMessage, $headers)){
                http_response_code(200);
                echo "<div class='alert alert-success'><strong>Gracias!</strong>  Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.</div>";
            } else {
                http_response_code(500);
                echo "<div class='alert alert-danger'><strong>Oops!</strong> Hubo un problema con el servidor. Intenta más tarde.</div>";
            }
        }
?>
