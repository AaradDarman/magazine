export const gamesReviewPostsReducer = (
  state = [
    {
      _id: "dddgggswsasdfasdfasdfoiksodf",
      title: "بررسی بازی Ratchet & Clank: Rift Apart  – آخرین لامبکس",
      subtitle: "همه آن چیزی که از نسل نهم انتظارش را داشتید",
      postThumbnail: "game9.jpg",
      type: ["بازی های پلی استیشن"],
    },
    {
      _id: "dddgggswsoadfadgfafiksodf",
      title: "بررسی بازی Ninja Gaiden Master Collection – روح تاریک نینجا",
      subtitle: "با معروف‌ترین نینجای دنیای ویدیو گیم آشنا شوید",
      postThumbnail: "game6.jpg",
      type: ["بازی های ایکس باکس وان", "بازی های پلی استیشن"],
    },
    {
      _id: "sdddddsdfsdffgdhdffj",
      title: "بررسی بازی Maneater – آرواره‌های مصنوعی کوسه",
      subtitle: "GTA در اعماق دریا",
      postThumbnail: "game8.jpg",
      type: ["بازی های ایکس باکس وان", "بازی های پلی استیشن"],
    },
    {
      _id: "dddgggswsoiksodf",
      title:
        "بررسی بازی Alex Kidd in Miracle World – اگر بازی‌های سولز تبدیل به بازی‌های پلتفرمر می‌شدند!",
      subtitle: "همانقدر خاطره انگیز و البته همانقدر سخت و روی اعصاب",
      postThumbnail: "game7.jpg",
      type: [
        "بازی های ایکس باکس وان",
        "بازی های پلی استیشن",
        "بازی های نینتندو سوییچ",
      ],
    },
    {
      _id: "sagadsahffghfrjtrswsdf",
      title:
        "بررسی بازی Toyko 2020: The Olympic Video Game – المپیک ناقص نسل هشتمی",
      subtitle: "کلکسیونی از رشته‌های ورزشی مختلف در یک پکیج",
      postThumbnail: "game5.jpg",
      type: ["بازی های ایکس باکس وان"],
    },
    {
      _id: "sgaghshsghdvf",
      title: "Extreme Car test",
      subtitle: "تجربه یک عنوان رsdfgsdgg جذاب باشد؟",
      postThumbnail: "game4.jpg",
      type: ["بازی های پی سی"],
    },
    {
      _id: "asdfgagdf;sdf",
      title:
        "با بازی Ball Run 2048 سفری دوست داشتنی به دنیای بازی‌های کژوال موبایلی داشته باشید",
      subtitle: "این شما و این یک عنوان کژوال موبایلی",
      postThumbnail: "game1.jpg",
      type: ["بازی های موبایل", "بازی های نینتندو سوییچ"],
    },
    {
      _id: "sdfgsdfhtrtyid",
      title:
        "آیا بازی‌های پازلی موبایلی به اندازه‌ای که باید به بلوغ رسیده‌اند؟",
      subtitle:
        "وقتی بازی‌های موبایلی شما را تبدیل به شهروندی قانون‌مند می‌کنند",
      postThumbnail: "game2.jpg",
      type: ["بازی های موبایل", "بازی های نینتندو سوییچ"],
    },
    {
      _id: "afghsghdfgh",
      title: "Tiles Hop مخصوص طرفداران بازی‌های موزیکال موبایلی است",
      subtitle: "بازی‌های موزیکال موبایلی جذاب‌تر از همیشه شده‌اند",
      postThumbnail: "game3.jpg",
      type: ["بازی های موبایل", "بازی های نینتندو سوییچ"],
    },
    {
      _id: "asgfafgagoijalkjlkfdg",
      title:
        "Extreme Car Driving Simulator شما را به خیابان‌های سطح شهر می‌برد",
      subtitle:
        "تجربه یک عنوان ریسینگ موبایلی تا چه اندازه می‌تواند جذاب باشد؟",
      postThumbnail: "game4.jpg",
      type: ["بازی های موبایل"],
    },
  ],
  action
) => {
  switch (action.type) {
    case "SET_GAMESREVIEWPOSTS":
      return [...action.payload];
    case "CLEAR_GAMESREVIEWPOSTS":
      return [...action.payload];
    default:
      return state;
  }
};
