# App-Onboarding

This is a project for onboarding screens for new users to an App.

I had multiple approach towards this project depending on the technology stack I'm using. For this specific case, I've decided to use Html, Css and Vanilla JavaScript for simplicity and readability.

## Design

Since the design of the onboarding screens is more mobile directed, I basically started my developement with the mobile-first approach targetting smaller screens like mobiles and tablets.

## Implementation

### 1. Navigation

I used the a custom hash router to implement navigation between screens. Each screen is a separate HTML file, and the URL changes to reflect the current screen. So basically It is a single page just rendering different screens on click. This was chosen because I didn't want the DOM to be reloaded when navigating between screens which results into a slower load time.


### 2. Onboarding Screens

I've created 3 screens:

1. Account type Screen
2. User Info Screen
3. Password Screen

Each screen is a separate HTML file, and the content is dynamically loaded into the main container using JavaScript.

### 3.Accessibility
I implemented the dark and light mode switch using CSS variables. This allows users to easily switch between light and dark mode.

### 4. Animation
I've used CSS animations to create a smooth and engaging onboarding experience. For example, when the user clicks on "Next", the next screen fades in smoothly.

### Steps to run the project

To run this project, you'll need to:

1. Clone the repository.
2. Open your favorite code editor (VS Code) and navigate to the project directory.
3. Open the index.html file in your browser.

Now you should see the app onboarding screens.

### ASSUMPTIONS

- This project assumes that the user's device is a modern browser with JavaScript enabled.
- The user's device is also a touch device for the navigation buttons.
- The user's device is a mobile device for the onboarding screens.
- Could have Implemented some basic form validation for the user input but it wasn't required in this project information and design.

