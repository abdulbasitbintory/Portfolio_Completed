(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * Before starting the Next.js runtime and requiring any module, we need to make
 * sure the following scripts are executed in the correct order:
 * - Polyfills
 * - next/script with `beforeInteractive` strategy
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "appBootstrap", {
    enumerable: true,
    get: function() {
        return appBootstrap;
    }
});
const version = "15.4.2";
window.next = {
    version,
    appDir: true
};
function loadScriptsInSequence(scripts, hydrate) {
    if (!scripts || !scripts.length) {
        return hydrate();
    }
    return scripts.reduce((promise, param)=>{
        let [src, props] = param;
        return promise.then(()=>{
            return new Promise((resolve, reject)=>{
                const el = document.createElement('script');
                if (props) {
                    for(const key in props){
                        if (key !== 'children') {
                            el.setAttribute(key, props[key]);
                        }
                    }
                }
                if (src) {
                    el.src = src;
                    el.onload = ()=>resolve();
                    el.onerror = reject;
                } else if (props) {
                    el.innerHTML = props.children;
                    setTimeout(resolve);
                }
                document.head.appendChild(el);
            });
        });
    }, Promise.resolve()).catch((err)=>{
        console.error(err);
    // Still try to hydrate even if there's an error.
    }).then(()=>{
        hydrate();
    });
}
function appBootstrap(hydrate) {
    loadScriptsInSequence(self.__next_s, ()=>{
        // If the static shell is being debugged, skip hydration if the
        // `__nextppronly` query is present. This is only enabled when the
        // environment variable `__NEXT_EXPERIMENTAL_STATIC_SHELL_DEBUGGING` is
        // set to `1`. Otherwise the following is optimized out.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        hydrate();
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-bootstrap.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reportGlobalError", {
    enumerable: true,
    get: function() {
        return reportGlobalError;
    }
});
const reportGlobalError = typeof reportError === 'function' ? reportError : (error)=>{
    // TODO: Dispatch error event
    globalThis.console.error(error);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=report-global-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
// This module can be shared between both pages router and app router
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRecoverableError: null,
    onRecoverableError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRecoverableError: function() {
        return isRecoverableError;
    },
    onRecoverableError: function() {
        return onRecoverableError;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
const _reportglobalerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [app-client] (ecmascript)");
const recoverableErrors = new WeakSet();
function isRecoverableError(error) {
    return recoverableErrors.has(error);
}
const onRecoverableError = (error, errorInfo)=>{
    // x-ref: https://github.com/facebook/react/pull/28736
    let cause = (0, _iserror.default)(error) && 'cause' in error ? error.cause : error;
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(cause)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        const { decorateDevError } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [app-client] (ecmascript)");
        const causeError = decorateDevError(cause, errorInfo);
        recoverableErrors.add(causeError);
        cause = causeError;
    }
    (0, _reportglobalerror.reportGlobalError)(cause);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=on-recoverable-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/lib/console.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatConsoleArgs: null,
    parseConsoleArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatConsoleArgs: function() {
        return formatConsoleArgs;
    },
    parseConsoleArgs: function() {
        return parseConsoleArgs;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
function formatObject(arg, depth) {
    switch(typeof arg){
        case 'object':
            if (arg === null) {
                return 'null';
            } else if (Array.isArray(arg)) {
                let result = '[';
                if (depth < 1) {
                    for(let i = 0; i < arg.length; i++){
                        if (result !== '[') {
                            result += ',';
                        }
                        if (Object.prototype.hasOwnProperty.call(arg, i)) {
                            result += formatObject(arg[i], depth + 1);
                        }
                    }
                } else {
                    result += arg.length > 0 ? '...' : '';
                }
                result += ']';
                return result;
            } else if (arg instanceof Error) {
                return arg + '';
            } else {
                const keys = Object.keys(arg);
                let result = '{';
                if (depth < 1) {
                    for(let i = 0; i < keys.length; i++){
                        const key = keys[i];
                        const desc = Object.getOwnPropertyDescriptor(arg, 'key');
                        if (desc && !desc.get && !desc.set) {
                            const jsonKey = JSON.stringify(key);
                            if (jsonKey !== '"' + key + '"') {
                                result += jsonKey + ': ';
                            } else {
                                result += key + ': ';
                            }
                            result += formatObject(desc.value, depth + 1);
                        }
                    }
                } else {
                    result += keys.length > 0 ? '...' : '';
                }
                result += '}';
                return result;
            }
        case 'string':
            return JSON.stringify(arg);
        default:
            return String(arg);
    }
}
function formatConsoleArgs(args) {
    let message;
    let idx;
    if (typeof args[0] === 'string') {
        message = args[0];
        idx = 1;
    } else {
        message = '';
        idx = 0;
    }
    let result = '';
    let startQuote = false;
    for(let i = 0; i < message.length; ++i){
        const char = message[i];
        if (char !== '%' || i === message.length - 1 || idx >= args.length) {
            result += char;
            continue;
        }
        const code = message[++i];
        switch(code){
            case 'c':
                {
                    // TODO: We should colorize with HTML instead of turning into a string.
                    // Ignore for now.
                    result = startQuote ? "" + result + "]" : "[" + result;
                    startQuote = !startQuote;
                    idx++;
                    break;
                }
            case 'O':
            case 'o':
                {
                    result += formatObject(args[idx++], 0);
                    break;
                }
            case 'd':
            case 'i':
                {
                    result += parseInt(args[idx++], 10);
                    break;
                }
            case 'f':
                {
                    result += parseFloat(args[idx++]);
                    break;
                }
            case 's':
                {
                    result += String(args[idx++]);
                    break;
                }
            default:
                result += '%' + code;
        }
    }
    for(; idx < args.length; idx++){
        result += (idx > 0 ? ' ' : '') + formatObject(args[idx], 0);
    }
    return result;
}
function parseConsoleArgs(args) {
    // See
    // https://github.com/facebook/react/blob/65a56d0e99261481c721334a3ec4561d173594cd/packages/react-devtools-shared/src/backend/flight/renderer.js#L88-L93
    //
    // Logs replayed from the server look like this:
    // [
    //   "%c%s%c %o\n\n%s\n\n%s\n",
    //   "background: #e6e6e6; ...",
    //   " Server ", // can also be e.g. " Prerender "
    //   "",
    //   Error,
    //   "The above error occurred in the <Page> component.",
    //   ...
    // ]
    if (args.length > 3 && typeof args[0] === 'string' && args[0].startsWith('%c%s%c ') && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'string') {
        const environmentName = args[2];
        const maybeError = args[4];
        return {
            environmentName: environmentName.trim(),
            error: (0, _iserror.default)(maybeError) ? maybeError : null
        };
    }
    return {
        environmentName: null,
        error: null
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=console.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
// imports polyfill from `@next/polyfill-module` after build.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/polyfill-module.js [app-client] (ecmascript)");
// Only setup devtools in development
if ("TURBOPACK compile-time truthy", 1) {
    __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-setup.js [app-client] (ecmascript)");
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-globals.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useUntrackedPathname", {
    enumerable: true,
    get: function() {
        return useUntrackedPathname;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
/**
 * This checks to see if the current render has any unknown route parameters.
 * It's used to trigger a different render path in the error boundary.
 *
 * @returns true if there are any unknown route parameters, false otherwise
 */ function hasFallbackRouteParams() {
    if (typeof window === 'undefined') {
        // AsyncLocalStorage should not be included in the client bundle.
        const { workAsyncStorage } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
        const workStore = workAsyncStorage.getStore();
        if (!workStore) return false;
        const { fallbackRouteParams } = workStore;
        if (!fallbackRouteParams || fallbackRouteParams.size === 0) return false;
        return true;
    }
    return false;
}
function useUntrackedPathname() {
    // If there are any unknown route parameters we would typically throw
    // an error, but this internal method allows us to return a null value instead
    // for components that do not propagate the pathname to the static shell (like
    // the error boundary).
    if (hasFallbackRouteParams()) {
        return null;
    }
    // This shouldn't cause any issues related to conditional rendering because
    // the environment will be consistent for the render.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation-untracked.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHrefFromUrl", {
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
});
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : '');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleHardNavError: null,
    useNavFailureHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleHardNavError: function() {
        return handleHardNavError;
    },
    useNavFailureHandler: function() {
        return useNavFailureHandler;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
function handleHardNavError(error) {
    if (error && typeof window !== 'undefined' && window.next.__pendingUrl && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== (0, _createhreffromurl.createHrefFromUrl)(window.next.__pendingUrl)) {
        console.error("Error occurred during navigation, falling back to hard navigation", error);
        window.location.href = window.next.__pendingUrl.toString();
        return true;
    }
    return false;
}
function useNavFailureHandler() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=nav-failure-handler.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HandleISRError", {
    enumerable: true,
    get: function() {
        return HandleISRError;
    }
});
const workAsyncStorage = typeof window === 'undefined' ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)").workAsyncStorage : undefined;
function HandleISRError(param) {
    let { error } = param;
    if (workAsyncStorage) {
        const store = workAsyncStorage.getStore();
        if ((store == null ? void 0 : store.isRevalidate) || (store == null ? void 0 : store.isStaticGeneration)) {
            console.error(error);
            throw error;
        }
    }
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-isr-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorBoundary: null,
    ErrorBoundaryHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundary: function() {
        return ErrorBoundary;
    },
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _navfailurehandler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)");
const _handleisrerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _isnextroutererror.isNextRouterError)(error)) {
            // Re-throw if an expected internal Next.js router error occurs
            // this means it should be handled by a different boundary (such as a NotFound boundary in a parent segment)
            throw error;
        }
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { error } = state;
        // if we encounter an error while
        // a navigation is pending we shouldn't render
        // the error boundary and instead should fallback
        // to a hard navigation to attempt recovering
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_handleisrerror.HandleISRError, {
                        error: this.state.error
                    }),
                    this.props.errorStyles,
                    this.props.errorScripts,
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(this.props.errorComponent, {
                        error: this.state.error,
                        reset: this.reset
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props), this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, errorScripts, children } = param;
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these errors can occur), we will get the correct pathname.
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    if (errorComponent) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles,
            errorScripts: errorScripts,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // supplied custom global error signatures.
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _handleisrerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '28px',
        margin: '0 8px'
    }
};
function DefaultGlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
        id: "__next_error__",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_handleisrerror.HandleISRError, {
                        error: error
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        style: styles.error,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsxs)("h2", {
                                    style: styles.text,
                                    children: [
                                        "Application error: a ",
                                        digest ? 'server' : 'client',
                                        "-side exception has occurred while loading ",
                                        window.location.hostname,
                                        " (see the",
                                        ' ',
                                        digest ? 'server logs' : 'browser console',
                                        " for more information)."
                                    ]
                                }),
                                digest ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    style: styles.text,
                                    children: "Digest: " + digest
                                }) : null
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
const _default = DefaultGlobalError;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=global-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/runtime-error-handler.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RuntimeErrorHandler", {
    enumerable: true,
    get: function() {
        return RuntimeErrorHandler;
    }
});
const RuntimeErrorHandler = {
    hadRuntimeError: false
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=runtime-error-handler.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
// This file is only used in app router due to the specific error state handling.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    onCaughtError: null,
    onUncaughtError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    onCaughtError: function() {
        return onCaughtError;
    },
    onUncaughtError: function() {
        return onUncaughtError;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _reportglobalerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
const devToolErrorMod = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/errors/index.js [app-client] (ecmascript)") : "TURBOPACK unreachable";
function onCaughtError(thrownValue, errorInfo) {
    var _errorInfo_errorBoundary;
    const errorBoundaryComponent = (_errorInfo_errorBoundary = errorInfo.errorBoundary) == null ? void 0 : _errorInfo_errorBoundary.constructor;
    let isImplicitErrorBoundary;
    if ("TURBOPACK compile-time truthy", 1) {
        const { AppDevOverlayErrorBoundary } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)");
        isImplicitErrorBoundary = errorBoundaryComponent === AppDevOverlayErrorBoundary;
    }
    isImplicitErrorBoundary = isImplicitErrorBoundary || errorBoundaryComponent === _errorboundary.ErrorBoundaryHandler && errorInfo.errorBoundary.props.errorComponent === _globalerror.default;
    // Skip the segment explorer triggered error
    if ("TURBOPACK compile-time truthy", 1) {
        const { SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
        if (thrownValue instanceof Error && thrownValue.message === SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE) {
            return;
        }
    }
    if (isImplicitErrorBoundary) {
        // We don't consider errors caught unless they're caught by an explicit error
        // boundary. The built-in ones are considered implicit.
        // This mimics how the same app would behave without Next.js.
        return onUncaughtError(thrownValue, errorInfo);
    }
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(thrownValue) || (0, _isnextroutererror.isNextRouterError)(thrownValue)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        var _errorInfo_componentStack;
        const errorBoundaryName = (errorBoundaryComponent == null ? void 0 : errorBoundaryComponent.displayName) || (errorBoundaryComponent == null ? void 0 : errorBoundaryComponent.name) || 'Unknown';
        const componentThatErroredFrame = errorInfo == null ? void 0 : (_errorInfo_componentStack = errorInfo.componentStack) == null ? void 0 : _errorInfo_componentStack.split('\n')[1];
        var // example 1: at Page (http://localhost:3000/_next/static/chunks/pages/index.js?ts=1631600000000:2:1)
        // example 2: Page@http://localhost:3000/_next/static/chunks/pages/index.js?ts=1631600000000:2:1
        _componentThatErroredFrame_match;
        // Match chrome or safari stack trace
        const matches = (_componentThatErroredFrame_match = componentThatErroredFrame == null ? void 0 : componentThatErroredFrame.match(/\s+at (\w+)\s+|(\w+)@/)) != null ? _componentThatErroredFrame_match : [];
        const componentThatErroredName = matches[1] || matches[2] || 'Unknown';
        // Create error location with errored component and error boundary, to match the behavior of default React onCaughtError handler.
        const errorBoundaryMessage = "It was handled by the <" + errorBoundaryName + "> error boundary.";
        const componentErrorMessage = ("TURBOPACK compile-time truthy", 1) ? "The above error occurred in the <" + componentThatErroredName + "> component." : "TURBOPACK unreachable";
        const errorLocation = componentErrorMessage + " " + errorBoundaryMessage;
        const error = devToolErrorMod.decorateDevError(thrownValue, errorInfo);
        // Log and report the error with location but without modifying the error stack
        devToolErrorMod.originConsoleError('%o\n\n%s', thrownValue, errorLocation);
        devToolErrorMod.handleClientError(error);
    } else //TURBOPACK unreachable
    ;
}
function onUncaughtError(thrownValue, errorInfo) {
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(thrownValue) || (0, _isnextroutererror.isNextRouterError)(thrownValue)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        const error = devToolErrorMod.decorateDevError(thrownValue, errorInfo);
        // TODO: Add an adendum to the overlay telling people about custom error boundaries.
        (0, _reportglobalerror.reportGlobalError)(error);
    } else //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary-callbacks.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HMR_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_PREFETCH: null,
    ACTION_REFRESH: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_ACTION: null,
    ACTION_SERVER_PATCH: null,
    PrefetchCacheEntryStatus: null,
    PrefetchKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HMR_REFRESH: function() {
        return ACTION_HMR_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_PREFETCH: function() {
        return ACTION_PREFETCH;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchCacheEntryStatus: function() {
        return PrefetchCacheEntryStatus;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    }
});
const ACTION_REFRESH = 'refresh';
const ACTION_NAVIGATE = 'navigate';
const ACTION_RESTORE = 'restore';
const ACTION_SERVER_PATCH = 'server-patch';
const ACTION_PREFETCH = 'prefetch';
const ACTION_HMR_REFRESH = 'hmr-refresh';
const ACTION_SERVER_ACTION = 'server-action';
var PrefetchKind = /*#__PURE__*/ function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
    return PrefetchKind;
}({});
var PrefetchCacheEntryStatus = /*#__PURE__*/ function(PrefetchCacheEntryStatus) {
    PrefetchCacheEntryStatus["fresh"] = "fresh";
    PrefetchCacheEntryStatus["reusable"] = "reusable";
    PrefetchCacheEntryStatus["expired"] = "expired";
    PrefetchCacheEntryStatus["stale"] = "stale";
    return PrefetchCacheEntryStatus;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dispatchAppRouterAction: null,
    useActionQueue: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatchAppRouterAction: function() {
        return dispatchAppRouterAction;
    },
    useActionQueue: function() {
        return useActionQueue;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _isthenable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)");
// The app router state lives outside of React, so we can import the dispatch
// method directly wherever we need it, rather than passing it around via props
// or context.
let dispatch = null;
function dispatchAppRouterAction(action) {
    if (dispatch === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    dispatch(action);
}
function useActionQueue(actionQueue) {
    const [state, setState] = _react.default.useState(actionQueue.state);
    // Because of a known issue that requires to decode Flight streams inside the
    // render phase, we have to be a bit clever and assign the dispatch method to
    // a module-level variable upon initialization. The useState hook in this
    // module only exists to synchronize state that lives outside of React.
    // Ideally, what we'd do instead is pass the state as a prop to root.render;
    // this is conceptually how we're modeling the app router state, despite the
    // weird implementation details.
    if ("TURBOPACK compile-time truthy", 1) {
        const { useAppDevRenderingIndicator } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-client] (ecmascript)");
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const appDevRenderingIndicator = useAppDevRenderingIndicator();
        dispatch = (action)=>{
            appDevRenderingIndicator(()=>{
                actionQueue.dispatch(action, setState);
            });
        };
    } else //TURBOPACK unreachable
    ;
    return (0, _isthenable.isThenable)(state) ? (0, _react.use)(state) : state;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-action-queue.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callServer", {
    enumerable: true,
    get: function() {
        return callServer;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
async function callServer(actionId, actionArgs) {
    return new Promise((resolve, reject)=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                actionId,
                actionArgs,
                resolve,
                reject
            });
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSourceMapURL", {
    enumerable: true,
    get: function() {
        return findSourceMapURL;
    }
});
const basePath = ("TURBOPACK compile-time value", "") || '';
const pathname = "" + basePath + "/__nextjs_source-map";
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? function findSourceMapURL(filename) {
    if (filename === '') {
        return null;
    }
    if (filename.startsWith(document.location.origin) && filename.includes('/_next/static')) {
        // This is a request for a client chunk. This can only happen when
        // using Turbopack. In this case, since we control how those source
        // maps are generated, we can safely assume that the sourceMappingURL
        // is relative to the filename, with an added `.map` extension. The
        // browser can just request this file, and it gets served through the
        // normal dev server, without the need to route this through
        // the `/__nextjs_source-map` dev middleware.
        return "" + filename + ".map";
    }
    const url = new URL(pathname, document.location.origin);
    url.searchParams.set('filename', filename);
    return url.href;
} : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-find-source-map-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HEADER: null,
    FLIGHT_HEADERS: null,
    NEXT_ACTION_NOT_FOUND_HEADER: null,
    NEXT_DID_POSTPONE_HEADER: null,
    NEXT_HMR_REFRESH_HASH_COOKIE: null,
    NEXT_HMR_REFRESH_HEADER: null,
    NEXT_IS_PRERENDER_HEADER: null,
    NEXT_REWRITTEN_PATH_HEADER: null,
    NEXT_REWRITTEN_QUERY_HEADER: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: null,
    NEXT_ROUTER_STALE_TIME_HEADER: null,
    NEXT_ROUTER_STATE_TREE_HEADER: null,
    NEXT_RSC_UNION_QUERY: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_HEADER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'RSC';
const ACTION_HEADER = 'Next-Action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'Next-Url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFlightDataPartsFromPath: null,
    getNextFlightSegmentPath: null,
    normalizeFlightData: null,
    prepareFlightRouterStateForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFlightDataPartsFromPath: function() {
        return getFlightDataPartsFromPath;
    },
    getNextFlightSegmentPath: function() {
        return getNextFlightSegmentPath;
    },
    normalizeFlightData: function() {
        return normalizeFlightData;
    },
    prepareFlightRouterStateForRequest: function() {
        return prepareFlightRouterStateForRequest;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
function getFlightDataPartsFromPath(flightDataPath) {
    // Pick the last 4 items from the `FlightDataPath` to get the [tree, seedData, viewport, isHeadPartial].
    const flightDataPathLength = 4;
    // tree, seedData, and head are *always* the last three items in the `FlightDataPath`.
    const [tree, seedData, head, isHeadPartial] = flightDataPath.slice(-flightDataPathLength);
    // The `FlightSegmentPath` is everything except the last three items. For a root render, it won't be present.
    const segmentPath = flightDataPath.slice(0, -flightDataPathLength);
    var _segmentPath_;
    return {
        // TODO: Unify these two segment path helpers. We are inconsistently pushing an empty segment ("")
        // to the start of the segment path in some places which makes it hard to use solely the segment path.
        // Look for "// TODO-APP: remove ''" in the codebase.
        pathToSegment: segmentPath.slice(0, -1),
        segmentPath,
        // if the `FlightDataPath` corresponds with the root, there'll be no segment path,
        // in which case we default to ''.
        segment: (_segmentPath_ = segmentPath[segmentPath.length - 1]) != null ? _segmentPath_ : '',
        tree,
        seedData,
        head,
        isHeadPartial,
        isRootRender: flightDataPath.length === flightDataPathLength
    };
}
function getNextFlightSegmentPath(flightSegmentPath) {
    // Since `FlightSegmentPath` is a repeated tuple of `Segment` and `ParallelRouteKey`, we slice off two items
    // to get the next segment path.
    return flightSegmentPath.slice(2);
}
function normalizeFlightData(flightData) {
    // FlightData can be a string when the server didn't respond with a proper flight response,
    // or when a redirect happens, to signal to the client that it needs to perform an MPA navigation.
    if (typeof flightData === 'string') {
        return flightData;
    }
    return flightData.map(getFlightDataPartsFromPath);
}
function prepareFlightRouterStateForRequest(flightRouterState, isHmrRefresh) {
    // HMR requests need the complete, unmodified state for proper functionality
    if (isHmrRefresh) {
        return encodeURIComponent(JSON.stringify(flightRouterState));
    }
    return encodeURIComponent(JSON.stringify(stripClientOnlyDataFromFlightRouterState(flightRouterState)));
}
/**
 * Recursively strips client-only data from FlightRouterState while preserving
 * server-needed information for proper rendering decisions.
 */ function stripClientOnlyDataFromFlightRouterState(flightRouterState) {
    const [segment, parallelRoutes, _url, refreshMarker, isRootLayout, hasLoadingBoundary] = flightRouterState;
    // __PAGE__ segments are always fetched from the server, so there's
    // no need to send them up
    const cleanedSegment = stripSearchParamsFromPageSegment(segment);
    // Recursively process parallel routes
    const cleanedParallelRoutes = {};
    for (const [key, childState] of Object.entries(parallelRoutes)){
        cleanedParallelRoutes[key] = stripClientOnlyDataFromFlightRouterState(childState);
    }
    const result = [
        cleanedSegment,
        cleanedParallelRoutes,
        null,
        shouldPreserveRefreshMarker(refreshMarker) ? refreshMarker : null
    ];
    // Append optional fields if present
    if (isRootLayout !== undefined) {
        result[4] = isRootLayout;
    }
    if (hasLoadingBoundary !== undefined) {
        result[5] = hasLoadingBoundary;
    }
    return result;
}
/**
 * Strips search parameters from __PAGE__ segments to prevent sensitive
 * client-side data from being sent to the server.
 */ function stripSearchParamsFromPageSegment(segment) {
    if (typeof segment === 'string' && segment.startsWith(_segment.PAGE_SEGMENT_KEY + '?')) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
/**
 * Determines whether the refresh marker should be sent to the server
 * Client-only markers like 'refresh' are stripped, while server-needed markers
 * like 'refetch' and 'inside-shared-layout' are preserved.
 */ function shouldPreserveRefreshMarker(refreshMarker) {
    return Boolean(refreshMarker && refreshMarker !== 'refresh');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=flight-data-helpers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
// This gets assigned as a side-effect during app initialization. Because it
// represents the build used to create the JS bundle, it should never change
// after being set, so we store it in a global variable.
//
// When performing RSC requests, if the incoming data has a different build ID,
// we perform an MPA navigation/refresh to load the updated build and ensure
// that the client and server in sync.
// Starts as an empty string. In practice, because setAppBuildId is called
// during initialization before hydration starts, this will always get
// reassigned to the actual build ID before it's ever needed by a navigation.
// If for some reasons it didn't, due to a bug or race condition, then on
// navigation the build comparision would fail and trigger an MPA navigation.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAppBuildId: null,
    setAppBuildId: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAppBuildId: function() {
        return getAppBuildId;
    },
    setAppBuildId: function() {
        return setAppBuildId;
    }
});
let globalBuildId = '';
function setAppBuildId(buildId) {
    globalBuildId = buildId;
}
function getAppBuildId() {
    return globalBuildId;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-build-id.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    setCacheBustingSearchParam: null,
    setCacheBustingSearchParamWithHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    setCacheBustingSearchParam: function() {
        return setCacheBustingSearchParam;
    },
    setCacheBustingSearchParamWithHash: function() {
        return setCacheBustingSearchParamWithHash;
    }
});
const _cachebustingsearchparam = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/cache-busting-search-param.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const setCacheBustingSearchParam = (url, headers)=>{
    const uniqueCacheKey = (0, _cachebustingsearchparam.computeCacheBustingSearchParam)(headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER], headers[_approuterheaders.NEXT_URL]);
    setCacheBustingSearchParamWithHash(url, uniqueCacheKey);
};
const setCacheBustingSearchParamWithHash = (url, hash)=>{
    /**
   * Note that we intentionally do not use `url.searchParams.set` here:
   *
   * const url = new URL('https://example.com/search?q=custom%20spacing');
   * url.searchParams.set('_rsc', 'abc123');
   * console.log(url.toString()); // Outputs: https://example.com/search?q=custom+spacing&_rsc=abc123
   *                                                                             ^ <--- this is causing confusion
   * This is in fact intended based on https://url.spec.whatwg.org/#interface-urlsearchparams, but
   * we want to preserve the %20 as %20 if that's what the user passed in, hence the custom
   * logic below.
   */ const existingSearch = url.search;
    const rawQuery = existingSearch.startsWith('?') ? existingSearch.slice(1) : existingSearch;
    // Always remove any existing cache busting param and add a fresh one to ensure
    // we have the correct value based on current request headers
    const pairs = rawQuery.split('&').filter((pair)=>pair && !pair.startsWith("" + _approuterheaders.NEXT_RSC_UNION_QUERY + "="));
    if (hash.length > 0) {
        pairs.push(_approuterheaders.NEXT_RSC_UNION_QUERY + "=" + hash);
    } else {
        pairs.push("" + _approuterheaders.NEXT_RSC_UNION_QUERY);
    }
    url.search = pairs.length ? "?" + pairs.join('&') : '';
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-cache-busting-search-param.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createFetch: null,
    createFromNextReadableStream: null,
    fetchServerResponse: null,
    urlToUrlWithoutFlightMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createFetch: function() {
        return createFetch;
    },
    createFromNextReadableStream: function() {
        return createFromNextReadableStream;
    },
    fetchServerResponse: function() {
        return fetchServerResponse;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    }
});
const _client = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _appcallserver = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _appbuildid = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)");
const _setcachebustingsearchparam = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-client] (ecmascript)");
const createFromReadableStream = _client.createFromReadableStream;
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return urlWithoutFlightParameters;
}
function doMpaNavigation(url) {
    return {
        flightData: urlToUrlWithoutFlightMarker(url).toString(),
        canonicalUrl: undefined,
        couldBeIntercepted: false,
        prerendered: false,
        postponed: false,
        staleTime: -1
    };
}
let abortController = new AbortController();
if (typeof window !== 'undefined') {
    // Abort any in-flight requests when the page is unloaded, e.g. due to
    // reloading the page or performing hard navigations. This allows us to ignore
    // what would otherwise be a thrown TypeError when the browser cancels the
    // requests.
    window.addEventListener('pagehide', ()=>{
        abortController.abort();
    });
    // Use a fresh AbortController instance on pageshow, e.g. when navigating back
    // and the JavaScript execution context is restored by the browser.
    window.addEventListener('pageshow', ()=>{
        abortController = new AbortController();
    });
}
async function fetchServerResponse(url, options) {
    const { flightRouterState, nextUrl, prefetchKind } = options;
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC_HEADER]: '1',
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(flightRouterState, options.isHmrRefresh)
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '1';
    }
    if (("TURBOPACK compile-time value", "development") === 'development' && options.isHmrRefresh) {
        headers[_approuterheaders.NEXT_HMR_REFRESH_HEADER] = '1';
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    try {
        var _res_headers_get;
        // When creating a "temporary" prefetch (the "on-demand" prefetch that gets created on navigation, if one doesn't exist)
        // we send the request with a "high" priority as it's in response to a user interaction that could be blocking a transition.
        // Otherwise, all other prefetches are sent with a "low" priority.
        // We use "auto" for in all other cases to match the existing default, as this function is shared outside of prefetching.
        const fetchPriority = prefetchKind ? prefetchKind === _routerreducertypes.PrefetchKind.TEMPORARY ? 'high' : 'low' : 'auto';
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const res = await createFetch(url, headers, fetchPriority, abortController.signal);
        const responseUrl = urlToUrlWithoutFlightMarker(res.url);
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get('content-type') || '';
        const interception = !!((_res_headers_get = res.headers.get('vary')) == null ? void 0 : _res_headers_get.includes(_approuterheaders.NEXT_URL));
        const postponed = !!res.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER);
        const staleTimeHeaderSeconds = res.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER);
        const staleTime = staleTimeHeaderSeconds !== null ? parseInt(staleTimeHeaderSeconds, 10) * 1000 : -1;
        let isFlightResponse = contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok || !res.body) {
            // in case the original URL came with a hash, preserve it before redirecting to the new URL
            if (url.hash) {
                responseUrl.hash = url.hash;
            }
            return doMpaNavigation(responseUrl.toString());
        }
        // We may navigate to a page that requires a different Webpack runtime.
        // In prod, every page will have the same Webpack runtime.
        // In dev, the Webpack runtime is minimal for each page.
        // We need to ensure the Webpack runtime is updated before executing client-side JS of the new page.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const flightStream = postponed ? createUnclosingPrefetchStream(res.body) : res.body;
        const response = await createFromNextReadableStream(flightStream);
        if ((0, _appbuildid.getAppBuildId)() !== response.b) {
            return doMpaNavigation(res.url);
        }
        return {
            flightData: (0, _flightdatahelpers.normalizeFlightData)(response.f),
            canonicalUrl: canonicalUrl,
            couldBeIntercepted: interception,
            prerendered: response.S,
            postponed,
            staleTime
        };
    } catch (err) {
        if (!abortController.signal.aborted) {
            console.error("Failed to fetch RSC payload for " + url + ". Falling back to browser navigation.", err);
        }
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return {
            flightData: url.toString(),
            canonicalUrl: undefined,
            couldBeIntercepted: false,
            prerendered: false,
            postponed: false,
            staleTime: -1
        };
    }
}
async function createFetch(url, headers, fetchPriority, signal) {
    // TODO: In output: "export" mode, the headers do nothing. Omit them (and the
    // cache busting search param) from the request so they're
    // maximally cacheable.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const fetchOptions = {
        // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
        credentials: 'same-origin',
        headers,
        priority: fetchPriority || undefined,
        signal
    };
    // `fetchUrl` is slightly different from `url` because we add a cache-busting
    // search param to it. This should not leak outside of this function, so we
    // track them separately.
    let fetchUrl = new URL(url);
    (0, _setcachebustingsearchparam.setCacheBustingSearchParam)(fetchUrl, headers);
    let browserResponse = await fetch(fetchUrl, fetchOptions);
    // If the server responds with a redirect (e.g. 307), and the redirected
    // location does not contain the cache busting search param set in the
    // original request, the response is likely invalid — when following the
    // redirect, the browser forwards the request headers, but since the cache
    // busting search param is missing, the server will reject the request due to
    // a mismatch.
    //
    // Ideally, we would be able to intercept the redirect response and perform it
    // manually, instead of letting the browser automatically follow it, but this
    // is not allowed by the fetch API.
    //
    // So instead, we must "replay" the redirect by fetching the new location
    // again, but this time we'll append the cache busting search param to prevent
    // a mismatch.
    //
    // TODO: We can optimize Next.js's built-in middleware APIs by returning a
    // custom status code, to prevent the browser from automatically following it.
    //
    // This does not affect Server Action-based redirects; those are encoded
    // differently, as part of the Flight body. It only affects redirects that
    // occur in a middleware or a third-party proxy.
    let redirected = browserResponse.redirected;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Remove the cache busting search param from the response URL, to prevent it
    // from leaking outside of this function.
    const responseUrl = new URL(browserResponse.url, fetchUrl);
    responseUrl.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const rscResponse = {
        url: responseUrl.href,
        // This is true if any redirects occurred, either automatically by the
        // browser, or manually by us. So it's different from
        // `browserResponse.redirected`, which only tells us whether the browser
        // followed a redirect, and only for the last response in the chain.
        redirected,
        // These can be copied from the last browser response we received. We
        // intentionally only expose the subset of fields that are actually used
        // elsewhere in the codebase.
        ok: browserResponse.ok,
        headers: browserResponse.headers,
        body: browserResponse.body,
        status: browserResponse.status
    };
    return rscResponse;
}
function createFromNextReadableStream(flightStream) {
    return createFromReadableStream(flightStream, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL
    });
}
function createUnclosingPrefetchStream(originalFlightStream) {
    // When PPR is enabled, prefetch streams may contain references that never
    // resolve, because that's how we encode dynamic data access. In the decoded
    // object returned by the Flight client, these are reified into hanging
    // promises that suspend during render, which is effectively what we want.
    // The UI resolves when it switches to the dynamic data stream
    // (via useDeferredValue(dynamic, static)).
    //
    // However, the Flight implementation currently errors if the server closes
    // the response before all the references are resolved. As a cheat to work
    // around this, we wrap the original stream in a new stream that never closes,
    // and therefore doesn't error.
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    continue;
                }
                // The server stream has closed. Exit, but intentionally do not close
                // the target stream.
                return;
            }
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRouterCacheKey", {
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    // if the segment is an array, it means it's a dynamic segment
    // for example, ['lang', 'en', 'd']. We need to convert it to a string to store it as a cache node key.
    if (Array.isArray(segment)) {
        return segment[0] + "|" + segment[1] + "|" + segment[2];
    }
    // Page segments might have search parameters, ie __PAGE__?foo=bar
    // When `withoutSearchParameters` is true, we only want to return the page segment
    if (withoutSearchParameters && segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/invalidate-cache-below-flight-segmentpath.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "invalidateCacheBelowFlightSegmentPath", {
    enumerable: true,
    get: function() {
        return invalidateCacheBelowFlightSegmentPath;
    }
});
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(cacheKey);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            lazyData: childCacheNode.lazyData,
            rsc: childCacheNode.rsc,
            prefetchRsc: childCacheNode.prefetchRsc,
            head: childCacheNode.head,
            prefetchHead: childCacheNode.prefetchHead,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, (0, _flightdatahelpers.getNextFlightSegmentPath)(flightSegmentPath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "matchSegment", {
    enumerable: true,
    get: function() {
        return matchSegment;
    }
});
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === 'string') {
        if (typeof segment === 'string') {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === 'string') {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", {
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
});
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
function fillLazyItemsTillLeafWithHead(navigatedAt, newCache, existingCache, routerState, cacheNodeSeedData, head, prefetchEntry) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of rsc.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        // TODO: We should traverse the cacheNodeSeedData tree instead of the router
        // state tree. Ideally, they would always be the same shape, but because of
        // the loading.js pattern, cacheNodeSeedData sometimes only represents a
        // partial tree. That's why this node is sometimes null. Once PPR lands,
        // loading.js will no longer have special behavior and we can traverse the
        // data tree instead.
        //
        // We should also consider merging the router state tree and the data tree
        // in the response format, so that we don't have to send the keys twice.
        // Then the client can convert them into separate representations.
        const parallelSeedData = cacheNodeSeedData !== null && cacheNodeSeedData[2][key] !== undefined ? cacheNodeSeedData[2][key] : null;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                const hasReusablePrefetch = (prefetchEntry == null ? void 0 : prefetchEntry.kind) === 'auto' && prefetchEntry.status === _routerreducertypes.PrefetchCacheEntryStatus.reusable;
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                let newCacheNode;
                if (parallelSeedData !== null) {
                    // New data was sent from the server.
                    const seedNode = parallelSeedData[1];
                    const loading = parallelSeedData[3];
                    newCacheNode = {
                        lazyData: null,
                        rsc: seedNode,
                        // This is a PPR-only field. When PPR is enabled, we shouldn't hit
                        // this path during a navigation, but until PPR is fully implemented
                        // yet it's possible the existing node does have a non-null
                        // `prefetchRsc`. As an incremental step, we'll just de-opt to the
                        // old behavior — no PPR value.
                        prefetchRsc: null,
                        head: null,
                        prefetchHead: null,
                        loading,
                        parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes),
                        navigatedAt
                    };
                } else if (hasReusablePrefetch && existingCacheNode) {
                    // No new data was sent from the server, but the existing cache node
                    // was prefetched, so we should reuse that.
                    newCacheNode = {
                        lazyData: existingCacheNode.lazyData,
                        rsc: existingCacheNode.rsc,
                        // This is a PPR-only field. Unlike the previous branch, since we're
                        // just cloning the existing cache node, we might as well keep the
                        // PPR value, if it exists.
                        prefetchRsc: existingCacheNode.prefetchRsc,
                        head: existingCacheNode.head,
                        prefetchHead: existingCacheNode.prefetchHead,
                        parallelRoutes: new Map(existingCacheNode.parallelRoutes),
                        loading: existingCacheNode.loading
                    };
                } else {
                    // No data available for this node. This will trigger a lazy fetch
                    // during render.
                    newCacheNode = {
                        lazyData: null,
                        rsc: null,
                        prefetchRsc: null,
                        head: null,
                        prefetchHead: null,
                        parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes),
                        loading: null,
                        navigatedAt
                    };
                }
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(navigatedAt, newCacheNode, existingCacheNode, parallelRouteState, parallelSeedData ? parallelSeedData : null, head, prefetchEntry);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        let newCacheNode;
        if (parallelSeedData !== null) {
            // New data was sent from the server.
            const seedNode = parallelSeedData[1];
            const loading = parallelSeedData[3];
            newCacheNode = {
                lazyData: null,
                rsc: seedNode,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading,
                navigatedAt
            };
        } else {
            // No data available for this node. This will trigger a lazy fetch
            // during render.
            newCacheNode = {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading: null,
                navigatedAt
            };
        }
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(navigatedAt, newCacheNode, undefined, parallelRouteState, parallelSeedData, head, prefetchEntry);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/invalidate-cache-by-router-state.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "invalidateCacheByRouterState", {
    enumerable: true,
    get: function() {
        return invalidateCacheByRouterState;
    }
});
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of rsc.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fill-cache-with-new-subtree-data.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fillCacheWithNewSubTreeData: null,
    fillCacheWithNewSubTreeDataButOnlyLoading: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fillCacheWithNewSubTreeData: function() {
        return fillCacheWithNewSubTreeData;
    },
    fillCacheWithNewSubTreeDataButOnlyLoading: function() {
        return fillCacheWithNewSubTreeDataButOnlyLoading;
    }
});
const _invalidatecachebyrouterstate = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/invalidate-cache-by-router-state.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
/**
 * Common logic for filling cache with new sub tree data.
 */ function fillCacheHelper(navigatedAt, newCache, existingCache, flightData, prefetchEntry, fillLazyItems) {
    const { segmentPath, seedData: cacheNodeSeedData, tree: treePatch, head } = flightData;
    let newCacheNode = newCache;
    let existingCacheNode = existingCache;
    for(let i = 0; i < segmentPath.length; i += 2){
        const parallelRouteKey = segmentPath[i];
        const segment = segmentPath[i + 1];
        // segmentPath is a repeating tuple of parallelRouteKey and segment
        // we know we've hit the last entry we've reached our final pair
        const isLastEntry = i === segmentPath.length - 2;
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const existingChildSegmentMap = existingCacheNode.parallelRoutes.get(parallelRouteKey);
        if (!existingChildSegmentMap) {
            continue;
        }
        let childSegmentMap = newCacheNode.parallelRoutes.get(parallelRouteKey);
        if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
            childSegmentMap = new Map(existingChildSegmentMap);
            newCacheNode.parallelRoutes.set(parallelRouteKey, childSegmentMap);
        }
        const existingChildCacheNode = existingChildSegmentMap.get(cacheKey);
        let childCacheNode = childSegmentMap.get(cacheKey);
        if (isLastEntry) {
            if (cacheNodeSeedData && (!childCacheNode || !childCacheNode.lazyData || childCacheNode === existingChildCacheNode)) {
                const incomingSegment = cacheNodeSeedData[0];
                const rsc = cacheNodeSeedData[1];
                const loading = cacheNodeSeedData[3];
                childCacheNode = {
                    lazyData: null,
                    // When `fillLazyItems` is false, we only want to fill the RSC data for the layout,
                    // not the page segment.
                    rsc: fillLazyItems || incomingSegment !== _segment.PAGE_SEGMENT_KEY ? rsc : null,
                    prefetchRsc: null,
                    head: null,
                    prefetchHead: null,
                    loading,
                    parallelRoutes: fillLazyItems && existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map(),
                    navigatedAt
                };
                if (existingChildCacheNode && fillLazyItems) {
                    (0, _invalidatecachebyrouterstate.invalidateCacheByRouterState)(childCacheNode, existingChildCacheNode, treePatch);
                }
                if (fillLazyItems) {
                    (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(navigatedAt, childCacheNode, existingChildCacheNode, treePatch, cacheNodeSeedData, head, prefetchEntry);
                }
                childSegmentMap.set(cacheKey, childCacheNode);
            }
            continue;
        }
        if (!childCacheNode || !existingChildCacheNode) {
            continue;
        }
        if (childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                lazyData: childCacheNode.lazyData,
                rsc: childCacheNode.rsc,
                prefetchRsc: childCacheNode.prefetchRsc,
                head: childCacheNode.head,
                prefetchHead: childCacheNode.prefetchHead,
                parallelRoutes: new Map(childCacheNode.parallelRoutes),
                loading: childCacheNode.loading
            };
            childSegmentMap.set(cacheKey, childCacheNode);
        }
        // Move deeper into the cache nodes
        newCacheNode = childCacheNode;
        existingCacheNode = existingChildCacheNode;
    }
}
function fillCacheWithNewSubTreeData(navigatedAt, newCache, existingCache, flightData, prefetchEntry) {
    fillCacheHelper(navigatedAt, newCache, existingCache, flightData, prefetchEntry, true);
}
function fillCacheWithNewSubTreeDataButOnlyLoading(navigatedAt, newCache, existingCache, flightData, prefetchEntry) {
    fillCacheHelper(navigatedAt, newCache, existingCache, flightData, prefetchEntry, false);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyFlightData", {
    enumerable: true,
    get: function() {
        return applyFlightData;
    }
});
const _filllazyitemstillleafwithhead = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _fillcachewithnewsubtreedata = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fill-cache-with-new-subtree-data.js [app-client] (ecmascript)");
function applyFlightData(navigatedAt, existingCache, cache, flightData, prefetchEntry) {
    // The one before last item is the router state tree patch
    const { tree: treePatch, seedData, head, isRootRender } = flightData;
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (seedData === null) {
        return false;
    }
    if (isRootRender) {
        const rsc = seedData[1];
        const loading = seedData[3];
        cache.loading = loading;
        cache.rsc = rsc;
        // This is a PPR-only field. When PPR is enabled, we shouldn't hit
        // this path during a navigation, but until PPR is fully implemented
        // yet it's possible the existing node does have a non-null
        // `prefetchRsc`. As an incremental step, we'll just de-opt to the
        // old behavior — no PPR value.
        cache.prefetchRsc = null;
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(navigatedAt, cache, existingCache, treePatch, seedData, head, prefetchEntry);
    } else {
        // Copy rsc for the root node of the cache.
        cache.rsc = existingCache.rsc;
        // This is a PPR-only field. Unlike the previous branch, since we're
        // just cloning the existing cache node, we might as well keep the
        // PPR value, if it exists.
        cache.prefetchRsc = existingCache.prefetchRsc;
        cache.parallelRoutes = new Map(existingCache.parallelRoutes);
        cache.loading = existingCache.loading;
        // Create a copy of the existing cache with the rsc applied.
        (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeData)(navigatedAt, cache, existingCache, flightData, prefetchEntry);
    }
    return true;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-flight-data.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/refetch-inactive-parallel-segments.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    addRefreshMarkerToActiveParallelSegments: null,
    refreshInactiveParallelSegments: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addRefreshMarkerToActiveParallelSegments: function() {
        return addRefreshMarkerToActiveParallelSegments;
    },
    refreshInactiveParallelSegments: function() {
        return refreshInactiveParallelSegments;
    }
});
const _applyflightdata = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
async function refreshInactiveParallelSegments(options) {
    const fetchedSegments = new Set();
    await refreshInactiveParallelSegmentsImpl({
        ...options,
        rootTree: options.updatedTree,
        fetchedSegments
    });
}
async function refreshInactiveParallelSegmentsImpl(param) {
    let { navigatedAt, state, updatedTree, updatedCache, includeNextUrl, fetchedSegments, rootTree = updatedTree, canonicalUrl } = param;
    const [, parallelRoutes, refetchPath, refetchMarker] = updatedTree;
    const fetchPromises = [];
    if (refetchPath && refetchPath !== canonicalUrl && refetchMarker === 'refresh' && // it's possible for the tree to contain multiple segments that contain data at the same URL
    // we keep track of them so we can dedupe the requests
    !fetchedSegments.has(refetchPath)) {
        fetchedSegments.add(refetchPath) // Mark this URL as fetched
        ;
        // Eagerly kick off the fetch for the refetch path & the parallel routes. This should be fine to do as they each operate
        // independently on their own cache nodes, and `applyFlightData` will copy anything it doesn't care about from the existing cache.
        const fetchPromise = (0, _fetchserverresponse.fetchServerResponse)(new URL(refetchPath, location.origin), {
            // refetch from the root of the updated tree, otherwise it will be scoped to the current segment
            // and might not contain the data we need to patch in interception route data (such as dynamic params from a previous segment)
            flightRouterState: [
                rootTree[0],
                rootTree[1],
                rootTree[2],
                'refetch'
            ],
            nextUrl: includeNextUrl ? state.nextUrl : null
        }).then((param)=>{
            let { flightData } = param;
            if (typeof flightData !== 'string') {
                for (const flightDataPath of flightData){
                    // we only pass the new cache as this function is called after clearing the router cache
                    // and filling in the new page data from the server. Meaning the existing cache is actually the cache that's
                    // just been created & has been written to, but hasn't been "committed" yet.
                    (0, _applyflightdata.applyFlightData)(navigatedAt, updatedCache, updatedCache, flightDataPath);
                }
            } else {
            // When flightData is a string, it suggests that the server response should have triggered an MPA navigation
            // I'm not 100% sure of this decision, but it seems unlikely that we'd want to introduce a redirect side effect
            // when refreshing on-screen data, so handling this has been ommitted.
            }
        });
        fetchPromises.push(fetchPromise);
    }
    for(const key in parallelRoutes){
        const parallelFetchPromise = refreshInactiveParallelSegmentsImpl({
            navigatedAt,
            state,
            updatedTree: parallelRoutes[key],
            updatedCache,
            includeNextUrl,
            fetchedSegments,
            rootTree,
            canonicalUrl
        });
        fetchPromises.push(parallelFetchPromise);
    }
    await Promise.all(fetchPromises);
}
function addRefreshMarkerToActiveParallelSegments(tree, path) {
    const [segment, parallelRoutes, , refetchMarker] = tree;
    // a page segment might also contain concatenated search params, so we do a partial match on the key
    if (segment.includes(_segment.PAGE_SEGMENT_KEY) && refetchMarker !== 'refresh') {
        tree[2] = path;
        tree[3] = 'refresh';
    }
    for(const key in parallelRoutes){
        addRefreshMarkerToActiveParallelSegments(parallelRoutes[key], path);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refetch-inactive-parallel-segments.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "applyRouterStatePatchToTree", {
    enumerable: true,
    get: function() {
        return applyRouterStatePatchToTree;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _refetchinactiveparallelsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/refetch-inactive-parallel-segments.js [app-client] (ecmascript)");
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [initialSegment, initialParallelRoutes] = initialTree;
    const [patchSegment, patchParallelRoutes] = patchTree;
    // if the applied patch segment is __DEFAULT__ then it can be ignored in favor of the initial tree
    // this is because the __DEFAULT__ segment is used as a placeholder on navigation
    if (patchSegment === _segment.DEFAULT_SEGMENT_KEY && initialSegment !== _segment.DEFAULT_SEGMENT_KEY) {
        return initialTree;
    }
    if ((0, _matchsegments.matchSegment)(initialSegment, patchSegment)) {
        const newParallelRoutes = {};
        for(const key in initialParallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchParallelRoutes[key] !== 'undefined';
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(initialParallelRoutes[key], patchParallelRoutes[key]);
            } else {
                newParallelRoutes[key] = initialParallelRoutes[key];
            }
        }
        for(const key in patchParallelRoutes){
            if (newParallelRoutes[key]) {
                continue;
            }
            newParallelRoutes[key] = patchParallelRoutes[key];
        }
        const tree = [
            initialSegment,
            newParallelRoutes
        ];
        // Copy over the existing tree
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch, path) {
    const [segment, parallelRoutes, url, refetch, isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(tree, path);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = applyPatch(parallelRoutes[parallelRouteKey], treePatch);
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree((0, _flightdatahelpers.getNextFlightSegmentPath)(flightSegmentPath), parallelRoutes[parallelRouteKey], treePatch, path);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        {
            ...parallelRoutes,
            [parallelRouteKey]: parallelRoutePatch
        },
        url,
        refetch
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(tree, path);
    return tree;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/should-hard-navigate.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "shouldHardNavigate", {
    enumerable: true,
    get: function() {
        return shouldHardNavigate;
    }
});
const _flightdatahelpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchsegments.matchSegment)(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate((0, _flightdatahelpers.getNextFlightSegmentPath)(flightSegmentPath), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNavigatingToNewRootLayout", {
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
});
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    computeChangedPath: null,
    extractPathFromFlightRouterState: null,
    getSelectedParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    computeChangedPath: function() {
        return computeChangedPath;
    },
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    getSelectedParams: function() {
        return getSelectedParams;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const removeLeadingSlash = (segment)=>{
    return segment[0] === '/' ? segment.slice(1) : segment;
};
const segmentToPathname = (segment)=>{
    if (typeof segment === 'string') {
        // 'children' is not a valid path -- it's technically a parallel route that corresponds with the current segment's page
        // if we don't skip it, then the computed pathname might be something like `/children` which doesn't make sense.
        if (segment === 'children') return '';
        return segment;
    }
    return segment[1];
};
function normalizeSegments(segments) {
    return segments.reduce((acc, segment)=>{
        segment = removeLeadingSlash(segment);
        if (segment === '' || (0, _segment.isGroupSegment)(segment)) {
            return acc;
        }
        return acc + "/" + segment;
    }, '') || '/';
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === _segment.DEFAULT_SEGMENT_KEY || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return '';
    const segments = [
        segmentToPathname(segment)
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        segments.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === 'children') continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                segments.push(childPath);
            }
        }
    }
    return normalizeSegments(segments);
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return '';
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : '';
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === '/') {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizeSegments(changedPath.split('/'));
}
function getSelectedParams(currentTree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = currentTree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === 'c' || segment[2] === 'oc');
        if (isCatchAll) {
            params[segment[0]] = segment[1].split('/');
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleMutable", {
    enumerable: true,
    get: function() {
        return handleMutable;
    }
});
const _computechangedpath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
function isNotUndefined(value) {
    return typeof value !== 'undefined';
}
function handleMutable(state, mutable) {
    var _mutable_shouldScroll;
    // shouldScroll is true by default, can override to false.
    const shouldScroll = (_mutable_shouldScroll = mutable.shouldScroll) != null ? _mutable_shouldScroll : true;
    let nextUrl = state.nextUrl;
    if (isNotUndefined(mutable.patchedTree)) {
        // If we received a patched tree, we need to compute the changed path.
        const changedPath = (0, _computechangedpath.computeChangedPath)(state.tree, mutable.patchedTree);
        if (changedPath) {
            // If the tree changed, we need to update the nextUrl
            nextUrl = changedPath;
        } else if (!nextUrl) {
            // if the tree ends up being the same (ie, no changed path), and we don't have a nextUrl, then we should use the canonicalUrl
            nextUrl = state.canonicalUrl;
        }
    // otherwise this will be a no-op and continue to use the existing nextUrl
    }
    var _mutable_scrollableSegments;
    return {
        // Set href.
        canonicalUrl: isNotUndefined(mutable.canonicalUrl) ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: isNotUndefined(mutable.pendingPush) ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: isNotUndefined(mutable.mpaNavigation) ? mutable.mpaNavigation : state.pushRef.mpaNavigation,
            preserveCustomHistoryState: isNotUndefined(mutable.preserveCustomHistoryState) ? mutable.preserveCustomHistoryState : state.pushRef.preserveCustomHistoryState
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: shouldScroll ? isNotUndefined(mutable == null ? void 0 : mutable.scrollableSegments) ? true : state.focusAndScrollRef.apply : false,
            onlyHashChange: mutable.onlyHashChange || false,
            hashFragment: shouldScroll ? mutable.hashFragment && mutable.hashFragment !== '' ? decodeURIComponent(mutable.hashFragment.slice(1)) : state.focusAndScrollRef.hashFragment : null,
            segmentPaths: shouldScroll ? (_mutable_scrollableSegments = mutable == null ? void 0 : mutable.scrollableSegments) != null ? _mutable_scrollableSegments : state.focusAndScrollRef.segmentPaths : []
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: mutable.prefetchCache ? mutable.prefetchCache : state.prefetchCache,
        // Apply patched router state.
        tree: isNotUndefined(mutable.patchedTree) ? mutable.patchedTree : state.tree,
        nextUrl
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-mutable.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/promise-queue.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/*
    This is a simple promise queue that allows you to limit the number of concurrent promises
    that are running at any given time. It's used to limit the number of concurrent
    prefetch requests that are being made to the server but could be used for other
    things as well.
*/ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PromiseQueue", {
    enumerable: true,
    get: function() {
        return PromiseQueue;
    }
});
const _class_private_field_loose_base = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs [app-client] (ecmascript)");
const _class_private_field_loose_key = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs [app-client] (ecmascript)");
var _maxConcurrency = /*#__PURE__*/ _class_private_field_loose_key._("_maxConcurrency"), _runningCount = /*#__PURE__*/ _class_private_field_loose_key._("_runningCount"), _queue = /*#__PURE__*/ _class_private_field_loose_key._("_queue"), _processNext = /*#__PURE__*/ _class_private_field_loose_key._("_processNext");
class PromiseQueue {
    enqueue(promiseFn) {
        let taskResolve;
        let taskReject;
        const taskPromise = new Promise((resolve, reject)=>{
            taskResolve = resolve;
            taskReject = reject;
        });
        const task = async ()=>{
            try {
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]++;
                const result = await promiseFn();
                taskResolve(result);
            } catch (error) {
                taskReject(error);
            } finally{
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]--;
                _class_private_field_loose_base._(this, _processNext)[_processNext]();
            }
        };
        const enqueueResult = {
            promiseFn: taskPromise,
            task
        };
        // wonder if we should take a LIFO approach here
        _class_private_field_loose_base._(this, _queue)[_queue].push(enqueueResult);
        _class_private_field_loose_base._(this, _processNext)[_processNext]();
        return taskPromise;
    }
    bump(promiseFn) {
        const index = _class_private_field_loose_base._(this, _queue)[_queue].findIndex((item)=>item.promiseFn === promiseFn);
        if (index > -1) {
            const bumpedItem = _class_private_field_loose_base._(this, _queue)[_queue].splice(index, 1)[0];
            _class_private_field_loose_base._(this, _queue)[_queue].unshift(bumpedItem);
            _class_private_field_loose_base._(this, _processNext)[_processNext](true);
        }
    }
    constructor(maxConcurrency = 5){
        Object.defineProperty(this, _processNext, {
            value: processNext
        });
        Object.defineProperty(this, _maxConcurrency, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _runningCount, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _queue, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] = maxConcurrency;
        _class_private_field_loose_base._(this, _runningCount)[_runningCount] = 0;
        _class_private_field_loose_base._(this, _queue)[_queue] = [];
    }
}
function processNext(forced) {
    if (forced === void 0) forced = false;
    if ((_class_private_field_loose_base._(this, _runningCount)[_runningCount] < _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] || forced) && _class_private_field_loose_base._(this, _queue)[_queue].length > 0) {
        var _class_private_field_loose_base__queue_shift;
        (_class_private_field_loose_base__queue_shift = _class_private_field_loose_base._(this, _queue)[_queue].shift()) == null ? void 0 : _class_private_field_loose_base__queue_shift.task();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=promise-queue.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/prefetch-cache-utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DYNAMIC_STALETIME_MS: null,
    STATIC_STALETIME_MS: null,
    createSeededPrefetchCacheEntry: null,
    getOrCreatePrefetchCacheEntry: null,
    prunePrefetchCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_STALETIME_MS: function() {
        return DYNAMIC_STALETIME_MS;
    },
    STATIC_STALETIME_MS: function() {
        return STATIC_STALETIME_MS;
    },
    createSeededPrefetchCacheEntry: function() {
        return createSeededPrefetchCacheEntry;
    },
    getOrCreatePrefetchCacheEntry: function() {
        return getOrCreatePrefetchCacheEntry;
    },
    prunePrefetchCache: function() {
        return prunePrefetchCache;
    }
});
const _fetchserverresponse = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _prefetchreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js [app-client] (ecmascript)");
const INTERCEPTION_CACHE_KEY_MARKER = '%';
/**
 * Creates a cache key for the router prefetch cache
 *
 * @param url - The URL being navigated to
 * @param nextUrl - an internal URL, primarily used for handling rewrites. Defaults to '/'.
 * @return The generated prefetch cache key.
 */ function createPrefetchCacheKeyImpl(url, includeSearchParams, prefix) {
    // Initially we only use the pathname as the cache key. We don't want to include
    // search params so that multiple URLs with the same search parameter can re-use
    // loading states.
    let pathnameFromUrl = url.pathname;
    // RSC responses can differ based on search params, specifically in the case where we aren't
    // returning a partial response (ie with `PrefetchKind.AUTO`).
    // In the auto case, since loading.js & layout.js won't have access to search params,
    // we can safely re-use that cache entry. But for full prefetches, we should not
    // re-use the cache entry as the response may differ.
    if (includeSearchParams) {
        // if we have a full prefetch, we can include the search param in the key,
        // as we'll be getting back a full response. The server might have read the search
        // params when generating the full response.
        pathnameFromUrl += url.search;
    }
    if (prefix) {
        return "" + prefix + INTERCEPTION_CACHE_KEY_MARKER + pathnameFromUrl;
    }
    return pathnameFromUrl;
}
function createPrefetchCacheKey(url, kind, nextUrl) {
    return createPrefetchCacheKeyImpl(url, kind === _routerreducertypes.PrefetchKind.FULL, nextUrl);
}
function getExistingCacheEntry(url, kind, nextUrl, prefetchCache, allowAliasing) {
    if (kind === void 0) kind = _routerreducertypes.PrefetchKind.TEMPORARY;
    // We first check if there's a more specific interception route prefetch entry
    // This is because when we detect a prefetch that corresponds with an interception route, we prefix it with nextUrl (see `createPrefetchCacheKey`)
    // to avoid conflicts with other pages that may have the same URL but render different things depending on the `Next-URL` header.
    for (const maybeNextUrl of [
        nextUrl,
        null
    ]){
        const cacheKeyWithParams = createPrefetchCacheKeyImpl(url, true, maybeNextUrl);
        const cacheKeyWithoutParams = createPrefetchCacheKeyImpl(url, false, maybeNextUrl);
        // First, we check if we have a cache entry that exactly matches the URL
        const cacheKeyToUse = url.search ? cacheKeyWithParams : cacheKeyWithoutParams;
        const existingEntry = prefetchCache.get(cacheKeyToUse);
        if (existingEntry && allowAliasing) {
            // We know we're returning an aliased entry when the pathname matches but the search params don't,
            const isAliased = existingEntry.url.pathname === url.pathname && existingEntry.url.search !== url.search;
            if (isAliased) {
                return {
                    ...existingEntry,
                    aliased: true
                };
            }
            return existingEntry;
        }
        // If the request contains search params, and we're not doing a full prefetch, we can return the
        // param-less entry if it exists.
        // This is technically covered by the check at the bottom of this function, which iterates over cache entries,
        // but lets us arrive there quicker in the param-full case.
        const entryWithoutParams = prefetchCache.get(cacheKeyWithoutParams);
        if (("TURBOPACK compile-time value", "development") !== 'development' && allowAliasing && url.search && kind !== _routerreducertypes.PrefetchKind.FULL && entryWithoutParams && // We shouldn't return the aliased entry if it was relocated to a new cache key.
        // Since it's rewritten, it could respond with a completely different loading state.
        !entryWithoutParams.key.includes(INTERCEPTION_CACHE_KEY_MARKER)) //TURBOPACK unreachable
        ;
    }
    // If we've gotten to this point, we didn't find a specific cache entry that matched
    // the request URL.
    // We attempt a partial match by checking if there's a cache entry with the same pathname.
    // Regardless of what we find, since it doesn't correspond with the requested URL, we'll mark it "aliased".
    // This will signal to the router that it should only apply the loading state on the prefetched data.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return undefined;
}
function getOrCreatePrefetchCacheEntry(param) {
    let { url, nextUrl, tree, prefetchCache, kind, allowAliasing = true } = param;
    const existingCacheEntry = getExistingCacheEntry(url, kind, nextUrl, prefetchCache, allowAliasing);
    if (existingCacheEntry) {
        // Grab the latest status of the cache entry and update it
        existingCacheEntry.status = getPrefetchEntryCacheStatus(existingCacheEntry);
        // when `kind` is provided, an explicit prefetch was requested.
        // if the requested prefetch is "full" and the current cache entry wasn't, we want to re-prefetch with the new intent
        const switchedToFullPrefetch = existingCacheEntry.kind !== _routerreducertypes.PrefetchKind.FULL && kind === _routerreducertypes.PrefetchKind.FULL;
        if (switchedToFullPrefetch) {
            // If we switched to a full prefetch, validate that the existing cache entry contained partial data.
            // It's possible that the cache entry was seeded with full data but has a cache type of "auto" (ie when cache entries
            // are seeded but without a prefetch intent)
            existingCacheEntry.data.then((prefetchResponse)=>{
                const isFullPrefetch = Array.isArray(prefetchResponse.flightData) && prefetchResponse.flightData.some((flightData)=>{
                    // If we started rendering from the root and we returned RSC data (seedData), we already had a full prefetch.
                    return flightData.isRootRender && flightData.seedData !== null;
                });
                if (!isFullPrefetch) {
                    return createLazyPrefetchEntry({
                        tree,
                        url,
                        nextUrl,
                        prefetchCache,
                        // If we didn't get an explicit prefetch kind, we want to set a temporary kind
                        // rather than assuming the same intent as the previous entry, to be consistent with how we
                        // lazily create prefetch entries when intent is left unspecified.
                        kind: kind != null ? kind : _routerreducertypes.PrefetchKind.TEMPORARY
                    });
                }
            });
        }
        // If the existing cache entry was marked as temporary, it means it was lazily created when attempting to get an entry,
        // where we didn't have the prefetch intent. Now that we have the intent (in `kind`), we want to update the entry to the more accurate kind.
        if (kind && existingCacheEntry.kind === _routerreducertypes.PrefetchKind.TEMPORARY) {
            existingCacheEntry.kind = kind;
        }
        // We've determined that the existing entry we found is still valid, so we return it.
        return existingCacheEntry;
    }
    // If we didn't return an entry, create a new one.
    return createLazyPrefetchEntry({
        tree,
        url,
        nextUrl,
        prefetchCache,
        kind: kind || _routerreducertypes.PrefetchKind.TEMPORARY
    });
}
/*
 * Used to take an existing cache entry and prefix it with the nextUrl, if it exists.
 * This ensures that we don't have conflicting cache entries for the same URL (as is the case with route interception).
 */ function prefixExistingPrefetchCacheEntry(param) {
    let { url, nextUrl, prefetchCache, existingCacheKey } = param;
    const existingCacheEntry = prefetchCache.get(existingCacheKey);
    if (!existingCacheEntry) {
        // no-op -- there wasn't an entry to move
        return;
    }
    const newCacheKey = createPrefetchCacheKey(url, existingCacheEntry.kind, nextUrl);
    prefetchCache.set(newCacheKey, {
        ...existingCacheEntry,
        key: newCacheKey
    });
    prefetchCache.delete(existingCacheKey);
    return newCacheKey;
}
function createSeededPrefetchCacheEntry(param) {
    let { nextUrl, tree, prefetchCache, url, data, kind } = param;
    // The initial cache entry technically includes full data, but it isn't explicitly prefetched -- we just seed the
    // prefetch cache so that we can skip an extra prefetch request later, since we already have the data.
    // if the prefetch corresponds with an interception route, we use the nextUrl to prefix the cache key
    const prefetchCacheKey = data.couldBeIntercepted ? createPrefetchCacheKey(url, kind, nextUrl) : createPrefetchCacheKey(url, kind);
    const prefetchEntry = {
        treeAtTimeOfPrefetch: tree,
        data: Promise.resolve(data),
        kind,
        prefetchTime: Date.now(),
        lastUsedTime: Date.now(),
        staleTime: data.staleTime,
        key: prefetchCacheKey,
        status: _routerreducertypes.PrefetchCacheEntryStatus.fresh,
        url
    };
    prefetchCache.set(prefetchCacheKey, prefetchEntry);
    return prefetchEntry;
}
/**
 * Creates a prefetch entry entry and enqueues a fetch request to retrieve the data.
 */ function createLazyPrefetchEntry(param) {
    let { url, kind, tree, nextUrl, prefetchCache } = param;
    const prefetchCacheKey = createPrefetchCacheKey(url, kind);
    // initiates the fetch request for the prefetch and attaches a listener
    // to the promise to update the prefetch cache entry when the promise resolves (if necessary)
    const data = _prefetchreducer.prefetchQueue.enqueue(()=>(0, _fetchserverresponse.fetchServerResponse)(url, {
            flightRouterState: tree,
            nextUrl,
            prefetchKind: kind
        }).then((prefetchResponse)=>{
            // TODO: `fetchServerResponse` should be more tighly coupled to these prefetch cache operations
            // to avoid drift between this cache key prefixing logic
            // (which is currently directly influenced by the server response)
            let newCacheKey;
            if (prefetchResponse.couldBeIntercepted) {
                // Determine if we need to prefix the cache key with the nextUrl
                newCacheKey = prefixExistingPrefetchCacheEntry({
                    url,
                    existingCacheKey: prefetchCacheKey,
                    nextUrl,
                    prefetchCache
                });
            }
            // If the prefetch was a cache hit, we want to update the existing cache entry to reflect that it was a full prefetch.
            // This is because we know that a static response will contain the full RSC payload, and can be updated to respect the `static`
            // staleTime.
            if (prefetchResponse.prerendered) {
                const existingCacheEntry = prefetchCache.get(newCacheKey != null ? newCacheKey : prefetchCacheKey);
                if (existingCacheEntry) {
                    existingCacheEntry.kind = _routerreducertypes.PrefetchKind.FULL;
                    if (prefetchResponse.staleTime !== -1) {
                        // This is the stale time that was collected by the server during
                        // static generation. Use this in place of the default stale time.
                        existingCacheEntry.staleTime = prefetchResponse.staleTime;
                    }
                }
            }
            return prefetchResponse;
        }));
    const prefetchEntry = {
        treeAtTimeOfPrefetch: tree,
        data,
        kind,
        prefetchTime: Date.now(),
        lastUsedTime: null,
        staleTime: -1,
        key: prefetchCacheKey,
        status: _routerreducertypes.PrefetchCacheEntryStatus.fresh,
        url
    };
    prefetchCache.set(prefetchCacheKey, prefetchEntry);
    return prefetchEntry;
}
function prunePrefetchCache(prefetchCache) {
    for (const [href, prefetchCacheEntry] of prefetchCache){
        if (getPrefetchEntryCacheStatus(prefetchCacheEntry) === _routerreducertypes.PrefetchCacheEntryStatus.expired) {
            prefetchCache.delete(href);
        }
    }
}
const DYNAMIC_STALETIME_MS = Number(("TURBOPACK compile-time value", "0")) * 1000;
const STATIC_STALETIME_MS = Number(("TURBOPACK compile-time value", "300")) * 1000;
function getPrefetchEntryCacheStatus(param) {
    let { kind, prefetchTime, lastUsedTime, staleTime } = param;
    if (staleTime !== -1) {
        // `staleTime` is the value sent by the server during static generation.
        // When this is available, it takes precedence over any of the heuristics
        // that follow.
        //
        // TODO: When PPR is enabled, the server will *always* return a stale time
        // when prefetching. We should never use a prefetch entry that hasn't yet
        // received data from the server. So the only two cases should be 1) we use
        // the server-generated stale time 2) the unresolved entry is discarded.
        return Date.now() < prefetchTime + staleTime ? _routerreducertypes.PrefetchCacheEntryStatus.fresh : _routerreducertypes.PrefetchCacheEntryStatus.stale;
    }
    // We will re-use the cache entry data for up to the `dynamic` staletime window.
    if (Date.now() < (lastUsedTime != null ? lastUsedTime : prefetchTime) + DYNAMIC_STALETIME_MS) {
        return lastUsedTime ? _routerreducertypes.PrefetchCacheEntryStatus.reusable : _routerreducertypes.PrefetchCacheEntryStatus.fresh;
    }
    // For "auto" prefetching, we'll re-use only the loading boundary for up to `static` staletime window.
    // A stale entry will only re-use the `loading` boundary, not the full data.
    // This will trigger a "lazy fetch" for the full data.
    if (kind === _routerreducertypes.PrefetchKind.AUTO) {
        if (Date.now() < prefetchTime + STATIC_STALETIME_MS) {
            return _routerreducertypes.PrefetchCacheEntryStatus.stale;
        }
    }
    // for "full" prefetching, we'll re-use the cache entry data for up to `static` staletime window.
    if (kind === _routerreducertypes.PrefetchKind.FULL) {
        if (Date.now() < prefetchTime + STATIC_STALETIME_MS) {
            return _routerreducertypes.PrefetchCacheEntryStatus.reusable;
        }
    }
    return _routerreducertypes.PrefetchCacheEntryStatus.expired;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-cache-utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    prefetchQueue: null,
    prefetchReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    prefetchQueue: function() {
        return prefetchQueue;
    },
    prefetchReducer: function() {
        return prefetchReducer;
    }
});
const _promisequeue = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/promise-queue.js [app-client] (ecmascript)");
const _prefetchcacheutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/prefetch-cache-utils.js [app-client] (ecmascript)");
const prefetchQueue = new _promisequeue.PromiseQueue(5);
const prefetchReducer = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : prefetchReducerImpl;
function identityReducerWhenSegmentCacheIsEnabled(state) {
    // Unlike the old implementation, the Segment Cache doesn't store its data in
    // the router reducer state.
    //
    // This shouldn't be reachable because we wrap the prefetch API in a check,
    // too, which prevents the action from being dispatched. But it's here for
    // clarity + code elimination.
    return state;
}
function prefetchReducerImpl(state, action) {
    // let's prune the prefetch cache before we do anything else
    (0, _prefetchcacheutils.prunePrefetchCache)(state.prefetchCache);
    const { url } = action;
    (0, _prefetchcacheutils.getOrCreatePrefetchCacheEntry)({
        url,
        nextUrl: state.nextUrl,
        prefetchCache: state.prefetchCache,
        kind: action.kind,
        tree: state.tree,
        allowAliasing: true
    });
    return state;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-client] (ecmascript)");
