<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT");
    header("Access-Control-Allow-Headers: Content-Type");

    $request = json_decode(file_get_contents("php://input"));
    
    if($request != null){
        $id = $request->id;

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

        $sql = "SELECT username, email, fullname, win, lose, password FROM account
                WHERE id = '".$id."'";
                // $sql = "SELECT username, email, fullname, win, lose, password FROM account
                // WHERE id = 15";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            $rows = array();
            while($row = $result->fetch_assoc()) {
                $rows[] = $row;
                echo json_encode($rows);
                $conn->close();
            }
        }else echo 'ko co id';
    }
    else{
        echo 'Fail';
    }
?>