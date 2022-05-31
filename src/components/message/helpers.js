const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'dnjmxt14w', 
    api_key: '826188237694693', 
    api_secret: 'e368YQ9TPXCi8Ngpt3yDwvg-oqA' 
});

function uploadToCloudinary(image) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(image, (error, image) => {
            (error)
            ? reject(error)
            : resolve(image)
        })
    })
}

module.exports = {
    uploadToCloudinary
}