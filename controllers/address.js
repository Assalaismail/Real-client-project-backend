const asyncHandler = require("express-async-handler");
const Address = require("../models/address");

// Create a new address
const createAddress = asyncHandler(async (req, res) => {
  const {name, phone, email, city, street, building, floor, details, location } = req.body;

  const address = await Address.create({
    name,
    phone,
    email,
    city,
    street,
    building,
    floor,
    details,
    location,
  });

  res.status(201).json({
    success: true,
    data: address,
  });
});

// Get all addresses
const getAddresses = asyncHandler(async (req, res) => {
  const addresses = await Address.find();

  res.status(200).json({
    success: true,
    data: addresses,
  });
});

// Get single address
const getAddressById = asyncHandler(async (req, res) => {
  const address = await Address.findById(req.params.id);

  if (address) {
    res.status(200).json({
      success: true,
      data: address,
    });
  } else {
    res.status(404);
    throw new Error("Address not found");
  }
});

// Update an address
const updateAddress = asyncHandler(async (req, res) => {
  const address = await Address.findById(req.params.id);
  if(!address) {
      res.status(400)
      throw new Error('address not found');
  }

  const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true, 
  })
  res.status(200).json(updatedAddress)
})

// Delete an address
const deleteAddress = asyncHandler(async (req, res) => {
  const address = await Address.findByIdAndRemove(req.params.id);

  if (!address) {
    res.status(404);
    throw new Error("Address not found");
  } 
    res.status(200).json({
      success: true,
      message: `Address with the id ${req.params.id} removed`,
    });
});

module.exports = {
  createAddress,
  getAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
};
