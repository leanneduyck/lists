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

1. Prepare Node.js
   2. Install Node by running: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
   3. Load ‘nvm’ by running: export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   4. Verify installation by running: nvm –version
   5. Install compatible version for use with Expo by running:
   6. nvm install 16.19.0
   7. nvm use 16.19.0
   8. nvm alias default 16.19.0

9. Prepare Expo
   10. Install Expo CLI by running: npm install -g expo-cli
   11. Download “Expo Go App” on smartphone
   12. Create online Expo account
   13. To use Expo CLI, login via the terminal by running: expo login
   14. To check current login, run: expo whoami

15. Create Project
   16. In terminal, navigate to folder of dev projects and run: npx create-expo-app {title of project} –-template
   17. Choose blank template when prompted
   18. After initialization complete, navigate to project by running: cd {title of project}
   19. Start Metro Bundler by running: npm start (or expo start)
   20. Connect with Expo Go App either via terminal or via phone
   21. Metro Bundler automatically updates Expo Go App as save files in VSC

22. Install React-Navigation
   23. Install by running: npm install --save @react-navigation/native @react-navigation/native-stack
   24. Install necessary dependencies by running: expo install react-native-screens react-native-safe-area-context

25. Android Studio (emulator)
   26. Download and install Android Studio
   27. If using Mac, move to Apps folder
   28. Set up Android Emulator
   29. Follow install instructions EXCEPT "Select Components to Install:" select "Android Virtual Device"
   30. Configure Android Studio
   31. Project Option - More Actions - select "SDK Manager"
   32. Follow prompts
   33. Connecting SDK to the terminal
   34. Run: nano ~/.zshrc
   35. Enter: export ANDROID_SDK=/Users/myuser/Library/Android/sdk
   export PATH=$ANDROID_SDK/platform-tools:$PATH
   (be sure to change "myuser" to your path)
   36. Press 'CTRL + O' to write the changes; 'Enter' to confirm the file name; 'CTRL + X' to exit nano
   37. Apply changes by running: source ~/.zshrc
   38. Verify it was configured by running: echo $ANDROID_SDK
   39. To check path, run: echo $PATH
   40. Setup Virtual Device Manager
   41. Project Option - More Actions - select "Virtual Device Manager"
   42. Choose any with a Google Play icon
   43. Make sure system image uses same API number as in setup (should be recommended)
   44. To get Expo Go on virtual device, in Metro Bundler terminal, run: a
   45. Xcode for MacOS
   46. Open by running: open -a Simulator
   47. In Metro Bundler terminal, run: i
   48. Only have one simulator open at a time.

49. Firestore (via Firebase)
   50. Create a new project in Google Firebase
   51. Disable Google Analytics
   52. Build - Firestore Database
   53. Start in Production Mode
   54. Rules tab: change "allow read, write: if false;" to "allow read, write: if true;"
   55. Enable the anonymous sign-in method (Build - Authentication - Get Started - SignInMethod - Anonymous)
   56. No need to actually create a collection
   57. Install Firestore by running: npm install firebase@10.3.1 --save
   58. Configure Firestore database to Chat
   59. Project Settings - "</>" (Firestore for Web) - Register 11. Copy the const firebaseConifg... into App.js
   60. Make sure to add firebase config code into .env file
   61. Set up storage (Build - Storage - Get Started - Next - Done)
   62. Rules tab: change "allow read, write: if false;" to "allow read, write: if true;" - Publish

63. Local Storage (via React AsyncStorage)
   64. Run: expo install @react-native-async-storage/async-storage
   65. Then code accordingly

66. Publish
   67. Run: expo publish

68. EAS Publishing if Expo CLI deprecated
   69. Run: npm install -g eas-cli
   70. Run: eas login
   71. Run: eas update:configure
   72. To build, run: eas build --platform all
   73. To update, run: eas update

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
