export const uploadImageToCloudinary = async (file) => {
  if (!file) return null;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "Uddeshhya");
  formData.append("cloud_name", "dgufdt51q");

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dgufdt51q/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Upload failed');
    }

    const data = await response.json();
    if (!data.secure_url) {
      throw new Error('No secure URL received from Cloudinary');
    }

    console.log('Cloudinary upload successful:', data);
    return data.secure_url;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw new Error(`Cloudinary upload failed: ${error.message}`);
  }
};