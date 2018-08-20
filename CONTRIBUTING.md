# Contributing to aex
First off, thank you for taking the time to contribute!

[How do I get started?](#how-to-get-started)
[How can I contribute?](#how-can-i-contribute)

# How to get started
## Prerequisits
Before you start you'll need:

1. Adobe After Effects 2018. If you want to develop against a different version you'll have to update the build script and project setup to target that version.
1. A current version of [VSCode](https://code.visualstudio.com/download).  
1. Comfort with TypeScript. If you never worked with it before you should read the [5 minute overview of TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Getting Setup
1. Clone the repository and open the `aex.code-workspace` file in VSCode.
1. When you open the workspace the `aex` folder contains the code for the project.  The other folders are aliases to other folders to the standard location of the After Effects Script 2018 scripts folder.
1. Using the [VSCode Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) or your local shell run the following commands:
```bash
> npm install
```
## Starting development
When you're ready to build and test the library go to the VSCode integrated terminal for the `aex` folder and type:
```
> npm start
```
This command will: 
1. Perform an initial compilation of the library
1. Deploy the library into the `test/lib` project folder
1. Compile the test project and copy both the library and the test script file into the After Effects Script directory
1. Enter watch mode and continuously recompile as changes are made to the library OR the project.


### Project Structure
The AEX folder containers a few important top level folders
 - `lib` - A typescript project that compiles the library
 - `test` - A typescript project that compiles an ESTK test script that can be executed in After Effects to test aex.

The library has a few top level functions:
1. Reading the AE DOM and getting a serializable JSON object from it.
1. Updating an existing AE object in the DOM via a JSON object

Reading the AE dom is powered by **Readers** and updating the dom is powered by **Assigners**.  Each contains a hierarchy of classes that mirror an object in the AE dom.  So for example the `CompItemReader` helps produce the JSON for a single comp and the `CompAssigner` reads that JSON and updates AE.  There are dedicated classes for collections as well (e.g. `ItemCollectionReader` and `ItemCollectionAssigner`.


### How can I contribute
TODO