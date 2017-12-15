rm -rf .temp

set -e

yes "" | ./node_modules/.bin/vue init . .temp

cd .temp
npm install
npm run build
npm run unit
