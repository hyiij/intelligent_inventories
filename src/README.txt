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

*** Gmail Instructions:
1. Add the labels "Inbound Inventory" and "Logged" to a Gmail account.

*** Zapier Instructions:
1. Access the Zap at the following URL:
https://zapier.com/shared/8e96053671a068c4470418d1a0dcc5070ecc8469
2. In Step 1 (New Labeled Email in Gmail), add the Gmail account and choose
   "Inbound Inventory" for the "Label/Mailbox" field.
3. In Step 3 (Add Label to Email in Gmail), add the same Gmail account and
   choose "Logged" for the "Label(s) to Add" field.
4. In Step 4 (Remove Label from Email in Gmail), add the same Gmail account
   and choose "Inbound Inventory" for the "Label(s) to Remove" field.
5. Expand Step 2 (Do this ... POST) and minimize the Zapier window.  We 
   will come back to this.

*** Forge Instructions:

** Part 1: General Setup

1. If you haven't already, complete the Getting Started instructions for
   Forge (https://developer.atlassian.com/platform/forge/getting-started/).
2. Clone this repository.
3. Execute 'forge register' to register this app to your dev account.
4. Execute 'forge deploy' to deploy this app.
5. Execute 'forge install' to install this app.
   5a. Be sure to choose Jira as the product and follow the prompts to
       install the app to your Jira site.

** Part 2: Webtrigger Setup
1. Execute 'forge install:list' and copy the Installation ID for Jira.
2. Execute 'forge webtrigger <jira-installation-id>'.
3. Execute 'forge variables:set WEBTRIGGER_URL "<webtrigger-url>"
4. Execute 'forge deploy'.

*** Zapier Instructions (continued):
1. In Step 2 (Do this ... POST), copy the WEBTRIGGER_URL into the 
   "URL" field.
2. Resolve any Zapier errors.
3. Turn the Zap on.


* Running the Intelligent Inventories App *
Simply add the "Inbound Inventory" label to one of the sample emails
included in the repository.  HTML and large emails are not supported by
this app and while you are welcome to try them, your results may vary.

**** **D*FDSFODJSOFJ
MAY NEED THIS??!!!
- npm install