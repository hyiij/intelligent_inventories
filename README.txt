* Introduction *

The Intelligent Inventories app integrates Jira's project management
superpowers with the tools you use every day!  For Codegeist 2020, only 
the "Inbound Inventory" module was implemented.  This module creates a 
new Jira issue based on inbound inventory item details.  A new inbound 
inventory item is identified by the inventory clerk (or other applicable
job title) who labels the email containing the order details with the
"Inbound Inventory" Gmail label. This label triggers a Zapier Zap and
relays inbound inventory information to Forge.



* Setup Instructions *

*** Jira Instructions:
1. Create a Jira Cloud project with the project key set to "II".
2. Add yourself to the "Administrators" role for this Jira project.
   2a. Click on "Project settings" then click on "People".
   2b. Click the "Add people" button and add your name to the
       "Administrators" role.
3. Ensure the Task issue type is available for this project.



*** Gmail Instructions:
1. Add the labels "Inbound Inventory" and "Logged" to a Gmail account.

*** Zapier Instructions (Part 1):
1. Access the Zap at the following URL:
   https://zapier.com/shared/8e96053671a068c4470418d1a0dcc5070ecc8469
2. Sign in to Zapier or sign up.  A trial is available for first time users.
3. In Step 1 (New Labeled Email in Gmail), add the Gmail account, click
   Continue, and choose "Inbound Inventory" for the "Label/Mailbox" field.
   3a. Test the trigger and click Continue.
4. Skip Step 2 (POST) for now.
5. In Step 3 (Add Label to Email in Gmail), add the same Gmail account, click
   Continue, and choose "Logged" for the "Label(s) to Add" field.
   5a. Zapier will complain about an issue with Step 2.  Ignore this issue
       and move on to Step 4 (Remove Label from Email in Gmail).
6. In Step 4 (Remove Label from Email in Gmail), add the same Gmail account,
   click Continue, and choose "Inbound Inventory" for the "Label(s) to Remove" field.
   6a. Click Continue.  Now Zapier will complain about an issue with Step 2 and 
       Step 3.  Ignore this for now and minimize the Zapier window.  We will come
       back to this.



*** Forge Instructions:

** Part 1: General Setup

1. If you haven't already, complete the Getting Started instructions for
   Forge (https://developer.atlassian.com/platform/forge/getting-started/).
2. Clone this repository.
3. Execute 'forge register' to register this app to your dev account.
4. Execute 'forge deploy' to deploy this app.
5. Execute 'forge install' to install this app.
   5a. Be sure to choose Jira as the product and follow the prompts to
       install the app to your Atlassian site.

** Part 2: Web Trigger Setup
1. Execute 'forge install:list' and copy the Installation ID for Jira.
2. Execute 'forge webtrigger <jira-installation-id>'.
   2a. Choose the webtrigger-async option.
3. Execute 'forge variables:set WEBTRIGGER_URL "<webtrigger-url>"
4. Execute 'forge deploy'.

** Part 3: USER_ID Setup
1. Execute 'forge variables:set USER_ID "<account_Id>"'.
   1a. Hint: An easy way to access your account ID is to click your avatar
       in the upper right corner and then click "Profile."  Afterwards,
       copy the alphanumeric string after ".../people/".
2. Execute 'forge deploy'.



*** Zapier Instructions (Part 2):
1. In Step 2 (POST) under the Customize Request section, paste the
   WEBTRIGGER_URL in the "URL" field.  Click Continue.  Then click Test &
   Continue.  A successful test will display the "Have a: nice day!" response.  
2. In Step 3 (Add Label to Email in Gmail), click Test & Continue.
   2a. Hint: If you see a spinning loading icon that does not go away, simply
       click on another step and then click back into the step you were working on
       to verify the success of the test.  Try the test again if necessary.  For 
       Step 3 (Add Label to Email in Gmail) and Step 4 (Remove Label from Email in 
       Gmail), Zapier can be quirky.  As long as the label is successfully added to
       your email when you test Step 3 and successfully removed from your email
       when you test Step 4, it is okay to click the Skip Test link and keep going.  
3. In Step 4 (Remove Label from Email in Gmail), click Test & Continue.
4. Look for a little dark gray popup at the bottom of your screen.  It says
   "Zap is ready - now turn it on!"  Turn it on.
5. Click Done Editing.
   5a. Note: By now, there should be a new Jira issue in your project.  This
       is the test issue created as part of setting up Zapier.  You may delete it
       if desired.
6. Click the Zapier icon in the upper left corner.  Then click the hamburger
   menu icon and click on Task History.  Click on the Task Log tab.  Here you
   can easily check the status of your Zaps.



*** Sample Email Setup:
1. In the "sample_emails" folder in the repo, open the sample emails and 
   follow the instructions inside of the files.
   1a. Using sample emails is optional.  Please be aware that this app does
       not support HTML or large emails and your results may vary if you use
       emails other than the sample emails provided.



* Running the Intelligent Inventories App *
1. If desired, execute 'forge tunnel'.
2. Add the "Inbound Inventory" label to an invoice email.
3. Wait between 1 and 15 minutes for Zapier to start the Zap.
   3a. Note: This time varies based on your Zapier plan.  The cheapest plans
       (Free and Starter) have a 15 minute update time whereas the other plans
       have a 1 or 2 minute update time.
4. The app is finished executing when you see the message "Thank you for using
   the Intelligent Inventories app!" on the CLI.  If you choose not to use the CLI,
   the app is finished executing when you see the new Jira issue.
   4a. Another indicator that the app is finished executing is when the
       "Inbound Inventories" label is removed and the "Logged" label is added.
       Gmail labels are quirky and it may be necessary to refresh the page
       to see the most up to date labels for an email.
