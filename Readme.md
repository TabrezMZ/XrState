🏡 Real Estate Explorer App
A cross-platform mobile and web app built with Expo + React Native + NativeWind that allows users to explore property listings, filter them, view detailed pages, and contact agents — all with beautiful, responsive UI.

Live Web App: [(https://xrstate.netlify.app)]/ (replace with your Netlify link)

📸 Screenshots
(Add your screenshots here)

✨ Features
🔍 Browse and search property listings

🎯 Advanced filtering (location, price, bedrooms, etc.)

🧾 Pixel-perfect Property Detail screen with tabs

📨 Contact Agent form with validation

💚 Like/favorite properties (persisted)

🔗 Cross-platform support (iOS, Android, Web)

🧱 Responsive design with NativeWind (Tailwind for RN)

🔄 Global state via Context API

🌐 Deployed on Netlify for web

🛠 Tech Stack
React Native + Expo

NativeWind (Tailwind CSS for RN)

TypeScript

React Navigation

React Hook Form

React Native Modal

AsyncStorage (for likes)

Deployed with Netlify (web)

📦 Project Structure

src/
│
├── components/         # Reusable UI components
│   ├── Header.tsx
│   ├── PropertyCard.tsx
│   ├── FilterChip.tsx
│   ├── ContactAgentModal.tsx
│   └── ScreenWrapper.tsx
│
├── screens/            # App screens
│   ├── HomeScreen.tsx
│   ├── FilterScreen.tsx
│   ├── PropertyDetailScreen.tsx
│   └── ContactScreen.tsx
│
├── navigation/         # Navigation config
│   └── AppNavigator.tsx
│
├── context/            # Global state
│   └── PropertyContext.tsx
│
├── constants/          # Colors, icons, dummy data
│   └── index.ts
│
├── types/              # TypeScript types
│   └── index.ts
│
└── assets/             # Images, icons
🚀 Getting Started
Clone this repo


git clone https://github.com/your-username/real-estate-expo-app.git
cd real-estate-expo-app
Install dependencies


npm install
Start the development server


npm run start
# or for specific platforms
npm run ios
npm run android
npm run web
🧱 NativeWind Setup (Tailwind for RN)
Already configured with:

tailwind.config.js:


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
};
ClassName syntax is used throughout for styling.

🧠 Context Provider
Global state managed with Context API:

likedProperties[]

filterState

toggleLike()

src/context/PropertyContext.tsx

🌐 Web Deployment (Netlify)
Build for web

npm run build:web
Deploy web-build/ folder on Netlify

Either connect GitHub repo

Or manually upload web-build to Netlify

Optional: Add netlify.toml for routing:

netlify.toml


[build]
  publish = "web-build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
✅ To Do / Improvements
🔐 Add user login + saved filters

🧭 Map integration (e.g. Google Maps)

📩 Send inquiries via email (EmailJS or backend)

🌙 Light/Dark theme toggle
