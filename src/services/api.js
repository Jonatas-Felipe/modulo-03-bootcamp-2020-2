import axios from 'axios';

const api = axios.create({
  // baseURL : 'http://localhost:3333'
  baseURL: 'http://192.168.0.109:3333'
})

export default api;

/**
 * IOS com Emulador: Localhost
 * IOS com físico: Ip da maquina
 * Android com Emulador: Localhost (Adb reverse) ou
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com físico: Ip da maquina
 */
