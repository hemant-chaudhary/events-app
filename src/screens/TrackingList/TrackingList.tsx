import { Button, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks'
import { useEffect, useState } from 'react';
import { Event } from '../../types';
import EventCard from '../../components/eventCard/eventCard';
import { SIZES } from '../../constants';
import styles from './TrackingListStyle';
import EventList from '../../components/eventList/eventList';
import { ScrollView } from 'react-native-gesture-handler';
import { deleteEvent } from '../../reducers/trackingList';
const viewType = ["List", "Grid"];

const TrackingList = ({ navigation }: { navigation: any }) => {
    const trackingList = useAppSelector((state) => state.trackingList)
    const username = useAppSelector((state) => state.user.name)
    const dispatch = useAppDispatch()
    const [activeViewType, setactiveViewType] = useState("List");
    const [eventList, setEventList] = useState<Event[]>([]);

    useEffect(() => {
        const tempList = trackingList.filter((tracker) => {
            return tracker.name === username
        })
        setEventList(tempList[0]?.trackingEvents)
    }, [eventList, trackingList])

    const handleClick = (id: number) => {
        const event: Event[] = eventList.filter((event) => event.id == id)
        navigation.navigate('Details', {
            event,
        });
    }

    const eventsList = () => {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={eventList}
                    key={"_"}
                    renderItem={({ item }) => <EventList showDelete={true} handleDelete={() => { console.log('deletd'); dispatch(deleteEvent({ event: item, username })) }} event={item} handleClick={() => handleClick(item.id)} />}
                    keyExtractor={(item: Event) => item.id + '_' + item.name}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                />
            </View>
        )
    }

    const eventsGrid = () => {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={eventList}
                    key={'#'}
                    renderItem={({ item }) => <EventCard event={item} handleClick={() => handleClick(item.id)} />}
                    keyExtractor={(item: Event) => item.id + '#' + item.name}
                    numColumns={2}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                />
            </View>
        )
    }

    return (
        <>
            <View style={styles.tabsContainer}>
                <FlatList
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                    data={viewType}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab}
                            onPress={() => {
                                setactiveViewType(item);
                            }}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            {activeViewType === 'List' ? eventsList() : eventsGrid()}
        </>

    );
};

export default TrackingList;
