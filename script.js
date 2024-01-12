const mobileSidebarOpenButton = document.querySelector(".icon_button");
const mobileSidebarCloseButton = document.querySelector(
  ".mobile_sidebar_close_button"
);
const mobileSidebar = document.querySelector(".mobile_sidebar");

mobileSidebarOpenButton.addEventListener("click", (e) => {
  mobileSidebar.classList.add("mobile_sidebar_clicked");
});

mobileSidebarCloseButton.addEventListener("click", (e) => {
  mobileSidebar.classList.remove("mobile_sidebar_clicked");
});

mobileSidebar.addEventListener("click", (e) => {
  if (e.target === mobileSidebar) {
    mobileSidebar.classList.remove("mobile_sidebar_clicked");
  }
});
