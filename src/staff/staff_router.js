const express = require('express');
const router = express.Router();

const { Viloyat, Tuman, Qishloq, Mahalla, Uchastka, User, Report } = require('./../../schema/schema')


router.get('/', async(req, res) => {
    res.render('login_staff', {

    });
});

router.post('/', async(req, res) => {
    try {
        reqBody = {
            user_name: req.body.user_name,
            password: req.body.password
        }
        let user = await User.findOne(reqBody);
        if (user._id != undefined) {
            if (user.status == 5) {
                let report_id = user.report_id;
                let uchastka = await Uchastka.findOne({ _id: report_id }).populate('mahalla_id').populate('qishloq_id').populate('tuman_id').populate('viloyat_id').exec();
                let report = await Report.findOne({ uchastka_id: report_id });
                res.render('uchastka_account', {
                    uchastka: uchastka,
                    report: report
                })
            }
            if (user.status == 4) {
                let report_id = user.report_id;
                let mahalla = await Mahalla.findOne({ _id: report_id }).populate('qishloq_id').populate('tuman_id').populate('viloyat_id').exec();
                let reports = await Report.find({ mahalla_id: report_id }).populate('uchastka_id').exec();
                res.render('mahalla_account', {
                    mahalla: mahalla,
                    reports: reports
                })
            }
            if (user.status == 3) {
                let report_id = user.report_id;
                let qishloq = await Qishloq.findOne({ _id: report_id }).populate('tuman_id').populate('viloyat_id').exec();
                let reports = await Report.find({ qishloq_id: report_id }).populate('mahalla_id').exec();
                res.render('qishloq_account', {
                    qishloq: qishloq,
                    reports: reports
                })
            }
            if (user.status == 2) {
                let report_id = user.report_id;
                let tuman = await Tuman.findOne({ _id: report_id }).populate('viloyat_id').exec();
                let reports = await Report.find({ tuman_id: report_id }).populate('qishloq_id').exec();
                res.render('tuman_account', {
                    tuman: tuman,
                    reports: reports
                })
            }
            if (user.status == 1) {
                let report_id = user.report_id;
                let viloyat = await Viloyat.findOne({ _id: report_id });
                let reports = await Report.find({ viloyat_id: report_id }).populate('tuman_id').exec();
                res.render('viloyat_account', {
                    viloyat: viloyat,
                    reports: reports
                })
            }
        } else {
            res.render('login_staff', {

            });
        }
    } catch (ex) {
        res.render('login_staff', {

        });
    }

});

router.get('/uchastka', async(req, res) => {
    let report_id = req.query.report_id;
    let uchastka = await Uchastka.findOne({ _id: report_id }).populate('mahalla_id').populate('qishloq_id').populate('tuman_id').populate('viloyat_id').exec();
    let report = await Report.findOne({ uchastka_id: report_id });
    res.render('uchastka_account', {
        uchastka: uchastka,
        report: report
    })
});

router.get('/mahalla', async(req, res) => {
    let report_id = req.query.report_id;
    let mahalla = await Mahalla.findOne({ _id: report_id }).populate('qishloq_id').populate('tuman_id').populate('viloyat_id').exec();
    let reports = await Report.find({ mahalla_id: report_id }).populate('uchastka_id').exec();
    res.render('mahalla_account', {
        mahalla: mahalla,
        reports: reports
    })
});

router.get('/qishloq', async(req, res) => {
    let report_id = req.query.report_id;
    let qishloq = await Qishloq.findOne({ _id: report_id }).populate('tuman_id').populate('viloyat_id').exec();
    let reports = await Report.find({ qishloq_id: report_id }).populate('mahalla_id').exec();
    res.render('qishloq_account', {
        qishloq: qishloq,
        reports: reports
    })
});

router.get('/tuman', async(req, res) => {
    let report_id = req.query.report_id;
    let tuman = await Tuman.findOne({ _id: report_id }).populate('viloyat_id').exec();
    let reports = await Report.find({ tuman_id: report_id }).populate('qishloq_id').exec();
    res.render('tuman_account', {
        tuman: tuman,
        reports: reports
    })
});

router.put('/staff_update', async(req, res) => {
    let report = await Report.findOne({ _id: req.body.report_id })
    let doc = await Report.updateOne({ _id: req.body.report_id }, {
        turar_joy_soni: parseFloat(report.turar_joy_soni) + parseFloat(req.body.turar_joy_soni),
        aholi_soni: parseFloat(report.aholi_soni) + parseFloat(req.body.aholi_soni)
    }, {
        returnOriginal: false
    });
    console.log(doc)
    res.send(doc)
});

module.exports = router;