import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

export const UploadButton = generateUploadButton({
//  url: "http://localhost:5000/api/uploadthing",
  url: import.meta.env.VITE_API_URL + "/api/uploadthing"
});
export const UploadDropzone = generateUploadDropzone({
 // url: "http://localhost:5000/api/uploadthing",
  url: import.meta.env.VITE_API_URL + "/api/uploadthing"
});
