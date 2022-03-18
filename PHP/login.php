<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: Content-Type");

    $request = json_decode(file_get_contents("php://input"));
    
    if($request != null){
        $taikhoan = $request->taikhoan;
        $matkhau = $request->matkhau;

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

        $sql = "SELECT id, password FROM account
                WHERE username = '".$taikhoan."'";
        // $sql = "SELECT id, username, email, fullname, win, lose, password FROM account
        //         WHERE id = 1";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            if($row["password"] == $matkhau)
            {
                echo $row["id"];
            }
            else
            {
                echo "Sai Mật Khẩu";
            }
        }
        } else {
            echo "Tài khoản không tồn tại";
        }
        $conn->close();
    }
?>