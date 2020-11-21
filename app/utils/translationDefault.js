import { decodeObject } from "./decodeObject";

const translations = {
  0: "You do not have permission to access this page",
  1: "You do not have permission to access this page",
  user_password: "Password",
  saleorSales: "Sale[s]",
  shopUrl: "Shop Url",
  addYourCoupon: "Add your coupon",
  loginWithFacebook: "Login With Facebook",
  woocommerce: "WooCommerce",
  twofactorauth: "Two-factor authentication",
  turnOnTwoFactor: "Congrats! Two-factor authenticator has been enabled",
  invalidPassword: "Invalid password",
  verificationFailed: "Verification failed. Please try it again",
  enterCode: "Enter code",
  googleAuthVerifyLabel:
    "Enter in 6 digit code from your Google Authenticator or 3rd party app below",
  turnOn: "Turn on",
  turnOff: "Turn off",
  thisStepRequiresPassword:
    "The step you are trying to visit requires that you re-enter your password.",
  scanQrCodeGuide:
    "Scan the QR code below with the Google authenticator app on your mobile device, after that fill in the field below with the code generated in the app",
  photoText: "Photos",
  shopOrder: "Shop Order",
  peopleInterested: "people interested",
  DESC: "DESC",
  ASC: "ASC",
  selectTime: "Select Time",
  selectDate: "Select Date",
  outOfStock: "Out of stock",
  inOfStock: "Out of stock",
  addMore: "Add More",
  following: "Followings",
  follower: "Followers",
  alwaysOpen: "Always open",
  midnight: "Midnight",
  cancelCurrentPayment:
    "Cancel current subscription and then upgrade to new plan",
  yourAccountMustBeVerified:
    "Your account must be verified before you can use this feature",
  averageRatingBasedOnTotal: "%average% average based on %total%",
  averageRatingBasedOnTotalFor: "%average% average based on %total% for",
  opens: "Opens",
  closes: "Closes",
  daysWeek: {
    sunday: "Sunday",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
  },
  weekdaysShort: {
    sun: "Sun",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",
    sat: "Sat",
  },
  weekdaysMin: {
    su: "Su",
    mo: "Mo",
    tu: "Tu",
    we: "We",
    th: "Th",
    fr: "Fr",
    sa: "Sa",
  },
  addHours: "Add hours",
  closed: "Closed",
  noVideo: "Oops! There is no video yet",
  noRestaurantMenu: "Oops! There is no menu yet",
  showAllXItems: "Show all %total%",
  dashboard: "Dashboard",
  published: "Published",
  inReview: "In Review",
  unpaid: "unPaid",
  expired: "Expired",
  filter: "Filter",
  cancelPlan: "Cancel Plan",
  askForCancelPlan: "Are you sure you want to cancel your subscription?",
  start: "Start",
  setDate: "Set Date",
  upload: "Upload",
  usingCustomNavigation:
    "You are using Custom Navigation mode, so your Navigation will not be the same as the default setting",
  usingCustomSidebar:
    "You are using Custom Sidebar mode, so your Sidebar will not be the same as the default setting",
  min: "Min",
  max: "Max",
  or: "Or",
  clear: "Clear",
  apply: "Apply",
  geocoderNotSupported:
    "Unfortunately, Geocoder does not work on the browser platform, please switch to another browser like Chrome/Firefox to use this feature",
  youMustEnableGeocoder:
    "Geocoder is blocked on your browser, please re-enable it to use this feature.",
  chromeEnableGeocoderSuggestion:
    "Geocoder is blocked on your browser! Click on &lt;a href=&quot;https://support.google.com/chrome/answer/142065?co=GENIE.Platform%3DDesktop&amp;hl=en&amp;oco=1&quot; target=&quot;_blank&quot; class=&quot;color-primary&quot;&gt;re-enable Geocoder&lt;/a&gt; to use this feature",
  detectingYourLocation: "Detecting your location",
  gotYourLocation: "We detected your location",
  goToUpgrade: "Go to Upgrade",
  noTerm: "We found no term yet",
  warning: "Warning",
  announcement: "Announcement",
  leaveAReview: "Leave a review",
  author: "Author",
  newestRating: "Newest Rating",
  highestRating: "Highest Rating",
  lowestRating: "Lowest Rating",
  reviews: "Reviews",
  reply: "Reply",
  quality: "Quality",
  reviewOn: "Review on",
  listingTitle: "Listing Title",
  spam: "Spam",
  content: "Content",
  oke: "Oke",
  confirmDeleteMsg: "Do you want to delete this message?",
  deleteAuthorMsgTitle: "Delete Author Messages",
  deleteAuthorMsgQuestion:
    "Do you want to delete all messages from this author?",
  confirmDeleteAccount: "Are you sure to delete this account?",
  viewStatistic: "View Statistic",
  shareStatistic: "Share Statistic",
  favoriteStatistic: "Favorite Statistic",
  ratingStatistic: "Rating Statistic",
  youAreBlockingLocation:
    "It seems like Geolocation, which is required for this page, is not enabled in your browser.",
  addLatLngRequiredText: "The address, latitude and longitude are required",
  openNow: "Open Now",
  openForSelectedHours: "Open for Selected Hours",
  noHoursAvailable: "No hours available",
  timeFormat: "Time Format",
  orderCreateError: "We could not create order",
  dayOff: "Day Off",
  open: "Open",
  loadingText: "Loading",
  noOptions: "Sorry, We found no available option",
  id: "ID",
  price: "Price",
  date: "Date",
  item: "Item(s)",
  status: "Status",
  startDate: "Start Date",
  endDate: "End Date",
  rePayment: "Re-Payment",
  cancelOrder: "Cancel Order",
  subTotal: "Sub Total",
  total: "Total",
  productID: "Product ID",
  shippingToDifferentAddress: "Shipping to a Different Address?",
  paymentMethodRequired: "A payment method is required",
  addShippingForm: "Add Shipping Form",
  update: "Update",
  viewAll: "View All",
  payNow: "Pay Now",
  planIsRequired: "Please select a new plan",
  leaveEmptyMeansUpgradeAll:
    "Leave empty means you want to upgrade all Listings to new plan",
  listingsBelongToPayment: "Listings Belong To This Payment",
  paymentID: "Payment ID",
  back: "Back",
  pricing: "Pricing",
  addToCart: "Add to cart",
  checkItOut: "Check It Out",
  selectVariations: "Select Variations",
  pleaseChooseAllOptions: "Please choose all options",
  dokanRequest: "Dokan Request",
  shipment: "Shipment",
  payment: "Payment",
  proceedToCheckout: "Proceed to checkout",
  goToPaymentGateway: "Go to payment gateway",
  verify: "Verify",
  myCart: "My cart",
  comeBackToShop: "Come back to shop",
  productsWishlist: "Products Wishlist",
  removedProductFromWishlist: "Removed %s from your wishlist",
  unPublishedProduct: "This is not a product or this is un-publish product",
  noProductsInWishlist: "No products were added to the wishlist",
  addedProductToWishlist: "Added %s to your wishlist",
  couldNotAddProductToWishlist:
    "An error occurred while adding products to the wishlist.",
  productHasBeenAddedToWishlistAlready:
    "This product has been added to wishlist already",
  allCommentsLoaded: "All comments have been loaded",
  ratingIsDisabling: "The rating feature is disabling",
  noRating: "There is no rating yet",
  noVariationFound: "No variation found",
  productDoesNotExist: "This product does not exist",
  noSupportedProductType:
    "Unfortunately, The %s is not supported on Mobile App yet",
  variationIDRequired: "The variation ID is required",
  invalidVariation: "The variation is invalid",
  requiredFields: "&#039;%s is a required fields",
  requiredField: "&#039;%s is a required field",
  invalidProductAttribute: "Invalid value posted for %s",
  mustChooseProductOptions: "Please choose product options",
  productAttributeMustATerm: "Please add your attribute as a term",
  itemHasBeenAddedToCart: "This cart item has been added successfully",
  itemHasBeenRemovedFromCart: "This cart item has been removed successfully",
  couldNotAddProductToCart: "We could not add this product to cart",
  bookings: "Bookings",
  noBooking: "No bookings available yet.",
  request: "Request",
  yourActivity: "Your activity",
  noRequest: "There is no request&#039;",
  currentBalance: "Current Balance: ",
  withdrawThreshold: "Withdraw Threshold: ",
  minimumWithdrawn: "Minimum Withdraw amount: ",
  method: "Method",
  alreadyWithdrawn:
    "You have already withdrawn %s. This amount will be deducted from your balance.",
  noWithdrawnMethod:
    "No withdraw method is available. Please update your payment method to withdraw funds.",
  outOfBalance:
    "You don&#039;t have sufficient balance for a withdraw request!",
  mustApprovedPreviousRequestFirst:
    "You already have pending withdraw request(s). Please submit your request after approval or cancellation of your previous request.",
  somethingWentWrong: "Something went wrong",
  submittedWithdrawn:
    "Congratulations! Your withdraw has been submitted successfully. We will contact you shortly.",
  noSupportedGateway: "The payment method %s is not not supported&#039;",
  minimumWithDrawnRequired: "Withdraw amount must be greater than %d",
  underBalance: "You don&#039;t have enough balance for this request",
  amountRequired: "The Amount is required",
  methodRequired: "The Method is required",
  approvedRequests: "Approved Requests",
  cancelledRequests: "Cancelled Requests",
  pendingRequests: "Pending Requests",
  withdrawnRequest: "Withdrawn Request",
  requestCancelled: "The request has been cancelled successfully",
  denyAccessAction: "You have no permission to do this action",
  pendingReview: "Pending Review",
  offline: "Offline",
  live: "Live",
  completed: "Completed",
  approved: "Approved",
  pending: "Pending",
  processing: "Processing",
  cancelled: "Cancelled",
  refunded: "Refunded",
  onHold: "On hold",
  orderStatistic: "Order Statistic",
  pageviews: "Page views",
  totalSales: "Total Sales",
  earning: "Earning",
  generalStatistic: "General Statistic",
  deletedProduct: "Congratulation! This product has been deleted successfully",
  withdraw: "Withdraw",
  orders: "Orders",
  statistic: "Statistic",
  products: "Products",
  orderFailed:
    "Payment for order #%1$s from %2$s has failed. The order was as follows:",
  orderPending:
    "The payment has not been completed. Please check the order number to re-proceed payment again: %d",
  orderOnHold:
    "Thanks for your order. It’s on-hold until we confirm that payment has been received.",
  orderBeingProcessed:
    "Firstly, thank for order! — we&#039;ve received your order #%s, and it is now being processed:",
  orderCompleted: "Thank for order! We have finished processing your order %s",
  errorWentOrderCancelled:
    "Something went wrong, We could not cancel this order.",
  orderCancelled: "The order has been cancelled",
  orderAdded: "The order has been updated successfully",
  noOrder: "There is no order yet",
  denyAccessOrder: "You do not have permission to access this order",
  orderDoesNotExists: "This order does not exists",
  emptyCart: "Empty Cart",
  couldNotCreateChatRoom:
    "Sorry, We could not create chat room! Please contact admin to report this issue",
  copied: "Copied",
  expiryDate: "Expiry Date",
  couponEndsIn: "Coupon Ends in",
  payAndPublish: "Pay and Publish",
  fbEmailError:
    "Error: We could not find your email in this Facebook account. Please make sure that this Facebook account is verified and You provide your email address to it.",
  day: "day",
  days: "days",
  promotionDuration: "Promotion Duration: ",
  maximumMenuWarning: "You can add a maximum of %s menus",
  maximumItemWarning: "You can add a maximum of %s items",
  wroteReviewsFor: "Wrote reviews for",
  itemTitle: "Item title",
  confirmDeleteSetting: "Are you want to delete this setting?",
  icon: "Icon",
  linkTo: "Link To",
  addNew: "Add new",
  isOpenNewWindow: "Is open new window?",
  noResultsFound: "Sorry, No results found",
  verfied: "Verified",
  verified: "Verified",
  ads: "Ads",
  openingAt: "Opening at",
  closedAt: "Closed at",
  renew: "Renew",
  getDirection: "Get Direction",
  contentIsNoLongerAvailable: "This content is no longer available",
  gatewayIsRequired: "Please select a payment gateway",
  discussionUpdatedSuccessfully:
    "Congratulations! Your discussion has been updated successfully",
  discussionAddedSuccessfully:
    "Congratulations! Your discussion has been posted successfully",
  discussionBeingReviewed:
    "Thank for submitting! Your discussion has been received and is being reviewed by our team staff",
  lat: "Latitude",
  lng: "Longitude",
  sending: "Sending",
  callUs: "Call Us",
  callus: "Call Us",
  emailUs: "Email Us",
  view: "View",
  totalViews: "Total Views",
  unlimited: "Unlimited",
  showMore: "Show more",
  showLess: "Show less",
  sentYourLocation: "Sent Your Location",
  shareOnFacebook: "Share on Facebook",
  shareOnTwitter: "Share on Twitter",
  shareToEmail: "Email Coupon",
  pleaseUseThisCouponCode: "Please us this coupon code:",
  reviewSubmittedSuccessfully: "Your review has been submitted successfully",
  reviewBeingReviewed:
    "Thank for submitting! Your review has been received and is being reviewed by our team staff",
  reviewTitle: "Review Title",
  setting: "Setting",
  settings: "Settings",
  discussionEmpty: "The discussion content is required",
  youLeftAReviewBefore: "You already left a review before.",
  couldNotInsertReview: "Oops! We could not insert the review",
  reviewIDIsRequired: "Review ID is required",
  yourReview: "Your Review",
  thisFeatureIsNotAvailable: "This feature is not available yet",
  currentAccount: "Current Account",
  aMonths: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  oneMinuteAgo: "1 minute ago",
  aFewMinutesAgo: "A few minutes ago",
  minutesAgo: "minutes ago",
  hoursAgo: "hours ago",
  hourAgo: "hour ago",
  browserDoesNotSupportLocalStore:
    "Sorry, your browser does not support Web Storage...",
  deleteMyAccount: "Delete My Account",
  permanentlyDeleteAccount: "Permanently Delete Account",
  copy: "Copy",
  online: "Online",
  deleteMessage: "Do you want to delete this message?",
  startConversation: "Starting a conversation with an author now.",
  searchAuthor: "Search Author",
  postType: "Post Type",
  connectWithSocialNetworks: "Or Connect With",
  fbLoginWarning:
    "Facebook Init is not loaded. Check that you are not running any blocking software or that you have tracking protection turned off if you use Firefox",
  createdAccountSuccessfully:
    "Congrats! Your account has been created successfully.",
  couldNotCreateAccount:
    "ERROR: We could not create your account. Please try later.",
  usernameExists:
    "ERROR: Sorry, The username is not available. Please with another username.",
  emailExists:
    "ERROR: An account with this email already exists on the website.",
  invalidEmail: "ERROR: Invalid Email",
  needCompleteAllRequiredFields: "ERROR: Please complete all required fields.",
  needAgreeToTerm:
    "ERROR: Sorry, To create an account on our site, you have to agree to our terms conditionals.",
  needAgreeToPolicy:
    "ERROR: Sorry, To create an account on our site, you have to agree to our privacy policy.",
  disabledLogin: "Sorry, We are disabled this service temporary.",
  youAreLoggedInAlready: "You are logged in already.",
  deletedNotification:
    "Congrats! The notification has been deleted successfully.",
  couldNotDeleteNotification:
    "Oops! We could not delete this notification. Please recheck your Notification ID.",
  confirmDeleteNotification: "Do you want to delete this notification?",
  idIsRequired: "The ID is required",
  noDataFound: "No Data Found",
  couldNotSendMessage:
    "OOps! We could not send this message, please try clicking on Send again.",
  messageContentIsRequired: "Message Content is required",
  chatFriendIDIsRequired: "Chat friend id is required",
  authorMessageHasBeenDelete:
    "Congrats! The author messages has been deleted successfully.",
  messageHasBeenDelete: "Congrats! The message has been deleted successfully.",
  weCouldNotDeleteMessage:
    "Oops! Something went wrong, We could not delete this message.",
  weCouldNotDeleteAuthorMessage:
    "Oops! Something went wrong, We could not delete the author messages.",
  authorIDIsRequired: "Author ID is required",
  msgIDIsRequired: "Message ID is required",
  fetchedAllMessages: "Fetched all messages",
  aFewSecondAgo: "A few seconds ago",
  xMinutesAgo: "%s minutes ago",
  xHoursAgo: "%s hours ago",
  noMessage: "There are no messages",
  allNotificationsIsLoaded: "All Notification is loaded",
  passwordHasBeenUpdated:
    "Congrats! Your password has been updated successfully.",
  all: "All",
  confirmDeleteFavorites: "Do you want delete it from your favorites",
  backTo: "Back To",
  logoutDesc: "Do you want to logout?",
  requiredLogin: "You need to login to your account first",
  continue: "Continue",
  logout: "Logout",
  favorite: "Favorite",
  report: "Report",
  editProfile: "Edit Profile",
  foundNoUser: "User profile does not exist.",
  userIDIsRequired: "Take a Photo",
  takeAPhoto: "Take a Photo",
  uploadPhoto: "Upload photo",
  uploadPhotoFromLibrary: "Upload photo from Library",
  firstName: "First Name",
  lastName: "Last Name",
  displayName: "Display Name",
  avatar: "Avatar",
  coverImg: "Cover Image",
  email: "Email",
  position: "Position",
  introYourSelf: "Intro yourself",
  address: "Address",
  address1: "Address 1",
  address2: "Address 2",
  city: "City",
  state: "State",
  postcode: "Postcode",
  country: "Country",
  phone: "Phone",
  website: "Website",
  socialNetworks: "Social Networks",
  changePassword: "Change Password",
  currentPassword: "Current Password",
  newPassword: "New Password",
  confirmNewPassword: "Confirm Password",
  youNeedToCompleteAllRequired: "Please complete all required fields",
  validationData: {
    email: {
      presence: {
        message: "Email is required",
      },
      special: {
        message: "Invalid email address",
      },
    },
    phone: {
      presence: {
        message: "Phone number is required",
      },
      special: {
        message: "Invalid phone number",
      },
    },
    url: {
      presence: {
        message: "URL is required",
      },
      special: {
        message: "Invalid URL",
      },
    },
    username: {
      presence: {
        message: "Username is required",
      },
      length: {
        minimum: 3,
        message: "Your username must be at least 3 characters",
      },
    },
    password: {
      presence: {
        message: "Please enter a password",
      },
      length: {
        minimum: 5,
        message: "Your password must be at least 5 characters",
      },
    },
    confirmPassword: {
      presence: {
        message: "Password does not match the confirm password",
      },
    },
    firstName: {
      presence: {
        message: "Please enter a password",
      },
      length: {
        message: "Your first name must be at least %s characters",
      },
    },
    lastName: {
      presence: {
        message: "Please enter your last name",
      },
      length: {
        minimum: 3,
        message: "Your last name must be at least 3 characters",
      },
    },
    displayName: {
      presence: {
        message: "Please enter your display name",
      },
      length: {
        minimum: 3,
        message: "Your display name must be at least 3 characters",
      },
    },
    agreeToTerms: {
      presence: {
        message: "You must agree to our terms conditionals.",
      },
    },
    agreeToPolicy: {
      presence: {
        message: "You must agree to our policy privacy.",
      },
    },
  },
  invalidGooglereCaptcha: "Pleas verify reCaptcha first.",
  profileHasBeenUpdated: "Congrats! Your profile have been updated",
  errorUpdateProfile:
    "ERROR: Something went wrong, We could not update your profile.",
  errorUpdatePassword:
    "ERROR: The password confirmation must be matched the new password.",
  sendAnEmailIfIReceiveAMessageFromAdmin: "Receive message through email",
  reportMsg: "Thank for your reporting!",
  weNeedYourReportMsg: "Please give us your reason",
  aPostStatus: [
    {
      status: "Published",
      icon: "la la-share-alt",
      bgColor: "bg-gradient-1",
      post_status: "publish",
      total: 0,
    },
    {
      status: "In Review",
      icon: "la la-refresh",
      bgColor: "bg-gradient-2",
      post_status: "pending",
      total: 0,
    },
    {
      status: "Unpaid",
      icon: "la la-money",
      bgColor: "bg-gradient-3",
      post_status: "unpaid",
      total: 0,
    },
    {
      status: "Expired",
      icon: "la la-exclamation-triangle",
      bgColor: "bg-gradient-4",
      post_status: "expired",
      total: 0,
    },
  ],
  aEventStatus: [
    {
      status: "Upcoming",
      icon: "la la-calendar-o",
      bgColor: "bg-gradient-1",
      post_status: "publish",
      total: 0,
    },
    {
      status: "OnGoing",
      icon: "la la-calendar-o",
      bgColor: "bg-gradient-2",
      post_status: "ongoing",
      total: 0,
    },
    {
      status: "Expired",
      icon: "la la-calendar-o",
      bgColor: "bg-gradient-3",
      post_status: "expired",
      total: 0,
    },
    {
      status: "In Review",
      icon: "la la-calendar-o",
      bgColor: "bg-gradient-4",
      post_status: "pending",
      total: 0,
    },
    {
      status: "Temporary Close",
      icon: "la la-calendar-o",
      bgColor: "bg-gradient-4",
      post_status: "temporary_close",
      total: 0,
    },
  ],
  gotAllFavorites: "All favorites have been displayed",
  noFavorites: "There are no favorites",
  tokenExpired:
    "The token has been expired, please log into the app to generate a new token",
  profile: "Profile",
  messages: "Messages",
  favorites: "Favorites",
  doNotHaveAnyArticleYet: "You do not have any article yet.",
  invalidUserNameOrPassword: "Invalid User Name Or Password",
  download: "Download",
  geoCodeIsNotSupportedByBrowser:
    "Geolocation is not supported by this browser.",
  askForAllowAccessingLocationTitle:
    "Allow accessing your location while you are using the app?",
  askForAllowAccessingLocationDesc:
    "Your current location will be used for nearby search results.",
  discussionContentRequired: "Please write something before submitting",
  seeMoreDiscussions: "See more discussions",
  allRegions: "All Regions",
  nearby: "Nearby",
  networkError: "Network Error",
  retry: "Tap To Retry",
  weAreWorking: "We are working on this feature",
  searchResults: "Search Results",
  noPostFound: "No Posts Found",
  noDiscussion: "No discussion found",
  discussion: "Discussion",
  discussions: "Discussions",
  hostedBy: "Hosted By",
  editReview: "Edit review",
  updateReview: "Update review",
  always_open: "Open 24/7",
  open247: "Open 24/7",
  whatAreULookingFor: "What are you looking for?",
  notFound: "Not Found",
  viewProfile: "View Profile",
  inReviews: "In Reviews",
  addSocial: "Add Social",
  searchNow: "Search Now",
  temporaryClose: "Temporary Close",
  expiryOn: "Expiry On",
  views: "Views",
  shares: "Shares",
  home: "Home",
  searchAsIMoveTheMap: "Search as I move the map",
  listing: "Listing",
  listings: "Listings",
  allListings: "All Listings",
  allCategories: "All Categories",
  allLocations: "All Locations",
  allTags: "All Tags",
  geolocationError: "Geolocation is not supported by this browser.",
  promotions: "Promotions",
  askChangePlan:
    "Just a friendly popup to ensure that you want to change your subscription level?",
  changePlan: "Change Plan",
  active: "Active",
  getNow: "Get Now",
  listingType: "Listing Type",
  currency: "Currency",
  billingType: "Billing Type",
  nextBillingDate: "Next Billing Date",
  currentPlan: "Current Plan",
  remainingItems: "Remaining Items",
  billingHistory: "Billing History",
  discount: "Discount",
  plan: "Plan",
  planName: "Plan Name",
  planType: "Plan Type",
  gateway: "Gateway",
  payfor: "Invoice Pay For",
  description: "Description",
  viewDetails: "View Details",
  amount: "Amount",
  more: "More",
  categories: "Categories",
  saveChanges: "Save Changes",
  basicInfo: "Basic Info",
  followAndContact: "Follow &amp; Contact",
  resetPassword: "Reset Password",
  ihaveanaccount: "Already have an account?",
  username: "Username",
  usernameOrEmail: "Username or Email Address",
  password: "Password",
  lostPassword: "Lost your password?",
  donthaveanaccount: "Don&#039;t have an account?",
  rememberMe: "Remember me?",
  login: "Login",
  register: "Register",
  isShowOnHome: "Do you want to show the section content on the Home tab?",
  viewMoreComments: "View more comments",
  reportTitle: "Report abuse",
  pinToTopOfReview: "Pin to Top of Review",
  unPinToTopOfReview: "Unpin to Top of Review",
  seeMoreReview: "See More Reviews",
  eventName: "Event Name",
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  promote: "Promote",
  title: "Title",
  type: "Type",
  totalShares: "Total Shares",
  totalFavorites: "Total Favorites",
  ratings: "Ratings",
  oChart: {
    oHeading: {
      views: "Total Views",
      favorites: "Total Favorites",
      shares: "Total Shares",
      ratings: "Average Rating",
    },
    oLabels: {
      views: "Views",
      favorites: "Favorites",
      shares: "Shares",
      ratings: "Ratings",
    },
    up: "Up",
    down: "Down",
  },
  noOlderNotifications: "No older notifications.",
  notifications: "Notifications",
  latestNotifications: "Latest Notifications",
  seeAll: "See All",
  of: "of",
  gallery: "Gallery",
  favoriteTooltip: "Save to my favorites",
  oneResult: "Result",
  twoResults: "Results",
  moreThanTwoResults: "Results",
  filterByTags: "Filter By Tags",
  to: "To",
  send: "Send",
  message: "Message",
  newMessage: "New Message",
  searchUsersInChat: "Search by username",
  recipientInfo: "Recipient information",
  inbox: "Message",
  deleteMsg: "Delete Message",
  search: "Search",
  couldNotAddProduct: "We could not add product to cart",
  directBankTransfer: "Direct Bank Transfer",
  totalLabel: "Total",
  boostSaleBtn: "Boost now",
  selectAdsPosition: "Select Ads Positions",
  selectAdsDesc: "Boost this post to a specify positions on the website",
  boostPost: "Boost Post",
  boostEvent: "Boost Event",
  selectPlans: "Select Plans",
  name: "Name",
  addVideoBtn: "Add Video",
  videoLinkPlaceholder: "Video Link",
  image: "Image",
  images: "Images",
  uploadVideosTitle: "Upload Videos",
  uploadVideosDesc: "Add more videos to this listing",
  uploadSingleImageTitle: "Upload Image",
  uploadMultipleImagesTitle: "Upload Images",
  uploadMultipleImagesDesc: "Add more images to this listing",
  maximumVideosWarning: "You can add a maximum of %s videos",
  maximumImgsWarning: "You can upload a maximum of %s images",
  weNeedYour: "We need your",
  showMap: "Show map",
  enterAQuery: "Enter a query",
  starts: "Starts",
  endsOn: "End",
  time: "Time",
  photo: "Photo",
  photos: "Photos",
  noComments: "No Comment",
  comment: "Comment",
  comments: "Comments",
  share: "Share",
  like: "Like",
  likes: "Likes",
  liked: "Liked",
  typeAMessage: "Type a message...",
  confirmHide: "Are you sure that you want to hide this listing?",
  confirmRePublish: "Do you want to re-publish this listing?",
  wrongConfirmation: "ERROR: Wrong the confirmation code.",
  confirmDelete:
    "This post will be deleted permanently, Press x to confirm that you still want to delete this listing",
  remove: "Remove",
  hide: "Hide",
  edit: "Edit",
  delete: "Delete",
  ok: "Ok",
  publish: "Publish",
  submit: "Submit",
  cancel: "Cancel",
  confirmDeleteComment: "Are you want to delete this comment?",
  reportReview: "Report review",
  reviewFor: "Review For",
  reviewsFor: "Reviews For",
  addReview: "Add a review",
  deleteReview: "Delete Review",
  confirmDeleteReview: "Do you want to delete this review?",
  averageRating: "Average Rating",
  basicInfoEvent: "Basic Info",
  basicInfoEventDesc:
    "This info will also appear in Listing and any ads created for this event",
  eventVideo: "Event Video",
  addPhotoVideoPopupTitle: "Add Photos And Videos",
  location: "Location",
  aEventFrequency: [
    {
      name: "Occurs once",
      value: "occurs_once",
    },
    {
      name: "Daily",
      value: "daily",
    },
    {
      name: "Weekly",
      value: "weekly",
    },
  ],
  frequency: "Frequency",
  details: "Details",
  detailsDesc:
    "Let people know what type of event you&#039;re hosting and what to expect",
  oDaysOfWeek: [
    {
      value: "sunday",
      label: "Sun",
    },
    {
      value: "monday",
      label: "Mon",
    },
    {
      value: "tuesday",
      label: "Tue",
    },
    {
      value: "wednesday",
      label: "Wed",
    },
    {
      value: "thursday",
      label: "Thurs",
    },
    {
      value: "friday",
      label: "Fri",
    },
    {
      value: "saturday",
      label: "Sat",
    },
  ],
  restaurant: {
    item: {
      title: "My Titles",
      description:
        "Price is net per person, excluding drinks chef seasonal menu",
      price: "$ 59.99 - $ 79.99",
    },
  },
  claimListing: "Claim This Listing",
  noClaimFields:
    "There are no fields. Please go to Wiloke Listing Tools -&gt; Claim Listing to add some fields",
  pressToCopy: "Press Ctrl+C to copy this link",
  copyLink: "Copy Link",
  wantToDeleteDiscussion: "Are you sure want to delete this comment?",
  passwordNotMatched: "The confirm password must be matched the new password",
  reset: "Reset",
};

export default decodeObject(translations);
