// const yaş = Number(prompt("yaşinizi giriniz"));
// if (yaş <= 3) {
//   sonuç = "bebek";
//   console.log(sonuç);
// } else if (3 < yaş && yaş <= 10) {
//   sonuç = "çocug";
//   console.log(sonuç);
// } else if (10 < yaş && yaş <= 18) {
//   sonuç = "ergen";
//   console.log(sonuç);
// } else if (18 < yaş && yaş <= 45) {
//   sonuç = "yetişkin";
//   console.log(sonuç);
// } else if (45 < yaş) {
//   sonuç = "yaşli";
//   console.log(sonuç);
// }
// const sayi1 = Number(prompt("sayi giriniz"));
// const sayi2 = Number(prompt("sayi giriniz"));
// const sayi3 = Number(prompt("sayi giriniz"));
// if (sayi1 >= sayi2 && sayi1 >= sayi3) {
//   console.log(`sayi1 ${sayi1} en büyk sayı`);
// } else if (sayi2 >= sayi1 && sayi2 >= sayi3) {
//   console.log(`sayi2 ${sayi2} en büyk sayı`);
// } else {
//   console.log(`sayi3 ${sayi3} en büyk sayı`);
// }
// const sayi1 = Number(prompt("sayi giriniz"));
// const işlem = prompt("işlem giriniz");
// const sayi3 = Number(prompt("sayi giriniz"));
// let sonuç;
// switch (işlem) {
//   case "+":
//     sonuç = sayi1 + sayi3;
//     break;
//   case "-":
//     sonuç = sayi1 - sayi3;
//     break;
//   case "*":
//     sonuç = sayi1 * sayi3;
//     break;
//   case "/":
//     sonuç = sayi1 / sayi3;
//     break;
//   default:
//     alert("yanliş işlem");
//     break;
// }
// console.log(`${sayi1} ${işlem} ${sayi3} = ${sonuç}`);
// const gün = prompt("günü giriniz");
// let ders;
// switch (gün) {
//   case "pazartesi" :
//     ders = "inclass";
//     break;
//   case "salı":
//     ders = "inclass";
//     break;
//   case "çarşamba":
//     ders = "inclass";
//     break;
//   case "perşembe":
//     ders = "inclass";
//     break;
//   case "cuma":
//     ders = "team work";
//     break;
//   case "cumartesi":
//     ders = "inclass + workshop";
//     break;
//   case "pazar":
//     ders = "self study";
//     break;
//   default:
//     alert(`${gün} bir gün değildir lütfen kontrol ediniz`);
//     break;
// }
// console.log(`${gün} günü ${ders} dersi vardir`);
// const speed = Number(prompt("hızı giriniz"));
// console.log(speed < 90 ? "yavaş" : speed < 120 ? "normal" : "hızlı");
// const maaş = Number(prompt("Maaşınızı giriniz. "));
// let yenimaaş;
// console.log(
//   maaş < 5500 ? `yeni maaşınız =${(yenimaaş = maaş * 1.5)}` : maaş * 1.1
// );
const gelir = Number(prompt("gelirinizi giriniz"));
const gider = Number(prompt("giderinizi giriniz"));
console.log(
  gelir - gider >= 5500 ? "Kredi verilebilir🤑" : "Kredi verilemez😒"
);
