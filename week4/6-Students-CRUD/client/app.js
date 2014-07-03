'use strict';

$(document).ready(function() {

  $('.list-all').on('click', function() {
    $('.operation-message').empty();
    getAll();
  });

  $('.create').on('click', function(event) {
    event.preventDefault();
    var courses = $('#create-courses').val();
    var student = {
      name: $('#create-name').val(),
      facultyNumber: $('#create-fn').val(),
      courses: courses.split(','),
    };
    createStudent(student);
  });

  function getAll() {
    $.ajax({
      url: 'http://localhost:3030/students',
      type: 'GET',
      contentType: 'application/json',
      datatype: 'json',
    }).done(function(data){
      console.log(data);
      if (data.length !== 0) {
        generateStudents(data);
      }
    });
  }

  function createStudent(student) {console.log(student);
    $.ajax({
      url: 'http://localhost:3030/student',
      type: 'POST',
      contentType: 'application/json',
      datatype: 'json',
      data: JSON.stringify({
        name: student.name,
        facultyNumber: student.facultyNumber,
        courses: student.courses
      })
    }).done(function(data){
      $('.operation-message').text(data.status);
    });
  }

  function generateStudents(students) {
    var studentsTemp = $('#students-template').html();
    var template = Handlebars.compile(studentsTemp);
    var studentsHtml = template({students: students});
    $('.students-container').replaceWith(studentsHtml);
  }

});
