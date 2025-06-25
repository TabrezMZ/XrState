🏡 Real Estate Explorer App
A cross-platform mobile and web app built with Expo + React Native + NativeWind that allows users to explore property listings, filter them, view detailed pages, and contact agents — all with beautiful, responsive UI.

Live Web App: [(https://xrstate.netlify.app)]/ (replace with your Netlify link)



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


git clone https://github.com/TabrezMZ/XrState.git

cd XrState

Install dependencies



npm install

Start the development server


npm run start

# or for specific platforms
npm run ios

npm run android

npm run web


