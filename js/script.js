function initVue() {
  new Vue({

    el: '#app',
    data: {
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/UT_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
            name: 'Fabio',
            avatar: 'img/UT_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: 'img/UT_3.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: 'img/UT_4.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
    ],
    myMsg: '',
    myChat: [],
    activeIndex: 0,
    index: 0,
    searchText: ''

    },
    updated() {

      var container = this.$el.querySelector('.messages-row');
      container.scrollTop = container.scrollHeight;

    },
    methods: {

      newMsg: function() {
        if (this.myMsg.length > 0) {
          var d = new Date();
          var time = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();
          let temp = {
            date: time,
            text: this.myMsg,
            status: 'send'
          };
          const myNewMessage = this
          this.contacts[this.activeIndex].messages.push(temp);
          this.myMsg = '';
        }
      },

      autoMsg: function() {

        const activeUser = this.activeIndex;

        setTimeout(() => {

          const newMsg = this.getNewMsg('Ok', 'received');
          this.contacts[activeIndex].messages.push(newMsg);
        }, 1000);

      },

      slectUser: function(index) {
        this.activeIndex = index;

      },

      searchContact: function() {

        const resContacts = [];

        for(let i=0;i<this.contacts.length;i++) {

          const contact = this.contacts[i];
          const name = contact['name'];

          if (name.toLowerCase().includes(this.searchText.toLowerCase())) {
            resContacts.push(contact);
          }

        }
        return resContacts;
      }

    }
  });
}

$(initVue);
