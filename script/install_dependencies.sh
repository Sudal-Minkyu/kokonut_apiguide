
#!/bin/bash

# update packages
sudo yum update -y

# install node.js
#curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
#sudo yum install -y nodejs

# install npm packages
#cd /root/kokonut_api_guide/
#npm install --global npm

# Change directory to the location of package.json file
cd /root/kokonut_api_guide/

# Remove node_modules folder
rm -rf node_modules

# Install dependencies
npm install