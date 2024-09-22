# Box-shadow properties doesn't apply to Android, for android we need to apply (elevation) property.
- We need to apply separately like below in react native for IOS: 
-  boxShadow:{
    shadowColor: "#333333",
    shadowOffset:{
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  };
- For Android box shadow: 
-   androidShadow: {
    elevation: 10, // for android shadow because boxShadow will work only on IOS devices
  }

# Border radius in IOS vs Android :
- Border radius is not applied to <Text> in Android. So, for that we need to wrap the <Text> element inside <View style=>, in order to apply borderRadius.
- Also, we need to write separately each border-properties. Since, Native doesn't support short-hand properties like- Vanilla CSS
-   borderWidth: 2,
    borderColor: "purple",
    borderStyle: "solid",
    borderRadius: 5,
# In Native, it doesn't supports Style inheritance like HTML & CSS,
- <View style={styles.darkMode}>
        <Text style={styles.darkModeText}> Style Inheritance in Native  doesn't work, we need to write separate style for nested element. 
            <Text style={styles.boldText}>In Text SubTrees, Style inheritance work. So this text will be both BOLD and WHITE.</Text>
        </Text>
  </View>

# Flexbox-layout: It is different from normal CSS in react native
- main-axis : top-to-bottom
- cross-axis: left-to-right