import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, FlatList,  } from 'react-native';
import React from 'react';

const data = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$18,000', location: 'Accra, Ghana', image: require('../assets/face.jpeg') },
    { id: '2', title: 'Jr. Executive', company: 'Google', salary: '$18,000', location: 'Accra, Ghana', image: require('../assets/google.jpeg') },
    { id: '3', title: 'IT Manager', company: 'Apple', salary: '$18,000', location: 'Accra, Ghana', image: require('../assets/meta.jpeg') },
    { id: '4', title: 'Software Engineer', company: 'Playstation', salary: '$18,000', location: 'Accra, Ghana', image: require('../assets/playstation.jpeg') },
    { id: '5', title: 'Chief Manager', company: 'whatsapp', salary: '$18,000', location: 'Accra, Ghana', image: require('../assets/whatsapp.png') },
    { id: '6', title: 'Database Analyst', company: 'xbox', salary: '$18,000', location: 'Accra, Ghana', image: require('../assets/xbox.png') },
    { id: '7', title: 'AI/ML engineer', company: 'Netflix', salary: '$18,000', location: 'Accra, Ghana', image: require('../assets/netflix.png') },
    { id: '8', title: 'Sales Manager', company: 'Burger King', salary: '$18,000', location: 'Accra, Ghana', image: require('../assets/burger.png') },
];

const colors = ['#3E8EDE', '#296d98', '#20B2AA', '#FFD700', '#FF69B4', '#8A2BE2', '#DC143C', '#FF6347'];

const Card = ({ title, company, salary, location, image, backgroundColor }) => (
    <View style={[styles.cardContainer, { backgroundColor }]}>
        <View style={styles.card}>
            <Image source={image} style={styles.socialImage}/>
            <View style={styles.JobInfo}>
                <Text>{title}</Text>
                <Text>{company}</Text>
            </View>
        </View>
        <View style={styles.CardInfo}>
            <Text>{salary}</Text>
            <Text>{location}</Text>
        </View>
    </View>
);

export default function Cards() {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <Card 
                        title={item.title} 
                        company={item.company} 
                        salary={item.salary} 
                        location={item.location} 
                        image={item.image}
                        backgroundColor={colors[index % colors.length]}
                    />
                )}
                keyExtractor={item => item.id}
                horizontal={true}
                contentContainerStyle={styles.flatListContainer}
                showsHorizontalScrollIndicator={false}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    flatListContainer: {
        paddingVertical: 0,
    },
    socialImage: {
        width: 20,
        height: 20,
        marginRight: 10,
        backgroundColor:'#fff',
        padding:20,
        borderRadius:9
    },
    card: {
        flexDirection: 'row',
        marginTop: 2,
        marginBottom: 20,
        
    },
    CardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        
    },
    cardContainer: {
        padding: 30,
        backgroundColor: '#3E8EDE',
        borderRadius: 16,
        marginRight: 20,
        marginLeft:20,
        paddingLeft:50,
        paddingRight:50,
        
    },
    JobInfo: {
        justifyContent: 'center',
      
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    company: {
        fontSize: 14,
        color: '#fff',
    },
   
    salary: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    location: {
        fontSize: 14,
        color: '#fff',
    },
});