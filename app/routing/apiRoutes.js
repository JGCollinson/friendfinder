var friendsArray = require("../data/friends.js");
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    var userData = req.body;
    var totalDifference = 0;
    var allDifferences = [];

    for (var i = 0; i < friendsArray.length - 1; i++) {
      for (var j = 0; j < 10; j++) {
        totalDifference += Math.abs(
          friendsArray[i].scores[j] - userData.scores[j]
        );
      }
      allDifferences.push(totalDifference);
      totalDifference = 0;
    }

    var bestMatch =
      friendsArray[
        allDifferences.indexOf(Math.min.apply(null, allDifferences))
      ];
    res.send(bestMatch);
  });
};
