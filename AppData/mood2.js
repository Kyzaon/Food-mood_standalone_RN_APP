import React from 'react';
import {StyleSheet, Text, View, Button, Image, Dimensions, TextInput} from 'react-native';

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
class MoodSecond extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'Your favourite veggie?',
            text2: 'Your favourite fruit?',
            text3: 'Your favourite untensil? (fork, spoon, knife)'
        }
    }

    handleClick() {
        this.props.history.push('/alohomora?txt1=this.state.text&txt2=')
    }
    render() {
        return (
            <View style={viewportMoodStyles.containerMood}>
                <BackgroundImage/>
                <Image style={viewportMoodStyles.smileMood} source={require('../assets/kisspng-pixel-art-minecraft-android-deviantart-happy-sad-5b2fa920e71967.2687314215298501449466.png')} resizeMode={'contain'} />;
                <View style={[{ width: "90%", margin: 10, padding: 5, backgroundColor: 'hsla(0, 20%, 50%, 0.3)', shadowColor: "black", shadowOffset: { height: 2}, shadowOpacity: 2}]}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: 'hsla(22, 87%, 66%, 1)'}}>And answer some questions too to get Your food dear User: </Text>
                </View>
                <View style={[{ width: "90%", margin: 10, backgroundColor: 'hsla(300, 100%, 25%, 0.7)', shadowColor: "black", shadowOffset: { height: 2}, shadowOpacity: 2, borderStyle: 'solid', borderWidth: 2, borderColor: 'hsla(300, 100%, 25%, 1)', borderRadius: 25, padding: 3 }]}>
                    <TextInput
                        style={{ fontSize: 20, color: 'white'}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        selectTextOnFocus={true}
                    />
                </View>
                <View style={[{ width: "90%", margin: 10, backgroundColor: 'hsla(20, 100%, 50%, 0.7)', shadowColor: "black", shadowOffset: { height: 2}, shadowOpacity: 2, borderStyle: 'solid', borderWidth: 2, borderColor: 'hsla(20, 100%, 50%, 1)', borderRadius: 25, padding: 3 }]}>
                    <TextInput
                        style={{ fontSize: 20, color: 'white'}}
                        onChangeText={(text2) => this.setState({text2})}
                        value={this.state.text2}
                        selectTextOnFocus={true}
                    />
                </View>
                <View style={[{ width: "90%", margin: 10, backgroundColor: 'hsla(180, 100%, 50%, 0.7)', shadowColor: "black", shadowOffset: { height: 2}, shadowOpacity: 2, borderStyle: 'solid', borderWidth: 2, borderColor: 'hsla(180, 100%, 50%, 1)', borderRadius: 25, padding: 3  }]}>
                    <TextInput
                        style={{ fontSize: 20, color: 'white'}}
                        onChangeText={(text3) => this.setState({text3})}
                        value={this.state.text3}
                        selectTextOnFocus={true}
                    />
                </View>


                <View style={[{ width: "90%", margin: 10, backgroundColor: 'hsla(0, 0%, 0%, 0.7)', position: 'absolute', bottom: 0 }]}>
                    <Button
                        onPress={() => Actions.moodFinal()}
                        title={`Let's get Your food!`}
                        color='white'
                    />
                </View>
            </View>
        );
    }
}



const viewportMoodStyles = StyleSheet.create({
    containerMood: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 4,
        borderColor: 'black',
    },
    smileMood: {
        height:100,
        width: 100,
        position: 'absolute',
        shadowColor: "black",
        shadowOffset: { height: 2},
        shadowOpacity: 2,
        top: 0
    },

});



export default MoodSecond