export const scrollToElement = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");
  if (!href) return;

  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: "smooth" });
};
