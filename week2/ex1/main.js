const getUserName = window.prompt('กรุณากรอกชื่อ')
if (getUserName !== null || getUserName !== '') {
    document.getElementById('show-name').innerText = ('สวัสดีคุณ : ' + getUserName)
}

function showUserData() {
    window.alert(navigator.userAgent, navigator.language, screen.width, screen.height);
}

function reloadPage() {
    location.reload();
}

function openYoutube() {
    window.open('https://www.youtube.com/')
}