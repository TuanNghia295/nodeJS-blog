const express = require('express');
const router = express.Router();

const newsConTroller = require('../app/Controllers/NewsControllers');

router.use('/:slug', newsConTroller.hotNews);
router.use('/', newsConTroller.index);

module.exports = router;
