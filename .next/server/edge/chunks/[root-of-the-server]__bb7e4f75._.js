(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__bb7e4f75._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/public/locales/en/header.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"aboutService\":\"About service\",\"login\":\"Login\"}"));}}),
"[project]/public/locales/en/lang.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"ru\":\"Русский\",\"en\":\"English\",\"abbrs\":{\"ru\":\"Ру\",\"en\":\"En\"}}"));}}),
"[project]/public/locales/en/meta.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"main\":{\"title\":\"Main page\",\"description\":\"Main page description\"}}"));}}),
"[project]/public/locales/en/signIn.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"title\":\"Sign in to your account\",\"email\":\"E-mail\",\"password\":\"Password\",\"signIn\":\"Sign in\",\"newUser\":\"New user?\",\"signUp\":\"Sign up\",\"goToSignUp\":\"No account? <SignUpLink>Sign up<SignUpLink />\"}"));}}),
"[project]/public/locales/en/translations.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{}"));}}),
"[project]/public/locales/ru/header.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"aboutService\":\"О сервисе\",\"login\":\"Войти\"}"));}}),
"[project]/public/locales/ru/lang.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"ru\":\"Русский\",\"en\":\"English\",\"abbrs\":{\"ru\":\"Ру\",\"en\":\"En\"}}"));}}),
"[project]/public/locales/ru/meta.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"main\":{\"title\":\"Главная страница\",\"description\":\"Описание главной страницы\"}}"));}}),
"[project]/public/locales/ru/signIn.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"title\":\"Вход в аккаунт\",\"email\":\"E-mail\",\"password\":\"Пароль\",\"signIn\":\"Войти\",\"newUser\":\"Новый пользователь?\",\"signUp\":\"Зарегистрироваться\",\"goToSignUp\":\"Нет аккаунта? <SignUpLink>Зарегистрироваться<SignUpLink />\"}"));}}),
"[project]/public/locales/ru/translations.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{}"));}}),
"[project]/src/core/shared/i18n/config.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cookieName": (()=>cookieName),
    "defaultNS": (()=>defaultNS),
    "getI18nConfig": (()=>getI18nConfig),
    "normalizedFallbackLng": (()=>normalizedFallbackLng),
    "normalizedLanguages": (()=>normalizedLanguages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$2d$resources$2d$to$2d$backend$40$1$2e$2$2e$1$2f$node_modules$2f$i18next$2d$resources$2d$to$2d$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/i18next-resources-to-backend@1.2.1/node_modules/i18next-resources-to-backend/dist/esm/index.js [middleware-edge] (ecmascript)");
;
const fallbackLng = 'ru';
const normalizedFallbackLng = fallbackLng.toLowerCase();
const languages = [
    fallbackLng,
    'en'
];
const normalizedLanguages = languages.map((lang)=>lang.toLowerCase());
const defaultNS = 'translations';
const cookieName = 'locale';
function getI18nConfig(lng = fallbackLng, ns = defaultNS) {
    return {
        supportedLngs: normalizedLanguages,
        fallbackLng,
        lowerCaseLng: true,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
        backend: {
            backends: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$2d$resources$2d$to$2d$backend$40$1$2e$2$2e$1$2f$node_modules$2f$i18next$2d$resources$2d$to$2d$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])((lng, ns)=>__turbopack_context__.f({
                        "../../../../public/locales//en/header.json": {
                            id: ()=>"[project]/public/locales/en/header.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/en/header.json (json)"))
                        },
                        "../../../../public/locales//en/lang.json": {
                            id: ()=>"[project]/public/locales/en/lang.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/en/lang.json (json)"))
                        },
                        "../../../../public/locales//en/meta.json": {
                            id: ()=>"[project]/public/locales/en/meta.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/en/meta.json (json)"))
                        },
                        "../../../../public/locales//en/signIn.json": {
                            id: ()=>"[project]/public/locales/en/signIn.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/en/signIn.json (json)"))
                        },
                        "../../../../public/locales//en/translations.json": {
                            id: ()=>"[project]/public/locales/en/translations.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/en/translations.json (json)"))
                        },
                        "../../../../public/locales//ru/header.json": {
                            id: ()=>"[project]/public/locales/ru/header.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/ru/header.json (json)"))
                        },
                        "../../../../public/locales//ru/lang.json": {
                            id: ()=>"[project]/public/locales/ru/lang.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/ru/lang.json (json)"))
                        },
                        "../../../../public/locales//ru/meta.json": {
                            id: ()=>"[project]/public/locales/ru/meta.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/ru/meta.json (json)"))
                        },
                        "../../../../public/locales//ru/signIn.json": {
                            id: ()=>"[project]/public/locales/ru/signIn.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/ru/signIn.json (json)"))
                        },
                        "../../../../public/locales//ru/translations.json": {
                            id: ()=>"[project]/public/locales/ru/translations.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/ru/translations.json (json)"))
                        },
                        "../../../../public/locales/en/header.json": {
                            id: ()=>"[project]/public/locales/en/header.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/en/header.json (json)"))
                        },
                        "../../../../public/locales/en/lang.json": {
                            id: ()=>"[project]/public/locales/en/lang.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/en/lang.json (json)"))
                        },
                        "../../../../public/locales/en/meta.json": {
                            id: ()=>"[project]/public/locales/en/meta.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/en/meta.json (json)"))
                        },
                        "../../../../public/locales/en/signIn.json": {
                            id: ()=>"[project]/public/locales/en/signIn.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/en/signIn.json (json)"))
                        },
                        "../../../../public/locales/en/translations.json": {
                            id: ()=>"[project]/public/locales/en/translations.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/en/translations.json (json)"))
                        },
                        "../../../../public/locales/ru/header.json": {
                            id: ()=>"[project]/public/locales/ru/header.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/ru/header.json (json)"))
                        },
                        "../../../../public/locales/ru/lang.json": {
                            id: ()=>"[project]/public/locales/ru/lang.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/ru/lang.json (json)"))
                        },
                        "../../../../public/locales/ru/meta.json": {
                            id: ()=>"[project]/public/locales/ru/meta.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/ru/meta.json (json)"))
                        },
                        "../../../../public/locales/ru/signIn.json": {
                            id: ()=>"[project]/public/locales/ru/signIn.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/ru/signIn.json (json)"))
                        },
                        "../../../../public/locales/ru/translations.json": {
                            id: ()=>"[project]/public/locales/ru/translations.json (json)",
                            module: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/public/locales/ru/translations.json (json)"))
                        }
                    }).import(`../../../../public/locales/${lng}/${ns}.json`))
            ]
        }
    };
}
}}),
"[project]/src/middlewares/localization.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "localizationMiddleware": (()=>localizationMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$accept$2d$language$40$3$2e$0$2e$20$2f$node_modules$2f$accept$2d$language$2f$Build$2f$Source$2f$AcceptLanguage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/accept-language@3.0.20/node_modules/accept-language/Build/Source/AcceptLanguage.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/i18n/config.ts [middleware-edge] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$accept$2d$language$40$3$2e$0$2e$20$2f$node_modules$2f$accept$2d$language$2f$Build$2f$Source$2f$AcceptLanguage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].languages(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizedLanguages"]);
function localizationMiddleware(req) {
    let lng = null;
    const pathnameLng = req.nextUrl.pathname.split('/')[1].toLowerCase();
    if (pathnameLng && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizedLanguages"].includes(pathnameLng)) {
        lng = pathnameLng;
    }
    if (!lng && req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookieName"])?.value.toLowerCase()) {
        const cookieLng = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$accept$2d$language$40$3$2e$0$2e$20$2f$node_modules$2f$accept$2d$language$2f$Build$2f$Source$2f$AcceptLanguage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].get(req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookieName"])?.value)?.toLowerCase();
        if (cookieLng && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizedLanguages"].includes(cookieLng)) {
            lng = cookieLng;
        }
    }
    if (!lng) {
        const browserLng = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$accept$2d$language$40$3$2e$0$2e$20$2f$node_modules$2f$accept$2d$language$2f$Build$2f$Source$2f$AcceptLanguage$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].get(req.headers.get('Accept-Language'))?.toLowerCase();
        if (browserLng && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizedLanguages"].includes(browserLng)) {
            lng = browserLng;
        }
    }
    if (!lng) {
        lng = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizedFallbackLng"];
    }
    if (lng && req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookieName"])?.value.toLowerCase() && lng !== req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookieName"])?.value.toLowerCase()) {
        // const response = NextResponse.redirect(
        // 	new URL(`${req.nextUrl.pathname}${req.nextUrl.search}`, req.url),
        // );
        req.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookieName"], lng);
    // return response;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["normalizedLanguages"].some((loc)=>req.nextUrl.pathname.startsWith(`/${loc}`)) && !req.nextUrl.pathname.startsWith('/_next')) {
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/${lng.toLowerCase()}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url));
        response.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookieName"], lng);
        return response;
    }
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    return response;
}
}}),
"[project]/src/core/shared/router/routes/auth.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authRoutes": (()=>authRoutes)
});
const rootPath = '/auth';
const authRoutes = {
    index: rootPath
};
}}),
"[project]/src/core/shared/router/routes/index.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "routes": (()=>routes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/routes/auth.ts [middleware-edge] (ecmascript)");
;
const routes = {
    index: '/',
    auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$auth$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["authRoutes"]
};
}}),
"[project]/src/core/shared/router/protected.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authenticatedForbiddenRoutes": (()=>authenticatedForbiddenRoutes),
    "isForbiddenRoute": (()=>isForbiddenRoute),
    "unauthenticatedForbiddenRoutes": (()=>unauthenticatedForbiddenRoutes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/routes/index.ts [middleware-edge] (ecmascript)");
;
const unauthenticatedForbiddenRoutes = [];
const authenticatedForbiddenRoutes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routes"].auth.index
];
const isForbiddenRoute = (isAuthUser, pathname)=>{
    if (isAuthUser) {
        return authenticatedForbiddenRoutes.some((route)=>pathname.includes(route));
    }
    return unauthenticatedForbiddenRoutes.some((route)=>pathname.includes(route));
};
}}),
"[project]/src/core/shared/router/index.ts [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$protected$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/protected.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/routes/index.ts [middleware-edge] (ecmascript)");
;
;
}}),
"[project]/src/core/shared/router/index.ts [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$protected$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/protected.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/routes/index.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/core/shared/router/index.ts [middleware-edge] (ecmascript) <locals>");
}}),
"[project]/src/middlewares/protectedRoutes.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "protectedRoutesMiddleware": (()=>protectedRoutesMiddleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/core/shared/router/index.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$protected$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/protected.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/router/routes/index.ts [middleware-edge] (ecmascript)");
;
;
function protectedRoutesMiddleware(request) {
    const isAuthUser = request.cookies.has('accessToken');
    const pathname = request.nextUrl.pathname;
    const queryParams = request.nextUrl.search;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$protected$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isForbiddenRoute"])(isAuthUser, pathname)) {
        const redirectPathname = isAuthUser ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routes"].index : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$router$2f$routes$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routes"].auth.index;
        const url = new URL(`${redirectPathname}${queryParams}`, request.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$middlewares$2f$localization$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/middlewares/localization.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$middlewares$2f$protectedRoutes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/middlewares/protectedRoutes.ts [middleware-edge] (ecmascript)");
;
;
;
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)'
    ]
};
const middlewareChain = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$middlewares$2f$localization$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["localizationMiddleware"],
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$middlewares$2f$protectedRoutes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["protectedRoutesMiddleware"]
];
function middleware(request) {
    for (const mw of middlewareChain){
        const response = mw(request);
        if (response && response.status >= 300 && response.status < 400) {
            return response;
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__bb7e4f75._.js.map