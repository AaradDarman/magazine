export const latestPostsReducer = (
  state = [
    {
      _id: "ASFDSDGSDG;lsjg",
      title: "فیلم و سریال",
      content: [
        {
          _id: "adaghefdsfdsfsdfcvhryjsfg",
          title: "۱۰ سریال انیمیشنی که بر اساس فیلم‌های مشهور ساخته شده‌اند",
          subtitle: "احیای عناوین محبوب در قالب انیمیشن",
          postThumbnail: "intertainment5.jpg",
        },
        {
          _id: "adgafhtahehgsdf",
          title: "تحلیل شخصیت لیوای – گرگ درنده جوخه شناسایی",
          subtitle: "کاپیتانِ درد!",
          postThumbnail: "intertainment6.jpg",
        },
        {
          _id: "sdfhgsthtshtshst",
          title: "بهترین فیلم‌های ابرقهرمانی قبل از دنیای سینمایی مارول",
          subtitle: "ابرقهرمان بودن قبل از این که ابرقهرمانی مد شه!",
          postThumbnail: "intertainment7.jpg",
        },
        {
          _id: "sdfhststrhsthsr",
          title: "جشنواره فیلم کن ۲۰۲۱؛ هفت فیلمی که پتانسیل درخشش دارند",
          subtitle: "از قهرمان تا The French Dispatch",
          postThumbnail: "intertainment8.jpg",
        },
      ],
    },
    {
      _id: "dfhsjj;lsjg",
      title: "سرگرمی",
      content: [
        {
          _id: "adaghefdsfdsfsdfcvhryjsfg",
          title: "تأثیرگذارترین شخصیت‌های مونث دنیای کمیک‌ها",
          subtitle: "زنانی که میراثی در کمیک‌ها به جا گذاشته‌اند",
          postThumbnail: "intertainment1.jpg",
        },
        {
          _id: "adgafhtahehgsdf",
          title: "معرفی کنتسا والنتینا آلگرا د فانتین – جاسوس چند جانبه مارول",
          subtitle: "زنی که قلب نیک فیوری را ربود",
          postThumbnail: "intertainment2.jpg",
        },
        {
          _id: "sdfhgsthtshtshst",
          title: "معرفی بتمن – خفاش محافظ گاتهام",
          subtitle: "از کوچه‌ جنایت تا غار خفاشی",
          postThumbnail: "intertainment3.jpg",
        },
        {
          _id: "sdfhststrhsthsr",
          title: "معرفی بلک ویدو – جاسوس روسِ آمریکایی‌ها",
          subtitle: "بیوه سیاه با نیش سمی",
          postThumbnail: "intertainment4.jpg",
        },
      ],
    },
  ],
  action
) => {
  switch (action.type) {
    case "SET_LATESTPOSTS":
      return [...action.payload];
    case "CLEAR_LATESTPOSTS":
      return [...action.payload];
    default:
      return state;
  }
};
