import { WorkingDirectory } from "./working-directory";

const HOME_PATHS: string[] = [
    "/home/ntrpilot/Documents/projects/google-home-control",
];

export interface IWorkingDirectory {
    name: string;
    type: any;
    parent: IWorkingDirectory | null;
    children: IWorkingDirectory[];
}

export const FileSystem: IWorkingDirectory[] = HOME_PATHS
    .map(path => new WorkingDirectory(path));

function print(wd: IWorkingDirectory, indent: string) {
    wd.children.forEach(child => print(child, indent + " "));
    console.log(indent, wd.name);
}

FileSystem.forEach(f => console.log() || print(f, ""))