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

router.get('/tuman', async(req, res) => {
    let report_id = req.query.tuman;
    let tuman = await Tuman.findOne({ _id: report_id }).populate('viloyat_id').exec();
    let qishloqlar = await Qishloq.find({ tuman_id: report_id }).populate('tuman_id').populate('viloyat_id').exec();
    let reports = await Report.find({ tuman_id: report_id }).populate('qishloq_id').exec();
    res.render('main_tuman', {
        tuman: tuman,
        reports: reports,
        qishloqlar: qishloqlar
    })
});

router.get('/qishloq', async(req, res) => {
    let report_id = req.query.qishloq;
    let qishloq = await Qishloq.findOne({ _id: report_id }).populate('tuman_id').populate('viloyat_id').exec();
    let mahallalar = await Mahalla.find({ qishloq_id: report_id }).populate('qishloq_id').populate('tuman_id').populate('viloyat_id').exec();
    let reports = await Report.find({ qishloq_id: report_id }).populate('qishloq_id').exec();
    res.render('main_qishloq', {
        qishloq: qishloq,
        reports: reports,
        mahallalar: mahallalar
    })
});

router.get('/mahalla', async(req, res) => {
    let report_id = req.query.mahalla;
    let mahalla = await Mahalla.findOne({ _id: report_id }).populate('tuman_id').populate('viloyat_id').exec();
    let uchastkalar = await Uchastka.find({ mahalla_id: report_id }).populate('mahalla_id').populate('qishloq_id').populate('tuman_id').populate('viloyat_id').exec();
    let reports = await Report.find({ mahalla_id: report_id }).populate('qishloq_id').exec();
    res.render('main_mahalla', {
        mahalla: mahalla,
        reports: reports,
        uchastkalar: uchastkalar
    })
});

module.exports = router;