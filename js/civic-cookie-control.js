var config = {
  apiKey: "a490b6087d92ded5203ddb3c422ad23cadc19c08",
  logConsent: false,
  notifyOnce: true,
  initialState: "OPEN",
  position: "RIGHT",
  theme: "DARK",
  layout: "SLIDEOUT",
  toggleType: "checkbox",
  // acceptBehaviour: "all",
  // closeOnGlobalChange: true,
  // iabCMP: false,
  // closeStyle: "icon",
  // consentCookieExpiry: 90,
  // subDomains: true,
  // mode: "gdpr",
  // rejectButton: true,
  // settingsStyle: "button",
  // encodeCookie: false,
  // setInnerHTML: true,
  // accessibility: {
  //   accessKey: "C",
  //   highlightFocus: false,
  //   outline: true,
  //   overlay: true,
  //   disableSiteScrolling: true,
  // },

  text: {
    title: "This site uses cookies",
    intro:
      "Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used.",
    necessaryTitle: "Necessary Cookies",
    necessaryDescription:
      "Necessary cookies enable core functionality. The website cannot function properly without these cookies, and can only be disabled by changing your browser preferences.",
    thirdPartyTitle: "Warning: Some cookies require your attention",
    thirdPartyDescription:
      "Consent for the following cookies could not be automatically revoked. Please follow the link(s) below to opt out manually.",
    on: "On",
    off: "Off",
    accept: "Accept",
    settings: "Cookie Preferences",
    acceptRecommended: "Accept the use of all recommended cookies",
    acceptSettings: "I Accept",
    notifyTitle: "Your choice regarding cookies on this site",
    notifyDescription:
      "We use cookies to optimise site functionality and give you the best possible experience.",
    closeLabel: "Close",
    cornerButton: "Set cookie preferences.",
    landmark: "Cookie preferences.",
    showVendors: "Show vendors within this category",
    thirdPartyCookies: "This vendor may set third party cookies.",
    readMore: "Read more",
    accessibilityAlert:
      "This site uses cookies to store information. Press accesskey C to learn more about your options.",
    rejectSettings: "Reject the use of all cookies",
    reject: "Reject",
  },

  necessaryCookies: [
    "__stripe_mid",
    "__stripe_sid",
    "wp_*",
    "mailchimp_*",
    "woocommerce_*",
    "wordpress_*",
    "wordpress_logged_in_*",
    "CookieControl",
  ],

  optionalCookies: [
    {
      name: "analytics",
      label: "Analytics",
      recommendedState: true,
      description:
        "Analytics cookies help us to improve our website by collecting and reporting information on how it is used.",
      cookies: [
        "_ga",
        "_ga*",
        "_gid",
        "_gat",
        "__utma",
        "__utmt",
        "__utmb",
        "__utmc",
        "__utmz",
        "__utmv",
      ],
      onAccept: function () {
        // add the GA snippet here
      },
      onRevoke: function () {
        // Disable Google Analytics
        window["ga-disable-UA-81118136-1"] = true;
        //
      },
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
  sameSiteCookie: true,
  sameSiteValue: "Strict",
  notifyDismissButton: true,
};

CookieControl.load(config);
