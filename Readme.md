🏡 Real Estate Explorer App
A  mobile real estate listing app built with Expo + React Native + NativeWind. Explore, filter, and inquire about properties with clean UI and responsive design.

🌐 Live Demo: https://xrstate.netlify.app
📁 GitHub Repository: https://github.com/TabrezMZ/XrState

Replace the links above with your actual deployed site and GitHub repo.

✨ Features
🔍 Real-time property search and filtering

📄 Pixel-perfect detail screen with tabs

💬 Contact agent form with validation

💚 Favorite properties (like/unlike)

🎨 NativeWind for utility-first styling

🔄 Global state management with Context API

📱 Mobile-first and responsive design

🧱 Tech Stack
Layer	Stack
Framework	React Native via Expo (TypeScript)
Styling	NativeWind (Tailwind CSS for RN)
Navigation	React Navigation
Global State	Context API

📁 Project Structure

src/
│
├── components/             # Reusable UI components
│   ├── Header.tsx
│   ├── PropertyCard.tsx
│   ├── FilterChip.tsx
│   ├── ContactAgentModal.tsx
│   └── ScreenWrapper.tsx
│
├── screens/                # Screens used in navigation
│   ├── HomeScreen.tsx
│   ├── FilterScreen.tsx
│   ├── PropertyDetailScreen.tsx
│   └── ContactScreen.tsx
│
├── navigation/             # App navigation
│   └── AppNavigator.tsx
│
├── context/                # Global state provider
│   └── PropertyContext.tsx
│
├── constants/              # Static data & configuration
│   └── index.ts
│
├── types/                  # Custom TypeScript types
│   └── index.ts
│
└── assets/                 # Images, icons, fonts
🚀 Getting Started
Clone the project:


git clone https://github.com/TabrezMZ/XrState.git

cd XrState

Install dependencies:


npm install

Start the app:


npm run start

Run on web:


npm run web

Run on Android:


npm run android

Run on iOS:

npm run ios
