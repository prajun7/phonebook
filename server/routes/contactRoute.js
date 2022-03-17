const express = require("express");
const router = express.Router();

const { addUserContact,
        getTeacherCount,
        getDoctorCount, 
        getDesignerCount, 
        getPoliticianCount, 
        getStudentCount, 
        getBusinessmanCount,
        getSpecificContact } = require ("../controller/contactController");

// middlewares
// const { auth, access } = require("../../middlewares/common/ErrorHandler");

// Register route
// This will go to, contact/
router.post("/", addUserContact);

// This will go to, contact/:user_id/teachers
// Counts the total number of contacts who are teacher for a specific user
router.get("/:user_id/teachers",getTeacherCount);

// This will go to, contact/:user_id/doctors
// Counts the total number of contacts who are teacher for a specific user
router.get("/:user_id/doctors",getDoctorCount);

// This will go to, contact/:user_id/designers
// Counts the total number of contacts who are teacher for a specific user
router.get("/:user_id/designers",getDesignerCount);

// This will go to, contact/:user_id/politicians
// Counts the total number of contacts who are teacher for a specific user
router.get("/:user_id/politicians",getPoliticianCount);

// This will go to, contact/:user_id/students
// Counts the total number of contacts who are teacher for a specific user
router.get("/:user_id/students",getStudentCount);

// This will go to, contact/:user_id/businessmen
// Counts the total number of contacts who are teacher for a specific user
router.get("/:user_id/businessmen",getBusinessmanCount);

// This will go to, contact/:contact_id/
// This will return the specific contact which matches the name
router.post("/:contact_id",getSpecificContact);

module.exports = router;