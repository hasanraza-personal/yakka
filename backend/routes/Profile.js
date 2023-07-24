const express = require('express')
const router = express.Router()
const userModel = require('../models/User')
const feedbackModal = require('../models/Feedback')


// Route 1: Start streak user using: POST '/api/profile/startstreak'
router.post('/startstreak', async (req, res) => {
    let success = false;
    let { email, fapTime } = req.body

    try {
        let streak = await userModel.findOneAndUpdate({ email }, { fapTime }, { new: true })
        success = true
        res.json({ success, fapTime: streak.fapTime, msg: "Your New Journey Has Begun. Be Strong. Don't Let Yourself Be Control By Your Desire." });
    } catch (error) {
        return res.status(400).json({ success, msg: 'Something went wrong. Please try again', error: err.message });
    }
})


// Route 2: Reset sreak using: POST '/api/profile/resetstreak'
router.post('/resetstreak', async (req, res) => {
    let success = false;
    let { email } = req.body

    try {
        await userModel.findOneAndUpdate({ email }, { fapTime: null }, { new: true })
        success = true
        res.json({ success, msg: "You did it again. You have proven to yourself that you are slave and you cannot free yourself. Think about the last sentence." });
    } catch (error) {
        return res.status(400).json({ success, msg: 'Something went wrong. Please try again', error: err.message });
    }
})


// Route 3: Get sreak using: POST '/api/profile/getstreak'
router.get('/getstreak', async (req, res) => {
    let success = false

    try {
        let streak = await userModel.findOne({ email: req.query.email }).select('-_id fapTime')
        success = true
        res.json({ success, fapTime: streak.fapTime });
    } catch (err) {
        return res.status(400).json({ success, msg: 'Something went wrong. Please try again', error: err.message });
    }
})


// Route 4: Submit feedback using: POST '/api/profile/submitfeedback'
router.post('/submitfeedback', async (req, res) => {
    let success = false

    if(req.body.feedback === ''){
        return res.status(400).json({ success, msg: 'Feedback cannot be empty' });
    }

    try {
        await feedbackModal.create({
            feedback: req.body.feedback,
        });
        success = true;
        res.json({ success, msg: 'Your feedback has been submitted' });
    } catch (err) {
        return res.status(400).json({ success, msg: 'Something went wrong while saving. Please try again', error: err.message });
    }
})


module.exports = router;