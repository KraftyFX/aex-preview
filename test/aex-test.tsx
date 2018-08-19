//#include "lib/aex-lib.jsx"

var jsResult = aex.toJsObject(app.project);

if (jsResult.status === aex.Status.Success) {
    // Save json.Result.value to a file or tell the user
} else {
    // Tell the user about jsonResult.errors
}

var jsProj = jsResult.value as aex.IProject;

var mergeResult = aex.assign(app.project.items, jsProj.items);

if (mergeResult.status === aex.Status.Success) {
    // Tell the user
} else {
    // Tell the user about jsonResult.errors
}
