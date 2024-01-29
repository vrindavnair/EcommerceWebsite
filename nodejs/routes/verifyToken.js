
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(' ')[1]; // Splitting to get the token part after 'Bearer'
        
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) {
                return res.status(403).json('Token is not valid');
            }
            
            req.user = user; // Attach user data to the request object
            next();
        });
    } else {
        return res.status(401).json({ message: 'You are not authenticated' });
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        const userId = req.params.id; // Assuming you want to compare with a user ID
        
        if (req.user.id === userId || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({ message: 'You are not allowed to do that' });
        }
    });
};
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      //  const userId = req.params.id; // Assuming you want to compare with a user ID
        
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json({ message: 'You are not allowed to do that' });
        }
    });
};

module.exports = { verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin };




  