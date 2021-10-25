const express = require('express');
const router = express.Router();

const { Admin, Viloyat, Tuman, Qishloq, Mahalla, Uchastka, User, Report } = require('./../../schema/schema')

router.get('/', async(req, res) => {
    res.render('login', {

    });
});

router.get('/create', async(req, res) => {
    let viloyatlar = await Viloyat.find({});
    res.render("admin", {
        viloyatlar: viloyatlar
    })
});

router.post('/create', async(req, res) => {
    try {
        reqBody = {
            user_name: req.body.user_name,
            password: req.body.password
        }
        let admin = await Admin.findOne(reqBody);
        let viloyatlar = await Viloyat.find({});
        if (admin._id != undefined) {
            res.render("admin", {
                viloyatlar: viloyatlar
            })
        } else {
            res.render('login', {

            });
        }
    } catch (ex) {
        res.render('login', {

        });
    }

});

router.post('/viloyat_create', async(req, res) => {
    try {
        let newElement = new Viloyat(req.body);
        let saveElement = await newElement.save();
        return res.send(saveElement);
    } catch (ex) {
        return res.status(400).send(ex);
    }
});

router.get('/create/tuman', async(req, res) => {
    let viloyatlar = await Viloyat.find({});
    let tumanlar = await Tuman.find({}).populate('viloyat_id').exec();
    res.render("create_tuman", {
        viloyatlar: viloyatlar,
        tumanlar: tumanlar
    })

});

router.post('/tuman_create', async(req, res) => {
    try {
        let newElement = new Tuman(req.body);
        let saveElement = await newElement.save();
        let viloyat = await Viloyat.findOne({ _id: saveElement.viloyat_id });
        saveElement.viloyat_nomi = viloyat.name;
        return res.send(saveElement);
    } catch (ex) {
        return res.status(400).send(ex);
    }
});

router.get('/create/qishloq', async(req, res) => {
    let viloyatlar = await Viloyat.find({});
    let tumanlar = await Tuman.find({}).populate('viloyat_id').exec();
    let qishloqlar = await Qishloq.find({}).populate('tuman_id').populate('viloyat_id').exec();
    res.render("create_qishloq", {
        viloyatlar: viloyatlar,
        tumanlar: tumanlar,
        qishloqlar: qishloqlar
    })

});

router.post('/qishloq_create', async(req, res) => {
    try {
        let newElement = new Qishloq(req.body);
        let saveElement = await newElement.save();
        return res.send(saveElement);
    } catch (ex) {
        return res.status(400).send(ex);
    }
});

router.get('/create/mahalla', async(req, res) => {
    let viloyatlar = await Viloyat.find({});
    let tumanlar = await Tuman.find({}).populate('viloyat_id').exec();
    let qishloqlar = await Qishloq.find({}).populate('tuman_id').populate('viloyat_id').exec();
    let mahallalar = await Mahalla.find({}).populate('qishloq_id').populate('tuman_id').populate('viloyat_id').exec();
    res.render("create_mahalla", {
        viloyatlar: viloyatlar,
        tumanlar: tumanlar,
        qishloqlar: qishloqlar,
        mahallalar: mahallalar
    })

});

router.post('/mahalla_create', async(req, res) => {
    try {
        let newElement = new Mahalla(req.body);
        let saveElement = await newElement.save();
        return res.send(saveElement);
    } catch (ex) {
        return res.status(400).send(ex);
    }
});

router.get('/create/uchastka', async(req, res) => {
    let viloyatlar = await Viloyat.find({});
    let tumanlar = await Tuman.find({}).populate('viloyat_id').exec();
    let qishloqlar = await Qishloq.find({}).populate('tuman_id').populate('viloyat_id').exec();
    let mahallalar = await Mahalla.find({}).populate('qishloq_id').populate('tuman_id').populate('viloyat_id').exec();
    let uchastkalar = await Uchastka.find({}).populate('mahalla_id').populate('qishloq_id').populate('tuman_id').populate('viloyat_id').exec();
    res.render("create_uchastka", {
        viloyatlar: viloyatlar,
        tumanlar: tumanlar,
        qishloqlar: qishloqlar,
        mahallalar: mahallalar,
        uchastkalar: uchastkalar
    })

});

router.post('/uchastka_create', async(req, res) => {
    try {
        let newElement = new Uchastka(req.body);
        let saveElement = await newElement.save();
        let report = {
            viloyat_id: saveElement.viloyat_id,
            tuman_id: saveElement.tuman_id,
            qishloq_id: saveElement.qishloq_id,
            mahalla_id: saveElement.mahalla_id,
            uchastka_id: saveElement._id,
            turar_joy_soni: 0,
            aholi_soni: 0
        }
        let newReport = new Report(report);
        let saveReport = newReport.save();
        return res.send(saveElement);
    } catch (ex) {
        return res.status(400).send(ex);
    }
});

router.post('/staff_create', async(req, res) => {
    try {
        let newElement = new User(req.body);
        let saveElement = await newElement.save();
        return res.send(saveElement);
    } catch (ex) {
        return res.status(400).send(ex);
    }
});

module.exports = router;