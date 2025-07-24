# Playwright UI Test – Login Page

This project contains automated UI tests using [Playwright](https://playwright.dev/) to validate login functionality on a public practice website.

It includes:
- Positive login test with valid credentials
- (Planned) Negative login scenario (in progress)

---

## What it does

- Opens the login page at [practicetestautomation.com](https://practicetestautomation.com/practice-test-login/)
- Fills in username and password
- Clicks submit and waits for the result
- Logs console output of the result page
- Includes `test.only()` to isolate main test during development

---

## Tech Stack

- Playwright
- JavaScript (Node.js)
- VS Code

---

## How to Run

1. Install dependencies:

```bash
npm install
npx playwright install
```
2. Run tests:

```bash
npx playwright test
```

---

Project Structure

testrepo/
├── tests/
│   └── example.spec.js   # contains both login tests
├── package.json
├── playwright.config.js
└── README.md

---

Test Scenarios

1.  Browser login
Logs in with correct credentials
Confirms redirection and extracts .post-title content

2. Browser negative login1
WIP – designed to test login failure scenarios
