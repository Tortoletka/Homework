<?php 


function content($tag, $content, $num) {
  
  
  for ($i=0; $i < $num; $i++) { 
    
    echo "<$tag>$content $i</$tag><br>";
  }
  
  
}

content ('span','Контент', 10);

?>