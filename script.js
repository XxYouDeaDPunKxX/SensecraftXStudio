(() => {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-navigation");
  const copyButton = document.querySelector("[data-copy-button]");
  const copyStatus = document.querySelector("[data-copy-status]");

  const setHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation?.classList.toggle("is-open", !isOpen);
  });

  navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton?.setAttribute("aria-expanded", "false");
      navigation?.classList.remove("is-open");
    });
  });

  copyButton?.addEventListener("click", async () => {
    const targetId = copyButton.dataset.copyTarget;
    const target = targetId ? document.getElementById(targetId) : null;
    const value = target?.textContent?.trim();

    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      const label = copyButton.querySelector("[data-copy-label]");
      if (label) label.textContent = "Copied";
      if (copyStatus) copyStatus.textContent = "Activation instruction copied to clipboard.";

      window.setTimeout(() => {
        if (label) label.textContent = "Copy instruction";
        if (copyStatus) copyStatus.textContent = "";
      }, 2200);
    } catch {
      if (copyStatus) copyStatus.textContent = "Copy failed. Select the instruction manually.";
    }
  });

  const revealTargets = [
    ...document.querySelectorAll(
      ".failure-card, .comparison-panel, .principle-card, .audience-list article, .install-terminal"
    ),
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("reveal-ready");
    revealTargets.forEach((element) => element.setAttribute("data-reveal", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    revealTargets.forEach((element) => observer.observe(element));
  }
})();
