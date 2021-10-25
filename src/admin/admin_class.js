// const { ViloyatClass, TumanClass, QishloqClass, MahallaClass, UchastkaClass, AdminClass } = require('./../../schema/schema')
const { ViloyatClass } = require('./../viloyat/viloyat_class')
const { TumanClass } = require('./../tuman/tuman_class')
const { QishloqClass } = require('./../qishloq/qishloq_class')
const { MahallaClass } = require('./../mahalla/mahalla_class')
const { UchastkaClass } = require('./../uchastka/uchastka_class')
const { AdminClass } = require('./../viloyat/viloyat_class')

class AdminClassCreater {

    constructor() {
        this.ViloyatClass = ViloyatClass;
        this.TumanClass = TumanClass;
        this.QishloqClass = QishloqClass;
        this.MahallaClass = MahallaClass;
        this.UchastkaClass = UchastkaClass;
        this.AdminClass = AdminClass;
    }

    async createViloyat(elem) {
        let result = await this.ViloyatClass.createElement(elem);
        return result;
    }

    async createTuman(elem) {
        let result = await this.TumanClass.createElement(elem);
        return result;
    }

    async createQishloq(elem) {
        let result = await this.QishloqClass.createElement(elem);
        return result;
    }

    async createMahalla(elem) {
        let result = await this.MahallaClass.createElement(elem);
        return result;
    }

    async createUchastka(elem) {
        let result = await this.UchastkaClass.createElement(elem);
        return result;
    }

}

module.exports.AdminClassCreater = AdminClassCreater;