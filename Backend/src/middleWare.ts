import jwt from 'jsonwebtoken';

export const verifyToken = (req: any, res: any, next: any) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token is missing' });
    }

    try {
        const verified = jwt.verify(token,  process.env.JWT_SECRET as string);
        req.user = verified; 
        console.log(req.user);
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
