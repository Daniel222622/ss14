function redirectTo(site) {
    const sites = {
        'porno': 'porno.html',
        'ivents': 'ivents.html',
        'hz': '50x.html' 
    };
    
    if (sites[site]) {
        window.location.href = sites[site];
    }
}
function checkCode() {
    const code = document.getElementById('accessCode').value;
    const url = `http://savkotest-2313.ru:5000/api?p=${code}`;
    fetch(url)
        .then(response => {
            if (!response.ok) return;
            return response.text();
        })
        .then(data => {
            if (data.trim() == "True") {
                window.location.href = "test.html";
            } else {
                alert("Неверный код доступа!");
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert("Ошибка сервера.");
        });
 }