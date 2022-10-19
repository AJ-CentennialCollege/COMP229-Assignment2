import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String, 
    number: String,
    email: String
}, {
    // options
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactSchema);