'use strict';

$(document).ready(function() {

  $('.list-all').on('click', function() {
    $('.operation-message').empty();
    getAll();
  });

  $('.create, .update').on('click', function(event) {
    event.preventDefault();
    var courses = $('#create-courses').val();
    var student = {
      name: $('#create-name').val(),
      facultyNumber: $('#create-fn').val(),
      courses: courses.split(','),
    };
    createStudent(student);
    $('#create-name').val('');
    $('#create-fn').val('');
    $('#create-courses').val('');
  });

  $(document).on('click', '.select-update', function(event) {
    event.preventDefault();
    var row = $(this).closest('tr');
    $('input#create-name').val(row.find('>td.student-name').text());
    $('input#create-fn').val(row.find('>td.student-fn').text());
    $('input#create-courses').val(row.find('>td.student-courses').text());
  });

  $(document).on('click', '.select-delete', function(event) {
    event.preventDefault();
    var row = $(this).closest('tr');
    var deleteFnNumber = row.find('>td.student-fn').text();
    if (confirm('Are you sure you want to delete the student?')) {
      deleteStudent(deleteFnNumber);
    }
  });

  // Make ajax call to get all available students in the dtabase.
  function getAll() {
    $.ajax({
      url: 'http://localhost:3030/students',
      type: 'GET',
      contentType: 'application/json',
      datatype: 'json',
    }).done(function(data){
      if (data.length !== 0) {
        generateStudents(data);
      }
    });
  }

  // Make ajax call for creating new record or updating existing student.
  // Regenerate the entire table with the created/updated data.
  function createStudent(student) {
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
      if (data.status === 'saved') {
        getAll();
      }
    });
  }

  // Make ajax call to delete a student bu faculty name.
  // Regenerate the entire table without the deleted student.
  function deleteStudent(fnNumber) {
    $.ajax({
      url: 'http://localhost:3030/student/' + fnNumber,
      type: 'DELETE',
      contentType: 'application/json',
      datatype: 'json',
    }).done(function(data) {
      $('.operation-message').text(data.status);
      getAll();
    });
  }

  // Generates the table html and appends it to the main container.
  function generateStudents(students) {
    var studentsTemp = $('#students-template').html();
    var template = Handlebars.compile(studentsTemp);
    var studentsHtml = template({students: students});
    var html = ['<table class = "table table-bordered table-hover" id="students-table">',
      studentsHtml,
      '</table>'
      ];
    $('.students-container').empty();
    $('.students-container').append(html.join(''));
  }

});
