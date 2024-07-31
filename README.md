Overview:
This is a mobile application built with React Native and ExpoGo, designed to help users manage their shopping lists efficiently. The app allows users to create, update, and view shopping lists. It supports offline functionality (AsyncStorage), ensuring that users can access their lists even without an internet connection. Firebase Firestore is used for backend services, providing real-time data synchronization and offline data persistence.

Key Features:

1. Anonymous Sign-In: Users can sign in anonymously, allowing them to start using the app without any hassle.
2. Create Lists: Users can create new shopping lists by providing a list name and adding items.
3. View Lists: All the user’s shopping lists are displayed in a scrollable list, showing the list name and items.
4. Local Storage: Shopping lists are cached locally using AsyncStorage, enabling users to access their lists even when offline.
5. Network Awareness: The app detects network connectivity changes and adjusts its functionality accordingly, syncing data with Firestore when online and using local storage when offline.
6. Firestore Integration: Real-time synchronization with Firebase Firestore ensures that users’ data is up-to-date across all devices.

Expo Link: https://expo.dev/preview/update?message=readme%2C%20publishing&updateRuntimeVersion=exposdk%3A51.0.0&createdAt=2024-07-14T01%3A16%3A18.082Z&slug=exp&projectId=f7881931-7f6f-4af7-8c09-7b60c5813098&group=67ddf190-7ac9-4046-86be-bbb101d998dc

Technologies Used:

1. React Native: For building the mobile application.
2. Expo: For development, build, and deployment processes.
3. React Navigation: For managing navigation between screens.
4. Firebase: For backend services including Firestore for data storage and Firebase Authentication for user authentication.
5. React Native Gifted Chat: For providing a chat interface.
6. React Native AsyncStorage: For local storage of chat data.
7. Expo Updates: For handling over-the-air updates to the application.
8. Expo Status Bar: For customizing the status bar appearance.
9. React Native Dotenv: For managing environment variables.
10. @react-native-community/netinfo: For handling network connectivity status.
11. React Native Safe Area Context: For handling safe area insets for various devices.
12. React Native Screens: For optimizing screen transitions and performance.
13. Metro React Native Babel Preset: For Babel configuration specific to React Native.
14. @babel/core: For Babel transpilation.


Setup Instructions:

Prepare Node.js
   2. Install Node by running: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
   3. Load ‘nvm’ by running: export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   4. Verify installation by running: nvm –version
   5. Install compatible version for use with Expo by running:
   6. nvm install 16.19.0
   7. nvm use 16.19.0
   8. nvm alias default 16.19.0

Prepare Expo
   1. Install Expo CLI by running: npm install -g expo-cli
   2. Download “Expo Go App” on smartphone
   3. Create online Expo account
   4. To use Expo CLI, login via the terminal by running: expo login
   5. To check current login, run: expo whoami

Create Project
   1. In terminal, navigate to folder of dev projects and run: npx create-expo-app {title of project} –-template
   2. Choose blank template when prompted
   3. After initialization complete, navigate to project by running: cd {title of project}
   4. Start Metro Bundler by running: npm start (or expo start)
   5. Connect with Expo Go App either via terminal or via phone
   6. Metro Bundler automatically updates Expo Go App as save files in VSC

Install React-Navigation
   1. Install by running: npm install --save @react-navigation/native @react-navigation/native-stack
   2. Install necessary dependencies by running: expo install react-native-screens react-native-safe-area-context

Android Studio (emulator)
   1. Download and install Android Studio
   2. If using Mac, move to Apps folder
   3. Set up Android Emulator
   4. Follow install instructions EXCEPT "Select Components to Install:" select "Android Virtual Device"
   5. Configure Android Studio
   6. Project Option - More Actions - select "SDK Manager"
   7. Follow prompts
   8. Connecting SDK to the terminal
   9. Run: nano ~/.zshrc
   10. Enter: export ANDROID_SDK=/Users/myuser/Library/Android/sdk
   export PATH=$ANDROID_SDK/platform-tools:$PATH
   (be sure to change "myuser" to your path)
   11. Press 'CTRL + O' to write the changes; 'Enter' to confirm the file name; 'CTRL + X' to exit nano
   12. Apply changes by running: source ~/.zshrc
   13. Verify it was configured by running: echo $ANDROID_SDK
   14. To check path, run: echo $PATH
      
Setup Virtual Device Manager
   1. Project Option - More Actions - select "Virtual Device Manager"
   2. Choose any with a Google Play icon
   3. Make sure system image uses same API number as in setup (should be recommended)
   4. To get Expo Go on virtual device, in Metro Bundler terminal, run: a
   5. Xcode for MacOS
   6. Open by running: open -a Simulator
   7. In Metro Bundler terminal, run: i
   8. Only have one simulator open at a time.

Firestore (via Firebase)
   1. Create a new project in Google Firebase
   2. Disable Google Analytics
   3. Build - Firestore Database
   4. Start in Production Mode
   5. Rules tab: change "allow read, write: if false;" to "allow read, write: if true;"
   6. Enable the anonymous sign-in method (Build - Authentication - Get Started - SignInMethod - Anonymous)
   7. No need to actually create a collection
   8. Install Firestore by running: npm install firebase@10.3.1 --save
   9. Configure Firestore database to Chat
   10. Project Settings - "</>" (Firestore for Web) - Register 11. Copy the const firebaseConifg... into App.js
   11. Make sure to add firebase config code into .env file
   1. Set up storage (Build - Storage - Get Started - Next - Done)
   13. Rules tab: change "allow read, write: if false;" to "allow read, write: if true;" - Publish

Local Storage (via React AsyncStorage)
   1. Run: expo install @react-native-async-storage/async-storage
   2. Then code accordingly

Publish
   1. Run: expo publish

EAS Publishing if Expo CLI deprecated
   1. Run: npm install -g eas-cli
   2. Run: eas login
   3. Run: eas update:configure
   4. To build, run: eas build --platform all
   5. To update, run: eas update

Github:
To create new repo:

1. From project directory in terminal run: git init
2. Run git commit -m "first commit"
3. Run git branch -M main
4. From GH page, go through process of adding new repo, then use https it gives and run: git remote add origin https://github.com/leanneduyck/lists.git
5. git push -u origin main

To push:

6. Run: git add .
7. Run: git commit -m "Your commit message"
8. Run: git push
