import { View, Text, Image, SafeAreaView, ScrollView, TouchableHighlight, TouchableOpacity, Button } from "react-native"
import { Event } from "../../types"
import styles from "./eventListStyle"
import { COLORS } from "../../constants"

type EventListType = {
    event: Event;
    handleClick: Function;
    showDelete?: Boolean;
    handleDelete?: Function
}

const EventList = ({ event, handleClick, handleDelete, showDelete }: EventListType) => {
    const ticketText = () => {
        return <Text style={[styles.entry, { color: event.entry === 'paid' ? COLORS.primary : COLORS.secondary }]}>{event.entry}</Text>
    }
    return (
        <TouchableOpacity onPress={() => handleClick()} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: event.image }}
                    resizeMode="contain"
                    style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <Text>{event.name}</Text>
                    <Text style={{ width: '50%' }} numberOfLines={2}>{event.location}</Text>
                    {showDelete ? ticketText() : null}
                </View>
                {showDelete ? <View>
                    <Button title="delete" color={'red'} onPress={() => { console.log('delete'); handleDelete ? handleDelete() : null }} />
                </View> : ticketText()}
            </View>
        </TouchableOpacity>
    )
}

export default EventList