'use strict';

$(document).ready(function() {

  $.getJSON("http://localhost:3000/students", function(students) {
    var data = [];
    students.forEach(function(student) {
      data.push({name:student.name});
    });
    generateHtml('first-select', data);

    $('.btn-success').on('click', function(event) {
      event.preventDefault();
      var selected = $('.first-select').val();
      var data = selected.map(function(item) {
        $('.first-select option[value="' + item + '"]').remove();
        return {name: item};
      });

      generateHtml('second-select', data);
    });

    $('.btn-warning').on('click', function(event) {
      event.preventDefault();
      var selected = $('.second-select').val();
      var data = selected.map(function(item) {
        $('.second-select option[value="' + item + '"]').remove();
        return {name: item};
      });

      generateHtml('first-select', data);
    });
  });

  function generateHtml(selectClass, data) {
    var selectTemp = $('#select-template').html();
    var template = Handlebars.compile(selectTemp);
    var selectHtml = template({students: data});
    $('.' + selectClass).append(selectHtml);
  }

});
