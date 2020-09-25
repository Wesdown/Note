/**
 * Listener : Quand l'application est installée
 */
chrome.runtime.onInstalled.addListener(() => {
  //alert("Note installé");
});

/**
 * Listener : Quand une nouvelle page est chargée
 */
chrome.webNavigation.onCompleted.addListener(() => {
});