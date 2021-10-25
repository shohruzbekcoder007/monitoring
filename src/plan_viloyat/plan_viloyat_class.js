const { PlanViloyat } = require('./../../schema/schema');
const { MainClass } = require('./../../main_class_reater/main_class')

class PlanViloyatClass extends MainClass {
    constructor() {
        let Schema = QishloqSchema;
        super(Schema);
    }
}

module.exports.PlanViloyatClass = PlanViloyatClass;