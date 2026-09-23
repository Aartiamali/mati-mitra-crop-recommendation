<div align="center">

# 🌾 Mati Mitra
### Crop Recommendation System using Machine Learning

**Hybrid ML + Domain-Rule engine that gives Maharashtra's farmers regionally accurate, honestly-uncertain, and genuinely accessible crop advice.**

[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-Backend-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-Random%20Forest-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white)](https://scikit-learn.org/)
[![HTML5](https://img.shields.io/badge/HTML5-Frontend-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](#)

[![Accuracy](https://img.shields.io/badge/Model%20Accuracy-99.55%25-brightgreen?style=flat-square)](#-model-performance)
[![Languages](https://img.shields.io/badge/Languages-Marathi%20%7C%20Hindi%20%7C%20English-orange?style=flat-square)](#-accessibility-first)
[![Districts](https://img.shields.io/badge/Districts%20Covered-34%2F34-blue?style=flat-square)](#-key-features)
[![Crops](https://img.shields.io/badge/Crops%20Supported-22-yellowgreen?style=flat-square)](#-full-crop-knowledge-base)

</div>

---

## 👋 About This Project

Most crop-recommendation systems report **99%+ accuracy** — and still manage to suggest coffee for a semi-arid district like Solapur. Why? Because the datasets they're trained on have **zero awareness of geography.**

**Mati Mitra fixes that.** It pairs a trained Random Forest classifier with a **hand-curated, data-derived rule layer** covering all 34 agricultural districts of Maharashtra — then wraps the result in a **trilingual, voice-first, low-literacy-friendly interface**, because a scientifically sound answer is useless if the farmer can't understand it.

```
🎯 Aim         → Scientifically sound + regionally credible crop recommendations
🧠 Approach    → Random Forest (ML) × Hand-curated agronomic rules (domain knowledge)
🌍 Audience    → Marathi-speaking, low-literacy, first-time smartphone users
📊 Validated   → 10 live test scenarios across 10 real Maharashtra districts
```

---

## ✨ Key Features

<table>
<tr>
<td width="50%" valign="top">

### 🧠 Hybrid Intelligence
- 🌳 Random Forest — **99.55%** cross-validated accuracy
- ⚖️ `hybrid(c) = 0.4·ml + 0.6·rule` scoring
- 🗺️ Regional filtering — all 34 districts
- 🔀 Dual-track results — Traditional vs. Experimental
- 🚦 Plain-language confidence labels
- ⚠️ Input plausibility warnings

</td>
<td width="50%" valign="top">

### 🌍 Built for Real Farmers
- 🗣️ Trilingual — Marathi / Hindi / English
- 🔊 Full-result audio narration
- 👆 Icon-based Simple Mode (no numbers!)
- 🎙️ Voice input (Web Speech API)
- 📱 Installable PWA
- ✅ Tested on real Android devices

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🌦️ Complete Decision Support
- ☁️ Live weather + 5-day forecast
- 🧪 Crop-specific fertilizer advice
- 🔄 Personalized crop-rotation tips
- 🏛️ PM-KISAN & PMFBY scheme info
- 🔬 KVK (free soil-testing) finder
- 📞 Kisan Call Centre helpline

</td>
<td width="50%" valign="top">

### 📚 Knowledge Base
- 🌱 All 22 model-supported crops
- 📖 Soil, climate, planting, harvest
- 💧 Water & fertilizer management
- 🐛 Common problems + solutions
- ❓ Per-crop FAQs
- ✅ Pros / cons at a glance

</td>
</tr>
</table>

---

## 🏗️ Architecture

```
        👨‍🌾 Farmer (Browser / Mobile)
                    │
                    ▼
          🌐  Flask Backend API
                    │
                    ▼
       🗺️  Regional Filter (34 districts)
              │              │
              ▼              ▼
      🌳 ML Predictor   📏 Rule Scorer
      (predict_proba)   (pH+water+NPK+timing)
              │              │
              └──────┬───────┘
                     ▼
         ⚖️  Hybrid Re-ranker
       hybrid = 0.4·ml + 0.6·rule
                     │
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
  ☁️ Weather    🌐 Translator    🔊 gTTS
  (5-day)       (mr/hi/en+)    (audio)
      │              │              │
      └──────────────┴──────────────┘
                     ▼
      📊 Result — Traditional vs. Experimental
```

---

## 🔬 Model Performance

> Benchmarked on identical stratified 80/20 split + 5-fold CV — same data, same split, fair comparison.

| Model | Train Acc | Test Acc | CV Mean | CV Std |
|:---|:---:|:---:|:---:|:---:|
| 🏆 **Random Forest** | 100.00% | **99.55%** | **99.55%** | 0.32% |
| Decision Tree | 100.00% | 97.95% | 98.77% | 0.68% |
| SVM (RBF) | 98.58% | 98.41% | 98.36% | 0.44% |
| Naive Bayes | 99.49% | 99.55% | 99.45% | **0.18%** ⭐ |

**Verdict:** Random Forest wins on generalization — Decision Tree's perfect train score + weakest test score is a textbook overfitting tell.

---

## 🛠️ Tech Stack

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-EB6E4B?style=flat-square&logo=openweathermap&logoColor=white)

</div>

| Layer | Tools Used |
|---|---|
| 🧠 ML | scikit-learn (Random Forest), joblib, NumPy |
| ⚙️ Backend | Python 3, Flask |
| ☁️ Weather | OpenWeatherMap API |
| 🌐 Translation | deep_translator + hand-verified mr/hi/en dictionaries |
| 🔊 Voice | gTTS (text-to-speech), Web Speech API (input) |
| 🎨 Frontend | Hand-written HTML5, CSS3, vanilla JS — no framework |
| 📱 PWA | Web App Manifest + Service Worker |

---

## 📂 Project Structure

```
Mati-Mitra/
├── 🐍 app.py                     Flask routes, hybrid scoring, all advisory logic
├── 🤖 crop_model.pkl             Trained Random Forest model
├── 📊 Crop_recommendation.csv    Training dataset (2,200 rows, 22 classes)
├── 📁 templates/
│   ├── index.html                Landing page
│   ├── predict.html              Prediction form (Detailed + Simple Mode)
│   ├── result.html                Dual-track result page
│   ├── crops_list.html            Directory of all 22 crops
│   ├── crop_detail.html           Per-crop cultivation guide
│   └── schemes.html               Govt schemes + KVK finder
└── 📁 static/
    ├── audio_output.mp3          Generated result narration
    ├── manifest.json              PWA manifest
    ├── service-worker.js          PWA service worker
    └── icons/                     PWA icons
```

---

## 🚀 Getting Started

### 1️⃣ Clone & Install
```bash
git clone https://github.com/<your-username>/mati-mitra-crop-recommendation.git
cd mati-mitra-crop-recommendation
pip install flask joblib numpy requests deep_translator gTTS
```

### 2️⃣ Set Your API Key
> 🔐 Never hardcoded — read from an environment variable

```bash
# Windows
set OPENWEATHER_API_KEY=your_api_key_here

# macOS / Linux
export OPENWEATHER_API_KEY=your_api_key_here
```

### 3️⃣ Run
```bash
python app.py
```
Open **http://127.0.0.1:5000** 🎉

> 💡 No API key set? No problem — the app degrades gracefully. Weather shows a clear fallback message; crop, fertilizer, and rotation advice all still work perfectly.

---

## 🧪 Testing

✅ **10 live, end-to-end scenarios** across **10 real Maharashtra districts** — each targeting a distinct part of the system:

| District | Tested |
|---|---|
| Solapur, Ratnagiri, Kolhapur | Regional diversity |
| Nashik, Palghar | Honest low-confidence labelling |
| Pune | Waterlogging → rice rule |
| Jalgaon, Latur | In-season vs. out-of-season timing |
| Bhandara | Deliberately implausible input → plausibility warning |

Manual, scenario-based, screenshot-driven testing — no automated suite yet (documented as an open limitation, not hidden).

---

## ⚠️ Known Limitations

- 🚧 22-crop dataset vocabulary ceiling — jowar, bajra, sugarcane, soybean, onion, cashew are structurally out of reach
- 🚧 0.4/0.6 hybrid weights are reasoned-by-design, not grid-searched
- 🚧 No real-world field-outcome validation yet
- 🚧 `debug=True` — disable before any production deployment

## 🗺️ Roadmap

- [ ] Maharashtra-specific soil-testing dataset for retraining
- [ ] Crowd-sourced district-crop data from farmer feedback
- [ ] Empirical tuning of hybrid weights
- [ ] Farmer feedback loop (success/failure tracking)
- [ ] Leaf-photo pest & disease detection (CNN)
- [ ] Yield prediction + Agmarknet price integration
- [ ] Score explainability breakdown

---


<div align="center">

### 🌱 Built to give every farmer a scientifically sound, understandable answer.

</div>
