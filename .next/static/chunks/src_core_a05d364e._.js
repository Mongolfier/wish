(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/core/app/providers/ClientCookiesProvider/ClientCookiesProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientCookiesProvider": (()=>ClientCookiesProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$cookie$40$8$2e$0$2e$1_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-cookie@8.0.1_@types+react@19.1.9_react@19.1.1/node_modules/react-cookie/esm/index.mjs [app-client] (ecmascript) <locals>");
'use client';
;
;
function ClientCookiesProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$cookie$40$8$2e$0$2e$1_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CookiesProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/core/app/providers/ClientCookiesProvider/ClientCookiesProvider.tsx",
        lineNumber: 13,
        columnNumber: 12
    }, this);
}
_c = ClientCookiesProvider;
var _c;
__turbopack_context__.k.register(_c, "ClientCookiesProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/shared/i18n/config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cookieName": (()=>cookieName),
    "defaultNS": (()=>defaultNS),
    "getI18nConfig": (()=>getI18nConfig),
    "normalizedFallbackLng": (()=>normalizedFallbackLng),
    "normalizedLanguages": (()=>normalizedLanguages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$2d$resources$2d$to$2d$backend$40$1$2e$2$2e$1$2f$node_modules$2f$i18next$2d$resources$2d$to$2d$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/i18next-resources-to-backend@1.2.1/node_modules/i18next-resources-to-backend/dist/esm/index.js [app-client] (ecmascript)");
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$2d$resources$2d$to$2d$backend$40$1$2e$2$2e$1$2f$node_modules$2f$i18next$2d$resources$2d$to$2d$backend$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((lng, ns)=>__turbopack_context__.f({
                        "../../../../public/locales//en/header.json": {
                            id: ()=>"[project]/public/locales/en/header.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/en/header.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales//en/lang.json": {
                            id: ()=>"[project]/public/locales/en/lang.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/en/lang.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales//en/meta.json": {
                            id: ()=>"[project]/public/locales/en/meta.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/en/meta.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales//en/signIn.json": {
                            id: ()=>"[project]/public/locales/en/signIn.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/en/signIn.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales//en/translations.json": {
                            id: ()=>"[project]/public/locales/en/translations.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/en/translations.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales//ru/header.json": {
                            id: ()=>"[project]/public/locales/ru/header.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/ru/header.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales//ru/lang.json": {
                            id: ()=>"[project]/public/locales/ru/lang.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/ru/lang.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales//ru/meta.json": {
                            id: ()=>"[project]/public/locales/ru/meta.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/ru/meta.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales//ru/signIn.json": {
                            id: ()=>"[project]/public/locales/ru/signIn.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/ru/signIn.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales//ru/translations.json": {
                            id: ()=>"[project]/public/locales/ru/translations.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/ru/translations.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales/en/header.json": {
                            id: ()=>"[project]/public/locales/en/header.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/en/header.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales/en/lang.json": {
                            id: ()=>"[project]/public/locales/en/lang.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/en/lang.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales/en/meta.json": {
                            id: ()=>"[project]/public/locales/en/meta.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/en/meta.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales/en/signIn.json": {
                            id: ()=>"[project]/public/locales/en/signIn.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/en/signIn.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales/en/translations.json": {
                            id: ()=>"[project]/public/locales/en/translations.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/en/translations.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales/ru/header.json": {
                            id: ()=>"[project]/public/locales/ru/header.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/ru/header.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales/ru/lang.json": {
                            id: ()=>"[project]/public/locales/ru/lang.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/ru/lang.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales/ru/meta.json": {
                            id: ()=>"[project]/public/locales/ru/meta.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/ru/meta.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales/ru/signIn.json": {
                            id: ()=>"[project]/public/locales/ru/signIn.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/ru/signIn.json (json, async loader)")(__turbopack_context__.i)
                        },
                        "../../../../public/locales/ru/translations.json": {
                            id: ()=>"[project]/public/locales/ru/translations.json (json, async loader)",
                            module: ()=>__turbopack_context__.r("[project]/public/locales/ru/translations.json (json, async loader)")(__turbopack_context__.i)
                        }
                    }).import(`../../../../public/locales/${lng}/${ns}.json`))
            ]
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/shared/i18n/useLocaleCookie.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLocaleCookie": (()=>useLocaleCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$cookie$40$8$2e$0$2e$1_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-cookie@8.0.1_@types+react@19.1.9_react@19.1.1/node_modules/react-cookie/esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/i18n/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useLocaleCookie() {
    _s();
    const [cookies, setCookieOrigin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$cookie$40$8$2e$0$2e$1_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCookies"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookieName"]
    ]);
    function setCookie(value, options) {
        return setCookieOrigin(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookieName"], value, options);
    }
    return [
        cookies.locale,
        setCookie
    ];
}
_s(useLocaleCookie, "lI+TPeRcoecZKlsvZgrhXb/bzVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$cookie$40$8$2e$0$2e$1_$40$types$2b$react$40$19$2e$1$2e$9_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$cookie$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCookies"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/shared/i18n/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "I18nProvider": (()=>I18nProvider),
    "useTranslation": (()=>useTranslation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$6$2e$1_i18nex_f693ab0031a6fd91e941af9d06f3cad7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@15.6.1_i18nex_f693ab0031a6fd91e941af9d06f3cad7/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$6$2e$1_i18nex_f693ab0031a6fd91e941af9d06f3cad7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@15.6.1_i18nex_f693ab0031a6fd91e941af9d06f3cad7/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$6$2e$1_i18nex_f693ab0031a6fd91e941af9d06f3cad7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-i18next@15.6.1_i18nex_f693ab0031a6fd91e941af9d06f3cad7/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$25$2e$3$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/i18next@25.3.2_typescript@5.8.3/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$2d$browser$2d$languagedetector$40$8$2e$2$2e$0$2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/i18next-browser-languagedetector@8.2.0/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$2d$chained$2d$backend$40$4$2e$6$2e$2$2f$node_modules$2f$i18next$2d$chained$2d$backend$2f$dist$2f$esm$2f$i18nextChainedBackend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/i18next-chained-backend@4.6.2/node_modules/i18next-chained-backend/dist/esm/i18nextChainedBackend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/i18n/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$useLocaleCookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/i18n/useLocaleCookie.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const runsOnServerSide = "object" === 'undefined';
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$25$2e$3$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$6$2e$1_i18nex_f693ab0031a6fd91e941af9d06f3cad7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$2d$browser$2d$languagedetector$40$8$2e$2$2e$0$2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$2d$chained$2d$backend$40$4$2e$6$2e$2$2f$node_modules$2f$i18next$2d$chained$2d$backend$2f$dist$2f$esm$2f$i18nextChainedBackend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).init({
    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getI18nConfig"])(),
    detection: {
        order: [
            'path',
            'navigator'
        ],
        lookupFromPathIndex: 0,
        lookupFromSubdomainIndex: 0
    },
    preload: []
});
function useTranslation(ns, options) {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = params?.locale || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizedFallbackLng"];
    const newOptions = {
        ...options,
        lng: Array.isArray(locale) ? locale[0] : locale
    };
    const ret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$6$2e$1_i18nex_f693ab0031a6fd91e941af9d06f3cad7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(ns, newOptions);
    const { i18n } = ret;
    if (runsOnServerSide && newOptions.lng && String(i18n.resolvedLanguage) !== String(newOptions.lng)) {
        "TURBOPACK unreachable";
    }
    return ret;
}
_s(useTranslation, "1nJYH620/qx+yzOkOhJNHFmoXvM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$i18next$40$15$2e$6$2e$1_i18nex_f693ab0031a6fd91e941af9d06f3cad7$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
const useIntlParams = ()=>{
    _s1();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = params?.locale || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizedFallbackLng"];
    const [localeCookie, setLocaleCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$useLocaleCookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocaleCookie"])();
    const [activeLng, setActiveLng] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$25$2e$3$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].resolvedLanguage);
    const lng = Array.isArray(locale) ? locale[0] : locale;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntlParams.useEffect": ()=>{
            if (activeLng === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$25$2e$3$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].resolvedLanguage) {
                return;
            }
            setActiveLng(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$25$2e$3$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].resolvedLanguage);
        }
    }["useIntlParams.useEffect"], [
        activeLng,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$25$2e$3$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].resolvedLanguage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntlParams.useEffect": ()=>{
            if (!lng || String(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$25$2e$3$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].resolvedLanguage) === String(lng)) {
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$i18next$40$25$2e$3$2e$2_typescript$40$5$2e$8$2e$3$2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].changeLanguage(lng);
        }
    }["useIntlParams.useEffect"], [
        lng
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntlParams.useEffect": ()=>{
            if (localeCookie === locale) {
                return;
            }
            setLocaleCookie(locale, {
                path: '/'
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useIntlParams.useEffect"], [
        locale,
        localeCookie
    ]);
    return {
        activeLng,
        lng
    };
};
_s1(useIntlParams, "iBor8+eGDYgJd2qYj6I5WcalOgs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$useLocaleCookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocaleCookie"]
    ];
});
const I18nProvider = ({ children })=>{
    _s2();
    useIntlParams();
    return children;
};
_s2(I18nProvider, "SUROyEIFWfFZvVfh9Si59ABuZfk=", false, function() {
    return [
        useIntlParams
    ];
});
_c = I18nProvider;
var _c;
__turbopack_context__.k.register(_c, "I18nProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/features/LanguageSelector/hooks/useLanguageSelect.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLanguageSelect": (()=>useLanguageSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/i18n/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$useLocaleCookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/shared/i18n/useLocaleCookie.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const useLanguageSelect = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [_, setLocaleCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$useLocaleCookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocaleCookie"])();
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])('lang');
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentLocale = params?.locale || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizedFallbackLng"];
    const normalizedCurrentLocale = Array.isArray(currentLocale) ? currentLocale[0] : currentLocale;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLanguageSelect.useEffect": ()=>{
            setIsClient(true);
        }
    }["useLanguageSelect.useEffect"], []);
    const changeLanguage = (locale)=>{
        if (normalizedCurrentLocale === locale.code) {
            return;
        }
        const newPath = pathname.replace(/^\/([^/]+)/, `/${locale.code}`);
        startTransition(()=>{
            setLocaleCookie(locale.code, {
                path: '/'
            });
            i18n.changeLanguage(locale.code);
            router.push(newPath);
        });
    };
    const languageList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLanguageSelect.useMemo[languageList]": ()=>{
            if (!isClient) {
                return [];
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizedLanguages"].map({
                "useLanguageSelect.useMemo[languageList]": (language)=>({
                        title: t(`lang:${language}`),
                        abbr: t(`lang:abbrs.${language}`),
                        code: language
                    })
            }["useLanguageSelect.useMemo[languageList]"]);
        }
    }["useLanguageSelect.useMemo[languageList]"], [
        t,
        isClient
    ]);
    const currentLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLanguageSelect.useMemo[currentLanguage]": ()=>{
            if (!isClient) {
                return {
                    title: '',
                    abbr: '',
                    code: normalizedCurrentLocale
                };
            }
            return {
                title: t(`lang:${normalizedCurrentLocale}`),
                abbr: t(`lang:abbrs.${normalizedCurrentLocale}`),
                code: normalizedCurrentLocale
            };
        }
    }["useLanguageSelect.useMemo[currentLanguage]"], [
        normalizedCurrentLocale,
        t,
        isClient
    ]);
    return {
        changeLanguage,
        languageList,
        currentLanguage,
        isPending,
        isClient
    };
};
_s(useLanguageSelect, "WccyIgZuQ0jDAP1sgOpara0VrFo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$useLocaleCookie$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocaleCookie"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$shared$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/core/features/LanguageSelector/ui/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageSelector": (()=>LanguageSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$select$40$5$2e$10$2e$2_$40$types$2b$_2ef42b7eceb5091be3261e408254de93$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-select@5.10.2_@types+_2ef42b7eceb5091be3261e408254de93/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$features$2f$LanguageSelector$2f$hooks$2f$useLanguageSelect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/features/LanguageSelector/hooks/useLanguageSelect.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const LanguageSelector = (_props)=>{
    _s();
    const { changeLanguage, currentLanguage, languageList, isPending, isClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$features$2f$LanguageSelector$2f$hooks$2f$useLanguageSelect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSelect"])();
    if (!isClient) {
        return null;
    }
    const handleChange = (newValue)=>{
        if (newValue) {
            changeLanguage(newValue);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$3_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$select$40$5$2e$10$2e$2_$40$types$2b$_2ef42b7eceb5091be3261e408254de93$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onChange: handleChange,
        value: currentLanguage,
        options: languageList,
        isDisabled: isPending,
        getOptionLabel: (option)=>option.title,
        getOptionValue: (option)=>option.title
    }, void 0, false, {
        fileName: "[project]/src/core/features/LanguageSelector/ui/index.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
};
_s(LanguageSelector, "rQmElPZ7hMIuo9QionGCR+pZ/G8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$features$2f$LanguageSelector$2f$hooks$2f$useLanguageSelect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSelect"]
    ];
});
_c = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_core_a05d364e._.js.map