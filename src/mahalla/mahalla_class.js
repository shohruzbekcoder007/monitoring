const { MahallaSchema } = require('./../../schema/schema');
const { MainClass } =require('./../../main_class_reater/main_class')

class MahallaClass extends MainClass{
    constructor(){
        let Schema = MahallaSchema;
        super(Schema);
    }
}

module.exports.MahallaClass = MahallaClass;