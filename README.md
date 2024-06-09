# 🌟 EGYTECH.FYI Frontend

Welcome to the frontend repository for egytech.fyi, a dynamic dashboard and reporting tool that provides insights into the Egyptian Tech Scene. This application visualizes salary data and industry trends, akin to the Stack Overflow Developer Survey, enabling users to filter and analyze compensation within the tech sector in Egypt.

## 📋 Table of Contents

// THIS IS ME 

- [🌟 EGYTECH.FYI Frontend](#-egytechfyi-frontend)
  - [📋 Table of Contents](#-table-of-contents)
  - [🚀 Getting Started](#-getting-started)
    - [🔧 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🖥️ Running the Application](#️-running-the-application)
    - [🔍 Running Lint](#-running-lint)
    - [👀 Previewing Build](#-previewing-build)
  - [🎨 Features](#-features)
  - [📚 Folder Structure](#-folder-structure)
  - [🤝 Contributing](#-contributing)
    - [Contributors](#contributors)

## 🚀 Getting Started

### 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### 📦 Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/egytechfyi-frontend.git
   cd egytechfyi-frontend
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

### 🖥️ Running the Application

Start the development server:

```bash
yarn dev
```

This will launch the Vite development server, making the application accessible at `http://localhost:3000`.

### 🔍 Running Lint

To ensure code quality and consistency, run ESLint with:

```bash
yarn lint
```

### 👀 Previewing Build

To build the project and preview it locally:

```bash
yarn run build
yarn preview
```

## 🎨 Features

This dashboard includes:

- Interactive filters to view data based on job titles, experience levels, and technology stacks.
- Visual representations of salary ranges and distributions.
- Comparisons and analytical reports similar to industry surveys.

## 📚 Folder Structure

```javascript
└── 📁egytech-fyi
    └── 📁.github
        └── PULL_REQUEST_TEMPLATE.md
    └── 📁.husky
        └── pre-commit
        └── pre-push
    └── .prettierrc
    └── 📁.vscode
        └── settings.json
    └── 📁public
    └── 📁src
        └── 📁assets 
        └── 📁components // for all the components used
            └── 📁Shared // for shared agnostic components
        └── 📁constants // for constants used across the repo
        └── 📁context // for state contexts
        └── 📁functions // for general functions
        └── 📁mock //for mock data
        └── 📁pages // for pages
        └── 📁services // for api services 
        └── 📁styles // for style files (should follow the convention of <FileName>.styles.scss)
        └── 📁types // type script types
        └── 📁utils // for utility functions
            └── 📁Transformers // for data transformation functions
        └── App.tsx
        └── index.css
        └── main.tsx
        └── vite-env.d.ts
    └── README.md
    └── index.html 
    └── package.json 
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
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
