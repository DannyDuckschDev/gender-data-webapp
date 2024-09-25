# Gender Data Web App

## Overview
The **Gender Data Gap App** is a comprehensive web application designed to support women* in their daily lives by providing crucial information and a platform for sharing experiences. The app includes sections on everyday knowledge, period-related information. It is built with React and focuses on sustainability and energy efficiency with a dark-themed design.

## Disclaimer
Please note that this application is still in development. There are known minor bugs that need to be fixed, and the database integration is not yet completed. I am actively working to address these issues in upcoming updates.

## Features
- **Home**: Introduction to the app and its purpose.
- **Knowledge:** Tips and information on various everyday topics, such as driving safety.
- **Support offers:** Provides  available support services, such as counseling or helplines etc..
- **Downloads:** Various resources that users can download, such as recipes, guides, or informational PDFs.
- **Contact:** Details about the app's creator and ways to get in touch.

 ## Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/gender-data-gap-app.git
```

3. **Navigate to the project directory:**
```bash
cd gender-data-gap-app
```
5. **Install the dependencies:**
```bash
npm install
```

6. **Start the development server:**
```bash
npm run dev
```
## Technologies Used
- React: JavaScript library for building user interfaces.
- Vite: Next-generation front-end tool for faster and leaner development.
- TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
- CSS: Styling the application with a focus on a dark, energy-efficient theme.
- React Router: Library for routing in React applications

## Directory Structure
```bash
gender-data-app/
│
├── node_modules/
│
├── public/
│   ├── assets/
│   │   ├── PeriodenTeeRezept.pdf
│   │   ├── PeriodTeaRecipe.pdf
│   │   ├── index.html
│   │   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AboutUs.tsx
│   │   ├── ArticleItem.tsx
│   │   ├── BlogPosts.tsx
│   │   ├── BookItem.tsx
│   │   ├── CategoryList.tsx
│   │   ├── DisclaimerBanner.tsx
│   │   ├── DownloadButton.tsx
│   │   ├── DownloadCard.tsx
│   │   ├── Footer.tsx
│   │   ├── FormInput.tsx
│   │   ├── FormTextarea.tsx
│   │   ├── Header.tsx
│   │   ├── HeroElement.tsx
│   │   ├── MapSupport.tsx
│   │   ├── MediaTypeList.tsx
│   │   ├── OutpatientClinicInfo.tsx
│   │   ├── ScrollToTopButton.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Section.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SupportCard.tsx
│   │   └── VideoItem.tsx
│   ├── data/
│   │   ├── clinicForVictims.json
│   │   ├── data.json
│   │   ├── downloadContent.json
│   │   └── supportCards.json
│   ├── hooks/
│   │   ├── useCategories.ts
│   │   ├── useContactForm.tsx
│   │   ├── useDownloadProgress.ts
│   │   ├── useFilteredContents.ts
│   │   ├── useScrollToTop.ts
│   │   ├── useToggleExpand.ts
│   │   └── useWindowSize.ts
│   ├── pages/
│   │   ├── Contact.tsx
│   │   ├── Downloads.tsx
│   │   ├── Home.tsx
│   │   ├── Knowledge.tsx
│   │   └── Support.tsx
│   ├── styles/
│   │   ├── aboutUs.css
│   │   ├── blogPosts.css
│   │   ├── button.css
│   │   ├── contact.css
│   │   ├── disclaimerBanner.css
│   │   ├── download.css
│   │   ├── hero.css
│   │   ├── knowledge.css
│   │   ├── main.css
│   │   ├── support.css
│   │   └── variables.css
│   ├── App.tsx
│   ├── main.tsx
│   ├── types.ts
│   └── vite-env.d.ts
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```
## Usage

### Navigation
- **Home**: Introduction to the app and its purpose.
- **Knowledge:** Tips and information on various everyday topics, such as driving safety.
- **Support offers:** Provides  available support services, such as counseling or helplines etc..
- **Downloads:** Various resources that users can download, such as recipes, guides, or informational PDFs.
- **Contact:** Details about the app's creator and ways to get in touch.

## Contributing
Contributions are welcome! Please fork the repository and submit pull requests for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For more information, questions, or suggestions, please open an issue or start a discussion in this repository.
