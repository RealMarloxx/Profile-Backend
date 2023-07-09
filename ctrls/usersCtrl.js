const User = require("../models/usersSchema")

const usersCtrl = {

    addUser: async (req, res)=>{

        try {

            const {firstName, lastName, dateOfBirth, email, phoneNumber, state, password} = req.body
    
            if(!firstName) return res.status(400).json({message: "Please enter first name"})
        
            if(!lastName) return res.json({message: "Please enter last name"})
        
            if(!dateOfBirth) return res.json({message: "Please indicate your date of birth"})

            if(!email) return res.json({message: "Please enter your email"})
        
            if(!password) return res.json({message: "Please enter password"})
        
            const user = await User.findOne({ email: email })
        
            if(user) return res.json({message: "This user already exists!"})
        
            const newUser = new User({firstName, lastName, dateOfBirth, email, phoneNumber, state, password})
        
            await newUser.save()
        
            return res.status(200).json({
                message: "User added successful",
                user: newUser
            })
        } catch (error) {
            res.status(500).json({message: error.message})            
        }
    },

    findAllUsers: async (req, res)=>{
        
        try {

            const users = await User.find()
    
            return res.tatus(200).json({
                message: "sucessful",
                count: students.length,
                users 
            })
            
        } catch (error) {
            res.status(500).json({message: error.message})            
        }
        
    },

    findOneUser: async (req, res)=>{

        try {
            //const { id } = req.params

            const {email} = req.body

            const user = await User.findOne({email : email})

            return res.status(200).json({
                message: "successful",
                user
            })

        } catch (error) {
            res.status(400).json({message: error.message})            
        }
    },

    updateUser: async (req, res)=>{

        try {

            const {email, firstName, lastName} = req.body

            const updatedUser = await User.findOneAndUpdate({email}, {firstName, lastName}, {new:true})

            return res.status(200).json({
                message: "successful",
                updatedUser
            })
        } catch (error) {
            res.status(400).json({message: error.message})            
        }
    },

    deleteUser: async (req, res)=>{

        try {
            const {email} = req.body

            const deletedUser = User.findOneAndDelete({email : email})

            return res.status(200).json({
                message: "Deleted!"
            })
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = usersCtrl