import {v2 as cloudinary} from 'cloudinary';

import {config} from 'dotenv';
config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});



//creating the instance of cloudinary so that we can use it 
export default cloudinary;