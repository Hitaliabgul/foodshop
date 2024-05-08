import User from '../Modal/Usermodal.js';
import bcryptjs from 'bcryptjs'
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "user already exists" })

        }

        const hashpassword = await bcryptjs.hash(password, 10); //salt value 10
        const createUser = new User({
            name: name,
            email: email,
            password: hashpassword

        })
        await createUser.save()
        return res.status(201).json({ message: "user created sucessfully" })
    } catch (error) {
        if (error.res) {
            console.log(error)
            alert("error" + error.res.message.data)
        }
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!user || !isMatch) {
            return res.status(400).json({ message: "invalid credentials" });
        }
        else {
            res.status(200).json({ message: "login successfully" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" })
    }
}