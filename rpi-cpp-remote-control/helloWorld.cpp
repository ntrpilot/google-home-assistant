#include <iostream>
#include <cstdlib>
#include <signal.h>
#include <stdlib.h>
#include <stdio.h>

#include "wiringPi.h"

void initialise_gpio() {
  std::cout << "TODO nic: This doesn't do anything yet" << std::endl;
}

void cleanup_gpio_state(sig_t sig) {
  std::cout << std::endl << "Hmm " << sig << std::endl;
  std::exit(0);
}

int main() {

  initialise_gpio();

  // Cleanup when Ctrl+C is pressed
  signal (SIGINT, cleanup_gpio_state);




  return 0;
}
