/*
1.Buatlah sebuah function bernama helloWorld. Di dalam function, tambahkan return statement new Promise.
Isi parameter Promise dengan callback function yang memiliki parameter resolve.
Di dalam Promise, tambahkan method setTimeOut.
Isi parameter pertama setTimeOut dengan callback function yang berisi resolve string "Hello World!". Argumen kedua berisi durasi time out sebesar 2000.

2.Buatlah sebuah async function bernama messages. Di dalam function, buatlah sebuah variabel bernama msg dan isi dengan statement await helloWorld(). Lakukan console.log() variabel msg di dalam function messages.

3.Panggil function messages di luar blok kode function messages yang sudah dibuat.
Statement string Hello World! akan keluar setelah 2 detik. Cek pada tab Console untuk melihat data.

*/

// Buat kode kamu di bawah ini
function helloWorld (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello World!")
        },2000)
    })
}
async function messages(){
    let msg = await helloWorld()
    console.log(msg)
}

console.log("menunggu 2 deitk")
messages()

console.log(messages)