# How to run the backend server on the local computer

Prerequisites:

1. Node.js installed on the local machine.
2. MySQL installed on the local machine.

Steps to run the backend server:

1. Install Node packages in its top directory: npm install

2. Create a database user named "code4real" with the password "teamc4r".

3. Grant permission to a database named "crazy" to the user "code4real":
mysql> create database crazy;
mysql> GRANT ALL PRIVILEGES ON crazy.* TO 'code4real'@'localhost';

4. Run from the top directory:
node server.js

5. Change the frontend to use the local server for the API service:

localhost:8088
