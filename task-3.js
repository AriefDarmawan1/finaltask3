function drawImage(size) {
  // Cek apakah panjangnya ganjil
  if (size % 2 === 0) {
    console.log("Nilai panjang harus ganjil.");
    return;
  }

  // Loop untuk setiap baris
  for (let i = 0; i < size; i++) {
    let row = "";
    // Baris ganjil mengikuti pola * # * # ...
    if (i % 2 === 0) {
      for (let j = 0; j < size; j++) {
        if (j % 2 === 0) {
          row += "* "; // Kolom ganjil: bintang
        } else {
          row += "# "; // Kolom genap: pagar
        }
      }
    } else {
      // Baris genap mengikuti pola # # * # #
      for (let j = 0; j < size; j++) {
        if (j % 2 === 0) {
          row += "# "; // Kolom ganjil: pagar
        } else {
          row += "* "; // Kolom genap: bintang
        }
      }
    }
    console.log(row.trim());
  }
}

// Contoh pemanggilan fungsi
drawImage(5);
console.log("\n"); // Menambahkan baris kosong sebagai pemisah
drawImage(7);
