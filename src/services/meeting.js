const db= require("../models");

let service = {};



service.getAll = async() =>{
    try {
        const task = await db.meeting_with_doc.findAll();
        return task;
      } catch (error) {
        throw error;
      }
}

service.createNew = async(data) =>{
    try {
        const newUser=await db.meeting_with_doc.create({
                        doc_id:data.doc_id,
                        name:data.name,
                        email:data.email,
                        phno:data.phno,
                        start_date:data.start_date,
                        end_date:data.end_date
                    });
        return newUser;
      } catch (error) {
        throw error;
      }
}


module.exports = service;