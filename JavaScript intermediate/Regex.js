/*
1.Kita akan membuat program regex untuk mencari kata skilvul.com dalam kalimat saya belajar di skilvul.com.
Buatlah sebuah variabel bernama string yang berisi data string saya belajar di skilvul.com.

2.Buatlah sebuah variabel pattern dan daftarkan sebuah data string skilvul.com pada regex menggunakan RegExp()ke dalam variabel pattern.

3.Buatlah sebuah variabel bernama result untuk menampung hasil pencarian regex dari variabel pattern pada sebuah kalimat yang ditampung di dalam variabel string sebelumnya.
Gunakan built-in method .exec() yang mengembalikan nilai array jika string yang kamu cari ditemukan dan akan mengembalikan nilai null jika tidak ditemukan.

4.Buatlah sebuah variabel bernama status. Lakukan pencarian regex dari variabel pattern pada sebuah kalimat yang ditampung di dalam variabel string sebelumnya.
Gunakan built-in method .test() yang mengembalikan nilai true jika string yang kamu cari ditemukan dan akan mengembalikan nilai false jika tidak ditemukan.

5.Lakukan console.log() pada variabel result dan status. Cek pada tab Console untuk melihat data.
*/

// Buat kode kamu di bawah ini
let string = "saya belajar di skilvul.com";
let pattern = new RegExp("skilvul.com");
let result = pattern.exec(string);
let status = pattern.test(string);
console.log(result)