import lunr from "/Users/chentao/projects/git/jimmer-doc/node_modules/lunr/lunr.js";
require("/Users/chentao/projects/git/jimmer-doc/node_modules/lunr-languages/lunr.stemmer.support.js")(lunr);
require("@easyops-cn/docusaurus-search-local/dist/client/shared/lunrLanguageZh").lunrLanguageZh(lunr);
require("/Users/chentao/projects/git/jimmer-doc/node_modules/lunr-languages/lunr.multi.js")(lunr);
export const language = ["en","zh"];
export const removeDefaultStopWordFilter = false;
export const removeDefaultStemmer = false;
export { default as Mark } from "/Users/chentao/projects/git/jimmer-doc/node_modules/mark.js/dist/mark.js"
export const searchIndexUrl = "search-index{dir}.json?_=43432bcb";
export const searchResultLimits = 8;
export const searchResultContextMaxLength = 50;
export const explicitSearchResultPath = true;
export const searchBarShortcut = true;
export const searchBarShortcutHint = true;
export const searchBarPosition = "right";
export const docsPluginIdForPreferredVersion = undefined;
export const indexDocs = true;
export const searchContextByPaths = null;
export const hideSearchBarWithNoSearchContext = false;