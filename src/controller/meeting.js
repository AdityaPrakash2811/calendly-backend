const meetingService = require("../services/meeting");

let controller={};

controller.getAll =  async(req, res, next) => {
    try {
      const result = await meetingService.getAll();
      res.send({
        "success": true,
        "message": "Successful fetch",
        "data": [result]
    });
    } catch (error) {
        res.send({
            "status": 405,
            "message": "Could not fetch"
        });
    }
  };

  controller.createNew =  async(req, res, next) => {
    try {
      const result = await meetingService.createNew(req.body);
      res.send({
        "success": true,
        "message": "Added new",
        "data": []
    });
    } catch (error) {
        res.send({
            "status": 405,
            "message": "Could not add"
        });
    }
  };


  module.exports = controller;