# MONO_REPO-ARCHITECTURE

# LERNA COMMANDS

"start": "lerna run start --scope=web-client",
"start": "lerna run start --{scope=web-client, backend-api}",
npx lerna clean -y   
npx lerna bootstrap --hoist