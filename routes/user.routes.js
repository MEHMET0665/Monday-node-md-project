const express = require('express')
const router=express.Router()
const userController=require('../controllers/user.controller')
router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.post('/', userController.create);
router.put('/:id', userController.UpdateUser);
router.delete('/:id', userController.delete);
module.exports = router;