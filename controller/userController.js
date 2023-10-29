
export const registerUser = async(req,res) => {
    res.status(200).json({message: 'User registration'});
};

export const login = async(req,res) => {
    res.status(200).json({message: 'successfully logged in'});
};

export const getUser = async(req,res) => {
    res.status(200).json({message: 'current user'});
};