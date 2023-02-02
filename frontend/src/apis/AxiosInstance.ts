import axios from 'axios';

// https://han.gl/JMUHok

class AxiosInstance {
  private static DEFUALT_URL = 'http://0.0.0.0:8080';
  private static TIME_OUT = 3000;

  static createInstace(baseUrl?: string) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    return axios.create({
      baseURL: baseUrl ? baseUrl : AxiosInstance.DEFUALT_URL,
      timeout: AxiosInstance.TIME_OUT,
    });
  }
}

export default AxiosInstance;
