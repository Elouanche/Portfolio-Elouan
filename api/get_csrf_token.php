<?php
session_start();

// Si le token CSRF n'existe pas encore, on le génère
if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32)); // Génération du token
}

// Retourner le token CSRF en format JSON
echo json_encode(['token' => $_SESSION['csrf_token']]);
?>
