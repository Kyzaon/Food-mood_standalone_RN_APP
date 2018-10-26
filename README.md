# Food-mood_standalone_RN_APP
My first standalone App project in ReactNative with custom Firebase, using several related libraries.

This is the first project i did both in react and react native solely by myself( well, my amazing mentors did help me with Firebase a little :))
It should be viewed as a example for appliance of several native developement libraries to make a simple first project, not a reference of something that 
works perfectly well. I made it in roughly 4-5 days, and didn't pay much attention to organizing the styles so please excuse me for this chaotic
inline mess You will see in the AppData partials. Also I had about a week of experience in React so there's high chance that my solutions are
not perfect. Anyway it works, but it's NOT A FINISHED PRODUCT, it's about 80% finished.

What is left, is the issue of data persistance, as AsyncStorage is not exactly straightworward with its compatibility with react-native-router-flux,
in this case the best solution would be implementing Redux Storage, which sadly I didn't have enough time to learn enough before the presentation.
After saving data, you get it in the MoodFinal component to check the firebase array of object tags for the existence of corresponding input strings and values.
And that I will try to implement in next few days, but as of now it doesn't exist.

I used several libraries related to React Native to develop this project:
-React
-ReactNative
-React Native Router Flux
-React Native Elements
-Firebase/Firestore
-React Native Firebase

and in config files You will find a few more which were scraped or leftout during the developement process:
-Native Navigation
-Redux
-other stuff :p

it's compiled in babel, and wrapped in expo for tunneling reasons.

Have fun!

