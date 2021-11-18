import axiosService from "./axios-service";
import IOrder from "../types/order.type";
import INewOrder from "../types/newOrder.type";

class OrderDataService {
    getAll() {
        return axiosService.get<Array<IOrder>>("/shopOrders");
    }

    create(data: INewOrder) {
        console.log(data)
        return axiosService.post<INewOrder>("/shopOrders", data);
    }
}

export default new OrderDataService();
