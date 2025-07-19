# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Fixed

## [0.4.0] - 2025-07-19

### Added
- Added bootstrap-icons to the application for enhanced UI
- New modal system to handle authentication transitions and user feedback
- Redesigned credentials components with modern card layouts for forms and buttons

### Changed
- Refactored ProtectedRoute component to automatically redirect unauthenticated users to `/auth` instead of showing unauthorized page
- Adopted Modal component across all credential components for consistent user experience
- Applied modern/responsive design to ProfileMenu
- Redesigned Credentials component with modern card layouts for forms and buttons
- Fixed responsive issues across different screen sizes for Home and Header components
- Fixed logout call to throw errors instead of using alerts from Services layer
- Updated README with Feature 6 list of developments

### Fixed
- Fixed responsive problems across different screen sizes for Home and Header
- Improved error handling in logout process by throwing errors instead of alerts

## [0.3.0] - 2025-07-10

### Added

### Changed
- Comment StrictMode out to avoid duplicate effects/events

### Fixed

## [0.2.4] - 2025-07-10

### Added
- Add ProfileMenu component; adopt it at the header
- Add ProtectedRoute component

### Changed
- Integrate ProtectedRoute and render buttons according to user state

### Fixed


## [0.2.3] - 2025-07-10

### Added
- Implemented basic authentication component: registration, login and logout

### Changed
- Update README for feature 5

### Fixed


## [0.2.2] - 2025-07-04

### Added

### Changed
- Updating changelog for feature 4 deliverable

### Fixed


## [0.2.1] - 2025-07-04

### Added
- Refactor application architecture for feature 4

### Changed
- Refactor application architecture for feature 4

### Fixed

## [0.2.0] - 2025-07-02

### Added
- Add changelog file
- Added react-router-dom to the list of dependencies
- Provide a WorkflowTable module for the table creation

### Changed
- Remove a few dynamic fields from the JSON dump
- Refactor html/css into React 

### Fixed
- updated path for App
- Fix table syntax for workflow array

## [0.0.3] - 2025-07-01

### Added
- Working example from Lecture 9 integrated with back4app

### Changed

### Fixed


## [0.0.2] - 2025-07-01

### Added
- Base React app created with npx; plus parse dependency
- Migrating Feeture 3 code
- Initial commit

### Changed

### Fixed
