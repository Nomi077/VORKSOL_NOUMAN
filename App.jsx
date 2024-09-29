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
import IconEntypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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

        <View style={styles.drops}>
          <LinearGradient
            colors={['rgba(97, 45, 184, 1)', 'rgba(236, 27, 227, 1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.dropsGradient}
          >
            <Text style={styles.dropsLabel}>EXCLUSIVE DROPS</Text>
            <Text style={styles.dropsTitle}>Vans season</Text>
            <View style={styles.line}></View>
            <Text style={styles.dropsSubtitle}>Lorem ipsum dolor sit amet</Text>

            <TouchableOpacity style={styles.dropsButton}>
              <Text style={styles.dropsButtonText}>Vai allo shop</Text>
            </TouchableOpacity>
            <View style={styles.imageWrapper}>
              <Image
                source={require('./assets/vans_skateboard2.png')} // Placeholder image
                style={styles.skateboardImage}
              />
              <Image
                source={require('./assets/vans_bag.png')} // Placeholder image
                style={styles.bagImage}
              />
              <Image
                source={require('./assets/vans_hat.png')} // Placeholder image
                style={styles.hatImage}
              />
            </View>
          </LinearGradient>
        </View>
        <View style={styles.creatorsSection}>
          <Text style={styles.creatorsTitle}>Creators</Text>

          <View style={styles.creatorsRow}>
            <View>
              <View style={styles.Frame}>
                <LinearGradient
                  colors={['rgba(22, 14, 43, 0.3)', 'rgba(98, 51, 186, 0.3)']}
                  style={styles.creatorGradient}
                >
                  <View style={styles.badgeContainer}>
                    <IconEntypo name="dot-single" size={20} color="white" />
                    <Text style={styles.liveBadge}>Live</Text>
                  </View>
                  <Image source={require('./assets/coscu_army.png')} style={styles.creatorImage} />
                </LinearGradient>

              </View>

              <Text style={styles.creatorName}>Coscu</Text>

            </View>
            <View>
              <View style={styles.Frame}>
                <View style={styles.badgeContainer}>
                  <IconEntypo name="dot-single" size={20} color="white" />
                  <Text style={styles.liveBadge}>Live</Text>
                </View>
                <Image
                  source={require('./assets/Rubius.png')}
                  style={styles.creatorImage}
                />

              </View>
              <Text style={styles.creatorName}>Rubius</Text>
            </View>
            <View>
              <View style={styles.Frame}>
                <View style={styles.badgeContainer}>
                  <IconEntypo name="dot-single" size={20} color="white" />
                  <Text style={styles.liveBadge}>Live</Text>
                </View>
                <Image
                  source={require('./assets/slakun10.png')}
                  style={styles.creatorImage}
                />

              </View>
              <Text style={styles.creatorName}>SLAKUN10</Text>
            </View>
          </View>

          <View style={styles.creatorsRow}>
            <View>
              <View style={styles.Frame}>
              <View style={styles.offBadgeContainer}>
                  <IconEntypo name="dot-single" size={20} color="#605D66" />
                  <Text style={styles.offlineBadgeText}>Offline</Text>
                </View>
                <Image
                  source={require('./assets/slakun10.png')}
                  style={styles.creatorImage}
                />

              </View>
              <Text style={styles.creatorName}>SLAKUN10</Text>
            </View>
            <View>
              <View style={styles.Frame}>
                <LinearGradient
                  colors={['rgba(22, 14, 43, 0.3)', 'rgba(98, 51, 186, 0.3)']}
                  style={styles.creatorGradient}
                >
                 <View style={styles.offBadgeContainer}>
                  <IconEntypo name="dot-single" size={20} color="#605D66" />
                  <Text style={styles.offlineBadgeText}>Offline</Text>
                </View>
                  <Image source={require('./assets/coscu_army.png')} style={styles.creatorImage} />
                </LinearGradient>

              </View>

              <Text style={styles.creatorName}>Coscu</Text>

            </View>

            <View>
              <View style={styles.Frame}>
                <View style={styles.badgeContainer}>
                  <IconEntypo name="dot-single" size={20} color="white" />
                  <Text style={styles.liveBadge}>Live</Text>
                </View>
                <Image
                  source={require('./assets/Rubius.png')}
                  style={styles.creatorImage}
                />

              </View>
              <Text style={styles.creatorName}>Rubius</Text>
            </View>
          </View>
        </View>

        <View style={styles.discoverMoreContainer}>
          <Text style={styles.discoverMoreText}>Discover more</Text>
          <IconAnt name="right" size={16} color="#B29DFF" />
        </View>
        <View style={styles.buttonContainer}>
      {/* First Button */}
      <TouchableOpacity style={ styles.button1}>
        <View style={[styles.textcontainer , styles.textcontainer1]}>
      <MaterialCommunityIcons name="text-box-outline" size={18} color="white" />
        <Text style={styles.text}>Consulta regolamento</Text>
        </View>
      </TouchableOpacity>

      {/* Second Button */}
      <TouchableOpacity style={ styles.button2}>
      <View style={[styles.textcontainer, styles.textcontainer2]}>
        <Text style={styles.text}>
       
          Disattiva notifiche
          </Text>
          <Ionicons name="notifications-outline" size={18} color="white" />
          </View>
      </TouchableOpacity>
    </View>

        {/* <View style={styles.buttonsContainer}>
       
            <TouchableOpacity style={styles.buttonLeft}>
              <MaterialCommunityIcons name="text-box-outline" size={18} color="white" />
              <Text style={styles.buttonText2}>Consulta regolamento</Text>
            </TouchableOpacity>
        

         
            <TouchableOpacity style={styles.buttonRight}>
              <Ionicons name="notifications-outline" size={18} color="white" />
              <Text style={styles.buttonText2}>Disattiva notifiche</Text>
            </TouchableOpacity>

        </View> */}



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
    position: 'relative', 
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
    position: 'absolute',  
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
    paddingHorizontal: 1,
    paddingBottom: 20,
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
    resizeMode: 'contain', 
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
    alignItems: 'center', 
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
    alignItems: 'center',
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
    alignItems: 'center',
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
    alignSelf: 'center'
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
    alignSelf: "center",
  },
  golden: {
    height: 142,
    width: 107,
  },
  gpIcon: {
    width: 89,
    height: 86,
    top: 10,
    resizeMode: 'contain', // To properly scale the icon

  },
  gbgradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',

  },
  drops: {
    height: 174,
    width: "90%",
    borderRadius: 16,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 20,
  },
  dropsGradient: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    justifyContent: 'space-between',
    zIndex: 4
  },
  dropsLabel: {
    backgroundColor: '#181A1F',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    width: 142,
    height: 24,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4
  },
  dropsTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 1,
  },
  line: {
    backgroundColor: "#B94FC6",
    height: 4,
    width: 24,
    borderRadius: 8,
    marginTop: 5
  },
  dropsSubtitle: {
    marginTop: 7,
    color: '#E6E1E6',
    fontSize: 14,
    marginBottom: 16,
    opacity: 0.7
  },
  dropsButton: {
    backgroundColor: '#B94FC6',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    height: 32,
    width: 126
  },
  dropsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-end', // Aligns to the bottom of the wrapper
    justifyContent: 'flex-end',
  },
  skateboardImage: {
    width: 100.41,
    height: 157.5,
    resizeMode: 'contain',
    zIndex: 1,
    transform: [{ rotate: '4.98deg' }], //adjust rotation  
    left: 103
  },
  bagImage: {
    width: 88,
    height: 124,
    resizeMode: 'contain',
    zIndex: 0,
    left: 60
  },
  hatImage: {
    width: 59,
    height: 77.5,
    resizeMode: 'contain',
    zIndex: 2,
    transform: [{ rotate: '6deg' }],
    bottom: 93,
    right: 44
  },
  creatorsSection: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  creatorsTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    alignSelf:'center',
    
  },
  creatorsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  Frame: {

    // backgroundColor:"white",
    width: 103.67,
    height: 144,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  badgeContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#D5182A',
    zIndex: 1,
    flexDirection: "row",
    borderRadius: 8,
    height: 18,
    width: 48
  },
  offBadgeContainer:{
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#312F37',
    zIndex: 1,
    flexDirection: "row",
    borderRadius: 8,
    height: 18,
    width: 62
  },
  creatorGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    borderRadius: 8,
  },
  liveBadge: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  offlineBadgeText: {
    color: '#605D66',
    fontSize: 12,
    fontWeight: 'bold',
  },
  creatorImage: {
    width: 103,
    height: 144,
    resizeMode: 'contain',
    borderRadius: 8,
    zIndex: 0
  },
  creatorName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',

  },
  discoverMoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom:25
  },
  discoverMoreText: {
    color: '#B29DFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 4,
   
  },
  buttonContainer:{
   flexDirection:"row",
   justifyContent: 'center',
   alignItems: 'center',
   gap:9
  },
  textcontainer:{
    position:'absolute',
    flexDirection:"row",
  },
  textcontainer1:{
    alignItems:"center",
    justifyContent:"center",
    gap: 6
  },
  textcontainer2:{
    
  
    alignItems:"center",
    justifyContent:"flex-end",
    right:"2%"
  },
  text: {
     height:32,
     width:68,
    color: '#fff',
    fontWeight: 'bold',
    fontSize:14
  },
  button1: {
    width: 169,
    height: 48,
    borderTopWidth: 48,
    borderTopColor: '#7F56FF',
    borderRightWidth: 8,
    borderRightColor: '#181A1F',
    justifyContent: 'center', 
    alignItems: 'center', 
    borderBottomLeftRadius: 8, 
    borderTopLeftRadius: 8, 
  },
  button2: {
    width: 169,
    height: 48,
    backgroundColor: '#B94FC6', 
    borderBottomWidth: 48,
    borderBottomColor: '#B94FC6',
    borderLeftWidth: 8,
    borderLeftColor: '#181A1F',
    justifyContent: 'center', 
    alignItems: 'center',
    borderBottomRightRadius: 8, 
    borderTopRightRadius: 8,
  },
  
});

export default App;
