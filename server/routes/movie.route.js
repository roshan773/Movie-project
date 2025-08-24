const express = require('express');
const movieController = require('../controller/movie.controller');
const chechIsAuth = require('../middleware/Auth');
const router =express.Router();

router.get("/test",movieController.test)
router.post("/create",chechIsAuth,movieController.create)
router.get("/fetchallMovies",movieController.allMovies)
router.put("/updateMovie/:movieId", chechIsAuth, movieController.updateMovie);
router.delete("/deleteMovie/:movieId", chechIsAuth, movieController.deleteMovie);

module.exports = router;