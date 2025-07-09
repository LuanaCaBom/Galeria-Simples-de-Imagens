import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Alert, Image, ImageSourcePropType, ScrollView } from 'react-native';

export default function GaleriaScreen({ navigation }: any) {

    const galeria: ImageSourcePropType[] = [
        require('../../assets/constelacoes/aquario.jpg'),
        require('../../assets/constelacoes/aries.jpg'),
        require('../../assets/constelacoes/cancer.jpg'),
        require('../../assets/constelacoes/capricornio.jpg'),
        require('../../assets/constelacoes/escorpiao.jpg'),
        require('../../assets/constelacoes/gemeos.jpg'),
        require('../../assets/constelacoes/leao.jpg'),
        require('../../assets/constelacoes/libra.jpg'),
        require('../../assets/constelacoes/peixes.jpg'),
        require('../../assets/constelacoes/sagitario.jpg'),
        require('../../assets/constelacoes/touro.jpg'),
        require('../../assets/constelacoes/virgem.jpg')
    ]

    function mudar(img: any) {
        navigation.navigate('pag-vizualizacao', {id: img})
    }

    return (
            <View style={{flex: 1, paddingTop: 100, backgroundColor: 'black'}}>
                <View  style={{alignItems:'center'}}>

                    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', paddingBottom: 30}}>Seja bem-vindo(a) !!!</Text>
                    
                    <Text style={{color: 'white', fontSize: 15, paddingBottom: 10}}>Deslize as imagens para ver mais.</Text>
                    
                    <ScrollView horizontal>
                        
                            {galeria.map((imagem) => (
                                    <Pressable
                                        onPress={() => mudar(imagem)}
                                    >
                                        <Image 
                                            style={{ width: 200, height: 200, margin: 5, borderWidth: 2, borderColor: 'white'}}
                                            source={imagem}

                                        />
                                    </Pressable>
                                )
                            )}

                    </ScrollView>

                    <Text style={{color: 'white', fontSize: 15, paddingBottom: 10}}>Clique em alguma para vê-la em tela cheia.</Text>
                </View>
            </View>
    )
}