const headline = document.getElementsByTagName('h1')
headline[5].innerText = 'Day off'

const getByClass = document.getElementsByClassName('font-thai')
console.log(getByClass)

// alert('alert') ใช้สำหรับการแจ้งเตือน เป็นข้อความ
// confirm('confirm') กล่อง Yes/No (true/false)
// prompt('prompt') ใช้รับค่าจากผู้ใช้
// open เปิดหน้าต่างเว็บ
// close ปิดหน้าต่าง
// print สั่งปริ้น
//location ใช้สำหรับหาหรือดู ที่อยู่เว็บ
//location.reload reload หน้าต่างเว็บ
//history ย้อนกลับไปยังหน้าก่อนหน้า หรือหน้าที่เป็นประวัติล่าสุด
// location.assign ย้ายไปยัง ไฟล์อื่น โดยจำประวัติเอาไว้
// location.replace ย้ายไปยัง ไฟล์อื่น โดยไม่จำประวัติ
// history.back ย้อนกลับ
// history.forward ไปหน้าถัดไป
// history.go ยังสำหรับย้ายหน้ากลับไปยังหน้าที่ต้องการ โดยใช้ array

// navigator.userAgent ใช้ดูรายละเอียดผู้ใช้
// navigator.language ใช้ดูรายละเอียดภาษาของผู้ใช้
// navigator.onLine เช็คว่าผู้ใช้ onLine อยู่หรือไหม
// navigator.platform ใช้ดู platform ของผู้ใช้

// screen.width ใช้ดูความกว้างหน้าจอ
// screen.height ใช้ดูความสูงหน้าจอ
// screen.availWidth ใช้ดูพื้นที่ความกว้างที่ใช้ได้จริง
// screen.availHeight ใช้ดูพื้นที่ความสูงที่ใช้ได้จริง


// const isBreak = window.confirm('window confirm')
// window.alert(isBreak)

// const b = window.prompt('กินอะไรดี')
// window.alert(b)

// const open = window.confirm('คุณต้องการเปิด Youtube หรือไหม')
// if (open) {
//     window.open('https://www.youtube.com/');
// }

// const close = window.confirm('ปิดหน้าต่างนี้ไหม')
// if (close) {
//     window.close();
// }
const locationToPage = window.confirm("กลับหน้าเดิมไหม")
if (locationToPage) {
    history.back();
}

// const locationTo = window.confirm("ดู url ของเว็บนี้หรือไหม")
// if (locationTo) {
//     window.alert(window.location.href);
// }

const navigatorTo = window.confirm("ดู User Agent หรือไม่")
if (navigatorTo) {
 window.alert("user agent: " + navigator.userAgent);
}

const navigatorLanguage = window.confirm("ดู User Language หรือไม่")
if (navigatorLanguage) {
 window.alert(navigator.language);
}

const navigatorOnLine = window.confirm("ดู User ว่าเชื่อมต่ออยู่ หรือไม่")
if (navigatorOnLine) {
 window.alert(navigator.onLine);
}

const navigatorPlatform = window.confirm("ดู User platform หรือไม่")
if (navigatorPlatform) {
 window.alert(navigator.platform);
}

const checkScreen = window.confirm("ดู ขนาด screen หรือไม่")
if (checkScreen) {
 window.alert(screen.availWidth + "x" + screen.availHeight);
}

function goToNextPage() {
    window.location.assign('testCSS.html');
}

function replaceTo() {
    window.location.replace('testCSS.html');
}