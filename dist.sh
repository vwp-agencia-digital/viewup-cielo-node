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


cp -r ./lib/* ./dist;
cp -r ./docs/ ./dist/docs;
cp ./docs/README.md ./dist/README.md;
cp ./package.json ./dist/package.json;
cp ./typings.d.ts ./dist/typings.d.ts;

echo "generate ignore";

IGNORE=".idea\n
yarn.lock\n
src\n
.gitlab-ci.yml\n
package-lock.json\n
node_modules\n
*.log\n
.vscode\n";
echo $IGNORE > ./dist/.gitignore;

echo "creating git local repository"
cd ./dist/


git add -A;
git commit -m "generate version for: $CURRENT_COMMIT\n\n$IT" ;
git push origin master;

echo "removing local temp files";
cd ../
rm -rf ./dist/

echo "done";
