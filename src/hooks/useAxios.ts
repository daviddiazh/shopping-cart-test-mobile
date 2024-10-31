import axios, { AxiosRequestConfig } from 'axios';
import api from '../api';

export const useAxios = () => {

  const get = async (endpoint: string): Promise<any> => {
    try {
      const data = await api.get(
        endpoint,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data) {
        console.log('Error: ', error.response.data);
      } else {
        console.error('Server Error: ', error);
      }
    }
  };

  const fakeApiGet = async (): Promise<any> => {
    try {
      const data = await axios.get(
        'https://fakestoreapi.com/products',
      );
      return data;
    } catch (error: any) {
      if (error.response?.data) {
        console.log('Error: ', error.response.data);
      } else {
        console.error('Server Error: ', error);
      }
    }
  };

  const post = async (endpoint: string, body?: any, config?: AxiosRequestConfig<any> | undefined): Promise<any> => {
    try {
      const data = await api.post(
        endpoint,
        body,
        config,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data) {
        console.log('Error: ', error.response.data);
      } else {
        console.error('Server Error: ', error);
      }
      throw error;
    }
  };

  const put = async (endpoint: string, body?: any, config?: AxiosRequestConfig<any> | undefined): Promise<any> => {
    try {
      const data = await api.put(
        endpoint,
        body,
        config,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data) {
        console.log('Error: ', error.response.data);
      } else {
        console.error('Server Error: ', error);
      }
    }
  };

  const patch = async (endpoint: string, body?: any, config?: AxiosRequestConfig<any> | undefined): Promise<any> => {
    try {
      const data = await api.patch(
        endpoint,
        body,
        config,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data) {
        console.log('Error: ', error.response.data);
      } else {
        console.error('Server Error: ', error);
      }
    }
  };

  const remove = async (endpoint: string, config?: AxiosRequestConfig<any> | undefined): Promise<any> => {
    try {
      const data = await api.delete(
        endpoint,
        config,
      );
      return data;
    } catch (error: any) {
      if (error.response?.data) {
        console.log('Error: ', error.response.data);
      } else {
        console.error('Server Error: ', error);
      }
    }
  };

  return {
    get,
    fakeApiGet,
    post,
    put,
    patch,
    remove,
  };
};
