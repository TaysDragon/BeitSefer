<?php

// parse_str(implode('&', array_slice($argv, 1)), $_GET);

echo ($argv, 1);

//Create an associative array, and store your and your partner's last names as the keys, and your first names and age as the value. Hint: What data structure do you use to store mutiple pieces of information?

$partners = [
'Oud' => ['Sharon', 36],
'Rimstid' => ['Karin' , 30],
'Yang' => ['Dacia', 30]
];

//Loop through the array, and print the same information you printed previously for both yourself and your partner:
// "My name is {{ FULL NAME }}." Print whether it's long or short.



// "I am {{ AGE }} years old." Print the relevant "Sake!" statement, depending on your age.
foreach ($partners as $last => $first, $age) {
if ($age > 21)
  echo "$first Sake! Sake! Sake!\n";
elseif ($age === 21)
  echo "$first Just slipped by! Sake! Sake! Sake!\n";
else
  echo "$first No Sake for me :(\n";
}


// Separate each iteration with a line of separators, using str_repeat.


