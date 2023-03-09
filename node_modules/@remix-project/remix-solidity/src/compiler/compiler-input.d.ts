import { Source, CompilerInputOptions, Language } from './types';
declare const _default: (sources: Source, opts: CompilerInputOptions) => string;
export default _default;
export declare const Languages: string[];
export declare function getValidLanguage(val: string): Language;
export declare function compilerInputForConfigFile(sources: Source, opts: any): string;
