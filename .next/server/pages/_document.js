const CHUNK_PUBLIC_PATH = "server/pages/_document.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules__pnpm_53a1d75d._.js");
runtime.loadChunk("server/chunks/ssr/[root-of-the-server]__c75c51b7._.js");
runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.3.3_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/document.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
