# How to use this API

```javascript
// Any project/comp/layer/etc. will work
var aeProj = app.project;

var jsProj = aex.toJsObject(aeProj);

jsProj.comp[3].layers[3].name = 'Foo';

aex.assign(aeProj, jsProj);
```

# Concepts

## Readers
A set of helper classes that reads the AE DOM and returns a json object that can be saved/modified.

## Assigners
A set of helper classes that takes a JSON blob and updates the AE DOM with it.

## Differs - Not yet implemented
Compares two AE doms or JSON blobs and describes the differences between them.