module.exports = {

"[project]/.next-internal/server/app/[locale]/(index)/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/global-error.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/global-error.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/core/features/Test/test.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TestComponent": (()=>TestComponent),
    "setTest": (()=>setTest),
    "testReducer": (()=>testReducer),
    "testSelector": (()=>testSelector),
    "testSlice": (()=>testSlice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$8$2e$2_reac_01ce5908fe957531485f2bf27e69efe8$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@reduxjs+toolkit@2.8.2_reac_01ce5908fe957531485f2bf27e69efe8/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$re_dfff4051d5d995472298d46d0176251b$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-redux@9.2.0_@types+re_dfff4051d5d995472298d46d0176251b/node_modules/react-redux/dist/rsc.mjs [app-rsc] (ecmascript)");
;
;
;
;
const initialState = {
    test: {
        testKey: 'testValue'
    }
};
const testSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$reduxjs$2b$toolkit$40$2$2e$8$2e$2_reac_01ce5908fe957531485f2bf27e69efe8$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'test',
    initialState,
    reducers: {
        setTest: (state, action)=>{
            return {
                ...state,
                test: {
                    ...state.test,
                    ...action.payload
                }
            };
        }
    }
});
const { reducer: testReducer } = testSlice;
const { setTest } = testSlice.actions;
const testSelector = (state)=>state.test;
const TestComponent = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$re_dfff4051d5d995472298d46d0176251b$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDispatch"])();
    const testData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$redux$40$9$2e$2$2e$0_$40$types$2b$re_dfff4051d5d995472298d46d0176251b$2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSelector"])(testSelector);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            dispatch(setTest({
                testKey: `testValue_${Date.now()}`
            }));
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        dispatch
    ]);
    console.log(testData);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
};
}}),
"[project]/src/core/shared/lib/fetchService/fetchService.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchService": (()=>fetchService)
});
const fetchService = (config)=>{
    const { baseURL, ...configInit } = config;
    const requestInterceptors = [];
    const responseInterceptors = [];
    const useRequest = (onFulfilled, onRejected)=>{
        requestInterceptors.push({
            onFulfilled,
            onRejected
        });
    };
    const useResponse = (onFulfilled, onRejected)=>{
        responseInterceptors.push({
            onFulfilled,
            onRejected
        });
    };
    const fetch = async (input, init)=>{
        const requestInit = init ? {
            ...configInit,
            ...init,
            headers: {
                ...configInit?.headers,
                ...init?.headers
            }
        } : configInit;
        const requestConfig = await runRequestInterceptors({
            input,
            init: requestInit
        });
        let response;
        try {
            const requestUrl = baseURL && !input.toString().startsWith('http') ? `${baseURL}${input}` : input;
            response = await globalThis.fetch(requestUrl, requestConfig.init);
        } catch (error) {
            return handleFetchError(error, requestConfig);
        }
        return runResponseInterceptors(response, requestConfig);
    };
    const runRequestInterceptors = async (config)=>{
        let currentConfig = config;
        for (const { onFulfilled, onRejected } of requestInterceptors){
            currentConfig = await invokeRequestInterceptor(currentConfig, onFulfilled, onRejected);
        }
        return currentConfig;
    };
    const invokeRequestInterceptor = async (config, onFulfilled, onRejected)=>{
        try {
            if (!onFulfilled) {
                return config;
            }
            const modified = await onFulfilled(config);
            return modified ?? config;
        } catch (error) {
            if (onRejected) {
                const result = await onRejected(error);
                throw result ?? error;
            }
            throw error;
        }
    };
    const runResponseInterceptors = async (response, config)=>{
        let chainResult = response;
        for (const { onFulfilled, onRejected } of responseInterceptors){
            chainResult = await invokeResponseInterceptor(chainResult, config, onFulfilled, onRejected);
        }
        return chainResult;
    };
    const invokeResponseInterceptor = async (response, config, onFulfilled, onRejected)=>{
        try {
            if (!onFulfilled) {
                return response;
            }
            const modified = await onFulfilled(response, config);
            return modified ?? response;
        } catch (error) {
            if (onRejected) {
                const recovered = await onRejected(error, config);
                if (recovered instanceof Response) {
                    return recovered;
                }
                throw recovered ?? error;
            }
            throw error;
        }
    };
    const handleFetchError = async (error, config)=>{
        for (const { onRejected } of responseInterceptors){
            if (onRejected) {
                const recovered = await onRejected(error, config);
                if (recovered instanceof Response) {
                    return recovered;
                }
                throw recovered ?? error;
            }
        }
        throw error;
    };
    return {
        useRequest,
        useResponse,
        fetch
    };
};
}}),
"[project]/src/core/shared/api/routes/httpService/consts/index.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "httpServiceParams": (()=>httpServiceParams)
});
const httpServiceParams = {
    baseURL: 'http://77.223.98.221/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Client-Type': 'WEB'
    }
};
}}),
"[project]/src/core/shared/api/routes/httpService/server/httpService.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "httpService": (()=>httpService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$lib$2f$fetchService$2f$fetchService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/lib/fetchService/fetchService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$api$2f$routes$2f$httpService$2f$consts$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/api/routes/httpService/consts/index.ts [app-rsc] (ecmascript)");
;
;
const httpService = (()=>{
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$lib$2f$fetchService$2f$fetchService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchService"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$api$2f$routes$2f$httpService$2f$consts$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["httpServiceParams"]);
    // TODO: add interceptors
    return service;
})();
;
}}),
"[project]/src/core/pages/index.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MainPage": (()=>MainPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$api$2f$routes$2f$httpService$2f$server$2f$httpService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/api/routes/httpService/server/httpService.ts [app-rsc] (ecmascript)");
;
;
const MainPage = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$api$2f$routes$2f$httpService$2f$server$2f$httpService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["httpService"].fetch('test');
    console.log(response);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Main page"
    }, void 0, false, {
        fileName: "[project]/src/core/pages/index.tsx",
        lineNumber: 7,
        columnNumber: 12
    }, this);
};
}}),
"[project]/src/app/[locale]/(index)/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>IndexPage),
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$features$2f$Test$2f$test$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/features/Test/test.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$pages$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/pages/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/i18n/index.ts [app-rsc] (ecmascript)");
;
;
;
;
async function generateMetadata() {
    const { t } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerTranslation"])('meta');
    return {
        title: t('meta:main.title'),
        description: t('meta:main.description')
    };
}
async function IndexPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$pages$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MainPage"], {}, void 0, false, {
                fileName: "[project]/src/app/[locale]/(index)/page.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$features$2f$Test$2f$test$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TestComponent"], {}, void 0, false, {
                fileName: "[project]/src/app/[locale]/(index)/page.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[locale]/(index)/page.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/[locale]/(index)/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/(index)/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_77a08286._.js.map