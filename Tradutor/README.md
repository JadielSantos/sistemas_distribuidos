1 - Hello world
Build Status

This folder contains the sample code for a small App Engine application that displays a short message. See the instructions below for how to configure, run, and deploy this sample.

Simple instructions
Install Node.js.

Install git.

Create a Google Cloud Platform project.

Install the Google Cloud SDK.

After downloading the SDK, initialize it:

  gcloud init
Clone the repository:

git clone https://github.com/GoogleCloudPlatform/nodejs-getting-started.git
Change directory:

cd nodejs-getting-started/1-hello-world
Install dependencies:

npm install
Start the app:

npm start
View the app at http://localhost:8080.

Stop the app by pressing Ctrl+C.

Deploy the app:

gcloud app deploy
View the deployed app at https://YOUR_PROJECT_ID.appspot.com.
