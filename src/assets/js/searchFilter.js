const elasticlunr = require("elasticlunr");

module.exports = function (collection) {
  var index = elasticlunr(function () {
    this.addField("title");
    this.addField("description");
    this.setRef("id");
    this.addField("content");
  });

  collection.forEach((page) => {
    index.addDoc({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      content: page.templateContent,
    });
  });

  return index.toJSON();
};
