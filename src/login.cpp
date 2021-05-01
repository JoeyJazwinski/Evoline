#include <fstream>
#include <iostream>
#include <chrono>
#include <thread>
using namespace std;

void wait(int milli) {
  this_thread::sleep_for(chrono::milliseconds(milli));
}

int main()
{
  char data[100];

  // open a file in write mode.
  ofstream LoginData;
  LoginData.open("LoginData.dat");

  cout << "Enter Your Username: ";
  cin.getline(data, 100);

  LoginData << data << endl;

  cout << "Enter Your Password: ";
  cin >> data;
  cin.ignore();

  LoginData << data << endl;
  LoginData.close();

  ifstream ReadLoginData;
  ReadLoginData.open("LoginData.dat");

  // ReadLoginData >> data; Read Data and display it!
  // cout << data << endl;

  wait(2000);
  cout << "Logging In As: ";
  ReadLoginData >> data;
  cout << data << endl;

  ReadLoginData.close();
  wait(1000);
  return 0;
}