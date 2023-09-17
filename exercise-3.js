// Membuat variabel untuk menyimpan tinggi segitiga
const triangle = 7;

for (let i = 1; i <= triangle; i++) {
  let printTriangle = ""; // Loop ini digunakan untuk mengatur baris-baris segitiga hingga mencapai tinggi segitiga yang telah ditentukan (7).
  for (let j = 1; j <= i; j++) {
    printTriangle += j; //  Loop ini digunakan untuk mengisi setiap baris segitiga dengan angka, dimulai dari 1 hingga 7
  }

  // Menampilkan segitiga
  console.log(printTriangle);
}
