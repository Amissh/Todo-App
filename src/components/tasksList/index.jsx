import { FlatList, Text, View, Image } from 'react-native'
import TaskCard from '../taskCard'
import { styles } from './styles'
import {useMemo} from 'react'

const TasksList = ({ tasks,searchItem, flatListRef, triggerEditTask, handleCheck, handleDelete }) => {
  const renderItem = ({ item }) => (
    <TaskCard item={item} triggerEditTask={triggerEditTask} handleCheck={handleCheck} handleDelete={handleDelete} />
  )
  const renderedData=useMemo(()=>{
    return tasks.filter(task=>
      task.title.toLowerCase().includes(searchItem.toLowerCase())
      )
  },[tasks,searchItem]);
  return (
    <View style={styles.listContainer}>
      {tasks.length === 0 ? (
        <View style={styles.noContentContainer}>
          <Image style={styles.noContentImg} source={require('../../assets/warning.png')} />
          <Text style={styles.noContentText}>No tasks</Text>
        </View>
      ) : (
        <FlatList
          ref={flatListRef}
          data={renderedData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}

export default TasksList