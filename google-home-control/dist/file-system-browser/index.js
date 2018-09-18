"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const working_directory_1 = require("./working-directory");
const HOME_PATHS = [
    "/home/ntrpilot/Documents/projects/google-home-control",
];
exports.FileSystem = HOME_PATHS
    .map(path => new working_directory_1.WorkingDirectory(path));
function print(wd, indent) {
    wd.children.forEach(child => print(child, indent + " "));
    console.log(indent, wd.name);
}
exports.FileSystem.forEach(f => console.log() || print(f, ""));
