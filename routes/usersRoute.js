const express = require("express")

const router = express.Router()

const usersCtrl = require("../ctrls/usersCtrl")

//User Registration

router.post("/add-user", usersCtrl.addUser)

router.get("/users", usersCtrl.findAllUsers)

router.get("/users/:id", usersCtrl.findOneUser)

router.patch("/update-user", usersCtrl.updateUser)

router.delete("/delete-user", usersCtrl.deleteUser)


module.exports = router