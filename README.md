# Contact Form (Google Apps Script)

This simple contact form is built using Google Apps Script. No PHP is required.

The folder "contact-form-script" has

-   Code.gs: actual Google script which sends e-mails (backend)
-   index.html: displays the contact form (frontend)
-   script.html: frontend JavaScript communicating with the backend
-   style.html: styling the frontend

Save Code.gs as a Google script (https://script.google.com) in your Google account and append the html files to it. Make sure to add your e-mail in Code.gs.

Deploy the script as a [web app](https://developers.google.com/apps-script/guides/web). Copy the public link.

This link could be already used as a contact form, however it doesn't look nice with the warning by Google in the header. Also you probably would like to integrate the contact form in your website.

This is what the folder "contact-form-site" is for. Include the public link of the web app into the iframe source in contact-form.html. The warning by Google goes away when you include the web app in an iframe.
