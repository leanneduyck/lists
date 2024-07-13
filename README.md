Overview:
The Shopping Lists App is a mobile application built with React Native and Expo, designed to help users manage their shopping lists efficiently. The app allows users to create, update, and view shopping lists. It supports offline functionality, ensuring that users can access their lists even without an internet connection. Firebase Firestore is used for backend services, providing real-time data synchronization and offline data persistence.

Key Features:

1. Anonymous Sign-In: Users can sign in anonymously, allowing them to start using the app without any hassle.
2. Create Lists: Users can create new shopping lists by providing a list name and adding items.
3. View Lists: All the user’s shopping lists are displayed in a scrollable list, showing the list name and items.
4. Local Storage: Shopping lists are cached locally using AsyncStorage, enabling users to access their lists even when offline.
5. Network Awareness: The app detects network connectivity changes and adjusts its functionality accordingly, syncing data with Firestore when online and using local storage when offline.
6. Firestore Integration: Real-time synchronization with Firebase Firestore ensures that users’ data is up-to-date across all devices.

Website:

Technologies Used:

1. React Native: For building the mobile application.
2. Expo: For development, build, and deployment processes.
3. React Navigation: For managing navigation between screens.
4. Firebase: For backend services including Firestore for data storage and Firebase Authentication for user authentication.
5. React Native Gifted Chat: For providing a chat interface.
6. React AsyncStorage: For local storage of chat data.

Setup Instructions:

1. Prepare Node.js
   a. Install Node by running: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
   b. Load ‘nvm’ by running: export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   c. Verify installation by running: nvm –version
   d. Install compatible version for use with Expo by running:
   i. nvm install 16.19.0
   ii. nvm use 16.19.0
   iii. nvm alias default 16.19.0

2. Prepare Expo
   a. Install Expo CLI by running: npm install -g expo-cli
   b. Download “Expo Go App” on smartphone
   c. Create online Expo account
   d. To use Expo CLI, login via the terminal by running: expo login
   i. To check current login, run: expo whoami

3. Create Project
   a. In terminal, navigate to folder of dev projects and run: npx create-expo-app {title of project} –-template
   i. Choose blank template when prompted
   b. After initialization complete, navigate to project by running: cd {title of project}
   c. Start Metro Bundler by running: npm start (or expo start)
   i. Connect with Expo Go App either via terminal or via phone
   ii. Metro Bundler automatically updates Expo Go App as save files in VSC

4. Install React-Navigation
   a. Install by running: npm install --save @react-navigation/native @react-navigation/native-stack
   b. Install necessary dependencies by running: expo install react-native-screens react-native-safe-area-context

5. Android Studio (emulator)
   a. Download and install Android Studio
   i. If using Mac, move to Apps folder
   b. Set up Android Emulator
   i. Follow install instructions EXCEPT "Select Components to Install:" select "Android Virtual Device"
   c. Configure Android Studio
   i. Project Option - More Actions - select "SDK Manager"
   A. Follow prompts
   ii. Connecting SDK to the terminal
   A. Run: nano ~/.zshrc
   B. Enter: export ANDROID_SDK=/Users/myuser/Library/Android/sdk
   export PATH=$ANDROID_SDK/platform-tools:$PATH
   (be sure to change "myuser" to your path)
   C. Press 'CTRL + O' to write the changes; 'Enter' to confirm the file name; 'CTRL + X' to exit nano
   D. Apply changes by running: source ~/.zshrc
   E. Verify it was configured by running: echo $ANDROID_SDK
   F. To check path, run: echo $PATH
   d. Setup Virtual Device Manager
   i. Project Option - More Actions - select "Virtual Device Manager"
   A. Choose any with a Google Play icon
   B. Make sure system image uses same API number as in setup (should be recommended)
   ii. To get Expo Go on virtual device, in Metro Bundler terminal, run: a
   ii. Xcode for MacOS
   A. Open by running: open -a Simulator
   B. In Metro Bundler terminal, run: i
   iii. Only have one simulator open at a time.

6. Firestore (via Firebase)
   a. Create a new project in Google Firebase
   i. Disable Google Analytics
   ii. Build - Firestore Database
   iii. Start in Production Mode
   iv. Rules tab: change "allow read, write: if false;" to "allow read, write: if true;"
   v. Enable the anonymous sign-in method (Build - Authentication - Get Started - SignInMethod - Anonymous)
   vi. No need to actually create a collection
   b. Install Firestore by running: npm install firebase@10.3.1 --save
   c. Configure Firestore database to Chat
   i. Project Settings - "</>" (Firestore for Web) - Register 11. Copy the const firebaseConifg... into App.js
   d. Make sure to add firebase config code into .env file
   e. Set up storage (Build - Storage - Get Started - Next - Done)
   i. Rules tab: change "allow read, write: if false;" to "allow read, write: if true;" - Publish

7. Local Storage (via React AsyncStorage)
   a. Run: expo install @react-native-async-storage/async-storage
   b. Then code accordingly

8. Publish
   a. Run: expo publish

9. EAS Publishing if Expo CLI deprecated
   a. Run: npm install -g eas-cli
   b. Run: eas login
   c. Run: eas update:configure
   d. To build, run: eas build --platform all
   e. To update, run: eas update

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
