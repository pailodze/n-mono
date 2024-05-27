import { createCrudFunctions } from "./Api/BaseApi";

const { createApi, updateApi, deleteApi, useData } = createCrudFunctions('tasks');

export const taskApi = {
    createTaskApi: createApi,
    updateTaskApi: updateApi,
    deleteTaskApi: deleteApi,
    useTasksData: useData,

}