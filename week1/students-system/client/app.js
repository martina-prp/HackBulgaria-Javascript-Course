"use strict";
$(document).ready(function() {
  //alert("Hooray, everything runs ok. You can remove this annoying alert from the code.");

  var generateTable = function(items) {
    var data = [];
    items.forEach(function(item) {console.log(item);
      data.push(["<tr id=" + item.id +" >",
                  "<td>", item.id, "</td>",
                  "<td>", item.name, "</td>",
                  "<td>", item.course, "</td>",
                 "</tr>"
      ].join(""));
    });

    var table = ["<table class='table'>",
                    "<thead>",
                        "<tr>",
                            "<th>", "Id", "</th>",
                            "<th>", "Name", "</th>",
                            "<th>", "Course", "</th>",
                        "</tr>",
                    "</thead>",
                    "<tbody>",
                    data.join(""),
                    "</tbody>",
                "</table>"];
    return table.join("");
  };

  $.getJSON("http://localhost:3000/students", function(students, textStatus) {
      students.forEach(function(student) {
        var row = ["<tr id=" + student.id +" >",
                  "<td>", student.id, "</td>",
                  "<td>", student.name, "</td>",
                  "<td>", student.course, "</td>",
                 "</tr>"
      ];
        $("#students-system-body").append(row.join(" "));
      });
      //alert("Students came. Open your console and remove this alert!");
      //start here
  });

  $("#group-btn").on("click", function() {

    $.getJSON("http://localhost:3000/students", function(students, textStatus) {
      $("#students-system-tables").empty();

      var groupStudents = groupBy(function(student) {
        return student.course;
      }, students);

      var keys = Object.keys(groupStudents);
      keys.forEach(function(key) {
        console.log(generateTable(groupStudents[key]));
        $("#students-system-tables").append(generateTable(groupStudents[key]));
      });
    });
  });

  $("#search-btn").on("click", function() {
    $('.table tr').removeAttr('class');
    var searched = $("#search-box").val();
    $.getJSON("http://localhost:3000/students", function(students, textStatus) {
      var match = students.filter(function(student) {
        return student.name.search(new RegExp(searched, "i")) !== -1;
      });
      match.map(function(item) {
        $('tr#' + item.id).addClass('success');
      })
    });
  });
});

var groupBy = function(groupingFunction, arr) {
  var result = {},
    key = "";
  arr.map(function(x) {
    key = groupingFunction(x);
    if (key in result) {
      result[key].push(x);
    }
    else {
      result[key] = [x];
    }
  });
  return result;
};
