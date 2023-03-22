const mongoose = require('mongoose')

const regSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tech: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type:String, required: true },
    cpassword: { type:String, required: true }
    },
    { collection: 'user-data' } // this is the name of the collection in the mongodb
)

// creating model: first-parameter:  give it a name, second-parameter: write the schema name associated with it 
const Reg = mongoose.model('Reg', regSchema)
module.exports = Reg;