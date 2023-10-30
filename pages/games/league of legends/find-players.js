let servers = ["NA", "KR", "LAS", "LAN", "EUW"]

function selectServer() {
    let randomServer = Math.floor(Math.random() * servers.length);
    return servers[randomServer];
}
// llevar el servidor random al HTML
function uploadServer() {
    let articles = document.querySelectorAll('article.groups.players')
    articles.forEach((article) => {
        let span = article.querySelector('span');
        span.textContent = selectServer();
    });
}

uploadServer()