"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ESWebWorkerHandler {
    constructor() {
    }
    getWorker() {
        // @ts-ignore
        return new Worker(new URL('./compiler-worker', import.meta.url));
    }
}
exports.default = ESWebWorkerHandler;
//# sourceMappingURL=es-web-worker-handler.js.map