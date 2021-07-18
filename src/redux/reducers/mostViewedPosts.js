export const mostViewedPostsReducer = (
  state = [
    {
      _id: "sdlkgjslgjklsjg;lsjg",
      title: "بررسی عملکرد ویندوز 11 برای گیمینگ",
      subtitle:
        "همان طور که گفته می‌شود بایستی انتظار بهترین نسخه ویندوز برای گیمینگ را کشید؟",
      postThumbnail: "post2.jpg",
      comments: [
        {
          author: "Poria-sk",
          text: "جواب : هیچ کدوم بتسدا و راکستار مسابقه گداشتن هر کدوم نسخه جدید رو بده میبازه ,🤣🤣🤣🤣🤣🤣🤣🤣🤣😂😂😂😂😂",
          like: 2,
          dislike: 0,
          avatar: "avatar.jpg",
        },
        {
          author: "Amin-80",
          text: "GTA 6 سال ۲۰۲۶ عرضه بشه ، هفتش هم سال ۲۰۳۷ عرضه میشه ، اگه هم این اتفاق نیوفتاد بعد از ریاست جمهوری هشت ساله رئیسی هم از GTA 6 خبری نیست 😂😂😂",
          like: 2,
          dislike: 1,
          avatar: "avatar2.jpg",
        },
        {
          author: "cr7-fan",
          text: "امیدوارم استارفیلد بتونه انتظارات رو برآورده کنه",
          like: 4,
          dislike: 1,
          avatar: "avatar3.jpg",
        },
      ],
    },
    {
      _id: "adaghefcvhryjsfg",
      title: "GTA 6 یا Elder Scrolls 6؛ کدام یک زودتر عرضه می‌شوند؟",
      subtitle: "نسخه ششم کدام بازی زودتر می‌آید؟",
      postThumbnail: "post6.jpg",
      comments: [
        {
          author: "Poria-sk",
          text: "جواب : هیچ کدوم بتسدا و راکستار مسابقه گداشتن هر کدوم نسخه جدید رو بده میبازه ,🤣🤣🤣🤣🤣🤣🤣🤣🤣😂😂😂😂😂",
          like: 2,
          dislike: 0,
          avatar: "avatar.jpg",
        },
        {
          author: "Amin-80",
          text: "GTA 6 سال ۲۰۲۶ عرضه بشه ، هفتش هم سال ۲۰۳۷ عرضه میشه ، اگه هم این اتفاق نیوفتاد بعد از ریاست جمهوری هشت ساله رئیسی هم از GTA 6 خبری نیست 😂😂😂",
          like: 2,
          dislike: 1,
          avatar: "avatar2.jpg",
        },
        {
          author: "cr7-fan",
          text: "امیدوارم استارفیلد بتونه انتظارات رو برآورده کنه",
          like: 4,
          dislike: 1,
          avatar: "avatar3.jpg",
        },
        {
          author: "Daeealireza",
          text: "میو",
          like: 3,
          dislike: 1,
          avatar: "avatar4.jpg",
        },
      ],
    },
    {
      _id: "adaghefdsfdsfsdfcvhryjsfg",
      title: "چرا Dino Crisis به اندازه Resident Evil محبوب نشد؟",
      subtitle: "یادآوری عنوانی که 18 سال است به خواب عمیقی فرو رفته",
      postThumbnail: "dino.jpg",
      comments: [
        {
          author: "Poria-sk",
          text: "جواب : هیچ کدوم بتسدا و راکستار مسابقه گداشتن هر کدوم نسخه جدید رو بده میبازه ,🤣🤣🤣🤣🤣🤣🤣🤣🤣😂😂😂😂😂",
          like: 2,
          dislike: 0,
          avatar: "avatar.jpg",
        },
        {
          author: "Daeealireza",
          text: "میو",
          like: 3,
          dislike: 1,
          avatar: "avatar4.jpg",
        },
      ],
    },
  ],
  action
) => {
  switch (action.type) {
    case "SET_MOSTVIEWEDPOSTS":
      return [...action.payload];
    case "CLEAR_MOSTVIEWEDPOSTS":
      return [...action.payload];
    default:
      return state;
  }
};
