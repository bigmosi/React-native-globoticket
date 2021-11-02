import React from "react"; 
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import globoTickets from './TicketsDB';


const Tickets = () => {
    const ticketsItem = ({item}) => {
        return (
            <View style={Styles.tickets}>
                <View>
                    <Image
                      style={styles.img}
                      source={item.image}
                       
                    />
                </View>
                <View>
                    <Text style={styles.tickettitle}>
                        {item.event}
                    </Text>
                    <Text style={styles.ticketshortdescription}>
                        {item.shortDescription}
                    </Text>
                    <Text
                       style={styles.ticketdescription}
                       numberOfLines={2}
                       ellipsizeMode='tail'
                    >
                        {item.description}
                    </Text>
                </View>
            </View>
        )
    }
}