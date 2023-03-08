"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const wrapper_1 = tslib_1.__importDefault(require("solc/wrapper"));
let compileJSON = (input) => { return ''; };
const missingInputs = [];
self.onmessage = (e) => {
    const data = e.data;
    switch (data.cmd) {
        case 'loadVersion':
            {
                self.importScripts(data.data);
                const compiler = (0, wrapper_1.default)(self);
                compileJSON = (input) => {
                    try {
                        const missingInputsCallback = (path) => {
                            missingInputs.push(path);
                            return { error: 'Deferred import' };
                        };
                        return compiler.compile(input, { import: missingInputsCallback });
                    }
                    catch (exception) {
                        return JSON.stringify({ error: 'Uncaught JavaScript exception:\n' + exception });
                    }
                };
                self.postMessage({
                    cmd: 'versionLoaded',
                    data: compiler.version(),
                    license: compiler.license()
                });
                break;
            }
        case 'compile':
            missingInputs.length = 0;
            if (data.input && compileJSON) {
                self.postMessage({
                    cmd: 'compiled',
                    job: data.job,
                    timestamp: data.timestamp,
                    data: compileJSON(data.input),
                    input: data.input,
                    missingInputs: missingInputs
                });
            }
            break;
    }
};
//# sourceMappingURL=compiler-worker.js.map