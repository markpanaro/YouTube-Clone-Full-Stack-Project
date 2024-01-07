# YouTube-Clone-Full-Stack-Project

## YouTube Link: https://youtu.be/GEGGt9V8fbU?si=Zel2lTD4azjEtAYl

![Alt text](/Users/markpanaro/YouTube-Clone-Full-Stack-Project/media/image.png?raw=true "YouTube Clone")

## Description
This project is a clone of the YouTube site that supports watching videos, logging in with Google and uploading videos. It was built using TypeScript, Next.js, Express.js, Docker, FFmpeg, Firebase Firestore and multiple Google Cloud tools utilizing the Neetcode Full Stack Development course. A Selenium WebDriver was also created to test the functionality of the web app. The intention of doing this work was to get a better understanding of the tools and thought processes behind building a full stack application.

## Highlighted Technical achievement
Once a user signs in, the “upload” button appears. Uploaded videos are added to the raw videos bucket within Google Cloud Storage. This bucket is subscribed to to the video-uploads-topic. On video upload, Pub/Sub pushes a message to the video-processing service within Cloud Run. This is a TypeScript and node.js image made with Docker that processes an uploaded video with FFmpeg, converting it into 360p, and sends the processed video to the processed videos container. The video processing service also adds the video location and metadata, such as the filename and processing status, to the Firestore database. Once a video is processed and added to the database, it is displayed in the web app and can be watched by users.