#!/bin/bash
sudo su -

yum update -y

# Change directory to the location of package.json file
cd /root/kokonut_api_guide/

# Remove node_modules folder
rm -rf node_modules
rm -rf package-lock.json

# Install dependencies
npm install

PID=$(pgrep -f npm)
kill $PID

sleep 5

mkdir /root/kokonut_api_guide/logs
nohup npm run dev 1>/root/kokonut_api_guide/logs/$(date +%Y-%m-%d)_stdout.log 2>/root/kokonut_api_guide/logs/$(date +%Y-%m-%d)_stderr.log &

exit