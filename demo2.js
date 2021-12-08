var ad =prompt("adinizi giriniz");
var ogrno= prompt("ogrno");
var cinsiyet= prompt("cinsiyet"); //erkek:true kadin:false
var ders= prompt("ders");
var not1= prompt("not1: ");
var not2=prompt("not2: ");
var ortalama= (Number(not1) + Number(not2))/ 2;
console.log(ogrno +" numarali "+ad+ "("+cinsiyet+") "+" isimli ögrencinin "+ ders+" dersinden aldigi ortalama "+ortalama);