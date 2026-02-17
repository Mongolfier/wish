(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/core/widgets/AuthFlow/model/constants/flowSteps.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthFlowStep": (()=>AuthFlowStep)
});
var AuthFlowStep = /*#__PURE__*/ function(AuthFlowStep) {
    AuthFlowStep["AuthType"] = "authType";
    AuthFlowStep["Login"] = "login";
    AuthFlowStep["Register"] = "register";
    AuthFlowStep["EnterEmail"] = "enterEmail";
    AuthFlowStep["EnterSignInPassword"] = "enterSignInPassword";
    AuthFlowStep["EnterSignUpPassword"] = "enterSignUpPassword";
    AuthFlowStep["HaveAccount"] = "haveAccount";
    AuthFlowStep["FinishSignUp"] = "finishSignUp";
    return AuthFlowStep;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/shared/router/routes/auth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "authRoutes": (()=>authRoutes)
});
const rootPath = '/auth';
const authRoutes = {
    index: rootPath
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/shared/router/routes/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "routes": (()=>routes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/routes/auth.ts [app-client] (ecmascript)");
;
const routes = {
    index: '/',
    auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authRoutes"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/shared/router/protected.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "authenticatedForbiddenRoutes": (()=>authenticatedForbiddenRoutes),
    "isForbiddenRoute": (()=>isForbiddenRoute),
    "unauthenticatedForbiddenRoutes": (()=>unauthenticatedForbiddenRoutes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/routes/index.ts [app-client] (ecmascript)");
;
const unauthenticatedForbiddenRoutes = [];
const authenticatedForbiddenRoutes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].auth.index
];
const isForbiddenRoute = (isAuthUser, pathname)=>{
    if (isAuthUser) {
        return authenticatedForbiddenRoutes.some((route)=>pathname.includes(route));
    }
    return unauthenticatedForbiddenRoutes.some((route)=>pathname.includes(route));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/shared/router/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$protected$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/protected.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/routes/index.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/shared/router/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$protected$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/protected.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/routes/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/core/shared/router/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/core/widgets/AuthFlow/model/constants/stepsResults.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthType": (()=>AuthType),
    "StepEnterEmailResult": (()=>StepEnterEmailResult),
    "StepEnterSignUpPasswordResultCode": (()=>StepEnterSignUpPasswordResultCode),
    "StepFinishSignUpResult": (()=>StepFinishSignUpResult)
});
var AuthType = /*#__PURE__*/ function(AuthType) {
    AuthType["Login"] = "login";
    AuthType["Register"] = "register";
    return AuthType;
}({});
var StepEnterEmailResult = /*#__PURE__*/ function(StepEnterEmailResult) {
    StepEnterEmailResult["Registration"] = "registration";
    StepEnterEmailResult["SignIn"] = "sign-in";
    return StepEnterEmailResult;
}({});
var StepEnterSignUpPasswordResultCode = /*#__PURE__*/ function(StepEnterSignUpPasswordResultCode) {
    // FIXME: add guard error code
    StepEnterSignUpPasswordResultCode["EmailCodeRequired"] = "";
    return StepEnterSignUpPasswordResultCode;
}({});
var StepFinishSignUpResult = /*#__PURE__*/ function(StepFinishSignUpResult) {
    StepFinishSignUpResult["Success"] = "success";
    return StepFinishSignUpResult;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/widgets/AuthFlow/model/constants/withoutBackButtonSteps.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "WITHOUT_BACK_BUTTON_STEPS": (()=>WITHOUT_BACK_BUTTON_STEPS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/model/constants/flowSteps.ts [app-client] (ecmascript)");
;
const WITHOUT_BACK_BUTTON_STEPS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlowStep"].EnterEmail
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/widgets/AuthFlow/ui/AuthFlow/useAuthFlow.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAuthFlow": (()=>useAuthFlow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/model/constants/flowSteps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$stepsResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/model/constants/stepsResults.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$withoutBackButtonSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/model/constants/withoutBackButtonSteps.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useAuthFlow = ({ onSuccess })=>{
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlowStep"].AuthType);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [authType, setAuthType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleResetToAuthTypeStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuthFlow.useCallback[handleResetToAuthTypeStep]": ()=>{
            setCurrentStep(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlowStep"].AuthType);
            setAuthType(null);
        }
    }["useAuthFlow.useCallback[handleResetToAuthTypeStep]"], []);
    const handleSetCurrentEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuthFlow.useCallback[handleSetCurrentEmail]": (email)=>{
            setEmail(email);
        }
    }["useAuthFlow.useCallback[handleSetCurrentEmail]"], []);
    const handleAuthTypeSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuthFlow.useCallback[handleAuthTypeSelect]": (type)=>{
            setAuthType(type);
            switch(type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$stepsResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthType"].Login:
                    setCurrentStep(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlowStep"].Login);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$stepsResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthType"].Register:
                    setCurrentStep(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlowStep"].Register);
                    break;
            }
        }
    }["useAuthFlow.useCallback[handleAuthTypeSelect]"], []);
    const handleStepEnterEmailComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuthFlow.useCallback[handleStepEnterEmailComplete]": (result)=>{
            switch(result){
                case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$stepsResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepEnterEmailResult"].Registration:
                    setCurrentStep(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlowStep"].EnterSignUpPassword);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$stepsResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepEnterEmailResult"].SignIn:
                    setCurrentStep(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlowStep"].EnterSignInPassword);
                    break;
            }
        }
    }["useAuthFlow.useCallback[handleStepEnterEmailComplete]"], []);
    const handleStepFinishSignUpComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuthFlow.useCallback[handleStepFinishSignUpComplete]": async (result)=>{
            if (result.code === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$stepsResults$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepFinishSignUpResult"].Success) {
                onSuccess();
            }
        }
    }["useAuthFlow.useCallback[handleStepFinishSignUpComplete]"], [
        onSuccess
    ]);
    return {
        currentStep,
        email,
        authType,
        handleResetToAuthTypeStep,
        handleSetCurrentEmail,
        handleAuthTypeSelect,
        handleStepEnterEmailComplete,
        handleStepFinishSignUpComplete,
        showBackButton: !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$withoutBackButtonSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WITHOUT_BACK_BUTTON_STEPS"].includes(currentStep)
    };
};
_s(useAuthFlow, "6qYRWfCTwrPMzdL35b8PwT8mzA4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/shared/hooks/useEmailInput.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useEmailInput": (()=>useEmailInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useEmailInput = ({ onEmailChange })=>{
    _s();
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEmailInput.useCallback[handleInputChange]": (e)=>{
            const value = e.currentTarget.value;
            const valueWithoutSpaces = value.replace(/\s/g, '');
            onEmailChange(valueWithoutSpaces);
        }
    }["useEmailInput.useCallback[handleInputChange]"], [
        onEmailChange
    ]);
    return {
        handleInputChange
    };
};
_s(useEmailInput, "P0U2HpB8jyysCZZEh/2E/wxKpnw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/widgets/AuthFlow/hooks/useAuthFlowDetermination.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAuthFlowDetermination": (()=>useAuthFlowDetermination)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useAuthFlowDetermination = (onComplete)=>{
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleError = ()=>{
        setHasError(true);
        setErrorMessage('common:errors.serverNotAvailableTryAgainLater');
    };
    const determineFlow = async (email)=>{
        setIsLoading(true);
        try {
            const response = await fetchAuthFlow(email);
            if (!response.ok) {
                handleError();
                return;
            }
            const data = await response.json();
            onComplete(data.data.flow);
        } catch  {
            handleError();
        } finally{
            setIsLoading(false);
        }
    };
    return {
        isLoading,
        determineFlow,
        hasError,
        errorMessage
    };
};
_s(useAuthFlowDetermination, "oXYQGtkkcBBhbme3VVkbQKUp13Q=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/widgets/AuthFlow/ui/components/Support/Support.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
});
}}),
"[project]/src/core/widgets/AuthFlow/ui/components/Support/Support.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Support": (()=>Support)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$components$2f$Support$2f$Support$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/ui/components/Support/Support.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Support = ()=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])([
        'auth',
        'common'
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$components$2f$Support$2f$Support$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].support,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$components$2f$Support$2f$Support$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].supportText,
                children: t('auth:needHelp')
            }, void 0, false, {
                fileName: "[project]/src/core/widgets/AuthFlow/ui/components/Support/Support.tsx",
                lineNumber: 10,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `mailto:${t('common:links.supportEmail')}`,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$components$2f$Support$2f$Support$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].supportLink,
                children: t('common:links.supportEmail')
            }, void 0, false, {
                fileName: "[project]/src/core/widgets/AuthFlow/ui/components/Support/Support.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/core/widgets/AuthFlow/ui/components/Support/Support.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this);
};
_s(Support, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Support;
var _c;
__turbopack_context__.k.register(_c, "Support");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/widgets/AuthFlow/ui/steps/StepEnterEmail/StepEnterEmail.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StepEnterEmail": (()=>StepEnterEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$1_r_ee5d66a293854c4a3bd03ceecae8578d$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@hookform+resolvers@5.2.1_r_ee5d66a293854c4a3bd03ceecae8578d/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$61$2e$1_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-hook-form@7.61.1_react@19.1.1/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$hooks$2f$useEmailInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/hooks/useEmailInput.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$hooks$2f$useAuthFlowDetermination$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/hooks/useAuthFlowDetermination.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$components$2f$Support$2f$Support$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/ui/components/Support/Support.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const emailSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Please enter a valid email address")
});
const StepEnterEmail = ({ onComplete, onEmailChange, email })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])([
        "auth"
    ]);
    // Form setup
    const { register, handleSubmit, formState: { errors }, setValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$61$2e$1_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$1_r_ee5d66a293854c4a3bd03ceecae8578d$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(emailSchema),
        defaultValues: {
            email
        }
    });
    const { handleInputChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$hooks$2f$useEmailInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmailInput"])({
        onEmailChange: {
            "StepEnterEmail.useEmailInput": (newEmail)=>{
                setValue("email", newEmail);
            }
        }["StepEnterEmail.useEmailInput"]
    });
    const { determineFlow, isLoading, hasError: hasDeterminationError, errorMessage: determinationErrorMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$hooks$2f$useAuthFlowDetermination$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthFlowDetermination"])(onComplete);
    const onSubmit = (data)=>{
        if (isLoading) return;
        onEmailChange(data.email);
        determineFlow(data.email);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit(onSubmit),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "email",
                    children: t("email")
                }, void 0, false, {
                    fileName: "[project]/src/core/widgets/AuthFlow/ui/steps/StepEnterEmail/StepEnterEmail.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    id: "email",
                    ...register("email"),
                    onChange: handleInputChange,
                    placeholder: t("enterEmail")
                }, void 0, false, {
                    fileName: "[project]/src/core/widgets/AuthFlow/ui/steps/StepEnterEmail/StepEnterEmail.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "error",
                    children: errors.email.message
                }, void 0, false, {
                    fileName: "[project]/src/core/widgets/AuthFlow/ui/steps/StepEnterEmail/StepEnterEmail.tsx",
                    lineNumber: 76,
                    columnNumber: 26
                }, this),
                hasDeterminationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "error",
                    children: determinationErrorMessage
                }, void 0, false, {
                    fileName: "[project]/src/core/widgets/AuthFlow/ui/steps/StepEnterEmail/StepEnterEmail.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isLoading,
                    children: isLoading ? t("loading") : t("continue")
                }, void 0, false, {
                    fileName: "[project]/src/core/widgets/AuthFlow/ui/steps/StepEnterEmail/StepEnterEmail.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$components$2f$Support$2f$Support$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Support"], {}, void 0, false, {
                    fileName: "[project]/src/core/widgets/AuthFlow/ui/steps/StepEnterEmail/StepEnterEmail.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/core/widgets/AuthFlow/ui/steps/StepEnterEmail/StepEnterEmail.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/core/widgets/AuthFlow/ui/steps/StepEnterEmail/StepEnterEmail.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
};
_s(StepEnterEmail, "jYjjR/uzKZq07jpCaUda1uT0vxM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$61$2e$1_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$hooks$2f$useEmailInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEmailInput"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$hooks$2f$useAuthFlowDetermination$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthFlowDetermination"]
    ];
});
_c = StepEnterEmail;
var _c;
__turbopack_context__.k.register(_c, "StepEnterEmail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/widgets/AuthFlow/ui/AuthFlow/AuthFlow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthFlow": (()=>AuthFlow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/core/shared/router/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/routes/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/model/constants/flowSteps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlow$2f$useAuthFlow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/ui/AuthFlow/useAuthFlow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$steps$2f$StepEnterEmail$2f$StepEnterEmail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/ui/steps/StepEnterEmail/StepEnterEmail.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const AuthFlow = ({ onStepChange })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const onAuthSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AuthFlow.useCallback[onAuthSuccess]": ()=>{
            router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routes"].index);
        }
    }["AuthFlow.useCallback[onAuthSuccess]"], [
        router
    ]);
    const { currentStep, email, // handleResetToEnterEmailStep,
    handleSetCurrentEmail, handleStepEnterEmailComplete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlow$2f$useAuthFlow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthFlow"])({
        onSuccess: onAuthSuccess
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthFlow.useEffect": ()=>{
            onStepChange?.(currentStep);
        }
    }["AuthFlow.useEffect"], [
        currentStep,
        onStepChange
    ]);
    const authStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AuthFlow.useMemo[authStep]": ()=>{
            switch(currentStep){
                case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlowStep"].EnterEmail:
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$steps$2f$StepEnterEmail$2f$StepEnterEmail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepEnterEmail"], {
                        email: email,
                        onEmailChange: handleSetCurrentEmail,
                        onComplete: handleStepEnterEmailComplete
                    }, void 0, false, {
                        fileName: "[project]/src/core/widgets/AuthFlow/ui/AuthFlow/AuthFlow.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this);
                default:
                    return null;
            }
        }
    }["AuthFlow.useMemo[authStep]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: authStep
    }, void 0, false, {
        fileName: "[project]/src/core/widgets/AuthFlow/ui/AuthFlow/AuthFlow.tsx",
        lineNumber: 52,
        columnNumber: 10
    }, this);
};
_s(AuthFlow, "wFc1qWoNUODh6OPv95tusSjIaVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlow$2f$useAuthFlow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthFlow"]
    ];
});
_c = AuthFlow;
var _c;
__turbopack_context__.k.register(_c, "AuthFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/widgets/AuthFlow/ui/AuthFlowBlock/AuthFlowBlock.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
});
}}),
"[project]/src/core/widgets/AuthFlow/ui/AuthFlowBlock/AuthFlowBlock.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthFlowBlock": (()=>AuthFlowBlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$features$2f$LanguageSelector$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/features/LanguageSelector/ui/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/model/constants/flowSteps.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlow$2f$AuthFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/ui/AuthFlow/AuthFlow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlowBlock$2f$AuthFlowBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/ui/AuthFlowBlock/AuthFlowBlock.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const AuthFlowBlock = ()=>{
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlowBlock$2f$AuthFlowBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authFlowBlock,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlowBlock$2f$AuthFlowBlock$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlow$2f$AuthFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlow"], {
                    onStepChange: setCurrentStep
                }, void 0, false, {
                    fileName: "[project]/src/core/widgets/AuthFlow/ui/AuthFlowBlock/AuthFlowBlock.tsx",
                    lineNumber: 18,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/core/widgets/AuthFlow/ui/AuthFlowBlock/AuthFlowBlock.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, this),
            currentStep === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$model$2f$constants$2f$flowSteps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlowStep"].EnterEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$features$2f$LanguageSelector$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSelector"], {}, void 0, false, {
                fileName: "[project]/src/core/widgets/AuthFlow/ui/AuthFlowBlock/AuthFlowBlock.tsx",
                lineNumber: 21,
                columnNumber: 48
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/core/widgets/AuthFlow/ui/AuthFlowBlock/AuthFlowBlock.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this);
};
_s(AuthFlowBlock, "5gOGyYAYhPmoKE8gyAkcePPawfM=");
_c = AuthFlowBlock;
var _c;
__turbopack_context__.k.register(_c, "AuthFlowBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/widgets/AuthFlow/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlowBlock$2f$AuthFlowBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/ui/AuthFlowBlock/AuthFlowBlock.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/widgets/AuthFlow/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlowBlock$2f$AuthFlowBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/ui/AuthFlowBlock/AuthFlowBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/core/pages/Auth/Auth.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Auth": (()=>Auth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlowBlock$2f$AuthFlowBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/widgets/AuthFlow/ui/AuthFlowBlock/AuthFlowBlock.tsx [app-client] (ecmascript)");
'use client';
;
;
const Auth = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$widgets$2f$AuthFlow$2f$ui$2f$AuthFlowBlock$2f$AuthFlowBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthFlowBlock"], {}, void 0, false, {
            fileName: "[project]/src/core/pages/Auth/Auth.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/core/pages/Auth/Auth.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = Auth;
var _c;
__turbopack_context__.k.register(_c, "Auth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_core_a4ed7e9c._.js.map