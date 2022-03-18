<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: Content-Type");

    $request = json_decode(file_get_contents("php://input"));
    
    if($request != null){
        $hoten = $request->hoten;
        $taikhoan = $request->taikhoan;
        $matkhau = $request->matkhau;
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
        $sql = "SELECT username FROM account WHERE username = '".$taikhoan."'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "Tài khoản này đã được dùng";
        }else{
            $sql2 = "INSERT INTO account (username, password, email, fullname)
                VALUES ('".$taikhoan."', '".$matkhau."', '".$email."', '".$hoten."')";
            // $sql2 = "INSERT INTO account (username, password, email, fullname)
            //         VALUES ('2', '2', '2', '2')";
            if ($conn->query($sql2) === TRUE) {
                echo "Success";
            } else {
                echo "Error: " . $sql2 . "<br>" . $conn->error;
            }
        }
        $conn->close();
    }
?>