<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: Content-Type");

    $request = json_decode(file_get_contents("php://input"));
    
    if($request != null){
        $id = $request->id;
        $matkhau = $request->matkhau;
        $matkhaumoi = $request->matkhaumoi;
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

        $sql = "SELECT password FROM account WHERE id = '".$id."'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                if($row["password"] == $matkhau)
                {
                    $sql2 = "UPDATE account SET password = '".$matkhaumoi."'
                            WHERE id = '".$id."'";
                    if ($conn->query($sql2) === TRUE) {
                        echo "Cập nhật thành công";
                    }
                    else {
                        echo "Error: " . $sql2 . "<br>" . $conn->error;
                    }
                }
                else
                {
                    echo "Nhập sai mật khẩu cũ";
                }
            }
        }else{
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    else{
        echo 'Thất bại vui lòng kiểm tra lại';
    }
    $conn->close();
?>