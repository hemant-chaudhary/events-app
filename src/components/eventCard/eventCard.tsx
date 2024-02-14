import { View, Text, Image, SafeAreaView, ScrollView, TouchableHighlight, TouchableOpacity } from "react-native"
import { Event } from "../../types"
import styles from "./eventCardStyle"
import { COLORS } from "../../constants"

type EventCardType = {
    event: Event;
    handleClick: Function
}
const EventCard = ({ event, handleClick }: EventCardType) => {
    return (
        <TouchableOpacity onPress={() => handleClick} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: event.image }}
                    resizeMode="contain"
                    style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <Text>{event.name}</Text>
                    <Text>{event.location}</Text>
                </View>
                <Text style={[styles.entry, event.entry === 'paid' ? styles.paidEntry : styles.freeEntry]}>{event.entry}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default EventCard