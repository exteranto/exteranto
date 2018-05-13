#!/bin/bash

# Default console arguments.
packTo=("chrome" "safari" "extensions")
zipped='false'

# Parses flags.
while getopts :a:z flag; do
  case "${flag}" in
    a) packTo=(${OPTARG//,/ }) ;;
    z) zipped='true' ;;
    *) error ;;
  esac
done

for api in ${packTo[@]}; do
  if  [ -d manifests/$api ]; then
    webpack --display=none --mode=production

    mkdir -p packs/pack-$api

    cp -R dist static index.html manifests/$api/* packs/pack-$api

    if [ $zipped = true ]; then
      cd packs/pack-$api
      zip -r ../pack-$api-$(date +%s).zip .
      cd ../..
    fi
  fi
done
