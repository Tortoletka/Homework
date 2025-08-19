<?php 

  $numbers = [3, 8, 15, 22, 7, 10, 33, 44, 55, 60];

  for ($i=0; $i < count($numbers); $i++) { 
    if ($numbers[$i] % 2 == 0) {
      echo $numbers[$i] . "<br>";
    }
  }

?>