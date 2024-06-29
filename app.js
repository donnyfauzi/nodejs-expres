const express = require("express");
const c_karyawan = require("./controller/c_karyawan");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs"); //setting penggunaan template engine untuk express
app.set("views", "./view-ejs"); //setting penggunaan folder untuk menyimpan file .ejs

app.get("/index", (_req, res) => {
  res.render("index");
});

app.get("/profile", (_req, res) => {
  res.render("profile");
});

app.get("/pengalaman", (_req, res) => {
  res.render("daftar-pengalaman", {
    nama: "Aji Kowiyu Uzumaki",
    jenis_kelamin: "L",
    posisi: "Sr. Programmer",
    perusahaan: "Agung Podomoro",
    gaji: 9557000,
    pajak:
      this.gaji > 10000000
        ? "gaji anda kena pajak"
        : "aman, gak perlu bayar pajak",
  });
});




app.get("/karyawan", c_karyawan.index)
app.get("/karyawan/detail/:id_karyawan", c_karyawan.detail)
app.get("/karyawan/tambah", c_karyawan.tambah)
app.post("/karyawan/proses-simpan", c_karyawan.proses_simpan);
app.get("/karyawan/edit/:id_karyawan", c_karyawan.edit);
app.post("/karyawan/proses-update/:id_karyawan", c_karyawan.proses_update);

  

app.listen(port, () => {
  console.log(`App sudah siap jalan, buka http://localhost:${port}`);
});
