<?php
$url = 'https://crm.belmar.pro/api/v1/getstatuses';
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);       
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'token:ba67df6a-a17c-476f-8e95-bcdb75ed3958'
));

$response = curl_exec($ch);
if ($response === false) {
    $error = curl_error($ch);
    echo "cURL Error: $error";
} else {
    echo $response;
}
curl_close($ch);
?>