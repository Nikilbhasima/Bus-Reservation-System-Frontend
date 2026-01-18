import axios from "axios";

export const uploadToCloudinary = async (file, onUploadProgress) => {
  if (!file) {
    console.error("No file provided for upload");
    return null;
  }

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "twitter_clone"); // your preset
    formData.append("cloud_name", "deu2m62lt"); // your cloud name

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/deu2m62lt/image/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress, // optional callback for progress
      },
    );

    return response.data.secure_url || response.data.url || null;
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};
