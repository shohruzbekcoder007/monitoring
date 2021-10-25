const { Admin } = require('../../schema/schema');
const { MainClass } =require('../../main_class_reater/main_class')

class UserAdminClass extends MainClass{
    constructor(){
        let Schema = Admin;
        super(Schema);
    }
}

module.exports.UserAdminClass = UserAdminClass;