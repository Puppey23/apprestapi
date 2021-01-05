'use strict';

module.exports = function (app) {
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/tampil')
        .get(myjson.tampilAll);

    app.route('/tampil/:id')
        .get(myjson.tampilID);

    app.route('/saveformulir')
        .post(myjson.tambahDataForm);
};