// Create web server and listen on port 3000
// This file is the controller for the comments page

// Load the express module
var express = require('express');
// Create an express application
var app = express();
// Load the body-parser module
var bodyParser = require('body-parser');
// Load the comments model
var Comments = require('./models/comments