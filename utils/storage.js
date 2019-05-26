import AsyncStorage from "@react-native-community/async-storage";

export const Local = {
  async get(key) {
    try {
      if (key) return JSON.parse(await AsyncStorage.getItem(key));
      return null;
    } catch (e) {}
  },
  async set(key, val) {
    const setting = arguments[0];
    try {
      if (Object.prototype.toString.call(setting).slice(8, -1) === "Object") {
        for (const i in setting) {
          await AsyncStorage.setItem(i, JSON.stringify(setting[i]));
        }
      } else {
        await AsyncStorage.setItem(key, JSON.stringify(val));
      }
    } catch (e) {}
  },
  async remove(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {}
  },
  async clear() {
    try {
      await AsyncStorage.clear();
    } catch (e) {}
  }
};

// export const Session = {
//   get(key) {
//     if (key) return JSON.parse(ss.getItem(key))
//     return null
//   },
//   set(key, val) {
//     const setting = arguments[0]
//     if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
//       for (const i in setting) {
//         ss.setItem(i, JSON.stringify(setting[i]))
//       }
//     } else {
//       ss.setItem(key, JSON.stringify(val))
//     }
//   },
//   remove(key) {
//     ss.removeItem(key)
//   },
//   clear() {
//     ss.clear()
//   }
// }

// export const Cookie = {
//   get(key) {
//     let arr = document.cookie.split('; ')
//     for (let i = 0; i < arr.length; i++) {
//       let arr2 = arr[i].trim().split('=');
//       if (arr2[0] == key) {
//         return arr2[1]
//       }
//     }
//     return ''
//   },
//   set(key, value, day) {
//     let setting = arguments[0]
//     if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
//       for (let i in setting) {
//         let oDate = new Date()
//         oDate.setDate(oDate.getDate() + day)
//         document.cookie = i + '=' + setting[i] + ';expires=' + oDate
//       }
//     } else {
//       let oDate = new Date()
//       oDate.setDate(oDate.getDate() + day)
//       document.cookie = key + '=' + value + ';expires=' + oDate
//     }
//   },
//   remove(key) {
//     let setting = arguments[0]
//     if (Object.prototype.toString.call(setting).slice(8, -1) === 'Array') {
//       setting.forEach(key => {
//         this.set(key, 1, -1)
//       })
//     } else {
//       this.set(key, 1, -1)
//     }
//   }
// }