const _parsepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || ("TURBOPACK compile-time value", void 0)) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-client] (ecmascript)");
const _normalizetrailingslash = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppRouterAnnouncer", {
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const ANNOUNCER_TYPE = 'next-route-announcer';
const ANNOUNCER_ID = '__next-route-announcer__';
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = 'position:absolute';
        const announcer = document.createElement('div');
        announcer.ariaLive = 'assertive';
        announcer.id = ANNOUNCER_ID;
        announcer.role = 'alert';
        announcer.style.cssText = 'position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal';
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)('');
    const previousTitle = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(()=>{
        let currentTitle = '';
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector('h1');
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || '';
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined && previousTitle.current !== currentTitle) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSegmentValue", {
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const actionAsyncStorage = typeof window === 'undefined' ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/action-async-storage.external.js [app-client] (ecmascript)").actionAsyncStorage : undefined;
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    var _actionAsyncStorage_getStore;
    type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/unstable-rethrow.browser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.browser.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/unstable-rethrow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = typeof window === 'undefined' ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-client] (ecmascript)").unstable_rethrow : __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/unstable-rethrow.browser.js [app-client] (ecmascript)").unstable_rethrow;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _redirect = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/unstable-rethrow.js [app-client] (ecmascript)");
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "bailoutToClientRendering", {
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
function bailoutToClientRendering(reason) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore == null ? void 0 : workStore.forceStatic) return;
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            default:
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _getsegmentvalue = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js [app-client] (ecmascript)");
const useDynamicRouteParams = typeof window === 'undefined' ? __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)").useDynamicRouteParams : undefined;
function useSearchParams() {
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (typeof window === 'undefined') {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-client] (ecmascript)");
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        bailoutToClientRendering('useSearchParams()');
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useParams()');
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
}
/** Get the canonical parameters from the current level to the leaf node. */ // Client components API
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegment()');
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
    }
    const selectedLayoutSegment = parallelRouteKey === 'children' ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
    // and returning an internal value like `__DEFAULT__` would be confusing.
    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RedirectBoundary: null,
    RedirectErrorBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectBoundary: function() {
        return RedirectBoundary;
    },
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigation = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        _react.default.startTransition(()=>{
            if (redirectType === _redirecterror.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirecterror.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(RedirectErrorBoundary, {
        router: router,
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findHeadInCache", {
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function findHeadInCache(cache, parallelRoutes) {
    return findHeadInCacheImpl(cache, parallelRoutes, '');
}
function findHeadInCacheImpl(cache, parallelRoutes, keyPrefix) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        // Returns the entire Cache Node of the segment whose head we will render.
        return [
            cache,
            keyPrefix
        ];
    }
    // First try the 'children' parallel route if it exists
    // when starting from the "root", this corresponds with the main page component
    const parallelRoutesKeys = Object.keys(parallelRoutes).filter((key)=>key !== 'children');
    // if we are at the root, we need to check the children slot first
    if ('children' in parallelRoutes) {
        parallelRoutesKeys.unshift('children');
    }
    for (const key of parallelRoutesKeys){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        // If the parallel is not matched and using the default segment,
        // skip searching the head from it.
        if (segment === _segment.DEFAULT_SEGMENT_KEY) {
            continue;
        }
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCacheImpl(cacheNode, childParallelRoutes, keyPrefix + '/' + cacheKey);
        if (item) {
            return item;
        }
    }
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * Create a "Thenable" that does not resolve. This is used to suspend indefinitely when data is not available yet.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unresolvedThenable", {
    enumerable: true,
    get: function() {
        return unresolvedThenable;
    }
});
const unresolvedThenable = {
    then: ()=>{}
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unresolved-thenable.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeBasePath", {
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
});
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function removeBasePath(path) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith('/')) path = "/" + path;
    return path;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * Entry point to the Segment Cache implementation.
 *
 * All code related to the Segment Cache lives `segment-cache-impl` directory.
 * Callers access it through this indirection.
 *
 * This is to ensure the code is dead code eliminated from the bundle if the
 * flag is disabled.
 *
 * TODO: This is super tedious. Since experimental flags are an essential part
 * of our workflow, we should establish a better pattern for dead code
 * elimination. Ideally it would be done at the bundler level, like how React's
 * build process works. In the React repo, you don't even need to add any extra
 * configuration per experiment — if the code is not reachable, it gets stripped
 * from the build automatically by Rollup. Or, shorter term, we could stub out
 * experimental modules at build time by updating the build config, i.e. a more
 * automated version of what I'm doing manually in this file.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NavigationResultTag: null,
    PrefetchPriority: null,
    cancelPrefetchTask: null,
    createCacheKey: null,
    getCurrentCacheVersion: null,
    isPrefetchTaskDirty: null,
    navigate: null,
    prefetch: null,
    reschedulePrefetchTask: null,
    revalidateEntireCache: null,
    schedulePrefetchTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NavigationResultTag: function() {
        return NavigationResultTag;
    },
    PrefetchPriority: function() {
        return PrefetchPriority;
    },
    cancelPrefetchTask: function() {
        return cancelPrefetchTask;
    },
    createCacheKey: function() {
        return createCacheKey;
    },
    getCurrentCacheVersion: function() {
        return getCurrentCacheVersion;
    },
    isPrefetchTaskDirty: function() {
        return isPrefetchTaskDirty;
    },
    navigate: function() {
        return navigate;
    },
    prefetch: function() {
        return prefetch;
    },
    reschedulePrefetchTask: function() {
        return reschedulePrefetchTask;
    },
    revalidateEntireCache: function() {
        return revalidateEntireCache;
    },
    schedulePrefetchTask: function() {
        return schedulePrefetchTask;
    }
});
const notEnabled = ()=>{
    throw Object.defineProperty(new Error('Segment Cache experiment is not enabled. This is a bug in Next.js.'), "__NEXT_ERROR_CODE", {
        value: "E654",
        enumerable: false,
        configurable: true
    });
};
const prefetch = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : notEnabled;
const navigate = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : notEnabled;
const revalidateEntireCache = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : notEnabled;
const getCurrentCacheVersion = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : notEnabled;
const schedulePrefetchTask = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : notEnabled;
const cancelPrefetchTask = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : notEnabled;
const reschedulePrefetchTask = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : notEnabled;
const isPrefetchTaskDirty = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : notEnabled;
const createCacheKey = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : notEnabled;
var NavigationResultTag = /*#__PURE__*/ function(NavigationResultTag) {
    NavigationResultTag[NavigationResultTag["MPA"] = 0] = "MPA";
    NavigationResultTag[NavigationResultTag["Success"] = 1] = "Success";
    NavigationResultTag[NavigationResultTag["NoOp"] = 2] = "NoOp";
    NavigationResultTag[NavigationResultTag["Async"] = 3] = "Async";
    return NavigationResultTag;
}({});
var PrefetchPriority = /*#__PURE__*/ function(PrefetchPriority) {
    /**
   * Assigned to the most recently hovered/touched link. Special network
   * bandwidth is reserved for this task only. There's only ever one Intent-
   * priority task at a time; when a new Intent task is scheduled, the previous
   * one is bumped down to Default.
   */ PrefetchPriority[PrefetchPriority["Intent"] = 2] = "Intent";
    /**
   * The default priority for prefetch tasks.
   */ PrefetchPriority[PrefetchPriority["Default"] = 1] = "Default";
    /**
   * Assigned to tasks when they spawn non-blocking background work, like
   * revalidating a partially cached entry to see if more data is available.
   */ PrefetchPriority[PrefetchPriority["Background"] = 0] = "Background";
    return PrefetchPriority;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=segment-cache.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    IDLE_LINK_STATUS: null,
    PENDING_LINK_STATUS: null,
    mountFormInstance: null,
    mountLinkInstance: null,
    onLinkVisibilityChanged: null,
    onNavigationIntent: null,
    pingVisibleLinks: null,
    setLinkForCurrentNavigation: null,
    unmountLinkForCurrentNavigation: null,
    unmountPrefetchableInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    IDLE_LINK_STATUS: function() {
        return IDLE_LINK_STATUS;
    },
    PENDING_LINK_STATUS: function() {
        return PENDING_LINK_STATUS;
    },
    mountFormInstance: function() {
        return mountFormInstance;
    },
    mountLinkInstance: function() {
        return mountLinkInstance;
    },
    onLinkVisibilityChanged: function() {
        return onLinkVisibilityChanged;
    },
    onNavigationIntent: function() {
        return onNavigationIntent;
    },
    pingVisibleLinks: function() {
        return pingVisibleLinks;
    },
    setLinkForCurrentNavigation: function() {
        return setLinkForCurrentNavigation;
    },
    unmountLinkForCurrentNavigation: function() {
        return unmountLinkForCurrentNavigation;
    },
    unmountPrefetchableInstance: function() {
        return unmountPrefetchableInstance;
    }
});
const _approuterinstance = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Tracks the most recently navigated link instance. When null, indicates
// the current navigation was not initiated by a link click.
let linkForMostRecentNavigation = null;
const PENDING_LINK_STATUS = {
    pending: true
};
const IDLE_LINK_STATUS = {
    pending: false
};
function setLinkForCurrentNavigation(link) {
    (0, _react.startTransition)(()=>{
        linkForMostRecentNavigation == null ? void 0 : linkForMostRecentNavigation.setOptimisticLinkStatus(IDLE_LINK_STATUS);
        link == null ? void 0 : link.setOptimisticLinkStatus(PENDING_LINK_STATUS);
        linkForMostRecentNavigation = link;
    });
}
function unmountLinkForCurrentNavigation(link) {
    if (linkForMostRecentNavigation === link) {
        linkForMostRecentNavigation = null;
    }
}
// Use a WeakMap to associate a Link instance with its DOM element. This is
// used by the IntersectionObserver to track the link's visibility.
const prefetchable = typeof WeakMap === 'function' ? new WeakMap() : new Map();
// A Set of the currently visible links. We re-prefetch visible links after a
// cache invalidation, or when the current URL changes. It's a separate data
// structure from the WeakMap above because only the visible links need to
// be enumerated.
const prefetchableAndVisible = new Set();
// A single IntersectionObserver instance shared by all <Link> components.
const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(handleIntersect, {
    rootMargin: '200px'
}) : null;
function observeVisibility(element, instance) {
    const existingInstance = prefetchable.get(element);
    if (existingInstance !== undefined) {
        // This shouldn't happen because each <Link> component should have its own
        // anchor tag instance, but it's defensive coding to avoid a memory leak in
        // case there's a logical error somewhere else.
        unmountPrefetchableInstance(element);
    }
    // Only track prefetchable links that have a valid prefetch URL
    prefetchable.set(element, instance);
    if (observer !== null) {
        observer.observe(element);
    }
}
function coercePrefetchableUrl(href) {
    try {
        return (0, _approuter.createPrefetchURL)(href);
    } catch (e) {
        // createPrefetchURL sometimes throws an error if an invalid URL is
        // provided, though I'm not sure if it's actually necessary.
        // TODO: Consider removing the throw from the inner function, or change it
        // to reportError. Or maybe the error isn't even necessary for automatic
        // prefetches, just navigations.
        const reportErrorFn = typeof reportError === 'function' ? reportError : console.error;
        reportErrorFn("Cannot prefetch '" + href + "' because it cannot be converted to a URL.");
        return null;
    }
}
function mountLinkInstance(element, href, router, kind, prefetchEnabled, setOptimisticLinkStatus) {
    if (prefetchEnabled) {
        const prefetchURL = coercePrefetchableUrl(href);
        if (prefetchURL !== null) {
            const instance = {
                router,
                kind,
                isVisible: false,
                prefetchTask: null,
                prefetchHref: prefetchURL.href,
                setOptimisticLinkStatus
            };
            // We only observe the link's visibility if it's prefetchable. For
            // example, this excludes links to external URLs.
            observeVisibility(element, instance);
            return instance;
        }
    }
    // If the link is not prefetchable, we still create an instance so we can
    // track its optimistic state (i.e. useLinkStatus).
    const instance = {
        router,
        kind,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: null,
        setOptimisticLinkStatus
    };
    return instance;
}
function mountFormInstance(element, href, router, kind) {
    const prefetchURL = coercePrefetchableUrl(href);
    if (prefetchURL === null) {
        // This href is not prefetchable, so we don't track it.
        // TODO: We currently observe/unobserve a form every time its href changes.
        // For Links, this isn't a big deal because the href doesn't usually change,
        // but for forms it's extremely common. We should optimize this.
        return;
    }
    const instance = {
        router,
        kind,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: prefetchURL.href,
        setOptimisticLinkStatus: null
    };
    observeVisibility(element, instance);
}
function unmountPrefetchableInstance(element) {
    const instance = prefetchable.get(element);
    if (instance !== undefined) {
        prefetchable.delete(element);
        prefetchableAndVisible.delete(instance);
        const prefetchTask = instance.prefetchTask;
        if (prefetchTask !== null) {
            (0, _segmentcache.cancelPrefetchTask)(prefetchTask);
        }
    }
    if (observer !== null) {
        observer.unobserve(element);
    }
}
function handleIntersect(entries) {
    for (const entry of entries){
        // Some extremely old browsers or polyfills don't reliably support
        // isIntersecting so we check intersectionRatio instead. (Do we care? Not
        // really. But whatever this is fine.)
        const isVisible = entry.intersectionRatio > 0;
        onLinkVisibilityChanged(entry.target, isVisible);
    }
}
function onLinkVisibilityChanged(element, isVisible) {
    if ("TURBOPACK compile-time truthy", 1) {
        // Prefetching on viewport is disabled in development for performance
        // reasons, because it requires compiling the target page.
        // TODO: Investigate re-enabling this.
        return;
    }
    //TURBOPACK unreachable
    ;
    const instance = undefined;
}
function onNavigationIntent(element, unstable_upgradeToDynamicPrefetch) {
    const instance = prefetchable.get(element);
    if (instance === undefined) {
        return;
    }
    // Prefetch the link on hover/touchstart.
    if (instance !== undefined) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        rescheduleLinkPrefetch(instance, _segmentcache.PrefetchPriority.Intent);
    }
}
function rescheduleLinkPrefetch(instance, priority) {
    const existingPrefetchTask = instance.prefetchTask;
    if (!instance.isVisible) {
        // Cancel any in-progress prefetch task. (If it already finished then this
        // is a no-op.)
        if (existingPrefetchTask !== null) {
            (0, _segmentcache.cancelPrefetchTask)(existingPrefetchTask);
        }
        // We don't need to reset the prefetchTask to null upon cancellation; an
        // old task object can be rescheduled with reschedulePrefetchTask. This is a
        // micro-optimization but also makes the code simpler (don't need to
        // worry about whether an old task object is stale).
        return;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // The old prefetch implementation does not have different priority levels.
        // Just schedule a new prefetch task.
        prefetchWithOldCacheImplementation(instance);
        return;
    }
    //TURBOPACK unreachable
    ;
    const appRouterState = undefined;
}
function pingVisibleLinks(nextUrl, tree) {
    // For each currently visible link, cancel the existing prefetch task (if it
    // exists) and schedule a new one. This is effectively the same as if all the
    // visible links left and then re-entered the viewport.
    //
    // This is called when the Next-Url or the base tree changes, since those
    // may affect the result of a prefetch task. It's also called after a
    // cache invalidation.
    for (const instance of prefetchableAndVisible){
        const task = instance.prefetchTask;
        if (task !== null && !(0, _segmentcache.isPrefetchTaskDirty)(task, nextUrl, tree)) {
            continue;
        }
        // Something changed. Cancel the existing prefetch task and schedule a
        // new one.
        if (task !== null) {
            (0, _segmentcache.cancelPrefetchTask)(task);
        }
        const cacheKey = (0, _segmentcache.createCacheKey)(instance.prefetchHref, nextUrl);
        instance.prefetchTask = (0, _segmentcache.schedulePrefetchTask)(cacheKey, tree, instance.kind === _routerreducertypes.PrefetchKind.FULL, _segmentcache.PrefetchPriority.Default, null);
    }
}
function prefetchWithOldCacheImplementation(instance) {
    // This is the path used when the Segment Cache is not enabled.
    if (typeof window === 'undefined') {
        return;
    }
    const doPrefetch = async ()=>{
        // note that `appRouter.prefetch()` is currently sync,
        // so we have to wrap this call in an async function to be able to catch() errors below.
        return instance.router.prefetch(instance.prefetchHref, {
            kind: instance.kind
        });
    };
    // Prefetch the page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    doPrefetch().catch((err)=>{
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            // rethrow to show invalid URL errors
            throw err;
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=links.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/errors/graceful-degrade-boundary.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    GracefulDegradeBoundary: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    GracefulDegradeBoundary: function() {
        return GracefulDegradeBoundary;
    },
    default: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function getDomNodeAttributes(node) {
    const result = {};
    for(let i = 0; i < node.attributes.length; i++){
        const attr = node.attributes[i];
        result[attr.name] = attr.value;
    }
    return result;
}
class GracefulDegradeBoundary extends _react.Component {
    static getDerivedStateFromError(_) {
        return {
            hasError: true
        };
    }
    componentDidMount() {
        const htmlNode = this.htmlRef.current;
        if (this.state.hasError && htmlNode) {
            // Reapply the cached HTML attributes to the root element
            Object.entries(this.htmlAttributes).forEach((param)=>{
                let [key, value] = param;
                htmlNode.setAttribute(key, value);
            });
        }
    }
    render() {
        const { hasError } = this.state;
        // Cache the root HTML content on the first render
        if (typeof window !== 'undefined' && !this.rootHtml) {
            this.rootHtml = document.documentElement.innerHTML;
            this.htmlAttributes = getDomNodeAttributes(document.documentElement);
        }
        if (hasError) {
            // Render the current HTML content without hydration
            return /*#__PURE__*/ (0, _jsxruntime.jsx)("html", {
                ref: this.htmlRef,
                suppressHydrationWarning: true,
                dangerouslySetInnerHTML: {
                    __html: this.rootHtml
                }
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
        this.rootHtml = '';
        this.htmlAttributes = {};
        this.htmlRef = /*#__PURE__*/ (0, _react.createRef)();
    }
}
const _default = GracefulDegradeBoundary;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=graceful-degrade-boundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HTTPAccessFallbackBoundary", {
    enumerable: true,
    get: function() {
        return HTTPAccessFallbackBoundary;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
class HTTPAccessFallbackErrorBoundary extends _react.default.Component {
    componentDidCatch() {
        if (("TURBOPACK compile-time value", "development") === 'development' && this.props.missingSlots && this.props.missingSlots.size > 0 && // A missing children slot is the typical not-found case, so no need to warn
        !this.props.missingSlots.has('children')) {
            let warningMessage = 'No default component was found for a parallel route rendered on this page. Falling back to nearest NotFound boundary.\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#defaultjs\n\n';
            const formattedSlots = Array.from(this.props.missingSlots).sort((a, b)=>a.localeCompare(b)).map((slot)=>"@" + slot).join(', ');
            warningMessage += 'Missing slots: ' + formattedSlots;
            (0, _warnonce.warnOnce)(warningMessage);
        }
    }
    static getDerivedStateFromError(error) {
        if ((0, _httpaccessfallback.isHTTPAccessFallbackError)(error)) {
            const httpStatus = (0, _httpaccessfallback.getAccessFallbackHTTPStatus)(error);
            return {
                triggeredStatus: httpStatus
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.triggeredStatus) {
            return {
                triggeredStatus: undefined,
                previousPathname: props.pathname
            };
        }
        return {
            triggeredStatus: state.triggeredStatus,
            previousPathname: props.pathname
        };
    }
    render() {
        const { notFound, forbidden, unauthorized, children } = this.props;
        const { triggeredStatus } = this.state;
        const errorComponents = {
            [_httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND]: notFound,
            [_httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN]: forbidden,
            [_httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED]: unauthorized
        };
        if (triggeredStatus) {
            const isNotFound = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND && notFound;
            const isForbidden = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN && forbidden;
            const isUnauthorized = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED && unauthorized;
            // If there's no matched boundary in this layer, keep throwing the error by rendering the children
            if (!(isNotFound || isForbidden || isUnauthorized)) {
                return children;
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    }),
                    ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "boundary-next-error",
                        content: (0, _httpaccessfallback.getAccessFallbackErrorTypeByStatus)(triggeredStatus)
                    }),
                    errorComponents[triggeredStatus]
                ]
            });
        }
        return children;
    }
    constructor(props){
        super(props);
        this.state = {
            triggeredStatus: undefined,
            previousPathname: props.pathname
        };
    }
}
function HTTPAccessFallbackBoundary(param) {
    let { notFound, forbidden, unauthorized, children } = param;
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these error can occur), we will get the correct pathname.
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    const missingSlots = (0, _react.useContext)(_approutercontextsharedruntime.MissingSlotContext);
    const hasErrorFallback = !!(notFound || forbidden || unauthorized);
    if (hasErrorFallback) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(HTTPAccessFallbackErrorBoundary, {
            pathname: pathname,
            notFound: notFound,
            forbidden: forbidden,
            unauthorized: unauthorized,
            missingSlots: missingSlots,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DevRootHTTPAccessFallbackBoundary: null,
    bailOnRootNotFound: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DevRootHTTPAccessFallbackBoundary: function() {
        return DevRootHTTPAccessFallbackBoundary;
    },
    bailOnRootNotFound: function() {
        return bailOnRootNotFound;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _errorboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
function bailOnRootNotFound() {
    throw Object.defineProperty(new Error('notFound() is not allowed to use in root layout'), "__NEXT_ERROR_CODE", {
        value: "E192",
        enumerable: false,
        configurable: true
    });
}
function NotAllowedRootHTTPFallbackError() {
    bailOnRootNotFound();
    return null;
}
function DevRootHTTPAccessFallbackBoundary(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.HTTPAccessFallbackBoundary, {
        notFound: /*#__PURE__*/ (0, _jsxruntime.jsx)(NotAllowedRootHTTPFallbackError, {}),
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-root-http-access-fallback-boundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/hot-reloader/shared.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REACT_REFRESH_FULL_RELOAD: null,
    REACT_REFRESH_FULL_RELOAD_FROM_ERROR: null,
    reportInvalidHmrMessage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REACT_REFRESH_FULL_RELOAD: function() {
        return REACT_REFRESH_FULL_RELOAD;
    },
    REACT_REFRESH_FULL_RELOAD_FROM_ERROR: function() {
        return REACT_REFRESH_FULL_RELOAD_FROM_ERROR;
    },
    reportInvalidHmrMessage: function() {
        return reportInvalidHmrMessage;
    }
});
const REACT_REFRESH_FULL_RELOAD = '[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.';
const REACT_REFRESH_FULL_RELOAD_FROM_ERROR = '[Fast Refresh] performing full reload because your application had an unrecoverable error';
function reportInvalidHmrMessage(message, err) {
    console.warn('[HMR] Invalid message: ' + JSON.stringify(message) + '\n' + (err instanceof Error && (err == null ? void 0 : err.stack) || ''));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=shared.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/hot-reloader/get-socket-url.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSocketUrl", {
    enumerable: true,
    get: function() {
        return getSocketUrl;
    }
});
const _normalizedassetprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/normalized-asset-prefix.js [app-client] (ecmascript)");
function getSocketProtocol(assetPrefix) {
    let protocol = window.location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (e) {}
    return protocol === 'http:' ? 'ws:' : 'wss:';
}
function getSocketUrl(assetPrefix) {
    const prefix = (0, _normalizedassetprefix.normalizedAssetPrefix)(assetPrefix);
    const protocol = getSocketProtocol(assetPrefix || '');
    if (URL.canParse(prefix)) {
        // since normalized asset prefix is ensured to be a URL format,
        // we can safely replace the protocol
        return prefix.replace(/^http/, 'ws');
    }
    const { hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : '') + prefix;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-socket-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/hot-reloader/app/use-websocket.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    useSendMessage: null,
    useTurbopack: null,
    useWebsocket: null,
    useWebsocketPing: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    useSendMessage: function() {
        return useSendMessage;
    },
    useTurbopack: function() {
        return useTurbopack;
    },
    useWebsocket: function() {
        return useWebsocket;
    },
    useWebsocketPing: function() {
        return useWebsocketPing;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _getsocketurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/hot-reloader/get-socket-url.js [app-client] (ecmascript)");
function useWebsocket(assetPrefix) {
    const webSocketRef = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(()=>{
        if (webSocketRef.current) {
            return;
        }
        const url = (0, _getsocketurl.getSocketUrl)(assetPrefix);
        webSocketRef.current = new window.WebSocket("" + url + "/_next/webpack-hmr");
    }, [
        assetPrefix
    ]);
    return webSocketRef;
}
function useSendMessage(webSocketRef) {
    const sendMessage = (0, _react.useCallback)((data)=>{
        const socket = webSocketRef.current;
        if (!socket || socket.readyState !== socket.OPEN) {
            return;
        }
        return socket.send(data);
    }, [
        webSocketRef
    ]);
    return sendMessage;
}
function useTurbopack(sendMessage, onUpdateError) {
    const turbopackState = (0, _react.useRef)({
        init: false,
        // Until the dynamic import resolves, queue any turbopack messages which will be replayed.
        queue: [],
        callback: undefined
    });
    const processTurbopackMessage = (0, _react.useCallback)((msg)=>{
        const { callback, queue } = turbopackState.current;
        if (callback) {
            callback(msg);
        } else {
            queue.push(msg);
        }
    }, []);
    (0, _react.useEffect)(()=>{
        const { current: initCurrent } = turbopackState;
        // TODO(WEB-1589): only install if `process.turbopack` set.
        if (initCurrent.init) {
            return;
        }
        initCurrent.init = true;
        __turbopack_context__.r("[turbopack]/browser/dev/hmr-client/hmr-client.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then((param)=>{
            let { connect } = param;
            const { current } = turbopackState;
            connect({
                addMessageListener (cb) {
                    current.callback = cb;
                    // Replay all Turbopack messages before we were able to establish the HMR client.
                    for (const msg of current.queue){
                        cb(msg);
                    }
                    current.queue = undefined;
                },
                sendMessage,
                onUpdateError
            });
        });
    }, [
        sendMessage,
        onUpdateError
    ]);
    return processTurbopackMessage;
}
function useWebsocketPing(websocketRef) {
    const sendMessage = useSendMessage(websocketRef);
    const { tree } = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    (0, _react.useEffect)(()=>{
        // Never send pings when using Turbopack as it's not used.
        // Pings were originally used to keep track of active routes in on-demand-entries with webpack.
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        // Taken from on-demand-entries-client.js
        const interval = undefined;
    }, [
        tree,
        sendMessage
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-websocket.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/report-hmr-latency.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * Logs information about a completed HMR to the console, the server (via a
 * `client-hmr-latency` event), and to `self.__NEXT_HMR_LATENCY_CB` (a debugging
 * hook).
 *
 * @param hasUpdate Set this to `false` to avoid reporting the HMR event via a
 *   `client-hmr-latency` event or to `self.__NEXT_HMR_LATENCY_CB`. Used by
 *   turbopack when we must report a message to the browser console (because we
 *   already logged a "rebuilding" message), but it's not a real HMR, so we
 *   don't want to impact our telemetry.
 */ "default", {
    enumerable: true,
    get: function() {
        return reportHmrLatency;
    }
});
function reportHmrLatency(sendMessage, updatedModules, startMsSinceEpoch, endMsSinceEpoch, hasUpdate) {
    if (hasUpdate === void 0) hasUpdate = true;
    const latencyMs = endMsSinceEpoch - startMsSinceEpoch;
    console.log("[Fast Refresh] done in " + latencyMs + "ms");
    if (!hasUpdate) {
        return;
    }
    sendMessage(JSON.stringify({
        event: 'client-hmr-latency',
        id: window.__nextDevClientId,
        startTime: startMsSinceEpoch,
        endTime: endMsSinceEpoch,
        page: window.location.pathname,
        updatedModules,
        // Whether the page (tab) was hidden at the time the event occurred.
        // This can impact the accuracy of the event's timing.
        isPageHidden: document.visibilityState === 'hidden'
    }));
    if (self.__NEXT_HMR_LATENCY_CB) {
        self.__NEXT_HMR_LATENCY_CB(latencyMs);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=report-hmr-latency.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TurbopackHmr", {
    enumerable: true,
    get: function() {
        return TurbopackHmr;
    }
});
const _class_private_field_loose_base = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs [app-client] (ecmascript)");
const _class_private_field_loose_key = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs [app-client] (ecmascript)");
// How long to wait before reporting the HMR start, used to suppress irrelevant
// `BUILDING` events. Does not impact reported latency.
const TURBOPACK_HMR_START_DELAY_MS = 100;
var _updatedModules = /*#__PURE__*/ _class_private_field_loose_key._("_updatedModules"), _startMsSinceEpoch = /*#__PURE__*/ _class_private_field_loose_key._("_startMsSinceEpoch"), _lastUpdateMsSinceEpoch = /*#__PURE__*/ _class_private_field_loose_key._("_lastUpdateMsSinceEpoch"), _deferredReportHmrStartId = /*#__PURE__*/ _class_private_field_loose_key._("_deferredReportHmrStartId"), // as it reports *any* compilation, including fully no-op/cached compilations
// and those unrelated to HMR. Fixing this would require significant
// architectural changes.
//
// Work around this by deferring any "rebuilding" message by 100ms. If we get
// a BUILT event within that threshold and nothing has changed, just suppress
// the message entirely.
_runDeferredReportHmrStart = /*#__PURE__*/ _class_private_field_loose_key._("_runDeferredReportHmrStart"), _cancelDeferredReportHmrStart = /*#__PURE__*/ _class_private_field_loose_key._("_cancelDeferredReportHmrStart"), /** Helper for other `onEvent` methods. */ _onUpdate = /*#__PURE__*/ _class_private_field_loose_key._("_onUpdate");
class TurbopackHmr {
    onBuilding() {
        _class_private_field_loose_base._(this, _lastUpdateMsSinceEpoch)[_lastUpdateMsSinceEpoch] = undefined;
        _class_private_field_loose_base._(this, _cancelDeferredReportHmrStart)[_cancelDeferredReportHmrStart]();
        _class_private_field_loose_base._(this, _startMsSinceEpoch)[_startMsSinceEpoch] = Date.now();
        // report the HMR start after a short delay
        _class_private_field_loose_base._(this, _deferredReportHmrStartId)[_deferredReportHmrStartId] = setTimeout(()=>_class_private_field_loose_base._(this, _runDeferredReportHmrStart)[_runDeferredReportHmrStart](), self.__NEXT_HMR_TURBOPACK_REPORT_NOISY_NOOP_EVENTS ? 0 : TURBOPACK_HMR_START_DELAY_MS);
    }
    onTurbopackMessage(msg) {
        _class_private_field_loose_base._(this, _onUpdate)[_onUpdate]();
        const updatedModules = extractModulesFromTurbopackMessage(msg.data);
        for (const module1 of updatedModules){
            _class_private_field_loose_base._(this, _updatedModules)[_updatedModules].add(module1);
        }
    }
    onServerComponentChanges() {
        _class_private_field_loose_base._(this, _onUpdate)[_onUpdate]();
    }
    onReloadPage() {
        _class_private_field_loose_base._(this, _onUpdate)[_onUpdate]();
    }
    onPageAddRemove() {
        _class_private_field_loose_base._(this, _onUpdate)[_onUpdate]();
    }
    /**
   * @returns `null` if the caller should ignore the update entirely. Returns an
   *   object with `hasUpdates: false` if the caller should report the end of
   *   the HMR in the browser console, but the HMR was a no-op.
   */ onBuilt() {
        // Check that we got *any* `TurbopackMessageAction`, even if
        // `updatedModules` is empty (not everything gets recorded there).
        //
        // There's also a case where `onBuilt` gets called before `onBuilding`,
        // which can happen during initial page load. Ignore that too!
        const hasUpdates = _class_private_field_loose_base._(this, _lastUpdateMsSinceEpoch)[_lastUpdateMsSinceEpoch] != null && _class_private_field_loose_base._(this, _startMsSinceEpoch)[_startMsSinceEpoch] != null;
        if (!hasUpdates && _class_private_field_loose_base._(this, _deferredReportHmrStartId)[_deferredReportHmrStartId] != null) {
            // suppress the update entirely
            _class_private_field_loose_base._(this, _cancelDeferredReportHmrStart)[_cancelDeferredReportHmrStart]();
            return null;
        }
        _class_private_field_loose_base._(this, _runDeferredReportHmrStart)[_runDeferredReportHmrStart]();
        var _class_private_field_loose_base__lastUpdateMsSinceEpoch;
        const result = {
            hasUpdates,
            updatedModules: _class_private_field_loose_base._(this, _updatedModules)[_updatedModules],
            startMsSinceEpoch: _class_private_field_loose_base._(this, _startMsSinceEpoch)[_startMsSinceEpoch],
            endMsSinceEpoch: (_class_private_field_loose_base__lastUpdateMsSinceEpoch = _class_private_field_loose_base._(this, _lastUpdateMsSinceEpoch)[_lastUpdateMsSinceEpoch]) != null ? _class_private_field_loose_base__lastUpdateMsSinceEpoch : Date.now()
        };
        _class_private_field_loose_base._(this, _updatedModules)[_updatedModules] = new Set();
        return result;
    }
    constructor(){
        Object.defineProperty(this, _runDeferredReportHmrStart, {
            value: runDeferredReportHmrStart
        });
        Object.defineProperty(this, _cancelDeferredReportHmrStart, {
            value: cancelDeferredReportHmrStart
        });
        Object.defineProperty(this, _onUpdate, {
            value: onUpdate
        });
        Object.defineProperty(this, _updatedModules, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _startMsSinceEpoch, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _lastUpdateMsSinceEpoch, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _deferredReportHmrStartId, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _updatedModules)[_updatedModules] = new Set();
    }
}
function runDeferredReportHmrStart() {
    if (_class_private_field_loose_base._(this, _deferredReportHmrStartId)[_deferredReportHmrStartId] != null) {
        console.log('[Fast Refresh] rebuilding');
        _class_private_field_loose_base._(this, _cancelDeferredReportHmrStart)[_cancelDeferredReportHmrStart]();
    }
}
function cancelDeferredReportHmrStart() {
    clearTimeout(_class_private_field_loose_base._(this, _deferredReportHmrStartId)[_deferredReportHmrStartId]);
    _class_private_field_loose_base._(this, _deferredReportHmrStartId)[_deferredReportHmrStartId] = undefined;
}
function onUpdate() {
    _class_private_field_loose_base._(this, _runDeferredReportHmrStart)[_runDeferredReportHmrStart]();
    _class_private_field_loose_base._(this, _lastUpdateMsSinceEpoch)[_lastUpdateMsSinceEpoch] = Date.now();
}
function extractModulesFromTurbopackMessage(data) {
    const updatedModules = new Set();
    const updates = Array.isArray(data) ? data : [
        data
    ];
    for (const update of updates){
        // TODO this won't capture changes to CSS since they don't result in a "merged" update
        if (update.type !== 'partial' || update.instruction.type !== 'ChunkListUpdate' || update.instruction.merged === undefined) {
            continue;
        }
        for (const mergedUpdate of update.instruction.merged){
            for (const name of Object.keys(mergedUpdate.entries)){
                const res = /(.*)\s+\[.*/.exec(name);
                if (res === null) {
                    console.error('[Turbopack HMR] Expected module to match pattern: ' + name);
                    continue;
                }
                updatedModules.add(res[1]);
            }
        }
    }
    return updatedModules;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=turbopack-hot-reloader-common.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/// <reference types="webpack/module.d.ts" />
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    waitForWebpackRuntimeHotUpdate: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return HotReload;
    },
    waitForWebpackRuntimeHotUpdate: function() {
        return waitForWebpackRuntimeHotUpdate;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/strip-ansi/index.js [app-client] (ecmascript)"));
const _formatwebpackmessages = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/format-webpack-messages.js [app-client] (ecmascript)"));
const _navigation = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
const _shared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/hot-reloader/shared.js [app-client] (ecmascript)");
const _nextdevtools = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/next-devtools/index.js [app-client] (ecmascript)");
const _replayssronlyerrors = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/errors/replay-ssr-only-errors.js [app-client] (ecmascript)");
const _appdevoverlayerrorboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)");
const _useerrorhandler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/errors/use-error-handler.js [app-client] (ecmascript)");
const _runtimeerrorhandler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/runtime-error-handler.js [app-client] (ecmascript)");
const _usewebsocket = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/hot-reloader/app/use-websocket.js [app-client] (ecmascript)");
const _hotreloadertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/dev/hot-reloader-types.js [app-client] (ecmascript)");
const _navigationuntracked = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _reporthmrlatency = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/report-hmr-latency.js [app-client] (ecmascript)"));
const _turbopackhotreloadercommon = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/hot-reloader/turbopack-hot-reloader-common.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _useforwardconsolelog = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/errors/use-forward-console-log.js [app-client] (ecmascript)");
let mostRecentCompilationHash = null;
let __nextDevClientId = Math.round(Math.random() * 100 + Date.now());
let reloading = false;
let webpackStartMsSinceEpoch = null;
const turbopackHmr = ("TURBOPACK compile-time truthy", 1) ? new _turbopackhotreloadercommon.TurbopackHmr() : "TURBOPACK unreachable";
let pendingHotUpdateWebpack = Promise.resolve();
let resolvePendingHotUpdateWebpack = ()=>{};
function setPendingHotUpdateWebpack() {
    pendingHotUpdateWebpack = new Promise((resolve)=>{
        resolvePendingHotUpdateWebpack = ()=>{
            resolve();
        };
    });
}
function waitForWebpackRuntimeHotUpdate() {
    return pendingHotUpdateWebpack;
}
// There is a newer version of the code available.
function handleAvailableHash(hash) {
    // Update last known compilation hash.
    mostRecentCompilationHash = hash;
}
/**
 * Is there a newer version of this code available?
 * For webpack: Check if the hash changed compared to __webpack_hash__
 * For Turbopack: Always true because it doesn't have __webpack_hash__
 */ function isUpdateAvailable() {
    if ("TURBOPACK compile-time truthy", 1) {
        return true;
    }
    //TURBOPACK unreachable
    ;
}
// Webpack disallows updates in other states.
function canApplyUpdates() {
    return module.hot.status() === 'idle';
}
function afterApplyUpdates(fn) {
    if (canApplyUpdates()) {
        fn();
    } else {
        function handler(status) {
            if (status === 'idle') {
                module.hot.removeStatusHandler(handler);
                fn();
            }
        }
        module.hot.addStatusHandler(handler);
    }
}
function performFullReload(err, sendMessage) {
    const stackTrace = err && (err.stack && err.stack.split('\n').slice(0, 5).join('\n') || err.message || err + '');
    sendMessage(JSON.stringify({
        event: 'client-full-reload',
        stackTrace,
        hadRuntimeError: !!_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError,
        dependencyChain: err ? err.dependencyChain : undefined
    }));
    if (reloading) return;
    reloading = true;
    window.location.reload();
}
// Attempt to update code on the fly, fall back to a hard reload.
function tryApplyUpdatesWebpack(sendMessage) {
    if (!isUpdateAvailable() || !canApplyUpdates()) {
        resolvePendingHotUpdateWebpack();
        _nextdevtools.dispatcher.onBuildOk();
        (0, _reporthmrlatency.default)(sendMessage, [], webpackStartMsSinceEpoch, Date.now());
        return;
    }
    function handleApplyUpdates(err, updatedModules) {
        if (err || _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError || updatedModules == null) {
            if (err) {
                console.warn(_shared.REACT_REFRESH_FULL_RELOAD);
            } else if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
            }
            performFullReload(err, sendMessage);
            return;
        }
        _nextdevtools.dispatcher.onBuildOk();
        if (isUpdateAvailable()) {
            // While we were updating, there was a new update! Do it again.
            tryApplyUpdatesWebpack(sendMessage);
            return;
        }
        _nextdevtools.dispatcher.onRefresh();
        resolvePendingHotUpdateWebpack();
        (0, _reporthmrlatency.default)(sendMessage, updatedModules, webpackStartMsSinceEpoch, Date.now());
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    // https://webpack.js.org/api/hot-module-replacement/#check
    module.hot.check(/* autoApply */ false).then((updatedModules)=>{
        if (updatedModules == null) {
            return null;
        }
        // We should always handle an update, even if updatedModules is empty (but
        // non-null) for any reason. That's what webpack would normally do:
        // https://github.com/webpack/webpack/blob/3aa6b6bc3a64/lib/hmr/HotModuleReplacement.runtime.js#L296-L298
        _nextdevtools.dispatcher.onBeforeRefresh();
        // https://webpack.js.org/api/hot-module-replacement/#apply
        return module.hot.apply();
    }).then((updatedModules)=>{
        handleApplyUpdates(null, updatedModules);
    }, (err)=>{
        handleApplyUpdates(err, null);
    });
}
/** Handles messages from the server for the App Router. */ function processMessage(obj, sendMessage, processTurbopackMessage, router, appIsrManifestRef, pathnameRef) {
    if (!('action' in obj)) {
        return;
    }
    function handleErrors(errors) {
        // "Massage" webpack messages.
        const formatted = (0, _formatwebpackmessages.default)({
            errors: errors,
            warnings: []
        });
        // Only show the first error.
        _nextdevtools.dispatcher.onBuildError(formatted.errors[0]);
        // Also log them to the console.
        for(let i = 0; i < formatted.errors.length; i++){
            console.error((0, _stripansi.default)(formatted.errors[i]));
        }
        // Do not attempt to reload now.
        // We will reload on next success instead.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    function handleHotUpdate() {
        if ("TURBOPACK compile-time truthy", 1) {
            const hmrUpdate = turbopackHmr.onBuilt();
            if (hmrUpdate != null) {
                (0, _reporthmrlatency.default)(sendMessage, [
                    ...hmrUpdate.updatedModules
                ], hmrUpdate.startMsSinceEpoch, hmrUpdate.endMsSinceEpoch, hmrUpdate.hasUpdates);
            }
            _nextdevtools.dispatcher.onBuildOk();
        } else //TURBOPACK unreachable
        ;
    }
    switch(obj.action){
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.ISR_MANIFEST:
            {
                if ("TURBOPACK compile-time truthy", 1) {
                    if (appIsrManifestRef) {
                        appIsrManifestRef.current = obj.data;
                        // handle initial status on receiving manifest
                        // navigation is handled in useEffect for pathname changes
                        // as we'll receive the updated manifest before usePathname
                        // triggers for new value
                        if (pathnameRef.current in obj.data) {
                            _nextdevtools.dispatcher.onStaticIndicator(true);
                        } else {
                            _nextdevtools.dispatcher.onStaticIndicator(false);
                        }
                    }
                }
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
            {
                _nextdevtools.dispatcher.buildingIndicatorShow();
                if ("TURBOPACK compile-time truthy", 1) {
                    turbopackHmr.onBuilding();
                } else //TURBOPACK unreachable
                ;
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
            {
                _nextdevtools.dispatcher.buildingIndicatorHide();
                if (obj.hash) {
                    handleAvailableHash(obj.hash);
                }
                const { errors, warnings } = obj;
                // Is undefined when it's a 'built' event
                if ('versionInfo' in obj) _nextdevtools.dispatcher.onVersionInfo(obj.versionInfo);
                if ('debug' in obj && obj.debug) _nextdevtools.dispatcher.onDebugInfo(obj.debug);
                if ('devIndicator' in obj) _nextdevtools.dispatcher.onDevIndicator(obj.devIndicator);
                const hasErrors = Boolean(errors && errors.length);
                // Compilation with errors (e.g. syntax error or missing modules).
                if (hasErrors) {
                    sendMessage(JSON.stringify({
                        event: 'client-error',
                        errorCount: errors.length,
                        clientId: __nextDevClientId
                    }));
                    handleErrors(errors);
                    return;
                }
                const hasWarnings = Boolean(warnings && warnings.length);
                if (hasWarnings) {
                    sendMessage(JSON.stringify({
                        event: 'client-warning',
                        warningCount: warnings.length,
                        clientId: __nextDevClientId
                    }));
                    // Print warnings to the console.
                    const formattedMessages = (0, _formatwebpackmessages.default)({
                        warnings: warnings,
                        errors: []
                    });
                    for(let i = 0; i < formattedMessages.warnings.length; i++){
                        if (i === 5) {
                            console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
                            break;
                        }
                        console.warn((0, _stripansi.default)(formattedMessages.warnings[i]));
                    }
                // No early return here as we need to apply modules in the same way between warnings only and compiles without warnings
                }
                sendMessage(JSON.stringify({
                    event: 'client-success',
                    clientId: __nextDevClientId
                }));
                if (obj.action === _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT) {
                    handleHotUpdate();
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED:
            {
                processTurbopackMessage({
                    type: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED,
                    data: {
                        sessionId: obj.data.sessionId
                    }
                });
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE:
            {
                turbopackHmr.onTurbopackMessage(obj);
                _nextdevtools.dispatcher.onBeforeRefresh();
                processTurbopackMessage({
                    type: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE,
                    data: obj.data
                });
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                    performFullReload(null, sendMessage);
                }
                _nextdevtools.dispatcher.onRefresh();
                break;
            }
        // TODO-APP: make server component change more granular
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_COMPONENT_CHANGES:
            {
                turbopackHmr == null ? void 0 : turbopackHmr.onServerComponentChanges();
                sendMessage(JSON.stringify({
                    event: 'server-component-reload-page',
                    clientId: __nextDevClientId,
                    hash: obj.hash
                }));
                // Store the latest hash in a session cookie so that it's sent back to the
                // server with any subsequent requests.
                document.cookie = _approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE + "=" + obj.hash;
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    if (reloading) return;
                    reloading = true;
                    return window.location.reload();
                }
                (0, _react.startTransition)(()=>{
                    router.hmrRefresh();
                    _nextdevtools.dispatcher.onRefresh();
                });
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.RELOAD_PAGE:
            {
                turbopackHmr == null ? void 0 : turbopackHmr.onReloadPage();
                sendMessage(JSON.stringify({
                    event: 'client-reload-page',
                    clientId: __nextDevClientId
                }));
                if (reloading) return;
                reloading = true;
                return window.location.reload();
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.ADDED_PAGE:
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.REMOVED_PAGE:
            {
                turbopackHmr == null ? void 0 : turbopackHmr.onPageAddRemove();
                // TODO-APP: potentially only refresh if the currently viewed page was added/removed.
                return router.hmrRefresh();
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ERROR:
            {
                const { errorJSON } = obj;
                if (errorJSON) {
                    const { message, stack } = JSON.parse(errorJSON);
                    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                        value: "E394",
                        enumerable: false,
                        configurable: true
                    });
                    error.stack = stack;
                    handleErrors([
                        error
                    ]);
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.DEV_PAGES_MANIFEST_UPDATE:
            {
                return;
            }
        default:
            {}
    }
}
function HotReload(param) {
    let { assetPrefix, children, globalError } = param;
    (0, _useerrorhandler.useErrorHandler)(_nextdevtools.dispatcher.onUnhandledError, _nextdevtools.dispatcher.onUnhandledRejection);
    const webSocketRef = (0, _usewebsocket.useWebsocket)(assetPrefix);
    (0, _usewebsocket.useWebsocketPing)(webSocketRef);
    const sendMessage = (0, _usewebsocket.useSendMessage)(webSocketRef);
    (0, _useforwardconsolelog.useForwardConsoleLog)(webSocketRef);
    const processTurbopackMessage = (0, _usewebsocket.useTurbopack)(sendMessage, (err)=>performFullReload(err, sendMessage));
    const router = (0, _navigation.useRouter)();
    // We don't want access of the pathname for the dev tools to trigger a dynamic
    // access (as the dev overlay will never be present in production).
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    const appIsrManifestRef = (0, _react.useRef)({});
    const pathnameRef = (0, _react.useRef)(pathname);
    if ("TURBOPACK compile-time truthy", 1) {
        // this conditional is only for dead-code elimination which
        // isn't a runtime conditional only build-time so ignore hooks rule
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(()=>{
            pathnameRef.current = pathname;
            const appIsrManifest = appIsrManifestRef.current;
            if (appIsrManifest) {
                if (pathname && pathname in appIsrManifest) {
                    try {
                        _nextdevtools.dispatcher.onStaticIndicator(true);
                    } catch (reason) {
                        let message = '';
                        if (reason instanceof DOMException) {
                            var _reason_stack;
                            // Most likely a SecurityError, because of an unavailable localStorage
                            message = (_reason_stack = reason.stack) != null ? _reason_stack : reason.message;
                        } else if (reason instanceof Error) {
                            var _reason_stack1;
                            message = 'Error: ' + reason.message + '\n' + ((_reason_stack1 = reason.stack) != null ? _reason_stack1 : '');
                        } else {
                            message = 'Unexpected Exception: ' + reason;
                        }
                        console.warn('[HMR] ' + message);
                    }
                } else {
                    _nextdevtools.dispatcher.onStaticIndicator(false);
                }
            }
        }, [
            pathname
        ]);
    }
    (0, _react.useEffect)(()=>{
        const websocket = webSocketRef.current;
        if (!websocket) return;
        const handler = (event)=>{
            try {
                const obj = JSON.parse(event.data);
                processMessage(obj, sendMessage, processTurbopackMessage, router, appIsrManifestRef, pathnameRef);
            } catch (err) {
                (0, _shared.reportInvalidHmrMessage)(event, err);
            }
        };
        websocket.addEventListener('message', handler);
        return ()=>websocket.removeEventListener('message', handler);
    }, [
        sendMessage,
        router,
        webSocketRef,
        processTurbopackMessage,
        appIsrManifestRef
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_appdevoverlayerrorboundary.AppDevOverlayErrorBoundary, {
        globalError: globalError,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_replayssronlyerrors.ReplaySsrOnlyErrors, {
                onBlockingError: _nextdevtools.dispatcher.openErrorOverlay
            }),
            children
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hot-reloader-app.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createEmptyCacheNode: null,
    createPrefetchURL: null,
    default: null,
    isExternalURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createEmptyCacheNode: function() {
        return createEmptyCacheNode;
    },
    createPrefetchURL: function() {
        return createPrefetchURL;
    },
    default: function() {
        return AppRouter;
    },
    isExternalURL: function() {
        return isExternalURL;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
const _isbot = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _approuterannouncer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _findheadincache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _removebasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
const _navfailurehandler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _gracefuldegradeboundary = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/errors/graceful-degrade-boundary.js [app-client] (ecmascript)"));
const globalMutable = {};
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function createPrefetchURL(href) {
    // Don't prefetch for bots as they don't navigate.
    if ((0, _isbot.isBot)(window.navigator.userAgent)) {
        return null;
    }
    let url;
    try {
        url = new URL((0, _addbasepath.addBasePath)(href), window.location.href);
    } catch (_) {
        // TODO: Does this need to throw or can we just console.error instead? Does
        // anyone rely on this throwing? (Seems unlikely.)
        throw Object.defineProperty(new Error("Cannot prefetch '" + href + "' because it cannot be converted to a URL."), "__NEXT_ERROR_CODE", {
            value: "E234",
            enumerable: false,
            configurable: true
        });
    }
    // Don't prefetch during development (improves compilation performance)
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
function HistoryUpdater(param) {
    let { appRouterState } = param;
    (0, _react.useInsertionEffect)(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const { tree, pushRef, canonicalUrl } = appRouterState;
        const historyState = {
            ...pushRef.preserveCustomHistoryState ? window.history.state : {},
            // Identifier is shortened intentionally.
            // __NA is used to identify if the history entry can be handled by the app-router.
            // __N is used to identify if the history entry can be handled by the old router.
            __NA: true,
            __PRIVATE_NEXTJS_INTERNALS_TREE: tree
        };
        if (pushRef.pendingPush && // Skip pushing an additional history entry if the canonicalUrl is the same as the current url.
        // This mirrors the browser behavior for normal navigation.
        (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, '', canonicalUrl);
        } else {
            window.history.replaceState(historyState, '', canonicalUrl);
        }
    }, [
        appRouterState
    ]);
    (0, _react.useEffect)(()=>{
        // The Next-Url and the base tree may affect the result of a prefetch
        // task. Re-prefetch all visible links with the updated values. In most
        // cases, this will not result in any new network requests, only if
        // the prefetch result actually varies on one of these inputs.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        appRouterState.nextUrl,
        appRouterState.tree
    ]);
    return null;
}
function createEmptyCacheNode() {
    return {
        lazyData: null,
        rsc: null,
        prefetchRsc: null,
        head: null,
        prefetchHead: null,
        parallelRoutes: new Map(),
        loading: null,
        navigatedAt: -1
    };
}
function copyNextJsInternalHistoryState(data) {
    if (data == null) data = {};
    const currentState = window.history.state;
    const __NA = currentState == null ? void 0 : currentState.__NA;
    if (__NA) {
        data.__NA = __NA;
    }
    const __PRIVATE_NEXTJS_INTERNALS_TREE = currentState == null ? void 0 : currentState.__PRIVATE_NEXTJS_INTERNALS_TREE;
    if (__PRIVATE_NEXTJS_INTERNALS_TREE) {
        data.__PRIVATE_NEXTJS_INTERNALS_TREE = __PRIVATE_NEXTJS_INTERNALS_TREE;
    }
    return data;
}
function Head(param) {
    let { headCacheNode } = param;
    // If this segment has a `prefetchHead`, it's the statically prefetched data.
    // We should use that on initial render instead of `head`. Then we'll switch
    // to `head` when the dynamic response streams in.
    const head = headCacheNode !== null ? headCacheNode.head : null;
    const prefetchHead = headCacheNode !== null ? headCacheNode.prefetchHead : null;
    // If no prefetch data is available, then we go straight to rendering `head`.
    const resolvedPrefetchRsc = prefetchHead !== null ? prefetchHead : head;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    return (0, _react.useDeferredValue)(head, resolvedPrefetchRsc);
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { actionQueue, assetPrefix, globalError, gracefullyDegrade } = param;
    const state = (0, _useactionqueue.useActionQueue)(actionQueue);
    const { canonicalUrl } = state;
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl, typeof window === 'undefined' ? 'http://n' : window.location.href);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { cache, prefetchCache, tree } = state;
        // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(()=>{
            // Add `window.nd` for debugging purposes.
            // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
            // @ts-ignore this is for debugging
            window.nd = {
                router: _approuterinstance.publicAppRouterInstance,
                cache,
                prefetchCache,
                tree
            };
        }, [
            cache,
            prefetchCache,
            tree
        ]);
    }
    (0, _react.useEffect)(()=>{
        // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            var _window_history_state;
            if (!event.persisted || !((_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE)) {
                return;
            }
            // Clear the pendingMpaPath value so that a subsequent MPA navigation to the same URL can be triggered.
            // This is necessary because if the browser restored from bfcache, the pendingMpaPath would still be set to the value
            // of the last MPA navigation.
            globalMutable.pendingMpaPath = undefined;
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
            });
        }
        window.addEventListener('pageshow', handlePageShow);
        return ()=>{
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, []);
    (0, _react.useEffect)(()=>{
        // Ensure that any redirect errors that bubble up outside of the RedirectBoundary
        // are caught and handled by the router.
        function handleUnhandledRedirect(event) {
            const error = 'reason' in event ? event.reason : event.error;
            if ((0, _redirecterror.isRedirectError)(error)) {
                event.preventDefault();
                const url = (0, _redirect.getURLFromRedirectError)(error);
                const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
                // TODO: This should access the router methods directly, rather than
                // go through the public interface.
                if (redirectType === _redirecterror.RedirectType.push) {
                    _approuterinstance.publicAppRouterInstance.push(url, {});
                } else {
                    _approuterinstance.publicAppRouterInstance.replace(url, {});
                }
            }
        }
        window.addEventListener('error', handleUnhandledRedirect);
        window.addEventListener('unhandledrejection', handleUnhandledRedirect);
        return ()=>{
            window.removeEventListener('error', handleUnhandledRedirect);
            window.removeEventListener('unhandledrejection', handleUnhandledRedirect);
        };
    }, []);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    const { pushRef } = state;
    if (pushRef.mpaNavigation) {
        // if there's a re-render, we don't want to trigger another redirect if one is already in flight to the same URL
        if (globalMutable.pendingMpaPath !== canonicalUrl) {
            const location = window.location;
            if (pushRef.pendingPush) {
                location.assign(canonicalUrl);
            } else {
                location.replace(canonicalUrl);
            }
            globalMutable.pendingMpaPath = canonicalUrl;
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        // NOTE: This is intentionally using `throw` instead of `use` because we're
        // inside an externally mutable condition (pushRef.mpaNavigation), which
        // violates the rules of hooks.
        throw _unresolvedthenable.unresolvedThenable;
    }
    (0, _react.useEffect)(()=>{
        const originalPushState = window.history.pushState.bind(window.history);
        const originalReplaceState = window.history.replaceState.bind(window.history);
        // Ensure the canonical URL in the Next.js Router is updated when the URL is changed so that `usePathname` and `useSearchParams` hold the pushed values.
        const applyUrlFromHistoryPushReplace = (url)=>{
            var _window_history_state;
            const href = window.location.href;
            const tree = (_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE;
            (0, _react.startTransition)(()=>{
                (0, _useactionqueue.dispatchAppRouterAction)({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(url != null ? url : href, href),
                    tree
                });
            });
        };
        /**
     * Patch pushState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.pushState = function pushState(data, _unused, url) {
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data == null ? void 0 : data.__NA) || (data == null ? void 0 : data._N)) {
                return originalPushState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalPushState(data, _unused, url);
        };
        /**
     * Patch replaceState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.replaceState = function replaceState(data, _unused, url) {
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data == null ? void 0 : data.__NA) || (data == null ? void 0 : data._N)) {
                return originalReplaceState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalReplaceState(data, _unused, url);
        };
        /**
     * Handle popstate event, this is used to handle back/forward in the browser.
     * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
     * That case can happen when the old router injected the history entry.
     */ const onPopState = (event)=>{
            if (!event.state) {
                // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
                return;
            }
            // This case happens when the history entry was pushed by the `pages` router.
            if (!event.state.__NA) {
                window.location.reload();
                return;
            }
            // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
            // Without startTransition works if the cache is there for this path
            (0, _react.startTransition)(()=>{
                (0, _approuterinstance.dispatchTraverseAction)(window.location.href, event.state.__PRIVATE_NEXTJS_INTERNALS_TREE);
            });
        };
        // Register popstate event to call onPopstate.
        window.addEventListener('popstate', onPopState);
        return ()=>{
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
            window.removeEventListener('popstate', onPopState);
        };
    }, []);
    const { cache, tree, nextUrl, focusAndScrollRef } = state;
    const matchingHead = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    // Add memoized pathParams for useParams.
    const pathParams = (0, _react.useMemo)(()=>{
        return (0, _computechangedpath.getSelectedParams)(tree);
    }, [
        tree
    ]);
    const layoutRouterContext = (0, _react.useMemo)(()=>{
        return {
            parentTree: tree,
            parentCacheNode: cache,
            parentSegmentPath: null,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl
        };
    }, [
        tree,
        cache,
        canonicalUrl
    ]);
    const globalLayoutRouterContext = (0, _react.useMemo)(()=>{
        return {
            tree,
            focusAndScrollRef,
            nextUrl
        };
    }, [
        tree,
        focusAndScrollRef,
        nextUrl
    ]);
    let head;
    if (matchingHead !== null) {
        // The head is wrapped in an extra component so we can use
        // `useDeferredValue` to swap between the prefetched and final versions of
        // the head. (This is what LayoutRouter does for segment data, too.)
        //
        // The `key` is used to remount the component whenever the head moves to
        // a different segment.
        const [headCacheNode, headKey] = matchingHead;
        head = /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
            headCacheNode: headCacheNode
        }, headKey);
    } else {
        head = null;
    }
    let content = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
        children: [
            head,
            cache.rsc,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuterannouncer.AppRouterAnnouncer, {
                tree: tree
            })
        ]
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // In development, we apply few error boundaries and hot-reloader:
        // - DevRootHTTPAccessFallbackBoundary: avoid using navigation API like notFound() in root layout
        // - HotReloader:
        //  - hot-reload the app when the code changes
        //  - render dev overlay
        //  - catch runtime errors and display global-error when necessary
        if (typeof window !== 'undefined') {
            const { DevRootHTTPAccessFallbackBoundary } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)");
            content = /*#__PURE__*/ (0, _jsxruntime.jsx)(DevRootHTTPAccessFallbackBoundary, {
                children: content
            });
        }
        const HotReloader = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)").default;
        content = /*#__PURE__*/ (0, _jsxruntime.jsx)(HotReloader, {
            assetPrefix: assetPrefix,
            globalError: globalError,
            children: content
        });
    } else //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(HistoryUpdater, {
                appRouterState: state
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(RuntimeStyles, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathParamsContext.Provider, {
                value: pathParams,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathnameContext.Provider, {
                    value: pathname,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
                        value: searchParams,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.GlobalLayoutRouterContext.Provider, {
                            value: globalLayoutRouterContext,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.AppRouterContext.Provider, {
                                value: _approuterinstance.publicAppRouterInstance,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
                                    value: layoutRouterContext,
                                    children: content
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
function AppRouter(param) {
    let { actionQueue, globalErrorState, assetPrefix, gracefullyDegrade } = param;
    (0, _navfailurehandler.useNavFailureHandler)();
    const router = /*#__PURE__*/ (0, _jsxruntime.jsx)(Router, {
        actionQueue: actionQueue,
        assetPrefix: assetPrefix,
        globalError: globalErrorState,
        gracefullyDegrade: gracefullyDegrade
    });
    if (gracefullyDegrade) {
        return router;
    } else {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
            // At the very top level, use the default GlobalError component as the final fallback.
            // When the app router itself fails, which means the framework itself fails, we show the default error.
            errorComponent: _globalerror.default,
            children: router
        });
    }
}
const runtimeStyles = new Set();
let runtimeStyleChanged = new Set();
globalThis._N_E_STYLE_LOAD = function(href) {
    let len = runtimeStyles.size;
    runtimeStyles.add(href);
    if (runtimeStyles.size !== len) {
        runtimeStyleChanged.forEach((cb)=>cb());
    }
    // TODO figure out how to get a promise here
    // But maybe it's not necessary as react would block rendering until it's loaded
    return Promise.resolve();
};
function RuntimeStyles() {
    const [, forceUpdate] = _react.default.useState(0);
    const renderedStylesSize = runtimeStyles.size;
    (0, _react.useEffect)(()=>{
        const changed = ()=>forceUpdate((c)=>c + 1);
        runtimeStyleChanged.add(changed);
        if (renderedStylesSize !== runtimeStyles.size) {
            changed();
        }
        return ()=>{
            runtimeStyleChanged.delete(changed);
        };
    }, [
        renderedStylesSize,
        forceUpdate
    ]);
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return [
        ...runtimeStyles
    ].map((href, i)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "stylesheet",
            href: "" + href + dplId,
            // @ts-ignore
            precedence: "next"
        }, i));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    abortTask: null,
    listenForDynamicRequest: null,
    startPPRNavigation: null,
    updateCacheNodeOnPopstateRestoration: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    abortTask: function() {
        return abortTask;
    },
    listenForDynamicRequest: function() {
        return listenForDynamicRequest;
    },
    startPPRNavigation: function() {
        return startPPRNavigation;
    },
    updateCacheNodeOnPopstateRestoration: function() {
        return updateCacheNodeOnPopstateRestoration;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _prefetchcacheutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/prefetch-cache-utils.js [app-client] (ecmascript)");
const MPA_NAVIGATION_TASK = {
    route: null,
    node: null,
    dynamicRequestTree: null,
    children: null
};
function startPPRNavigation(navigatedAt, oldCacheNode, oldRouterState, newRouterState, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, scrollableSegmentsResult) {
    const segmentPath = [];
    return updateCacheNodeOnNavigation(navigatedAt, oldCacheNode, oldRouterState, newRouterState, false, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, segmentPath, scrollableSegmentsResult);
}
function updateCacheNodeOnNavigation(navigatedAt, oldCacheNode, oldRouterState, newRouterState, didFindRootLayout, prefetchData, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, segmentPath, scrollableSegmentsResult) {
    // Diff the old and new trees to reuse the shared layouts.
    const oldRouterStateChildren = oldRouterState[1];
    const newRouterStateChildren = newRouterState[1];
    const prefetchDataChildren = prefetchData !== null ? prefetchData[2] : null;
    if (!didFindRootLayout) {
        // We're currently traversing the part of the tree that was also part of
        // the previous route. If we discover a root layout, then we don't need to
        // trigger an MPA navigation. See beginRenderingNewRouteTree for context.
        const isRootLayout = newRouterState[4] === true;
        if (isRootLayout) {
            // Found a matching root layout.
            didFindRootLayout = true;
        }
    }
    const oldParallelRoutes = oldCacheNode.parallelRoutes;
    // Clone the current set of segment children, even if they aren't active in
    // the new tree.
    // TODO: We currently retain all the inactive segments indefinitely, until
    // there's an explicit refresh, or a parent layout is lazily refreshed. We
    // rely on this for popstate navigations, which update the Router State Tree
    // but do not eagerly perform a data fetch, because they expect the segment
    // data to already be in the Cache Node tree. For highly static sites that
    // are mostly read-only, this may happen only rarely, causing memory to
    // leak. We should figure out a better model for the lifetime of inactive
    // segments, so we can maintain instant back/forward navigations without
    // leaking memory indefinitely.
    const prefetchParallelRoutes = new Map(oldParallelRoutes);
    // As we diff the trees, we may sometimes modify (copy-on-write, not mutate)
    // the Route Tree that was returned by the server — for example, in the case
    // of default parallel routes, we preserve the currently active segment. To
    // avoid mutating the original tree, we clone the router state children along
    // the return path.
    let patchedRouterStateChildren = {};
    let taskChildren = null;
    // Most navigations require a request to fetch additional data from the
    // server, either because the data was not already prefetched, or because the
    // target route contains dynamic data that cannot be prefetched.
    //
    // However, if the target route is fully static, and it's already completely
    // loaded into the segment cache, then we can skip the server request.
    //
    // This starts off as `false`, and is set to `true` if any of the child
    // routes requires a dynamic request.
    let needsDynamicRequest = false;
    // As we traverse the children, we'll construct a FlightRouterState that can
    // be sent to the server to request the dynamic data. If it turns out that
    // nothing in the subtree is dynamic (i.e. needsDynamicRequest is false at the
    // end), then this will be discarded.
    // TODO: We can probably optimize the format of this data structure to only
    // include paths that are dynamic. Instead of reusing the
    // FlightRouterState type.
    let dynamicRequestTreeChildren = {};
    for(let parallelRouteKey in newRouterStateChildren){
        const newRouterStateChild = newRouterStateChildren[parallelRouteKey];
        const oldRouterStateChild = oldRouterStateChildren[parallelRouteKey];
        const oldSegmentMapChild = oldParallelRoutes.get(parallelRouteKey);
        const prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
        const newSegmentChild = newRouterStateChild[0];
        const newSegmentPathChild = segmentPath.concat([
            parallelRouteKey,
            newSegmentChild
        ]);
        const newSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(newSegmentChild);
        const oldSegmentChild = oldRouterStateChild !== undefined ? oldRouterStateChild[0] : undefined;
        const oldCacheNodeChild = oldSegmentMapChild !== undefined ? oldSegmentMapChild.get(newSegmentKeyChild) : undefined;
        let taskChild;
        if (newSegmentChild === _segment.DEFAULT_SEGMENT_KEY) {
            // This is another kind of leaf segment — a default route.
            //
            // Default routes have special behavior. When there's no matching segment
            // for a parallel route, Next.js preserves the currently active segment
            // during a client navigation — but not for initial render. The server
            // leaves it to the client to account for this. So we need to handle
            // it here.
            if (oldRouterStateChild !== undefined) {
                // Reuse the existing Router State for this segment. We spawn a "task"
                // just to keep track of the updated router state; unlike most, it's
                // already fulfilled and won't be affected by the dynamic response.
                taskChild = spawnReusedTask(oldRouterStateChild);
            } else {
                // There's no currently active segment. Switch to the "create" path.
                taskChild = beginRenderingNewRouteTree(navigatedAt, oldRouterStateChild, newRouterStateChild, oldCacheNodeChild, didFindRootLayout, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead, isPrefetchHeadPartial, newSegmentPathChild, scrollableSegmentsResult);
            }
        } else if (isSamePageNavigation && // Check if this is a page segment.
        // TODO: We're not consistent about how we do this check. Some places
        // check if the segment starts with PAGE_SEGMENT_KEY, but most seem to
        // check if there any any children, which is why I'm doing it here. We
        // should probably encode an empty children set as `null` though. Either
        // way, we should update all the checks to be consistent.
        Object.keys(newRouterStateChild[1]).length === 0) {
            // We special case navigations to the exact same URL as the current
            // location. It's a common UI pattern for apps to refresh when you click a
            // link to the current page. So when this happens, we refresh the dynamic
            // data in the page segments.
            //
            // Note that this does not apply if the any part of the hash or search
            // query has changed. This might feel a bit weird but it makes more sense
            // when you consider that the way to trigger this behavior is to click
            // the same link multiple times.
            //
            // TODO: We should probably refresh the *entire* route when this case
            // occurs, not just the page segments. Essentially treating it the same as
            // a refresh() triggered by an action, which is the more explicit way of
            // modeling the UI pattern described above.
            //
            // Also note that this only refreshes the dynamic data, not static/
            // cached data. If the page segment is fully static and prefetched, the
            // request is skipped. (This is also how refresh() works.)
            taskChild = beginRenderingNewRouteTree(navigatedAt, oldRouterStateChild, newRouterStateChild, oldCacheNodeChild, didFindRootLayout, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead, isPrefetchHeadPartial, newSegmentPathChild, scrollableSegmentsResult);
        } else if (oldRouterStateChild !== undefined && oldSegmentChild !== undefined && (0, _matchsegments.matchSegment)(newSegmentChild, oldSegmentChild)) {
            if (oldCacheNodeChild !== undefined && oldRouterStateChild !== undefined) {
                // This segment exists in both the old and new trees. Recursively update
                // the children.
                taskChild = updateCacheNodeOnNavigation(navigatedAt, oldCacheNodeChild, oldRouterStateChild, newRouterStateChild, didFindRootLayout, prefetchDataChild, prefetchHead, isPrefetchHeadPartial, isSamePageNavigation, newSegmentPathChild, scrollableSegmentsResult);
            } else {
                // There's no existing Cache Node for this segment. Switch to the
                // "create" path.
                taskChild = beginRenderingNewRouteTree(navigatedAt, oldRouterStateChild, newRouterStateChild, oldCacheNodeChild, didFindRootLayout, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead, isPrefetchHeadPartial, newSegmentPathChild, scrollableSegmentsResult);
            }
        } else {
            // This is a new tree. Switch to the "create" path.
            taskChild = beginRenderingNewRouteTree(navigatedAt, oldRouterStateChild, newRouterStateChild, oldCacheNodeChild, didFindRootLayout, prefetchDataChild !== undefined ? prefetchDataChild : null, prefetchHead, isPrefetchHeadPartial, newSegmentPathChild, scrollableSegmentsResult);
        }
        if (taskChild !== null) {
            // Recursively propagate up the child tasks.
            if (taskChild.route === null) {
                // One of the child tasks discovered a change to the root layout.
                // Immediately unwind from this recursive traversal.
                return MPA_NAVIGATION_TASK;
            }
            if (taskChildren === null) {
                taskChildren = new Map();
            }
            taskChildren.set(parallelRouteKey, taskChild);
            const newCacheNodeChild = taskChild.node;
            if (newCacheNodeChild !== null) {
                const newSegmentMapChild = new Map(oldSegmentMapChild);
                newSegmentMapChild.set(newSegmentKeyChild, newCacheNodeChild);
                prefetchParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
            }
            // The child tree's route state may be different from the prefetched
            // route sent by the server. We need to clone it as we traverse back up
            // the tree.
            const taskChildRoute = taskChild.route;
            patchedRouterStateChildren[parallelRouteKey] = taskChildRoute;
            const dynamicRequestTreeChild = taskChild.dynamicRequestTree;
            if (dynamicRequestTreeChild !== null) {
                // Something in the child tree is dynamic.
                needsDynamicRequest = true;
                dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
            } else {
                dynamicRequestTreeChildren[parallelRouteKey] = taskChildRoute;
            }
        } else {
            // The child didn't change. We can use the prefetched router state.
            patchedRouterStateChildren[parallelRouteKey] = newRouterStateChild;
            dynamicRequestTreeChildren[parallelRouteKey] = newRouterStateChild;
        }
    }
    if (taskChildren === null) {
        // No new tasks were spawned.
        return null;
    }
    const newCacheNode = {
        lazyData: null,
        rsc: oldCacheNode.rsc,
        // We intentionally aren't updating the prefetchRsc field, since this node
        // is already part of the current tree, because it would be weird for
        // prefetch data to be newer than the final data. It probably won't ever be
        // observable anyway, but it could happen if the segment is unmounted then
        // mounted again, because LayoutRouter will momentarily switch to rendering
        // prefetchRsc, via useDeferredValue.
        prefetchRsc: oldCacheNode.prefetchRsc,
        head: oldCacheNode.head,
        prefetchHead: oldCacheNode.prefetchHead,
        loading: oldCacheNode.loading,
        // Everything is cloned except for the children, which we computed above.
        parallelRoutes: prefetchParallelRoutes,
        navigatedAt
    };
    return {
        // Return a cloned copy of the router state with updated children.
        route: patchRouterStateWithNewChildren(newRouterState, patchedRouterStateChildren),
        node: newCacheNode,
        dynamicRequestTree: needsDynamicRequest ? patchRouterStateWithNewChildren(newRouterState, dynamicRequestTreeChildren) : null,
        children: taskChildren
    };
}
function beginRenderingNewRouteTree(navigatedAt, oldRouterState, newRouterState, existingCacheNode, didFindRootLayout, prefetchData, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult) {
    if (!didFindRootLayout) {
        // The route tree changed before we reached a layout. (The highest-level
        // layout in a route tree is referred to as the "root" layout.) This could
        // mean that we're navigating between two different root layouts. When this
        // happens, we perform a full-page (MPA-style) navigation.
        //
        // However, the algorithm for deciding where to start rendering a route
        // (i.e. the one performed in order to reach this function) is stricter
        // than the one used to detect a change in the root layout. So just because
        // we're re-rendering a segment outside of the root layout does not mean we
        // should trigger a full-page navigation.
        //
        // Specifically, we handle dynamic parameters differently: two segments are
        // considered the same even if their parameter values are different.
        //
        // Refer to isNavigatingToNewRootLayout for details.
        //
        // Note that we only have to perform this extra traversal if we didn't
        // already discover a root layout in the part of the tree that is unchanged.
        // In the common case, this branch is skipped completely.
        if (oldRouterState === undefined || (0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(oldRouterState, newRouterState)) {
            // The root layout changed. Perform a full-page navigation.
            return MPA_NAVIGATION_TASK;
        }
    }
    return createCacheNodeOnNavigation(navigatedAt, newRouterState, existingCacheNode, prefetchData, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult);
}
function createCacheNodeOnNavigation(navigatedAt, routerState, existingCacheNode, prefetchData, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult) {
    // Same traversal as updateCacheNodeNavigation, but we switch to this path
    // once we reach the part of the tree that was not in the previous route. We
    // don't need to diff against the old tree, we just need to create a new one.
    // The head is assigned to every leaf segment delivered by the server. Based
    // on corresponding logic in fill-lazy-items-till-leaf-with-head.ts
    const routerStateChildren = routerState[1];
    const isLeafSegment = Object.keys(routerStateChildren).length === 0;
    // Even we're rendering inside the "new" part of the target tree, we may have
    // a locally cached segment that we can reuse. This may come from either 1)
    // the CacheNode tree, which lives in React state and is populated by previous
    // navigations; or 2) the prefetch cache, which is a separate cache that is
    // populated by prefetches.
    let rsc;
    let loading;
    let head;
    let cacheNodeNavigatedAt;
    if (existingCacheNode !== undefined && // DYNAMIC_STALETIME_MS defaults to 0, but it can be increased using
    // the experimental.staleTimes.dynamic config. When set, we'll avoid
    // refetching dynamic data if it was fetched within the given threshold.
    existingCacheNode.navigatedAt + _prefetchcacheutils.DYNAMIC_STALETIME_MS > navigatedAt) {
        // We have an existing CacheNode for this segment, and it's not stale. We
        // should reuse it rather than request a new one.
        rsc = existingCacheNode.rsc;
        loading = existingCacheNode.loading;
        head = existingCacheNode.head;
        // Don't update the navigatedAt timestamp, since we're reusing stale data.
        cacheNodeNavigatedAt = existingCacheNode.navigatedAt;
    } else if (prefetchData !== null) {
        // There's no existing CacheNode for this segment, but we do have prefetch
        // data. If the prefetch data is fully static (i.e. does not contain any
        // dynamic holes), we don't need to request it from the server.
        rsc = prefetchData[1];
        loading = prefetchData[3];
        head = isLeafSegment ? possiblyPartialPrefetchHead : null;
        // Even though we're accessing the data from the prefetch cache, this is
        // conceptually a new segment, not a reused one. So we should update the
        // navigatedAt timestamp.
        cacheNodeNavigatedAt = navigatedAt;
        const isPrefetchRscPartial = prefetchData[4];
        if (isPrefetchRscPartial || // Check if the head is partial (only relevant if this is a leaf segment)
        isPrefetchHeadPartial && isLeafSegment) {
            // We only have partial data from this segment. Like missing segments, we
            // must request the full data from the server.
            return spawnPendingTask(navigatedAt, routerState, prefetchData, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult);
        } else {
        // The prefetch data is fully static, so we can omit it from the
        // navigation request.
        }
    } else {
        // There's no prefetch for this segment. Everything from this point will be
        // requested from the server, even if there are static children below it.
        // Create a terminal task node that will later be fulfilled by
        // server response.
        return spawnPendingTask(navigatedAt, routerState, null, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult);
    }
    // We already have a full segment we can render, so we don't need to request a
    // new one from the server. Keep traversing down the tree until we reach
    // something that requires a dynamic request.
    const prefetchDataChildren = prefetchData !== null ? prefetchData[2] : null;
    const taskChildren = new Map();
    const existingCacheNodeChildren = existingCacheNode !== undefined ? existingCacheNode.parallelRoutes : null;
    const cacheNodeChildren = new Map(existingCacheNodeChildren);
    let dynamicRequestTreeChildren = {};
    let needsDynamicRequest = false;
    if (isLeafSegment) {
        // The segment path of every leaf segment (i.e. page) is collected into
        // a result array. This is used by the LayoutRouter to scroll to ensure that
        // new pages are visible after a navigation.
        // TODO: We should use a string to represent the segment path instead of
        // an array. We already use a string representation for the path when
        // accessing the Segment Cache, so we can use the same one.
        scrollableSegmentsResult.push(segmentPath);
    } else {
        for(let parallelRouteKey in routerStateChildren){
            const routerStateChild = routerStateChildren[parallelRouteKey];
            const prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
            const existingSegmentMapChild = existingCacheNodeChildren !== null ? existingCacheNodeChildren.get(parallelRouteKey) : undefined;
            const segmentChild = routerStateChild[0];
            const segmentPathChild = segmentPath.concat([
                parallelRouteKey,
                segmentChild
            ]);
            const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
            const existingCacheNodeChild = existingSegmentMapChild !== undefined ? existingSegmentMapChild.get(segmentKeyChild) : undefined;
            const taskChild = createCacheNodeOnNavigation(navigatedAt, routerStateChild, existingCacheNodeChild, prefetchDataChild, possiblyPartialPrefetchHead, isPrefetchHeadPartial, segmentPathChild, scrollableSegmentsResult);
            taskChildren.set(parallelRouteKey, taskChild);
            const dynamicRequestTreeChild = taskChild.dynamicRequestTree;
            if (dynamicRequestTreeChild !== null) {
                // Something in the child tree is dynamic.
                needsDynamicRequest = true;
                dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
            } else {
                dynamicRequestTreeChildren[parallelRouteKey] = routerStateChild;
            }
            const newCacheNodeChild = taskChild.node;
            if (newCacheNodeChild !== null) {
                const newSegmentMapChild = new Map();
                newSegmentMapChild.set(segmentKeyChild, newCacheNodeChild);
                cacheNodeChildren.set(parallelRouteKey, newSegmentMapChild);
            }
        }
    }
    return {
        // Since we're inside a new route tree, unlike the
        // `updateCacheNodeOnNavigation` path, the router state on the children
        // tasks is always the same as the router state we pass in. So we don't need
        // to clone/modify it.
        route: routerState,
        node: {
            lazyData: null,
            // Since this segment is already full, we don't need to use the
            // `prefetchRsc` field.
            rsc,
            prefetchRsc: null,
            head,
            prefetchHead: null,
            loading,
            parallelRoutes: cacheNodeChildren,
            navigatedAt: cacheNodeNavigatedAt
        },
        dynamicRequestTree: needsDynamicRequest ? patchRouterStateWithNewChildren(routerState, dynamicRequestTreeChildren) : null,
        children: taskChildren
    };
}
function patchRouterStateWithNewChildren(baseRouterState, newChildren) {
    const clone = [
        baseRouterState[0],
        newChildren
    ];
    // Based on equivalent logic in apply-router-state-patch-to-tree, but should
    // confirm whether we need to copy all of these fields. Not sure the server
    // ever sends, e.g. the refetch marker.
    if (2 in baseRouterState) {
        clone[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clone[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clone[4] = baseRouterState[4];
    }
    return clone;
}
function spawnPendingTask(navigatedAt, routerState, prefetchData, prefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult) {
    // Create a task that will later be fulfilled by data from the server.
    // Clone the prefetched route tree and the `refetch` marker to it. We'll send
    // this to the server so it knows where to start rendering.
    const dynamicRequestTree = patchRouterStateWithNewChildren(routerState, routerState[1]);
    dynamicRequestTree[3] = 'refetch';
    const newTask = {
        route: routerState,
        // Corresponds to the part of the route that will be rendered on the server.
        node: createPendingCacheNode(navigatedAt, routerState, prefetchData, prefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult),
        // Because this is non-null, and it gets propagated up through the parent
        // tasks, the root task will know that it needs to perform a server request.
        dynamicRequestTree,
        children: null
    };
    return newTask;
}
function spawnReusedTask(reusedRouterState) {
    // Create a task that reuses an existing segment, e.g. when reusing
    // the current active segment in place of a default route.
    return {
        route: reusedRouterState,
        node: null,
        dynamicRequestTree: null,
        children: null
    };
}
function listenForDynamicRequest(task, responsePromise) {
    responsePromise.then((param)=>{
        let { flightData } = param;
        if (typeof flightData === 'string') {
            // Happens when navigating to page in `pages` from `app`. We shouldn't
            // get here because should have already handled this during
            // the prefetch.
            return;
        }
        for (const normalizedFlightData of flightData){
            const { segmentPath, tree: serverRouterState, seedData: dynamicData, head: dynamicHead } = normalizedFlightData;
            if (!dynamicData) {
                continue;
            }
            writeDynamicDataIntoPendingTask(task, segmentPath, serverRouterState, dynamicData, dynamicHead);
        }
        // Now that we've exhausted all the data we received from the server, if
        // there are any remaining pending tasks in the tree, abort them now.
        // If there's any missing data, it will trigger a lazy fetch.
        abortTask(task, null);
    }, (error)=>{
        // This will trigger an error during render
        abortTask(task, error);
    });
}
function writeDynamicDataIntoPendingTask(rootTask, segmentPath, serverRouterState, dynamicData, dynamicHead) {
    // The data sent by the server represents only a subtree of the app. We need
    // to find the part of the task tree that matches the server response, and
    // fulfill it using the dynamic data.
    //
    // segmentPath represents the parent path of subtree. It's a repeating pattern
    // of parallel route key and segment:
    //
    //   [string, Segment, string, Segment, string, Segment, ...]
    //
    // Iterate through the path and finish any tasks that match this payload.
    let task = rootTask;
    for(let i = 0; i < segmentPath.length; i += 2){
        const parallelRouteKey = segmentPath[i];
        const segment = segmentPath[i + 1];
        const taskChildren = task.children;
        if (taskChildren !== null) {
            const taskChild = taskChildren.get(parallelRouteKey);
            if (taskChild !== undefined) {
                const taskSegment = taskChild.route[0];
                if ((0, _matchsegments.matchSegment)(segment, taskSegment)) {
                    // Found a match for this task. Keep traversing down the task tree.
                    task = taskChild;
                    continue;
                }
            }
        }
        // We didn't find a child task that matches the server data. Exit. We won't
        // abort the task, though, because a different FlightDataPath may be able to
        // fulfill it (see loop in listenForDynamicRequest). We only abort tasks
        // once we've run out of data.
        return;
    }
    finishTaskUsingDynamicDataPayload(task, serverRouterState, dynamicData, dynamicHead);
}
function finishTaskUsingDynamicDataPayload(task, serverRouterState, dynamicData, dynamicHead) {
    if (task.dynamicRequestTree === null) {
        // Everything in this subtree is already complete. Bail out.
        return;
    }
    // dynamicData may represent a larger subtree than the task. Before we can
    // finish the task, we need to line them up.
    const taskChildren = task.children;
    const taskNode = task.node;
    if (taskChildren === null) {
        // We've reached the leaf node of the pending task. The server data tree
        // lines up the pending Cache Node tree. We can now switch to the
        // normal algorithm.
        if (taskNode !== null) {
            finishPendingCacheNode(taskNode, task.route, serverRouterState, dynamicData, dynamicHead);
            // Set this to null to indicate that this task is now complete.
            task.dynamicRequestTree = null;
        }
        return;
    }
    // The server returned more data than we need to finish the task. Skip over
    // the extra segments until we reach the leaf task node.
    const serverChildren = serverRouterState[1];
    const dynamicDataChildren = dynamicData[2];
    for(const parallelRouteKey in serverRouterState){
        const serverRouterStateChild = serverChildren[parallelRouteKey];
        const dynamicDataChild = dynamicDataChildren[parallelRouteKey];
        const taskChild = taskChildren.get(parallelRouteKey);
        if (taskChild !== undefined) {
            const taskSegment = taskChild.route[0];
            if ((0, _matchsegments.matchSegment)(serverRouterStateChild[0], taskSegment) && dynamicDataChild !== null && dynamicDataChild !== undefined) {
                // Found a match for this task. Keep traversing down the task tree.
                return finishTaskUsingDynamicDataPayload(taskChild, serverRouterStateChild, dynamicDataChild, dynamicHead);
            }
        }
    // We didn't find a child task that matches the server data. We won't abort
    // the task, though, because a different FlightDataPath may be able to
    // fulfill it (see loop in listenForDynamicRequest). We only abort tasks
    // once we've run out of data.
    }
}
function createPendingCacheNode(navigatedAt, routerState, prefetchData, prefetchHead, isPrefetchHeadPartial, segmentPath, scrollableSegmentsResult) {
    const routerStateChildren = routerState[1];
    const prefetchDataChildren = prefetchData !== null ? prefetchData[2] : null;
    const parallelRoutes = new Map();
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const prefetchDataChild = prefetchDataChildren !== null ? prefetchDataChildren[parallelRouteKey] : null;
        const segmentChild = routerStateChild[0];
        const segmentPathChild = segmentPath.concat([
            parallelRouteKey,
            segmentChild
        ]);
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const newCacheNodeChild = createPendingCacheNode(navigatedAt, routerStateChild, prefetchDataChild === undefined ? null : prefetchDataChild, prefetchHead, isPrefetchHeadPartial, segmentPathChild, scrollableSegmentsResult);
        const newSegmentMapChild = new Map();
        newSegmentMapChild.set(segmentKeyChild, newCacheNodeChild);
        parallelRoutes.set(parallelRouteKey, newSegmentMapChild);
    }
    // The head is assigned to every leaf segment delivered by the server. Based
    // on corresponding logic in fill-lazy-items-till-leaf-with-head.ts
    const isLeafSegment = parallelRoutes.size === 0;
    if (isLeafSegment) {
        // The segment path of every leaf segment (i.e. page) is collected into
        // a result array. This is used by the LayoutRouter to scroll to ensure that
        // new pages are visible after a navigation.
        // TODO: We should use a string to represent the segment path instead of
        // an array. We already use a string representation for the path when
        // accessing the Segment Cache, so we can use the same one.
        scrollableSegmentsResult.push(segmentPath);
    }
    const maybePrefetchRsc = prefetchData !== null ? prefetchData[1] : null;
    const maybePrefetchLoading = prefetchData !== null ? prefetchData[3] : null;
    return {
        lazyData: null,
        parallelRoutes: parallelRoutes,
        prefetchRsc: maybePrefetchRsc !== undefined ? maybePrefetchRsc : null,
        prefetchHead: isLeafSegment ? prefetchHead : [
            null,
            null
        ],
        // TODO: Technically, a loading boundary could contain dynamic data. We must
        // have separate `loading` and `prefetchLoading` fields to handle this, like
        // we do for the segment data and head.
        loading: maybePrefetchLoading !== undefined ? maybePrefetchLoading : null,
        // Create a deferred promise. This will be fulfilled once the dynamic
        // response is received from the server.
        rsc: createDeferredRsc(),
        head: isLeafSegment ? createDeferredRsc() : null,
        navigatedAt
    };
}
function finishPendingCacheNode(cacheNode, taskState, serverState, dynamicData, dynamicHead) {
    // Writes a dynamic response into an existing Cache Node tree. This does _not_
    // create a new tree, it updates the existing tree in-place. So it must follow
    // the Suspense rules of cache safety — it can resolve pending promises, but
    // it cannot overwrite existing data. It can add segments to the tree (because
    // a missing segment will cause the layout router to suspend).
    // but it cannot delete them.
    //
    // We must resolve every promise in the tree, or else it will suspend
    // indefinitely. If we did not receive data for a segment, we will resolve its
    // data promise to `null` to trigger a lazy fetch during render.
    const taskStateChildren = taskState[1];
    const serverStateChildren = serverState[1];
    const dataChildren = dynamicData[2];
    // The router state that we traverse the tree with (taskState) is the same one
    // that we used to construct the pending Cache Node tree. That way we're sure
    // to resolve all the pending promises.
    const parallelRoutes = cacheNode.parallelRoutes;
    for(let parallelRouteKey in taskStateChildren){
        const taskStateChild = taskStateChildren[parallelRouteKey];
        const serverStateChild = serverStateChildren[parallelRouteKey];
        const dataChild = dataChildren[parallelRouteKey];
        const segmentMapChild = parallelRoutes.get(parallelRouteKey);
        const taskSegmentChild = taskStateChild[0];
        const taskSegmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(taskSegmentChild);
        const cacheNodeChild = segmentMapChild !== undefined ? segmentMapChild.get(taskSegmentKeyChild) : undefined;
        if (cacheNodeChild !== undefined) {
            if (serverStateChild !== undefined && (0, _matchsegments.matchSegment)(taskSegmentChild, serverStateChild[0])) {
                if (dataChild !== undefined && dataChild !== null) {
                    // This is the happy path. Recursively update all the children.
                    finishPendingCacheNode(cacheNodeChild, taskStateChild, serverStateChild, dataChild, dynamicHead);
                } else {
                    // The server never returned data for this segment. Trigger a lazy
                    // fetch during render. This shouldn't happen because the Route Tree
                    // and the Seed Data tree sent by the server should always be the same
                    // shape when part of the same server response.
                    abortPendingCacheNode(taskStateChild, cacheNodeChild, null);
                }
            } else {
                // The server never returned data for this segment. Trigger a lazy
                // fetch during render.
                abortPendingCacheNode(taskStateChild, cacheNodeChild, null);
            }
        } else {
        // The server response matches what was expected to receive, but there's
        // no matching Cache Node in the task tree. This is a bug in the
        // implementation because we should have created a node for every
        // segment in the tree that's associated with this task.
        }
    }
    // Use the dynamic data from the server to fulfill the deferred RSC promise
    // on the Cache Node.
    const rsc = cacheNode.rsc;
    const dynamicSegmentData = dynamicData[1];
    if (rsc === null) {
        // This is a lazy cache node. We can overwrite it. This is only safe
        // because we know that the LayoutRouter suspends if `rsc` is `null`.
        cacheNode.rsc = dynamicSegmentData;
    } else if (isDeferredRsc(rsc)) {
        // This is a deferred RSC promise. We can fulfill it with the data we just
        // received from the server. If it was already resolved by a different
        // navigation, then this does nothing because we can't overwrite data.
        rsc.resolve(dynamicSegmentData);
    } else {
    // This is not a deferred RSC promise, nor is it empty, so it must have
    // been populated by a different navigation. We must not overwrite it.
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved with the dynamic head from
    // the server.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(dynamicHead);
    }
}
function abortTask(task, error) {
    const cacheNode = task.node;
    if (cacheNode === null) {
        // This indicates the task is already complete.
        return;
    }
    const taskChildren = task.children;
    if (taskChildren === null) {
        // Reached the leaf task node. This is the root of a pending cache
        // node tree.
        abortPendingCacheNode(task.route, cacheNode, error);
    } else {
        // This is an intermediate task node. Keep traversing until we reach a
        // task node with no children. That will be the root of the cache node tree
        // that needs to be resolved.
        for (const taskChild of taskChildren.values()){
            abortTask(taskChild, error);
        }
    }
    // Set this to null to indicate that this task is now complete.
    task.dynamicRequestTree = null;
}
function abortPendingCacheNode(routerState, cacheNode, error) {
    // For every pending segment in the tree, resolve its `rsc` promise to `null`
    // to trigger a lazy fetch during render.
    //
    // Or, if an error object is provided, it will error instead.
    const routerStateChildren = routerState[1];
    const parallelRoutes = cacheNode.parallelRoutes;
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const segmentMapChild = parallelRoutes.get(parallelRouteKey);
        if (segmentMapChild === undefined) {
            continue;
        }
        const segmentChild = routerStateChild[0];
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const cacheNodeChild = segmentMapChild.get(segmentKeyChild);
        if (cacheNodeChild !== undefined) {
            abortPendingCacheNode(routerStateChild, cacheNodeChild, error);
        } else {
        // This shouldn't happen because we're traversing the same tree that was
        // used to construct the cache nodes in the first place.
        }
    }
    const rsc = cacheNode.rsc;
    if (isDeferredRsc(rsc)) {
        if (error === null) {
            // This will trigger a lazy fetch during render.
            rsc.resolve(null);
        } else {
            // This will trigger an error during rendering.
            rsc.reject(error);
        }
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved. If an error was provided, we
    // will not resolve it with an error, since this is rendered at the root of
    // the app. We want the segment to error, not the entire app.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(null);
    }
}
function updateCacheNodeOnPopstateRestoration(oldCacheNode, routerState) {
    // A popstate navigation reads data from the local cache. It does not issue
    // new network requests (unless the cache entries have been evicted). So, we
    // update the cache to drop the prefetch data for any segment whose dynamic
    // data was already received. This prevents an unnecessary flash back to PPR
    // state during a back/forward navigation.
    //
    // This function clones the entire cache node tree and sets the `prefetchRsc`
    // field to `null` to prevent it from being rendered. We can't mutate the node
    // in place because this is a concurrent data structure.
    const routerStateChildren = routerState[1];
    const oldParallelRoutes = oldCacheNode.parallelRoutes;
    const newParallelRoutes = new Map(oldParallelRoutes);
    for(let parallelRouteKey in routerStateChildren){
        const routerStateChild = routerStateChildren[parallelRouteKey];
        const segmentChild = routerStateChild[0];
        const segmentKeyChild = (0, _createroutercachekey.createRouterCacheKey)(segmentChild);
        const oldSegmentMapChild = oldParallelRoutes.get(parallelRouteKey);
        if (oldSegmentMapChild !== undefined) {
            const oldCacheNodeChild = oldSegmentMapChild.get(segmentKeyChild);
            if (oldCacheNodeChild !== undefined) {
                const newCacheNodeChild = updateCacheNodeOnPopstateRestoration(oldCacheNodeChild, routerStateChild);
                const newSegmentMapChild = new Map(oldSegmentMapChild);
                newSegmentMapChild.set(segmentKeyChild, newCacheNodeChild);
                newParallelRoutes.set(parallelRouteKey, newSegmentMapChild);
            }
        }
    }
    // Only show prefetched data if the dynamic data is still pending.
    //
    // Tehnically, what we're actually checking is whether the dynamic network
    // response was received. But since it's a streaming response, this does not
    // mean that all the dynamic data has fully streamed in. It just means that
    // _some_ of the dynamic data was received. But as a heuristic, we assume that
    // the rest dynamic data will stream in quickly, so it's still better to skip
    // the prefetch state.
    const rsc = oldCacheNode.rsc;
    const shouldUsePrefetch = isDeferredRsc(rsc) && rsc.status === 'pending';
    return {
        lazyData: null,
        rsc,
        head: oldCacheNode.head,
        prefetchHead: shouldUsePrefetch ? oldCacheNode.prefetchHead : [
            null,
            null
        ],
        prefetchRsc: shouldUsePrefetch ? oldCacheNode.prefetchRsc : null,
        loading: oldCacheNode.loading,
        // These are the cloned children we computed above
        parallelRoutes: newParallelRoutes,
        navigatedAt: oldCacheNode.navigatedAt
    };
}
const DEFERRED = Symbol();
// This type exists to distinguish a DeferredRsc from a Flight promise. It's a
// compromise to avoid adding an extra field on every Cache Node, which would be
// awkward because the pre-PPR parts of codebase would need to account for it,
// too. We can remove it once type Cache Node type is more settled.
function isDeferredRsc(value) {
    return value && value.tag === DEFERRED;
}
function createDeferredRsc() {
    let resolve;
    let reject;
    const pendingRsc = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    pendingRsc.status = 'pending';
    pendingRsc.resolve = (value)=>{
        if (pendingRsc.status === 'pending') {
            const fulfilledRsc = pendingRsc;
            fulfilledRsc.status = 'fulfilled';
            fulfilledRsc.value = value;
            resolve(value);
        }
    };
    pendingRsc.reject = (error)=>{
        if (pendingRsc.status === 'pending') {
            const rejectedRsc = pendingRsc;
            rejectedRsc.status = 'rejected';
            rejectedRsc.reason = error;
            reject(error);
        }
    };
    pendingRsc.tag = DEFERRED;
    return pendingRsc;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ppr-navigations.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/clear-cache-node-data-for-segment-path.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "clearCacheNodeDataForSegmentPath", {
    enumerable: true,
    get: function() {
        return clearCacheNodeDataForSegmentPath;
    }
});
const _flightdatahelpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function clearCacheNodeDataForSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap == null ? void 0 : existingChildSegmentMap.get(cacheKey);
    let childCacheNode = childSegmentMap.get(cacheKey);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.lazyData || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(cacheKey, {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading: null,
                navigatedAt: -1
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(cacheKey, {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading: null,
                navigatedAt: -1
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            lazyData: childCacheNode.lazyData,
            rsc: childCacheNode.rsc,
            prefetchRsc: childCacheNode.prefetchRsc,
            head: childCacheNode.head,
            prefetchHead: childCacheNode.prefetchHead,
            parallelRoutes: new Map(childCacheNode.parallelRoutes),
            loading: childCacheNode.loading
        };
        childSegmentMap.set(cacheKey, childCacheNode);
    }
    return clearCacheNodeDataForSegmentPath(childCacheNode, existingChildCacheNode, (0, _flightdatahelpers.getNextFlightSegmentPath)(flightSegmentPath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=clear-cache-node-data-for-segment-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/aliased-prefetch-navigations.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    addSearchParamsToPageSegments: null,
    handleAliasedPrefetchEntry: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addSearchParamsToPageSegments: function() {
        return addSearchParamsToPageSegments;
    },
    handleAliasedPrefetchEntry: function() {
        return handleAliasedPrefetchEntry;
    }
});
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _fillcachewithnewsubtreedata = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fill-cache-with-new-subtree-data.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
function handleAliasedPrefetchEntry(navigatedAt, state, flightData, url, mutable) {
    let currentTree = state.tree;
    let currentCache = state.cache;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    let applied;
    if (typeof flightData === 'string') {
        return false;
    }
    for (const normalizedFlightData of flightData){
        // If the segment doesn't have a loading component, we don't need to do anything.
        if (!hasLoadingComponentInSeedData(normalizedFlightData.seedData)) {
            continue;
        }
        let treePatch = normalizedFlightData.tree;
        // Segments are keyed by searchParams (e.g. __PAGE__?{"foo":"bar"}). We might return a less specific, param-less entry,
        // so we ensure that the final tree contains the correct searchParams (reflected in the URL) are provided in the updated FlightRouterState tree.
        // We only do this on the first read, as otherwise we'd be overwriting the searchParams that may have already been set
        treePatch = addSearchParamsToPageSegments(treePatch, Object.fromEntries(url.searchParams));
        const { seedData, isRootRender, pathToSegment } = normalizedFlightData;
        // TODO-APP: remove ''
        const flightSegmentPathWithLeadingEmpty = [
            '',
            ...pathToSegment
        ];
        // Segments are keyed by searchParams (e.g. __PAGE__?{"foo":"bar"}). We might return a less specific, param-less entry,
        // so we ensure that the final tree contains the correct searchParams (reflected in the URL) are provided in the updated FlightRouterState tree.
        // We only do this on the first read, as otherwise we'd be overwriting the searchParams that may have already been set
        treePatch = addSearchParamsToPageSegments(treePatch, Object.fromEntries(url.searchParams));
        let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch, href);
        const newCache = (0, _approuter.createEmptyCacheNode)();
        // The prefetch cache entry was aliased -- this signals that we only fill in the cache with the
        // loading state and not the actual parallel route seed data.
        if (isRootRender && seedData) {
            // Fill in the cache with the new loading / rsc data
            const rsc = seedData[1];
            const loading = seedData[3];
            newCache.loading = loading;
            newCache.rsc = rsc;
            // Construct a new tree and apply the aliased loading state for each parallel route
            fillNewTreeWithOnlyLoadingSegments(navigatedAt, newCache, currentCache, treePatch, seedData);
        } else {
            // Copy rsc for the root node of the cache.
            newCache.rsc = currentCache.rsc;
            newCache.prefetchRsc = currentCache.prefetchRsc;
            newCache.loading = currentCache.loading;
            newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
            // copy the loading state only into the leaf node (the part that changed)
            (0, _fillcachewithnewsubtreedata.fillCacheWithNewSubTreeDataButOnlyLoading)(navigatedAt, newCache, currentCache, normalizedFlightData);
        }
        // If we don't have an updated tree, there's no reason to update the cache, as the tree
        // dictates what cache nodes to render.
        if (newTree) {
            currentTree = newTree;
            currentCache = newCache;
            applied = true;
        }
    }
    if (!applied) {
        return false;
    }
    mutable.patchedTree = currentTree;
    mutable.cache = currentCache;
    mutable.canonicalUrl = href;
    mutable.hashFragment = url.hash;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function hasLoadingComponentInSeedData(seedData) {
    if (!seedData) return false;
    const parallelRoutes = seedData[2];
    const loading = seedData[3];
    if (loading) {
        return true;
    }
    for(const key in parallelRoutes){
        if (hasLoadingComponentInSeedData(parallelRoutes[key])) {
            return true;
        }
    }
    return false;
}
function fillNewTreeWithOnlyLoadingSegments(navigatedAt, newCache, existingCache, routerState, cacheNodeSeedData) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        return;
    }
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        const parallelSeedData = cacheNodeSeedData !== null && cacheNodeSeedData[2][key] !== undefined ? cacheNodeSeedData[2][key] : null;
        let newCacheNode;
        if (parallelSeedData !== null) {
            // New data was sent from the server.
            const rsc = parallelSeedData[1];
            const loading = parallelSeedData[3];
            newCacheNode = {
                lazyData: null,
                // copy the layout but null the page segment as that's not meant to be used
                rsc: segmentForParallelRoute.includes(_segment.PAGE_SEGMENT_KEY) ? null : rsc,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading,
                navigatedAt
            };
        } else {
            // No data available for this node. This will trigger a lazy fetch
            // during render.
            newCacheNode = {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading: null,
                navigatedAt: -1
            };
        }
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillNewTreeWithOnlyLoadingSegments(navigatedAt, newCacheNode, existingCache, parallelRouteState, parallelSeedData);
    }
}
function addSearchParamsToPageSegments(flightRouterState, searchParams) {
    const [segment, parallelRoutes, ...rest] = flightRouterState;
    // If it's a page segment, modify the segment by adding search params
    if (segment.includes(_segment.PAGE_SEGMENT_KEY)) {
        const newSegment = (0, _segment.addSearchParamsIfPageSegment)(segment, searchParams);
        return [
            newSegment,
            parallelRoutes,
            ...rest
        ];
    }
    // Otherwise, recurse through the parallel routes and return a new tree
    const updatedParallelRoutes = {};
    for (const [key, parallelRoute] of Object.entries(parallelRoutes)){
        updatedParallelRoutes[key] = addSearchParamsToPageSegments(parallelRoute, searchParams);
    }
    return [
        segment,
        updatedParallelRoutes,
        ...rest
    ];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=aliased-prefetch-navigations.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleExternalUrl: null,
    navigateReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleExternalUrl: function() {
        return handleExternalUrl;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _fetchserverresponse = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _invalidatecachebelowflightsegmentpath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/invalidate-cache-below-flight-segmentpath.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _shouldhardnavigate = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/should-hard-navigate.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _applyflightdata = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)");
const _prefetchreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const _prefetchcacheutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/prefetch-cache-utils.js [app-client] (ecmascript)");
const _clearcachenodedataforsegmentpath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/clear-cache-node-data-for-segment-path.js [app-client] (ecmascript)");
const _aliasedprefetchnavigations = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/aliased-prefetch-navigations.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.scrollableSegments = undefined;
    return (0, _handlemutable.handleMutable)(state, mutable);
}
function generateSegmentsFromPatch(flightRouterPatch) {
    const segments = [];
    const [segment, parallelRoutes] = flightRouterPatch;
    if (Object.keys(parallelRoutes).length === 0) {
        return [
            [
                segment
            ]
        ];
    }
    for (const [parallelRouteKey, parallelRoute] of Object.entries(parallelRoutes)){
        for (const childSegment of generateSegmentsFromPatch(parallelRoute)){
            // If the segment is empty, it means we are at the root of the tree
            if (segment === '') {
                segments.push([
                    parallelRouteKey,
                    ...childSegment
                ]);
            } else {
                segments.push([
                    segment,
                    parallelRouteKey,
                    ...childSegment
                ]);
            }
        }
    }
    return segments;
}
function triggerLazyFetchForLeafSegments(newCache, currentCache, flightSegmentPath, treePatch) {
    let appliedPatch = false;
    newCache.rsc = currentCache.rsc;
    newCache.prefetchRsc = currentCache.prefetchRsc;
    newCache.loading = currentCache.loading;
    newCache.parallelRoutes = new Map(currentCache.parallelRoutes);
    const segmentPathsToFill = generateSegmentsFromPatch(treePatch).map((segment)=>[
            ...flightSegmentPath,
            ...segment
        ]);
    for (const segmentPaths of segmentPathsToFill){
        (0, _clearcachenodedataforsegmentpath.clearCacheNodeDataForSegmentPath)(newCache, currentCache, segmentPaths);
        appliedPatch = true;
    }
    return appliedPatch;
}
function handleNavigationResult(url, state, mutable, pendingPush, result) {
    switch(result.tag){
        case _segmentcache.NavigationResultTag.MPA:
            {
                // Perform an MPA navigation.
                const newUrl = result.data;
                return handleExternalUrl(state, mutable, newUrl, pendingPush);
            }
        case _segmentcache.NavigationResultTag.NoOp:
            {
                // The server responded with no change to the current page. However, if
                // the URL changed, we still need to update that.
                const newCanonicalUrl = result.data.canonicalUrl;
                mutable.canonicalUrl = newCanonicalUrl;
                // Check if the only thing that changed was the hash fragment.
                const oldUrl = new URL(state.canonicalUrl, url);
                const onlyHashChange = // navigations are always same-origin.
                url.pathname === oldUrl.pathname && url.search === oldUrl.search && url.hash !== oldUrl.hash;
                if (onlyHashChange) {
                    // The only updated part of the URL is the hash.
                    mutable.onlyHashChange = true;
                    mutable.shouldScroll = result.data.shouldScroll;
                    mutable.hashFragment = url.hash;
                    // Setting this to an empty array triggers a scroll for all new and
                    // updated segments. See `ScrollAndFocusHandler` for more details.
                    mutable.scrollableSegments = [];
                }
                return (0, _handlemutable.handleMutable)(state, mutable);
            }
        case _segmentcache.NavigationResultTag.Success:
            {
                // Received a new result.
                mutable.cache = result.data.cacheNode;
                mutable.patchedTree = result.data.flightRouterState;
                mutable.canonicalUrl = result.data.canonicalUrl;
                mutable.scrollableSegments = result.data.scrollableSegments;
                mutable.shouldScroll = result.data.shouldScroll;
                mutable.hashFragment = result.data.hash;
                return (0, _handlemutable.handleMutable)(state, mutable);
            }
        case _segmentcache.NavigationResultTag.Async:
            {
                return result.data.then((asyncResult)=>handleNavigationResult(url, state, mutable, pendingPush, asyncResult), // TODO: This matches the current behavior but we need to do something
                // better here if the network fails.
                ()=>{
                    return state;
                });
            }
        default:
            {
                result;
                return state;
            }
    }
}
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, shouldScroll, allowAliasing } = action;
    const mutable = {};
    const { hash } = url;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    const pendingPush = navigateType === 'push';
    // we want to prune the prefetch cache on every navigation to avoid it growing too large
    (0, _prefetchcacheutils.prunePrefetchCache)(state.prefetchCache);
    mutable.preserveCustomHistoryState = false;
    mutable.pendingPush = pendingPush;
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    // Handles case where `<meta http-equiv="refresh">` tag is present,
    // which will trigger an MPA navigation.
    if (document.getElementById('__next-page-redirect')) {
        return handleExternalUrl(state, mutable, href, pendingPush);
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const prefetchValues = (0, _prefetchcacheutils.getOrCreatePrefetchCacheEntry)({
        url,
        nextUrl: state.nextUrl,
        tree: state.tree,
        prefetchCache: state.prefetchCache,
        allowAliasing
    });
    const { treeAtTimeOfPrefetch, data } = prefetchValues;
    _prefetchreducer.prefetchQueue.bump(data);
    return data.then((param)=>{
        let { flightData, canonicalUrl: canonicalUrlOverride, postponed } = param;
        const navigatedAt = Date.now();
        let isFirstRead = false;
        // we only want to mark this once
        if (!prefetchValues.lastUsedTime) {
            // important: we should only mark the cache node as dirty after we unsuspend from the call above
            prefetchValues.lastUsedTime = navigatedAt;
            isFirstRead = true;
        }
        if (prefetchValues.aliased) {
            // When alias is enabled, search param may not be included in the canonicalUrl.
            // But we want to set url to canonicalUrl so that we use redirected path for fetching dynamic data.
            const urlWithCanonicalPathname = new URL(url.href);
            if (canonicalUrlOverride) {
                urlWithCanonicalPathname.pathname = canonicalUrlOverride.pathname;
            }
            const result = (0, _aliasedprefetchnavigations.handleAliasedPrefetchEntry)(navigatedAt, state, flightData, urlWithCanonicalPathname, mutable);
            // We didn't return new router state because we didn't apply the aliased entry for some reason.
            // We'll re-invoke the navigation handler but ensure that we don't attempt to use the aliased entry. This
            // will create an on-demand prefetch entry.
            if (result === false) {
                return navigateReducer(state, {
                    ...action,
                    allowAliasing: false
                });
            }
            return result;
        }
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === 'string') {
            return handleExternalUrl(state, mutable, flightData, pendingPush);
        }
        const updatedCanonicalUrl = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : href;
        const onlyHashChange = !!hash && state.canonicalUrl.split('#', 1)[0] === updatedCanonicalUrl.split('#', 1)[0];
        // If only the hash has changed, the server hasn't sent us any new data. We can just update
        // the mutable properties responsible for URL and scroll handling and return early.
        if (onlyHashChange) {
            mutable.onlyHashChange = true;
            mutable.canonicalUrl = updatedCanonicalUrl;
            mutable.shouldScroll = shouldScroll;
            mutable.hashFragment = hash;
            mutable.scrollableSegments = [];
            return (0, _handlemutable.handleMutable)(state, mutable);
        }
        let currentTree = state.tree;
        let currentCache = state.cache;
        let scrollableSegments = [];
        for (const normalizedFlightData of flightData){
            const { pathToSegment: flightSegmentPath, seedData, head, isHeadPartial, isRootRender } = normalizedFlightData;
            let treePatch = normalizedFlightData.tree;
            // TODO-APP: remove ''
            const flightSegmentPathWithLeadingEmpty = [
                '',
                ...flightSegmentPath
            ];
            // Create new tree based on the flightSegmentPath and router state patch
            let newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, currentTree, treePatch, href);
            // If the tree patch can't be applied to the current tree then we use the tree at time of prefetch
            // TODO-APP: This should instead fill in the missing pieces in `currentTree` with the data from `treeAtTimeOfPrefetch`, then apply the patch.
            if (newTree === null) {
                newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)(flightSegmentPathWithLeadingEmpty, treeAtTimeOfPrefetch, treePatch, href);
            }
            if (newTree !== null) {
                if (// will send back a static response that's rendered from
                // the root. If for some reason it doesn't, we fall back to the
                // non-PPR implementation.
                // TODO: We should get rid of the else branch and do all navigations
                // via startPPRNavigation. The current structure is just
                // an incremental step.
                seedData && isRootRender && postponed) {
                    const task = (0, _pprnavigations.startPPRNavigation)(navigatedAt, currentCache, currentTree, treePatch, seedData, head, isHeadPartial, false, scrollableSegments);
                    if (task !== null) {
                        if (task.route === null) {
                            // Detected a change to the root layout. Perform an full-
                            // page navigation.
                            return handleExternalUrl(state, mutable, href, pendingPush);
                        }
                        // Use the tree computed by startPPRNavigation instead
                        // of the one computed by applyRouterStatePatchToTree.
                        // TODO: We should remove applyRouterStatePatchToTree
                        // from the PPR path entirely.
                        const patchedRouterState = task.route;
                        newTree = patchedRouterState;
                        const newCache = task.node;
                        if (newCache !== null) {
                            // We've created a new Cache Node tree that contains a prefetched
                            // version of the next page. This can be rendered instantly.
                            mutable.cache = newCache;
                        }
                        const dynamicRequestTree = task.dynamicRequestTree;
                        if (dynamicRequestTree !== null) {
                            // The prefetched tree has dynamic holes in it. We initiate a
                            // dynamic request to fill them in.
                            //
                            // Do not block on the result. We'll immediately render the Cache
                            // Node tree and suspend on the dynamic parts. When the request
                            // comes in, we'll fill in missing data and ping React to
                            // re-render. Unlike the lazy fetching model in the non-PPR
                            // implementation, this is modeled as a single React update +
                            // streaming, rather than multiple top-level updates. (However,
                            // even in the new model, we'll still need to sometimes update the
                            // root multiple times per navigation, like if the server sends us
                            // a different response than we expected. For now, we revert back
                            // to the lazy fetching mechanism in that case.)
                            const dynamicRequest = (0, _fetchserverresponse.fetchServerResponse)(new URL(updatedCanonicalUrl, url.origin), {
                                flightRouterState: dynamicRequestTree,
                                nextUrl: state.nextUrl
                            });
                            (0, _pprnavigations.listenForDynamicRequest)(task, dynamicRequest);
                        // We store the dynamic request on the `lazyData` property of the CacheNode
                        // because we're not going to await the dynamic request here. Since we're not blocking
                        // on the dynamic request, `layout-router` will
                        // task.node.lazyData = dynamicRequest
                        } else {
                        // The prefetched tree does not contain dynamic holes — it's
                        // fully static. We can skip the dynamic request.
                        }
                    } else {
                        // Nothing changed, so reuse the old cache.
                        // TODO: What if the head changed but not any of the segment data?
                        // Is that possible? If so, we should clone the whole tree and
                        // update the head.
                        newTree = treePatch;
                    }
                } else {
                    // The static response does not include any dynamic holes, so
                    // there's no need to do a second request.
                    // TODO: As an incremental step this just reverts back to the
                    // non-PPR implementation. We can simplify this branch further,
                    // given that PPR prefetches are always static and return the whole
                    // tree. Or in the meantime we could factor it out into a
                    // separate function.
                    if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                        return handleExternalUrl(state, mutable, href, pendingPush);
                    }
                    const cache = (0, _approuter.createEmptyCacheNode)();
                    let applied = false;
                    if (prefetchValues.status === _routerreducertypes.PrefetchCacheEntryStatus.stale && !isFirstRead) {
                        // When we have a stale prefetch entry, we only want to re-use the loading state of the route we're navigating to, to support instant loading navigations
                        // this will trigger a lazy fetch for the actual page data by nulling the `rsc` and `prefetchRsc` values for page data,
                        // while copying over the `loading` for the segment that contains the page data.
                        // We only do this on subsequent reads, as otherwise there'd be no loading data to re-use.
                        // We skip this branch if only the hash fragment has changed, as we don't want to trigger a lazy fetch in that case
                        applied = triggerLazyFetchForLeafSegments(cache, currentCache, flightSegmentPath, treePatch);
                        // since we re-used the stale cache's loading state & refreshed the data,
                        // update the `lastUsedTime` so that it can continue to be re-used for the next 30s
                        prefetchValues.lastUsedTime = navigatedAt;
                    } else {
                        applied = (0, _applyflightdata.applyFlightData)(navigatedAt, currentCache, cache, normalizedFlightData, prefetchValues);
                    }
                    const hardNavigate = (0, _shouldhardnavigate.shouldHardNavigate)(flightSegmentPathWithLeadingEmpty, currentTree);
                    if (hardNavigate) {
                        // Copy rsc for the root node of the cache.
                        cache.rsc = currentCache.rsc;
                        cache.prefetchRsc = currentCache.prefetchRsc;
                        (0, _invalidatecachebelowflightsegmentpath.invalidateCacheBelowFlightSegmentPath)(cache, currentCache, flightSegmentPath);
                        // Ensure the existing cache value is used when the cache was not invalidated.
                        mutable.cache = cache;
                    } else if (applied) {
                        mutable.cache = cache;
                        // If we applied the cache, we update the "current cache" value so any other
                        // segments in the FlightDataPath will be able to reference the updated cache.
                        currentCache = cache;
                    }
                    for (const subSegment of generateSegmentsFromPatch(treePatch)){
                        const scrollableSegmentPath = [
                            ...flightSegmentPath,
                            ...subSegment
                        ];
                        // Filter out the __DEFAULT__ paths as they shouldn't be scrolled to in this case.
                        if (scrollableSegmentPath[scrollableSegmentPath.length - 1] !== _segment.DEFAULT_SEGMENT_KEY) {
                            scrollableSegments.push(scrollableSegmentPath);
                        }
                    }
                }
                currentTree = newTree;
            }
        }
        mutable.patchedTree = currentTree;
        mutable.canonicalUrl = updatedCanonicalUrl;
        mutable.scrollableSegments = scrollableSegments;
        mutable.hashFragment = hash;
        mutable.shouldScroll = shouldScroll;
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverPatchReducer", {
    enumerable: true,
    get: function() {
        return serverPatchReducer;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _applyflightdata = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
function serverPatchReducer(state, action) {
    const { serverResponse: { flightData, canonicalUrl: canonicalUrlOverride }, navigatedAt } = action;
    const mutable = {};
    mutable.preserveCustomHistoryState = false;
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === 'string') {
        return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
    }
    let currentTree = state.tree;
    let currentCache = state.cache;
    for (const normalizedFlightData of flightData){
        const { segmentPath: flightSegmentPath, tree: treePatch } = normalizedFlightData;
        const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
            '',
            ...flightSegmentPath
        ], currentTree, treePatch, state.canonicalUrl);
        // `applyRouterStatePatchToTree` returns `null` when it determined that the server response is not applicable to the current tree.
        // In other words, the server responded with a tree that doesn't match what the client is currently rendering.
        // This can happen if the server patch action took longer to resolve than a subsequent navigation which would have changed the tree.
        // Previously this case triggered an MPA navigation but it should be safe to simply discard the server response rather than forcing
        // the entire page to reload.
        if (newTree === null) {
            return state;
        }
        if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
        }
        const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
        if (canonicalUrlOverrideHref) {
            mutable.canonicalUrl = canonicalUrlOverrideHref;
        }
        const cache = (0, _approuter.createEmptyCacheNode)();
        (0, _applyflightdata.applyFlightData)(navigatedAt, currentCache, cache, normalizedFlightData);
        mutable.patchedTree = newTree;
        mutable.cache = cache;
        currentCache = cache;
        currentTree = newTree;
    }
    return (0, _handlemutable.handleMutable)(state, mutable);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "restoreReducer", {
    enumerable: true,
    get: function() {
        return restoreReducer;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
function restoreReducer(state, action) {
    const { url, tree } = action;
    const href = (0, _createhreffromurl.createHrefFromUrl)(url);
    // This action is used to restore the router state from the history state.
    // However, it's possible that the history state no longer contains the `FlightRouterState`.
    // We will copy over the internal state on pushState/replaceState events, but if a history entry
    // occurred before hydration, or if the user navigated to a hash using a regular anchor link,
    // the history state will not contain the `FlightRouterState`.
    // In this case, we'll continue to use the existing tree so the router doesn't get into an invalid state.
    const treeToRestore = tree || state.tree;
    const oldCache = state.cache;
    const newCache = ("TURBOPACK compile-time falsy", 0) ? // prevents an unnecessary flash back to PPR state during a
    // back/forward navigation.
    "TURBOPACK unreachable" : oldCache;
    var _extractPathFromFlightRouterState;
    return {
        // Set canonical url
        canonicalUrl: href,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // Ensures that the custom history state that was set is preserved when applying this update.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: state.focusAndScrollRef,
        cache: newCache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: treeToRestore,
        nextUrl: (_extractPathFromFlightRouterState = (0, _computechangedpath.extractPathFromFlightRouterState)(treeToRestore)) != null ? _extractPathFromFlightRouterState : url.pathname
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-segment-mismatch.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleSegmentMismatch", {
    enumerable: true,
    get: function() {
        return handleSegmentMismatch;
    }
});
const _navigatereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
function handleSegmentMismatch(state, action, treePatch) {
    if ("TURBOPACK compile-time truthy", 1) {
        console.warn('Performing hard navigation because your application experienced an unrecoverable error. If this keeps occurring, please file a Next.js issue.\n\n' + 'Reason: Segment mismatch\n' + ("Last Action: " + action.type + "\n\n") + ("Current Tree: " + JSON.stringify(state.tree) + "\n\n") + ("Tree Patch Payload: " + JSON.stringify(treePatch)));
    }
    return (0, _navigatereducer.handleExternalUrl)(state, {}, state.canonicalUrl, true);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-segment-mismatch.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasInterceptionRouteInCurrentTree", {
    enumerable: true,
    get: function() {
        return hasInterceptionRouteInCurrentTree;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
function hasInterceptionRouteInCurrentTree(param) {
    let [segment, parallelRoutes] = param;
    // If we have a dynamic segment, it's marked as an interception route by the presence of the `i` suffix.
    if (Array.isArray(segment) && (segment[2] === 'di' || segment[2] === 'ci')) {
        return true;
    }
    // If segment is not an array, apply the existing string-based check
    if (typeof segment === 'string' && (0, _interceptionroutes.isInterceptionRouteAppPath)(segment)) {
        return true;
    }
    // Iterate through parallelRoutes if they exist
    if (parallelRoutes) {
        for(const key in parallelRoutes){
            if (hasInterceptionRouteInCurrentTree(parallelRoutes[key])) {
                return true;
            }
        }
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-interception-route-in-current-tree.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "refreshReducer", {
    enumerable: true,
    get: function() {
        return refreshReducer;
    }
});
const _fetchserverresponse = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _handlesegmentmismatch = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-segment-mismatch.js [app-client] (ecmascript)");
const _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
const _refetchinactiveparallelsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/refetch-inactive-parallel-segments.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function refreshReducer(state, action) {
    const { origin } = action;
    const mutable = {};
    const href = state.canonicalUrl;
    let currentTree = state.tree;
    mutable.preserveCustomHistoryState = false;
    const cache = (0, _approuter.createEmptyCacheNode)();
    // If the current tree was intercepted, the nextUrl should be included in the request.
    // This is to ensure that the refresh request doesn't get intercepted, accidentally triggering the interception route.
    const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree);
    // TODO-APP: verify that `href` is not an external url.
    // Fetch data from the root of the tree.
    cache.lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), {
        flightRouterState: [
            currentTree[0],
            currentTree[1],
            currentTree[2],
            'refetch'
        ],
        nextUrl: includeNextUrl ? state.nextUrl : null
    });
    const navigatedAt = Date.now();
    return cache.lazyData.then(async (param)=>{
        let { flightData, canonicalUrl: canonicalUrlOverride } = param;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === 'string') {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.lazyData as it has been resolved at this point.
        cache.lazyData = null;
        for (const normalizedFlightData of flightData){
            const { tree: treePatch, seedData: cacheNodeSeedData, head, isRootRender } = normalizedFlightData;
            if (!isRootRender) {
                // TODO-APP: handle this case better
                console.log('REFRESH FAILED');
                return state;
            }
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ''
            ], currentTree, treePatch, state.canonicalUrl);
            if (newTree === null) {
                return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
            if (canonicalUrlOverride) {
                mutable.canonicalUrl = canonicalUrlOverrideHref;
            }
            // Handles case where prefetch only returns the router tree patch without rendered components.
            if (cacheNodeSeedData !== null) {
                const rsc = cacheNodeSeedData[1];
                const loading = cacheNodeSeedData[3];
                cache.rsc = rsc;
                cache.prefetchRsc = null;
                cache.loading = loading;
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(navigatedAt, cache, undefined, treePatch, cacheNodeSeedData, head, undefined);
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                else {
                    mutable.prefetchCache = new Map();
                }
            }
            await (0, _refetchinactiveparallelsegments.refreshInactiveParallelSegments)({
                navigatedAt,
                state,
                updatedTree: newTree,
                updatedCache: cache,
                includeNextUrl,
                canonicalUrl: mutable.canonicalUrl || state.canonicalUrl
            });
            mutable.cache = cache;
            mutable.patchedTree = newTree;
            currentTree = newTree;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/hmr-refresh-reducer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hmrRefreshReducer", {
    enumerable: true,
    get: function() {
        return hmrRefreshReducer;
    }
});
const _fetchserverresponse = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _applyflightdata = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-flight-data.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _handlesegmentmismatch = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-segment-mismatch.js [app-client] (ecmascript)");
const _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
// A version of refresh reducer that keeps the cache around instead of wiping all of it.
function hmrRefreshReducerImpl(state, action) {
    const { origin } = action;
    const mutable = {};
    const href = state.canonicalUrl;
    mutable.preserveCustomHistoryState = false;
    const cache = (0, _approuter.createEmptyCacheNode)();
    // If the current tree was intercepted, the nextUrl should be included in the request.
    // This is to ensure that the refresh request doesn't get intercepted, accidentally triggering the interception route.
    const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree);
    // TODO-APP: verify that `href` is not an external url.
    // Fetch data from the root of the tree.
    const navigatedAt = Date.now();
    cache.lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(href, origin), {
        flightRouterState: [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            'refetch'
        ],
        nextUrl: includeNextUrl ? state.nextUrl : null,
        isHmrRefresh: true
    });
    return cache.lazyData.then((param)=>{
        let { flightData, canonicalUrl: canonicalUrlOverride } = param;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === 'string') {
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        // Remove cache.lazyData as it has been resolved at this point.
        cache.lazyData = null;
        let currentTree = state.tree;
        let currentCache = state.cache;
        for (const normalizedFlightData of flightData){
            const { tree: treePatch, isRootRender } = normalizedFlightData;
            if (!isRootRender) {
                // TODO-APP: handle this case better
                console.log('REFRESH FAILED');
                return state;
            }
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ''
            ], currentTree, treePatch, state.canonicalUrl);
            if (newTree === null) {
                return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, href, state.pushRef.pendingPush);
            }
            const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride) : undefined;
            if (canonicalUrlOverride) {
                mutable.canonicalUrl = canonicalUrlOverrideHref;
            }
            const applied = (0, _applyflightdata.applyFlightData)(navigatedAt, currentCache, cache, normalizedFlightData);
            if (applied) {
                mutable.cache = cache;
                currentCache = cache;
            }
            mutable.patchedTree = newTree;
            mutable.canonicalUrl = href;
            currentTree = newTree;
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, ()=>state);
}
function hmrRefreshReducerNoop(state, _action) {
    return state;
}
const hmrRefreshReducer = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : hmrRefreshReducerImpl;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hmr-refresh-reducer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/assign-location.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "assignLocation", {
    enumerable: true,
    get: function() {
        return assignLocation;
    }
});
const _addbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
function assignLocation(location, url) {
    if (location.startsWith('.')) {
        const urlBase = url.origin + url.pathname;
        return new URL(// new URL('./relative', 'https://example.com/subdir').href -> 'https://example.com/relative'
        // new URL('./relative', 'https://example.com/subdir/').href -> 'https://example.com/subdir/relative'
        (urlBase.endsWith('/') ? urlBase : urlBase + '/') + location);
    }
    return new URL((0, _addbasepath.addBasePath)(location), url.href);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=assign-location.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverActionReducer", {
    enumerable: true,
    get: function() {
        return serverActionReducer;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _assignlocation = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/assign-location.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _applyrouterstatepatchtotree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/apply-router-state-patch-to-tree.js [app-client] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-client] (ecmascript)");
const _handlemutable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-mutable.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
const _handlesegmentmismatch = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/handle-segment-mismatch.js [app-client] (ecmascript)");
const _refetchinactiveparallelsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/refetch-inactive-parallel-segments.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _redirect = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const _prefetchcacheutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/prefetch-cache-utils.js [app-client] (ecmascript)");
const _removebasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const _serverreferenceinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/server-reference-info.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
const createFromFetch = _client.createFromFetch;
async function fetchServerAction(state, nextUrl, param) {
    let { actionId, actionArgs } = param;
    const temporaryReferences = (0, _client.createTemporaryReferenceSet)();
    const info = (0, _serverreferenceinfo.extractInfoFromServerReferenceId)(actionId);
    // TODO: Currently, we're only omitting unused args for the experimental "use
    // cache" functions. Once the server reference info byte feature is stable, we
    // should apply this to server actions as well.
    const usedArgs = info.type === 'use-cache' ? (0, _serverreferenceinfo.omitUnusedArgs)(actionArgs, info) : actionArgs;
    const body = await (0, _client.encodeReply)(usedArgs, {
        temporaryReferences
    });
    const res = await fetch(state.canonicalUrl, {
        method: 'POST',
        headers: {
            Accept: _approuterheaders.RSC_CONTENT_TYPE_HEADER,
            [_approuterheaders.ACTION_HEADER]: actionId,
            [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(state.tree),
            ...("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {},
            ...nextUrl ? {
                [_approuterheaders.NEXT_URL]: nextUrl
            } : {}
        },
        body
    });
    // Handle server actions that the server didn't recognize.
    const unrecognizedActionHeader = res.headers.get(_approuterheaders.NEXT_ACTION_NOT_FOUND_HEADER);
    if (unrecognizedActionHeader === '1') {
        throw Object.defineProperty(new Error('Server Action "' + actionId + '" was not found on the server. \nRead more: https://nextjs.org/docs/messages/failed-to-find-server-action'), "__NEXT_ERROR_CODE", {
            value: "E715",
            enumerable: false,
            configurable: true
        });
    }
    const redirectHeader = res.headers.get('x-action-redirect');
    const [location, _redirectType] = (redirectHeader == null ? void 0 : redirectHeader.split(';')) || [];
    let redirectType;
    switch(_redirectType){
        case 'push':
            redirectType = _redirecterror.RedirectType.push;
            break;
        case 'replace':
            redirectType = _redirecterror.RedirectType.replace;
            break;
        default:
            redirectType = undefined;
    }
    const isPrerender = !!res.headers.get(_approuterheaders.NEXT_IS_PRERENDER_HEADER);
    let revalidatedParts;
    try {
        const revalidatedHeader = JSON.parse(res.headers.get('x-action-revalidated') || '[[],0,0]');
        revalidatedParts = {
            paths: revalidatedHeader[0] || [],
            tag: !!revalidatedHeader[1],
            cookie: revalidatedHeader[2]
        };
    } catch (e) {
        revalidatedParts = NO_REVALIDATED_PARTS;
    }
    const redirectLocation = location ? (0, _assignlocation.assignLocation)(location, new URL(state.canonicalUrl, window.location.href)) : undefined;
    const contentType = res.headers.get('content-type');
    const isRscResponse = !!(contentType && contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER));
    // Handle invalid server action responses.
    // A valid response must have `content-type: text/x-component`, unless it's an external redirect.
    // (external redirects have an 'x-action-redirect' header, but the body is an empty 'text/plain')
    if (!isRscResponse && !redirectLocation) {
        // The server can respond with a text/plain error message, but we'll fallback to something generic
        // if there isn't one.
        const message = res.status >= 400 && contentType === 'text/plain' ? await res.text() : 'An unexpected response was received from the server.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    let actionResult;
    let actionFlightData;
    if (isRscResponse) {
        const response = await createFromFetch(Promise.resolve(res), {
            callServer: _appcallserver.callServer,
            findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
            temporaryReferences
        });
        // An internal redirect can send an RSC response, but does not have a useful `actionResult`.
        actionResult = redirectLocation ? undefined : response.a;
        actionFlightData = (0, _flightdatahelpers.normalizeFlightData)(response.f);
    } else {
        // An external redirect doesn't contain RSC data.
        actionResult = undefined;
        actionFlightData = undefined;
    }
    return {
        actionResult,
        actionFlightData,
        redirectLocation,
        redirectType,
        revalidatedParts,
        isPrerender
    };
}
const NO_REVALIDATED_PARTS = {
    paths: [],
    tag: false,
    cookie: false
};
function serverActionReducer(state, action) {
    const { resolve, reject } = action;
    const mutable = {};
    let currentTree = state.tree;
    mutable.preserveCustomHistoryState = false;
    // only pass along the `nextUrl` param (used for interception routes) if the current route was intercepted.
    // If the route has been intercepted, the action should be as well.
    // Otherwise the server action might be intercepted with the wrong action id
    // (ie, one that corresponds with the intercepted route)
    const nextUrl = state.nextUrl && (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(state.tree) ? state.nextUrl : null;
    const navigatedAt = Date.now();
    return fetchServerAction(state, nextUrl, action).then(async (param)=>{
        let { actionResult, actionFlightData: flightData, redirectLocation, redirectType, isPrerender, revalidatedParts } = param;
        let redirectHref;
        // honor the redirect type instead of defaulting to push in case of server actions.
        if (redirectLocation) {
            if (redirectType === _redirecterror.RedirectType.replace) {
                state.pushRef.pendingPush = false;
                mutable.pendingPush = false;
            } else {
                state.pushRef.pendingPush = true;
                mutable.pendingPush = true;
            }
            redirectHref = (0, _createhreffromurl.createHrefFromUrl)(redirectLocation, false);
            mutable.canonicalUrl = redirectHref;
        }
        if (!flightData) {
            resolve(actionResult);
            // If there is a redirect but no flight data we need to do a mpaNavigation.
            if (redirectLocation) {
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, redirectLocation.href, state.pushRef.pendingPush);
            }
            return state;
        }
        if (typeof flightData === 'string') {
            // Handle case when navigating to page in `pages` from `app`
            resolve(actionResult);
            return (0, _navigatereducer.handleExternalUrl)(state, mutable, flightData, state.pushRef.pendingPush);
        }
        const actionRevalidated = revalidatedParts.paths.length > 0 || revalidatedParts.tag || revalidatedParts.cookie;
        for (const normalizedFlightData of flightData){
            const { tree: treePatch, seedData: cacheNodeSeedData, head, isRootRender } = normalizedFlightData;
            if (!isRootRender) {
                // TODO-APP: handle this case better
                console.log('SERVER ACTION APPLY FAILED');
                resolve(actionResult);
                return state;
            }
            // Given the path can only have two items the items are only the router state and rsc for the root.
            const newTree = (0, _applyrouterstatepatchtotree.applyRouterStatePatchToTree)([
                ''
            ], currentTree, treePatch, redirectHref ? redirectHref : state.canonicalUrl);
            if (newTree === null) {
                resolve(actionResult);
                return (0, _handlesegmentmismatch.handleSegmentMismatch)(state, action, treePatch);
            }
            if ((0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(currentTree, newTree)) {
                resolve(actionResult);
                return (0, _navigatereducer.handleExternalUrl)(state, mutable, redirectHref || state.canonicalUrl, state.pushRef.pendingPush);
            }
            // The server sent back RSC data for the server action, so we need to apply it to the cache.
            if (cacheNodeSeedData !== null) {
                const rsc = cacheNodeSeedData[1];
                const cache = (0, _approuter.createEmptyCacheNode)();
                cache.rsc = rsc;
                cache.prefetchRsc = null;
                cache.loading = cacheNodeSeedData[3];
                (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(navigatedAt, cache, undefined, treePatch, cacheNodeSeedData, head, undefined);
                mutable.cache = cache;
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                else {
                    mutable.prefetchCache = new Map();
                }
                if (actionRevalidated) {
                    await (0, _refetchinactiveparallelsegments.refreshInactiveParallelSegments)({
                        navigatedAt,
                        state,
                        updatedTree: newTree,
                        updatedCache: cache,
                        includeNextUrl: Boolean(nextUrl),
                        canonicalUrl: mutable.canonicalUrl || state.canonicalUrl
                    });
                }
            }
            mutable.patchedTree = newTree;
            currentTree = newTree;
        }
        if (redirectLocation && redirectHref) {
            if (!("TURBOPACK compile-time value", false) && !actionRevalidated) {
                // Because the RedirectBoundary will trigger a navigation, we need to seed the prefetch cache
                // with the FlightData that we got from the server action for the target page, so that it's
                // available when the page is navigated to and doesn't need to be re-fetched.
                // We only do this if the server action didn't revalidate any data, as in that case the
                // client cache will be cleared and the data will be re-fetched anyway.
                // NOTE: We don't do this in the Segment Cache implementation.
                // Dynamic data should never be placed into the cache, unless it's
                // "converted" to static data using <Link prefetch={true}>. What we
                // do instead is re-prefetch links and forms whenever the cache is
                // invalidated.
                (0, _prefetchcacheutils.createSeededPrefetchCacheEntry)({
                    url: redirectLocation,
                    data: {
                        flightData,
                        canonicalUrl: undefined,
                        couldBeIntercepted: false,
                        prerendered: false,
                        postponed: false,
                        // TODO: We should be able to set this if the server action
                        // returned a fully static response.
                        staleTime: -1
                    },
                    tree: state.tree,
                    prefetchCache: state.prefetchCache,
                    nextUrl: state.nextUrl,
                    kind: isPrerender ? _routerreducertypes.PrefetchKind.FULL : _routerreducertypes.PrefetchKind.AUTO
                });
                mutable.prefetchCache = state.prefetchCache;
            }
            // If the action triggered a redirect, the action promise will be rejected with
            // a redirect so that it's handled by RedirectBoundary as we won't have a valid
            // action result to resolve the promise with. This will effectively reset the state of
            // the component that called the action as the error boundary will remount the tree.
            // The status code doesn't matter here as the action handler will have already sent
            // a response with the correct status code.
            reject((0, _redirect.getRedirectError)((0, _hasbasepath.hasBasePath)(redirectHref) ? (0, _removebasepath.removeBasePath)(redirectHref) : redirectHref, redirectType || _redirecterror.RedirectType.push));
        } else {
            resolve(actionResult);
        }
        return (0, _handlemutable.handleMutable)(state, mutable);
    }, (e)=>{
        // When the server action is rejected we don't update the state and instead call the reject handler of the promise.
        reject(e);
        return state;
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-action-reducer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reducer", {
    enumerable: true,
    get: function() {
        return reducer;
    }
});
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-client] (ecmascript)");
const _serverpatchreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/server-patch-reducer.js [app-client] (ecmascript)");
const _restorereducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/restore-reducer.js [app-client] (ecmascript)");
const _refreshreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/refresh-reducer.js [app-client] (ecmascript)");
const _prefetchreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js [app-client] (ecmascript)");
const _hmrrefreshreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/hmr-refresh-reducer.js [app-client] (ecmascript)");
const _serveractionreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/server-action-reducer.js [app-client] (ecmascript)");
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerreducertypes.ACTION_NAVIGATE:
            {
                return (0, _navigatereducer.navigateReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverpatchreducer.serverPatchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_RESTORE:
            {
                return (0, _restorereducer.restoreReducer)(state, action);
            }
        case _routerreducertypes.ACTION_REFRESH:
            {
                return (0, _refreshreducer.refreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_HMR_REFRESH:
            {
                return (0, _hmrrefreshreducer.hmrRefreshReducer)(state, action);
            }
        case _routerreducertypes.ACTION_PREFETCH:
            {
                return (0, _prefetchreducer.prefetchReducer)(state, action);
            }
        case _routerreducertypes.ACTION_SERVER_ACTION:
            {
                return (0, _serveractionreducer.serverActionReducer)(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw Object.defineProperty(new Error('Unknown action'), "__NEXT_ERROR_CODE", {
                value: "E295",
                enumerable: false,
                configurable: true
            });
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer = typeof window === 'undefined' ? serverReducer : clientReducer;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createMutableActionQueue: null,
    dispatchNavigateAction: null,
    dispatchTraverseAction: null,
    getCurrentAppRouterState: null,
    publicAppRouterInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createMutableActionQueue: function() {
        return createMutableActionQueue;
    },
    dispatchNavigateAction: function() {
        return dispatchNavigateAction;
    },
    dispatchTraverseAction: function() {
        return dispatchTraverseAction;
    },
    getCurrentAppRouterState: function() {
        return getCurrentAppRouterState;
    },
    publicAppRouterInstance: function() {
        return publicAppRouterInstance;
    }
});
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _routerreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _isthenable = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _prefetchreducer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/reducers/prefetch-reducer.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
function runRemainingActions(actionQueue, setState) {
    if (actionQueue.pending !== null) {
        actionQueue.pending = actionQueue.pending.next;
        if (actionQueue.pending !== null) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            runAction({
                actionQueue,
                action: actionQueue.pending,
                setState
            });
        } else {
            // No more actions are pending, check if a refresh is needed
            if (actionQueue.needsRefresh) {
                actionQueue.needsRefresh = false;
                actionQueue.dispatch({
                    type: _routerreducertypes.ACTION_REFRESH,
                    origin: window.location.origin
                }, setState);
            }
        }
    }
}
async function runAction(param) {
    let { actionQueue, action, setState } = param;
    const prevState = actionQueue.state;
    actionQueue.pending = action;
    const payload = action.payload;
    const actionResult = actionQueue.action(prevState, payload);
    function handleResult(nextState) {
        // if we discarded this action, the state should also be discarded
        if (action.discarded) {
            return;
        }
        actionQueue.state = nextState;
        runRemainingActions(actionQueue, setState);
        action.resolve(nextState);
    }
    // if the action is a promise, set up a callback to resolve it
    if ((0, _isthenable.isThenable)(actionResult)) {
        actionResult.then(handleResult, (err)=>{
            runRemainingActions(actionQueue, setState);
            action.reject(err);
        });
    } else {
        handleResult(actionResult);
    }
}
function dispatchAction(actionQueue, payload, setState) {
    let resolvers = {
        resolve: setState,
        reject: ()=>{}
    };
    // most of the action types are async with the exception of restore
    // it's important that restore is handled quickly since it's fired on the popstate event
    // and we don't want to add any delay on a back/forward nav
    // this only creates a promise for the async actions
    if (payload.type !== _routerreducertypes.ACTION_RESTORE) {
        // Create the promise and assign the resolvers to the object.
        const deferredPromise = new Promise((resolve, reject)=>{
            resolvers = {
                resolve,
                reject
            };
        });
        (0, _react.startTransition)(()=>{
            // we immediately notify React of the pending promise -- the resolver is attached to the action node
            // and will be called when the associated action promise resolves
            setState(deferredPromise);
        });
    }
    const newAction = {
        payload,
        next: null,
        resolve: resolvers.resolve,
        reject: resolvers.reject
    };
    // Check if the queue is empty
    if (actionQueue.pending === null) {
        // The queue is empty, so add the action and start it immediately
        // Mark this action as the last in the queue
        actionQueue.last = newAction;
        runAction({
            actionQueue,
            action: newAction,
            setState
        });
    } else if (payload.type === _routerreducertypes.ACTION_NAVIGATE || payload.type === _routerreducertypes.ACTION_RESTORE) {
        // Navigations (including back/forward) take priority over any pending actions.
        // Mark the pending action as discarded (so the state is never applied) and start the navigation action immediately.
        actionQueue.pending.discarded = true;
        // The rest of the current queue should still execute after this navigation.
        // (Note that it can't contain any earlier navigations, because we always put those into `actionQueue.pending` by calling `runAction`)
        newAction.next = actionQueue.pending.next;
        // if the pending action was a server action, mark the queue as needing a refresh once events are processed
        if (actionQueue.pending.payload.type === _routerreducertypes.ACTION_SERVER_ACTION) {
            actionQueue.needsRefresh = true;
        }
        runAction({
            actionQueue,
            action: newAction,
            setState
        });
    } else {
        // The queue is not empty, so add the action to the end of the queue
        // It will be started by runRemainingActions after the previous action finishes
        if (actionQueue.last !== null) {
            actionQueue.last.next = newAction;
        }
        actionQueue.last = newAction;
    }
}
let globalActionQueue = null;
function createMutableActionQueue(initialState, instrumentationHooks) {
    const actionQueue = {
        state: initialState,
        dispatch: (payload, setState)=>dispatchAction(actionQueue, payload, setState),
        action: async (state, action)=>{
            const result = (0, _routerreducer.reducer)(state, action);
            return result;
        },
        pending: null,
        last: null,
        onRouterTransitionStart: instrumentationHooks !== null && typeof instrumentationHooks.onRouterTransitionStart === 'function' ? instrumentationHooks.onRouterTransitionStart : null
    };
    if (typeof window !== 'undefined') {
        // The action queue is lazily created on hydration, but after that point
        // it doesn't change. So we can store it in a global rather than pass
        // it around everywhere via props/context.
        if (globalActionQueue !== null) {
            throw Object.defineProperty(new Error('Internal Next.js Error: createMutableActionQueue was called more ' + 'than once'), "__NEXT_ERROR_CODE", {
                value: "E624",
                enumerable: false,
                configurable: true
            });
        }
        globalActionQueue = actionQueue;
    }
    return actionQueue;
}
function getCurrentAppRouterState() {
    return globalActionQueue !== null ? globalActionQueue.state : null;
}
function getAppRouterActionQueue() {
    if (globalActionQueue === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    return globalActionQueue;
}
function getProfilingHookForOnNavigationStart() {
    if (globalActionQueue !== null) {
        return globalActionQueue.onRouterTransitionStart;
    }
    return null;
}
function dispatchNavigateAction(href, navigateType, shouldScroll, linkInstanceRef) {
    // TODO: This stuff could just go into the reducer. Leaving as-is for now
    // since we're about to rewrite all the router reducer stuff anyway.
    const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    (0, _links.setLinkForCurrentNavigation)(linkInstanceRef);
    const onRouterTransitionStart = getProfilingHookForOnNavigationStart();
    if (onRouterTransitionStart !== null) {
        onRouterTransitionStart(href, navigateType);
    }
    (0, _useactionqueue.dispatchAppRouterAction)({
        type: _routerreducertypes.ACTION_NAVIGATE,
        url,
        isExternalUrl: (0, _approuter.isExternalURL)(url),
        locationSearch: location.search,
        shouldScroll,
        navigateType,
        allowAliasing: true
    });
}
function dispatchTraverseAction(href, tree) {
    const onRouterTransitionStart = getProfilingHookForOnNavigationStart();
    if (onRouterTransitionStart !== null) {
        onRouterTransitionStart(href, 'traverse');
    }
    (0, _useactionqueue.dispatchAppRouterAction)({
        type: _routerreducertypes.ACTION_RESTORE,
        url: new URL(href),
        tree
    });
}
const publicAppRouterInstance = {
    back: ()=>window.history.back(),
    forward: ()=>window.history.forward(),
    prefetch: ("TURBOPACK compile-time falsy", 0) ? // cache. So we don't need to dispatch an action.
    "TURBOPACK unreachable" : (href, options)=>{
        // Use the old prefetch implementation.
        const actionQueue = getAppRouterActionQueue();
        const url = (0, _approuter.createPrefetchURL)(href);
        if (url !== null) {
            var _options_kind;
            // The prefetch reducer doesn't actually update any state or
            // trigger a rerender. It just writes to a mutable cache. So we
            // shouldn't bother calling setState/dispatch; we can just re-run
            // the reducer directly using the current state.
            // TODO: Refactor this away from a "reducer" so it's
            // less confusing.
            (0, _prefetchreducer.prefetchReducer)(actionQueue.state, {
                type: _routerreducertypes.ACTION_PREFETCH,
                url,
                kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
            });
        }
    },
    replace: (href, options)=>{
        (0, _react.startTransition)(()=>{
            var _options_scroll;
            dispatchNavigateAction(href, 'replace', (_options_scroll = options == null ? void 0 : options.scroll) != null ? _options_scroll : true, null);
        });
    },
    push: (href, options)=>{
        (0, _react.startTransition)(()=>{
            var _options_scroll;
            dispatchNavigateAction(href, 'push', (_options_scroll = options == null ? void 0 : options.scroll) != null ? _options_scroll : true, null);
        });
    },
    refresh: ()=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_REFRESH,
                origin: window.location.origin
            });
        });
    },
    hmrRefresh: ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            (0, _react.startTransition)(()=>{
                (0, _useactionqueue.dispatchAppRouterAction)({
                    type: _routerreducertypes.ACTION_HMR_REFRESH,
                    origin: window.location.origin
                });
            });
        }
    }
};
// Exists for debugging purposes. Don't use in application code.
if (typeof window !== 'undefined' && window.next) {
    window.next.router = publicAppRouterInstance;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-instance.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createInitialRouterState", {
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
const _prefetchcacheutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/prefetch-cache-utils.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _refetchinactiveparallelsegments = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/refetch-inactive-parallel-segments.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
function createInitialRouterState(param) {
    let { navigatedAt, initialFlightData, initialCanonicalUrlParts, initialParallelRoutes, location, couldBeIntercepted, postponed, prerendered } = param;
    // When initialized on the server, the canonical URL is provided as an array of parts.
    // This is to ensure that when the RSC payload streamed to the client, crawlers don't interpret it
    // as a URL that should be crawled.
    const initialCanonicalUrl = initialCanonicalUrlParts.join('/');
    const normalizedFlightData = (0, _flightdatahelpers.getFlightDataPartsFromPath)(initialFlightData[0]);
    const { tree: initialTree, seedData: initialSeedData, head: initialHead } = normalizedFlightData;
    // For the SSR render, seed data should always be available (we only send back a `null` response
    // in the case of a `loading` segment, pre-PPR.)
    const rsc = initialSeedData == null ? void 0 : initialSeedData[1];
    var _initialSeedData_;
    const loading = (_initialSeedData_ = initialSeedData == null ? void 0 : initialSeedData[3]) != null ? _initialSeedData_ : null;
    const cache = {
        lazyData: null,
        rsc,
        prefetchRsc: null,
        head: null,
        prefetchHead: null,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: initialParallelRoutes,
        loading,
        navigatedAt
    };
    const canonicalUrl = // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
    location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl;
    (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(initialTree, canonicalUrl);
    const prefetchCache = new Map();
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(navigatedAt, cache, undefined, initialTree, initialSeedData, initialHead, undefined);
    }
    var _ref;
    const initialState = {
        tree: initialTree,
        cache,
        prefetchCache,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // First render needs to preserve the previous window.history.state
            // to avoid it being overwritten on navigation back/forward with MPA Navigation.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: {
            apply: false,
            onlyHashChange: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return initialState;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "linkGc", {
    enumerable: true,
    get: function() {
        return linkGc;
    }
});
function linkGc() {
    // TODO-APP: Remove this logic when Float has GC built-in in development.
    if ("TURBOPACK compile-time truthy", 1) {
        const callback = (mutationList)=>{
            for (const mutation of mutationList){
                if (mutation.type === 'childList') {
                    for (const node of mutation.addedNodes){
                        if ('tagName' in node && node.tagName === 'LINK') {
                            var _link_dataset_precedence;
                            const link = node;
                            if ((_link_dataset_precedence = link.dataset.precedence) == null ? void 0 : _link_dataset_precedence.startsWith('next')) {
                                const href = link.getAttribute('href');
                                if (href) {
                                    const [resource, version] = href.split('?v=', 2);
                                    if (version) {
                                        const currentOrigin = window.location.origin;
                                        const allLinks = [
                                            ...document.querySelectorAll('link[href^="' + resource + '"]'),
                                            // It's possible that the resource is a full URL or only pathname,
                                            // so we need to remove the alternative href as well.
                                            ...document.querySelectorAll('link[href^="' + (resource.startsWith(currentOrigin) ? resource.slice(currentOrigin.length) : currentOrigin + resource) + '"]')
                                        ];
                                        for (const otherLink of allLinks){
                                            var _otherLink_dataset_precedence;
                                            if ((_otherLink_dataset_precedence = otherLink.dataset.precedence) == null ? void 0 : _otherLink_dataset_precedence.startsWith('next')) {
                                                const otherHref = otherLink.getAttribute('href');
                                                if (otherHref) {
                                                    const [, otherVersion] = otherHref.split('?v=', 2);
                                                    if (!otherVersion || +otherVersion < +version) {
                                                        // Delay the removal of the stylesheet to avoid FOUC
                                                        // caused by `@font-face` rules, as they seem to be
                                                        // a couple of ticks delayed between the old and new
                                                        // styles being swapped even if the font is cached.
                                                        setTimeout(()=>{
                                                            otherLink.remove();
                                                        }, 5);
                                                        const preloadLink = document.querySelector('link[rel="preload"][as="style"][href="' + otherHref + '"]');
                                                        if (preloadLink) {
                                                            preloadLink.remove();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        observer.observe(document.head, {
            childList: true
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-link-gc.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hydrate", {
    enumerable: true,
    get: function() {
        return hydrate;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)");
const _client = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _client1 = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _onrecoverableerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)");
const _errorboundarycallbacks = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)");
const _appcallserver = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _approuter = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)"));
const _createinitialrouterstate = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _appbuildid = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)");
const _isbot = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
/// <reference types="react-dom/experimental" />
const createFromReadableStream = _client1.createFromReadableStream;
const appElement = document;
const encoder = new TextEncoder();
let initialServerDataBuffer = undefined;
let initialServerDataWriter = undefined;
let initialServerDataLoaded = false;
let initialServerDataFlushed = false;
let initialFormStateData = null;
function nextServerDataCallback(seg) {
    if (seg[0] === 0) {
        initialServerDataBuffer = [];
    } else if (seg[0] === 1) {
        if (!initialServerDataBuffer) throw Object.defineProperty(new Error('Unexpected server data: missing bootstrap script.'), "__NEXT_ERROR_CODE", {
            value: "E18",
            enumerable: false,
            configurable: true
        });
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(encoder.encode(seg[1]));
        } else {
            initialServerDataBuffer.push(seg[1]);
        }
    } else if (seg[0] === 2) {
        initialFormStateData = seg[1];
    } else if (seg[0] === 3) {
        if (!initialServerDataBuffer) throw Object.defineProperty(new Error('Unexpected server data: missing bootstrap script.'), "__NEXT_ERROR_CODE", {
            value: "E18",
            enumerable: false,
            configurable: true
        });
        // Decode the base64 string back to binary data.
        const binaryString = atob(seg[1]);
        const decodedChunk = new Uint8Array(binaryString.length);
        for(var i = 0; i < binaryString.length; i++){
            decodedChunk[i] = binaryString.charCodeAt(i);
        }
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(decodedChunk);
        } else {
            initialServerDataBuffer.push(decodedChunk);
        }
    }
}
function isStreamErrorOrUnfinished(ctr) {
    // If `desiredSize` is null, it means the stream is closed or errored. If it is lower than 0, the stream is still unfinished.
    return ctr.desiredSize === null || ctr.desiredSize < 0;
}
// There might be race conditions between `nextServerDataRegisterWriter` and
// `DOMContentLoaded`. The former will be called when React starts to hydrate
// the root, the latter will be called when the DOM is fully loaded.
// For streaming, the former is called first due to partial hydration.
// For non-streaming, the latter can be called first.
// Hence, we use two variables `initialServerDataLoaded` and
// `initialServerDataFlushed` to make sure the writer will be closed and
// `initialServerDataBuffer` will be cleared in the right time.
function nextServerDataRegisterWriter(ctr) {
    if (initialServerDataBuffer) {
        initialServerDataBuffer.forEach((val)=>{
            ctr.enqueue(typeof val === 'string' ? encoder.encode(val) : val);
        });
        if (initialServerDataLoaded && !initialServerDataFlushed) {
            if (isStreamErrorOrUnfinished(ctr)) {
                ctr.error(Object.defineProperty(new Error('The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection.'), "__NEXT_ERROR_CODE", {
                    value: "E117",
                    enumerable: false,
                    configurable: true
                }));
            } else {
                ctr.close();
            }
            initialServerDataFlushed = true;
            initialServerDataBuffer = undefined;
        }
    }
    initialServerDataWriter = ctr;
}
// When `DOMContentLoaded`, we can close all pending writers to finish hydration.
const DOMContentLoaded = function() {
    if (initialServerDataWriter && !initialServerDataFlushed) {
        initialServerDataWriter.close();
        initialServerDataFlushed = true;
        initialServerDataBuffer = undefined;
    }
    initialServerDataLoaded = true;
};
// It's possible that the DOM is already loaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
} else {
    // Delayed in marco task to ensure it's executed later than hydration
    setTimeout(DOMContentLoaded);
}
const nextServerDataLoadingGlobal = self.__next_f = self.__next_f || [];
nextServerDataLoadingGlobal.forEach(nextServerDataCallback);
nextServerDataLoadingGlobal.push = nextServerDataCallback;
const readable = new ReadableStream({
    start (controller) {
        nextServerDataRegisterWriter(controller);
    }
});
const initialServerResponse = createFromReadableStream(readable, {
    callServer: _appcallserver.callServer,
    findSourceMapURL: _appfindsourcemapurl.findSourceMapURL
});
function ServerRoot(param) {
    let { pendingActionQueue } = param;
    const initialRSCPayload = (0, _react.use)(initialServerResponse);
    const actionQueue = (0, _react.use)(pendingActionQueue);
    const router = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuter.default, {
        gracefullyDegrade: (0, _isbot.isBot)(window.navigator.userAgent),
        actionQueue: actionQueue,
        globalErrorState: initialRSCPayload.G,
        assetPrefix: initialRSCPayload.p
    });
    if (("TURBOPACK compile-time value", "development") === 'development' && initialRSCPayload.m) {
        // We provide missing slot information in a context provider only during development
        // as we log some additional information about the missing slots in the console.
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.MissingSlotContext, {
            value: initialRSCPayload.m,
            children: router
        });
    }
    return router;
}
const StrictModeIfEnabled = ("TURBOPACK compile-time truthy", 1) ? _react.default.StrictMode : "TURBOPACK unreachable";
function Root(param) {
    let { children } = param;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return children;
}
function onDefaultTransitionIndicator() {
    // TODO: Compose default with user-configureable (e.g. nprogress)
    // TODO: Use React's default once we figure out hanging indicators: https://codesandbox.io/p/sandbox/charming-moon-hktkp6?file=%2Fsrc%2Findex.js%3A106%2C30
    return ()=>{};
}
const reactRootOptions = {
    onDefaultTransitionIndicator: onDefaultTransitionIndicator,
    onRecoverableError: _onrecoverableerror.onRecoverableError,
    onCaughtError: _errorboundarycallbacks.onCaughtError,
    onUncaughtError: _errorboundarycallbacks.onUncaughtError
};
function hydrate(instrumentationHooks) {
    // React overrides `.then` and doesn't return a new promise chain,
    // so we wrap the action queue in a promise to ensure that its value
    // is defined when the promise resolves.
    // https://github.com/facebook/react/blob/163365a07872337e04826c4f501565d43dbd2fd4/packages/react-client/src/ReactFlightClient.js#L189-L190
    const pendingActionQueue = new Promise((resolve, reject)=>{
        initialServerResponse.then((initialRSCPayload)=>{
            // setAppBuildId should be called only once, during JS initialization
            // and before any components have hydrated.
            (0, _appbuildid.setAppBuildId)(initialRSCPayload.b);
            const initialTimestamp = Date.now();
            resolve((0, _approuterinstance.createMutableActionQueue)((0, _createinitialrouterstate.createInitialRouterState)({
                navigatedAt: initialTimestamp,
                initialFlightData: initialRSCPayload.f,
                initialCanonicalUrlParts: initialRSCPayload.c,
                initialParallelRoutes: new Map(),
                location: window.location,
                couldBeIntercepted: initialRSCPayload.i,
                postponed: initialRSCPayload.s,
                prerendered: initialRSCPayload.S
            }), instrumentationHooks));
        }, (err)=>reject(err));
    });
    const reactEl = /*#__PURE__*/ (0, _jsxruntime.jsx)(StrictModeIfEnabled, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_headmanagercontextsharedruntime.HeadManagerContext.Provider, {
            value: {
                appDir: true
            },
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Root, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ServerRoot, {
                    pendingActionQueue: pendingActionQueue
                })
            })
        })
    });
    if (document.documentElement.id === '__next_error__') {
        let element = reactEl;
        // Server rendering failed, fall back to client-side rendering
        if ("TURBOPACK compile-time truthy", 1) {
            const { createRootLevelDevOverlayElement } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/client-entry.js [app-client] (ecmascript)");
            // Note this won't cause hydration mismatch because we are doing CSR w/o hydration
            element = createRootLevelDevOverlayElement(element);
        }
        _client.default.createRoot(appElement, reactRootOptions).render(element);
    } else {
        _react.default.startTransition(()=>{
            _client.default.hydrateRoot(appElement, reactEl, {
                ...reactRootOptions,
                formState: initialFormStateData
            });
        });
    }
    // TODO-APP: Remove this logic when Float has GC built-in in development.
    if ("TURBOPACK compile-time truthy", 1) {
        const { linkGc } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)");
        linkGc();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-next-turbopack.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _appbootstrap = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)");
const _onrecoverableerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)");
window.next.version += '-turbo';
self.__webpack_hash__ = '';
// eslint-disable-next-line @next/internal/typechecked-require
const instrumentationHooks = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/lib/require-instrumentation-client.js [app-client] (ecmascript)");
(0, _appbootstrap.appBootstrap)(()=>{
    const { hydrate } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)");
    try {
        hydrate(instrumentationHooks);
    } finally{
        if ("TURBOPACK compile-time truthy", 1) {
            const { getComponentStack, getOwnerStack } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/next-devtools/userspace/app/errors/stitched-error.js [app-client] (ecmascript)");
            const { renderAppDevOverlay } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.4.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/next-devtools/index.js [app-client] (ecmascript)");
            renderAppDevOverlay(getComponentStack, getOwnerStack, _onrecoverableerror.isRecoverableError);
        }
    }
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-next-turbopack.js.map
}}),
}]);

//# sourceMappingURL=09eae_next_dist_client_2e537b35._.js.map