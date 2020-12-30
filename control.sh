#!/bin/bash

workspace=$(cd $(dirname $0) && pwd -P)
cd ${workspace}


function start(){
    
    local dist="index.html"
    if [[ ! -f ${dist} ]];then
        echo "[error] Not exists : ${dist}"
        exit 1
    fi
    echo "Directory is ok!"
    cd /home/kaochong/app/kc-SpaManagement/htdocs
    cp -d /home/kaochong/public/* ./public/
	return 0
}
function qastart(){
    
    local dist="index.html"
    if [[ ! -f ${dist} ]];then
        echo "[error] Not exists : ${dist}"
        exit 1
    fi
    echo "Directory is ok!"
    cd  /data1/app/xnr-admin-spa/
    cp -r /data1/app/adminpublic/* ./public/
	return 0
}

action=$1
case $action in
    "start")
        start
        ;;
    "qa-restart")
        qastart
        ;;
    *)
        echo "unkonw command"
        ;;
esac