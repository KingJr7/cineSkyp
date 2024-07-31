let currentUrl;
let finalUrl;
document.addEventListener("DOMContentLoaded", () => {
  // Utilise chrome.tabs.query pour récupérer l'URL de l'onglet actif
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    const url = activeTab.url;

    // Affiche l'URL dans le popup
    // document.getElementById("url").textContent = url;

    currentUrl = url;
    let listUrl = currentUrl.split("/");
    let nbr = parseInt(listUrl.at(-1)) + 1;
    listUrl[listUrl.indexOf(listUrl.at(-1))] = nbr;
    finalUrl = listUrl.join("/");
  });
});

document.getElementById("button").addEventListener("click", () => {
  // Remplacer la page actuelle par une nouvelle URL
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    // Fermer l'onglet actif
    chrome.tabs.remove(activeTab.id);
  });
  window.open(finalUrl);
});
