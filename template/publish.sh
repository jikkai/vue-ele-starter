#!/bin/sh

# build
if which yarn; then
  yarn run build
else
  npm run build
fi

# zip
if which zip; then
  cd ./dist
  zip -r -o './dist' './'
fi
