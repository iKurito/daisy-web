#!/usr/bin/env sh

# Configure nginx with environment variables using envsubst
export DNS_SERVER=$(cat /etc/resolv.conf |grep -i '^nameserver'|head -n1|cut -d ' ' -f2)
echo "Using DNS_SERVER=${DNS_SERVER}"

echo "Using DAISY_SERVICE_URL=${DAISY_SERVICE_URL}"

envsubst '${DNS_SERVER} ${DAISY_SERVICE_URL}' < /default.conf.template > /etc/nginx/conf.d/default.conf

echo ">>> Final Configuration being used: "
cat /etc/nginx/conf.d/default.conf
echo ">>> EOF: default.conf"

# Containers run nginx with global directives and daemon off
if [ -z "$DEBUG" ]; then
  nginx -g 'daemon off;'
else
	echo "DEBUG enabled"
  nginx-debug -g 'daemon off;'
fi