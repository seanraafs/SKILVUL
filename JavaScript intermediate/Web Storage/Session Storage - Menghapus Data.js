/*
1.Buat function bernama saveFootballer untuk menyimpan data footballPlayer ke dalam session storage.
Selanjutnya buatlah sebuah variabel bernama footBaller.
Isi variabel footBaller dengan data array footballPlayer yang diubah ke dalam bentuk string menggunakan JSON.stringify()
simpan data array footballPlayer ke dalam session storage menggunakan method setItem dimana key-nya adalah footballPlayer dan value-nya adalah variabel footBaller
Untuk dapat menjalankan fungsi ini, klik button Save Football.

2.Buat function bernama saveKDrama untuk menyimpan data koreanDrama ke dalam session storage.
Selanjutnya buatlah sebuah variabel bernama kDrama.
Isi variabel kDrama dengan data array koreanDrama yang diubah ke dalam bentuk string menggunakan JSON.stringify()
simpan data array koreanDrama ke dalam session storage menggunakan method setItem dimana key-nya adalah kDrama dan value-nya adalah variabel kDrama
Untuk dapat menjalankan fungsi ini, klik button Save Korean Drama.

3.Buat function bernama clearAll untuk menghapus data footballPlayer dan kDrama sekaligus dari session storage.
Di dalam function gunakan method session storage clear() untuk menghapus semua data.
Lalu tambahkan console.log() yang berisi string all clear! setelah melakukan penghapusan data.
Untuk dapat menjalankan fungsi ini, klik button Clear All.

*/

// kode dibawah
const footballPlayer = [
    {
        name: 'Christiano Ronaldo',
        team: 'Juventus'
    },
    {
        name: 'Aubameyang',
        team: 'Arsenal'
    }
];

const koreanDrama = [
    {
        title: 'Reply 1988',
        year: 2015
    },
    {
        title: 'Itaewon Class',
        year: 2020
    }
];

// Tulis kodemu di bawah ini
function saveFootballer() {
    const footballPlayer = [
        {
            name: 'Christiano Ronaldo',
            team: 'Juventus'
        },
        {
            name: 'Aubameyang',
            team: 'Arsenal'
        }
    ];

    const footBaller = JSON.stringify(footballPlayer);
    sessionStorage.setItem('footballPlayer', footBaller);
}

function saveKDrama() {
    const koreanDrama = [
        {
            title: 'Reply 1988',
            year: 2015
        },
        {
            title: 'Itaewon Class',
            year: 2020
        }
    ];

    const kDrama = JSON.stringify(koreanDrama);
    sessionStorage.setItem('kDrama', kDrama);
}

function clearAll() {
    sessionStorage.clear();
    console.log('all clear!');
}
