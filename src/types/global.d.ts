interface Window {
  microservice: Microservice;
  baseURL: string;
}

interface Microservice {
  Vue?: any;
  Vuex?: any;
  Router?: any;
  Store?: any;
  ElementUI?: any;
  Axios?: any;
  install?: () => void;
}

interface GlobalState {
  onGlobalStateChange(state: Record<string, any>): void;
}
