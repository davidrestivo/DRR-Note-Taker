const router = require("express").Router();
const dbStore = require("../db/store");
 
 
 //gets api route
 router.get("/notes", function(req, res) {
    dbStore.getNotes().then((notes)=>{
        return res.json(notes)
    })
    .catch((err)=>res.status(500).json(err));
});

router.post("/notes", function(req, res) {
    // Receives a new note, adds it to db.json, then returns the new note
    dbStore.addNote(req.body).then((note)=>res.json(note)).catch((err)=>res.status(500).json(err));
});

// Deletes the note
router.delete("/notes/:id", function(req, res) {
    dbStore.removeNote(req.params.id).then(()=>res.json({ok:true})).catch((err)=>res.status(500).json(err));
});

module.exports = router;