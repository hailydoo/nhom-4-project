const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);

module.exports = router; 