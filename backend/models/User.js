const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        oEmail:  { type: String, match: /.+\@.+\..+/ },
        password: { type: String },
        role: {type: String, enum: ['admin','user'], required: true },
        designation: {type: String},
        image: { 
            data: Buffer, 
            contentType: String, 
        },
        dob:{type: String},
        address: {type: String},
        contactNo : {type:String},
        aadharNo :{ type:String },
        joiningDate: { type:String },
        bond: { type:String },
        registrationNo :{ 
            type: String ,
            default: function() {
                const max=20000;
                const min=99999;
                const n = Math.floor(Math.random()*(max-min+1)+min);
                return n;
              }
        },
        empId: { 
            type:String ,
            default: function() {
                const max=111;
                const min=999;
                const n = Math.floor(Math.random()*(max-min+1)+min);
                return "2023"+"FB"+n;
              }
        },
        email: { type:String},
        bankDetails:{
                accNo:{type:Number},
                ifscCode :{type:String},
                branch:{type:String},
                pinCode: {type:String}
        },
        taskCompleted:[ {task : {type:String}} ],
        salary:{
            ctc:{type:Number},
            basic:{type:Number},
            hra:{type:Number},
            travel:{type:Number},           
            Basic:{type:Number},
            special:{type:Number},
            pf:{type:Number},
            gross:{type:Number},
            inHand:{type: Number}
        },
        pendingLeaves:{type:Number,default:0},
        approvedLeaves:{type:Number,default:0},
        docStatus:{type:String,default:'none'},
        experience:{type:String},
        notifications:[
            {
                type:{type:String},
                message:{type:String},
                date:{type:String},
                role:{type:String},
                status:{type:String},
                holidayDate:{type:String},
                id:{type:String}
            }
        ],
        documents:{
            relievingLetter:{
                data: Buffer, 
                contentType: String,
                status:{type:String},
                lastModified:{type:String},
                fileName:{type:String}
            },
            aadharCard:{
                data: Buffer, 
                contentType: String,
                status:{type:String},
                lastModified:{type:String},
                fileName:{type:String}
            },
            panCard:{
                data: Buffer, 
                contentType: String,
                status:{type:String},
                lastModified:{type:String},
                fileName:{type:String}
            },
            graduate:{
                data: Buffer, 
                contentType: String,
                status:{type:String},
                lastModified:{type:String},
                fileName:{type:String}
            },
            tenth:{
                data: Buffer, 
                contentType: String,
                status:{type:String},
                lastModified:{type:String},
                fileName:{type:String}
            },
            twelth:{
                data: Buffer, 
                contentType: String,
                status:{type:String},
                lastModified:{type:String},
                fileName:{type:String}
            },
            resume:{
                data: Buffer, 
                contentType: String,
                status:{type:String},
                lastModified:{type:String},
                fileName:{type:String}
            }
        }
    }
)

module.exports = mongoose.model('User',userSchema) ;