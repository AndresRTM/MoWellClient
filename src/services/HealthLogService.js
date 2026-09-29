import api from './api';

export const createHealthLog = async (healthLog) => {
    const response = await api.post("HealthLog", healthLog);
    return response.data;
}

export const getHealthLogs = async () => {
    const response = await api.get("HealthLog");
    return response.data;
}

export const getHealthLogById = async (id) => {
    const response = await api.get(`HealthLog/${id}`);
    return response.data;
}

export const editHealthLog = async (id) => {
    const response =  await api.put(`HealthLog/${id}`)
    return response.data;
}

export const deleteHealthLog = async (id) => {
    const responte = await api.delete(`HealthLog/${id}`)
 }


