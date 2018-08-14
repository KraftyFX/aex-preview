# AEX
This is an After Effects scripting library that lets you:
1. Read the AE DOM as a simple JS object that can be saved to disk.
2. Update the AE DOM by providing simple JS objects.

# Requirements
1. Adobe After Effects
1. VSCode as your editor

# Download/Install
TODO

# How to use this library
Import the library and use one of the top level functions

## Reading the DOM
```javascript
#include "aex.jsx"

var aeProj = app.project;

var toJsResult = aex.toJsObject(aeProj);

if (toJsResult.success)
{
    var jsProj = toJsResult.value;

    // Save the file
}
```

## Updating the DOM
```javascript
#include "aex.jsx"

var aeProj = app.project;

var toJsResult = aex.toJsObject(aeProj);
var jsProj = toJsResult.value;

jsProj.comp[0].name = 'Foo';

var assignResult = aex.assign(aeProj, jsProj);

if (assignResult.success)
{
    // The project was successfully updated
}
```

## Diffing the DOM
```javascript
// TODO
```
