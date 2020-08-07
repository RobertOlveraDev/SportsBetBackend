var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Users'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Ticket'); 
mobileApp.tables.add('CurrentBet'); 
mobileApp.tables.add('Match'); 
mobileApp.tables.add('Team'); 

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
