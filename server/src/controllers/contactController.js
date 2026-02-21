const Contact = require('../models/Contact');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const createContact = async (req, res) => {
  const { name, email, phone, message = '' } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Name, email, and phone are required.' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  const phoneSanitized = String(phone).trim();
  if (phoneSanitized.length < 8) {
    return res.status(400).json({ message: 'Please provide a valid phone number.' });
  }

  const contact = await Contact.create({
    name: String(name).trim(),
    email: String(email).trim(),
    phone: phoneSanitized,
    message: String(message).trim(),
  });

  return res.status(201).json({
    message: 'Your message has been submitted successfully.',
    id: contact._id,
  });
};

module.exports = { createContact };
