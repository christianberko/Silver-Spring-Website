<?php
 $visitor  = $_POST['visitor'];
 $groupNum = $_POST['groups'];
 $vdate    = $_POST['vdate'];
 $place    = $_POST['frest'];
 $rating   = $_POST['rating'];
 $destination_email = "RITISTprofessor@gmail.com,ceb1810@rit.edu";
$email_subject = "Silver Spring, Maryland";
$email_body = "Visitor name  $visitor\n";
$email_body .= "Group Size $groupNum\n";
$email_body .= "Date Visited=$vdate\n";
$email_body .= "Favorite Restuarant $place ";
if (isset($_POST['concert'])) {
    $email_body .= "\n Went to concert  \n";
}
$email_body .= "\nRating -> $rating\n";

$email_body .= "\n Updated February 2023 \n";
mail($destination_email, $email_subject, $email_body);
echo "Data Sent\n";

?>