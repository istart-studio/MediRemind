# MediRemind

<div align="center">

![MediRemind Logo](https://via.placeholder.com/150x150.png?text=MediRemind)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/mediremind.svg)](https://github.com/yourusername/mediremind/issues)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/mediremind.svg)](https://github.com/yourusername/mediremind/stargazers)

**A mobile application for managing personal medication schedules and health reminders**

English | [简体中文](README.md)

</div>

## 📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Version History](#version-history)
- [FAQ](#faq)
- [Maintainers](#maintainers)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## 🚀 Introduction

MediRemind is a cross-platform mobile application based on React Native, designed to help users manage their daily medication schedules, record medication usage, and provide comprehensive health reminder features. The app not only supports adding medication information, setting medication times, and viewing medication records, but also includes new health reminder features to help users develop good lifestyle habits.

Whether managing medications and health habits for yourself or family members, MediRemind helps you accurately record medication usage, avoid missed doses or duplicate medications, and promotes healthy lifestyle through intelligent reminder systems, improving medication safety and quality of life.

### Why Choose MediRemind?

- 📱 **Cross-platform Support**: Works on both iOS and Android platforms
- 🔔 **Smart Reminders**: Timely reminders for medications and health activities based on set schedules
- 🏥 **Comprehensive Health Management**: Integrated medication management and health reminder features
- 📊 **Data Visualization**: Intuitive display of medication records and statistics
- 🔒 **Privacy Protection**: All data stored locally to protect user privacy
- 🌙 **Dark Mode**: Supports both light and dark themes to reduce eye strain at night
- 🎨 **Beautiful Interface**: Modern design with animation effects and personalized themes

## ✨ Features

### 💊 Medication Information Management
- Add, edit, and delete medication information
- Support for setting medication name, dosage, administration method, and other details
- Option to add medication images for easy identification

### 📅 Medication Schedule Setting
- Set medication times for each drug (morning, noon, evening)
- Support for custom medication frequency (daily, every other day, weekly, etc.)
- Set medication start and end dates

### 📝 Medication Record Tracking
- Record each medication administration
- View historical medication records
- Track medication adherence statistics

### 🔔 Medication Reminders
- Remind users to take medications on time based on set schedules
- Support multiple reminder methods (notifications, sounds, vibrations)
- Option to set repeated reminders

### 🏃‍♀️ Health Reminder Assistant ⭐ **New Feature**
Brand new health reminder features to help you develop good lifestyle habits:

- **🪑 Sedentary Reminder**
  - Default 60-minute interval
  - Reminds you to get up and move to prevent sedentary harm
  - Enhanced experience with animation effects

- **💧 Water Reminder**
  - Default 30-minute interval
  - Timely water intake reminders to maintain body health
  - Warm reminder messages

- **👀 Eye Care Reminder**
  - Default 20-minute interval
  - Reminds you to rest your eyes and protect vision
  - Suggests looking at distant green plants

- **🤸‍♀️ Stretch Reminder**
  - Default 45-minute interval
  - Reminds you to do stretching exercises and move your body
  - Prevents muscle stiffness

- **💊 Medication Reminder**
  - Default 120-minute interval
  - Reminds you to take medication on time according to doctor's orders
  - Complements the main medication function

#### Health Reminder Special Features:
- **Personalized Settings**: Customizable reminder intervals from 5-120 minutes
- **Colorful Themes**: Each reminder type has a unique color theme
- **Precise Timing**: Countdown display accurate to the second
- **Smart Interaction**: Option to "remind again" after reminder ends
- **Visual Effects**: Integrated Batman animation for added fun
- **Cross-platform Notifications**: Supports local notifications and vibrations on iOS and Android

## 📱 Screenshots

<div align="center">
  <img src="https://via.placeholder.com/200x400.png?text=Medication+List" width="200" alt="Medication List" />
  <img src="https://via.placeholder.com/200x400.png?text=Add+Medication" width="200" alt="Add Medication" />
  <img src="https://via.placeholder.com/200x400.png?text=Medication+Records" width="200" alt="Medication Records" />
  <img src="https://via.placeholder.com/200x400.png?text=Health+Reminders" width="200" alt="Health Reminders" />
</div>

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure your system has the following software installed:

- Node.js (>= 10.0.0)
- npm (>= 6.0.0) or yarn (>= 1.0.0)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/mediremind.git
cd mediremind/matrix
```

2. **Install dependencies**

```bash
npm install
# or using yarn
yarn install
```

3. **Run the application**

```bash
# iOS
react-native run-ios
# Android
react-native run-android
```

## 📖 Usage

### Adding a New Medication

1. Click the "Add Medication" button in the bottom navigation bar
2. Fill in medication name, dosage, and other information
3. Set medication time and frequency
4. Click the "Save" button to complete the addition

### Recording Medication Usage

1. View medications scheduled for today on the "Medication Schedule" page
2. Click the "Taken" button for the corresponding medication after taking it
3. The system will automatically record the medication time

### Viewing Medication Records

1. Click the "Medication Records" button in the bottom navigation bar
2. Select a date range to view historical records
3. View medication adherence statistics

### Using Health Reminders ⭐ **New Feature**

1. Click the "Health Reminders" button in the bottom navigation bar
2. Select the desired reminder type (sedentary, water, eye care, stretch, medication)
3. Set the reminder interval (5-120 minutes available)
4. Click the "Start Reminder" button to activate the timer
5. Receive notifications and vibration alerts when time is up
6. Click the "Stop Reminder" button anytime to pause the timer

## 🛠️ Tech Stack

- [React Native](https://reactnative.dev/) (0.55.4) - Cross-platform mobile application development framework
- [React Navigation](https://reactnavigation.org/) - Page navigation
- [React Native UI Kitten](https://akveo.github.io/react-native-ui-kitten/) - UI component library
- [Teaset](https://github.com/rilyu/teaset) - UI component library
- [ReactNativeART](https://github.com/react-native-art/art) - Animation and graphics rendering
- [Art](https://github.com/sebmarkbage/art) - SVG path animation support
- [Jest](https://jestjs.io/) - Testing framework

## 📁 Project Structure

```
matrix/
├── src/
│   ├── asserts/        # Static resources (images, fonts, etc.)
│   ├── component/      # Reusable components
│   │   └── switch/     # Switch component
│   ├── config/         # Configuration files
│   ├── framework/      # Framework-related tools
│   │   ├── charset/    # Character set tools
│   │   ├── scale.js    # Screen adaptation tools
│   │   └── storage/    # Local storage tools
│   ├── model/          # Data models
│   ├── screen/         # Application pages
│   │   ├── addDrugScreen.js      # Add medication page
│   │   ├── drugListScreen.js     # Medication list page
│   │   ├── takeDrugScreen.js     # Medication records page
│   │   └── timerScreen.js        # Health reminders page ⭐ New
│   └── service/        # Business logic services
├── App.js              # Application entry point
└── ...
```

## 🗺️ Roadmap

### Coming Soon
- [ ] Health data statistics charts
- [ ] Reminder history viewing
- [ ] Custom reminder sounds
- [ ] Health habit check-in functionality

### Long-term Plans
- [ ] Multi-language support
- [ ] Data backup and recovery functionality
- [ ] Integration with medication information database
- [ ] Drug interaction checking
- [ ] Medication statistics report export
- [ ] Family sharing functionality
- [ ] Integration with healthcare devices
- [ ] AI health recommendation features

Check out [open issues](https://github.com/yourusername/mediremind/issues) for more feature requests and known issues.

## 🤝 Contributing

We welcome and appreciate contributions of any kind! If you want to contribute to the project, please follow these steps:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For more details, please check [CONTRIBUTING.md](CONTRIBUTING.md).

## 📋 Version History

### v0.2.0 (Latest) ⭐
- Added Health Reminder Assistant feature
- Support for five reminder types: sedentary, water, eye care, stretch, and medication
- Integrated Batman animation effects
- Optimized user interface design
- Enhanced cross-platform notification support

### v0.1.0
- Basic medication management functionality
- Medication information addition and editing
- Medication record tracking
- Basic reminder functionality

For detailed information about all versions, please refer to [CHANGELOG.md](CHANGELOG.md).

## ❓ FAQ

### Q: Does the app support offline use?
A: Yes, MediRemind fully supports offline use, with all data stored on the local device.

### Q: Does the health reminder feature consume a lot of battery?
A: No. The health reminder feature uses an optimized timer mechanism with minimal battery consumption.

### Q: How can I back up my medication data?
A: Currently, the data backup feature is under development. In future versions, we will provide data export and cloud backup functionality.

### Q: What languages does the app support?
A: Currently, the app only supports Chinese. We plan to add support for more languages in future versions.

### Q: Can I set multiple health reminders simultaneously?
A: The current version supports running one reminder at a time. We plan to support multiple simultaneous reminders in future versions.

### Q: How do I customize reminder times?
A: On the health reminders page, you can set custom intervals from 5-120 minutes using the time picker.

## 👨‍💻 Maintainers

* [coolqidedd](https://github.com/coolqidedd) - **Project creator and main maintainer**

Check [CONTRIBUTORS.md](CONTRIBUTORS.md) for a list of all contributors.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev/) - Providing a cross-platform mobile application development framework
- [React Navigation](https://reactnavigation.org/) - Providing page navigation functionality
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) - Providing UI components
- [ReactNativeART](https://github.com/react-native-art/art) - Providing animation rendering support
- [All contributors](CONTRIBUTORS.md) - Developers who contributed to the project

---

<div align="center">
  <sub>Built with ❤️ by the MediRemind team.</sub>
</div> 