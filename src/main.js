window.onload = function () {
    const root = document.getElementById("react-root");
    const regex = /([^\/]+)\/status\/(\d+)\/analytics/;

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        const links = document.querySelectorAll('a[href*="/analytics"]');
        links
          .forEach((link) => {
            const href = link.getAttribute("href");

            if (!regex.test(href))
                return;

            let parent = link.parentNode;

            while (parent.parentNode.children.length === 1) {
              parent = parent.parentNode;
            }

            parent.remove();
          });
      }
    });
  });

  observer.observe(root, {
    childList: true,
    subtree: true,
  });
};
