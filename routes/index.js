var express = require('express');
var router = express.Router();

/* Express router to home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* Express router to about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* Express router to projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* Express router to contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
