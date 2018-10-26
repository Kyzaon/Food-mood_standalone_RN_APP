import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

class BackgroundImage extends React.Component {
    render() {

        return (
            <Image
                style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    opacity: .5

                }}
                source={require('../assets/vegetables.jpg')}
            />
        );
    }
}
class Main extends React.Component {
    render() {
        return (
            <View style={viewportStyles.container}>
                <BackgroundImage/>
                <Image style={viewportStyles.chef} source={require('../assets/chef_PNG130.png')} resizeMode={'contain'} />;
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black', top: -100, backgroundColor: 'hsla(0, 0%, 50%, 0.3)'}}>What is Your mood today?</Text>
                <View style={[{ width: "90%", margin: 10, backgroundColor: 'hsla(0, 0%, 0%, 0.7)' }]}>
                    <Button
                        onPress={() => Actions.moodFirst()}
                        title='Your mood'
                        color='white'
                    />
                </View>
                <View style={[{ width: "90%", margin: 10, backgroundColor: 'hsla(0, 0%, 0%, 0.7)' }]}>
                    <Button
                        onPress={() => Actions.moodFirst()}
                        title='Your food'
                        color='white'
                    />
                </View>
            </View>
        );
    }
}

const viewportStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 4,
        borderColor: 'black',
    },
    chef: {
        height: 200,
        width: 200,
        top: -100,
        shadowColor: "black",
        shadowOffset: { height: 2},
        shadowOpacity: 2,
    },
    chefMood: {
        height: 150,
        width: 150,
        top: -150,
        shadowColor: "black",
        shadowOffset: { height: 2},
        shadowOpacity: 2,
    }
});

const buttonStyles = StyleSheet.create({
    buttonsMain: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        shadowColor: "black",
        shadowOffset: { height: 2},
        shadowOpacity: 2,
        color: 'black'
    }
});

export default Main
