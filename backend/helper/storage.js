import multer from "multer";

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./public/uploads/");
	},
	filename: (req, file, callback) => {
		let filetype = "";
		if (file.mimetype === "image/png") {
			filetype = "png";
		}
		if (file.mimetype === "image/jpg") {
			filetype = "jpg";
		}
		if (file.mimetype === "image/jpeg") {
			filetype = "jpeg";
		}
		if (file.mimetype === "image/webp") {
			filetype = "webp";
		}
		if (file.mimetype === "image/web") {
			filetype = "web";
		}
		const fileName = file.originalname.split(".")[0];
		callback(null, `image-${Date.now()}-${fileName}.${filetype}`);
		fileName.replace("\\", "/");
	},
});

const upload = multer({
	storage: storage,
	limits: {
		fieldSize: 1024 * 1024 * 5,
	},
	fileFilter: (req, file, callback) => {
		if (
			file.mimetype === "image/png" ||
			file.mimetype === "image/jpg" ||
			file.mimetype === "image/jpeg" ||
			file.mimetype === "image/webp" ||
			file.mimetype === "image/web"
		) {
			callback(null, true);
		} else {
			callback(null, false);
			return callback(new Error("only .png or .jpg or .web format allowed!"));
		}
	},
});

export default upload;
