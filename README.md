# Covid Overflow
![logo](https://imgur.com/28zQk6r.png)

## Quick Start

#### To get started, run the following scripts:

`yarn install-all`

`yarn start`

#### If your static build isn't changing, run the following script:

`yarn start-nobuild`

## Features

Covid Overflow is a web application that tackles misinformation by providing credible statistics from authoritative sources.
The application provides the following features:

1. Landing page with statistics
2. Map with daily statistics
3. Articles related to Covid-19

## Technologies used
- Next.js 
- Docusaurus
- Prism-frontend
- Express
- Covid API provided by NOVELCovid 

## Rules and Standards

### Pull Request

Please don't make a PR without any issue. If you make one, it will be closed. If you want to open a PR, please link it with the issue.

### Naming Branches

Name your branches something like this

dev/\${issueNo}-#{yourGitHubName}

### Project Flow
So this project is divided into three Parts
- Landing Page (Next.Js)
- Documentation (Docusaurus)
- Map (PRISM Frontend) 

## Landing Page
### Folder Layout

- All the files are inside **Pages** except just one which is related to axios.
- There is a HOC **Layout** which lies inside **Pages/HOC** and which is wrapped around the main **index.js**. This Layout file has global CSS styling.
- All the reusable Components such as buttons, Loaders etc lies in **Pages/Components**.

### CSS Styling
All the Styles are scoped to it's component using css modules only except the **Layout** styles which are global.
A Scss file named **variables.modules** lies in the Pages which contain all the variables (colors mainly).
