#! /bin/bash
if ! which git 1> /dev/null 
then
	if apt-cache search nginx 1> /dev/null
	then
		apt-get -y install nginx;
	fi
fi 

if which git 1> /dev/null 
then
	
	location='http {';
	confAdd=`pwd`'/serverConfNginx.txt';
	confCommon='/etc/nginx/nginx.conf';
	if find $confCommon 1> /dev/null && ! grep $confAdd $confCommon 
	then
		sed -i "s#$location#$location \n    include $confAdd;#" "/etc/nginx/nginx.conf"; 
	fi
fi

cd /usr/sbin/ && ./nginx -s reload -t -v
