import React from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
const TaskCard = ({ item, triggerEditTask, handleCheck, handleDelete }) => {
  const navigation=useNavigation();
  const navigateToTaskDetails=()=>{
    navigation.navigate('TaskDetailsScreen',{
      title:item.title,
      description:item.description,
    });
  }
  return (
    <TouchableOpacity onPress={navigateToTaskDetails}>
    <View style={styles.itemCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={[styles.cardPriority, styles[item.priority]]}>{item.priority}</Text>
      </View>

      <Text style={styles.cardDescription}>{item.description}</Text>

      <View style={styles.cardFooter}>
        <View style={styles.cardStatus}>
          <Image
            style={styles.cardActionIcon}
            source={item.done ? require('../../assets/done.png') : require('../../assets/pending.png')}
          />
          <Text style={item.done ? styles.taskDone : styles.taskPending}>{item.done ? 'Done' : 'Pending'}</Text>
        </View>

        <View style={styles.cardActions}>
          <TouchableOpacity onPress={() => handleCheck(item.id)}>
            <View style={styles.cardActionButton}>
              {item.done ? (
                <Image style={styles.cardActionIcon} source={require('../../assets/uncheck.png')} />
              ) : (
                <Image style={styles.cardActionIcon} source={require('../../assets/check.png')} />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => triggerEditTask(item)}>
            <View style={styles.cardActionButton}>
              <Image style={styles.cardActionIcon} source={require('../../assets/edit.png')} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <View style={styles.cardActionButton}>
              <Image style={styles.cardActionIcon} source={require('../../assets/delete.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default TaskCard
