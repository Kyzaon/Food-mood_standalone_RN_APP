import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {db} from './firebase';



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
class MoodFinal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            foodIngredients: [],
            ingredients: [],
            recipe: '',
            utensils: [],
            name: ''
        }
    }


    render(){

        // if(this.state.foodIngredients.length) {
        //     this.stateFill();
        // }
        let str = this.state.ingredients.map((e,i) => {
            return <Text style={{color: 'white', padding: 5}} key={i}>Ingredients: {e}</Text>
        });

        return(
            <View style={viewportMoodStyles.containerMood}>
                <BackgroundImage/>
                <Image style={viewportMoodStyles.smileMood} source={require('../assets/pancakes.png')} resizeMode={'contain'} />;
                <View style={{width: "90%", margin: 10, padding: 5, backgroundColor: 'hsla(0, 0%, 0%, 0.7)', borderRadius: 25, shadowColor: "black", shadowOffset: { height: 2}, shadowOpacity: 2}}>
                    <Text style={{color: 'white', fontSize: 30, padding: 5}}>{this.state.name}</Text>
                    {str}
                    <Text style={{color: 'white', padding: 5}}>Recipe: {this.state.recipe}</Text>
                </View>
                <View style={[{ width: "90%", margin: 10, backgroundColor: 'hsla(0, 0%, 0%, 0.7)', position: 'absolute', bottom: 0 }]}>
                    <Button
                        onPress={() => Actions.main()}
                        title={`༼ つ ◕_◕ ༽つ {FOOD} `}
                        color='white'
                    />
                </View>
            </View>
        )
    }

    componentDidMount(){
        db.collection('foodIngredients').get().then((response) =>{

            const random = Math.floor(Math.random() * 4);

            const temp = []
            response.docs.forEach((e) =>{
                temp.push(e.data()) ///?
            })
            this.setState({
                foodIngredients: temp,
                ingredients: [temp[random].ingredients],
                name: [temp[random].name],
                recipe: [temp[random].recipe],
                utensils: [temp[random].utensils]
            })

            // response.docs.forEach((e) =>{
            //     let d = e.data();
            //     this.setState({
            //         foodIngredients: [...this.state.foodIngredients, d]
            //     }, () => {
            //         this.setState({
            //             ingredients: [this.state.foodIngredients[0].ingredients],
            //             name: [this.state.foodIngredients[0].name],
            //             recipe: [this.state.foodIngredients[0].recipe],
            //             utensils: [this.state.foodIngredients[0].utensils]
            //
            //         })
            //     })
            // })

        })
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
        height:150,
        width: 150,
        position: 'absolute',
        shadowColor: "black",
        shadowOffset: { height: 2},
        shadowOpacity: 2,
        top: 0
    },

});

export default MoodFinal

