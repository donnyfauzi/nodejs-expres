const express = require("express");
const app = express();
const port = 3000;


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

app.get("/karyawan", async (_req, res) => {
  const m_karyawan = require("./model/m_karyawan");
  let dataview = {
    semua_karyawan: await m_karyawan.get_semua_karyawan(),
  };
  res.render("karyawan/all", dataview);
});

app.get("/karyawan/detail", async (_req, res) => {
  const m_karyawan = require("./model/m_karyawan");
  let dataview = {
    detail_karyawan: await m_karyawan.get_satu_karyawan(),
  };
  res.render("karyawan/detail", dataview)
});
  

app.listen(port, () => {
  console.log(`App sudah siap jalan, buka http://localhost:${port}`);
});
