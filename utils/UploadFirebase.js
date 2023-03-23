const storage = require("./firebase");
const multer = require("multer");
// multer

const upload = multer({ memoStorage });
const {
  ref,
  uploadBytes
} = require("firebase/storage");
  
const imageRef = ref(storage, file.originalname);
  const metatype = { contentType: file.mimetype, name: file.originalname };
  await uploadBytes(imageRef, file.buffer, metatype)
    .then((snapshot) => {
      res.send("uploaded!");
    })
    .catch((error) => console.log(error.message));
    