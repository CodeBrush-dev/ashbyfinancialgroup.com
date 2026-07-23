// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.ashbyfinancialgroup.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.ashbyfinancialgroup.com/","title_tag":"Mortgage Financing & Mortgage Rates Kaysville | Ashby","meta_description":"Local mortgage brokers for home loans, FHA, VA, reverse mortgages, HELOCs and investment property in Kaysville. View today’s mortgage rates and apply now."},{"page_url":"https://www.ashbyfinancialgroup.com/mortgage-financing","title_tag":"Home Loans & Mortgage Financing Kaysville | Ashby","meta_description":"Explore mortgage financing in Kaysville including FHA loans, VA loans, HELOC and investment property options. Get guidance from experienced mortgage brokers."},{"page_url":"https://www.ashbyfinancialgroup.com/general-1","title_tag":"Mortgage Brokers & Loan Application Kaysville | Ashby","meta_description":"Choose experienced mortgage brokers in Kaysville. Select your loan originator and start your home loans or refinance loan application with Ashby Financial Group."},{"page_url":"https://www.ashbyfinancialgroup.com/get-pre-approved","title_tag":"Get Pre-Qualified for Home Loans Kaysville | Ashby","meta_description":"Get pre-qualified for home loans in Kaysville. Start your loan application, compare mortgage rates and prepare to buy or refinance with Ashby Financial Group."},{"page_url":"https://www.ashbyfinancialgroup.com/reverse-mortgages","title_tag":"Reverse Mortgage Kaysville Specialists | Ashby","meta_description":"Reverse mortgage Kaysville experts with 25+ years’ experience. Learn how FHA HECM can boost retirement income while you keep your home. Schedule a consultation."},{"page_url":"https://www.ashbyfinancialgroup.com/reverse-mortgage-faqs","title_tag":"Reverse Mortgage Kaysville FAQs | Ashby Financial Group","meta_description":"Get clear answers to reverse mortgage FAQs for Kaysville seniors. Learn how HECM works, heirs’ options, tax treatment and home equity line of credit features."},{"page_url":"https://www.ashbyfinancialgroup.com/life-insurance-1","title_tag":"Protect Your Home Loans with Life Insurance | Ashby","meta_description":"Explore term and permanent life insurance to protect your family, mortgage financing and retirement plans. Request a personalized life insurance quote today."},{"page_url":"https://www.ashbyfinancialgroup.com/merchant-services","title_tag":"Merchant Services & Business Solutions | Ashby","meta_description":"Merchant services from Ashby Financial Group. Learn how we help local businesses with secure payment processing and efficient financial solutions."},{"page_url":"https://www.ashbyfinancialgroup.com/retirement","title_tag":"Retirement Planning & Home Equity Strategies | Ashby","meta_description":"Understand your retirement plan and explore tax-efficient strategies, including home equity and investment options, with Ashby Financial Group in Kaysville."}],"keywords":["Mortgage Financing Kaysville","Reverse Mortgage Kaysville","FHA Loans Kaysville","VA Loans Kaysville","Mortgage Rates Kaysville","Investment Property Kaysville","Home Equity Line of Credit Kaysville","Loan Application Kaysville","Mortgage Brokers Kaysville","Home Loans Kaysville"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://www.ashbyfinancialgroup.com/#financialservice",
  "name": "Ashby Financial Group, LC",
  "url": "https://www.ashbyfinancialgroup.com/",
  "image": [
    "https://static.wixstatic.com/media/34b5b4_b63fa1e4744a403caedc3458bdf7c391%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/34b5b4_b63fa1e4744a403caedc3458bdf7c391%7Emv2.jpg",
    "https://static.wixstatic.com/media/34b5b4_4cf60fd5ab0240fb985dd89f55ff1608.png/v1/fill/w_272,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AFG-Logo-Black-Large.png"
  ],
  "logo": "https://static.wixstatic.com/media/34b5b4_b63fa1e4744a403caedc3458bdf7c391%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/34b5b4_b63fa1e4744a403caedc3458bdf7c391%7Emv2.jpg",
  "description": "Ashby Financial Group is a mortgage broker and financial services firm in Kaysville, Utah, offering mortgage financing, reverse mortgages, FHA, VA, conventional loans, life insurance, retirement guidance, and related services.",
  "telephone": "+1-801-294-6179",
  "email": "bryan@ashbyfinancialgroup.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "326 Apricot Grove",
    "addressLocality": "Kaysville",
    "addressRegion": "Utah",
    "postalCode": "84037",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
  },
  "areaServed": {
    "@type": "State",
    "name": "Utah"
  },
  "foundingDate": "2000",
  "identifier": [
    {
      "@type": "PropertyValue",
      "name": "NMLS",
      "value": "1461262"
    },
    {
      "@type": "PropertyValue",
      "name": "State License",
      "value": "9696875-NMLC"
    }
  ],
  "sameAs": [
    "https://www.ashbyfinancialgroup.com/",
    "https://www.facebook.com",
    "https://www.instagram.com"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Ashby Financial Group Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Mortgage Financing",
        "url": "https://www.ashbyfinancialgroup.com/mortgage-financing",
        "itemOffered": {
          "@type": "Service",
          "name": "Mortgage Financing",
          "description": "Purchase and refinance mortgage solutions including conventional, FHA, VA, USDA, jumbo, ARM, HELOC, and construction loans."
        }
      },
      {
        "@type": "Offer",
        "name": "Reverse Mortgage",
        "url": "https://www.ashbyfinancialgroup.com/reverse-mortgages",
        "itemOffered": {
          "@type": "Service",
          "name": "Reverse Mortgage (HECM)",
          "description": "Reverse mortgage solutions focused on maximizing financial stability in retirement for homeowners age 62+."
        }
      },
      {
        "@type": "Offer",
        "name": "Life Insurance",
        "url": "https://www.ashbyfinancialgroup.com/life-insurance-1",
        "itemOffered": {
          "@type": "Service",
          "name": "Life Insurance",
          "description": "Term and permanent life insurance solutions tailored to individual coverage needs and financial goals."
        }
      },
      {
        "@type": "Offer",
        "name": "Retirement Planning Guidance",
        "url": "https://www.ashbyfinancialgroup.com/retirement",
        "itemOffered": {
          "@type": "Service",
          "name": "Retirement Guidance",
          "description": "Education and guidance to help clients understand and optimize their retirement accounts and strategies."
        }
      },
      {
        "@type": "Offer",
        "name": "Merchant Services",
        "url": "https://www.ashbyfinancialgroup.com/merchant-services",
        "itemOffered": {
          "@type": "Service",
          "name": "Merchant Services",
          "description": "Business merchant services offered through Ashby Financial Group."
        }
      }
    ]
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-801-294-6179",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-801-455-1007",
      "contactType": "sales",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  ],
  "urlTemplate": "https://www.ashbyfinancialgroup.com/{+path}",
  "knowsAbout": [
    "Conventional Mortgage Loans",
    "FHA Loans",
    "VA Loans",
    "USDA Loans",
    "Jumbo Loans",
    "ARM Loans",
    "HELOC",
    "Investment Property Loans",
    "Reverse Mortgages",
    "Non-QM Loans",
    "Construction Loans",
    "Life Insurance",
    "Retirement Planning"
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
