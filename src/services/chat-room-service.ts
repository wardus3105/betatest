import axios from 'axios';
export class ChatRoomService{
    async getChatRooms() {
        return await axios.get('http://172.20.50.70:32001/api/chat-rooms')
    }
    printEnviroment() {
        console.log("Current environment: ", process.env.REACT_APP_FOUNDA);
    }
    printEnviroment1() {
        console.log("Current environment: ", process.env.REACT_APP_FOUNDA);
    }
    printEnviroment2() {
        console.log("Current environment: ", process.env.REACT_APP_FOUNDA);
    }
    printEnviroment3() {
        console.log("Current environment: ", process.env.REACT_APP_FOUNDA);
    }
    printEnviroment4() {
        console.log("Current environment: ", process.env.REACT_APP_FOUNDA);
    }
    printEnviroment5() {
        console.log("Current environment: ", process.env.REACT_APP_FOUNDA);
    }
    printEnviroment6() {
        console.log("Current environment: ", process.env.REACT_APP_FOUNDA);
    }
    printEnviroment7() {
        console.log("Current environment: ", process.env.REACT_APP_FOUNDA);
    }

}
