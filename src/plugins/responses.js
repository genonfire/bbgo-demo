export default {
  "post": { // POST
    "/accounts/login/": {
      "response": {
        "data": {
          "key": "e6e02990878c735f790f251561788bf44f15e7ed",
          "user": {
            "id": 2,
            "username": "1@a.com",
            "first_name": "John",
            "last_name": "Doe",
            "call_name": "John Doe",
            "photo": "/rocat.png",
            "is_staff": true,
            "is_approved": true
          }
        }
      }
    },
    "/accounts/connect/": {
      "response": {
        "data": {
          "key": "e6e02990878c735f790f251561788bf44f15e7ed",
          "user": {
            "id": 2,
            "username": "1@a.com",
            "first_name": "John",
            "last_name": "Doe",
            "call_name": "John Doe",
            "photo": "/rocat.png",
            "is_staff": true,
            "is_approved": true
          }
        }
      }
    },
    "/contents/blogs/2/like/": {
      "response": {
        "data": {
          "id": 2,
          "like": 4
        }
      }
    },
  },
  "patch": { // PATCH
    "/accounts/setting/": {
      "response": {
        "data": {
          "id": 2,
          "username": "1@a.com",
          "first_name": "John",
          "last_name": "Doe",
          "call_name": "John Doe",
          "photo": "/rocat.png",
          "tel": null,
          "address": "Cloverfield 101",
          "is_approved": true,
          "is_staff": true,
          "date_joined": "2024-02-16T19:43:59+0900"
        }
      }
    }
  },
  "delete": { // DELETE

  },
  "get": { // GET
    "/accounts/setting/": {
      "response": {
        "data": {
          "id": 2,
          "username": "1@a.com",
          "first_name": "John",
          "last_name": "Doe",
          "call_name": "John Doe",
          "photo": "/rocat.png",
          "tel": null,
          "address": "Cloverfield 101",
          "is_approved": true,
          "is_staff": true,
          "date_joined": "2024-02-16T19:43:59+0900"
        }
      }
    },
    "/contents/blog_option/": {
      "response": {
        "data": {
          "title": "blog",
          "description": "my blog",
          "category": [
            "hobby",
            "asmr"
          ],
          "option": {
            "permission_list": "all",
            "permission_read": "all",
            "permission_vote": "all",
            "permission_reply": "all",
            "permission_write": "staff"
          }
        }
      }
    },
    "/admin/users/?": {
      "params": [
        "active=true"
      ],
      "response": {
        "pagination": {
          "item_total": 1,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 3,
            "username": "1@b.com",
            "first_name": "Jane",
            "last_name": "Doe",
            "call_name": "Jane Doe",
            "photo": null,
            "tel": null,
            "address": "Seoul",
            "is_active": true,
            "is_approved": true,
            "date_joined": "2024-05-02T14:54:52+0900",
            "last_login": null
          }
        ]
      }
    },
    "/admin/users/staff/?": {
      "params": [
        "active=true"
      ],
      "response": {
        "pagination": {
          "item_total": 1,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 2,
            "username": "1@a.com",
            "first_name": "John",
            "last_name": "Doe",
            "call_name": "John Doe",
            "photo": "/rocat.png",
            "tel": null,
            "address": "Cloverfield 101",
            "is_active": true,
            "is_staff": true,
            "is_superuser": false,
            "date_joined": "2024-02-16T19:43:59+0900",
            "last_login": "2024-05-02T09:32:15+0900"
          }
        ]
      }
    },
    "/admin/users/3/": {
      "response": {
        "data": {
          "id": 3,
          "username": "1@b.com",
          "first_name": "Jane",
          "last_name": "Doe",
          "call_name": "Jane Doe",
          "photo": null,
          "tel": null,
          "address": "Seoul",
          "is_active": true,
          "is_approved": true,
          "date_joined": "2024-05-02T14:54:52+0900",
          "last_login": null
        }
      }
    },
    "/admin/users/staff/2/": {
      "response": {
        "data": {
          "id": 2,
          "username": "1@a.com",
          "first_name": "John",
          "last_name": "Doe",
          "call_name": "John Doe",
          "photo": "/rocat.png",
          "tel": null,
          "address": "Cloverfield 101",
          "is_active": true,
          "is_staff": true,
          "is_superuser": false,
          "date_joined": "2024-02-16T19:43:59+0900",
          "last_login": "2024-05-02T09:32:15+0900"
        }
      }
    },
    "/contents/blogs/?": {
      "params": [
        "category=",
        "category=asmr"
      ],
      "response": {
        "pagination": {
          "item_total": 2,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 2,
            "user": {
              "id": 2,
              "username": "1@a.com",
              "call_name": "John Doe"
            },
            "title": "Why understanding people is key to protecting nature",
            "category": "asmr",
            "image": {
              "id": 2,
              "file": "/nature.png",
              "filename": "nature.png",
              "content_type": "image/png",
              "size": 94291,
              "created_at": "2023-09-27T11:02:24+0900"
            },
            "tags": "nature, essay, mountain",
            "like": 3,
            "comment_count": 0,
            "is_published": true,
            "created_at": "2024-04-24T17:53:37+0900",
            "modified_at": null
          },
          {
            "id": 1,
            "user": {
              "id": 2,
              "username": "1@a.com",
              "call_name": "John Doe"
            },
            "title": "A Day with My Cat",
            "category": "asmr",
            "image": {
              "id": 1,
              "file": "/rocat_rect.png",
              "filename": "rocat_rect.png",
              "content_type": "image/png",
              "size": 13267,
              "created_at": "2023-09-27T11:02:24+0900"
            },
            "tags": "",
            "like": 24,
            "comment_count": 3,
            "is_published": true,
            "created_at": "2024-04-24T17:50:09+0900",
            "modified_at": "2024-05-01T14:55:31+0900"
          }
        ]
      }
    },
    "/contents/blogs/1/": {
      "response": {
        "data": {
          "id": 1,
          "user": {
            "id": 2,
            "username": "1@a.com",
            "call_name": "John Doe"
          },
          "title": "A Day with My Cat",
          "content": "Today was a delightful day spent with my beloved feline companion. From the moment I woke up to the gentle purring by my side, it was evident that it would be a day filled with warmth and joy. <br><br>We embarked on our morning routine together, with my cat eagerly following me from room to room, his curiosity piqued by every corner of our cozy abode. As the sun streamed through the windows, casting a soft glow over our surroundings, we shared moments of tranquility and companionship that only a pet owner can truly understand.<br><br>Whether it was playing with his favorite toy or simply basking in each other's company, every moment spent with my cat was a treasure to cherish. 🐾💖<br><br>우리 고양이와 함께한 이 특별한 날은 절대로 잊지 못할 것입니다. 🌿💕",
          "category": "asmr",
          "image": {
            "id": 1,
            "file": "/rocat_rect.png",
            "filename": "rocat_rect.png",
            "content_type": "image/png",
            "size": 13267,
            "created_at": "2023-09-27T11:02:24+0900"
          },
          "tags": "",
          "like": 24,
          "comment_count": 3,
          "is_published": true,
          "created_at": "2024-04-24T17:50:09+0900",
          "modified_at": "2024-05-01T14:55:31+0900",
          "editable": true,
          "liked": true
        }
      }
    },
    "/contents/blogs/2/": {
      "response": {
        "data": {
          "id": 2,
          "user": {
            "id": 2,
            "username": "1@a.com",
            "call_name": "John Doe"
          },
          "title": "Why understanding people is key to protecting nature",
          "content": "In unraveling the complex tapestry of human perceptions and actions, lies the power to nurture and safeguard the very essence of our natural world.",
          "category": "asmr",
          "image": {
            "id": 2,
            "file": "/nature.png",
            "filename": "nature.png",
            "content_type": "image/png",
            "size": 94291,
            "created_at": "2023-09-27T11:02:24+0900"
          },
          "tags": "nature, essay, mountain",
          "like": 3,
          "comment_count": 0,
          "is_published": true,
          "created_at": "2024-04-24T17:53:37+0900",
          "modified_at": null,
          "editable": true,
          "liked": false
        }
      }
    },
    "/contents/blogs/2/comments/?": {
      "params": [
        "page_size=50"
      ],
      "response": {
        "pagination": {
          "item_total": 0,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": []
      }
    },
    "/contents/blogs/1/comments/?": {
      "params": [
        "page_size=50"
      ],
      "response": {
        "pagination": {
          "item_total": 3,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 2,
            "comment_id": 0,
            "user": null,
            "name": "FurryFriendFan",
            "content": "Reading about your day with your cat brought a smile to my face. 🐾 It's amazing how these furry friends can brighten even the simplest of days. Wishing you many more wonderful moments together!",
            "is_deleted": false,
            "date_or_time": {
              "date": null,
              "time": "05:55 PM"
            },
            "editable": true
          },
          {
            "id": 3,
            "comment_id": 2,
            "user": {
              "id": 2,
              "username": "1@a.com",
              "call_name": "John Doe"
            },
            "name": null,
            "content": "Thank you so much for your kind words! Indeed, the love and companionship of a cat have a unique way of making everyday moments extraordinary. I'm grateful for every purr and paw-print in my life. 🐱",
            "is_deleted": false,
            "date_or_time": {
              "date": null,
              "time": "05:56 PM"
            },
            "editable": true
          },
          {
            "id": 1,
            "comment_id": 0,
            "user": null,
            "name": "PetLover123",
            "content": "고양이와 함께 보낸 당신의 유대는 정말 특별한 것 같아요! 반려동물이 우리 삶에 가져다 주는 사랑과 기쁨을 듣는 것은 따뜻한 기분이 들어요. 😊 당신의 멋진 하루를 우리와 함께 공유해 주셔서 감사합니다.",
            "is_deleted": false,
            "date_or_time": {
              "date": null,
              "time": "05:55 PM"
            },
            "editable": true
          }
        ]
      }
    },
    "/admin/blogs/?": {
      "params": [
        "draft=false",
        "draft=false&category=asmr",
        "&category=asmr"
      ],
      "response": {
        "pagination": {
          "item_total": 2,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 2,
            "user": {
              "id": 2,
              "username": "1@a.com",
              "call_name": "John Doe"
            },
            "title": "Why understanding people is key to protecting nature",
            "category": "asmr",
            "image": null,
            "tags": "nature, essay, mountain",
            "like": 3,
            "comment_count": 0,
            "is_published": true,
            "created_at": "2024-04-24T17:53:37+0900",
            "modified_at": "2024-05-02T19:11:57+0900"
          },
          {
            "id": 1,
            "user": {
              "id": 2,
              "username": "1@a.com",
              "call_name": "John Doe"
            },
            "title": "A Day with My Cat",
            "category": "asmr",
            "image": null,
            "tags": "",
            "like": 24,
            "comment_count": 3,
            "is_published": true,
            "created_at": "2024-04-24T17:50:09+0900",
            "modified_at": "2024-05-02T18:00:50+0900"
          }
        ],
        "filter": {
          "category": [
            "hobby",
            "asmr"
          ]
        }
      }
    },
    "/admin/comments/?": {
      "params": [
        "delete=false"
      ],
      "response": {
        "pagination": {
          "item_total": 3,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 3,
            "blog": {
              "id": 1,
              "user": {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              },
              "title": "A Day with My Cat"
            },
            "user": {
              "id": 2,
              "username": "1@a.com",
              "call_name": "John Doe"
            },
            "name": null,
            "content": "Thank you so much for your kind words! Indeed, the love and companionship of a cat have a unique way of making everyday moments extraordinary. I'm grateful for every purr and paw-print in my life. 🐱",
            "is_deleted": false,
            "created_at": "2024-05-02T17:56:51+0900",
            "modified_at": null
          },
          {
            "id": 2,
            "blog": {
              "id": 1,
              "user": {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              },
              "title": "A Day with My Cat"
            },
            "user": null,
            "name": "FurryFriendFan",
            "content": "Reading about your day with your cat brought a smile to my face. 🐾 It's amazing how these furry friends can brighten even the simplest of days. Wishing you many more wonderful moments together!",
            "is_deleted": false,
            "created_at": "2024-05-02T17:55:52+0900",
            "modified_at": null
          },
          {
            "id": 1,
            "blog": {
              "id": 1,
              "user": {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              },
              "title": "A Day with My Cat"
            },
            "user": null,
            "name": "PetLover123",
            "content": "고양이와 함께 보낸 당신의 유대는 정말 특별한 것 같아요! 반려동물이 우리 삶에 가져다 주는 사랑과 기쁨을 듣는 것은 따뜻한 기분이 들어요. 😊 당신의 멋진 하루를 우리와 함께 공유해 주셔서 감사합니다.",
            "is_deleted": false,
            "created_at": "2024-05-02T17:55:37+0900",
            "modified_at": null
          }
        ]
      }
    },
    "/communities/forums/?": {
      "params": [
        "active=true"
      ],
      "response": {
        "pagination": {
          "item_total": 1,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 1,
            "name": "illegallysmolcats",
            "title": "Illegally Small Cats",
            "description": "Why so small",
            "managers": [
              {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              }
            ],
            "option": {
              "support_files": false,
              "permission_list": "all",
              "permission_read": "all",
              "permission_vote": "member",
              "permission_reply": "member",
              "permission_write": "staff"
            },
            "is_active": true,
            "created_at": "2024-03-02T11:49:20+0900",
            "thread_count": 1,
            "reply_count": 2
          }
        ]
      }
    },
    "/communities/forums/1/": {
      "response": {
        "data": {
          "id": 1,
          "name": "illegallysmolcats",
          "title": "Illegally Small Cats",
          "description": "Why so small",
          "managers": [
            {
              "id": 2,
              "username": "1@a.com",
              "call_name": "John Doe"
            }
          ],
          "option": {
            "support_files": false,
            "permission_list": "member",
            "permission_read": "all",
            "permission_vote": "member",
            "permission_reply": "member",
            "permission_write": "member"
          },
          "is_active": true,
          "created_at": "2024-03-02T11:49:20+0900",
          "thread_count": 1,
          "reply_count": 2
        }
      }
    },
    "/communities/f/illegallysmolcats/": {
      "response": {
        "pagination": {
          "item_total": 1,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": {
          "forum": {
            "id": 1,
            "name": "illegallysmolcats",
            "title": "Illegally Small Cats",
            "description": "Why so small",
            "managers": [
              {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              }
            ],
            "permissions": {
              "write": true,
              "reply": true,
              "vote": true
            },
            "support_files": false
          },
          "threads": [
            {
              "id": 1,
              "user": {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              },
              "name": null,
              "title": "My Adorable Cheese Cat 🧀🐱",
              "up": 0,
              "down": 0,
              "reply_count": 2,
              "is_pinned": true,
              "is_deleted": false,
              "date_or_time": {
                "date": null,
                "time": "08:02 PM"
              }
            }
          ]
        }
      }
    },
    "/communities/f/illegallysmolcats/read/1/": {
      "response": {
        "data": {
          "id": 1,
          "forum": {
            "id": 1,
            "name": "illegallysmolcats",
            "title": "Illegally Small Cats",
            "description": "Why so small",
            "managers": [
              {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              }
            ],
            "permissions": {
              "write": true,
              "reply": true,
              "vote": true
            },
            "support_files": false
          },
          "user": {
            "id": 2,
            "username": "1@a.com",
            "call_name": "John Doe"
          },
          "name": null,
          "title": "My Adorable Cheese Cat 🧀🐱",
          "content": "<img src='/rocat_rect.png'><br><br>Hey Community fam,<br><br>I just wanted to share with you all my adorable cheese-loving cat! Meet Whiskers, the most charming feline companion you'll ever meet. 😺🧀<br><br>Whiskers has a peculiar fondness for cheese that never fails to bring a smile to my face. Whether it's sneaking bites from my sandwich or eagerly waiting for his cheesy treat, his love for cheese is truly unmatched. Just the sight of a cheese wrapper makes him perk up with excitement, ready to indulge in his favorite snack.<br><br>But beyond his love for cheese, Whiskers is also the epitome of cuddliness and playfulness. His soft purrs and gentle nuzzles never fail to brighten my day, and his playful antics keep me entertained for hours on end.<br><br>I feel incredibly lucky to have Whiskers in my life, spreading joy and cheese wherever he goes. 🧀🐾<br><br>Cheers,<br>",
          "files": [],
          "up": 0,
          "down": 0,
          "reply_count": 2,
          "is_pinned": true,
          "is_deleted": false,
          "created_at": "2024-05-02T20:02:56+0900",
          "modified_at": null,
          "editable": true
        }
      }
    },
    "/communities/f/illegallysmolcats/read/2/": {
      "response": {
        "data": {
          "id": 2,
          "forum": {
            "id": 1,
            "name": "illegallysmolcats",
            "title": "Illegally Smoll Cats",
            "description": "Why so small",
            "managers": [
              {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              }
            ],
            "permissions": {
              "write": false,
              "reply": false,
              "vote": false
            },
            "support_files": false
          },
          "user": null,
          "name": "멍멍이",
          "title": "개팬들의 조롱: 고양이는 개의 미니미?",
          "content": "안녕하세요, 개팬들,<br><br>오늘은 조금 재밌는 주제에 대해 이야기해보려고 합니다. 고양이를 사랑하는 우리들에게 한 가지 의문이 생겼습니다. 바로 '고양이는 개의 미니미인가?'라는 것입니다.<br><br>많은 사람들이 고양이를 사랑하는 것은 이해할 수 있습니다. 그러나 개를 사랑하는 사람들은 그 이유를 이해하기 어렵습니다. 개는 어디서 누워도 귀엽고, 냄새는 무조건 좋고, 사람의 기분에 따라서 즉각적으로 반응합니다. 고양이는 그 어느 때보다도 측은하지 않는다고 합니다. 그래서 고양이는 개의 미니미인 것 같습니다.<br><br>고양이 팬 여러분, 이런 말에 동의하시나요? 고양이가 그렇게 매력적이라고 생각하시나요? 개팬들의 눈에는 어떤 모습으로 보이나요? 이 글을 읽으시고 개를 좋아하는 사람들을 위해 한 번 웃어보세요. 그들은 아마도 이런 재미있는 주제에 대해 이야기하는 것을 좋아할 거라고 생각합니다.<br><br>그리고 개팬들, 우리의 고양이 친구들을 존중해주세요. 고양이도 개만큼 사랑받을 자격이 있는 동물이니까요.<br><br>즐거운 시간 되세요! 🐶🐾",
          "files": [],
          "up": 0,
          "down": 0,
          "reply_count": 1,
          "is_pinned": false,
          "is_deleted": true,
          "created_at": "2024-05-02T20:14:42+0900",
          "modified_at": null,
          "editable": true
        }
      }
    },
    "/communities/f/1/replies/?": {
      "params": [
        "page_size=50"
      ],
      "response": {
        "pagination": {
          "item_total": 2,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 2,
            "reply_id": 0,
            "user": null,
            "name": "CatFanatic101",
            "content": "I can't get enough of Whiskers' cheese obsession! 🧀😻 He sounds like the purrfect companion. Your description of his playful antics and love for cheese is so heartwarming. Thanks for sharing this delightful story with us!",
            "up": 0,
            "down": 0,
            "is_deleted": false,
            "date_or_time": {
              "date": null,
              "time": "08:08 PM"
            },
            "editable": true
          },
          {
            "id": 1,
            "reply_id": 0,
            "user": null,
            "name": "CheeseLover22",
            "content": "Whiskers sounds absolutely adorable! 🐱🧀 It's heartwarming to hear about his love for cheese and how he brings so much joy into your life. Give him a little cheese treat from me! 😉",
            "up": 0,
            "down": 0,
            "is_deleted": false,
            "date_or_time": {
              "date": null,
              "time": "08:07 PM"
            },
            "editable": true
          }
        ]
      }
    },
    "/communities/f/2/replies/?": {
      "params": [
        "page_size=50"
      ],
      "response": {
        "pagination": {
          "item_total": 1,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 3,
            "reply_id": 0,
            "name": "멍뭉이는",
            "content": "개시판으로 가라.",
            "up": 0,
            "down": 0,
            "is_deleted": false,
            "date_or_time": {
              "date": null,
              "time": "08:44 PM"
            },
            "editable": false
          }
        ]
      }
    },
    "/communities/f/illegallysmolcats/seek/": {
      "response": {
        "data": {
          "id": 1,
          "name": "illegallysmolcats",
          "title": "Illegally Smoll Cats",
          "description": "Why so small",
          "managers": [
            {
              "id": 2,
              "username": "1@a.com",
              "call_name": "John Doe"
            }
          ],
          "permissions": {
            "write": true,
            "reply": true,
            "vote": true
          },
          "support_files": false
        }
      }
    },
    "/communities/f/illegallysmolcats/trash/?": {
      "params": [
        "page_size=100"
      ],
      "response": {
        "pagination": {
          "item_total": 1,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": {
          "forum": {
            "id": 1,
            "name": "illegallysmolcats",
            "title": "Illegally Smoll Cats",
            "description": "Why so small",
            "managers": [
              {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              }
            ],
            "permissions": {
              "write": true,
              "reply": true,
              "vote": true
            },
            "support_files": false
          },
          "threads": [
            {
              "id": 2,
              "user": null,
              "name": "멍멍이",
              "title": "개팬들의 조롱: 고양이는 개의 미니미?",
              "content": "안녕하세요, 개팬들,<br><br>오늘은 조금 재밌는 주제에 대해 이야기해보려고 합니다. 고양이를 사랑하는 우리들에게 한 가지 의문이 생겼습니다. 바로 '고양이는 개의 미니미인가?'라는 것입니다.<br><br>많은 사람들이 고양이를 사랑하는 것은 이해할 수 있습니다. 그러나 개를 사랑하는 사람들은 그 이유를 이해하기 어렵습니다. 개는 어디서 누워도 귀엽고, 냄새는 무조건 좋고, 사람의 기분에 따라서 즉각적으로 반응합니다. 고양이는 그 어느 때보다도 측은하지 않는다고 합니다. 그래서 고양이는 개의 미니미인 것 같습니다.<br><br>고양이 팬 여러분, 이런 말에 동의하시나요? 고양이가 그렇게 매력적이라고 생각하시나요? 개팬들의 눈에는 어떤 모습으로 보이나요? 이 글을 읽으시고 개를 좋아하는 사람들을 위해 한 번 웃어보세요. 그들은 아마도 이런 재미있는 주제에 대해 이야기하는 것을 좋아할 거라고 생각합니다.<br><br>그리고 개팬들, 우리의 고양이 친구들을 존중해주세요. 고양이도 개만큼 사랑받을 자격이 있는 동물이니까요.<br><br>즐거운 시간 되세요! 🐶🐾",
              "up": 0,
              "down": 0,
              "is_pinned": false,
              "is_deleted": true,
              "date_or_time": {
                "date": null,
                "time": "08:14 PM"
              }
            }
          ]
        }
      }
    },
    "/admin/threads/": {
      "response": {
        "pagination": {
          "item_total": 2,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 2,
            "forum_name": "illegallysmolcats",
            "user": null,
            "name": "멍멍이",
            "title": "개팬들의 조롱: 고양이는 개의 미니미?",
            "up": 0,
            "down": 0,
            "reply_count": 1,
            "is_pinned": false,
            "is_deleted": true,
            "created_at": "2024-05-02T20:14:42+0900",
            "modified_at": null
          },
          {
            "id": 1,
            "forum_name": "illegallysmolcats",
            "user": {
              "id": 2,
              "username": "1@a.com",
              "call_name": "John Doe"
            },
            "name": null,
            "title": "My Adorable Cheese Cat 🧀🐱",
            "up": 0,
            "down": 0,
            "reply_count": 2,
            "is_pinned": false,
            "is_deleted": false,
            "created_at": "2024-05-02T20:02:56+0900",
            "modified_at": null
          }
        ]
      }
    },
    "/admin/threads/deletedfalse": {
      "response": {
        "pagination": {
          "item_total": 2,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 1,
            "forum_name": "illegallysmolcats",
            "user": {
              "id": 2,
              "username": "1@a.com",
              "call_name": "John Doe"
            },
            "name": null,
            "title": "My Adorable Cheese Cat 🧀🐱",
            "up": 0,
            "down": 0,
            "reply_count": 2,
            "is_pinned": false,
            "is_deleted": false,
            "created_at": "2024-05-02T20:02:56+0900",
            "modified_at": null
          }
        ]
      }
    },
    "/admin/threads/deletedtrue": {
      "response": {
        "pagination": {
          "item_total": 2,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 2,
            "forum_name": "illegallysmolcats",
            "user": null,
            "name": "멍멍이",
            "title": "개팬들의 조롱: 고양이는 개의 미니미?",
            "up": 0,
            "down": 0,
            "reply_count": 1,
            "is_pinned": false,
            "is_deleted": true,
            "created_at": "2024-05-02T20:14:42+0900",
            "modified_at": null
          },
        ]
      }
    },
    "/admin/replies/?": {
      "params": [
        "delete=false"
      ],
      "response": {
        "pagination": {
          "item_total": 3,
          "page_total": 1,
          "current_page": 1,
          "next_link": null,
          "prev_link": null,
          "first_link": null
        },
        "data": [
          {
            "id": 3,
            "forum_name": "illegallysmolcats",
            "thread": {
              "id": 2,
              "user": null,
              "title": "개팬들의 조롱: 고양이는 개의 미니미?"
            },
            "reply_id": 0,
            "user": null,
            "name": "멍뭉이는",
            "content": "개시판으로 가라.",
            "up": 0,
            "down": 0,
            "is_deleted": false,
            "created_at": "2024-05-02T20:44:05+0900",
            "modified_at": null
          },
          {
            "id": 2,
            "forum_name": "illegallysmolcats",
            "thread": {
              "id": 1,
              "user": {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              },
              "title": "My Adorable Cheese Cat 🧀🐱"
            },
            "reply_id": 0,
            "user": null,
            "name": "CatFanatic101",
            "content": "I can't get enough of Whiskers' cheese obsession! 🧀😻 He sounds like the purrfect companion. Your description of his playful antics and love for cheese is so heartwarming. Thanks for sharing this delightful story with us!",
            "up": 0,
            "down": 0,
            "is_deleted": false,
            "created_at": "2024-05-02T20:07:28+0900",
            "modified_at": null
          },
          {
            "id": 1,
            "forum_name": "illegallysmolcats",
            "thread": {
              "id": 1,
              "user": {
                "id": 2,
                "username": "1@a.com",
                "call_name": "John Doe"
              },
              "title": "My Adorable Cheese Cat 🧀🐱"
            },
            "reply_id": 0,
            "user": null,
            "name": "CheeseLover22",
            "content": "Whiskers sounds absolutely adorable! 🐱🧀 It's heartwarming to hear about his love for cheese and how he brings so much joy into your life. Give him a little cheese treat from me! 😉",
            "up": 0,
            "down": 0,
            "is_deleted": false,
            "created_at": "2024-05-02T20:07:14+0900",
            "modified_at": null
          }
        ]
      }
    }


  }
}
