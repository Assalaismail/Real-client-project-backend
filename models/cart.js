const mongoose = require("mongoose")

const cartSchema=new mongoose.Schema({
    user_id:{type: mongoose.Schema.Types.ObjectId,
    ref: "users",
required: true},
    cart:{
        items:[{
            item_id:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"items"
            },
            qty:{type:Number,
                required: true,
            }
        }]
    },
    Total:{type: Number,
        default:0.00,

    }

},{
    timestamps:true,
})

module.exports = mongoose.model('carts', cartSchema)