import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Switch, TextInput } from 'react-native';
import { CheckBox, Rating, RatingProps } from 'react-native-elements'

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
class MoodFirst extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked : false,
            checked2: false,
            ratingStarted: 0,
            ratingCompleted: 0

        }
    }

    render() {
        return (
            <View style={viewportMoodStyles.containerMood}>
                <BackgroundImage/>
                <Image style={viewportMoodStyles.smileMood} source={require('../assets/kisspng-pixel-art-minecraft-android-deviantart-happy-sad-5b2fa920e71967.2687314215298501449466.png')} resizeMode={'contain'} />;

                <View style={[{ width: "90%", margin: 10, padding: 5, backgroundColor: 'hsla(0, 0%, 0%, 0.7)', display: 'flex', borderRadius: 25, shadowColor: "black", shadowOffset: { height: 2}, shadowOpacity: 2}]}>
                    <Text style={{fontSize: 15, padding: 5, fontWeight: 'bold', color: 'white'}}>Now, which leg did You wake up with? Maybe both?</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', padding: 5}}>
                <CheckBox
                center
                title='Left  '
                checked={this.state.checked}
                onPress={() => this.setState({checked: !this.state.checked})}
            />
                <CheckBox
                    center
                    title='Right'
                    checked={this.state.checked2}
                    onPress={() => this.setState({checked2: !this.state.checked2})}
                />
                    </View>
                </View>



                <View style={[{ width: "90%", margin: 10, backgroundColor: 'hsla(0, 0%, 0%, 0.7)', position: 'absolute', bottom: 0 }]}>
                    <Button
                        onPress={() => Actions.moodSecond()}
                        title='Next page'
                        color='white'
                    />
                </View>
                <View style={[{ width: "90%", margin: 10, padding: 5, backgroundColor: 'hsla(0, 0%, 100%, 1)', display: 'flex', borderRadius: 25, shadowColor: "black", shadowOffset: { height: 2}, shadowOpacity: 2}]}>
                    <Text style={{fontSize: 15, padding: 5, fontWeight: 'bold', color: 'hsl(215, 13%, 41%)'}}>And how was Your morning?                    Have someone said hello and smiled to You?</Text>
                    <Rating
                        type="heart"
                        ratingCount={5}
                        fractions={2}
                        startingValue={0}
                        imageSize={40}
                        onFinishRating={this.ratingCompleted}
                        onStartRating={this.ratingStarted}
                        showRating
                        style={{ paddingVertical: 10, alignSelf: 'center' }}
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


export default MoodFirst
