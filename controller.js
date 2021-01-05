'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('Aplikasi REST API Berjalan', res);
};

//menampilkan semua data
exports.tampilAll = function (req, res) {
    connection.query('SELECT * FROM formulir_pengajuan_ppdb', function (error, rows, fileds) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};