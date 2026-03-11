# Morse Code Decoder

A single-page web application built with React and TypeScript that decodes Morse code into plain text. This project was created to demonstrate a full development flow: from parsing and interpreting user input to deploying a functional web application on Firebase.

Live Application URL:​ https://morse-decoder-e13d9.web.app/

***

## Features

•   ​Morse Code Input​: A text area to paste or type Morse code.  
•   ​Decoded Output​: An area to display the resulting plain text.  
•   ​Real-time Validation​: Provides immediate feedback via a warning message if the input contains invalid characters.  
•   ​Robust Parsing​: Correctly interprets letters, words, and newlines according to standard Morse code conventions.  
•   ​Error Handling​: Unknown Morse tokens are gracefully converted to a ?.  

## Tech Stack

•   ​Framework​: React  
•   ​Language​: TypeScript  
•   ​Build Tool​: Vite  
•   ​Deployment​: Firebase Hosting  

## Getting Started

Follow these instructions to set up and run the project on your local machine.  

Prerequisites  

•   Node.js (v18 or newer recommended)  
•   Firebase CLI  

## Local Setup & Installation

1.  ​Clone the repository: git clone https://github.com/ccolkereybel/morse-decoder.git  
2.  ​Navigate to the project directory:  
        cd morse-decoder  
3.  ​Install the necessary dependencies:  
        npm install  
    

## Running the Application Locally  

To start the development server:  

npm run dev  


This will run the app in development mode. Open http://localhost:5173 (or the URL provided in your terminal) to view it in your browser. The page will reload automatically when you make edits.  

## Deployment to Firebase

This project is configured for easy deployment to Firebase Hosting.  

1.  ​Install the Firebase CLI globally​:    
        npm install -g firebase-tools  
    2.  ​Login to Firebase:  
        firebase login    
    3.  ​Build the project for production:  
    This command creates a dist folder with the optimized, static files for your app.  
        npm run build  
    4.Deploy to Firebase Hosting:  
        firebase deploy --only hosting  
        After the command completes, the terminal will provide you with the live URL for your deployed application.  

