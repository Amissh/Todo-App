import { useNavigation } from '@react-navigation/native';
import {React} from 'react'
import{View,Text,Button} from 'react-native'

const TaskDetailsScreen=({route})=>{
    const {title,description}=route.params;
    const navigation=useNavigation();
    const goBack=()=>{
        navigation.goBack();
    }
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'black'}}>
            <Text style={{ color:'white'}}>Title: {title}</Text>
            <Text style={{ color:'white'}}>Description: {description}</Text>
            <Button title="Go Back" onPress={goBack} />
        </View>
    )
}

export default TaskDetailsScreen;
