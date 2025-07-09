import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

export default function VizualizadorScreen({ route, navigation }: any) {

    const {id} = route.params;

    function voltar(){
        navigation.goBack()
    }

    return (
        <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center'}}>
                <Pressable
                    onPress={voltar}
                >
                    <Image
                        style={{width:'auto', height: 400}}
                        source={id}
                    />
                </Pressable>
        </View>
)}