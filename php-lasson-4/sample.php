  <?php

  for ($i=0; $i < 10; $i++) { 
    
    if ($i % 2 == 0) {
      echo $i;
    } else if (true) {
      echo 'else if';
    } else {
      echo 'else';
    }

  }

  ?>

  <?php 

  $i = 0;

  while ($i <= 10) {
    echo "while $i <br>";
    $i++;
  }

  ?>

  <?php 

    $args = [ 'Один', 'Два', 'Три', 'Четыре'];

    for ($i=0; $i < count($args); $i++) { 
      
      echo $args[$i]. '<br>';

    }
  
  ?>

  <?php 
  
    $args = [
      'Один' => 1,
      'Два' => 2,
      'Три' => 3,
      'Четыре' => 4,
    ];

    foreach ($args as $key => $item) {
      echo $key . $item . '<br>';
    }
  
  ?>
