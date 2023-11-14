import axios from "axios";

const ImageUploadService =( () =>{
    const imageUploadUrl = "http://localhost:5056/ImageUpload";

    const uploadImage = async (image: File) => {
        const formData = new FormData();
        formData.append("file", image);

        const result = await axios({
            url: imageUploadUrl,
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data"}
        });
        formData.delete("file");
    }
    return {
        uploadImage
    }

})();
export default ImageUploadService;