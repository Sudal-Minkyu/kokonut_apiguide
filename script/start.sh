#!/bin/bash

cd /root/kokonut_api_guide/

# 프로세스 종료
PID=$(pgrep -f npm)
kill $PID

# 10초간 대기합니다.
sleep 10

# 새로운 프로세스를 시작합니다.
nohup npm run dev -- --host 0.0.0.0 --port 8052 1>/root/kokonut_api_guide/logs/$(date +%Y-%m-%d)_stdout.log 2>/root/kokonut_api_guide/logs/$(date +%Y-%m-%d)_stderr.log &

exit
