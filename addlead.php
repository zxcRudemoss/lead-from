<?php
$url = 'https://crm.belmar.pro/api/v1/addlead';
$ch = curl_init($url);
$postData = file_get_contents('php://input');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
curl_setopt($ch, CURLOPT_POST, true);            
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData); 
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'token:ba67df6a-a17c-476f-8e95-bcdb75ed3958',
    'Content-Type: application/json',
    'Content-Length: ' . strlen($postData)
));

$response = curl_exec($ch);
if ($response === false) {
    $error = curl_error($ch);
    echo "cURL Error: $error";
} else {
    echo "Response: $response";
}
curl_close($ch);
?>