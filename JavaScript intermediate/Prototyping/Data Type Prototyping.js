/*
1.Buatlah method baru pada tipe data string bernamatambahKata() yang memiliki parameter str dan mengembalikan method concat() di dalamnya.

2.Panggil method yang sudah kamu buat yang menggabungkan string "Belajar" dan "coding" seperti ini:
console.log('Belajar '.tambahKata("coding"));

*/

// Buat kode kamu di bawah ini
String.prototype.tambahKata = function(str){
    return this.concat(str)
}
console.log('Belajar '.tambahKata("coding"))