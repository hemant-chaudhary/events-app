import { Alert, Modal, Text, Pressable, View } from 'react-native';
import { useEffect, useState } from 'react';
import styles from './usernameModalStyles';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { addUser } from '../../reducers/user';

type usernameModalType = {
    propUsername: string;
}
const usernameModal = ({ propUsername }: usernameModalType) => {
    const [modalVisible, setModalVisible] = useState(true);
    const [username, setUsername] = useState('11');
    const dispatch = useAppDispatch()

    const setUsernameInRedux = () => {
        dispatch(addUser(username))
        setModalVisible(prevState => !prevState)
    }

    useEffect(() => {
        if (propUsername && username) {
            setModalVisible(false)
        } else {
            setModalVisible(true)
        }
    }, [propUsername])

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput style={styles.input} value={username} placeholder='enter username' onChangeText={text => setUsername(text)} />
                        <Pressable disabled={username.length == 0}
                            style={[styles.button, styles.buttonClose, username.length == 0 ? { backgroundColor: COLORS.gray } : {}]}
                            onPress={() => setUsernameInRedux()}>
                            <Text style={styles.textStyle}>Done</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default usernameModal