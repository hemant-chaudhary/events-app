import { Button, Image, Text, View } from "react-native"
import { Event } from "../../types";
import styles from "./EventDetailStyle";
import { COLORS } from "../../constants";
import { useAppSelector, useAppDispatch } from '../../hooks'
import { addEvent } from "../../reducers/trackingList";


const EventDetails = ({ route }: { route: any }) => {
    const event: Event = route.params.event[0];
    const dispatch = useAppDispatch()
    const username = useAppSelector((state) => state.user.name)

    return (
        <View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: event.image }}
                    resizeMode="contain"
                    style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.eventName}>{event.name}</Text>
                <Text style={styles.eventLocation}>{event.location}</Text>
                <Text style={[styles.entry, { textAlign: 'center', color: event.entry === 'paid' ? COLORS.primary : COLORS.secondary }]}>{event.entry}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button color={'black'} title="Track event" onPress={() => dispatch(addEvent({ username, event }))} />

            </View>
        </View>
    )
}

export default EventDetails