<?php
class Database{
 
    // specify your own database credentials
   /* private $host = "localhost:3306";
    private $db_name = "boldlinks_win_careertechdb";
    private $username = "Boldlinks_win";
    private $password = "Consistency@2016";*/
    private $host = "localhost";
    private $db_name = "seminar_db";
    private $username = "root";
    private $password = "";
    public $conn;
 
    // get the database connection
    public function getConnection(){
 
        $this->conn = null;
 
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "error: can't connect" . $exception->getMessage();
        }
 
        return $this->conn;
    }
}
?>