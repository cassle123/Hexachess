<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: Content-Type");

    $request = json_decode(file_get_contents("php://input"));
    
    if($request != null){
        $id = $request->id;
        $win_or_lose = $request->winorlose;
        
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

        if($win_or_lose == 1)
            $sql = "UPDATE account SET win = win + 1 WHERE id = '" . $id . "'";
        else
            $sql = "UPDATE account SET lose = lose + 1 WHERE id = '" . $id . "'";

        $result = $conn->query($sql);

        if ($result === TRUE) {
            echo '1';
        } else {
            echo '0';
        }
        $conn->close();
    }
    else{
        echo 'Thất bại vui lòng kiểm tra lại';
    }
?>