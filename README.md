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


## Parsing Approach and Design Notes

The core logic for decoding is contained within the src/morse.ts file, keeping it separate from the React UI components.  

•   ​Input Handling​: The parser first trims any leading/trailing whitespace. It then normalizes the input by replacing all newline characters (\n) with the standard word separator (3 spaces), ensuring consistent parsing.  
•   ​Invalid Characters​: Before decoding, the entire input string is scanned for any characters other than ., -, spaces, or newlines. If any are found, a warning message is generated.  
•   ​Decoding Logic​: The application splits the normalized input first by word separators, and then by letter separators. Each resulting token is mapped against a Morse code dictionary.  
•   ​Edge Case: Invalid Tokens​: As documented in the code, if a token containing invalid characters (e.g., ---a) is encountered, it is not found in the Morse map. The entire token is consistently converted to a single ? in the final output, and a warning is displayed to the user.  

## Future Improvements

Given more time, the following features could be implemented:  

•   ​Encode Mode​: An option to convert plain text into Morse code.  
•   ​Copy to Clipboard​: A button to easily copy the decoded output.  
•   ​Unit Tests​: Add tests for the decodeMorse function to verify its logic against various edge cases.  
