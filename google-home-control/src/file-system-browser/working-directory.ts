import { IWorkingDirectory } from ".";

import * as Path from "path";
import * as FS from "fs";

export class WorkingDirectory implements IWorkingDirectory {

    name: string;
    type: any;
    parent: IWorkingDirectory | null;
    children: IWorkingDirectory[];

    constructor(rootPath: string, parent?: IWorkingDirectory) {
        this.name = Path.basename(rootPath);
        this.type = null;
        this.parent = parent || null;
        this.children = this.loadChildren(rootPath);
    }

    private loadChildren(path: string): WorkingDirectory[] {
        if (!FS.lstatSync(path).isDirectory()) {
            return [];
        }

        return FS.readdirSync(path)
            .map(child => new WorkingDirectory(Path.join(path, child), this));
    }

}