import { CompilationResult, visitContractsCallbackInterface } from './types';
declare const _default: {
    /**
     * @dev Get contract obj of given contract name from last compilation result.
     * @param name contract name
     * @param contracts 'contracts' object from last compilation result
     */
    getContract: (contractName: string, contracts: CompilationResult['contracts']) => Record<string, any> | null;
    /**
     * @dev call the given callback for all contracts from last compilation result, stop visiting when cb return true
     * @param contracts - 'contracts' object from last compilation result
     * @param cb    - callback
     */
    visitContracts: (contracts: CompilationResult['contracts'], cb: visitContractsCallbackInterface) => void;
    getPositionDetails: (msg: string) => Record<string, string | number>;
};
export default _default;
