export const getPageTitleFromPath = (pathname) => {
  switch (pathname) {
    case "/cart":
      return "Cart";
    case "/favorites":
      return "Favorites";
    case "/notification":
      return "Notification";
    default:
      return "";
  }
};
