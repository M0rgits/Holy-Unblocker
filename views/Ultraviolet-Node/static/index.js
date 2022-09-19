const form = document.querySelector('form');
const geforce = document.getElementById("geforce");
const cmgames = document.getElementById("cmgames");
const ytlnk = document.getElementById('ytlnk');
const dclnk = document.getElementById('dclnk');
const ntlnk = document.getElementById('ntlnk');
const rdlnk = document.getElementById('rdlnk');

rdlnk.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = "http://reddit.com";
        
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

ntlnk.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = "http://netflix.com";
        
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

dclnk.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = "http://discordapp.com";
        
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

ytlnk.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = "http://youtube.com";
        
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

ytlnk.addEventListener('click', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = "http://youtube.com";
        
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

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
