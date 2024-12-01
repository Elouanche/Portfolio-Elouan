<?php
session_start();

// Vérification du token CSRF
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    echo json_encode(['success' => false, 'message' => 'Requête invalide.']);
    exit;
}

// Traitement du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Valider l'email et le message
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = $_POST['message'];  // On laisse les caractères spéciaux tels quels

    if ($email && !empty($message)) {
        // Sanitize l'email, pour enlever les caractères non sécurisés
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);

        // Valider l'email après nettoyage
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['success' => false, 'message' => 'Email invalide.']);
            exit;
        }

        // Préparer l'email à envoyer
        $to = "elouan.chedalleux@gmail.com";
        $subject = "Message de contact";
        $headers = "From: " . $email;

        // Envoyer l'email
        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(['success' => true, 'message' => 'Votre message a été envoyé avec succès.']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi du message.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'L\'email ou le message est invalide.']);
    }
}
?>
