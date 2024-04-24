/**
 * Buatlah sebuah fungsi dengan nama hitungTotal untuk menghitung total pembelian yang  menerima sebuah array objek produk yang berisi nama, harga, dan jumlah yang dibeli. Didalamnya harus ada pengecekan apakah setiap data produk yang dibeli memiliki ketiga propertinya. Jika validasi berhasil, fungsi harus mengembalikan promise dengan value total pembelian yang didapat dari harga dikalikan jumlah. Jika tidak, fungsi harus menolak promise dengan pesan error  Data Produk tidak valid
 */

// function hitungTotal(produk) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < produk.length; i++) {
//             let items = produk[i]
//             if (!items.nama && !items.harga && !items.jumlah) {
//                 reject("Data Produk tidak valid")
//             }
//             const totalHarga = items.harga * items.jumlah
//             resolve(totalHarga)
//         }
//     })
// }

function hitungTotal(produk) {
    return new Promise((resolve, reject) => {
        let totalHarga = 0; // Inisialisasi total harga

        for (let i = 0; i < produk.length; i++) {
            let items = produk[i];
            // Pengecekan apakah setiap data produk memiliki ketiga propertinya
            if (!items.nama || !items.harga || !items.jumlah) {
                reject("Data Produk tidak valid");
                return; // Menghentikan eksekusi jika data produk tidak valid
            }
            // Mengakumulasi total harga dari setiap produk
            totalHarga += items.harga * items.jumlah;
        }

        // Mengembalikan total harga setelah semua produk dihitung
        resolve(totalHarga);
    });
}


hitungTotal([
    // { nama: 'Sepatu', harga: 1500000, jumlah: 2 },
    // {nama:"Kemeja",harga:80,jumlah:2},{nama:"Selendang",harga:20,jumlah:13},{nama:"Jeans",harga:150,jumlah:12},
    {nama:"Kemeja",harga:80,jumlah:2},{nama:"Selendang",harga:20,jumlah:13},{nama:"Jeans",harga:150}
])
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
