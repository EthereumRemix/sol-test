"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEventDescription = exports.isFunctionDescription = exports.CompilerRetriggerMode = void 0;
var CompilerRetriggerMode;
(function (CompilerRetriggerMode) {
    CompilerRetriggerMode[CompilerRetriggerMode["none"] = 0] = "none";
    CompilerRetriggerMode[CompilerRetriggerMode["retrigger"] = 1] = "retrigger";
})(CompilerRetriggerMode = exports.CompilerRetriggerMode || (exports.CompilerRetriggerMode = {}));
const isFunctionDescription = (item) => item.stateMutability !== undefined;
exports.isFunctionDescription = isFunctionDescription;
const isEventDescription = (item) => item.type === 'event';
exports.isEventDescription = isEventDescription;
//# sourceMappingURL=types.js.map