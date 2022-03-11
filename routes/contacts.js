const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   PUT api/contacts/:id
// @desc    Update cointact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   DELETE api/contacts/:id
// @desc    DELETE cointact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("DELETE contact");
});

module.exports = router;