"use strict"

$(document).ready(function() {
  $.getJSON("http://localhost:3000/students", function(students) {
    var courses = ['None'],
      filteredStudents = [];
    students.forEach(function(student) {
      if (courses.indexOf(student.course, 0) === -1) {
        courses.push(student.course);
      }
    });

    var coursesTemp = $('#courses-template').html();
    var template = Handlebars.compile(coursesTemp);
    var coursesHtml = template({courses: courses});
    $('.course-options').append(coursesHtml);

    $('.course-options').on('change', function() {
      var selected = $(this).val();
      filteredStudents = students.filter(function(student) {
        if (student.course === selected) {
          return student;
        }
      });

      var studentsTemp = $('#students-template').html();
      var template = Handlebars.compile(studentsTemp);
      var studentsHtml = template({students: filteredStudents});
      $('.student-options').empty();
      $('.student-options').append(studentsHtml);

      var selectedStudent = $('.student-options').val();
      showStudentInfo(selectedStudent, filteredStudents);
      $('.student-options').on('change', function() {
        selectedStudent = $(this).val();
        showStudentInfo(selectedStudent, filteredStudents);
      });
    });
  });

  function showStudentInfo(name, students) {
    var studentInfo = {};
    students.forEach(function(student) {
      if (student.name === name) {
        studentInfo = student;
      }
    });

    var infoTemp = $('#info-template').html();
    var template = Handlebars.compile(infoTemp);
    var infoHtml = template(studentInfo);
    $('.student-info').empty();
    $('.student-info').append(infoHtml);
  }

});
