# MediRemind

<div align="center">

![MediRemind Logo](https://via.placeholder.com/150x150.png?text=MediRemind)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/mediremind.svg)](https://github.com/yourusername/mediremind/issues)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/mediremind.svg)](https://github.com/yourusername/mediremind/stargazers)

**A mobile application for managing personal medication schedules**

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

MediRemind is a cross-platform mobile application based on React Native, designed to help users manage their daily medication schedules, record medication usage, and provide medication reminders. The app supports adding medication information, setting medication times, viewing medication records, and more.

Whether managing medications for yourself or family members, MediRemind helps you accurately record medication usage, avoid missed doses or duplicate medications, and improve medication safety and compliance.

### Why Choose MediRemind?

- 📱 **Cross-platform Support**: Works on both iOS and Android platforms
- 🔔 **Smart Reminders**: Timely medication reminders based on set schedules
- 📊 **Data Visualization**: Intuitive display of medication records and statistics
- 🔒 **Privacy Protection**: All data stored locally to protect user privacy
- 🌙 **Dark Mode**: Supports both light and dark themes to reduce eye strain at night

## ✨ Features

- **Medication Information Management**
  - Add, edit, and delete medication information
  - Support for setting medication name, dosage, administration method, and other details
  - Option to add medication images for easy identification

- **Medication Schedule Setting**
  - Set medication times for each drug (morning, noon, evening)
  - Support for custom medication frequency (daily, every other day, weekly, etc.)
  - Set medication start and end dates

- **Medication Record Tracking**
  - Record each medication administration
  - View historical medication records
  - Track medication adherence statistics

- **Medication Reminders**
  - Remind users to take medications on time based on set schedules
  - Support multiple reminder methods (notifications, sounds, vibrations)
  - Option to set repeated reminders

## 📱 Screenshots

<div align="center">
  <img src="https://via.placeholder.com/200x400.png?text=Medication+List" width="200" alt="Medication List" />
  <img src="https://via.placeholder.com/200x400.png?text=Add+Medication" width="200" alt="Add Medication" />
  <img src="https://via.placeholder.com/200x400.png?text=Medication+Records" width="200" alt="Medication Records" />
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

## 🛠️ Tech Stack

- [React Native](https://reactnative.dev/) (0.55.4) - Cross-platform mobile application development framework
- [React Navigation](https://reactnavigation.org/) - Page navigation
- [React Native UI Kitten](https://akveo.github.io/react-native-ui-kitten/) - UI component library
- [Teaset](https://github.com/rilyu/teaset) - UI component library
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
│   └── service/        # Business logic services
├── App.js              # Application entry point
└── ...
```

## 🗺️ Roadmap

- [ ] Multi-language support
- [ ] Data backup and recovery functionality
- [ ] Integration with medication information database
- [ ] Drug interaction checking
- [ ] Medication statistics report export
- [ ] Family sharing functionality
- [ ] Integration with healthcare devices

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

For detailed information about all versions, please refer to [CHANGELOG.md](CHANGELOG.md).

## ❓ FAQ

### Q: Does the app support offline use?
A: Yes, MediRemind fully supports offline use, with all data stored on the local device.

### Q: How can I back up my medication data?
A: Currently, the data backup feature is under development. In future versions, we will provide data export and cloud backup functionality.

### Q: What languages does the app support?
A: Currently, the app only supports Chinese. We plan to add support for more languages in future versions.

### Q: How do I set up repeated medication reminders?
A: When adding a medication, you can set the medication frequency (such as daily, every other day, weekly, etc.) and reminder time.

## 👨‍💻 Maintainers

* [coolqidedd](https://github.com/coolqidedd) - **Project creator and main maintainer**

Check [CONTRIBUTORS.md](CONTRIBUTORS.md) for a list of all contributors.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev/) - Providing a cross-platform mobile application development framework
- [React Navigation](https://reactnavigation.org/) - Providing page navigation functionality
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) - Providing UI components
- [All contributors](CONTRIBUTORS.md) - Developers who contributed to the project

---

<div align="center">
  <sub>Built with ❤️ by the MediRemind team.</sub>
</div> 