const changeMode = function(size, weight, transform, background, color) {
    return function() {
        document.getElementsByTagName('body')[0].style = 
        'background-color: ' + background + '; font-size: ' + size + '; font-weight: ' + weight + '; text-transform: ' + transform + '; color: ' + color + ';';
    }
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    var p = document.createElement('p');
    p.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(p);

    var btnSpooky = document.createElement('button');
    btnSpooky.innerHTML = 'Spooky';
    document.body.appendChild(btnSpooky);
    btnSpooky.onclick = spooky;

    var btnDark = document.createElement('button');
    btnDark.innerHTML = 'Dark mode';
    document.body.appendChild(btnDark);
    btnDark.onclick = darkMode;

    var btnScream = document.createElement('button');
    btnScream.innerHTML = 'Scream mode';
    document.body.appendChild(btnScream);
    btnScream.onclick = screamMode;
}