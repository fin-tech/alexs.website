var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'SCGiI36qKuzOubIT8LtSNDbJq',
  consumer_secret: 'XGUCOopoIsgr432qqWIPihABlf9vHmmm77iwcoUxHbkORFIKgZ',
  access_token_key: '3165869263-MWZFHU2K7KPyh3armcu22q3OWdPz9BUdNQnK5zs',
  access_token_secret: 'yNl7T6mBhKhmlha34KKZ4zDyEBsxtJI1RqYlcfHP8OCKi'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});
