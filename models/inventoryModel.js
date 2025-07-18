const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
inventoryType:{
    type:String,
    required:[true, 'inventory type required'],
    enum:['in', 'out']
},
bloodGroup:{
    type:String,
    required:[true, 'blood group is required'],
    enum:['O+', 'O-', 'AB+', 'AB-','A+', 'A-', 'B+', 'B-']
},
quantity:{
    type:Number,
    required:[true, 'blood quantity is required']
},
donorEmail:{
    type:String,
    required:[true, 'Donor Email is required']
},
organization:{  
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:[true,'organization is required']
},
hospital:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required: function (){ 
        return this.inventoryType === 'out';
    }
},
// donor:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'users',
//     required:function (){
//         return this.inventoryType === 'in';
//     }
// },

},{timestamps:true});

module.exports = mongoose.model('Inventory', inventorySchema)