/*
1.Buat sebuah variabel name yang berisikan data string nama lengkap kamu.

2.Buat sebuah variabel regex untuk membuat pola yang mencocokkan string selain huruf vokal.

3.Buat sebuah variabel result yang berisikan .match() antara name dengan pola pada variabel regex yang tadi kita buat.

4.Dari langkah sebelumnya, kita telah mendapatkan array yang disimpan pada variabel result. Cek terlebih dahulu console.log() pada variabel result di tab Console.
Lalu, satukan kembali array result menjadi string kembali menggunakan metode .join(). Simpan proses ini pada variabel newName.

5.Terakhir, lakukan console.log() pada variabel newName. Cek tab Console untuk melihat hasil.
*/

// Buat sebuah variabel name berisikan nama anda
// Hilangkan semua huruf vokal pada nama anda
let name = "Sean R M";

let regex = /[^aeiou]/gi;

let result = name.match(regex);
console.log(result); 

let newName = result.join('');

console.log(newName); 

