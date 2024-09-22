import { useState } from "react";
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet } from "react-native";
import Greet from "./components/Greet";
const logoImg = require("./assets/adaptive-icon.png");


function App(){
  // const [modalVisible, setModalVisible] = useState(false);
  // const [showStatusBar, setShowStatusBar] = useState(false);


  // Day-2 Custom Components & Styling
  return (
    <View style={styles.container} >

      {/* Checking Style Inheritance */}
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>Style Inheritance in Native  doesn't work, we need to write separate style for nested element. 
            <Text style={styles.boldText}>In Text SubTrees, Style inheritance work. So this text will be both BOLD and WHITE.</Text>
           </Text>
      </View>

      <Text style={styles.title}>StyleSheet API</Text>
      {/* <Greet name={"Shubham"}/>
      <Greet name="Shivam"/> */}
      <View style={[styles.lightGreenBox, styles.box]}>
        <Text style={styles.title}>LightGreen Box AndroidShadow</Text>
      </View>
      <View style={[styles.lightBlueBox, styles.box, styles.boxShadow]}>
        <Text style={styles.title}>LightBlue Box IOS</Text>
      </View>  
    </View>
  )
// Day-1 Core Components
  // return  <View style= {{flex: 1,backgroundColor: "#59A3B6", paddingTop: 50 }}>
  // <StatusBar barStyle="dark-content" backgroundColor="lightgreen" hidden={showStatusBar}/>
  // {/* <ActivityIndicator size="large" color="black" /> */}
  // <Button title="Alert" onPress={()=>Alert.alert("Invalid data!!", "*Enter proper data", [
  //   {
  //     text: "Cancel",
  //     onPress: ()=>{
  //       console.log("Cancel Pressed")
  //     }
  //   },
  //   {
  //     text: "OK",
  //     onPress: ()=>{
  //       console.log("OK pressed")
  //     }
  //   }
  // ])}/>
  // <ImageBackground source={logoImg} style={{flex: 1, justifyContent: "center"}}>
  //  <ScrollView >
  //   <Button title="StatusBar" onPress={()=>setShowStatusBar(!showStatusBar)} />
  //   {/* <View style={{height:200, width:200, backgroundColor:"lightblue"}}></View>
  //   <View style={{height:200, width:200, backgroundColor:"lightgreen"}}></View> */}

  //   <Text style={{fontSize: "32px", fontWeight: 600, textAlign: "center"}}>Native World :-
  //     <Text style={{color: "white"}}> Developer Shubham Shukla</Text>
  //   </Text>

  //   {/* ---------------------Adding pressable Image here......................... */}
  //   <Pressable onPress={()=> console.log("Image pressed")} onLongPress={()=> alert("Hi there !!!!!!!!!")}>
  //   <Image source={{uri: "https://picsum.photos/200/300"}} style={{width:500, height:300}} />
  //   <Text style={{textAlign: "center"}}>****Long Press Alert</Text>
  //   </Pressable>
  //   {/* ---------------------------------------------------------------- */}
  //   <Button title="Submit"  onPress={()=> {
  //     setModalVisible(true); console.log("Button pressed");}} color="blue"/>

  //     {/* ===================MODAL======================= */}
  //     <Modal visible={modalVisible} onRequestClose={()=> setModalVisible(false)} animationType="slide" presentationStyle="pageSheet"> 
  //     <View style= {{flex: 1,backgroundColor: "lightblue", paddingTop: 50 }}>
  //       <Text>Modal Content</Text>
  //       <Button title="Close" color="midnightblue" onPress={()=> setModalVisible(false)}></Button>
  //     </View>
  //     </Modal>
  //   </ScrollView>
  //   </ImageBackground>
  // </View>

}

export default App;
// By using export in StyleSheet API we can use it in any file throughout in our project
export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "plum", padding: 60},
  title: {fontSize: "20px"},
  darkMode: {
    backgroundColor: "black",
    // color: "white", // This color property will not work on Child element <Text> because Native doesn't support inheritance, ! Write Separately.
  },
  darkModeText: {
    color: "white",
  },
  boldText:{
    fontWeight: "bold",
  },
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "solid",
    borderRadius: 5,
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
  },
  lightBlueBox: { 
    backgroundColor: "lightblue",
  },
  boxShadow:{
    shadowColor: "#333333",
    shadowOffset:{
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10, // for android shadow because boxShadow will work only on IOS devices
  }
})