// import express from 'express';
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// dotenv.config();

// let apiRoutes = express.Router();
// let router = express.Router();

// apiRoutes.use((req, res, next) => {
//     let token = req.body.authorization || req.query.authorization || req.headers['authorization'];
//     if (token) {
//         jwt.verify(token, process.env.MY_SECRET, (err, decoded) => {
//             if (err) {
//                 return res.json({
//                     "message": messageParser.invalidToken
//                 });
//             } else {
//                 req.user = decoded._doc;
//                 next();
//             }
//         });
//     } else {
//         return res.json({
//             "message": messageParser.noToken
//         });
//     }
// });

// router.use('/api', apiRoutes);

// /**---------------------- | User | ------------------ */
// // router.post('/login', userController.login);