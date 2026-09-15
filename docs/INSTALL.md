# 📥 JONI Master Dashboard - Installation Guide

## Prerequisites

- Node.js v16+ 
- npm or yarn
- Git
- Firebase Account
- Google Cloud Account (Optional)

---

## Installation Steps

### Step 1: Clone Repository

```bash
git clone https://github.com/basitamaar7-creator/JONI-Master-Dashboard.git
cd JONI-Master-Dashboard
```

### Step 2: Install Dependencies

```bash
npm install
```

یا yarn استعمال کریں:
```bash
yarn install
```

### Step 3: Configure Environment Variables

```bash
cp .env.example .env
```

اب `.env` فائل میں اپنی API keys ڈالیں:

```env
# Firebase
REACT_APP_FIREBASE_API_KEY=abc123...
REACT_APP_FIREBASE_PROJECT_ID=joni-dashboard

# Google Cloud
REACT_APP_GOOGLE_CLOUD_API_KEY=xyz789...

# Social Media (Optional)
REACT_APP_FACEBOOK_APP_ID=...
# etc.
```

### Step 4: Start Application

```bash
npm start
```

اب براؤزر میں کھولیں: **http://localhost:3000**

---

## 📱 Multi-Device Installation

### Phone/Device 2 میں Install کریں:

```bash
# Clone کریں
git clone https://github.com/basitamaar7-creator/JONI-Master-Dashboard.git
cd JONI-Master-Dashboard

# Dependencies install کریں
npm install

# Start کریں
npm start
```

### Firebase Login:
- جب پوچھے تو اسی Firebase account سے login کریں
- Auto sync شروع ہو جایے گی
- سب devices پر same data ✅

---

## 🔧 Firebase Setup

### 1. Firebase Console جائیں:
https://console.firebase.google.com

### 2. نیا Project بنائیں:
- Project name: `JONI-Dashboard`
- Enable Google Analytics (Optional)

### 3. Enable Services:
- ✅ Realtime Database
- ✅ Cloud Firestore
- ✅ Authentication
- ✅ Cloud Storage

### 4. Web App Register کریں:
- Project Settings میں جائیں
- Web app add کریں
- Config copy کریں
- `.env` میں paste کریں

---

## 🔐 Security Rules (Firebase)

### Realtime Database Rules:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid",
        "todoList": {
          ".indexOn": ["created", "status"]
        },
        "settings": {
          ".validate": true
        }
      }
    }
  }
}
```

---

## ✅ Troubleshooting

### Issue: "Cannot find module"
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Firebase Connection Error
**Solution:**
- `.env` فائل check کریں
- API keys صحیح ہیں؟
- Firebase console میں project enable ہے؟

### Issue: Port 3000 already in use
**Solution:**
```bash
npm start -- --port 3001
```

---

## 🚀 Production Build

```bash
npm run build
```

یہ `build/` folder میں optimized files بنا دے گا۔

---

## 📞 Support

اگر کوئی مسئلہ ہو تو:
1. GitHub Issues میں report کریں
2. یا براہ راست contact کریں

---

**Installation Complete! Dashboard ready to use!** ✅
