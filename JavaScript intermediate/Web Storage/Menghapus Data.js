// Buat kode kamu di bawah ini
localStorage.removeItem("search");
localStorage.removeItem("hewan");

// Verifikasi bahwa data telah dihapus dengan mencoba mengambilnya
const searchData = localStorage.getItem("search");
const hewanData = localStorage.getItem("hewan");