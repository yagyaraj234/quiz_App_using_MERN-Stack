//  Get all question 

export async function getQuestions(req,res){
    res.json('Get Questions')
}

// insert all question 

export async function  insertQuestions(req,res){
    res.json('insert Questions')
}


// Delete all questions 


export async function dropQuestions(req,res){
    res.json('delete');
}

// get all result 

export async function getResult(req,res){
    res.json('result');
}
// store the result
export async function storeResult(req,res){
    res.json('result api post');
}
 // delete all result
export async function dropResult(req,res){
    res.json('delete result api post');
}