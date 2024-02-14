import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {HomePropsNavigation} from '../../types';

export const events = useAppSelector(state => state.events);
export const username = useAppSelector(state => state.user.name);
export const navigation = useNavigation<HomePropsNavigation>();
export const dispatch = useAppDispatch();
