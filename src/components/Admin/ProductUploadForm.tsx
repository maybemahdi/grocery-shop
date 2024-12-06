"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProductUploadForm() {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    stock: "",
    images: [""],
    categoryId: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle adding an image
  const handleAddImage = () => {
    setFormData({ ...formData, images: [...formData.images, ""] });
  };

  // Handle image URL change
  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...formData.images];
    updatedImages[index] = value;
    setFormData({ ...formData, images: updatedImages });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the data
    const payload = {
      ...formData,
      price: parseFloat(formData.price), // Convert price to a number
      stock: parseInt(formData.stock, 10), // Convert stock to a number
    };

    try {
      const {data} = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
        payload
      ); // Replace with your server endpoint
      console.log("Product uploaded successfully:", data.data);
      toast.success("Product uploaded successfully!");
      setFormData({
        productName: "",
        description: "",
        price: "",
        stock: "",
        images: [""],
        categoryId: "",
      });
    } catch (error) {
      console.error("Error uploading product:", error);
      toast.error("Error uploading product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Upload Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label htmlFor="productName" className="block font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            rows={4}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            step="0.01"
            required
          />
        </div>

        {/* Stock */}
        <div className="mb-4">
          <label htmlFor="stock" className="block font-medium mb-1">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Images */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Image URLs</label>
          {formData.images.map((image, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={image}
                onChange={(e) => handleImageChange(index, e.target.value)}
                className="w-full border rounded-lg p-2"
                required
              />
              {index === formData.images.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                >
                  Add
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Category ID */}
        <div className="mb-4">
          <label htmlFor="categoryId" className="block font-medium mb-1">
            Category ID
          </label>
          <input
            type="text"
            id="categoryId"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            {isSubmitting ? "Uploading..." : "Upload Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
