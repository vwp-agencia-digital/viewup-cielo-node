#!/usr/bin/env bash
CURRENT_COMMIT=$(cat .git/refs/heads/master)
IT=$(git log -1 --pretty=format:"%an, %s, %b, %ai"  $*)

rm -rf ./dist
echo "Add remote dist repository";
git clone ssh://root@hospedaup.com.br:288/home/git/dist/viewup-cielo-node.git dist;
git pull origin master;



echo "Preparing files";

npm run tsc-build;
npm run document;

echo "Coping new files";
cp -r ./lib/* ./dist;
cp -r ./docs/ ./dist/docs;
cp ./docs/README.md ./dist/README.md;
cp ./package.json ./dist/package.json;
cp ./typings.d.ts ./dist/typings.d.ts;
cp ./.npmignore ./dist/.npmignore;

echo "generate ignore";

IGNORE=$".idea\nyarn.lock\nsrc\n.gitlab-ci.yml\npackage-lock.json\nnode_modules\n*.log\n.vscode\n";
printf $IGNORE > ./dist/.gitignore;

echo "Creating git local repository"
cd ./dist/

echo "Commiting Changes";
git add -A;
git commit -m "Generate version for: ($CURRENT_COMMIT) $IT" ;
git push origin master;

echo "Removing local temp files";
cd ../
rm -rf ./dist/

echo "Done";
