/*
1.Lakukan penyimpanan data pada local storage menggunakan setItem() yang menyimpan data berikut:

-Data pertama memiliki key: "search" dan value: "pencarian 1"
-Data kedua memiliki key: "hewan" dan value: ['kucing', 'anjing', 'kambing']

*/


// Menyimpan data pertama
localStorage.setItem('search', 'pencarian 1');

// Menyimpan data kedua
const hewanArray = ['kucing', 'anjing', 'kambing'];
localStorage.setItem('hewan', JSON.stringify(hewanArray));
