const express = require('express');
const router = express.Router();

const { Viloyat, Tuman, Qishloq, Mahalla, Uchastka, User, Report } = require('./../../schema/schema')


router.get('/', async(req, res) => {
    let viloyatlar = await Viloyat.find();
    let reports = await Report.find().populate('uchastka_id').populate('mahalla_id').populate('qishloq_id').populate('tuman_id').populate('viloyat_id').exec()
    let tumanlar = await Tuman.find().populate('viloyat_id').exec();
    res.render('main', {
        reports: reports,
        viloyatlar: viloyatlar,
        tumanlar: tumanlar
    });
});



module.exports = router;