# Contact Form

This simple contact form is built using Google Apps Script. No PHP is required.

The folder "contact-form-script" has

-   Code.gs: the actual Google script (backend)
-   index.html: displays the contact form (frontend)
-   script.html: frontend JavaScript communicating with the backend
-   style.html: styling the frontend

Save Code.gs as a Google script (https://script.google.com) in your Google account and append the html files to it.

Deploy the script as a web app. Copy the public link.

This link could be used already as a contact form, however it doesn't look nice with the warning by Google in the header and also you probably would like to integrate the contact form in your website.

This is what the folder "contact-form-site" is for. Include the public link of the web app into the iframe source in contact-form.html. The warning by Google goes away when you include the web app in an iframe.
