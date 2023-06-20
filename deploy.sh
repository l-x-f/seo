#!/usr/bin/env sh

set -e

# build
npm run build

cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/l-x-f/seo.git master:gh-pages
echo -e "\n\033[32mSuccessfully deploy gh-pages\033[0m"

cd -
echo "✅ Deploy completed"
