import { Alert, Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks'
import React, { useEffect, useState } from 'react';
import { Event } from '../../types';
import EventCard from '../../components/eventCard/eventCard';
import { SIZES } from '../../constants';
import styles from './HomeStyles';
import EventList from '../../components/eventList/eventList';
import { ScrollView } from 'react-native-gesture-handler';
import UsernameModal from '../../components/usernameModal/usernameModal';
import { resetUser } from '../../reducers/user';
const viewType = ["List", "Grid"];

const Home = ({ navigation }: { navigation: any }) => {
  const events = useAppSelector((state) => state.events)
  const dispatch = useAppDispatch()
  const [activeViewType, setactiveViewType] = useState("List");
  const username = useAppSelector((state) => state.user.name)

  const handleClick = (id: number) => {
    const event: Array<Event> = events.filter((event) => event.id == id)
    navigation.navigate('Details', {
      event,
    });
  }

  const eventsList = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={events}
          key={"_"}
          renderItem={({ item }) => <EventList event={item} handleClick={() => handleClick(item.id)} />}
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
          data={events}
          key={'#'}
          renderItem={({ item }) => <EventCard event={item} handleClick={() => handleClick(item.id)} />}
          keyExtractor={(item: Event) => item.id + '#' + item.name}
          numColumns={2}
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      </View>
    )
  }

  useEffect(() => {
  }, [])
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
      <View>
        <Button title='change username' onPress={() => dispatch(resetUser())} />
      </View>

      <UsernameModal propUsername={username} />

      <Text>{username}</Text>
      <Button title='Tracking page' onPress={() => navigation.navigate('UserTrackingList', {
        itemId: 86,
        otherParam: 'anything you want here',
      })} />
    </>

  );
};

export default Home;
