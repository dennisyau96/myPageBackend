const express = require("express");
const Experience = require("../model/experience.model");
const Education = require("../model/education.model");
const Skill = require("../model/skill.model");
const Comment = require("../model/comment.model");
const mongoose = require("mongoose");

const router = express.Router();

// const myColleciton = mongoose.Collection("test");

//experience
router.get("/experience", async (req, res) => {
  try {
    const data = await Experience.find();
    res.json(data);
  } catch (err) {
    return res.json({ error: err.message });
  }
});

//education

router.get("/education", async (req, res) => {
  try {
    const data = await Education.find();
    res.json(data);
  } catch (err) {
    return res.json({ error: err.message });
  }
});

//skill
router.get("/skills", async (req, res) => {
  try {
    const data = await Skill.find();
    res.json(data);
  } catch (err) {
    return res.json({ error: err.message });
  }
});

//comment
router.post("/leave-comment", async (req, res) => {
  try {
    // const { person, organization, comment, rating } = req.body;

    if (req.body.person == "") {
      return res.json(
        "May I have your name so that I can always recognise who gave me this great comment."
      );
    }
    if (req.body.comment == "") {
      return res.json("Your comment is important for me to make a big leap.");
    }
    if (req.body.rating == null) {
      return res.json(
        "Your rating to my webpage help me understand how much more harder I need to work."
      );
    }

    const data = await Comment.create({
      person: req.body.person,
      organization: req.body.organization,
      comment: req.body.comment,
      rating: req.body.rating,
    });
    return res.json(`Thanks for the comment, ${req.body.person}`);
  } catch (err) {
    return res.json({ message: err.message });
  }
});
module.exports = router;
