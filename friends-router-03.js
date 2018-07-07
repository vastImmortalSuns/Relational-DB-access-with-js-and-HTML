var express = require('express');       // imports the express library
var router = express.Router();          // Router object for routes

var friendModel = require('./models/friends-02');

// Need to figure out why is loading when site home page is requested
router.get('/api', function HomePageHandler(request, response) {
	response.sendFile("/" + "index.html");
	//response.sendFile(__dirname + "/" + "index.html");
});


router.post('/friends', 
    function FriendsPostHandler(request, response){
        friendModel.insert( 
            request.body.birthDate,
            request.body.firstName,
            request.body.lastName,
            request.body.gender,
            request.body.phone, 
            function DoneInserting(err, resultId){
                if (err){
                    console.log("Some error inserting");
                    console.log(err);
                    response.send("Error Inserting");
                }else{
                    response.json(
                        { 
                            operation: "Insert",
                            insertedId: resultId,
                            status: "Success" 
                        }
                    );
                }
            } );
});

router.get('/friends', function FriendsGetHandler(request, response){
    friendModel.getAll(function DoneGettingAll(err, result, fields){
        if (err) {
            console.log("Some error selecting all");
            console.log(err);
            response.send("Error Getting All");
        } else {
            console.log("Successfully retrieve all records (100)");
            response.json(result);
        }
    });
});

router.get('/:id', function FriendsGetByIdHandler(request, response){
    friendModel.findById(request.params.id, function DoneGettingById(err, result, fields){
        if (err){
            console.log("Some error finding by id");
            console.log(err);
            response.send("Error finding by id");
        }else {
            response.json(result);
        }
    });
});

router.get('/friends/:name', function FriendsGetByNameHandler(request, response){
    friendModel.findByName(request.params.name, function DoneGettingByName(err, result, fields){
        if (err){
            console.log("Some error finding by name");
            console.log(err);
            response.send("Error finding by name");
		} else {
			response.json(result);
		}
    });
});
router.put('/:id', function FriendsPutHandler(request, response){
        friendModel.findById(request.params.id, function DoneGettingById(err, result){
                if (err){
                    console.log("Some error finding the Id: " + request.params.id);
                    console.log(err);
                    response.send("Error finding by id");
                }else if (result.length == 0){
                    response.json(
                        { 
                            operation: "Update",
                            affectedRows: 0,
                            status: "Failure",
                            message: "Id: " + request.params.id + " not found"
                        }
                    );
                }else {
                    friendModel.update(
                        request.params.id,
                        request.body.birthDate,
                        request.body.firstName,
                        request.body.lastName,
                        request.body.gender,
                        request.body.phone, 
                        function DoneUpdating(err, results){
                            if (err){
                                console.log("Some error updating");
                                console.log(err);
                                response.send("Error Updating");
                            }else{
                                response.json(
                                    { 
                                        operation: "Update",
                                        affectedRows: results,
                                        status: "Success"
                                    }
                                );
                            }
                        } );
                }
        });
});

router.delete('/:id', function FriendsDeleteHandler(request, response){
        friendModel.findById(request.params.id, function HandleFind(err, result){
                if (err){
                    console.log("Some error finding the Id: " + request.params.id);
                    console.log(err);
                    response.send("Error finding by id");
                }else if (result.length == 0){
                    response.json(
                        { 
                            operation: "Delete",
                            affectedRows: 0,
                            status: "Failure",
                            message: "Id: " + request.params.id + " not found"
                        }
                    );
                }else{
                    friendModel.delete(
                        request.params.id,
                        function DoneDeleting(err, results){
                            if (err){
                                console.log("Some error deleting");
                                console.log(err);
                                response.send("Error Deleting");
                            }else
                                response.json(
                                    { 
                                        operation: "Delete",
                                        affectedRows: results,
                                        status: "Success"
                                    }
                                );
                        }
                    );
                }
        });
});


module.exports = router;
