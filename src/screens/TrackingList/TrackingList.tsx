import { Button, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks'
import { useCallback, useEffect, useState } from 'react';
import { Event, HomePropsNavigation } from '../../types';
import EventCard from '../../components/eventCard/eventCard';
import { SIZES } from '../../constants';
import styles from './TrackingListStyle';
import EventList from '../../components/eventList/eventList';
import { ScrollView } from 'react-native-gesture-handler';
import { deleteEvent } from '../../reducers/trackingList';
import { useNavigation } from '@react-navigation/native';
const viewType = ["List", "Grid"];

const TrackingList = () => {
    const trackingList = useAppSelector((state) => state.trackingList)
    const username = useAppSelector((state) => state.user.name)
    const dispatch = useAppDispatch();
    const navigation = useNavigation<HomePropsNavigation>();
    const [activeViewType, setactiveViewType] = useState("List");
    const [eventList, setEventList] = useState<Event[]>([]);

    useEffect(() => {
        const tempList = trackingList.filter((tracker) => {
            return tracker.name === username
        })
        setEventList(tempList[0]?.trackingEvents)
    }, [eventList, trackingList])

    const handleClick = (id: number) => {
        const filteredEvent: Array<Event> = eventList.filter((event: Event) => event.id == id)
        navigation.navigate('Details', { event: filteredEvent[0] });
    }

    const renderEventsList = useCallback(({ item }: { item: Event }) => (
        <EventList showDelete={true} handleDelete={() => { dispatch(deleteEvent({ event: item, username })) }} event={item} handleClick={() => handleClick(item.id)} />
    ), [])


    const renderEventsGrid = useCallback(({ item }: { item: Event }) => (
        <EventCard event={item} handleClick={() => handleClick(item.id)} />
    ), [])

    const eventsList = () => {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={eventList}
                    key={"_"}
                    renderItem={renderEventsList}
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
                    renderItem={renderEventsGrid}
                    keyExtractor={(item: Event) => item.id + '#' + item.name}
                    numColumns={2}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                />
            </View>
        )
    }

    const renderTabs = useCallback(({ item }: { item: string }) => (
        <TouchableOpacity
            style={styles.tab}
            onPress={() => {
                setactiveViewType(item);
            }}
        >
            <Text>{item}</Text>
        </TouchableOpacity>
    ), [])

    return (
        <>
            <View style={styles.tabsContainer}>
                <FlatList
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                    data={viewType}
                    renderItem={renderTabs}
                />
            </View>
            {activeViewType === 'List' ? eventsList() : eventsGrid()}
        </>

    );
};

export default TrackingList;
