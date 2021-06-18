<?php 
define('MYSQL_BOTH',MYSQLI_BOTH);
define('MYSQL_NUM',MYSQLI_NUM);
define('MYSQL_ASSOC',MYSQLI_ASSOC);

function filter_inputs($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
  
}

//$_REQUEST['course_period'] = "";
$date = $name =  $email= $mobile =  "";// print_r($_REQUEST);die();

$name     = isset($_REQUEST['name'])?     filter_inputs($_REQUEST['name'])       : "";
$email    =	isset($_REQUEST['email'])?      filter_inputs($_REQUEST['email'])    : "";
$mobile	  =	isset($_REQUEST['mobile'])?     filter_inputs($_REQUEST['mobile'])   : "";


$date     = Date("Y-m-d");
$to             = "$email";
$subject        = "Free Web Design Seminar";
// Always set content-type when sending HTML email
$headers        = "MIME-Version: 1.0" . "\r\n";
$headers        .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers        .= 'From: <seminar@boldlinks.com.ng>' . "\r\n";
$headers        .= 'Cc: info@boldlinks.com.ng' . "\r\n";
$message = "
<html>
<head>
<title>Annual Give away Seminar Mail Aknowledgement</title>
</head>
<body>
<p>Hello $name <$email>,
We are sending you this message to confirm that you have successfully registered for the Free Web Design Seminar <br/>
Your application has been recieved but we urge you to be patient while we review it and get back to you if shortlisted for the training. 
Please note that the training is absolutely free.</p><br/>
<table width='800px'>
<tr style='padding:10px; text-align:center'>
<th style='padding:10px; text-align:center'>Name</th>
<th style='padding:10px; text-align:center'>&nbsp;</th>
<th style='padding:10px; text-align:center'>Mobile</th>
<th style='padding:10px; text-align:center'>&nbsp;</th>
<th style='padding:10px; text-align:center'>Date</th>
<th style='padding:10px; text-align:center'>&nbsp;</th>
<th style='padding:10px; text-align:center'>Time</th>
</tr>
<tr style='padding:10px; text-align:center'>
<td style='padding:10px; text-align:center'>{$name}</td>
<td style='padding:10px; text-align:center'>&nbsp;</td>
<td style='padding:10px; text-align:center'>{$mobile}</td>
<td style='padding:10px; text-align:center'>&nbsp;</td>
<td style='padding:10px; text-align:center'>&nbsp;</td>
<td style='padding:10px; text-align:center'>&nbsp;</td>
<td style='padding:10px; text-align:center'>10:00 - 3:30 PM </td>
</tr>
</table><br><br>
<p style=''><em><strong>Boldlinks Technology Solutions</strong></em></p>
<p style=''><em>Km 474, Lagos-Abeokuta Exp.Way, Beside Northwest Filling Station,General B/Stop, Ijaiye-Ojokoro, Lagos</em></p>
    
<p style=''><em>08074544422,08162754001</em></p>
</body>
</html>
";



$conect = mysqli_connect("localhost", "root", "","seminar_db");
//$conect = mysqli_connect("localhost:3306", "Boldlinks_win", "Consistency@2016","boldlinks_win_careertechdb");
mysqli_select_db($conect,"formtable");

///select all entries
/*$All_sql = ("SELECT COUNT(*) FROM formtable");
$rs = mysql_query($All_sql);
echo "total is $rs";*/

$select_sql = "select * from  formtable where email ='".$email."' OR mobile='".$mobile."'";
//print_r($select_sql);die();
//$sql = $sql = @mysqli_query($conect,$select_sql);print_r($sql);die("stop hrere");
//$sql="SELECT * FROM course";
$user_query=mysqli_query($conect,$select_sql);
if($user_query){
    while($row = mysqli_fetch_array($user_query, MYSQL_ASSOC)){//.
        $db_email = $row['email'];
        $db_phone = $row['mobile'];
        if(($db_email != "") && ($db_email == $email)){
            echo '<p class="or_btn_icon2" >Your have already registered with this mail: '.$row['Email'].'</p>';die();
        }else if(($db_phone != "") && ($db_phone == $mobile)){
            echo '<p class="or_btn_icon2" >Your have already registered with this number: '.$row['Phone'].'</p>';die();
        }
        

    } 
}
                                       
$insert_sql = "insert into  formtable set name='".$name."', email='".$email."', mobile='".$mobile."'";
                                                        
 //print_r($insert_sql);die();
$sql = @mysqli_query($conect,$insert_sql);
if($sql){ mail($to,$subject,$message,$headers);
mysqli_close($conect);
$a = '<p class="or_btn_icon2">Your registration has been submitted successfully.<br> please check your mail '.$email.' for follow up</p>';
$b = 1;
$res_arr = array($a,$b);
echo $res_arr[0];
}
?>