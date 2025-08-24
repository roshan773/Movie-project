const movieModel = require("../models/movie.model")

module.exports.test=(req,res)=>{
    res.send("movie route is working")
}

module.exports.create = async(req,res)=>{
    const{title,genre,director,releaseYear,description} = req.body
    if(!title || !genre || !director || !releaseYear || !description)
    {
        res.status(400).send({message:"All fields are required"})
    }
    try {
        const isExistMovie =await movieModel.findOne({title:req.body.title})
        if(isExistMovie){
            res.status(400).send({message:"Movie is already posted or created"})
        }

        await movieModel.create({...req.body})
         res.status(201).send({message:"Movie posted successfully"})
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

module.exports.allMovies = async (req, res) => {
  try {
    const getAllMovies = await movieModel.find({});
    res.status(200).send({
      message: "Movies fetched successfully",
      movies: getAllMovies
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports.updateMovie = async (req, res) => {
  const { movieId } = req.params;

  if (!movieId) {
    return res.status(400).send({ message: "movieId is required" }); 
  }

  try {
    const isExistMovie = await movieModel.findById(movieId);
    if (!isExistMovie) {
      return res.status(404).json({ message: "Movie not found" }); 
    }

   const updatedMovie= await movieModel.findByIdAndUpdate(movieId, { $set: { ...req.body }}, { new: true });
    res.status(200).json({ message: "Movie updated successfully",updatedMovie });
  } catch (error) {
    console.error("Error updating Movie:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};


module.exports.deleteMovie = async(req,res)=>{
     const { movieId } = req.params;

  if (!movieId) {
    return res.status(400).send({ message: "movieId is required" }); 
  }

  try {
     const isExistMovie = await movieModel.findById(movieId);
    if (!isExistMovie) {
      return res.status(404).json({ message: "Movie not found" }); 
    }
    const deletedMovie = await movieModel.findByIdAndDelete(movieId)
    res.status(201).send({message:"movie deleted successfully",deletedMovie})
  } catch (error) {
    console.error("Error deleting Movie:", error);
    res.status(500).json({ message: error.message || "Internal server error" });
  }
}
