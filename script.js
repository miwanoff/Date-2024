// let d = new Date();
// console.log(d.getFullYear());

let d1 = new Date();
let d2 = new Date(2025,0,1);
let ms = (d2.getTime() - d1.getTime());//разница в милисекундах
let s = ms / 1000;//разница в секундах
let m = s / 60;//разница в минутах
let h = m / 60;//разница в часах
let d = Math.floor(h / 24);
document.write ('Сьогодні ' + d1.getDate() + '. ' +  (d1.getMonth() + 1) + '.' + d1.getFullYear() + '\nЗалишилось  до ' + d2.getDate() + '.' +
  (d2.getMonth() + 1) + '.' + d2.getFullYear() + ': дней - ' + d + '; часов - ' + h +
'; минут - ' + m + '; секунд - ' + s);
