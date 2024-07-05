This is the sample project used to test out the Onetrust cookie module display in the local environment.

How to run this project?
We recommend use Live Server add on in Visual Studio Code to host this project. Look for Live Server in the VS extension and install it in Visual Studio Code. Click on the go live on the right corner to open this project in Localhost.

How to use
For the OneTrust Cookie Banner to appear on the website, it is necessary to copy the test script from OneTrust and place it in the HTML template. The banner script must be placed in the <head> section of HTML file that is inside the public folder at the root directory.
    - The script must be placed before any other script on your site to ensure the banner is loaded before any other scripts load or set cookies.
    - Make sure the banner is embedded on all pages.

When the page is loaded or whenever the user modifies their consent for a cookie category in the cookie settings, the OptanonWrapper() function runs.

Once the user gives their cookie consent and preference, the OneTrust Cookie banner is not shown again within the reconsent period. Therefore, it is necessary to add a cookie settings button to the website footer so that the user can always go back and modify their cookie preference at any time.

To have the cookie settings button in the footer, it is necessary to place the second OneTrust script (from Do Not Sell & Cookie Setting Button section) in the footer of the html template file.

When the user clicks on the CookieSettings button or in the Manage Cookies from the banner, a popup opens with some cookie categories that the user can enable or disable as he prefers.

Relevant information
OnetrustActiveGroups ID's
    - Strictly Necessary (a.k.a Essential): C0001
    - Performance: C0002
    - Functional: C0003
    - Targeting (a.k.a Advertising): C0004
    - Unknown: C0010

