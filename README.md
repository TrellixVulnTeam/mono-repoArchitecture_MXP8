# MONO_REPO-ARCHITECTURE
A Monorepository is an architectural concept, which basically contains all the meaning in its title. Instead of managing multiple repositories, you keep all your isolated code parts inside one repository. Keep in mind the word isolated—it means that monorepo has nothing in common with monolithic apps. You can keep many kinds of logical apps inside one repo; for example, a website and its iOS app.

# LERNA
Leern is a tool for managing JavaScript projects with multiple packages, built on Yarn.

# LERNA COMMANDS

"start": "lerna run start --scope=web-client".\
"start": "lerna run start --{scope=web-client, backend-api}".\
npx lerna clean -y  : Cleans all the node modules from diffrent projects 
npx lerna bootstrap --hoist : Create common node module for two different  projects.

# start project

npm run start  : Runs the script from package.json of main wrapper repository, which in our case is MONO-REPOARCGUTECTURE