import axios from 'axios';
export class ChatRoomService{
    async getChatRooms() {
        return await axios.get('http://172.20.50.70:32001/api/chat-rooms')
    }
    printEnviroment() {
        console.log("Current environment: ", process.env.currentFound);
    }
}

