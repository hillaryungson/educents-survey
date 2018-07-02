exports.handler = function(event, context, callback) {
  var myArray = [
    "http://bit.ly/2IIiRdr",
    "http://bit.ly/2KA5Ibi",
    "http://bit.ly/2tX8UTM"
  ];

  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  console.log("redirect URL", randomItem)
  
  const response = {
    statusCode: 301,
    headers: {
      Location: randomItem,
      // Set no cache
      'Cache-Control': 'no-cache'
    }
  }

  return callback(null, response)
};
