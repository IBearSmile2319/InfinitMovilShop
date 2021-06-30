const { requireSignin, userMiddleware, adminMiddleware } = require("../middlewares");
const { addOrder, getOrders, getOrder, getCustomerOrders, updateOrder } = require("../controllers/orderControllers");
const router = require("express").Router();

router.post("/addOrder", requireSignin, userMiddleware, addOrder);
router.get("/getOrders", requireSignin, userMiddleware, getOrders);
router.post("/getOrder", requireSignin, userMiddleware, getOrder);
// admin routes
  router.post(`/order/update`, requireSignin, adminMiddleware, updateOrder);
  router.post(
    `/order/getCustomerOrders`,
    requireSignin,
    adminMiddleware,
    getCustomerOrders
  );
  

module.exports = router;