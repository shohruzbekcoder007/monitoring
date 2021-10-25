const { QishloqSchema } = require('./../../schema/schema');
const { MainClass } =require('./../../main_class_reater/main_class')

class QishloqClass extends MainClass{
    constructor(){
        let Schema = QishloqSchema;
        super(Schema);
    }
}

module.exports.QishloqClass = QishloqClass;