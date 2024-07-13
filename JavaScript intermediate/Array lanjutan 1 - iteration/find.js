/*
1.Lakukan pencarian pada array hewan menggunakan method .find(). Beri callback function dengan parameter item sebagai value dari data array.

2.Di dalam method .find() tambahkan return statement untuk melakukan pencarian nama hewan dengan kondisi nama hewan diawali oleh huruf "J" dan diakhiri huruf "h" (tanpa menggunakan if).
Gunakan comparison operator dari JavaScript.

3.Buatlah variabel cariHewan dan assign seluruh kode kamu sebelumnya ke dalam variabel cariHewan menggunakan operator =.

4.Lakukan console.log() di luar blok kode .find() untuk menampilkan data pada variabel cariHewan dan pastikan data berisi teks string Jerapah.
Cek pada tab Console untuk melihat data.
*/

let hewan = ["Harimau", "Gajah", "Jerapah", "Ular"];

// Buat kode kamu di bawah ini

let cariHewan = hewan.find((item)=>{
    return item[0] === "J" && item[item.length -1] === 'h'
})

console.log(cariHewan)