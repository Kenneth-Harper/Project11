import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native";
  import React, { useState } from "react";
  import  FIREBASE_AUTH  from "../FirebaseConfig";
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

  // function saved in a variable for signin
    const signIn = async () => {
      // sets the loading state to true so the rest of the UI and app can be aware if the sign in is loading
      setLoading(true);
      // Attempts to sign in, and should it through an error, sends an alert to the user without crashing the app
      try
      {
        const response = await signInWithEmailAndPassword(auth, email, password);
      }
      catch (error)
      {
        alert("Sign in failed: " + error.message);
      }
      finally
      {
        // Lets the user know the sign in attempt is finished, and then sets loading to false
        alert("Process Finished!");
        setLoading(false);
      }
    };

    // function saved in a variable for signup
    const signUp = async () => {
      // sets the loading state to true so the rest of the UI and app can be aware if the sign in is loading
      setLoading(true);
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
      }
      catch (error)
      {
        alert("Signup Unsuccessful: " + error.message);
      }
      finally
      {
        // Lets the user know the sign up attempt is finished, and then sets loading to false
        alert("If signup was not unsuccessful, try signing in!")
        setLoading(false);
      }
    };

    // The return statement, which essentially creates the UI for this screen in the application
    return (
      <View style= {styles.container}>
        // Wraps the majority of the UI to avoid the keyboard pop up to better see it when inputting text
        <KeyboardAvoidingView behavior="padding">
          // Email text input
          <TextInput
            style= { styles.input }
            placeholder="Email Address"
            value= { email }
            onChangeText= { (text) => setEmail(text) }
          />
          // Password text input
          <TextInput
            style= {styles.input}
            placeholder= "Password"
            secureTextEntry={ true }
            value= { password }
            onChangeText= { (text) => setPassword(text) }
          />
          // Should loading be true, creates an activity indicator, but if false shows the buttons for sign in and sign up
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <>
              <Button style= { styles.button } title="Login" onPress= { signIn } />
              <Button
                style= { styles.button }
                title="Create account"
                onPress= { signUp }
              />
            </>
          )}
        </KeyboardAvoidingView>
      </View>
    );
  };
  
  export default Login;

  // Creates a stylesheet to be used by the rest of this app screen
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      flex: 1,
      justifyContent: "flex-start",
    },
    input: {
      marginVertical: 4,
      height: 50,
      borderWidth: 2,
      borderRadius: 4,
      padding: 20,
      backgroundColor: "#D3D3D3",
    },
    button: {
      margin: 15,
      padding: 15,
    },
  });