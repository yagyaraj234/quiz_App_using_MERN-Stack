import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";

import questions, { answers } from "../database/data.js";

//  Get all question

export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json(error);
  }
}

// insert all question

export async function insertQuestions(req, res) {
  try {
    Questions.insertMany(
      { questions, answers },
      function (err, data) {
        res.json({ msg: "Data Saved Succesfully....!" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

// Delete all questions

export async function dropQuestions(req, res) {
  res.json("delete");
}

// get all result

export async function getResult(req, res) {
  res.json("result");
}
// store the result
export async function storeResult(req, res) {
  res.json("result api post");
}
// delete all result
export async function dropResult(req, res) {
  res.json("delete result api post");
}
