"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Cropper from "react-easy-crop";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";
import getCroppedImg from "@/app/components/getCroppedImg";
import { FaCamera, FaEdit } from "react-icons/fa";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 🔒 Protect route
  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  // 🔹 Image state
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImage(imgUrl);
      setCroppedImage(null);
      setShowCropper(true);
    }
  };

  const showCroppedImage = useCallback(async () => {
    try {
      const cropped = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(cropped);
      toast.success("Image cropped successfully!");
      setShowCropper(false);
    } catch (e) {
      console.error(e);
      toast.error("Crop failed");
    }
  }, [croppedAreaPixels, image]);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      let imageUrl = null;

      if (croppedImage) {
        // upload to imgbb
        const imgBbKey = process.env.NEXT_PUBLIC_IMGBB_KEY;
        const formData = new FormData();
        formData.append("image", croppedImage);

        const imgUpload = await axios.post(
          `https://api.imgbb.com/1/upload?key=${imgBbKey}`,
          formData
        );
        imageUrl = imgUpload.data.data.url;
      }

      // Product data
      const productData = {
        title: data.title,
        price: parseFloat(data.price),
        description: data.description,
        image: imageUrl,
        user: {
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        },
        createdAt: new Date(),
      };

      const res = await axios.post("/api/products", productData);

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Product added successfully 🎉",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setImage(null);
        setCroppedImage(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Image or Data upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 my-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Add Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image Upload */}
        <div>
          <label className="block mb-2 text-gray-600 dark:text-gray-300 font-medium">
            Product Image
          </label>

          <div className="w-full h-48 sm:h-72 border-2 border-dashed rounded-md relative overflow-hidden">
            {!image && (
              <div
                onClick={() => document.getElementById("productImage").click()}
                className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
              >
                <FaCamera className="text-3xl text-gray-500" />
                <span className="text-sm text-gray-400 mt-2 text-center px-2">
                  Click to upload
                </span>
              </div>
            )}

            {croppedImage && !showCropper && (
              <div className="relative w-full h-full">
                <img
                  src={URL.createObjectURL(croppedImage)}
                  className="object-cover w-full h-full rounded"
                  alt="Cropped"
                />
                <button
                  type="button"
                  onClick={() => setShowCropper(true)}
                  className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:scale-110"
                >
                  <FaEdit className="text-blue-600 text-sm" />
                </button>
              </div>
            )}

            {image && showCropper && (
              <>
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={4 / 3}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                  cropShape="rect"
                  showGrid={false}
                  className="absolute top-0 left-0 right-0 bottom-0"
                />
                <div className="absolute bottom-2 left-2 flex gap-2">
                  <button
                    type="button"
                    onClick={showCroppedImage}
                    className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700"
                  >
                    Crop
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      setCroppedImage(null);
                      setShowCropper(false);
                    }}
                    className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}

            <input
              id="productImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Title */}
        <div>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full px-4 py-2 border rounded focus:outline-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Product Title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <input
            {...register("price", { required: "Price is required" })}
            type="number"
            placeholder="Product Price"
            className="w-full px-4 py-2 border rounded focus:outline-blue-500 dark:bg-gray-700 dark:text-white"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <textarea
            {...register("description")}
            className="w-full px-4 py-2 border rounded focus:outline-blue-500 dark:bg-gray-700 dark:text-white"
            rows="4"
            placeholder="Product Description..."
          ></textarea>
        </div>

        {/* User Info */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={session?.user?.name}
            readOnly
            className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white cursor-not-allowed"
          />
          <input
            type="text"
            value={session?.user?.email}
            readOnly
            className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white cursor-not-allowed"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
