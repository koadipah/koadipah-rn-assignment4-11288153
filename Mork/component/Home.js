import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Cards from './Featured';
import Popular from './Popularjobs';

const Home = ({ route }) => {
  const { name, email } = route.params;
    return(
        <View style={styles.container}>
          <ScrollView>
              <View style={styles.profileContainer}>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{name}</Text>
                <Text style={styles.profileEmail}>{email}</Text>  
              </View>
              <Image source={require('../assets/profile.jpeg')} style={styles.profileImage} />
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.search_Text}>
                  <Image source={require('../assets/search.png')} style={styles.SearchImage} />
                  <TextInput placeholder='Search a job or position' placeholderTextColor={'#BEBEBE'} style={styles.TextInput}/>
                </View>
                <View>
                  <TouchableOpacity>
                  <Image source={require('../assets/menu.png')} style={styles.SliderImage} />
                  </TouchableOpacity>
                </View>
                </View>

                <View style={styles.jobSection}>
                  <Text style={styles.jobText}>Featured Jobs</Text>
                  <Text style={styles.allJobs}>See All </Text>
                </View>
                <Cards/>
                <View style={styles.jobSection}>
                  <Text style={styles.jobText}>Popular Jobs</Text>
                  <Text style={styles.allJobs}>See All </Text>
                </View>
                <Popular/>

          </ScrollView>
          <Cards/>
          
      <StatusBar style="auto" />
    </View>
    );
    
}

export default Home;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      justifyContent: 'center',
    },
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
      marginVertical: 60,
      marginHorizontal: 25,
    },
    profileImage: {
      width: 48,
      height: 48,
      borderRadius: 24,
    },
    profileInfo: {
      flex: 1, 
      marginRight: 10, 
    },
    profileName: {
      fontSize: 26,
      fontWeight: 'bold',
    },
    profileEmail: {
      fontSize: 16,
      color: '#BEBEBE',
    },
    searchContainer:{
     flexDirection: 'row',
     marginLeft:30
    },
    search_Text:{
      padding:10,
      paddingLeft:20,
      paddingRight:20,
      backgroundColor:'#F2F2F3',
      flexDirection: 'row',
      borderRadius: 8
    } ,

    TextInput:{
      fontSize:16,
      textAlign:'center'
    },

      SearchImage:{
      height:23,
      width:28,
     },

     SliderImage:{
      height:30,
      width:35,
      borderRadius:6,
      padding:23,
      backgroundColor:'#F2F2F3',
      marginTop: 3,
      marginLeft:10
     },
     jobText:{
      fontWeight:'bold',
      fontSize: 18
     },
     allJobs:{
      fontSize: 12,
      color:'#BEBEBE'
     },
     jobSection:{
      flexDirection: 'row',
      justifyContent:'space-between',
      marginTop: 30,
      marginLeft:30,
      marginRight:30
     }
  })