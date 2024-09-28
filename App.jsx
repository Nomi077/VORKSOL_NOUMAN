import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar';

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
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
              style={styles.gradient}
            />
            <TouchableOpacity style={styles.buttonWrapper}>
              <LinearGradient
                colors={['rgba(51,0,154,1)', 'rgba(127,86,255,1)', 'rgba(255,71,130,1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 3 }}
                style={styles.buttonBackground}
              >
                <Text style={styles.buttonText}>Gioca ora</Text>
              </LinearGradient>
            </TouchableOpacity>

          </View>

        </View>

        <View style={styles.gb}>
          <View style={styles.progress}>
            <View style={styles.pb1}>
              <ProgressBar progress={1} width={80} height={8} color="#2FE98C" borderWidth={0} borderRadius={8} />
            </View>
            <Image
              source={require('./assets/forziere1.png')}
              style={styles.forziere1}
            />
            <View style={styles.pb2}>
              <ProgressBar progress={0.8} width={58} height={8} color="#2FE98C" borderWidth={0} borderRadius={8} unfilledColor="rgba(205, 190, 255, 0.35)" />
            </View>
            <View style={styles.forziere}>
              <Image
                source={require('./assets/forziere.png')}
                style={styles.scifi}
              />
              <View style={styles.icon}>
                <Image
                  source={require('./assets/GP-icon.png')}
                  style={styles.iconimg}
                />
                <Text style={styles.iconText}>1650/2000</Text>

              </View>
            </View>
            <View style={styles.pb3}>
              <ProgressBar progress={0} width={57} height={8} color="#2FE98C" borderWidth={0} borderRadius={8} unfilledColor="rgba(205, 190, 255, 0.26)" />
            </View>
            <View style={styles.forz} >
              <Image
                source={require('./assets/forziere1.png')}
                style={styles.forziere1}
              />
              <View style={styles.icon}>
                <Image
                  source={require('./assets/GP-icon.png')}
                  style={styles.iconimg}
                />
                <Text style={styles.iconText}>3000</Text>

              </View>
            </View>
            <View style={styles.pb3}>
              <ProgressBar progress={0} width={57} height={8} color="#2FE98C" borderWidth={0} borderRadius={8} unfilledColor="rgba(205, 190, 255, 0.26)" />
            </View>
          </View>
          <LinearGradient
            colors={['rgba(236,27,227,0.36)', 'rgba(236,27,227,0)']}
            style={styles.gbgradient}
          />
        </View>
        <View style={styles.group}>
          <View style={styles.question}>
            <View style={styles.qmcontainer}>
            <LinearGradient
          colors={[
           'rgba(214, 16, 170, 0.9)',   // Bright magenta (closer to the image)
        'rgba(127, 86, 255, 0.2)', // Mid purple, softer with some transparency
        'rgba(24, 26, 31, 1)',      // Transparent dark purple
          ]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
                style={styles.qmgradient}
              >

                <Image
                  source={require('./assets/questionmark.png')}
                  style={styles.questionIcon}
                />
              </LinearGradient>

            </View>
            <Text style={styles.lockedText}>LOCKED</Text>
          </View>
          <View style={styles.golden}>
          <View style={styles.qmcontainer}>
            <LinearGradient
          colors={[
           'rgba(214, 182, 16, 0.9)',   
        'rgba(84, 58, 120, 0.2)', 
        'rgba(24, 26, 31, 1)',
          ]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
                style={styles.qmgradient}
              >

                <Image
                  source={require('./assets/GP1.png')}
                  style={styles.gpIcon}
                />
             
              </LinearGradient>

            </View>
            <Text style={styles.lockedText}>GOLDEN POINTS</Text>
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
    top: 20,
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
    paddingRight: 24,
    fontWeight: 'bold',
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
    paddingTop: 79, // Pushes content down to start below the app bar
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
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#21222A',
    borderRadius: 10,
    zIndex: 2,
  },
  imageCard: {
    position: 'relative', // To stack text image on top of the main image
    borderRadius: 10,
    overflow: 'hidden',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    zIndex: 2,
  },
  bannerImage: {
    width: '100%',
    height: 310,
    zIndex: 2,
    marginTop: 20,
  },
  overlayImage: {
    position: 'absolute',
    top: -5,
    left: 0,
    width: "100%",
    height: 117,
    resizeMode: 'contain',  // Adjust this based on how you want the overlay to look
    transform: [{ rotate: '-5deg' }],
    zIndex: 1,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    zIndex: 2,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,

  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    borderRadius: 8,
    width: 167,
    height: 42,
    overflow: 'hidden',
    zIndex: 3
  },
  buttonBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gb: {
    position: 'relative',
    height: 210,
    marginTop: -20,
    zIndex: 1,
  },
  gbgradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',

  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center', // Centers items vertically
    justifyContent: 'space-between',
    width: "100%",
    height: 122,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  pb1: {
    flex: 1, // Allows the progress bars to take up equal space
    left: -90,
  },
  forziere1: {
    height: 56,
    width: 56,
    opacity: 1,
    marginHorizontal: 10

  },
  pb2: {
    flex: 1, // Allows the progress bars to take up equal space
    marginLeft: 0,
  },
  scifi: {
    height: 84,
    width: 84,
  },
  forziere: {
    alignSelf: 'center',
    marginLeft: 75,
    marginRight: 8,
    top: 10
  },
  forz: {
    top: 10
  },
  iconText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold"
  },
  icon: {
    flexDirection: "row",
    alignItems: 'center', // Centers items vertically
    justifyContent: 'center',
  },
  iconimg: {
    height: 16,
    width: 16,
    top: 3
  },
  pb3: {
    marginLeft: 3,
  },
  group: {
    flexDirection: "row",
    alignItems: 'center', // Centers items vertically
    justifyContent: 'center',
    gap: 20
  },
  question: {
    height: 143,
    width: 116,
   
  },
  qmcontainer: {
    height: 92,
    width: 92,
    borderRadius: 30,
    backgroundColor: "black",
    alignSelf:'center'
  },
  qmgradient: {
    width: 92,
    height: 92,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionIcon: {
    width: 77,
    height: 107,
    resizeMode: 'contain', // To properly scale the icon
  },
  lockedText: {
    marginTop: 10,
    color: '#CDBEFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf:"center",
  },
  golden: {
    height: 142,
    width: 107,

  },
  gpIcon: {
    width: 89,
    height: 86,
    resizeMode: 'contain', // To properly scale the icon
 
  },

  
    
 gbgradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',

  },
});

export default App;
