const express = require('express');
const router = express.Router();

const { Viloyat, Tuman, Qishloq, Mahalla, Uchastka, User, Report  } = require('../../schema/schema')


router.get('/allviloyat', async(req, res) => {
    try{
        let result = await Viloyat.find({});
        return res.send(result);
    } catch(ex) {
        return res.status(400).send(ex);
    }
});

router.get('/alltuman', async(req, res) => {
    try{
        let result = await Tuman.find({});
        return res.send(result);
    } catch(ex) {
        return res.status(400).send(ex);
    }
});

router.get('/allqishloq', async(req, res) => {
    try{
        let result = await Qishloq.find({});
        return res.send(result);
    } catch(ex) {
        return res.status(400).send(ex);
    }
});

router.get('/allmahalla', async(req, res) => {
    try{
        let result = await Mahalla.find({});
        return res.send(result);
    } catch(ex) {
        return res.status(400).send(ex);
    }
});

router.get('/alluchastka', async(req, res) => {
    try{
        let result = await Uchastka.find({});
        return res.send(result);
    } catch(ex) {
        return res.status(400).send(ex);
    }
});

module.exports = router;