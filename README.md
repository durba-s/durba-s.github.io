# Blog
To start the app
```sh
cd blog #navigate to app directory
npm install -g npm@latest #Ensure you’re using an updated version of npm
npm install #nstall all the packages listed in package.json file
npm start #Try starting the app:
```
#### Create a webpage using github pages
1. In the React project directory, install the gh-pages package:
```sh
npm install gh-pages --save-dev
```
2. Update `package.json`
>  Add a homepage field to your package.json. Replace your-username and your-repo-name with your GitHub username and repository name:
```json
"homepage": "https://your-username.github.io/your-repo-name"
```
> Add predeploy and deploy scripts to the scripts section:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Run the following command to build the app and deploy it to the gh-pages branch (Push the contents of the `build` folder to the `gh-pages` branch)
```sh
npm run deploy
```
