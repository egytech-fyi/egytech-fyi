# 🌟 EGYTECH.FYI Frontend

Welcome to the frontend repository for egytech.fyi, a dynamic dashboard and reporting tool that provides insights into the Egyptian Tech Scene. This application visualizes salary data and industry trends, akin to the Stack Overflow Developer Survey, enabling users to filter and analyze compensation within the tech sector in Egypt.

## 📋 Table of Contents

- [🌟 EGYTECH.FYI Frontend](#-egytechfyi-frontend)
  - [📋 Table of Contents](#-table-of-contents)
  - [🚀 Getting Started](#-getting-started)
    - [🔧 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🖥️ Running the Application](#️-running-the-application)
    - [🔍 Running Lant](#-running-lint)
    - [👀 Previewing Build](#-previewing-build)
  - [🎨 Features](#-features)
  - [📚 Folder Structure](#-folder-structure)
  - [🤝 Contributing](#-contributing)
  - [📜 License](#-license)

## 🚀 Getting Started

### 🔧 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://npmjs.com/) (or [Yarn](https://yarnpkg.com/))

### 📦 Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/egytechfyi-frontend.git
   cd egytechfyi-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### 🖥️ Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

This will launch the Vite development server, making the application accessible at `http://localhost:3000`.

### 🔍 Running Lint

To ensure code quality and consistency, run ESLint with:

```bash
npm run lint
# or
yarn lint
```

### 👀 Previewing Build

To build the project and preview it locally:

```bash
npm run build
npm run preview
# or
yarn run build
yarn preview
```

## 🎨 Features

This dashboard includes:
- Interactive filters to view data based on job titles, experience levels, and technology stacks.
- Visual representations of salary ranges and distributions.
- Comparisons and analytical reports similar to industry surveys.

## 📚 Folder Structure

```
/
|-- public
|   |-- egypt-tech-scene-logo.svg
|   |-- egytechfyi Main Logo 2400x1800.jpg
|   |-- egytechfyi Main Logo.png
|   |-- inverted-color-logo.png
|   |-- symbol.svg
|   |-- vite.svg
|   |-- white-logo.png
|
|-- src
|   |-- Services
|   |   |-- constants.ts
|   |   |-- getParticipants.ts
|   |   |-- getStats.ts
|   |
|   |-- assets
|   |   |-- crying-cat.png
|   |   |-- pin-png-39474.png
|   |   |-- react.svg
|   |
|   |-- components
|   |   |-- NavBar.tsx
|   |   |-- Footer.tsx
|   |   |-- Dashboard
|   |   |   |-- FiltersDrawer.tsx
|   |   |   |-- FiltersTags.tsx
|   |   |   |-- GraphCard.tsx
|   |   |   |-- MainContainer.tsx
|   |   |   |-- MainFilters.tsx
|   |   |   |-- NoData.tsx
|   |   |   |-- SalaryComment.tsx
|   |   |   |-- StatsCard.tsx
|   |   |   |-- StatsContainer.tsx
|   |   |-- FormComponents
|   |   |   |-- CustomInput.tsx
|   |   |-- Pages
|   |   |   |-- Compensation.tsx
|   |   |   |-- Insights.tsx
|   |   |   |-- LandingPage.tsx
|   |   |   |-- Overview.tsx
|   |   |   |-- Satisfaction.tsx
|   |   |   |-- Technology.tsx
|   |   |-- Shared
|   |       |-- BaseComment.tsx
|   |       |-- CustomButton.tsx
|   |       |-- CustomTag.tsx
|   |       |-- Filters.tsx
|   |       |-- FloatLabel.ts
|   |       |-- Histogram.tsx
|   |       |-- RangeSlider.tsx
|   |       |-- Spline.tsx
|   |       |-- StepCard.tsx
|   |-- constants
|   |   |-- HistogramOptions.ts
|   |   |-- PositionsOptions.ts
|   |   |-- SplineOptions.ts
|   |   |-- colors.ts
|   |   |-- constants.ts
|   |   |-- initialState.ts
|   |-- context
|   |   |-- GlobalStateContext.tsx
|   |   |-- useGlobalState.ts
|   |-- functions
|   |   |-- getCategories.ts
|   |   |-- transformBuckets.ts
|   |-- mock
|   |   |-- MOCK_FEMALE_DATA.ts
|   |   |-- MOCK_MALE_DATA.ts
|   |-- styles
|   |   |-- App.styles.scss
|   |   |-- BaseComment.styles.scss
|   |   |-- FilterTags.styles.scss
|   |   |-- Filters.styles.scss
|   |   |-- Footer.styles.scss
|   |   |-- FormComponents.styles.scss
|   |   |-- Insights.styles.scss
|   |   |-- LandingPage.styles.scss
|   |   |-- MainContainer.styles.scss
|   |   |-- MainFilters.styles.scss
|   |   |-- Navbar.styles.scss
|   |   |-- NoData.styles.scss
|   |   |-- RangeSlider.styles.scss
|   |   |-- SharedComponents.styles.scss
|   |   |-- Stats.styles.scss
|   |   |-- StepContainer.styles.scss
|   |   |-- chart.styles.scss
|   |   |-- variables.scss
|   |-- types
|   |   |-- index.ts
|   |-- utils
|   |   |-- Transformers
|   |   |   |-- transformOptions.ts
|   |   |-- generateHistogramColors.ts
|   |   |-- generateHueSequence.ts
|   |   |-- getHistogramBarPages.ts
|   |   |-- getPositionOptions.ts
|   |   |-- getSplineOptions.ts
|   |   |-- getUniqueCategories.ts
|   |-- App.tsx
|   |-- index.css
|   |-- main.tsx
|   |-- vite-env.d.ts
|
|-- .eslintrc.cjs
|-- .gitattributes
|-- .gitignore
|-- README.md
|-- index.html
|-- package-lock.json
|-- package.json
|-- tsconfig.json
|-- tsconconfig.node.json
|-- vite.config.ts
```

## 🤝 Contributing

Contributions are welcome! To help make this project better, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -am 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request to staging branch.
6. Once merged test your changes on [staging](https://staging.egytech-fyi-3s7.pages.dev) 

### Contributors
This project exists thanks to all the people who contribute. A special thanks to our key contributors:

- **Abdelrahman Eladawy**
  - **GitHub:** [MrViometal](https://github.com/MrViometal)
  - **LinkedIn:** [Abdelrahman Eladawy](https://www.linkedin.com/in/abdelrahman-el-adawy/)

- **Ahmed Eladawy**
  - **LinkedIn:** [Ahmed Eladawy](https://www.linkedin.com/in/ahmed-eladawy-00b4a3115/)

- **Mahmoud Salem**
  - **GitHub:** [mahsayedsalem](https://github.com/mahsayedsalem)
  - **LinkedIn:** [mahsayedsalem](https://www.linkedin.com/in/mahsayedsalem/)

---

Visit the live application: [egytech.fyi](https://egytech.fyi)
