
import mongoose from 'mongoose';
import { Schema } from 'mongoose';


export default mongoose.model('MovieSchema', new Schema(
    {
        title: 'String',
        releaseYear: 'Number',
        director: 'String',
        genre: 'String'
    }
));




