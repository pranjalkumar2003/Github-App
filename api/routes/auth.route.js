import express from 'express';

const router = express.Router();

router.get("/login",( req ,res) => {
 res.send("User logged in")
})

export default router;