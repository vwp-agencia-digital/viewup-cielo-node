#!/usr/bin/env bash
CURRENT_COMMIT=$(cat .git/refs/heads/master)
IT=$(git log -1 --pretty=format:"%an, %s, %b, %ai"  $*)

echo "Add remote dist repository";

git pull origin master;



echo "Preparing files";

npm run tsc-build && npm run document;

echo "Coping new files";
cp -r ./lib/* ./dist;
cp -r ./docs/ ./lib/docs;
cp ./docs/README.md ./lib/README.md;
cp ./docs/README.md ./README.md;

git push github master;

npm publish --access public

