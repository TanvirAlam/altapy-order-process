import axiosService from "./axios-service";
import IOrder from "../types/order.type";
import INewOrder from "../types/newOrder.type";

const BASE_URL = "/shopOrders/";

class OrderDataService {
    getAll() {
        return axiosService.get<Array<IOrder>>("/shopOrders");
    }

    create(data: INewOrder) {
        return axiosService.post<INewOrder>("/shopOrders", data);
    }

    reserveOrder(orderId: string) {
        const url = BASE_URL + orderId + "/reserve";
        return axiosService.post<string>(url);
    }

    releaseOrder(orderId: string) {
        const url = BASE_URL + orderId + "/release";
        return axiosService.post<string>(url);
    }

    refundOrder(orderId: string) {
        const url = BASE_URL + orderId + "/refund";
        return axiosService.post<string>(url);
    }

    captureOrder(orderId: string) {
        const url = BASE_URL + orderId + "/capture";
        return axiosService.post<string>(url);
    }
}

export default new OrderDataService();
