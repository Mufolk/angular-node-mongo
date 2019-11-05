'use strict'

let router = require('express').Router();
const controller = require('./business.controller');

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.listOne);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;