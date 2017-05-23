<?php 

function println($string) {
  echo "$string\n";
}

println str_repeat('-', 12) . "\n";


function nameLength($full_name) {
	if (strlen($full_name) > 12)
    println "It's a long name.\n";
  else
    println "It's a short name.\n";
}



$full_name = $student .' '. $data[0];

$age = $data[1];

println "I'm $age years old.\n";
  if ($age > 21)
    println "Sake! Sake! Sake!\n";
  else if ($age === 21)
    println "Just slipped by! Sake! Sake! Sake!\n";
  else
    println "No sake for me :(\n";

  println str_repeat('=', 12) . "\n";