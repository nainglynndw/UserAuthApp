# User Authentication App - Bare React Native

A **production-grade** React Native authentication app built with **bare React Native CLI**

## 🏗️ Architecture

### ✅ Production Standards
- **Bare React Native CLI** - No Expo
- **No Barrel Files** - Direct imports for better tree-shaking
- **Separated Styles** - Each component has `.styles.ts` file
- **Utils Layer** - Business logic separated from UI
- **Custom Hooks** - Logic separated from presentation
- **One Component Per File** - Single responsibility principle
- **TypeScript** - Full type safety

### 📁 Structure
```
src/
├── utils/              # Pure business logic
│   ├── validation.ts
│   ├── storage.ts
│   └── auth.ts
├── components/         # Reusable UI (no barrel files)
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.styles.ts
│   └── Input/
│       ├── Input.tsx
│       └── Input.styles.ts
├── screens/            # Screen components with hooks
│   ├── LoginScreen/
│   │   ├── LoginScreen.tsx
│   │   ├── LoginScreen.styles.ts
│   │   └── useLoginScreen.ts
│   ├── SignupScreen/
│   │   ├── SignupScreen.tsx
│   │   ├── SignupScreen.styles.ts
│   │   └── useSignupScreen.ts
│   └── HomeScreen/
│       ├── HomeScreen.tsx
│       └── HomeScreen.styles.ts
├── navigation/
│   ├── types.ts
│   └── navigators/     # One navigator per file
│       ├── AuthNavigator.tsx
│       ├── AppNavigator.tsx
│       └── RootNavigator.tsx
├── context/
│   └── AuthContext.tsx
├── constants/
│   └── theme.ts
└── types/
    └── index.ts
```

## 🚀 Setup

### Prerequisites
- Node.js 18+
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS dependencies)

### Installation

```bash
# Install dependencies
npm install

# iOS setup
cd ios
bundle install
bundle exec pod install
cd ..

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## ✨ Features

- ✅ Login with email/password
- ✅ Signup with validation
- ✅ AsyncStorage persistence
- ✅ Password visibility toggle
- ✅ Form validation
- ✅ Loading states
- ✅ Modern dark theme UI

## 🧪 Test Credentials

- **Email:** john@example.com
- **Password:** password123

### Separated Concerns
- ✅ Utils for business logic
- ✅ Hooks for component logic
- ✅ Styles in separate files
- ✅ One component per file

## 📦 Dependencies

**Core:**
- `react-native` 0.83.1
- `typescript`

**Navigation:**
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `react-native-screens`
- `react-native-safe-area-context`

**Storage:**
- `@react-native-async-storage/async-storage`

**Icons:**
- `react-native-vector-icons`

## 🔐 Security

This is a demo with mock authentication. For production:
- Replace `utils/auth.ts` with real API
- Use JWT/OAuth
- Never store passwords client-side
- Implement proper session management

## 📊 Git

```bash
git add .
git commit -m "Production-ready bare React Native auth app"
git remote add origin <your-repo>
git push -u origin main
```

---

**Built with:** Bare React Native CLI 0.83.1, TypeScript, React Navigation, AsyncStorage
