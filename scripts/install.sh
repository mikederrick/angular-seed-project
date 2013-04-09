#!/bin/bash

echo ""
echo "Installing and building npm."
echo "-------------------------------------------------------------------"

cd /opt
git clone http://github.com/isaacs/npm.git
cd npm
sudo make install

echo ""
echo "-------------------------------------------------------------------"
echo ""
echo "NPM was installed, which also includes node.js."
echo ""
echo "-------------------------------------------------------------------"
echo ""
echo "1) To pull down node.js dependencies for testing using Karma, 'cd' into the project directory and run 'npm install'."
echo "This will pull down any project dependencies specified in the package.json file and place them in the folder node_modules."
echo ""
echo "2) The 'test.sh' file is already configured to run Karma. After running 'npm install', run './scripts/test.sh' and Karma will start up."
echo ""
echo "3) To host the application, run './scripts/webserver.js' and then navigate to localhost:8000/app/angular_poc.html"
echo ""
echo "-------------------------------------------------------------------"