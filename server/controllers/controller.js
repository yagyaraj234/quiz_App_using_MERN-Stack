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
   
 try {
    await Questions.deleteMany();
    res.json({msg : "All Questions are delted"})
 } catch (error) {
    console.log({error})
 }
}

// get all result

export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json({msg: "Results"})
 } catch (error) {
     res.json({error})
 }
}
// Post/store the result
export async function storeResult(req, res) {
    try {
       const {username, result, attempts, points, achieved}= req.body;
       if(!username && !result) throw Error('Data not Provided')

       Results.create({username, result, attempts, points, achieved},function(err,data){
        res.json({msg: "Results Saved Succesfully"})
       })
     } catch (error) {
         res.json({error})
     }
}

// delete all result
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({msg: "REsult Deleted succesfully"})
    } catch (error) {
        res.json({error});
    }
}
