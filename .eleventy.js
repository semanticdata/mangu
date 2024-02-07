module.exports = function (eleventyConfig) {
  const dayjs = require("dayjs");
  const autoprefixer = require("autoprefixer");
  const markdownIt = require("markdown-it");
  const postcss = require("postcss");
  const tailwindcss = require("tailwindcss");
  const markdownItOptions = {
    html: true,
    linkify: true,
    typographer: true,
  };

  const md = markdownIt(markdownItOptions)
    .use(require("markdown-it-anchor"))
    .use(require("markdown-it-attrs"))
    .use(require("markdown-it-footnote"))
    .use(require("markdown-it-table-of-contents"))
    .use(function (md) {
      // Recognize Mediawiki links ([[text]])
      md.linkify.add("[[", {
        validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
        normalize: (match) => {
          const parts = match.raw.slice(2, -2).split("|");
          parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
          match.text = (parts[1] || parts[0]).trim();
          match.url = `/notes/${parts[0].trim()}/`;
        },
      });
    });

  // Syntax Highlighting
  const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("markdownify", (string) => {
    return md.render(string);
  });

  eleventyConfig.setLibrary("md", md);

  // Watch targets
  eleventyConfig.addWatchTarget("src/assets/css/*.css");
  eleventyConfig.addWatchTarget("src/assets/js/*.js");

  //  Collections
  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getFilteredByGlob(["src/notes/**/*.md", "index.md"]);
  });

  // Shortcodes
  eleventyConfig.addShortcode("currentDate", (date = DateTime.now()) => {
    return date;
  });

  // Folder / File Passthrough
  eleventyConfig.addPassthroughCopy({
    // "src/robots.txt": "/robots.txt",
    "src/assets": "/assets",
    "src/images": "src/images",
  });

  // Add Date filters
  eleventyConfig.addFilter("date", (dateObj) => {
    return dayjs(dateObj).format("MMMM D, YYYY");
  });

  eleventyConfig.addFilter("sitemapDate", (dateObj) => {
    return dayjs(dateObj).toISOString();
  });

  eleventyConfig.addFilter("year", () => {
    return dayjs().format("YYYY");
  });

  // Add pages collection
  eleventyConfig.addCollection("pages", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts",
      includes: "_includes",
      data: "_data",
    },
  };
};
