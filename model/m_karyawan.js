const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belajar-database",
});
db.connect();

module.exports = {
  get_semua_karyawan: function () {
    let sql = mysql.format(
      `SELECT
                k.*,
                d.kode AS departemen_kode, d.nama AS departemen_nama,
                j.nama_jabatan AS jabatan_nama, j.role AS jabatan_role, j.deskripsi AS jabatan_deskripsi
            FROM karyawan AS k
            LEFT JOIN master_departemen AS d ON d.id = k.departemen_id
            LEFT JOIN master_jabatan AS j ON j.id = k.jabatan_id;`
    );

    return new Promise((resolve, reject) => {
      db.query(sql, function (errorSql, hasil) {
        if (errorSql) {
          reject(errorSql);
        } else {
          resolve(hasil);
        }
      });
    });
  },

  get_satu_karyawan: function (id) {
    let sql = mysql.format(
      `SELECT k.*, d.kode AS departemen_kode, d.nama AS departemen_nama, j.nama_jabatan AS jabatan_nama,
       j.role AS jabatan_role, j.deskripsi AS jabatan_deskripsi FROM karyawan AS k 
       LEFT JOIN master_departemen AS d ON d.id = k.departemen_id 
       LEFT JOIN master_jabatan AS j ON j.id = k.jabatan_id 
       WHERE k.id = ?;`,
      [id]
    );

    return new Promise((resolve, reject) => {
      db.query(sql, function (errorSql, hasil) {
        if (errorSql) {
          reject(errorSql);
        } else {
          resolve(hasil);
        }
      });
    });
  },

  tambah_karyawan: function (req) {
    let data = {
      nama          : req.body.nama_lengkap,
      alamat        : req.body.alamat,
      no_telepon    : req.body.no_telp,
      golongan_darah: req.body.gol_darah,
      jenis_kelamin : req.body.jns_kelamin,
    };

    let sql = mysql.format(`INSERT INTO karyawan SET ?`, [data]);

    return new Promise((resolve, reject) => {
      db.query(sql, function (errorSql, hasil) {
        if (errorSql) {
          reject(errorSql);
        } else {
          resolve(hasil);
        }
      });
    });
  },

  edit_karyawan: function (req) {
    let data = {
      // nama kolom di sql: req.body.name
      nama          : req.body.nama_lengkap,
      alamat        : req.body.alamat,
      no_telepon    : req.body.no_telp,
      golongan_darah: req.body.gol_darah,
      jenis_kelamin : req.body.jns_kelamin,
    };
    let sql = mysql.format(`UPDATE karyawan SET ? WHERE id = ?`, [
      data,
      req.params.id_karyawan,
    ]);

    return new Promise((resolve, reject) => {
      db.query(sql, function (errorSql, hasil) {
        if (errorSql) {
          reject(errorSql);
        } else {
          resolve(hasil);
        }
      });
    });
  },
};



