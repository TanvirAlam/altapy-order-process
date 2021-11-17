import axiosService from "./axios-service";
import IOrder from "../types/order.type";

class OrderDataService {
    getAll() {
        return axiosService.get<Array<IOrder>>("/shopOrders");
    }
}

export default new OrderDataService();
