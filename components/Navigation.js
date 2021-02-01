import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import GalleryPictures from './GalleryPictures';
import Picture from './Picture';

const Stack = createStackNavigator({
    ListPictures: {
        screen: GalleryPictures,
        navigationOptions: {
            title: 'Gallery Photos'
        }
    },
    CurrentPicture: {
        screen: Picture,
        navigationOptions: ({ navigation }) => {
            return {
                title: navigation.state.params.title
            };
        }
    }
},
    {
        initialRouteName: 'ListPictures'
    })
export default createAppContainer(Stack);