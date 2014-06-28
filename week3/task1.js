"use strict";
var _ = require("lodash");

var htmlGenerator = {
    link : function(data) {
      var temp = '<a href="<%= href %>" title="<%= title %>"><%= label %></a>';
      return _.template(temp, data);
    },

    paragraph: function(data) {
    },

    list: function(data) {
      var temp = '<<%= type %>> <%= children %> </<%= type %>>';
      var temp_child = '<li><%= label %></li>';
      var parsed = data.children.map(function(x) {
        return _.template(temp_child, x);
      });
      return _.template(temp, {type: data.type, children: parsed.join("")});
    },

    tag: function(data) {
      var temp = '<<%= tagName %><%= attributes %>><%= data %></<%= tagName %>>';
      var temp_attr = '<%=key%>="<%=value%>"';
      var parsed = "", parsedAttr = [];
      if (typeof data.attributes !== "undefined") {
        parsedAttr.push(" ");
        parsedAttr = data.attributes.map(function(x) {
          return _.template(temp_attr, x);
        });
        parsed = parsedAttr.join(" ");
      }
      return _.template(temp, {tagName: data.tagName,
        attributes: parsed,
        data: data.data,
      });
    }
};

var p = htmlGenerator.paragraph({
    label: "Hack Bulgaria"
});

//console.log(p);

var link = htmlGenerator.link({
    href: "https://hackbulgaria.com",
    title: "Hack Bulgaria",
    label: "Курсове по Програмиране!"
});

//.log(link);

var list = htmlGenerator.list({
    type: "ul",
    children: [{
        label: "Item 1"
    }, {
        label: "Item 2"
    }]
});

//console.log(list);

var element = htmlGenerator.tag({
    tagName: "div",
    data: htmlGenerator.tag({
        tagName: "h1",
        data: "Hello!"
    }),
    attributes: [{
        key: "class",
        value: "container"
    }, {
        key: "id",
        value: "main-container"
    }]
});
console.log(element);
