import React from 'react';
import { List, ListItem, View, Text } from 'native-base';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { picturesFetchData } from '../store/load_pictures/actions';
import { connect } from 'react-redux';

class GalleryPictures extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getPictures('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
    }
    render() {
        const { navigation: { navigate } } = this.props;
        return (
            <ScrollView>
                <List>
                    {
                        Object.entries(this.props.pictures).map(([, value]) => {
                            return (
                                <ListItem
                                    key={value.id}
                                    style={styles.listItem}
                                    onPress={() => navigate('CurrentPicture', { url: value.urls.full, title: value.user.first_name })}
                                >
                                    <Image
                                        source={{ uri: value.urls.full }}
                                        style={styles.image}
                                    />
                                    <Text
                                        style={styles.text}
                                    >
                                        {value.user.first_name}
                                    </Text>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </ScrollView>
        )
    }
}
const mapStateToProps = state => {
    return {
        pictures: state.PicturesReducer
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getPictures: (url) => dispatch(picturesFetchData(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GalleryPictures);

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 130,
        width: 130,
        borderRadius: 5
    },
    text: {
        textAlign: 'center'
    }
})