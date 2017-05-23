<?php

class User {  
  // 'public' means clients of this class can access these fields.
  public $firstName;
  private $lastName;
  private $email;	


public function __construct ($firstName, $lastName, $email = '') {
    $this->firstName = $firstName;
    $this->lastName = $lastName;
    $this->email = $email;    
  }
 }

$fullName = $firstName . " " . $lastName;
echo $fullName;

class User extends URL
{
  public function addURL ()
  {
    $this->URL = $URL;
  }
}

function separate($newName = 'Smith') {
  println($lastName = $newName);
}

}

$user = new User;

public function speak () {
    /* In $PHP, the $this keyword *always* means:
     *   "the object on which this method was called". */
     $this->println("User"); 
  }

  $user ->speak();

