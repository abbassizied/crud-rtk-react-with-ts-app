import api from "../http-common";
import {ITask} from "../services/type"

class TaskDataService {
  getAll() {
    return api.get("todos");
  }

  get(id: number) {
    return api.get(`todos/${id}`);
  }

  create(data: ITask) {
    return api.post("todos", data);
  }

  update(data: ITask) {
    return api.put(`todos/${data.id}`, data);
  }

  delete(id: number) {
    return api.delete(`todos/${id}`);
  }

  deleteAll() {
    return api.delete(`todos`);
  }

  findByTitle(title: string) {
    return api.get(`todos?title=${title}`);
  }
}

export default new TaskDataService();
