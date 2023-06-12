const express = require('express');
const router = express.Router();

const siteConTroller = require('../app/Controllers/SiteControllers');

router.use('/search', siteConTroller.search);
router.use('/', siteConTroller.home);

module.exports = router;
