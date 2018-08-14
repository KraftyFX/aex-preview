# Contributing to aex
First off, thank you for taking the time to contribute!

[What should I know to get started](#what-should-I-know-to-get-started)
[What can I contribute](#how-can-i-contribute)

### What should I know to get started
There are 3 major functions in aex: reading the DOM, updating the DOM via a JSON object (a.k.a. assigning) and getting the difference between two DOM's (a.k.a. diffing).  Each operation has its own set isolated logic in a dedicated folder.

Each operation is designed to work on the major DOM objects in AE.  Project, Project Items, Layers, Properties, etc. The idea is you should be able to read, update or diff any of these objects.


**Readers**

A set of helper classes that reads the AE DOM and returns a json object that can be saved/modified.

**Assigners**

A set of helper classes that takes a JSON blob and updates the AE DOM with it.

**Differs - Not yet implemented**

Compares two AE doms or JSON blobs and describes the differences between them.