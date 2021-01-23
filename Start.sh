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

