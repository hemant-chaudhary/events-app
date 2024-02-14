import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../hooks'
import React, { useCallback, useEffect, useState } from 'react';
import { Event, HomePropsNavigation } from '../../types';
import EventCard from '../../components/eventCard/eventCard';
import { SIZES } from '../../constants';
import styles from './HomeStyles';
import EventList from '../../components/eventList/eventList';
import UsernameModal from '../../components/usernameModal/usernameModal';
import { resetUser } from '../../reducers/user';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const viewType = ["List", "Grid"];
  const events = useAppSelector((state) => state.events)
  const dispatch = useAppDispatch()
  const username = useAppSelector((state) => state.user.name);
  const navigation = useNavigation<HomePropsNavigation>();
  const [activeViewType, setactiveViewType] = useState("List");

  const handleClick = (id: number) => {
    const filteredEvent: Array<Event> = events.filter((event: Event) => event.id == id)
    navigation.navigate('Details', { event: filteredEvent[0] });
  }

  const renderEventsList = useCallback(({ item }: { item: Event }) => (
    <EventList event={item} handleClick={() => handleClick(item.id)} />
  ), [])


  const renderEventsGrid = useCallback(({ item }: { item: Event }) => (
    <EventCard event={item} handleClick={() => handleClick(item.id)} />
  ), [])

  const eventsList = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={events}
          key={'_'}
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
          data={events}
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

  const navigateTrackingList = useCallback(() => navigation.navigate('UserTrackingList'), [])
  const resetUserLocal = useCallback(() => dispatch(resetUser()), [])

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
      <View>
        <Button title='change username' onPress={resetUserLocal} />
      </View>

      <UsernameModal propUsername={username} />

      <Text>{username}</Text>
      <Button title='Tracking page' onPress={navigateTrackingList} />
    </>

  );
};

export default Home;
