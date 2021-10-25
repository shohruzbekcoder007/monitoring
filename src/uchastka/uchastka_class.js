const { UchastkaSchema } = require('./../../schema/schema');
const { MainClass } =require('./../../main_class_reater/main_class')

class UchastkaClass extends MainClass{
    constructor(){
        let Schema = UchastkaSchema;
        super(Schema);
    }
}

module.exports.UchastkaClass = UchastkaClass;