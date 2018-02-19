#!/bin/bash
# Generate a Markdown change log of pull requests from commits between two tags
# Author: Russell Heimlich
# URL: https://gist.github.com/kingkool68/09a201a35c83e43af08fcbacee5c315a

# HOW TO USE
# Copy this script to a directory under Git version control
# Make the script executable i.e. chmod +x changelog.sh
# Run it! ./changelog.sh
# Check CHANGELOG.md to see your results

# Repo URL to base links off of
REPOSITORY_URL=https://github.com/wp-cli/wp-cli
now=$( date +'%d/%m/%Y %H-%M-%S');
# Get a list of all tags in reverse order
# Assumes the tags are in version format like v1.2.3
GIT_TAGS=$(git tag -l --sort=-version:refname)

# Make the tags an array
TAGS=($GIT_TAGS)
LATEST_TAG=${TAGS[0]}
PREVIOUS_TAG=${TAGS[1]}

# If you want to specify your own two tags to compare, uncomment and enter them below
# LATEST_TAG=v0.23.1
# PREVIOUS_TAG=v0.22.0

# Get a log of commits that occured between two tags
# We only get the commit hash so we don't have to deal with a bunch of ugly parsing
# See Pretty format placeholders at https://git-scm.com/docs/pretty-formats
COMMITS=$(git log  --pretty=format:"%h")

# Store our changelog in a variable to be saved to a file at the end
MARKDOWN="## Log de alterações (atualizado em $now)"
MARKDOWN+='\n'

# Loop over each commit and look for merged pull requests
for COMMIT in $COMMITS; do

    INFO=$(git log -1 $COMMIT --date=format:'%d/%m/%Y %H-%M-%S' --pretty=format:'\n### %cd %s\n```\nHash: %h\nEmail: %ce\nName: %cN\n```')
    MARKDOWN+="$INFO\n\n"

done

# Save our markdown to a file
echo -e $MARKDOWN > CHANGELOG.md
printf "\n\n"  >> "./docs/README.md";
cat "./CHANGELOG.md" >> "./docs/README.md"