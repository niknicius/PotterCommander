import {exec} from 'child_process';

export async function runScript(workDir: string, command: string): Promise<{}>{
    return new Promise((resolve, reject) => {
        exec('cd ' + workDir + '&& ' + command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            stdout ? resolve(stdout) : reject(stderr);
        });
    });
}
