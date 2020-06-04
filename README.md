# Contact Form (Google Apps Script)

This simple contact form is built using Google Apps Script. No PHP is required.

The folder "contact-form-script" has

-   Code.gs: Google script which sends e-mails (backend)
-   index.html: displays the contact form (frontend)
-   script.html: frontend JavaScript communicating with the backend
-   style.html: styling the frontend

_Instructions._ Save Code.gs as a [Google script](https://script.google.com) in your Google account and append the html files to it. Make sure to add your email in Code.gs. Deploy the script as a [web app](https://developers.google.com/apps-script/guides/web) executed by yourself and with access to anyone. Copy the public link.

This link could be already used as a contact form, however it doesn't look nice with the warning by Google in the header. Also you probably would like to include the contact form into your website.

This is what the folder "contact-form-site" is made for. Include the public link of the web app into the iframe source in contact-form.html. The warning by Google goes away when you include the web app in an iframe.
