import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Order from "../models/Order.js";

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    pointsUsed,
    deliveryCharges,
    totalPoints,
  } = req.body;

  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  }

  // Verify user has enough points if paying with points
  if (paymentMethod === "points") {
    const user = await User.findById(req.user._id);
    if (user.pointsBalance < totalPoints) {
      res.status(400);
      throw new Error("Not enough points");
    }
  }

  const order = new Order({
    user: req.user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    pointsUsed,
    deliveryCharges,
    totalPoints,
  });

  const createdOrder = await order.save();

  // Deduct points if payment method is points
  if (paymentMethod === "points") {
    await User.findByIdAndUpdate(req.user._id, {
      $inc: { pointsBalance: -totalPoints },
    });
  }

  res.status(201).json(createdOrder);
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  // Check if the order belongs to the user or if user is admin
  if (
    order.user._id.toString() !== req.user._id.toString() &&
    req.user.role !== "admin"
  ) {
    res.status(401);
    throw new Error("Not authorized");
  }

  res.json(order);
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

export { createOrder, getOrderById, getMyOrders };
