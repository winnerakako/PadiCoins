export const header_links = [
  {
    path: "/",
    name: "Home",
    onClick: (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        block: "center",
      });
    },
  },
  {
    path: "/#about",
    name: "About",
    onClick: (e) => {
      let path = document.getElementById("about");
      e.preventDefault();
      path && path.scrollIntoView({ behavior: "smooth", block: "center" });
    },
  },
  {
    path: "/#faq",
    name: "FAQ",
    onClick: (e) => {
      let path = document.getElementById("faq");
      e.preventDefault();
      path && path.scrollIntoView({ behavior: "smooth", block: "center" });
    },
  },
  {
    path: "/#contact",
    name: "Contact",
    onClick: (e) => {
      let path = document.getElementById("contact");
      e.preventDefault();
      path && path.scrollIntoView({ behavior: "smooth", block: "center" });
    },
  },
];

export const footer_links = [
  {
    title: "Developers",
    links: [
      {
        name: "Integrations",
        path: "/",
      },
      {
        name: "Technical Help",
        path: "/",
      },
      {
        name: "Overview",
        path: "/",
      },
      {
        name: "Documentation",
        path: "/",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        name: "Knowledge Base",
        path: "/",
      },
      {
        name: "Help",
        path: "/",
      },
      {
        name: "FAQ",
        path: "/#faq",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        path: "/about",
      },
      {
        name: "Careers",
        path: "/",
      },
      {
        name: "Blog",
        path: "/",
      },
      {
        name: "Privacy Policy",
        path: "/",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "Buy Crypto",
        path: "/about",
      },
      {
        name: "Sell Crypto",
        path: "/",
      },
      {
        name: "Margin Trade",
        path: "/",
      },
      {
        name: "Our Fees",
        path: "/",
      },
    ],
  },
];
