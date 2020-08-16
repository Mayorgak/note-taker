const router = require("express").Router();
const path = require("path");
const fs = require("fs");



router.get("/api/notes", function (req, res) {
  const savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  res.json(savedNotes);
});


router.post("/api/notes", function (req, res) {
  const savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  const newNote = req.body;
  const uniqueID = savedNotes.length.toString();
  newNote.id = uniqueID;
  savedNotes.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
  console.log("Note saved to db.json. Content: ", newNote);
  res.json(savedNotes);
});

router.delete("/api/notes/:id", function (req, res) {
  const savedNotes = JSON.parse(
    fs.readFileSync("./db/db.json", "utf8")
  );
  const deleteId = req.params.id;
  const filterArray = savedNotes.filter(note => note.id!== deleteId);
  fs.writeFileSync("./db/db.json", JSON.stringify(filterArray));
  

  res.json(filterArray);
});

module.exports = router;
