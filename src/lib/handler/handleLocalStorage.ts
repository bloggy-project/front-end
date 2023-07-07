const checkTypeWindow = () => typeof window === 'undefined';

export default class MyLocalStorage<T> {
  private name;
  private handleErr;
  constructor(name: string, handleErr?: () => void) {
    this.name = name;
    this.handleErr =
      handleErr ||
      (() => {
        console.log('localStorage에 값이 존재하지 않습니다');
      });
  }

  get(): T | null {
    if (checkTypeWindow()) {
      return null;
    }
    const storageData = localStorage.getItem(this.name);
    if (storageData) {
      return JSON.parse(storageData);
    }
    this.handleErr();
    return null;
  }
  set(storageData: T) {
    if (!this.get()) {
      localStorage.setItem(this.name, JSON.stringify(storageData));
    }
  }
  remove() {
    if (this.get()) {
      localStorage.removeItem(this.name);
    }
  }
}

// export const getLocalStorage = <T>(name: string): T | null => {
//   if (checkTypeWindow()) {
//     return null;
//   }
//   const storageData = localStorage.getItem(name);
//   if (storageData) {
//     return JSON.parse(storageData);
//   }
//   console.log('localStorage에 값이 존재하지 않습니다');
//   return null;
// };

// export const setLocalStorage = <T>(data: T, name: string) => {
//   const initialItem = getLocalStorage(name);
//   if (!initialItem) {
//     localStorage.setItem(name, JSON.stringify(data));
//   }
// };

// export const removeLocalStorage = (name: string) => {
//   const initialItem = getLocalStorage(name);
//   if (!initialItem) {
//     localStorage.removeItem(name);
//   }
// };
