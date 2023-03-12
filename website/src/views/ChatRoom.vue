<script setup>
import { reactive } from "vue";
import RoomHeader from "../components/ChatRoom/RoomHeader.vue";
import socket from "../composables/socket";

const data = reactive([
  {
    sender: "User2",
    message: "Hello User1, Nice to meet you!",
    own: false,
  },
  {
    sender: "User1",
    message: "Hello User2! Nice to meet you, too!",
    own: true,
  },
]);

// const sendMessage = () => {
//   socket.on('sendMessage', (message) => {
//     data.push({ sender: 'User1', message: 'test', own: true })
//   })
// }
</script>

<template>
  <div class="chat">
  <div class="chatRoom">
    <RoomHeader />
    <div class="dialogBox">
      <div v-for="data in data" class="message" :class="{ own: data.own }">
        <div class="imgWrap">
          <!-- <img src="" alt=""> -->
        </div>
        <div class="messageInfo">
          <div class="infoTop">
            <div class="messageSender">
              <p>{{ data.sender }}</p>
            </div>
            <div class="messageText">
              <p>{{ data.message }}</p>
              </div>
            </div>
            <div class="infoBottom">
              <p class="time">a few seconds ago</p>
            </div>
          </div>
        </div>
        <!-- <div class="message own">
                        <div class="imgWrap">
                          <img src="" alt="">
                        </div>
                        <div class="messageInfo">
                          <div class="infoTop">
                            <div class="messageSender">
                              <p>User1</p>
                            </div>
                            <div class="messageText">
                              <p>Hello User2! Nice to meet you, too!</p>
                            </div>
                          </div>
                          <div class="infoBottom">
                            <p class="time">a few seconds ago</p>
                          </div>
                        </div>
                      </div> -->

      </div>
    </div>
    <div class="textInput">
      <div class="plusBtn"><i class="fa-solid fa-plus"></i></div>
      <div class="emojiBtn"><i class="fa-regular fa-face-smile"></i></div>
      <input type="text" />
      <button class="submit">送出</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .chatRoom {
    background-color: #fff;
    width: 100%;
    height: 80%;
    border-radius: 10px 10px 0 0;

    .dialogBox {
      display: flex;
      flex-direction: column;
      height: 85%;
      overflow: auto;

      .message {
        display: flex;
        margin: 5px 10px;

        .imgWrap {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #ccc;
        }

        .messageInfo {
          margin-left: 10px;
          color: #000;

          .infoTop {
            .messageText {
              background-color: #ccc;
              padding: 0 10px;
              border-radius: 20px;
            }
          }

          .infoBottom {
            margin-left: 10px;
            color: #25252567;
          }
        }
      }

      .message.own {
        justify-content: flex-end;

        .messageInfo {
          .infoTop {
            .messageText {
              background-color: #006aff;

              p {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }

  .textInput {
    width: 100%;
    height: 50px;
    position: relative;
    top: -45px;
    background-color: #0099ff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .plusBtn,
    .emojiBtn {
      width: 20px;
      color: #fff;
      cursor: pointer;
      margin: 0 5px;
    }

    input {
      height: 20px;
      width: 60%;
      border-radius: 5px;
      outline: none;
      border: none;
    }

    .submit {
      background-color: #8371cd;
      color: #fff;
      font-weight: 600;
      border-radius: 8px;
      padding: 5px;
      margin: 0 10px;
      cursor: pointer;
      border: none;
    }
  }
}

@media (min-width: 1024px) {
  .chat {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
