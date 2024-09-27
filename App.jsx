import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,

  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';


function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top_app_bar}>
        <View style={styles.top_text_container}>
          <Text style={styles.top_text}>FIFA22 / PS4</Text>
          {/* Sync Icon with Gamepad inside */}
          <View style={styles.iconWrapper}>
            <IconAnt name="sync" size={18} color="gray" style={styles.syncIcon} />
            <Icon name="gamepad" size={10} color="gray" style={styles.gamepadIcon} />
          </View>
        </View>
      </View>


      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.card}>
          <View style={styles.notifi}>
            <Icon name="bell-o" size={20} color="white" style={styles.bellIcon} />
            <Text style={styles.notifi_text}>Notifiche attive</Text>
          </View>
          {/* Combined Image Card */}
          <View style={styles.imageCard}>
            <Image
              source={require('./assets/End1.png')}
              style={styles.bannerImage}
            />
            <Image
              source={require('./assets/textimg.png')}
              style={styles.overlayImage}
              
            />
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} // From transparent black to opaque black
              style={styles.gradient}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A1F',
  },
  top_app_bar: {
    position: 'absolute',
    top: 25,
    left: 0,
    right: 0,
    backgroundColor: '#181A1F',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    zIndex: 2, // Ensures it stays on top when needed
  },
  top_text_container: {
    backgroundColor: '#21222A',
    borderRadius: 8,
    width: 163,
    height: 32,
    position: 'relative', // Enables positioning of the icon inside the box
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_text: {
    color: '#9A96A2',
    textAlign: 'center',
    paddingVertical: 8,
    paddingRight: 24, // Space for the icon inside the text box
  },
  iconWrapper: {
    position: 'absolute',  // Allows the icon to be placed inside the text box
    flexDirection: 'row',
    right: 15,
  },
  syncIcon: {
    position: 'relative',   // Sync icon stays in its original position
  },
  gamepadIcon: {
    position: 'absolute',   // Gamepad icon overlays the sync icon
    top: '15%',             // Adjust to center the gamepad inside the sync icon
    left: '18%',
  },
  scrollView: {
    paddingTop: 90, // Pushes content down to start below the app bar
    zIndex: 1, // This content can scroll over the app bar
  },
  notifi: {
    flexDirection: 'row', // Ensures icon and text are in a row
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B94FC6',
    height: 32,
    width: '100%',
  },
  bellIcon: {
    marginRight: 8, // Adds space between the icon and the text
  },
  notifi_text: {
    color: 'white',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#21222A',
    borderRadius: 10,
    marginBottom: 16,
  },
  imageCard: {
    position: 'relative', // To stack text image on top of the main image
    borderRadius: 10,
    overflow: 'hidden',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  bannerImage: {
    width: '100%',
    height: 310,

  },
  overlayImage: {
    position: 'absolute',
    top: -5,
    left: 0,
    width: "100%",
    height: 100,
    resizeMode: 'contain',  // Adjust this based on how you want the overlay to look
    transform: [{ rotate: '-7deg' }],
    opacity: 0.8
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',  // Fades out the bottom half
  },
  
});

export default App;
