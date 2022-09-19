<p align="center">
  <a aria-label="Next.js version" href="https://vercel.com](https://github.com/vercel/next.js">
    <img src="https://img.shields.io/badge/NEXT.JS-V12.2.5-ff9900?style=for-the-badge&logo=nextdotjs&labelColor=131921">
  </a>
  <a aria-label="React.js version" href="https://www.npmjs.com/package/next">
    <img alt="" src="https://img.shields.io/badge/REACT.JS-V18.2.0-007ec6?style=for-the-badge&logo=react&labelColor=131921">
  </a>
  <a aria-label="License" href="https://github.com/JunDevHarsh/amazon-clone/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
</p>

# Amazon-clone

The main goal of this project is to make a clone of world's largest e-commerce shopping website i.e. [Amazon](https://www.amazon.in/) using `next.js`.

## Deployment

Checkout: [Amazon-clone](https://amazon-clone-dev.netlify.app/)

- **Netlify** - The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.

> Note: The project is not fully developed. But still you can see the final demo of this project.

## Tech Stack

- **Next.js:** Next.js is a JavaScript framework that enables you to build superfast and extremely user-friendly static websites, as well as web applications using React.

- **Tailwind Css:** Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces.

- **React-icons:** React-icons is a small library that helps us add icons (from all different icon libraries) to your React apps.

## Run Locally

To develop locally:

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.

```bash
  git clone https://github.com/JunDevHarsh/amazon-clone.git
```

2. Open the project directory

```bash
  cd amazon-clone
```

3. Create a new branch:

```bash
  git checkout -b MY_BRANCH_NAME
```

4. Install the dependencies with:

```bash
  npm install
  or
  npm i
```

5. Start developing and watch for code changes:

```bash
  npm run dev
```

## Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

### Steps to contribute

- Step 1: Fork the repository
- Step 2: Clone the repository
- Step 3: Create a new branch
- Step 4: There are two possibilities you can follow
  - Create or make new components for the project
  - Find bugs or improve the issues
- Step 5: Commit your changes
- Step 6: Push your changes to Github
- Step 7: Submit a PR

### General Structure of Project
Currently this project is split into 4 main folders: 'components', 'pages', 'public', and 'styles'. Each containing code that pertains to its unique purpose but also interacting with the other folders.

  - components
    - Contains the interactive interfaces of the amazon-clone website.
    - Seperated into each of its own sections, allows for easy editing of specific parts.
    - Each component can be used throughout the website by a simple import.
  - pages
    - Contains the actual pages of the amazon-clone website like 404 error pages, index pages, product pages, etc.
    - Seperates each page into its own .js file to use.
    - Each page also contains components from the component folder.
  - public
    - Contains the images and logos used within the amazon-clone website.
    - This folder is used to store all the images and logos used, it can be easily accessed/imported into other components and pages.
  - styles
    - Contains the css files that will be used in the components and pages.
    - Having it contained in its own folder and in a global.css file allows for easy access and editing that effects everything.This reduces the need to go through each page/component and edit its CSS style.

  The other .json/.js files are frameworks/tools that help with the things like interfaces, buttons, etc.

  To use components in the pages you create you need to import the components from their respective locatiosn and then name/define the imported component. 
  For example a "Test" component from the "Tests" folder would look like "import Test from "../components/Tests/Test".
  To use images you would do something similar but from the "public" folder instead. 

## Authors

- Harshdeep Singh - [@JunDevHarsh](https://www.github.com/JunDevHarsh)

## License

[MIT](https://github.com/JunDevHarsh/amazon-clone/blob/main/LICENSE)
