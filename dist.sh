#!/usr/bin/env bash

if   !($(git remote | grep dist > /dev/null;)); then
  echo "Add remote dist repository";
  git remote add dist ssh://root@hospedaup.com.br:288/home/git/dist/viewup-cielo-node.git
fi
IGNORE=".idea
yarn.lock
src
.gitlab-ci.yml
package-lock.json
node_modules
*.log
.vscode"
echo $IGNORE > ./.gitignore;
git add -A;
git commit -m "generate version";
git push dist --all;
echo "done"