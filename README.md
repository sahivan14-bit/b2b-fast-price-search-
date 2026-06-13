# b2b-fast-price-search-

# 📦 High-Speed B2B Price Search Engine via Google Sheets API

[![GitHub Pages](https://shields.io)](https://github.io)
[![License: MIT](https://shields.io)](https://opensource.org)

A lightweight, serverless, ultra-fast web application designed for wholesale companies, auto-parts distributors, and warehouse managers to replace laggy Excel sheets with a premium, Apple-style search interface.

---

## 🚀 Business Value & Core Problem Solved

Wholesale businesses often manage massive price lists (10,000+ rows) in cloud tables. Sales managers waste hours every day manually scrolling through clunky Excel grids or dealing with broken 1C systems while on the phone with clients. 

**This solution fixes that:**
* **Instant Filtering:** Sub-millisecond (0.001s) searching through 8,000+ stock rows right in the user's browser.
* **Smart Cross-Word Queries:** Managers can type scattered keyword fragments (e.g., `"Kalina rear"` or `"01539"`) and get instant results.
* **100% Price Integrity:** Directly handles cloud synchronization via public Google Sheets CSV streams. If a price changes in the cloud, it instantly updates on the client side. No database desync, zero margin of error.
* **Zero Infrastructure Cost:** Runs entirely serverless on clean Frontend architecture. No laggy Python/PyTorch instances required. Works flawlessly on low-end laptops and mobile phones.

---

## 🎨 Premium Apple-Style UI Architecture

The interface is built using a strict, minimalist **"Space Gray" (Graphite)** dark theme inspired by Apple Design Guidelines. It provides clean visual ergonomics for warehouse workers, preventing eye strain during long working shifts.

---

## 🛠 Tech Stack

* **Frontend:** Vanilla HTML5, Semantic CSS3 (BEM, Grid/Flexbox Layouts).
* **Core Logic:** Pure JavaScript (ES6+ Asynchronous Architecture, `fetch` API stream handling).
* **Data Integration:** Google Sheets API (Web Publication stream wrapper).

---

## 📦 Production Deployment & How to Connect Your Sheet

The architecture is fully modular. To hook this engine up to any company's real stock database, follow these steps:

1. Open your Excel sheet in Google Docs -> click **File** -> **Share** -> **Publish to the Web**.
2. Select **CSV format** and copy the generated public link.
3. Open `app.js` and replace the `API_URL` variable value with your link.
4. Deploy to GitHub Pages or any static CDN in 10 seconds.

---

## 📞 Commercial Implementation & Support

This product is production-ready for commercial deployment and can be customized to match any warehouse layout or ERP pipeline. 

If you are a business owner or sales director looking to accelerate your sales cycles and automate your stock queries:
* **Contact for Integration:** @sxlwwx
* **Location:** Developed with 🖤 in Omsk, Russia.

Licensed under the **MIT License**. Free for open-source modification and commercial B2B deployment.
