'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('Aplikasi REST API Berjalan', res);
};

//menampilkan semua data
exports.tampilAll = function (req, res) {
    connection.query('SELECT * FROM formulir_pengajuan_ppdb', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//menampilkan semua data berdasarkan id
exports.tampilID = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM formulir_pengajuan_ppdb WHERE id = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data 
exports.tambahDataForm = function (req, res) {
    // var id = req.body.id;
    var name = req.body.name;
    var alamat_rumah = req.body.alamat_rumah;
    var no_hp = req.body.no_hp;
    var pekerjaan = req.body.pekerjaan;
    var alamat_tempat_kerja = req.body.alamat_tempat_kerja;

    connection.query('INSERT INTO formulir_pengajuan_ppdb (name,alamat_rumah,no_hp,pekerjaan,alamat_tempat_kerja) VALUES(?,?,?,?,?)',
        [name, alamat_rumah, no_hp, pekerjaan, alamat_tempat_kerja],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Formulir Terdaftar!", res)
            }
        });
};