import {exec} from 'child_process';

export async function runScript(workDir: string, command: string): Promise<{}>{
    return new Promise((resolve, reject) => {

        let stdobj = {
            stdout: "",
            stderr: "",
            code: 0
        };

        exec('cd ' + workDir + '&& ' + command, (error, stdout, stderr) => {
            if (error) {
                stdobj.stderr = error.message;
                stdobj.code = error.code;
                reject(stdobj);
            }
            stdobj.stdout = stdout;
            stdobj.stderr = stderr;
            resolve(stdobj);
        })
    });
}
