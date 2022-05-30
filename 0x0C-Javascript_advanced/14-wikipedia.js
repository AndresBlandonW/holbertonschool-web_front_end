function createElement(data) {
    var p = document.createElement('p');
    p.innerHTML = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    const oReq = new XMLHttpRequest();

    oReq.onload = function() {
        var json = JSON.parse(this.responseText);
        callback(json['query']['pages']['21721040']['extract']);
    }

    oReq.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
    oReq.send();
}

queryWikipedia(createElement);

