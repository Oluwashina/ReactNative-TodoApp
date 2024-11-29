# React Native Todo App

A simple and intuitive **Todo Application** built using **React Native**, designed to manage daily tasks efficiently. This application showcases CRUD operations (Create, Read, Update, Delete) for managing tasks, providing a seamless user experience on mobile devices.

---

## Features

- **Add Tasks**: Easily create new tasks with a simple UI.
- **Mark Tasks**: Mark tasks as completed or uncompleted.
- **Edit Tasks**: Update task details as needed.
- **Delete Tasks**: Remove tasks from the list.
- **Task Categorization**: Organize tasks by categories or priority (optional extension).
- **Responsive Design**: Optimized for mobile devices with a clean and modern interface.

---

## Technologies Used

- **React Native**: A JavaScript framework for building cross-platform mobile applications.
- **Expo**: For simplifying the development and testing of the app.
- **State Management**: Utilizes React's built-in hooks (`useState` and `useEffect`) or external libraries like Redux (if used).
- **Async Storage**: For persisting data locally (if implemented).

---

## Prerequisites

Ensure you have the following installed before proceeding:

1. **Node.js**: Download and install from [Node.js official site](https://nodejs.org/).
2. **Expo CLI**: Install globally using:
   ```bash
   npm install -g expo-cli
   ```
3. **React Native CLI**: (Optional) Install if you're running the app outside Expo.
4. **Git**: For cloning the repository.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Oluwashina/ReactNative-TodoApp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ReactNative-TodoApp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Application

### Using Expo
1. Start the Expo development server:
   ```bash
   expo start
   ```
2. Use the Expo Go app on your mobile device (available on iOS and Android) or a simulator/emulator to scan the QR code and run the app.

### Using React Native CLI
1. Run the application for Android:
   ```bash
   npx react-native run-android
   ```
2. Run the application for iOS:
   ```bash
   npx react-native run-ios
   ```

---

## Folder Structure

- `components/`: Reusable UI components (e.g., TodoItem, AddTaskModal).
- `screens/`: Contains main application screens (e.g., Home, CompletedTasks).
- `utils/`: Utility functions (e.g., task filtering, date formatting).
- `assets/`: Images and icons used in the application.
- `App.js`: Entry point of the application.

---

## Future Improvements

- **Dark Mode**: Add a dark mode for better accessibility.
- **Reminders/Notifications**: Implement task reminders using `react-native-push-notifications`.
- **Database Integration**: Connect the app to a backend or use a local database like Realm/SQLite.
- **Multi-Language Support**: Add localization for a global audience.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on the main repository.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Developed by **Oluwashina Kure-Ojo**.

- GitHub: [@Oluwashina](https://github.com/Oluwashina)
- Portfolio: [Oluwashina.com](https://oluwashina.com)
- LinkedIn: [Oluwashina Kure-Ojo](https://www.linkedin.com/in/oluwashina-kure-ojo/)
