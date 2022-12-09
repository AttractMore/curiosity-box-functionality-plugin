var config = {
  apiKey: "a490b6087d92ded5203ddb3c422ad23cadc19c08",
  accessibility: {
    highlightFocus: true,
  },
  product: "community",
  initialState: "open",
  closeOnGlobalChange: false,

  text: {
    acceptRecommended: "Accept the use of all recommended cookies",
    rejectSettings: "Reject the use of all cookies",
  },

  optionalCookies: [
    {
      name: "analytics",
      label: "Analytics",
      recommendedState: true,
      description:
        "Analytics cookies help us to improve our website by collecting and reporting information on how it is used.",
      cookies: [],
      onAccept: function () {},
      onRevoke: function () {},
    },
    {
      name: "marketing",
      label: "Marketing",
      recommendedState: true,
      description:
        "We may at times use marketing cookies to help us improve the relevancy of our site content.",
      cookies: [],
      onAccept: function () {},
      onRevoke: function () {},
    },
    {
      name: "preferences",
      label: "Preferences",
      recommendedState: true,
      description:
        "We need to set a cookie to remember your preferences of cookie retention when visiting this site.",
      cookies: [],
      onAccept: function () {},
      onRevoke: function () {},
    },
  ],

  statement: {
    description: "For more detailed information, please check our",
    name: "Privacy Policy",
    url: "/privacy-policy/",
    updated: "24/05/2018",
  },
  position: "RIGHT",
  theme: "DARK",
};

CookieControl.load(config);
