const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');


//Registration Of Users
router.post('/signup', UserController.Add);

router.get('/allUsers', UserController.GetAll);

router.put("/updateUser/:id", UserController.Update);

router.delete("/deleteUser/:id", UserController.Delete);

router.get('/:id', UserController.GetById);

router.post('/signIn', UserController.SignIn);


module.exports = router;