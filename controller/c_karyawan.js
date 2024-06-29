const m_karyawan = require("../model/m_karyawan");

module.exports = {
  index: async (req, res) => {
    let dataview = {
      req: req,
      semua_karyawan: await m_karyawan.get_semua_karyawan(),
    };
    res.render("karyawan/all", dataview);
  },

  detail: async (req, res) => {
    const id = req.params.id_karyawan;
    let dataview = {
      detail_karyawan: await m_karyawan.get_satu_karyawan(id),
    };
    res.render("karyawan/detail", dataview);
  },

  tambah: async (req, res) => {
    res.render("karyawan/form-tambah", { info_error: null });
  },

  proses_simpan: async (req, res) => {
    // ambil kiriman dari form html satu-satu
    // let nama_lengkap = req.body.nama_lengkap
    // let alamat = req.body.alamat
    // ambil semuanya pake req.body

    try {
      let insert = await m_karyawan.tambah_karyawan(req);
      if (insert.affectedRows > 0) {
        res.redirect("/karyawan?note=insert-sukses");
      }
    } catch (error) {
      res.render("karyawan/form-tambah", { info_error: error });
    }
  },

  edit: async (req, res) => {
    const id = req.params.id_karyawan;
    let dataview = {
      detail_karyawan: await m_karyawan.get_satu_karyawan(id),
      info_error: null,
    };
    res.render("karyawan/form-edit", dataview);
  },

  proses_update: async (req, res) => {
    try {
      let update = await m_karyawan.edit_karyawan(req);
      if (update.affectedRows > 0) {
        res.redirect("/karyawan?note=update-sukses");
      }
    } catch (error) {
      console.log(error);
      res.redirect("/karyawan?note=update-gagal");
    }
  },
  
};
