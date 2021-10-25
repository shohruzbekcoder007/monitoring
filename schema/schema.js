const mongoose = require('mongoose');

const ViloyatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    turar_joy_soni: {
        type: Number,
        required: true
    },
    aholi_soni: {
        type: Number,
        required: true
    }
});
const Viloyat = mongoose.model("provinces", ViloyatSchema);

const TumanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    viloyat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "provinces",
        required: true
    },
    turar_joy_soni: {
        type: Number,
        required: true
    },
    aholi_soni: {
        type: Number,
        required: true
    }
});
const Tuman = mongoose.model("districts", TumanSchema);

const QishloqSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    viloyat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "provinces",
        required: true
    },
    tuman_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "districts",
        required: true
    },
    turar_joy_soni: {
        type: Number,
        required: true
    },
    aholi_soni: {
        type: Number,
        required: true
    }
});
const Qishloq = mongoose.model("villages", QishloqSchema);

const MahallaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    viloyat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "provinces",
        required: true
    },
    tuman_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "districts",
        required: true
    },
    qishloq_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "villages",
        required: true
    },
    turar_joy_soni: {
        type: Number,
        required: true
    },
    aholi_soni: {
        type: Number,
        required: true
    }
});
const Mahalla = mongoose.model("neighborhoods", MahallaSchema);

const UchastkaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    viloyat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "provinces",
        required: true
    },
    tuman_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "districts",
        required: true
    },
    qishloq_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "villages",
        required: true
    },
    mahalla_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "neighborhoods",
        required: true
    },
    turar_joy_soni: {
        type: Number,
        required: true
    },
    aholi_soni: {
        type: Number,
        required: true
    }
});
const Uchastka = mongoose.model("streets", UchastkaSchema)

const UserSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ["1", "2", "3", "4", "5"],
        required: true,
    },
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    report_id: {
        type: String,
        required: true
    },
})
const User = mongoose.model("users", UserSchema);

const AdminSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const Admin = mongoose.model("admins", AdminSchema);

const ReportSchema = new mongoose.Schema({
    viloyat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "provinces",
        required: true
    },
    tuman_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "districts",
        required: true
    },
    qishloq_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "villages",
        required: true
    },
    mahalla_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "neighborhoods",
        required: true
    },
    uchastka_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "streets",
        required: true
    },
    turar_joy_soni: {
        type: Number,
        required: true
    },
    aholi_soni: {
        type: Number,
        required: true
    }
})
const Report = mongoose.model("reports", ReportSchema);

module.exports.Viloyat = Viloyat;
module.exports.Tuman = Tuman;
module.exports.Qishloq = Qishloq;
module.exports.Mahalla = Mahalla;
module.exports.Uchastka = Uchastka;
module.exports.User = User;
module.exports.Admin = Admin;
module.exports.Report = Report;