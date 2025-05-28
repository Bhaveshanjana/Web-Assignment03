import express from "express";
import productController from "../controller/productcontroller.js";

const router = express.Router();

router.post("/createproduct", productController.createproduct);

router.put("/updateproduct/:ProductId", productController.updateproduct);

router.get("/getallproduct", productController.getallproduct);

router.delete("/deleteproduct/:productId", productController.deleteproduct);

export default router;
