echo 'Checking installation'

programs="nginx node npm redis-server psql"

for i in $programs; do
	if which "$i" > /dev/null
	then
		echo "${i} \e[32mOK"
	else
		echo "\e[31m${i} is not installed or not running"
		return 
	fi
done

./extras/monero-wallet-rpc --rpc-bind-ip 127.0.0.1 --rpc-bind-port 18089 --disable-rpc-login --log-level 2 --wallet-file sn1 --prompt-for-password --stagenet --tx-notify="/usr/bin/redis-cli --raw PUBLISH tx %s"
