import React from 'react';
import { View, Text } from 'native-base';
import { StyleSheet, Image } from 'react-native';

class Picture extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View
                style={styles.view}
            >
                <Image
                    source={{ uri: navigation.state.params.url }}
                    style={styles.image}
                />
                <Text
                    style={styles.text}
                >
                    {navigation.state.params.title}
                </Text>
            </View>
        )
    }
}
export default Picture;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 5
    },
    text: {
        textAlign: 'center'
    }
})