# 🌱 Mati Mitra (माती मित्र) — AI-Powered Crop Recommendation System

![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-Backend-black?logo=flask)
![scikit-learn](https://img.shields.io/badge/scikit--learn-RandomForest-orange?logo=scikitlearn)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen)
![License](https://img.shields.io/badge/M.Tech-Final%20Year%20Project-purple)

> **Mati Mitra** ("Friend of the Soil") is a multilingual, web-based crop recommendation system built for Maharashtra farmers — combining a trained Machine Learning model with hand-curated agronomic domain rules to give farmers advice that is not just statistically accurate, but **regionally and practically sound**.

---

## 🎯 The Problem

Generic ML-based crop recommendation systems are trained on aggregated, region-agnostic datasets. This means a model can be statistically "confident" while recommending something agronomically absurd — like suggesting **coffee for Solapur**, a semi-arid district where coffee has never been grown. For a real farmer, that's not just a wrong answer — it's a costly one.

## 💡 The Solution

Mati Mitra doesn't just trust the raw ML output. It layers a **Hybrid ML + Domain-Rule Scoring Engine** on top of a Random Forest classifier — restricting predictions to a district-level "genuinely-typical-crop" allowlist (covering all 34 agricultural districts of Maharashtra), then re-ranking candidates using:

```
hybrid_score = 0.4 × (ML probability) + 0.6 × (agronomic rule compatibility)
```

The rule score itself blends **four real farming factors**: pH match, water/rainfall/irrigation adequacy, N-P-K compatibility (computed from real 10th–90th percentile statistics of the training data — not hand-estimated), and sowing-timing appropriateness.

---

## ✨ Key Features

| Category | Features |
|---|---|
| 🧠 **Intelligent Recommendation** | Hybrid ML + rule-based scoring · Regional filtering (34 districts) · "Traditional vs Experimental" crop split · Explainable confidence labels |
| 🌦️ **Weather Integration** | Live weather (OpenWeatherMap) · 5-day forecast with sowing-timing awareness · Graceful API-failure fallback |
| 🌾 **Farmer-Centric Advisory** | Crop-specific fertilizer analysis · Legume-aware crop rotation advice · Soil auto-fill for unknown soil tests · Input-plausibility validation |
| 🗣️ **Accessibility First** | Trilingual UI (Marathi/Hindi/English) · Icon-based "Simple Mode" for low-literacy users · Voice input (Web Speech API) · Full-result audio narration (gTTS) |
| 📱 **Real-World Usability** | PWA-ready (installable, offline-capable shell) · WhatsApp share · PDF export · Mobile-responsive with hamburger navigation · Nearest soil-testing center (KVK) finder |
| 📊 **All 22 Crops, Fully Detailed** | Dedicated guide pages per crop — soil, climate, planting, care, pest/disease management, FAQs |

---

## 🛠️ Tech Stack

**Backend:** Python 3 · Flask · scikit-learn (RandomForestClassifier) · joblib · NumPy · `deep_translator` · `gTTS`

**Frontend:** Hand-written HTML5/CSS3 (custom design system, no framework) · Vanilla JavaScript · Web Speech API

**External APIs:** OpenWeatherMap (current + forecast) · Google Translate · Google Text-to-Speech

**Architecture:** Server-rendered (Flask + Jinja2) — a single, auditable server-side pipeline: input validation → live weather retrieval → hybrid scoring engine → fertilizer/rotation advice → multilingual localization → audio generation → result rendering

---

## 📈 Model Performance (Real, Measured Results)

Trained and validated on the standard 22-crop, 7-feature dataset (N, P, K, Temperature, Humidity, pH, Rainfall) using an 80/20 stratified split + 5-fold cross-validation:

| Algorithm | CV Accuracy | Notes |
|---|---|---|
| **Random Forest** ✅ | **99.55% ± 0.32%** | Best overall — selected as production model |
| Naive Bayes | 99.45% ± 0.18% | Most stable across folds |
| SVM (RBF) | 98.36% ± 0.44% | Feature-scaled |
| Decision Tree | 97.95% (test) | 100% train accuracy — classic overfitting, highest CV variance |

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](./home%20page(a).png)
![Home Page](./home%20page%20(b).png)
![Home Page](./home%20page%20(c).png)
![Home Page](./home%20page%20(d).png)
![Home Page](./home%20page%20(e).png)

### 🌾 Crop Details
![Crop Details](./crop%20details.png)
![Crop Info Page](./crop%20info%20page.png)

### 🔮 Prediction
![Predict Page](./predict%20page(a).png)
![Predict Page](./predict%20page(b).png)

### 📊 Result
![Result](./result%20(a).png)
![Result](./result(b).png)

### 📋 Schemes
![Schemes Page](./schemes%20page.png)

---

## 🏗️ Project Architecture

```
Crop Recommendation/
├── app.py                    # Flask app (~1680 lines) — routes, ML pipeline,
│                                hybrid scoring, translation, crop knowledge base
├── crop_model.pkl            # Trained RandomForestClassifier (joblib)
├── Crop_recommendation.csv   # Training dataset (2200 rows)
├── templates/
│   ├── index.html            # Home page (trilingual, mobile nav, KVK teaser)
│   ├── predict.html          # Prediction form (Detailed/Simple-Icon toggle, voice input)
│   ├── result.html           # Result page (donut chart, forecast, fully trilingual)
│   ├── crops_list.html       # All-22-crops directory
│   ├── crop_detail.html      # Per-crop detailed guide (server-side translation)
│   └── schemes.html          # PM-KISAN, PMFBY & KVK soil-testing finder
└── static/
    ├── manifest.json         # PWA manifest
    ├── service-worker.js     # PWA service worker
    └── icons/
```

---

## 🧭 Development Journey (Highlights)

This project evolved through **15 documented development phases** — a genuinely iterative, problem-discovery-driven engineering process:

- **Regional accuracy fix** — caught and corrected geographically-blind recommendations
- **Real translation bug found & fixed** — `GoogleTranslator` mistranslated "pigeonpeas" as 🐦 "pigeon" in Marathi; fixed with hand-verified dictionaries
- **Coverage gap discovered** — only 14 of 36 districts had regional data; expanded to all 34 agricultural districts
- **An honest reckoning** — explicitly addressed whether "99.3% accuracy" means real-world reliability (it doesn't, and the README says so)
- **Full multilingual completion** — found and fixed silent, inconsistent partial-translation failures via live phone testing
- **Mobile navigation bug** — discovered the entire nav menu was invisible below 820px width on the home page; fixed with a hamburger menu

*(Full 15-phase development log available in the project's technical documentation.)*

---

## ⚠️ Honest Limitations

This project deliberately documents its own limitations rather than overselling accuracy:

- The 99.55% figure reflects fit to a **generic, non-region-specific dataset** — not verified real-world cultivation success
- A 7-feature classifier cannot capture soil texture, pest history, market factors, or execution quality
- The underlying dataset's 22-crop vocabulary structurally excludes several of Maharashtra's genuinely major crops (e.g., jowar, bajra, sugarcane)
- No feedback loop currently exists to learn whether a recommendation actually worked in the field

## 🔮 Future Work

- Hybrid-score explainability breakdown (show pH/water/NPK/timing contribution per recommendation)
- Side-by-side crop comparison tool
- A genuinely region-specific training dataset (Maharashtra-only) to remove the current dataset's structural ceiling

---

## 🎓 Academic Context

M.Tech Final Year Project — includes a full technical master document and a properly-cited research paper draft (Abstract, Literature Review with 8 cited works, Methodology, Real Results, Limitations, Future Work).
