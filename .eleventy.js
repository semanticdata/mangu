const dayjs = require("dayjs");

const autoprefixer = require("autoprefixer");
const markdownIt = require("markdown-it");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");

module.exports = function (eleventyConfig) {
  // Pass-through images
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy({"./src/assets":"/assets"});

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
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
  };
};
