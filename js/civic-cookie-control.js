var config = {
  // See https://www.civicuk.com/cookie-control/documentation/available-options
  apiKey: "a490b6087d92ded5203ddb3c422ad23cadc19c08",
  product: "COMMUNITY",
  logConsent: false,
  notifyOnce: true,
  initialState: "OPEN",
  position: "RIGHT",
  theme: "DARK",
  layout: "SLIDEOUT",
  toggleType: "slider",
  acceptBehaviour: "all",
  closeOnGlobalChange: true,
  iabCMP: false,
  closeStyle: "button",
  consentCookieExpiry: 90,
  subDomains: true,
  mode: "gdpr",
  rejectButton: false,
  settingsStyle: "button",
  encodeCookie: false,
  setInnerHTML: true,
  accessibility: {
    accessKey: "C",
    highlightFocus: false,
    outline: true,
    overlay: true,
    disableSiteScrolling: true,
  },

  text: {
    title:
      "We use cookies to improve your experience and help us understand how our site is used",
    intro:
      "You can manage which cookies are enabled here. Some are essential for the operation of our site and can't be turned off, while others help us to improve your visit by providing insights into how the site is being used.",
    necessaryTitle: "Essential Cookies",
    necessaryDescription:
      "Essential cookies enable the website to work e.g. allow you to log in and to buy products. The website cannot function properly without these cookies.",
    thirdPartyTitle: "Warning: Some cookies require your attention",
    thirdPartyDescription:
      "Consent for the following cookies could not be automatically revoked. Please follow the link(s) below to opt out manually.",
    on: "On",
    off: "Off",
    accept: "Accept",
    settings: "Cookie Preferences",
    acceptRecommended: "ACCEPT RECOMMENDED SETTINGS",
    acceptSettings: "I Accept",
    notifyTitle: "Your choice regarding cookies.",
    notifyDescription:
      "We use some essential cookies to make this site work.  We'd like to set additional cookies to understand how you use this site, remember your settings and optimise your online experience at the Curiosity Box. We will never sell your information to other organisations.",
    closeLabel: "Save cookie settings",
    cornerButton: "Set cookie preferences.",
    landmark: "Cookie preferences.",
    showVendors: "Show vendors within this category",
    thirdPartyCookies: "This vendor may set third party cookies.",
    readMore: "Read more",
    accessibilityAlert:
      "This site uses cookies to store information. Press accesskey C to learn more about your options.",
    rejectSettings: "Reject cookies",
    reject: "Reject cookies",
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
      cookies: ["_fbq"],
      // https://support.cookiebot.com/hc/en-us/articles/360004461894-Require-consent-before-loading-Facebook-pixel
      onAccept: function () {
        fbq("consent", "grant");
      },
      onRevoke: function () {
        fbq("consent", "revoke");
      },
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
  notifyDismissButton: false,
};

CookieControl.load(config);
