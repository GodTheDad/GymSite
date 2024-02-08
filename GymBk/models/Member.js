const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
    MemberName: String,
    MemberAge: String,
    MemberEmail:String,
    MemberPass:String,
    MemberSub: Boolean,
    MemberId: String,
});



module.exports = mongoose.model('Member', MemberSchema);