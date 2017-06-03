import express from "express";
import distributorRoutes from "./distributors-api.controller";
import productRoutes from "./products-api.controller";
import saleRoutes from "./sales-api.controller";

const router = express.Router();

router.use('/distributors', distributorRoutes);
router.use('/products', productRoutes);
router.use('/sales', saleRoutes);

export default router;