# Contributing to aex
First off, thank you for taking the time to contribute!

[How do I get started?](#how-to-get-started)

[How can I contribute?](#how-can-i-contribute)

# How to get started
## Prerequisits
Before you start you'll need:

1. Adobe After Effects 2018. If you want to develop against a different version you'll have to update the build script and project setup to target that version.
1. A current version of [VSCode](https://code.visualstudio.com/download).  
1. Comfort with TypeScript. If you never worked with it before you should start with the [5 minute overview of TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Getting Setup
1. Clone the repository and open the `aex.code-workspace` file in VSCode.  The workspace has an `aex` folder that contains the code for the project.  The other folders are aliases to the After Effects 2018 Scripts folder for both Mac and Windows for convenience. Only one will ever work at a time.  If you want to use a different version of After Effects, modify the `aex.code-workspace` file to point to a new path and also update `gulpfile.js` as a new target.
1. Using the [VSCode Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) or your local shell navigate to the root directory and run the following command:
```bash
> npm install
```
Your environment should now be setup for building and developing.

## Building the Project
When you're ready to build and test the library go to the VSCode integrated terminal for root folder and type:
```
> npm start
```
This command will: 
1. Compile the library in `lib` and deploy it into the `test/lib` folder. This happens b/c the test project needs the final type definition file to compile correctly.  Note: the test script `//@include`'s the library near the top.
1. Compile the test project and deploy it to the After Effects script directory and the library under its own `lib` folder.
1. Watch for changes to the library or the test script and redeploy it.

## Development Workflow
TODO


### Project Structure
The AEX folder containers a few important top level folders
 - `lib` - A typescript project that compiles the library
 - `test` - A typescript project that compiles an ESTK test script that can be executed in After Effects to test aex.

The library has a few top level functions:
1. Reading the AE DOM and getting a serializable JSON object from it.
1. Updating an existing AE object in the DOM via a JSON object

Reading the AE dom is powered by **Readers** and updating the dom is powered by **Assigners**.  Each contains a hierarchy of classes that mirror an object in the AE dom.  So for example the `CompItemReader` helps produce the JSON for a single comp and the `CompAssigner` reads that JSON and updates AE.  There are dedicated classes for collections as well (e.g. `ItemCollectionReader` and `ItemCollectionAssigner`.


# How to contribute
TODO