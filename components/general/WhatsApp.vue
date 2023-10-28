<template>
  <div class="popup">
    <transition>
      <div v-show="whatsAppState.show" class="popup-box">
        <button type="button" class="close-button" @click="whatsAppState.toggleModal()">
          x
        </button>
        <div class="header">
          <div class="info">
            <div class="img-widget">
              <img :src="imgProfile" alt="">
            </div>
            <div class="title">
              <h2>{{ namePersonChat }}</h2>
              <p>
                {{ status }}
              </p>
            </div>
          </div>
        </div>
        <div class="popup-body">
          <div :style="{ backgroundImage: 'url(/external/whatsapp-background.png)' }" class="background">
            <div v-if="!whatsAppState.messageVisible" class="typing-indicator">
              <span /><span /><span />
            </div>
            <div v-else class="chat-bubble">
              <p class="name">
                Kike Tordera
              </p>
              Hello 👋<br>
              How can I help you?
              <p class="time">
                {{ getTime24Format() }}
              </p>
            </div>
          </div>
        </div>
        <div class="popup-footer">
          <a target="_blank" :href="getWhatsappURL()">
            <button type="button">
              Start Chat
            </button>
          </a>
        </div>
      </div>
    </transition>
    <button type="button" class="popup-button" @click="whatsAppState.toggleModal()">
      <img src="/external/whatsapp.svg" alt="">
      <div v-if="whatsAppState.notificationVisible" class="notification-dot" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { WhatsAppStateProvider } from '~/store/whatsapp'

import { ContactInformation } from '~/data_helper/contact'

const whatsAppState = WhatsAppStateProvider()
const namePersonChat = 'Kike Tordera'
const status = 'Answers in less than 1 hour'
const imgProfile = '/external/whatsapp-profile.png'

// Pre written text when click "Contact"
const havePreWrittenText = true
const prewrittenText = 'Hi Kike!, I just saw your website and I was interested in your services'

// LOGIC **********************************************************************************************************************
function normalizeMessage (msg: string): string {
  return encodeURIComponent(msg)
}

function removeSymbolAndSpaces (str: string) {
  return str.replace(/[\s+]+/g, '')
}

function getWhatsappURL (): string {
  // eslint-disable-next-line max-len
  return `https://api.whatsapp.com/send/?phone=${removeSymbolAndSpaces(ContactInformation.countryCode)}${removeSymbolAndSpaces(ContactInformation.phoneNumber)}${havePreWrittenText ? `&text=${normalizeMessage(prewrittenText)}` : ''}&type=phone_number&app_absent=0`
}

function getTime24Format (): string {
  const date = new Date()
  return `${date.getHours()}:${date.getMinutes()}`
}

onMounted(() => {
  setTimeout(() => {
    if (!whatsAppState.messageVisible) {
      whatsAppState.notificationVisible = true
    }
  }, 5000)
})
</script>

<style lang="scss" scoped>
.popup {
    @apply max-w-3xl fixed flex flex-wrap justify-end z-40;
    background-color: transparent;
      right: 17px;
      bottom: 10px;
      left: auto;
      margin-left: 10px;
      .popup-box {
        @apply rounded-xl mb-[70px] z-40 overflow-hidden;
        box-shadow: 0 5px 25px -5px rgba(45,62,79,.15);
        background-color: #fbfbfb;
        width: 360px;
        max-width: 93.5vw;
       .header {
        @apply py-6 px-4;
         background-color: rgb(9, 94, 84);
         color: white;
         .info {
          @apply flex gap-5 items-center;
          .img-widget {
            color: white;
            img {
              @apply rounded-full h-16 w-16 object-cover;
            }
          }
          .title {
            @apply text-left;
            h2 {
              @apply text-2xl;
            }
            p {
              @apply text-sm w-2/3;
            }
          }
         }
       }
       .popup-body {
          @apply max-h-[200px] overflow-hidden;
           background-color: white;
           .background {
            @apply relative overflow-auto h-52 bg-cover bg-center bg-no-repeat w-full ;
            background-color: #E6DDD4;
           }
       }
       .popup-footer {
        @apply py-5 text-center;
        background-color: #fafafa;
        button {
          @apply w-4/5 py-2 px-8 my-5 font-bold rounded-full text-base;
          background-color: #46c056;
          color: $form-color;
        }
       }
    }
    .popup-button {
      @apply outline-0 appearance-none border-0 items-center justify-between flex flex-row
          cursor-pointer align-middle self-center rounded-full w-[55px] h-[55px] absolute bottom-0 right-0;
      background-color: transparent;
      color: white;
      box-shadow: 0 3px 10px rgba(0,0,0,.2);
      font-family: inherit;
      transition: background-color .3s,box-shadow .2s;
      background-color: #46c056;
      img {
        @apply mx-auto pr-[1px] w-[32px] h-[32px];
      }
    }
}
// Chat burble
.chat-bubble {
  color: black;
  position: relative;
  display: block;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  padding-top: 7px;
  padding-bottom: 5px;
  margin: 10px;

  font-size: 14px;
  word-wrap: break-word;
  text-align: left;
  margin-left: 10px;
  max-width: 50%;
  @media (max-width: 360px) {
     max-width: 60%;
  }
  @media (max-width: 280px) {
     max-width: 80%;
  }
  p.name {
    @apply font-bold;
    color: $font-color;
  }
  p.time {
    @apply text-xs mt-2;
    color: #888888;
    text-align: right;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-right-color: #f1f1f1;
    border-left: 0;
    border-bottom: 0;
    margin-bottom: 1px;
    margin-left: -6px;
  }
}

// Close button
.close-button {
  position: absolute;
  top: 0px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: semibold;
  color: #749F98;
  cursor: pointer;
}

// Typing animation
.typing-indicator {
  display: block;
  position: relative;
  margin: 10px;
  background-color: #f1f1f1;
  margin-left: 10px;
  border-radius: 15px;
  padding: 0rem 1rem;
  padding-bottom: 0.3rem;
  width: 70px;
  span {
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #888;
    border-radius: 50%;
    margin-right: 3px;
    animation: typing 1.2s infinite;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
  &::before {
    content: '';
    position: absolute;
    left: 100000;
    bottom: 0;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-right-color: #f1f1f1;
    border-left: 0;
    border-bottom: 0;
    margin-bottom: 3px;
    margin-left: -19px;
  }
}

@keyframes typing {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
}

// Notification dot
.notification-dot {
  position: absolute;
  top: 10px;
  right: 8px;
  width: 13px;
  height: 13px;
  background-color: red;
  border-radius: 50%;
}

/* CSS for the transition */
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>
