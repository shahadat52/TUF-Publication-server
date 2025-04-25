import { v2 as cloudinary } from 'cloudinary';
import multer from "multer"
import fs from 'fs';


cloudinary.config({
    cloud_name: 'daahwsoyo',
    api_key: '385117123887121',
    api_secret: 'dQv331hhoRYUDKVC0gFPdtffbbo' // Click 'View API Keys' above to copy your API secret
});

export const sendImageToCloudinary = (path: string, fileName: string) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            path,
            { public_id: fileName },
            function (error, result) {
                console.log(result);
                if (error) {
                    reject(error);
                }
                resolve(result);
                fs.unlink(path, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.log('File is deleted.');
                    }
                });
            },
        );
    });
};



// image send from local pc to local folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.cwd() + '/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

export const upload = multer({ storage: storage })