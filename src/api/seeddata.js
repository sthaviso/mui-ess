/**
 * Created by sthavisomboon on 7/9/17.
 */

export const tickets =
  { tickets: [
    {
      'id': 1,
      'createdBy': 1,
      'timestamp': '09:45AM',
      'text': 'What is my vacation policy?',
      'channel': 'email',
      'status' : 'open',
      'priority' : 'high',
      'unreadMessagesCount' : 3
    },
    {
      'id': 2,
      'createdBy': 2,
      'timestamp': '08:45AM',
      'text': 'I need help setting up a printer.',
      'channel': 'email',
      'status' : 'open',
      'priority' : 'high',
      'unreadMessagesCount' : 2
    },
    {
      'id': 3,
      'createdBy': 3,
      'timestamp': '07:45AM',
      'text': 'How long is my maternity leave?',
      'channel': 'email',
      'status' : 'open',
      'priority' : 'high',
      'unreadMessagesCount' : 1
    },
  ],
    messages: [
      {
        'id': 1,
        'createdBy': 1,
        'timestamp': '09:45AM',
        'text': 'What is my vacation policy?',
        'channel': 'email',
        'ticketId': 1,
        'readStatus' : true
      },
      {
        'id': 2,
        'createdBy': 4,
        'timestamp': '09:45AM',
        'text': 'We have an unlimited vacation time off.',
        'channel': 'email',
        'ticketId': 1,
        'readStatus' : true
      },
      {
        'id': 3,
        'createdBy': 2,
        'timestamp': '08:45AM',
        'text': 'I need help setting up a printer.',
        'channel': 'email',
        'ticketId': 2,
        'readStatus' : true
      },
      {
        'id': 4,
        'createdBy': 4,
        'timestamp': '08:45AM',
        'text': 'Sure. Where are you located?',
        'channel': 'email',
        'ticketId': 2,
        'readStatus' : true
      },
      {
        'id': 5,
        'createdBy': 3,
        'timestamp': '07:45AM',
        'text': 'How long is my maternity leave?',
        'channel': 'email',
        'ticketId': 3,
        'readStatus' : true
      },
      {
        'id': 6,
        'createdBy': 4,
        'timestamp': '07:45AM',
        'text': '90 days',
        'channel': 'email',
        'ticketId': 3,
        'readStatus' : true
      },
      {
        'id': 7,
        'createdBy': 3,
        'timestamp': '07:45AM',
        'text': 'Thank you!',
        'channel': 'email',
        'ticketId': 3,
        'readStatus' : true
      },
    ],
    users: [
      {
        id : 1,
        avatar : 'https://randomuser.me/api/portraits/men/79.jpg',
        name : 'Jack Sparrow',
        userType : 'E'
      },
      {
        id : 2,
        avatar : 'https://randomuser.me/api/portraits/men/26.jpg',
        name : 'John Doe',
        userType : 'E'
      },
      {
        id : 3,
        avatar : 'https://randomuser.me/api/portraits/women/45.jpg',
        name : 'Jane Doe',
        userType : 'E'
      },
      {
        id : 4,
        avatar : 'https://randomuser.me/api/portraits/men/38.jpg',
        name : 'Agent Haris',
        userType : 'A'
      }]
  };
