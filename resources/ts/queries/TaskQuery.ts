import {useQuery} from "react-query"
import {getTasks} from "../api/TaskAPI"

const useTasks = () => {
    return useQuery('tasks', () => getTasks())
}

export {
    useTasks
}
