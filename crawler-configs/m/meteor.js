new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.meteor.com/",
    "https://guide.meteor.com/",
    "https://galaxy-guide.meteor.com/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://docs.meteor.com/**",
    "https://guide.meteor.com/**",
    "https://galaxy-guide.meteor.com/**",
  ],
  schedule: "at 10:00 on Thursday",
  actions: [
    {
      indexName: "meteor",
      pathsToMatch: ["https://docs.meteor.com**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper p, .content-wrapper li, .header-wrapper div.subtitle-page",
            lvl0: {
              selectors: "",
              defaultValue: "Api",
            },
            lvl2: ".content-wrapper h2",
            lvl3: ".content-wrapper h3",
            lvl4: ".content-wrapper h4",
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "meteor",
      pathsToMatch: ["https://guide.meteor.com**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper p, .content-wrapper code, .header-wrapper div.subtitle-page",
            lvl0: {
              selectors: "",
              defaultValue: "Guide",
            },
            lvl2: ".content-wrapper h2",
            lvl3: ".content-wrapper h3",
            lvl4: ".content-wrapper h4",
            lvl5: ".content-wrapper h5",
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "meteor",
      pathsToMatch: ["https://galaxy-guide.meteor.com/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper p, .content-wrapper li, .header-wrapper div.subtitle-page",
            lvl0: {
              selectors: "",
              defaultValue: "Galaxy Docs",
            },
            lvl2: ".content-wrapper h2",
            lvl3: ".content-wrapper h3",
            lvl4: ".content-wrapper h4",
            tags: {
              defaultValue: ["galaxy"],
            },
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    meteor: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});