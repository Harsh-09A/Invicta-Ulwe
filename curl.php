<?php
header('Access-Control-Allow-Origin: *');

$curl = curl_init();
$url = 'https://api.kylas.io/v1/leads/';

$headers = array(
    'Content-Type: application/json',
    'api-key: 39ff3bd0-5862-4b86-b948-5268715d7e97:7772'
);

$lead_name = htmlspecialchars($_POST['user_name'], ENT_QUOTES); // required 
$lead_number = htmlspecialchars($_POST['contact_number'], ENT_QUOTES); // required
$lead_email = htmlspecialchars($_POST['user_email'], ENT_QUOTES); // required

$post_data = array(
    "firstName" => $lead_name,
    "phoneNumbers" => [
        [
            "type" => "MOBILE",
            "code" => "IN",
            "value" => $lead_number,
            "dialCode" => "+91",
            "primary" => true
        ]
    ],
    "emails" => [
        [
            "type" => "OFFICE",
            "value" => $lead_email,
            "primary" => true
        ]
    ],
    "products" => [
        [
            "id" => 301831,
            "name" => "Delta Prestige",
        ]
    ],
    "source" => 1090623
);

$json_data = json_encode($post_data);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $json_data);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);

if ($response) {
    echo $response;
} else {
    echo 'No response received.';
}
