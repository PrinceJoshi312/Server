const express = require("express");

const { handleGetAllBooking,
        handleGetBookingByUsername,
        handleUpdateBookingByUsername,
        handleDeleteBookingByUsername,
        handleCreateNewBookingForPhotographer,
        handleCreateNewBookingForVendor,
        // handleCreateNewBookingForVenue,
     } = require("../controllers/booking");

const { handleNullVendor, handleNullPhotographer } = require("../controllers/newServices")


const router = express.Router();

//route to get all bookings (for Admin use only)
router.route("/").get(handleGetAllBooking)


// routes for post method of all services (photographer, venue, vendor) to create them on the basis of their respective names
router.route("/photographer").post(handleCreateNewBookingForPhotographer);
router.route("/vendor").post(handleCreateNewBookingForVendor);

// routes to create new services
router.route("/newservice/vendor").post(handleNullVendor)
router.route("/newservice/photographer").post(handleNullPhotographer)

// route to get booking by username as username is a unique attribute also same for delete and patch
router
    .route("/username/:username")
    .get(handleGetBookingByUsername)
    .patch(handleUpdateBookingByUsername)


//here the id should be booking id
router.route("/username&id/:username/:id").delete(handleDeleteBookingByUsername)


module.exports = router;
