const express = require("express");

const User = require("../models/user.model")
module.exports.register = (req, res) => {
        const { correo, contra } = req.body
        const newUser = new User({ correo, contra })
        try {
            newUser.save()
            res.json('User Registered successfully')
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    };
    module.exports.login=async(req, res) => {
        const { correo, contra } = req.body
        console.log(req.body);
        try {
            const user = await User.find({ correo:correo, contra:contra }).exec();
            if (user.length > 0) {
                const currentUser = {
                    correo: user[0].correo,
                    fav: user[0].fav,
                    _id: user[0]._id
                }
                res.json({ currentUser });
            }
            else {
                return res.status(400).json({ message: 'User Login Failed' });
            }
        } catch (error) {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    };

