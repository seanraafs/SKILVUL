/*
1.Tampilkanlah tiap elemen yang terdapat pada array hewan menggunakan .forEach().
Isi parameter .forEach() dengan callback function yang memiliki argumen parameter bernama baris.
2.Lalu di dalam .forEach() lakukan .forEach() kembali pada baris dengan parameter .forEach() berisi callback function yang memiliki argumen parameter bernama kolom
3.Lakukan console.log() pada kolom. Cek tab Console untuk melihat data yang ada pada array hewan.
*/
let hewan = [
  ["Harimau", "Karnivora"],
  ["Gajah", "Herbivora"],
  ["Gorila", "Omnivora"],
];

// Buat kode kamu dibawah ini
hewan.forEach((baris) => {
  baris.forEach((kolom) => {
    console.log(kolom);
  });
});
