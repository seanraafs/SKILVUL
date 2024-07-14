/*
1.Pada topik sebelumnya kamu telah menyimpan data pada local storage menggunakan data berikut:
Data pertama memiliki key: "search" dan value: "pencarian 1"
Data kedua memiliki key: "hewan" dan value: ['kucing', 'anjing', 'kambing']
Maka pada soal latihan ini, tampilkan salah satu data tersebut yaitu data hewan.
Buatlah variabel getHewanKakiEmpat yang berisikan method getItem() untuk mendapatkan data local storage dengan key hewan.

2.Buat variabel bernama hewanKakiEmpat.
Isi variabel hewanKakiEmpat dengan variabel getHewanKakiEmpat.
Convert terlebih dahulu data JSON pada variabel getHewanKakiEmpat ke dalam array menggunakan JSON.parse().

3.Lakukan console.log() pada variabel hewanKakiEmpat untuk melihat data yang telah didapatkan dari local storage.
*/

// Buat kode kamu di bawah ini

const getHewanKakiEmpat = localStorage.getItem("hewan");
    
const hewanKakiEmpat = JSON.parse(getHewanKakiEmpat)
console.log(hewanKakiEmpat)