# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Fixed

## [0.7.2] - 2025-07-25

### Added


### Changed
- Update README with feature 3

### Fixed


## [0.7.1] - 2025-07-25

### Added


### Changed
- Update README with all endpoints and basic info

### Fixed


## [0.7.0] - 2025-07-24

### Added
- CSV download functionality for Workflow and Summary components
- Reusable CSV service with automatic filename generation
- InfoModal integration for password reset functionality
- Last refresh indicators for Workflow component

### Changed
- Replaced browser alerts with InfoModal component in AuthForgotPass
- Updated Workflow component to display refresh status in header container
- Cleaned up unused CSS code in Services and Agents components
- Simplified CSV service architecture

### Fixed
- Fixed double CSV download issue in Workflow component
- Removed unused lastRefresh state from Workflow component

## [0.6.0] - 2025-07-24

### Added
- Real-time monitoring for Agents and Central Services components
- Automatic data refresh every 10 seconds
- Agents page endpoint at `/agents`
- Central Services page endpoint at `/services`
- Updated README documentation for Agents component

### Changed
- Refactored Agents component to use automatic refresh
- Improved Agents UI with consistent styling
- Updated Agents component to use same header styling as Workflow

### Fixed
- Removed duplicate refresh information in Agents component
- Improved component structure by consolidating functionality

## [0.5.0] - 2025-07-22

### Added
- Summary component with aggregation functionality
- Dynamic aggregation by campaign, CMSSW, type, status, and team name
- Sortable table headers for Summary component
- URL query parameter support for Workflow component filtering
- Summary statistics display with workflow counts and job statistics

### Changed
- Enhanced Workflow component with URL-based filtering capabilities
- Improved table functionality with sorting and filtering features
- Enhanced user experience with bookmarkable filtered views

### Fixed
- Improved data fetching and state management in Summary component
- Enhanced error handling in data aggregation processes

## [0.4.0] - 2025-07-19

### Added
- Bootstrap-icons for enhanced UI
- Modal system for authentication transitions and user feedback
- Redesigned credentials components with modern card layouts

### Changed
- Refactored ProtectedRoute component to automatically redirect unauthenticated users
- Adopted Modal component across all credential components
- Applied modern/responsive design to ProfileMenu
- Redesigned Credentials component with modern card layouts
- Fixed responsive issues across different screen sizes

### Fixed
- Fixed responsive problems across different screen sizes
- Improved error handling in logout process

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
