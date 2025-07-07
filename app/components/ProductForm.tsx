"use client";

import {  useCabin } from "../providers/CabinContext";
import { uploadFile } from "../utils/supabase/apiCabinImages";
import { useState } from "react";
import styles from "../styles/ProductCard.module.css";
import CustomValidation from "./dropzone/CustomValidation";
import Previews from "./dropzone/Previews";
import {uploadFileToS3} from "../utils/supabase/apiCabinImages";
import { insertCabin } from "../utils/supabase/apiCabins";
export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: "", regularPrice: 0, discount: 0,
    maxCapacity: 1, description: "", image: ""
  });
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (e: any) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let imagePath = "";
      if (files.length > 0) {
        const file = files[0];
        imagePath = `${Date.now()}_${file.name}`;
        await uploadFileToS3(file, imagePath);
      }

      const response = await insertCabin({
        ...formData,
        image: imagePath,
        regularPrice: +formData.regularPrice,
        discount: +formData.discount,
        maxCapacity: +formData.maxCapacity,
      });

      console.log("✅ Cabin inserted:", response);

    } catch (err) {
      console.error("❌ Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["product-list__heading"]}>Add New Product</div>
      <div className={styles["product-form__grid"]}>
        <input type="text" name="name" onChange={handleChange} placeholder="Cabin Name" />
        <input type="number" name="regularPrice" onChange={handleChange} placeholder="Regular Price" />
        <input type="number" name="discount" onChange={handleChange} placeholder="Discount" />
        <input type="number" name="maxCapacity" onChange={handleChange} placeholder="Max Capacity" />
        <textarea name="description" onChange={handleChange} placeholder="Description" />
        <Previews onFilesChange={setFiles} />
        <CustomValidation />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
