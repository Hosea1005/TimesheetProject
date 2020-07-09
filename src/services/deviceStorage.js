import AsyncStorage from '@react-native-community/async-storage';

const deviceStorage = {
    // our AsyncStorage functions will go here :)
    async saveItem(key, value) {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },

      async loadJWT() {
        try {
          const value = await AsyncStorage.getItem('id_token');
          if (value !== null) {
            this.setState({
              jwt: value,
              loading: false
            });
          } else {
            this.setState({
              loading: false
            });
          }
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },

      async deleteJWT() {
        try{
          await AsyncStorage.removeItem('id_token')
          .then(
            () => {
              this.setState({
                jwt: ''
              })
            }
          );
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },

      async deleteClockInStatus() {
        try{
          await AsyncStorage.removeItem('clockin_state')
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      }
};

export default deviceStorage;