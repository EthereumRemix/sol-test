"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var core = __importStar(require("@actions/core"));
var cli = __importStar(require("@actions/exec"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
function execute() {
    return __awaiter(this, void 0, void 0, function () {
        var testPath, compilerVersion, evmVersion, runs, optimize, hardFork, nodeUrl, blockNumber, workingDirectory;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testPath = core.getInput('test-path');
                    compilerVersion = core.getInput('compiler-version');
                    evmVersion = core.getInput('evm-version') || '';
                    runs = core.getInput('optimizer-runs');
                    optimize = core.getBooleanInput('optimize');
                    hardFork = core.getInput('hard-fork');
                    nodeUrl = core.getInput('node-url');
                    blockNumber = core.getInput('block-number');
                    workingDirectory = process.cwd();
                    return [4 /*yield*/, cli.exec('ls')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, core.group("Install @remix-project/remix-tests cli", function () { return __awaiter(_this, void 0, void 0, function () {
                            var yarnLock, isYarnRepo, packageLock, isNPMrepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        yarnLock = path.join(workingDirectory, 'yarn.lock');
                                        isYarnRepo = fs.existsSync(yarnLock);
                                        packageLock = path.join(workingDirectory, 'package-lock.json');
                                        isNPMrepo = fs.existsSync(packageLock);
                                        if (!isYarnRepo) return [3 /*break*/, 2];
                                        return [4 /*yield*/, cli.exec('yarn', ['global', 'add', 'rlp', '@remix-project/remix-tests'])];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 7];
                                    case 2:
                                        if (!isNPMrepo) return [3 /*break*/, 4];
                                        return [4 /*yield*/, cli.exec('npm', ['install', 'rlp', '@remix-project/remix-tests', '-g'])];
                                    case 3:
                                        _a.sent();
                                        return [3 /*break*/, 7];
                                    case 4: return [4 /*yield*/, cli.exec('npm', ['init', '-y'])];
                                    case 5:
                                        _a.sent();
                                        return [4 /*yield*/, cli.exec('npm', ['install', 'rlp', '@remix-project/remix-tests', '-g'])];
                                    case 6:
                                        _a.sent();
                                        _a.label = 7;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, core.group("Run tests", function () { return __awaiter(_this, void 0, void 0, function () {
                            var compilerArgs, evmArgs, optimizeArgs, runsArgs, hardForkArgs, nodeUrlArgs, blockNumberArgs;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        compilerArgs = compilerVersion ? ['--compiler', compilerVersion] : [];
                                        evmArgs = evmVersion ? ['--evm', evmVersion] : [];
                                        optimizeArgs = optimize ? ['--optimize', optimize.toString()] : [];
                                        runsArgs = runs ? ['--runs', runs] : [];
                                        hardForkArgs = hardFork ? ['--fork', hardFork] : [];
                                        nodeUrlArgs = nodeUrl ? ['--nodeUrl', nodeUrl] : [];
                                        blockNumberArgs = blockNumber ? ['--blockNumber', blockNumber] : [];
                                        return [4 /*yield*/, cli.exec('remix-tests', __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], compilerArgs, true), evmArgs, true), optimizeArgs, true), runsArgs, true), hardForkArgs, true), nodeUrlArgs, true), blockNumberArgs, true), [testPath], false))];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
execute().catch(function (error) {
    if (typeof (error) !== 'string') {
        if (error.message)
            error = error.message;
        else {
            try {
                error = 'error: ' + JSON.stringify(error);
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    core.setFailed(error);
});
