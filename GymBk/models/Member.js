const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    MemberName: String,
    MemberAge: String,
    MemberEmail:String,
    MemberPass:String,
    MemberSub: Boolean,
});



module.exports = mongoose.model('Member', MemberSchema);