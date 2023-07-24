const express = require('express');
const router = express.Router();
const userModel = require('../models/User');

// Route 1: Login user using: POST '/api/auth/login'
router.post('/login', async (req, res) => {
    let success = false;
    let userCount = 0

    const { googleId, email, username, name } = req.body

    // Check for user
    try {
        userCount = await userModel.countDocuments({ email })

        if (userCount > 0) {
            success = true;
            res.json({ success, email: email, msg: 'Your account has been created' });
        } else {

        }
    } catch (err) {
        return res.status(400).json({ success, msg: 'Something went wrong. Please try again', error: err.message });
    }

    // Save user details in database
    if (userCount === 0) {
        try {
            await userModel.create({
                googleId,
                email,
                username,
                name
            });
            success = true;
            res.json({ success, email: email, msg: 'Your account has been created' });
        } catch (err) {
            return res.status(400).json({ success, msg: 'Something went wrong while saving. Please try again', error: err.message });
        }
    }
})


// Route 2: Delete account using: POST '/api/profile/deleteaccount'
router.post('/deleteaccount', async (req, res) => {
    let success = false;

    // Delete user account from database
    try {
        await userModel.findOneAndRemove({ email: req.body.email });
        success = true
        res.json({ success, msg: 'Your account has been deleted' });
    } catch (err) {
        return res.status(400).json({ success, msg: 'Something went wrong while deleting your account. Please try again', error: err.message });
    }
})

module.exports = router;