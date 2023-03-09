import { CompilationResult, CompilerInput, CompilationSourceCode } from './types';
export declare class CompilerAbstract {
    languageversion: string;
    data: CompilationResult;
    source: CompilationSourceCode;
    input: CompilerInput;
    constructor(languageversion: string, data: CompilationResult, source: CompilationSourceCode, input?: CompilerInput);
    getContracts(): {
        [fileName: string]: {
            [contract: string]: import("./types").CompiledContract;
        };
    };
    getContract(name: any): Record<string, any>;
    visitContracts(calllback: any): void;
    getData(): CompilationResult;
    getInput(): CompilerInput;
    getAsts(): {
        [contractName: string]: import("./types").CompilationSource;
    };
    getSourceName(fileIndex: any): string;
    getSourceCode(): CompilationSourceCode;
}
