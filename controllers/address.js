const asyncHandler = require("express-async-handler");
const Address = require("../models/address");

// Create a new address
const createAddress = asyncHandler(async (req, res) => {
  const { userID, city, street, building, floor } = req.body;

  const address = await Address.create({
    userID,
    city,
    street,
    building,
    floor,
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
  const { userID, city, street, building, floor } = req.body;

  const address = await Address.findById(req.params.id);

  if (address) {
    address.userID = userID;
    address.city = city;
    address.street = street;
    address.building = building;
    address.floor = floor;

    const updatedAddress = await address.save();

    res.status(200).json({
      success: true,
      data: updatedAddress,
    });
  } else {
    res.status(404);
    throw new Error("Address not found");
  }
});

// Delete an address
const deleteAddress = asyncHandler(async (req, res) => {
  const address = await Address.findById(req.params.id);

  if (address) {
    await address.remove();

    res.status(200).json({
      success: true,
      message: "Address removed",
    });
  } else {
    res.status(404);
    throw new Error("Address not found");
  }
});

module.exports = {
  createAddress,
  getAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
};
