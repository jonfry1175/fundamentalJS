let Hasil = new HasilKelulusan("Adun", 85, 55, 85);

class Mahasiswa {
    constructor(nama, nilai, absen, tugas) {
        this.nama = nama;
        this.nilai = nilai;
   this.absen = absen;
   this.tugas = tugas;
 }
}



class HasilKelulusan extends Mahasiswa {
     constructor(nama, nilai, absen, tugas) {
         super(nama, nilai, absen, tugas)
        }
     kelulusan() {
         if (this.penilaianAkhir() >= 75) {
             return "lulus"
         } else {
             return "tidak lulus"
         }
     }
 }
        console.log(Hasil)