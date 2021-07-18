export const featuredPostsReducer = (
  state = [
    {
      _id: "sdlkgjslgjklsjg;lsjg",
      title: "بررسی عملکرد ویندوز 11 برای گیمینگ",
      subtitle:
        "همان طور که گفته می‌شود بایستی انتظار بهترین نسخه ویندوز برای گیمینگ را کشید؟",
      postThumbnail: "post2.jpg",
    },
    {
      _id: "adaghefcvhryjsfg",
      title: "GTA 6 یا Elder Scrolls 6؛ کدام یک زودتر عرضه می‌شوند؟",
      subtitle: "نسخه ششم کدام بازی زودتر می‌آید؟",
      postThumbnail: "post6.jpg",
    },
    {
      _id: "adaghefdsfdsfsdfcvhryjsfg",
      title: "چرا Dino Crisis به اندازه Resident Evil محبوب نشد؟",
      subtitle: "یادآوری عنوانی که 18 سال است به خواب عمیقی فرو رفته",
      postThumbnail: "dino.jpg",
    },
  ],
  action
) => {
  switch (action.type) {
    case "SET_FEATUREDPOSTS":
      return [...action.payload];
    case "CLEAR_FEATUREDPOSTS":
      return [...action.payload];
    default:
      return state;
  }
};
