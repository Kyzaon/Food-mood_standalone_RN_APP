import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import {db} from './AppData/firebase';

import Main from './AppData/home.js'
import MoodFirst from './AppData/mood1.js'
import MoodSecond from './AppData/mood2.js'
import MoodFinal from './AppData/moodFinal.js'


export default class App extends React.Component {
    render() {

        return (
            <Router>
                <Scene key={'root'}>
                    <Scene
                    key={'main'}
                    component={Main}
                    title={'Main'}
                    initial
                    />
                    <Scene
                        key={'moodFirst'}
                        component={MoodFirst}
                        title={`Let's check Your mood`}
                    />
                    <Scene
                        key={'moodSecond'}
                        component={MoodSecond}
                        title={`Still checking ...`}
                    />
                    <Scene
                        key={'moodFinal'}
                        component={MoodFinal}
                        title={`Here's Your treat!`}
                    />

                </Scene>
            </Router>
        );
    }
}

