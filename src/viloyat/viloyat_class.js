const { Viloyat } = require('./../../schema/schema');
const { MainClass } = require('./../../main_class_reater/main_class')

class ViloyatClass extends MainClass {
    constructor() {
        let Schema = Viloyat;
        super(Schema);
    }
}

module.exports.ViloyatClass = ViloyatClass;