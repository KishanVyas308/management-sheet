import jwt from 'jsonwebtoken';

export const verifyToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization']; 

    if (!authHeader) {
        return res.status(403).json({ message: 'Token is missing' });
    }

    try {
        const verified = jwt.verify(authHeader,  process.env.JWT_SECRET as string);
        req.user = verified; 
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
