const { TumanSchema } = require('./../../schema/schema');
const { MainClass } =require('./../../main_class_reater/main_class')

class TumanClass extends MainClass{
    constructor(){
        let Schema = TumanSchema;
        super(Schema);
    }
}

module.exports.TumanClass = TumanClass;