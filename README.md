# Safe

### Challenge

Communication gap between the authorities and the victims often result in the loss of many lives whenever a natural or man-made disaster strikes. Those severely affected, if not provided with proper care in due time face a risk of losing their lives.

### Solution

**A mobile-based cross-platform application that notitifies the authorities whenever a victim requested for an emergency condition in the app, alongwith the current location.** This bridges the gap where the people who are stuck, for example, in a storm or a flood, who first contact a third-party to let the authorities know about their location and condition. To help with the identification of the victims, the app asks the user to enter their **UID No.(Aadhar Card)** when one installs the app onto their smartphones. This also eliminates any chance of fake requests for help.

### Structure of the App

The application supports two kind of logins, one for the authority and one for the normal people. The normal people , while signing up on the app for the first time have to sign in with their UDI No.(Aadhar Card) and verify the UID. Once the user is signed up, in case of a disaster emergency, **the user can fill in the info about their condition in a mandatory templated supported by an optional persoanlised message and the current location of the user**. The app will maintain a database containg the UPI ID which the user signed up and it will work as a user ID, when the user puts in a request when faced with a disaster. **The authorities gets a notification whenever any user fills in a request**. Additionally, the app provides with do's and dont's for a particular disaster.

### Technologies used

We will be using **React Native** to build our mobile app alongwith **SQLite** to support database. React Native is immensely popular, highly documented and easier than other environment to build mobile apps. SQLite is an open-source and highly documented RDBMS, whereas other DBMS that provide the same services comparable to SQLite charge for some of the services.


