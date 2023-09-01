#!/bin/bash
sudo su -
cd /root/kokonut_api_guide/

PORT=8060
echo "프로세스 종료용 포트조회 : $PORT"

PID=$(lsof -i :$PORT -t)

if [ -z "$PID" ]; then
    echo "종료할 프로세스가 없습니다. $PORT"
else
    echo "해당 프로세스를 종료합니다. $PORT is: $PID"
    kill -9 $PID
    sleep 5
fi

mkdir /root/kokonut_api_guide/logs
nohup npm run dev -- --host 0.0.0.0 1>/root/kokonut_api_guide/logs/$(date +%Y-%m-%d)_stdout.log 2>/root/kokonut_api_guide/logs/$(date +%Y-%m-%d)_stderr.log &

exit