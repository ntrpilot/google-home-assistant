"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
const FS = require("fs");
class WorkingDirectory {
    constructor(rootPath, parent) {
        this.name = Path.basename(rootPath);
        this.type = null;
        this.parent = parent || null;
        this.children = this.loadChildren(rootPath);
    }
    loadChildren(path) {
        if (!FS.lstatSync(path).isDirectory()) {
            return [];
        }
        return FS.readdirSync(path)
            .map(child => new WorkingDirectory(Path.join(path, child), this));
    }
}
exports.WorkingDirectory = WorkingDirectory;
