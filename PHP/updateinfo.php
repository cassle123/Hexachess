<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: Content-Type");

    $request = json_decode(file_get_contents("php://input"));
    
    if($request != null){
        $id = $request->id;
        $hoten = $request->hoten;

        $email = $request->email;
        
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "hexachess";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        $sql = "UPDATE account SET fullname='".$hoten."', 
                email='".$email."' 
                WHERE id = '".$id."'";

        $result = $conn->query($sql);

        if ($conn->query($sql) === TRUE) {
            echo "Cập nhật thành công";
        }
        else {
            echo "Thất bại";
        }
    }
    else{
        echo 'Thất bại vui lòng kiểm tra lại';
    }
    $conn->close();
?>