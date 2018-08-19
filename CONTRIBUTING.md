# Contributing to aex
First off, thank you for taking the time to contribute!

[How do I get started?](#how-to-get-started)
[How can I contribute?](#how-can-i-contribute)

# How to get started
## Prerequisits
Before you start you'll need a few tools:

1. Adobe After Effects
1. A current version of [VSCode](https://code.visualstudio.com/download).  
1. Be comfortable with TypeScript. If you never worked with it before you should read the [5 minute overview of TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Getting Started
1. Clone the repository and open the `aex.code-workspace` file in VSCode.
1. Using the [VSCode Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) or your local shell run the following:
```bash
cd lib
npm install
npm start     # This will compile and run in watch mode
```


### Project Structure
There are 3 major functions in aex: 
1. Reading the AE DOM and getting a serializable JSON object from it.
1. Updating an existing AE object in the DOM via a JSON object (a.k.a. assigning)
1. Diffing between two DOM's

Each operation has its own set isolated logic in a dedicated folder.

Each operation is designed to work on the major DOM objects in AE.  Project, Project Items, Layers, Properties, etc. The idea is you should be able to read, update or diff any of these objects.


**Readers**

A set of helper classes that reads the AE DOM and returns a json object that can be saved/modified.

**Assigners**

A set of helper classes that takes a JSON blob and updates the AE DOM with it.

**Differs - Not yet implemented**

Compares two AE doms or JSON blobs and describes the differences between them.


### How can I contribute
1. File bugs
1. Fix bugs
1. Request features
1. Add features