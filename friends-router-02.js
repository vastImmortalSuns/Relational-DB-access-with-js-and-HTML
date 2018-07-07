var express = require('express');       // imports the express library
var router = express.Router();          // Router object for routes

var friendModel = require('./models/friends-01');

router.get('/api', function handleHomePage(request, response) {
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
                    response.write("Error Inserting");
                }else{
                    response.json({ insertedId: resultId });
                }
            } );
});

router.get('/friends', function FriendsGetHandler(request, response){	
    friendModel.getAll(function DoneGettingAll(err, result, fields){
        if (err) {
            console.log("Some error selecting all");
            console.log(err);
            response.write("Error Getting All");
        } else {
            console.log("Successfully retrieve all records (100)");
            response.json(result);
        }
    });
});

router.get('/:id', function FriendsGetByIdHandler(request, response){		// Index 3: Find friend by ID
    friendModel.findById(request.params.id, function DoneGettingById(err, result, fields){
        if (err){
            console.log("Some error finding by id");
            console.log(err);
            response.write("Error finding by id");
        }else {
            response.json(result);
        }
    });
});

router.get('/friends/:name', function FriendsGetByNameHandler(request, response){		// INDEX 4: Find friend by name
    friendModel.findByName(request.params.name, function DoneGettingByName(err, result, fields){
        if (err){
            console.log("Some error finding by name");
            console.log(err);
            response.write("Error finding by name");
		} else {
			response.json(result);
		}
    });
});


module.exports = router;
