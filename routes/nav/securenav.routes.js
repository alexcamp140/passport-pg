const router = require("express").Router();
const {
    securenav
} = require("../../controllers/nav.controller.js");

router.get("/securenav", securenav);//lien d'exemple accessible uniquement si authentifi√©.

module.exports = router;