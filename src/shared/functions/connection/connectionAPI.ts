import axios, { AxiosRequestConfig } from 'axios';

import { MethodEnum } from '../../../enums/method.enum';
import { getAuthorizationToken } from './auth';

export type MethodType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export default class ConnectionAPI {
  static async call<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
    const token = await getAuthorizationToken();

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    };

    switch (method) {
      case MethodEnum.GET:
      case MethodEnum.DELETE:
        return (await axios[method]<T>(url)).data;
      case MethodEnum.POST:
      case MethodEnum.PUT:
      case MethodEnum.PATCH:
      default:
        return (await axios[method]<T>(url, body, config)).data;
    }
  }
  static async connect<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error('Sem permissão');

          default:
            throw new Error('Sem conexão com o backend');
        }
      }
      throw new Error('Sem conexão com o backend');
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.GET);
};

export const connectionAPICDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.DELETE);
};

export const connectionAPICPost = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.POST, body);
};

export const connectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PUT, body);
};

export const connectionAPICPatch = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PATCH, body);
};
