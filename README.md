Custom Angular Seed
===================

Just an update to the angular-seed project the angular team assembled with a little scripting to get started.

Setup
-------------------

To run tests using the Karma test runner, you'll need node and npm. 

 - Run the install.sh script found in the scripts directory.
 - After npm and node have been installed, _cd_ into the project directory and run npm install. This will pull down any project dependencies specified in the package.json file and place them in the folder node_modules.
 - After running _npm install_, run _./scripts/test.sh_ and Karma will start up.
 - To host the application, run _./scripts/webserver.js_ and then navigate to localhost:8000/app/angular_poc.html

