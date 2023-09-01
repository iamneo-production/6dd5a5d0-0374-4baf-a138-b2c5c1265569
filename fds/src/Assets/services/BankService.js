import http from "../http/http-common";

export const getUsers = () => {
    return http.get("/users");
};

export const updateUsers = (id,data) => {
    return http.put(`/users/${id}`, data);
};

export const getReports = () => {
    return http.get("/reports");
};


export const putReport = (id, data) => {
    return http.put(`/reports/${id}`,data);
};
