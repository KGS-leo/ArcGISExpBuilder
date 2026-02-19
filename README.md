
# ArcGIS Experience Builder Developer Edition – Custom Web Application

1. **Project Overview**  
   This project is a web application developed using the ArcGIS Experience Builder Developer Edition.  
   The platform allows you to customize widgets and themes within Experience Builder.  
   Please follow the installation and environment configuration guide below:  
   https://developers.arcgis.com/experience-builder/guide/install-guide/

2. **Project Structure**  
   After installation, navigate to the folder:  
   client/your-extensions  
   Place all custom code (widgets, themes, etc.) inside this directory.

3. **Running the Application**
   - Start the client:
       cd client  
       npm ci 
       npm start  
     This runs the custom functionality in the background.

   - Start the server:
       cd server  
       npm ci 
       npm start  
     This runs the Experience Builder platform.

   Once both are running, you can access and apply the customized widget at:  
   http://localhost:3001
