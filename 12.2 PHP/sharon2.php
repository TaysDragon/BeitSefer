<?php

/* Comments are the same in PHP as in JavaScript.
 *
 * create variables to store your first name, last name, and birth year. */

$first = 'Sharon'; 
$last = 'Oud';
$birthDate = "07/11/1980";

// Create a variable to store your full name, and construct it from your first and last name.
$fullName = $first . ' ' . $last;


// Calculate your age and store it in a variable.
  //date in mm/dd/yyyy format; or it can be in other formats as well
  
  //explode the date to get month, day and year
  $birthDate = explode("/", $birthDate);
  //get age from date or birthdate
  $age = (date("md", date("U", mktime(0, 0, 0, $birthDate[0], $birthDate[1], $birthDate[2]))) > date("md")
    ? ((date("Y") - $birthDate[2]) - 1)
    : (date("Y") - $birthDate[2]));



// Automatically inserts the value of $name.
echo "My name is $fullName.\n";
echo "I'm $age years old.\n";

//part 2 starts here
// After printing "I am {{ AGE }}", if you're older than 21, print: "Sake! Sake! Sake!". If you're younger than 21, print: "No Sake for me :(". Otherwise, print: "Just slipped by! Sake! Sake! Sake!"
if ($age > 21) {
  echo "Sake! Sake! Sake!\n"; 
} else if ($age < 21) {
  echo "No Sake for me :( !\n";
} else {
  echo "Just slipped by! Sake! Sake! Sake!\n";
}



//Where you print your name, if it's longer than 12 characters, print: "It's a long name". Otherwise, print: "It's a short name".
if (strlen($first) > 10) {
  echo "$first is a long name.\n";
}else {
	echo "$first is a short name.\n";
}

// Use str_repeat to print a line of separators
// string str_repeat ( string $input , int $multiplier )
echo str_repeat($first, 10);

