const form = document.querySelector('form');
const geforce = document.getElementById("geforce");
const cmgames = document.getElementById("cmgames");



geforce.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = "http://play.geforcenow.com";
        
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

cmgames.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = "http://coolmathgames.com";
        
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
