/* Original TOEIC-style full practice sets (Mock Tests).
   Written in the TOEIC format — NOT copied from any official ETS test.
   Schema mirrors the real exam's part structure and proportions:
     Listening: Part 1 (photos), Part 2 (Q&A), Part 3 (conversations), Part 4 (talks)
     Reading:   Part 5 (sentence completion), Part 6 (text completion),
                Part 7 (single / double / triple passages)
   Choice order within each question is randomized (build step) so no
   answer position is a giveaway. */
window.MOCK = {
  "sets": [
    {
      "set": 1,
      "title": "ชุดที่ 1 · Office & Meetings",
      "listening": {
        "part1": [
          {
            "scene": "ในออฟฟิศ ผู้ชายคนหนึ่งนั่งที่โต๊ะ มีแล็ปท็อปเปิดอยู่ตรงหน้า มือทั้งสองวางอยู่บนแป้นพิมพ์ ข้างๆ มีแก้วกาแฟและโทรศัพท์ตั้งโต๊ะวางอยู่",
            "choices": [
              "The man is copying a document.",
              "The man is typing on a laptop.",
              "The laptop is being repaired.",
              "The man is talking on the telephone."
            ],
            "answer": 1,
            "why": "โทรศัพท์อยู่ในภาพจริงแต่เขาไม่ได้ใช้ จึงเป็นกับดักกริยาผิด ส่วน being repaired ต้องมีคนกำลังซ่อมอยู่ในภาพ และ copier กับ coffee เสียงคล้ายกันแต่ไม่มีเครื่องถ่ายเอกสารในภาพ",
            "art": "office_typing"
          },
          {
            "scene": "ห้องประชุม มีคนหลายคนนั่งอยู่รอบโต๊ะยาว บนโต๊ะมีเอกสารและแก้วน้ำวางอยู่ ทุกคนหันหน้าไปทางเดียวกัน ไม่มีใครลุกยืน",
            "choices": [
              "Chairs are being moved into the room.",
              "The people are seated around a table.",
              "The people are standing near the door.",
              "The people are boarding a train."
            ],
            "answer": 1,
            "why": "ไม่มีใครยืนในภาพ ข้อที่บอกว่ายืนอยู่ใกล้ประตูจึงผิด ส่วน being moved ต้องมีคนกำลังยกเก้าอี้ และ train กับ meeting ไม่เกี่ยวกันเลย เป็นตัวลวงที่ฟังผ่านๆ อาจหลุด",
            "art": "meeting_seated"
          },
          {
            "scene": "เคาน์เตอร์ร้านกาแฟ ผู้หญิงคนหนึ่งถือเหยือกเอียงลงเหนือแก้ว มีของเหลวกำลังไหลลงแก้ว ด้านหลังมีชั้นวางแก้วเปล่าเรียงอยู่",
            "choices": [
              "The glasses are being washed.",
              "The woman is pouring a drink.",
              "The woman is drinking from a cup.",
              "The woman is wearing a helmet."
            ],
            "answer": 1,
            "why": "เธอกำลังริน ไม่ได้ดื่ม จึงเป็นกับดักกริยาผิดที่ใช้ของชิ้นเดียวกัน ส่วน being washed ไม่มีใครล้างแก้วในภาพ แม้จะมีแก้วอยู่ก็ตาม",
            "art": "cafe_pouring"
          },
          {
            "scene": "ในคลังสินค้า คนงานสองคนยกกล่องขึ้นวางบนท้ายรถบรรทุกที่จอดเปิดท้ายอยู่ มีกล่องอีกหลายใบวางกองอยู่บนพื้น",
            "choices": [
              "The truck is being repaired.",
              "Boxes are being loaded onto a truck.",
              "The workers are unloading a container.",
              "The boxes are stacked on a shelf."
            ],
            "answer": 1,
            "why": "ข้อนี้ being loaded ถูก เพราะมีคนกำลังยกอยู่จริง ต่างจาก being repaired ที่ไม่มีใครซ่อมรถ และ unload คือเอาลง ตรงข้ามกับที่เห็น",
            "art": "warehouse_loading"
          },
          {
            "scene": "ห้องประชุม ผู้หญิงคนหนึ่งยืนอยู่ข้างจอที่แสดงกราฟแท่ง มือข้างหนึ่งชี้ไปที่จอ คนอื่นนั่งอยู่และมองไปทางเธอ",
            "choices": [
              "The people are leaving the room.",
              "A woman is turning off the lights.",
              "The chart is being printed.",
              "A woman is pointing at a screen."
            ],
            "answer": 3,
            "why": "การชี้คือกริยาที่เห็นชัด ส่วน being printed ไม่มีเครื่องพิมพ์ในภาพ และคนยังนั่งอยู่ ไม่ได้ออกจากห้อง",
            "art": "meeting_pointing"
          },
          {
            "scene": "โรงงาน ช่างคนหนึ่งคุกเข่าอยู่ข้างเครื่องจักร ถือประแจอยู่ในมือ มีกล่องเครื่องมือเปิดวางอยู่บนพื้นข้างๆ",
            "choices": [
              "A man is holding a tool.",
              "The machine is being operated.",
              "A man is putting on a jacket.",
              "A man is sweeping the floor."
            ],
            "answer": 0,
            "why": "เขาถือประแจอยู่ ส่วน being operated แปลว่ามีคนกำลังเดินเครื่อง ซึ่งไม่ใช่ เขากำลังซ่อม และพื้นในภาพไม่มีใครกวาด",
            "art": "factory_repair"
          }
        ],
        "part2": [
          {
            "q": "What time does the store open?",
            "choices": [
              "Near the mall.",
              "At nine o'clock.",
              "Yes, it's open."
            ],
            "answer": 1
          },
          {
            "q": "Who is in charge of the budget this year?",
            "choices": [
              "Twice a month.",
              "It's very tight.",
              "Ms. Carter is."
            ],
            "answer": 2
          },
          {
            "q": "Where should I leave the packages?",
            "choices": [
              "By the back door.",
              "Around noon.",
              "They're heavy."
            ],
            "answer": 0
          },
          {
            "q": "Why was the shipment delayed?",
            "choices": [
              "Two boxes.",
              "Because of a strike.",
              "In the warehouse."
            ],
            "answer": 1
          },
          {
            "q": "How long will the renovation take?",
            "choices": [
              "In the lobby.",
              "It's expensive.",
              "About three weeks."
            ],
            "answer": 2
          },
          {
            "q": "Did you finish the quarterly report?",
            "choices": [
              "Every quarter.",
              "It's on the shelf.",
              "Yes, this morning."
            ],
            "answer": 2
          },
          {
            "q": "Would you like tea or coffee?",
            "choices": [
              "I'll pay by card.",
              "It's very hot today.",
              "Coffee, please."
            ],
            "answer": 2
          },
          {
            "q": "Isn't the meeting starting soon?",
            "choices": [
              "About the budget.",
              "It's a long meeting.",
              "Yes, in five minutes."
            ],
            "answer": 2
          },
          {
            "q": "Could you send me the invoice?",
            "choices": [
              "Sure, right away.",
              "It's overdue.",
              "Twice a week."
            ],
            "answer": 0
          },
          {
            "q": "When does the new employee start?",
            "choices": [
              "Next Monday.",
              "In the HR office.",
              "She's very skilled."
            ],
            "answer": 0
          },
          {
            "q": "How much does the annual subscription cost?",
            "choices": [
              "It's very popular.",
              "Once a year.",
              "Fifty dollars."
            ],
            "answer": 2
          },
          {
            "q": "Which floor is the accounting department on?",
            "choices": [
              "The fourth floor.",
              "It's very busy.",
              "Every morning."
            ],
            "answer": 0
          },
          {
            "q": "Has the client confirmed the order?",
            "choices": [
              "It's a big order.",
              "Around three o'clock.",
              "Not yet."
            ],
            "answer": 2
          },
          {
            "q": "Who's presenting at the conference tomorrow?",
            "choices": [
              "It went well.",
              "In Room 12.",
              "Mr. Diaz is."
            ],
            "answer": 2
          },
          {
            "q": "Do you know where the printer is?",
            "choices": [
              "It's down the hall.",
              "Yes, I printed it.",
              "About ten pages."
            ],
            "answer": 0
          },
          {
            "q": "What's the best way to reach the airport?",
            "choices": [
              "It's very far.",
              "Take the shuttle bus.",
              "Around five hours."
            ],
            "answer": 1
          },
          {
            "q": "Shouldn't we double-check the figures?",
            "choices": [
              "Good idea.",
              "They're accurate.",
              "Last week."
            ],
            "answer": 0
          },
          {
            "q": "Why don't we reschedule the call?",
            "choices": [
              "It lasted an hour.",
              "That works for me.",
              "Yesterday afternoon."
            ],
            "answer": 1
          },
          {
            "q": "How was your business trip?",
            "choices": [
              "It went really well.",
              "To Chicago.",
              "For three days."
            ],
            "answer": 0
          },
          {
            "q": "Is the contract ready for review?",
            "choices": [
              "Yes, I just sent it.",
              "Next week.",
              "It's very long."
            ],
            "answer": 0
          },
          {
            "q": "Who approved this expense?",
            "choices": [
              "In cash.",
              "Fifty dollars.",
              "The finance director."
            ],
            "answer": 2
          },
          {
            "q": "What did the client say about the proposal?",
            "choices": [
              "They loved it.",
              "Next Tuesday.",
              "It's ten pages."
            ],
            "answer": 0
          },
          {
            "q": "Could I get a copy of the agenda?",
            "choices": [
              "Twelve people.",
              "It starts at nine.",
              "Of course, here you go."
            ],
            "answer": 2
          },
          {
            "q": "Are you attending the workshop next week?",
            "choices": [
              "It's about marketing.",
              "Yes, I signed up already.",
              "Two hours long."
            ],
            "answer": 1
          },
          {
            "q": "Where did you put the extra chairs?",
            "choices": [
              "About twenty of them.",
              "In the storage room.",
              "They're comfortable."
            ],
            "answer": 1
          }
        ],
        "part3": [
          {
            "lines": [
              "M: Are we still meeting at two o'clock today?",
              "W: I have another call at two, so let's push it to three.",
              "M: That's fine, I'll update the calendar.",
              "W: Thanks, and could you invite the marketing team too?"
            ],
            "questions": [
              {
                "q": "Why does the woman want to change the meeting time?",
                "choices": [
                  "She is on vacation.",
                  "She has another call.",
                  "The room is booked."
                ],
                "answer": 1
              },
              {
                "q": "What does the man agree to do?",
                "choices": [
                  "Update the calendar.",
                  "Book a new room.",
                  "Cancel the meeting."
                ],
                "answer": 0
              },
              {
                "q": "What does the woman ask the man to do?",
                "choices": [
                  "Invite the marketing team.",
                  "Order lunch.",
                  "Print the agenda."
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "M: My computer keeps freezing when I open the database.",
              "W: That's odd, has this happened before?",
              "M: Once last week, but IT fixed it quickly.",
              "W: I'll call the help desk and ask them to check your machine again."
            ],
            "questions": [
              {
                "q": "What problem is the man having?",
                "choices": [
                  "His computer keeps freezing.",
                  "His password expired.",
                  "His printer is broken."
                ],
                "answer": 0
              },
              {
                "q": "What happened last week, according to the man?",
                "choices": [
                  "The same problem occurred.",
                  "He lost his files.",
                  "He got a new computer."
                ],
                "answer": 0
              },
              {
                "q": "What will the woman do?",
                "choices": [
                  "Order a new laptop.",
                  "Call the help desk.",
                  "Restart the server."
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "W: I need to book a flight to Chicago for the conference.",
              "M: When are you planning to leave?",
              "W: Sunday evening, and I'd like to return Wednesday.",
              "M: I'll check flights and send you some options by tomorrow."
            ],
            "questions": [
              {
                "q": "Why does the woman need to travel?",
                "choices": [
                  "To attend a conference.",
                  "To visit family.",
                  "To meet a client."
                ],
                "answer": 0
              },
              {
                "q": "When does the woman want to return?",
                "choices": [
                  "Sunday.",
                  "Wednesday.",
                  "Friday."
                ],
                "answer": 1
              },
              {
                "q": "What will the man do next?",
                "choices": [
                  "Send flight options.",
                  "Cancel the trip.",
                  "Book a hotel."
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "M: A customer called about a defective blender they received.",
              "W: Did you offer a replacement?",
              "M: Yes, but she also asked about a refund instead.",
              "W: Let's process the refund since it's within the return period."
            ],
            "questions": [
              {
                "q": "What is the customer's problem?",
                "choices": [
                  "Her order never arrived.",
                  "She received a defective item.",
                  "She was overcharged."
                ],
                "answer": 1
              },
              {
                "q": "What does the customer ask for, in addition to a replacement?",
                "choices": [
                  "A discount.",
                  "A refund.",
                  "An apology letter."
                ],
                "answer": 1
              },
              {
                "q": "What will they do?",
                "choices": [
                  "Process the refund.",
                  "Send a new blender.",
                  "Ignore the request."
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: I heard our department is moving to the fifth floor.",
              "M: Yes, the move is scheduled for next Friday.",
              "W: Do we need to pack our own desks?",
              "M: No, the facilities team will handle the packing and moving."
            ],
            "questions": [
              {
                "q": "What are the speakers discussing?",
                "choices": [
                  "A budget cut.",
                  "An office move.",
                  "A new hire."
                ],
                "answer": 1
              },
              {
                "q": "When is the move scheduled?",
                "choices": [
                  "This Monday.",
                  "In two months.",
                  "Next Friday."
                ],
                "answer": 2
              },
              {
                "q": "Who will handle the packing?",
                "choices": [
                  "Each employee.",
                  "An outside company.",
                  "The facilities team."
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: How did the new ad campaign perform last month?",
              "W: Sales increased by twelve percent, actually.",
              "M: That's great news. Should we extend the budget for next quarter?",
              "W: I think so. Let's discuss it at Thursday's meeting."
            ],
            "questions": [
              {
                "q": "What does the woman report?",
                "choices": [
                  "Sales decreased.",
                  "Sales increased.",
                  "The campaign was cancelled."
                ],
                "answer": 1
              },
              {
                "q": "By how much did sales increase?",
                "choices": [
                  "Two percent.",
                  "Twelve percent.",
                  "Twenty percent."
                ],
                "answer": 1
              },
              {
                "q": "When will they discuss the budget?",
                "choices": [
                  "Next month.",
                  "Tomorrow morning.",
                  "At Thursday's meeting."
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "W: We received over a hundred applications for the analyst position.",
              "M: That's a lot. How will we narrow them down?",
              "W: HR will do an initial screening, then send us the top ten.",
              "M: Good, let's plan interviews for early next week."
            ],
            "questions": [
              {
                "q": "What position are they hiring for?",
                "choices": [
                  "Manager.",
                  "Analyst.",
                  "Receptionist."
                ],
                "answer": 1
              },
              {
                "q": "Who will do the initial screening?",
                "choices": [
                  "The man.",
                  "HR.",
                  "An outside agency."
                ],
                "answer": 1
              },
              {
                "q": "When will interviews likely take place?",
                "choices": [
                  "Next month.",
                  "This afternoon.",
                  "Early next week."
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: I'd like to reserve a table for eight people this Saturday.",
              "W: We have an opening at seven in the evening.",
              "M: That works. Could we also request a table near the window?",
              "W: I'll note that on your reservation."
            ],
            "questions": [
              {
                "q": "What is the man doing?",
                "choices": [
                  "Making a reservation.",
                  "Asking for a refund.",
                  "Cancelling an order."
                ],
                "answer": 0
              },
              {
                "q": "What time is the table available?",
                "choices": [
                  "Seven in the evening.",
                  "Nine in the evening.",
                  "Noon."
                ],
                "answer": 0
              },
              {
                "q": "What does the man request?",
                "choices": [
                  "A table near the window.",
                  "A private room.",
                  "A discount."
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: The inventory count shows we're low on packaging boxes.",
              "M: I'll place an order with our supplier today.",
              "W: Could you also ask about bulk pricing?",
              "M: Sure, I'll mention it when I call."
            ],
            "questions": [
              {
                "q": "What is low in the warehouse?",
                "choices": [
                  "Office chairs.",
                  "Packaging boxes.",
                  "Computers."
                ],
                "answer": 1
              },
              {
                "q": "What will the man do today?",
                "choices": [
                  "Place an order.",
                  "Count the inventory.",
                  "Hire a new worker."
                ],
                "answer": 0
              },
              {
                "q": "What does the woman ask about?",
                "choices": [
                  "Product colors.",
                  "Bulk pricing.",
                  "Delivery speed."
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: Are you ready for tomorrow's presentation?",
              "W: Almost, I just need to finish the last two slides.",
              "M: Do you need any help with the data charts?",
              "W: That would be great, thanks."
            ],
            "questions": [
              {
                "q": "What is the woman preparing?",
                "choices": [
                  "A presentation.",
                  "A budget report.",
                  "A training manual."
                ],
                "answer": 0
              },
              {
                "q": "What does she still need to finish?",
                "choices": [
                  "The introduction.",
                  "A video.",
                  "Two slides."
                ],
                "answer": 2
              },
              {
                "q": "What does the man offer to help with?",
                "choices": [
                  "Booking the room.",
                  "Printing handouts.",
                  "Data charts."
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "W: The air conditioning on the third floor isn't working.",
              "M: I'll contact the maintenance company right away.",
              "W: How long do you think the repair will take?",
              "M: They usually respond within a few hours."
            ],
            "questions": [
              {
                "q": "What problem is being discussed?",
                "choices": [
                  "The lights are flickering.",
                  "The air conditioning is broken.",
                  "The elevator is stuck."
                ],
                "answer": 1
              },
              {
                "q": "What will the man do?",
                "choices": [
                  "Fix it himself.",
                  "Contact maintenance.",
                  "Close the office."
                ],
                "answer": 1
              },
              {
                "q": "How quickly does the company usually respond?",
                "choices": [
                  "Within a few hours.",
                  "Within a week.",
                  "The next day."
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "M: Don't forget the safety training starts at nine tomorrow.",
              "W: Right, is it in the main conference room?",
              "M: Yes, and please bring your employee ID.",
              "W: Got it, I'll be there early."
            ],
            "questions": [
              {
                "q": "What time does the training start?",
                "choices": [
                  "Ten.",
                  "Nine.",
                  "Noon."
                ],
                "answer": 1
              },
              {
                "q": "Where will the training be held?",
                "choices": [
                  "Off-site.",
                  "The main conference room.",
                  "The cafeteria."
                ],
                "answer": 1
              },
              {
                "q": "What should the woman bring?",
                "choices": [
                  "Her employee ID.",
                  "A notebook.",
                  "A laptop."
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: Have you tracked the shipment for order four-forty?",
              "M: Yes, it's currently at customs.",
              "W: Do you know when it will clear?",
              "M: The carrier estimates two more business days."
            ],
            "questions": [
              {
                "q": "What are the speakers tracking?",
                "choices": [
                  "A refund.",
                  "An invoice.",
                  "A shipment."
                ],
                "answer": 2
              },
              {
                "q": "Where is the shipment currently?",
                "choices": [
                  "At customs.",
                  "Still with the supplier.",
                  "At the warehouse."
                ],
                "answer": 0
              },
              {
                "q": "When is it expected to clear?",
                "choices": [
                  "Next month.",
                  "Today.",
                  "In two business days."
                ],
                "answer": 2
              }
            ]
          }
        ],
        "part4": [
          {
            "script": "Attention all staff. We will conduct a fire drill this afternoon at two o'clock. Please leave the building calmly through the nearest exit when the alarm sounds, and gather in the parking lot. The drill should take about ten minutes.",
            "questions": [
              {
                "q": "What is the announcement about?",
                "choices": [
                  "A building inspection.",
                  "A power outage.",
                  "A fire drill."
                ],
                "answer": 2
              },
              {
                "q": "What should staff do when the alarm sounds?",
                "choices": [
                  "Stay at their desks.",
                  "Leave through the nearest exit.",
                  "Call security."
                ],
                "answer": 1
              },
              {
                "q": "How long will the drill take?",
                "choices": [
                  "One hour.",
                  "About ten minutes.",
                  "All afternoon."
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "We are sorry to announce that flight three-one-two to Seoul has been delayed by one hour due to a technical inspection. Passengers may wait in the lounge near gate nine. We apologize for the inconvenience and will provide updates as they become available.",
            "questions": [
              {
                "q": "Why is the flight delayed?",
                "choices": [
                  "Bad weather.",
                  "A staff shortage.",
                  "A technical inspection."
                ],
                "answer": 2
              },
              {
                "q": "Where can passengers wait?",
                "choices": [
                  "In the lounge near gate nine.",
                  "At the check-in counter.",
                  "On the plane."
                ],
                "answer": 0
              },
              {
                "q": "How long is the delay?",
                "choices": [
                  "One hour.",
                  "Thirty minutes.",
                  "Two hours."
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Thank you for shopping at Green Valley Market. This week only, all fresh produce is twenty percent off. Also, members of our rewards program earn double points on all purchases made before Friday.",
            "questions": [
              {
                "q": "What is on sale this week?",
                "choices": [
                  "Fresh produce.",
                  "Clothing.",
                  "Electronics."
                ],
                "answer": 0
              },
              {
                "q": "How much is the discount?",
                "choices": [
                  "Fifty percent.",
                  "Ten percent.",
                  "Twenty percent."
                ],
                "answer": 2
              },
              {
                "q": "What benefit do rewards members get?",
                "choices": [
                  "Free delivery.",
                  "A gift card.",
                  "Double points."
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "Good morning, everyone. I'm pleased to share that our revenue grew by eighteen percent last quarter. This growth is thanks to the hard work of every department. Starting next month, we'll also be opening a new branch downtown.",
            "questions": [
              {
                "q": "What is the speaker mainly discussing?",
                "choices": [
                  "A merger.",
                  "Staff layoffs.",
                  "Company growth."
                ],
                "answer": 2
              },
              {
                "q": "By how much did revenue grow?",
                "choices": [
                  "Eighty percent.",
                  "Eight percent.",
                  "Eighteen percent."
                ],
                "answer": 2
              },
              {
                "q": "What will happen next month?",
                "choices": [
                  "Prices will increase.",
                  "A new branch will open.",
                  "The office will close."
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Hi, this is Karen from Sunrise Bank. I'm calling about your loan application. We need one more document, a copy of your recent pay stub, before we can proceed. Please call us back at your convenience.",
            "questions": [
              {
                "q": "Why is Karen calling?",
                "choices": [
                  "The account was closed.",
                  "A document is missing.",
                  "The loan was rejected."
                ],
                "answer": 1
              },
              {
                "q": "What document is needed?",
                "choices": [
                  "A recent pay stub.",
                  "A passport copy.",
                  "A tax return."
                ],
                "answer": 0
              },
              {
                "q": "What is the listener asked to do?",
                "choices": [
                  "Call back.",
                  "Visit the bank in person.",
                  "Send an email."
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Welcome to the City History Museum. Guided tours begin every hour on the hour and last approximately forty-five minutes. Please note that photography is not permitted in the special exhibit hall on the second floor.",
            "questions": [
              {
                "q": "How often do guided tours begin?",
                "choices": [
                  "Every hour.",
                  "Every thirty minutes.",
                  "Twice a day."
                ],
                "answer": 0
              },
              {
                "q": "How long does a tour last?",
                "choices": [
                  "About forty-five minutes.",
                  "Fifteen minutes.",
                  "Two hours."
                ],
                "answer": 0
              },
              {
                "q": "What is not allowed on the second floor?",
                "choices": [
                  "Talking.",
                  "Photography.",
                  "Eating."
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Good morning, commuters. Traffic on the main highway is moving slowly due to construction near exit twelve. Drivers are advised to use the north bypass to avoid delays. Normal traffic flow should return by early afternoon.",
            "questions": [
              {
                "q": "Why is traffic moving slowly?",
                "choices": [
                  "Construction.",
                  "Bad weather.",
                  "An accident."
                ],
                "answer": 0
              },
              {
                "q": "What are drivers advised to do?",
                "choices": [
                  "Use the north bypass.",
                  "Avoid driving today.",
                  "Take public transportation."
                ],
                "answer": 0
              },
              {
                "q": "When should traffic return to normal?",
                "choices": [
                  "Early afternoon.",
                  "This evening.",
                  "Tomorrow morning."
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Welcome to the annual Tech Innovators Conference. Today's schedule includes three keynote speeches and several workshops. Lunch will be served in the main hall at noon, and the closing session begins at five in the evening.",
            "questions": [
              {
                "q": "What event is taking place?",
                "choices": [
                  "A job fair.",
                  "A product launch.",
                  "A tech conference."
                ],
                "answer": 2
              },
              {
                "q": "Where will lunch be served?",
                "choices": [
                  "In the main hall.",
                  "In the lobby.",
                  "Outside."
                ],
                "answer": 0
              },
              {
                "q": "What time does the closing session begin?",
                "choices": [
                  "Noon.",
                  "Nine in the morning.",
                  "Five in the evening."
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "Before we begin the shift, please remember to wear your safety goggles and gloves at all times on the production floor. Any equipment malfunction should be reported to your supervisor immediately, not repaired on your own.",
            "questions": [
              {
                "q": "What must workers wear on the production floor?",
                "choices": [
                  "Safety goggles and gloves.",
                  "Uniforms only.",
                  "Hard hats only."
                ],
                "answer": 0
              },
              {
                "q": "What should workers do if equipment malfunctions?",
                "choices": [
                  "Report it to a supervisor.",
                  "Ignore it.",
                  "Repair it themselves."
                ],
                "answer": 0
              },
              {
                "q": "When does this briefing take place?",
                "choices": [
                  "During lunch.",
                  "Before the shift begins.",
                  "After the shift ends."
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "This is a reminder that checkout time is eleven in the morning. Guests wishing to extend their stay should contact the front desk before ten. Luggage storage is available free of charge for guests departing later in the day.",
            "questions": [
              {
                "q": "What is the checkout time?",
                "choices": [
                  "Noon.",
                  "Ten in the evening.",
                  "Eleven in the morning."
                ],
                "answer": 2
              },
              {
                "q": "What should guests do to extend their stay?",
                "choices": [
                  "Contact the front desk.",
                  "Pay an extra fee automatically.",
                  "Check out and check back in."
                ],
                "answer": 0
              },
              {
                "q": "What free service is mentioned?",
                "choices": [
                  "Airport shuttle.",
                  "Luggage storage.",
                  "Breakfast."
                ],
                "answer": 1
              }
            ]
          }
        ]
      },
      "reading": {
        "part5": [
          {
            "sentence": "The manager asked everyone to ______ the new safety policy.",
            "choices": [
              "reviewed",
              "reviews",
              "review",
              "reviewing"
            ],
            "answer": 2
          },
          {
            "sentence": "Sales have grown ______ over the past two years.",
            "choices": [
              "steadily",
              "steadier",
              "steadiness",
              "steady"
            ],
            "answer": 0
          },
          {
            "sentence": "Please submit the form ______ the end of the day.",
            "choices": [
              "during",
              "by",
              "among",
              "since"
            ],
            "answer": 1
          },
          {
            "sentence": "The company's new logo is more ______ than the old one.",
            "choices": [
              "modern",
              "modernly",
              "modernize",
              "modernization"
            ],
            "answer": 0
          },
          {
            "sentence": "Employees ______ complete the survey will receive a small gift.",
            "choices": [
              "who",
              "whom",
              "whose",
              "which"
            ],
            "answer": 0
          },
          {
            "sentence": "The board plans ______ a new director next month.",
            "choices": [
              "appointed",
              "appointing",
              "to appoint",
              "appoints"
            ],
            "answer": 2
          },
          {
            "sentence": "All visitors must ______ at the front desk before entering.",
            "choices": [
              "registration",
              "registers",
              "registered",
              "register"
            ],
            "answer": 3
          },
          {
            "sentence": "Her proposal was ______ organized and well researched.",
            "choices": [
              "care",
              "carefully",
              "careful",
              "caring"
            ],
            "answer": 1
          },
          {
            "sentence": "The new employees ______ orientation last Monday.",
            "choices": [
              "to attend",
              "attend",
              "attended",
              "attending"
            ],
            "answer": 2
          },
          {
            "sentence": "This model is ______ efficient than the previous one.",
            "choices": [
              "most",
              "much",
              "more",
              "very"
            ],
            "answer": 2
          },
          {
            "sentence": "The invoice must be paid ______ thirty days.",
            "choices": [
              "within",
              "between",
              "among",
              "through"
            ],
            "answer": 0
          },
          {
            "sentence": "The technician ______ the printer before the meeting starts.",
            "choices": [
              "fixed",
              "fixing",
              "fixes",
              "will fix"
            ],
            "answer": 3
          },
          {
            "sentence": "Neither the manager nor the assistants ______ available today.",
            "choices": [
              "is",
              "be",
              "are",
              "was"
            ],
            "answer": 2
          },
          {
            "sentence": "The report ______ several errors that need correcting.",
            "choices": [
              "containing",
              "contains",
              "contain",
              "contained"
            ],
            "answer": 1
          },
          {
            "sentence": "We are looking for a candidate ______ strong communication skills.",
            "choices": [
              "with",
              "of",
              "for",
              "at"
            ],
            "answer": 0
          },
          {
            "sentence": "The client seemed ______ satisfied with the final design.",
            "choices": [
              "height",
              "highness",
              "highly",
              "high"
            ],
            "answer": 2
          },
          {
            "sentence": "Please make sure the documents are signed ______ you submit them.",
            "choices": [
              "since",
              "after",
              "before",
              "during"
            ],
            "answer": 2
          },
          {
            "sentence": "The workshop will help employees ______ their presentation skills.",
            "choices": [
              "improve",
              "improved",
              "improving",
              "improves"
            ],
            "answer": 0
          },
          {
            "sentence": "Due to heavy rain, the outdoor event was ______ postponed.",
            "choices": [
              "temporarily",
              "temporariness",
              "temporize",
              "temporary"
            ],
            "answer": 0
          },
          {
            "sentence": "The applicants must submit their resumes ______ Friday.",
            "choices": [
              "by",
              "for",
              "until",
              "since"
            ],
            "answer": 0
          },
          {
            "sentence": "Our team achieved its goals ______ despite the tight deadline.",
            "choices": [
              "successfully",
              "succeed",
              "successful",
              "success"
            ],
            "answer": 0
          },
          {
            "sentence": "The company ______ its headquarters to a larger building last year.",
            "choices": [
              "moving",
              "moves",
              "moved",
              "has moved"
            ],
            "answer": 2
          },
          {
            "sentence": "You should double-check the figures ______ submitting the report.",
            "choices": [
              "before",
              "although",
              "unless",
              "despite"
            ],
            "answer": 0
          },
          {
            "sentence": "The new regulation requires all vehicles ______ inspected annually.",
            "choices": [
              "be",
              "to be",
              "been",
              "being"
            ],
            "answer": 1
          },
          {
            "sentence": "Customer feedback has been ______ positive since the redesign.",
            "choices": [
              "overwhelm",
              "overwhelming",
              "overwhelms",
              "overwhelmingly"
            ],
            "answer": 3
          },
          {
            "sentence": "The negotiations lasted ______ three hours before an agreement was reached.",
            "choices": [
              "during",
              "for",
              "by",
              "since"
            ],
            "answer": 1
          },
          {
            "sentence": "Each department ______ responsible for its own budget.",
            "choices": [
              "be",
              "is",
              "are",
              "were"
            ],
            "answer": 1
          },
          {
            "sentence": "The manual explains how to ______ the equipment safely.",
            "choices": [
              "operational",
              "operate",
              "operation",
              "operating"
            ],
            "answer": 1
          },
          {
            "sentence": "The merger will ______ significant changes to the company structure.",
            "choices": [
              "bring",
              "brought",
              "brings",
              "bringing"
            ],
            "answer": 0
          },
          {
            "sentence": "Staff are encouraged to report any safety concerns ______ their supervisor.",
            "choices": [
              "at",
              "in",
              "on",
              "to"
            ],
            "answer": 3
          }
        ],
        "part6": [
          {
            "passage": "To all employees: Starting next Monday, the office will ___1___ new parking permits for all staff vehicles. Employees who do not have a permit will not be ___2___ to park in the main lot. Permits can be picked up at the security desk any time this week. If you have ___3___ about the new policy, please contact the facilities office. We appreciate your ___4___ during this transition.",
            "blanks": [
              {
                "choices": [
                  "requiring",
                  "required",
                  "require",
                  "requires"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "allows",
                  "allowed",
                  "allowing",
                  "allow"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "questions",
                  "questioning",
                  "questioned",
                  "question"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "cooperative",
                  "cooperate",
                  "cooperation",
                  "cooperatively"
                ],
                "answer": 2
              }
            ]
          },
          {
            "passage": "Dear valued customer, we are excited to ___1___ that our newest product line will launch next month. This collection was ___2___ designed based on customer feedback from the past year. Pre-orders will open on our website starting Friday, and early customers will ___3___ a ten percent discount. Thank you for your continued ___4___.",
            "blanks": [
              {
                "choices": [
                  "announcing",
                  "announced",
                  "announces",
                  "announce"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "cares",
                  "care",
                  "careful",
                  "carefully"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "received",
                  "receives",
                  "receiving",
                  "receive"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "supporting",
                  "supported",
                  "support",
                  "supports"
                ],
                "answer": 2
              }
            ]
          },
          {
            "passage": "Bright Media is currently ___1___ for a marketing coordinator to join our growing team. The ideal candidate will have at least two years of ___2___ in digital marketing. Responsibilities include managing social media accounts and ___3___ campaign performance. Interested applicants should send their resume ___4___ Friday, June 20.",
            "blanks": [
              {
                "choices": [
                  "hire",
                  "hires",
                  "hiring",
                  "hired"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "experiencing",
                  "experiences",
                  "experienced",
                  "experience"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "analyzing",
                  "analyze",
                  "analyzed",
                  "analyzes"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "at",
                  "by",
                  "until",
                  "since"
                ],
                "answer": 1
              }
            ]
          },
          {
            "passage": "Notice to all residents: The building's water supply will be ___1___ off on Saturday from eight in the morning until noon for scheduled maintenance. We ___2___ recommend storing extra water beforehand. The maintenance team will also be ___3___ the elevators during this time, so please use the stairs. We apologize for any ___4___ this may cause.",
            "blanks": [
              {
                "choices": [
                  "turn",
                  "turned",
                  "turning",
                  "turns"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "strengthen",
                  "strength",
                  "strongly",
                  "strong"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "inspects",
                  "inspecting",
                  "inspected",
                  "inspect"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "inconvenienced",
                  "inconvenient",
                  "inconvenience",
                  "inconveniently"
                ],
                "answer": 2
              }
            ]
          }
        ],
        "part7": {
          "single": [
            {
              "passage": "MEMO — To: All Staff / From: Office Management / Re: New Recycling Program. Starting next month, the office will introduce a new recycling program. Blue bins will be placed on every floor for paper waste, and green bins will be used for plastic and cans. Please make sure to separate your waste accordingly. A short training session on the new program will be held this Thursday at ten in the morning in the main conference room. Attendance is optional but encouraged. Employees who have questions can contact the office manager directly.",
              "questions": [
                {
                  "q": "What is the main purpose of this memo?",
                  "choices": [
                    "To announce a schedule change.",
                    "To announce a new parking policy.",
                    "To announce a new recycling program."
                  ],
                  "answer": 2
                },
                {
                  "q": "What should be placed in the blue bins?",
                  "choices": [
                    "Paper waste.",
                    "Food waste.",
                    "Plastic and cans."
                  ],
                  "answer": 0
                },
                {
                  "q": "When is the training session?",
                  "choices": [
                    "Friday afternoon.",
                    "Monday at noon.",
                    "Thursday at ten in the morning."
                  ],
                  "answer": 2
                },
                {
                  "q": "Where will the training be held?",
                  "choices": [
                    "The main conference room.",
                    "The parking lot.",
                    "The cafeteria."
                  ],
                  "answer": 0
                },
                {
                  "q": "Is attendance at the training required?",
                  "choices": [
                    "Yes, it is mandatory.",
                    "Only for managers.",
                    "No, it is optional."
                  ],
                  "answer": 2
                },
                {
                  "q": "Who should employees contact with questions?",
                  "choices": [
                    "The office manager.",
                    "Human resources.",
                    "The IT department."
                  ],
                  "answer": 0
                }
              ]
            },
            {
              "passage": "Product Review: The SoundWave X200 Headphones. The SoundWave X200 has quickly become one of the most popular headphones on the market this year. Reviewers praise its long battery life, which lasts up to thirty hours on a single charge. The sound quality is described as clear and balanced, suitable for both music and phone calls. However, some users note that the headphones are slightly heavier than competing models, which may cause discomfort during extended use. At a price of eighty dollars, the SoundWave X200 offers strong value compared to similar products.",
              "questions": [
                {
                  "q": "What is the article mainly about?",
                  "choices": [
                    "A comparison of phone brands.",
                    "A review of headphones.",
                    "An advertisement for a music service."
                  ],
                  "answer": 1
                },
                {
                  "q": "How long does the battery last?",
                  "choices": [
                    "One week.",
                    "Ten hours.",
                    "Up to thirty hours."
                  ],
                  "answer": 2
                },
                {
                  "q": "What do some users complain about?",
                  "choices": [
                    "The price.",
                    "The weight of the headphones.",
                    "The color options."
                  ],
                  "answer": 1
                },
                {
                  "q": "How much do the headphones cost?",
                  "choices": [
                    "Thirty dollars.",
                    "Eighty dollars.",
                    "Two hundred dollars."
                  ],
                  "answer": 1
                },
                {
                  "q": "What is the sound quality described as?",
                  "choices": [
                    "Weak and unclear.",
                    "Too loud.",
                    "Clear and balanced."
                  ],
                  "answer": 2
                },
                {
                  "q": "What conclusion does the article reach about value?",
                  "choices": [
                    "The headphones are not recommended.",
                    "The headphones are overpriced.",
                    "The headphones offer strong value."
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passage": "Dear Team, I am writing to inform you that the quarterly review meeting originally scheduled for next Tuesday has been moved to next Thursday at the same time, two in the afternoon. This change is due to a scheduling conflict with our regional director, who will now be able to join us. Please update your calendars accordingly. If Thursday does not work for you, let me know by Wednesday so we can make alternative arrangements. Best regards, Priya.",
              "questions": [
                {
                  "q": "Why is Priya writing this email?",
                  "choices": [
                    "To announce a meeting change.",
                    "To cancel a meeting.",
                    "To introduce a new employee."
                  ],
                  "answer": 0
                },
                {
                  "q": "When was the meeting originally scheduled?",
                  "choices": [
                    "Next Tuesday.",
                    "This Friday.",
                    "Next Thursday."
                  ],
                  "answer": 0
                },
                {
                  "q": "What time is the meeting?",
                  "choices": [
                    "Five in the evening.",
                    "Two in the afternoon.",
                    "Nine in the morning."
                  ],
                  "answer": 1
                },
                {
                  "q": "Why was the meeting rescheduled?",
                  "choices": [
                    "The room was unavailable.",
                    "A scheduling conflict with the regional director.",
                    "Bad weather."
                  ],
                  "answer": 1
                },
                {
                  "q": "What should employees do if Thursday doesn't work?",
                  "choices": [
                    "Attend anyway.",
                    "Skip the meeting.",
                    "Let Priya know by Wednesday."
                  ],
                  "answer": 2
                },
                {
                  "q": "Who will now be able to attend the meeting?",
                  "choices": [
                    "A client.",
                    "The regional director.",
                    "The CEO."
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passage": "Grand Opening! Riverside Fitness Center will open its doors on July 1st. To celebrate, the first one hundred members to sign up will receive a free three-month membership and a complimentary gym bag. The facility includes a swimming pool, a full weight room, and daily group exercise classes. Regular monthly membership is forty-five dollars, with no long-term contract required. Visit our website or stop by in person to register.",
              "questions": [
                {
                  "q": "What is being advertised?",
                  "choices": [
                    "A clothing store.",
                    "A restaurant.",
                    "A new fitness center."
                  ],
                  "answer": 2
                },
                {
                  "q": "When will the center open?",
                  "choices": [
                    "August 1st.",
                    "June 1st.",
                    "July 1st."
                  ],
                  "answer": 2
                },
                {
                  "q": "What do the first one hundred members receive?",
                  "choices": [
                    "A free year of membership.",
                    "A cash prize.",
                    "A free three-month membership and a gym bag."
                  ],
                  "answer": 2
                },
                {
                  "q": "What facilities does the center include?",
                  "choices": [
                    "A spa and sauna only.",
                    "A basketball court only.",
                    "A pool, weight room, and exercise classes."
                  ],
                  "answer": 2
                },
                {
                  "q": "How much is the regular monthly membership?",
                  "choices": [
                    "One hundred dollars.",
                    "Fifteen dollars.",
                    "Forty-five dollars."
                  ],
                  "answer": 2
                },
                {
                  "q": "Is a long-term contract required?",
                  "choices": [
                    "Yes, a six-month contract.",
                    "No.",
                    "Yes, a one-year contract."
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passage": "Crestline Bank is pleased to announce the appointment of Daniel Reyes as the new branch manager for our downtown location, effective August 1st. Mr. Reyes brings over ten years of experience in retail banking and has previously managed branches in two other cities. Customers can expect the same high level of service they have come to know, along with new initiatives focused on small business lending. Please join us in welcoming Mr. Reyes to the team.",
              "questions": [
                {
                  "q": "What is this announcement about?",
                  "choices": [
                    "A merger with another bank.",
                    "A new bank location.",
                    "A new branch manager."
                  ],
                  "answer": 2
                },
                {
                  "q": "When does Mr. Reyes start?",
                  "choices": [
                    "July 1st.",
                    "September 1st.",
                    "August 1st."
                  ],
                  "answer": 2
                },
                {
                  "q": "How much experience does Mr. Reyes have?",
                  "choices": [
                    "Five years.",
                    "Two years.",
                    "Over ten years."
                  ],
                  "answer": 2
                },
                {
                  "q": "What new initiative will be introduced?",
                  "choices": [
                    "Small business lending.",
                    "Online-only banking.",
                    "International transfers."
                  ],
                  "answer": 0
                },
                {
                  "q": "What did Mr. Reyes do before this role?",
                  "choices": [
                    "Was a financial analyst only.",
                    "Worked in IT.",
                    "Managed branches in two other cities."
                  ],
                  "answer": 2
                }
              ]
            }
          ],
          "double": [
            {
              "passages": [
                "Job Opening: Customer Service Representative. Pacific Freight is seeking a full-time customer service representative to handle client inquiries and track shipments. Requirements include strong communication skills and at least one year of related experience. This position offers a competitive salary and health benefits. To apply, send your resume to jobs@pacificfreight.example by June 15.",
                "Dear Hiring Manager, I am writing to apply for the customer service representative position advertised on your website. I have two years of experience in a similar role at a logistics company, where I regularly handled shipment tracking and customer complaints. I have attached my resume for your review and would welcome the opportunity to discuss my application further. Thank you for your consideration. Sincerely, Wanda Lee."
              ],
              "questions": [
                {
                  "q": "What position is being advertised?",
                  "choices": [
                    "Delivery driver.",
                    "Customer service representative.",
                    "Warehouse manager."
                  ],
                  "answer": 1
                },
                {
                  "q": "What is the deadline to apply?",
                  "choices": [
                    "May 15.",
                    "July 15.",
                    "June 15."
                  ],
                  "answer": 2
                },
                {
                  "q": "How much experience does Wanda Lee have?",
                  "choices": [
                    "One year.",
                    "Five years.",
                    "Two years."
                  ],
                  "answer": 2
                },
                {
                  "q": "What did Wanda Lee do in her previous role?",
                  "choices": [
                    "Handled shipment tracking and complaints.",
                    "Managed a warehouse.",
                    "Designed marketing materials."
                  ],
                  "answer": 0
                },
                {
                  "q": "What did Wanda Lee attach to her email?",
                  "choices": [
                    "Her resume.",
                    "A cover letter only.",
                    "A reference list."
                  ],
                  "answer": 0
                }
              ]
            },
            {
              "passages": [
                "Notice: Oakview Electronics will be closed on Monday for annual inventory. We apologize for any inconvenience. During this time, online orders can still be placed but will not ship until Tuesday. Our customer service line will remain open from nine to five for any urgent questions.",
                "Hello, I placed an order online yesterday and noticed the estimated delivery date has moved to later than expected. I saw your notice about the store closure, but I wanted to confirm whether my order, number 8842, will still ship on Tuesday as planned. Thank you for your help. Best, Tomas Alvarez."
              ],
              "questions": [
                {
                  "q": "Why will the store be closed on Monday?",
                  "choices": [
                    "Annual inventory.",
                    "A holiday.",
                    "Renovation."
                  ],
                  "answer": 0
                },
                {
                  "q": "When will online orders ship?",
                  "choices": [
                    "Tuesday.",
                    "Monday.",
                    "Wednesday."
                  ],
                  "answer": 0
                },
                {
                  "q": "What hours is customer service available?",
                  "choices": [
                    "Only in the morning.",
                    "Nine to five.",
                    "All day."
                  ],
                  "answer": 1
                },
                {
                  "q": "Why is Tomas writing?",
                  "choices": [
                    "To cancel his order.",
                    "To confirm his order will ship as planned.",
                    "To request a refund."
                  ],
                  "answer": 1
                },
                {
                  "q": "What is Tomas's order number?",
                  "choices": [
                    "8824.",
                    "8842.",
                    "4288."
                  ],
                  "answer": 1
                }
              ]
            }
          ],
          "triple": [
            {
              "passages": [
                "Annual Business Leadership Summit — October 10-11, Grand Hotel Conference Center. Join industry leaders for two days of workshops and networking. Early registration (before September 1) costs one hundred fifty dollars; regular registration is two hundred dollars. Includes lunch both days and a welcome reception.",
                "Hello, I would like to register for the Business Leadership Summit. Since today is August 28, I believe I still qualify for the early registration rate. Could you please confirm and let me know how to complete payment? Thank you, Julia Fenwick.",
                "Dear Ms. Fenwick, thank you for your interest. You do qualify for the early rate of one hundred fifty dollars, as your registration was received before September 1. Payment can be completed through the link on our website. Please note that the welcome reception will now begin at six in the evening instead of seven, due to a room change. We look forward to seeing you at the summit."
              ],
              "questions": [
                {
                  "q": "What is the event?",
                  "choices": [
                    "Business Leadership Summit.",
                    "A trade fair.",
                    "A charity gala."
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the early registration price?",
                  "choices": [
                    "One hundred dollars.",
                    "Two hundred dollars.",
                    "One hundred fifty dollars."
                  ],
                  "answer": 2
                },
                {
                  "q": "Why does Julia believe she qualifies for the early rate?",
                  "choices": [
                    "She worked at the hotel.",
                    "She is a first-time attendee.",
                    "Her registration is before September 1."
                  ],
                  "answer": 2
                },
                {
                  "q": "What is included with registration?",
                  "choices": [
                    "Airfare.",
                    "Hotel accommodation.",
                    "Lunch both days and a welcome reception."
                  ],
                  "answer": 2
                },
                {
                  "q": "What changed about the welcome reception?",
                  "choices": [
                    "The start time moved to six in the evening.",
                    "The location moved to another hotel.",
                    "It was cancelled."
                  ],
                  "answer": 0
                }
              ]
            },
            {
              "passages": [
                "EcoClean Detergent — Available in 1L and 3L bottles. Made from plant-based ingredients, EcoClean is safe for sensitive skin and septic systems. The 1L bottle costs six dollars, and the 3L bottle costs fifteen dollars, offering better value for larger households.",
                "Hi, I'm interested in EcoClean but wanted to ask if it's safe to use in high-efficiency washing machines. I have a front-loading machine and want to make sure the detergent won't cause any issues. Thanks, Ben Ortiz.",
                "Hello Mr. Ortiz, thank you for reaching out. Yes, EcoClean is fully compatible with high-efficiency washing machines, including front-loading models. We recommend using half the usual amount for the best results in HE machines. Let us know if you have any other questions."
              ],
              "questions": [
                {
                  "q": "What is EcoClean made from?",
                  "choices": [
                    "Synthetic chemicals.",
                    "Recycled plastic.",
                    "Plant-based ingredients."
                  ],
                  "answer": 2
                },
                {
                  "q": "How much does the 3L bottle cost?",
                  "choices": [
                    "Twenty dollars.",
                    "Six dollars.",
                    "Fifteen dollars."
                  ],
                  "answer": 2
                },
                {
                  "q": "What does Ben Ortiz want to know?",
                  "choices": [
                    "Whether it's safe for HE washing machines.",
                    "Whether it's available in stores.",
                    "Whether it has a scent."
                  ],
                  "answer": 0
                },
                {
                  "q": "What machine does Ben have?",
                  "choices": [
                    "A front-loading machine.",
                    "A top-loading machine.",
                    "A hand-wash setup."
                  ],
                  "answer": 0
                },
                {
                  "q": "What does the company recommend for HE machines?",
                  "choices": [
                    "Using double the amount.",
                    "Not using the product at all.",
                    "Using half the usual amount."
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passages": [
                "To all staff: Effective next month, employees may work from home up to two days per week, subject to manager approval. Employees must be available online during core hours, ten in the morning to three in the afternoon, on remote days. This policy will be reviewed after six months.",
                "Hi HR, thanks for the update on remote work. I wanted to ask, if my manager approves, can I choose which two days each week, or will the days be fixed by the department?",
                "Hello, great question. Employees may choose their own remote days each week, as long as they are approved in advance by their manager and do not conflict with scheduled team meetings. We hope this flexibility works well for everyone."
              ],
              "questions": [
                {
                  "q": "What is the new policy about?",
                  "choices": [
                    "Overtime pay.",
                    "Working from home.",
                    "Vacation days."
                  ],
                  "answer": 1
                },
                {
                  "q": "How many remote days are allowed per week?",
                  "choices": [
                    "Up to five.",
                    "Up to two.",
                    "One."
                  ],
                  "answer": 1
                },
                {
                  "q": "What are the core hours on remote days?",
                  "choices": [
                    "All day.",
                    "Ten in the morning to three in the afternoon.",
                    "Nine to five."
                  ],
                  "answer": 1
                },
                {
                  "q": "When will the policy be reviewed?",
                  "choices": [
                    "After one year.",
                    "After six months.",
                    "Never."
                  ],
                  "answer": 1
                },
                {
                  "q": "Can employees choose their own remote days?",
                  "choices": [
                    "No, days are fixed.",
                    "Only senior staff can choose.",
                    "Yes, with manager approval."
                  ],
                  "answer": 2
                }
              ]
            }
          ]
        }
      }
    },
    {
      "set": 2,
      "title": "ชุดที่ 2 · Travel & Hotels",
      "listening": {
        "part1": [
          {
            "scene": "เคาน์เตอร์โรงแรม ผู้หญิงคนหนึ่งยืนอยู่หน้าเคาน์เตอร์ มีกระเป๋าเดินทางวางอยู่ข้างเท้า พนักงานอีกฝั่งกำลังยื่นเอกสารให้",
            "choices": [
              "A woman is sitting in the lobby.",
              "A woman is carrying a suitcase.",
              "A woman is standing at a counter.",
              "The luggage is being weighed."
            ],
            "answer": 2,
            "why": "กระเป๋าวางอยู่กับพื้น ไม่ได้ถูกถือ จึงไม่ใช่ carrying และ being weighed ต้องมีเครื่องชั่งกับคนกำลังชั่ง",
            "art": "hotel_checkin"
          },
          {
            "scene": "ทางเดินขึ้นเครื่องบิน ผู้โดยสารหลายคนเดินเรียงแถวถือกระเป๋าถือ มุ่งไปทางประตูเครื่อง",
            "choices": [
              "Passengers are seated on a bus.",
              "The plane is being refueled.",
              "Passengers are unloading luggage.",
              "Passengers are walking in a line."
            ],
            "answer": 3,
            "why": "เดินเรียงแถวคือสิ่งที่เห็น ส่วน being refueled ไม่มีรถเติมน้ำมันในภาพ และไม่มีใครนั่ง",
            "art": "plane_boarding"
          },
          {
            "scene": "กลุ่มนักท่องเที่ยวยืนล้อมรอบผู้ชายคนหนึ่งที่กางแผนที่ไว้ในมือ นิ้วของเขาแตะอยู่บนแผนที่ ทุกคนก้มมอง",
            "choices": [
              "The tourists are taking photographs.",
              "A man is folding a newspaper.",
              "A man is holding a map.",
              "Tickets are being sold."
            ],
            "answer": 2,
            "why": "map กับ newspaper เป็นของกระดาษเหมือนกันจึงเป็นตัวลวงที่ดี แต่ในภาพเป็นแผนที่ และไม่มีใครถ่ายรูปหรือขายตั๋ว",
            "art": "tour_map"
          },
          {
            "scene": "พนักงานยกกระเป๋าวางกระเป๋าเดินทางใบใหญ่ขึ้นบนรถเข็น มีกระเป๋าอีกสองใบวางอยู่บนรถเข็นแล้ว",
            "choices": [
              "A man is pushing an empty cart.",
              "Luggage is being placed on a cart.",
              "The suitcases are being opened.",
              "A man is repairing a wheel."
            ],
            "answer": 1,
            "why": "รถเข็นไม่ว่าง มีกระเป๋าอยู่แล้วสองใบ และไม่มีใครเปิดกระเป๋าหรือซ่อมล้อ",
            "art": "porter_cart"
          },
          {
            "scene": "โต๊ะกลางแจ้งหน้าร้านอาหาร มีคนนั่งอยู่สี่คน บนโต๊ะมีจานอาหารและแก้วน้ำ มีร่มกางอยู่เหนือโต๊ะ",
            "choices": [
              "The dishes are being cleared.",
              "People are seated at an outdoor table.",
              "People are setting up an umbrella.",
              "People are waiting in line to order."
            ],
            "answer": 1,
            "why": "ร่มกางอยู่แล้ว ไม่มีใครกำลังกาง และจานยังอยู่บนโต๊ะ ไม่มีใครเก็บ",
            "art": "cafe_outdoor"
          },
          {
            "scene": "ในห้องนักบิน ชายคนหนึ่งสวมหูฟังนั่งอยู่หน้าแผงควบคุม มือข้างหนึ่งจับคันบังคับ ปากอยู่ใกล้ไมโครโฟน",
            "choices": [
              "A man is wearing a headset.",
              "A man is removing his headset.",
              "A man is reading a magazine.",
              "The controls are being installed."
            ],
            "answer": 0,
            "why": "wearing คือสวมอยู่แล้ว ต่างจาก removing ที่กำลังถอด ข้อสอบชอบออกคู่นี้มาก และไม่มีใครติดตั้งอุปกรณ์ในภาพ",
            "art": "cockpit_headset"
          }
        ],
        "part2": [
          {
            "q": "What time does the shuttle leave for the airport?",
            "choices": [
              "Yes, it's free.",
              "From the lobby.",
              "At half past six."
            ],
            "answer": 2
          },
          {
            "q": "Where can I find a taxi?",
            "choices": [
              "Just outside the main entrance.",
              "In twenty minutes.",
              "It was expensive."
            ],
            "answer": 0
          },
          {
            "q": "Has the flight been delayed?",
            "choices": [
              "Yes, by about an hour.",
              "At gate ten.",
              "A window seat, please."
            ],
            "answer": 0
          },
          {
            "q": "Would you prefer a room with a sea view?",
            "choices": [
              "On the fifth floor.",
              "For three nights.",
              "Yes, if it's available."
            ],
            "answer": 2
          },
          {
            "q": "Why are you visiting the city?",
            "choices": [
              "For a business conference.",
              "By train.",
              "Last weekend."
            ],
            "answer": 0
          },
          {
            "q": "How would you like to pay?",
            "choices": [
              "At the front desk.",
              "By credit card, please.",
              "It's room 210."
            ],
            "answer": 1
          },
          {
            "q": "Is breakfast included in the room rate?",
            "choices": [
              "Yes, it is.",
              "At seven o'clock.",
              "In the lobby."
            ],
            "answer": 0
          },
          {
            "q": "Where should I check my luggage?",
            "choices": [
              "Two bags.",
              "This afternoon.",
              "At the counter over there."
            ],
            "answer": 2
          },
          {
            "q": "When does the ferry depart?",
            "choices": [
              "It's a short trip.",
              "From pier six.",
              "At noon."
            ],
            "answer": 2
          },
          {
            "q": "Could you recommend a good restaurant nearby?",
            "choices": [
              "Around eight o'clock.",
              "Sure, there's one across the street.",
              "It's very popular."
            ],
            "answer": 1
          },
          {
            "q": "How long is the layover in Dubai?",
            "choices": [
              "About two hours.",
              "Gate twenty-two.",
              "Yes, it's short."
            ],
            "answer": 0
          },
          {
            "q": "Do you have any rooms available for tonight?",
            "choices": [
              "Check-in is at three.",
              "It's fully booked.",
              "Yes, one double room."
            ],
            "answer": 2
          },
          {
            "q": "Why was our connecting flight cancelled?",
            "choices": [
              "Two hours late.",
              "At gate five.",
              "Due to a mechanical issue."
            ],
            "answer": 2
          },
          {
            "q": "Which terminal does the flight depart from?",
            "choices": [
              "In an hour.",
              "With one bag.",
              "Terminal two."
            ],
            "answer": 2
          },
          {
            "q": "Should we rent a car or take the train?",
            "choices": [
              "It's expensive either way.",
              "I'd prefer the train.",
              "About three hours."
            ],
            "answer": 1
          },
          {
            "q": "Is the hotel pool open all day?",
            "choices": [
              "On the second floor.",
              "It's heated.",
              "Yes, from six to ten."
            ],
            "answer": 2
          },
          {
            "q": "How much is the taxi fare to downtown?",
            "choices": [
              "About twenty dollars.",
              "Cash only.",
              "Ten minutes away."
            ],
            "answer": 0
          },
          {
            "q": "Did you confirm the hotel reservation?",
            "choices": [
              "It's non-refundable.",
              "Yes, this morning.",
              "For two nights."
            ],
            "answer": 1
          },
          {
            "q": "What's the best way to get to the conference center?",
            "choices": [
              "It opens at nine.",
              "Near the airport.",
              "Take the free shuttle."
            ],
            "answer": 2
          },
          {
            "q": "Are pets allowed in the rooms?",
            "choices": [
              "In a carrier.",
              "No, unfortunately not.",
              "Only on weekends."
            ],
            "answer": 1
          },
          {
            "q": "When should we check out?",
            "choices": [
              "This evening.",
              "By eleven in the morning.",
              "Whenever is convenient."
            ],
            "answer": 1
          },
          {
            "q": "Could I get an extra pillow?",
            "choices": [
              "It's a queen room.",
              "There are two beds.",
              "Of course, right away."
            ],
            "answer": 2
          },
          {
            "q": "How was the flight?",
            "choices": [
              "It was smooth and on time.",
              "About six hours.",
              "Economy class."
            ],
            "answer": 0
          },
          {
            "q": "Is there Wi-Fi available in the rooms?",
            "choices": [
              "In the lobby only.",
              "Yes, it's free for guests.",
              "It's very fast."
            ],
            "answer": 1
          },
          {
            "q": "Where do I collect my rental car?",
            "choices": [
              "At the counter near baggage claim.",
              "With a valid license.",
              "Tomorrow morning."
            ],
            "answer": 0
          }
        ],
        "part3": [
          {
            "lines": [
              "W: Good evening, I have a reservation under Martinez.",
              "M: Let me check... yes, a single room for three nights.",
              "W: That's right. Could I also get a late checkout on my last day?",
              "M: I'll note that, checkout will be at two instead of eleven."
            ],
            "questions": [
              {
                "q": "What is the woman doing?",
                "choices": [
                  "Booking a flight",
                  "Checking into a hotel",
                  "Renting a car"
                ],
                "answer": 1
              },
              {
                "q": "How many nights will she stay?",
                "choices": [
                  "Two",
                  "Five",
                  "Three"
                ],
                "answer": 2
              },
              {
                "q": "What does the man agree to?",
                "choices": [
                  "A late checkout",
                  "A discount",
                  "A room upgrade"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "M: Excuse me, is flight two-two-zero still on time?",
              "W: I'm sorry, it's been delayed by forty minutes.",
              "M: Do you know the reason?",
              "W: There's a delay due to weather at the departure airport."
            ],
            "questions": [
              {
                "q": "What does the man ask about?",
                "choices": [
                  "A gate change",
                  "A lost bag",
                  "His flight status"
                ],
                "answer": 2
              },
              {
                "q": "How long is the delay?",
                "choices": [
                  "Forty minutes",
                  "Two hours",
                  "Ten minutes"
                ],
                "answer": 0
              },
              {
                "q": "Why is the flight delayed?",
                "choices": [
                  "A mechanical issue",
                  "A staffing shortage",
                  "Weather at the departure airport"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "W: I'd like to pick up the car I reserved online.",
              "M: May I see your reservation confirmation and license?",
              "W: Here you go. I also asked for GPS.",
              "M: I see that, it's already installed in the vehicle."
            ],
            "questions": [
              {
                "q": "What is the woman doing?",
                "choices": [
                  "Returning a car",
                  "Booking a hotel",
                  "Picking up a rental car"
                ],
                "answer": 2
              },
              {
                "q": "What does the man ask for?",
                "choices": [
                  "Her passport",
                  "Her confirmation and license",
                  "Payment in cash"
                ],
                "answer": 1
              },
              {
                "q": "What did the woman request?",
                "choices": [
                  "Insurance",
                  "A larger car",
                  "GPS"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: I'd like to book a table for four this Friday evening.",
              "W: We have availability at seven or eight thirty.",
              "M: Seven works better for us.",
              "W: Great, I'll reserve that table under your name."
            ],
            "questions": [
              {
                "q": "What is the man doing?",
                "choices": [
                  "Cancelling an order",
                  "Complaining about service",
                  "Making a restaurant reservation"
                ],
                "answer": 2
              },
              {
                "q": "How many people is the reservation for?",
                "choices": [
                  "Four",
                  "Six",
                  "Two"
                ],
                "answer": 0
              },
              {
                "q": "What time will they arrive?",
                "choices": [
                  "Eight thirty",
                  "Nine",
                  "Seven"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "W: What time does the next guided tour start?",
              "M: There's one starting in fifteen minutes.",
              "W: Perfect, where do we meet the guide?",
              "M: Right here at the entrance desk."
            ],
            "questions": [
              {
                "q": "What is the woman asking about?",
                "choices": [
                  "A guided tour",
                  "Museum hours",
                  "Ticket prices"
                ],
                "answer": 0
              },
              {
                "q": "When does the next tour start?",
                "choices": [
                  "In fifteen minutes",
                  "Tomorrow",
                  "In one hour"
                ],
                "answer": 0
              },
              {
                "q": "Where will they meet the guide?",
                "choices": [
                  "At the entrance desk",
                  "In the gift shop",
                  "On the second floor"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "M: I can't find my suitcase at the baggage claim.",
              "W: I'm sorry, let me check the system for you.",
              "M: It's a black bag with a red tag.",
              "W: I see it was misrouted, it will arrive tomorrow morning."
            ],
            "questions": [
              {
                "q": "What is the man's problem?",
                "choices": [
                  "He lost his passport",
                  "He can't find his suitcase",
                  "His flight was cancelled"
                ],
                "answer": 1
              },
              {
                "q": "How does the man describe his bag?",
                "choices": [
                  "Blue with wheels",
                  "Large and green",
                  "Black with a red tag"
                ],
                "answer": 2
              },
              {
                "q": "When will the bag arrive?",
                "choices": [
                  "In three days",
                  "This evening",
                  "Tomorrow morning"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "W: Two tickets to Kyoto, please, for the ten o'clock train.",
              "M: I'm sorry, that train is fully booked.",
              "W: What about the next available one?",
              "M: There's one at eleven fifteen with seats available."
            ],
            "questions": [
              {
                "q": "What does the woman want to buy?",
                "choices": [
                  "Plane tickets",
                  "Bus tickets",
                  "Train tickets"
                ],
                "answer": 2
              },
              {
                "q": "What is the problem with the ten o'clock train?",
                "choices": [
                  "It is fully booked",
                  "It is too expensive",
                  "It was cancelled"
                ],
                "answer": 0
              },
              {
                "q": "What time is the next available train?",
                "choices": [
                  "Noon",
                  "Ten thirty",
                  "Eleven fifteen"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: The air conditioning in my room isn't working.",
              "W: I'm very sorry, I'll send someone up right away.",
              "M: Also, could I get extra towels?",
              "W: Of course, I'll have both sent to your room."
            ],
            "questions": [
              {
                "q": "What is the man's complaint?",
                "choices": [
                  "The Wi-Fi is slow",
                  "The room is too small",
                  "The air conditioning isn't working"
                ],
                "answer": 2
              },
              {
                "q": "What will the woman do?",
                "choices": [
                  "Move him to another room",
                  "Give him a refund",
                  "Send someone up right away"
                ],
                "answer": 2
              },
              {
                "q": "What does the man also request?",
                "choices": [
                  "Extra towels",
                  "Room service",
                  "A late checkout"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: I'm interested in the full-day city tour package.",
              "M: It includes lunch and admission to three attractions.",
              "W: Does it include hotel pickup?",
              "M: Yes, pickup is available from most downtown hotels."
            ],
            "questions": [
              {
                "q": "What is the woman asking about?",
                "choices": [
                  "A city tour package",
                  "A shopping trip",
                  "A cooking class"
                ],
                "answer": 0
              },
              {
                "q": "What is included in the package?",
                "choices": [
                  "Lunch and three attractions",
                  "Only transportation",
                  "A guidebook"
                ],
                "answer": 0
              },
              {
                "q": "What does the man confirm?",
                "choices": [
                  "The tour is sold out",
                  "Hotel pickup is available",
                  "The price includes drinks"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: Is it possible to upgrade to business class?",
              "W: Yes, there's one seat available for an additional fee.",
              "M: How much would that cost?",
              "W: It would be an extra two hundred dollars."
            ],
            "questions": [
              {
                "q": "What does the man want to do?",
                "choices": [
                  "Upgrade his seat",
                  "Cancel his flight",
                  "Change his destination"
                ],
                "answer": 0
              },
              {
                "q": "Is an upgrade available?",
                "choices": [
                  "No, it's full",
                  "Only on the return flight",
                  "Yes, one seat"
                ],
                "answer": 2
              },
              {
                "q": "How much does the upgrade cost?",
                "choices": [
                  "Two hundred dollars",
                  "It's free",
                  "Fifty dollars"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: I'd like to exchange some dollars for local currency.",
              "M: Certainly, how much would you like to exchange?",
              "W: About three hundred dollars.",
              "M: Our current rate is posted on the board there."
            ],
            "questions": [
              {
                "q": "What does the woman want to do?",
                "choices": [
                  "Open a bank account",
                  "Exchange currency",
                  "Withdraw cash"
                ],
                "answer": 1
              },
              {
                "q": "How much does she want to exchange?",
                "choices": [
                  "Three hundred dollars",
                  "One hundred dollars",
                  "Five hundred dollars"
                ],
                "answer": 0
              },
              {
                "q": "Where can she find the exchange rate?",
                "choices": [
                  "In a brochure",
                  "On her phone",
                  "On the board"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: I'd like to book a massage for tomorrow afternoon.",
              "W: We have an opening at two o'clock.",
              "M: That works. How long is the session?",
              "W: It's a sixty-minute session."
            ],
            "questions": [
              {
                "q": "What is the man booking?",
                "choices": [
                  "A haircut",
                  "A dinner reservation",
                  "A massage"
                ],
                "answer": 2
              },
              {
                "q": "When is the appointment?",
                "choices": [
                  "Tomorrow at two o'clock",
                  "Today at two o'clock",
                  "Tomorrow morning"
                ],
                "answer": 0
              },
              {
                "q": "How long does the session last?",
                "choices": [
                  "Two hours",
                  "Thirty minutes",
                  "Sixty minutes"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "W: Is the airport lounge included with my ticket?",
              "M: Let me check, yes, business class includes lounge access.",
              "W: Great, where is the lounge located?",
              "M: It's near gate thirty, past security."
            ],
            "questions": [
              {
                "q": "What does the woman ask about?",
                "choices": [
                  "Seat selection",
                  "Airport lounge access",
                  "Baggage allowance"
                ],
                "answer": 1
              },
              {
                "q": "What class of ticket does she have?",
                "choices": [
                  "First class",
                  "Business class",
                  "Economy class"
                ],
                "answer": 1
              },
              {
                "q": "Where is the lounge located?",
                "choices": [
                  "Near gate thirty",
                  "At the check-in area",
                  "Outside security"
                ],
                "answer": 0
              }
            ]
          }
        ],
        "part4": [
          {
            "script": "Attention passengers on flight seven-oh-two to Paris. Boarding will begin in ten minutes at gate twenty-three. Passengers requiring extra time or traveling with young children may board first, followed by our premium members.",
            "questions": [
              {
                "q": "What is being announced?",
                "choices": [
                  "Boarding for a flight",
                  "A flight cancellation",
                  "A gate change"
                ],
                "answer": 0
              },
              {
                "q": "Which gate will be used?",
                "choices": [
                  "Gate two",
                  "Gate twenty-three",
                  "Gate thirty"
                ],
                "answer": 1
              },
              {
                "q": "Who may board first?",
                "choices": [
                  "All passengers at once",
                  "Passengers needing extra time or with young children",
                  "Only premium members"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Welcome to Lakeside Resort. Your room key also serves as your pool and gym access card. Breakfast is served daily from six thirty to ten in the main dining room. If you need anything during your stay, please dial zero from your room phone.",
            "questions": [
              {
                "q": "What can the room key also be used for?",
                "choices": [
                  "Pool and gym access",
                  "Parking access",
                  "Room service orders"
                ],
                "answer": 0
              },
              {
                "q": "When is breakfast served?",
                "choices": [
                  "Six thirty to ten",
                  "Seven to nine",
                  "All day"
                ],
                "answer": 0
              },
              {
                "q": "How can guests get help?",
                "choices": [
                  "Dial zero from the room phone",
                  "Visit the front desk in person",
                  "Use the hotel app"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Good morning, everyone, and welcome aboard. Today's tour includes stops at the old town square, the harbor, and the hilltop castle. We'll have a lunch break at the harbor around noon. Please remain seated while the bus is moving.",
            "questions": [
              {
                "q": "What is the speaker describing?",
                "choices": [
                  "A flight schedule",
                  "A city tour itinerary",
                  "A hotel checklist"
                ],
                "answer": 1
              },
              {
                "q": "Where will the lunch break be?",
                "choices": [
                  "At the town square",
                  "At the castle",
                  "At the harbor"
                ],
                "answer": 2
              },
              {
                "q": "What are passengers reminded to do?",
                "choices": [
                  "Exchange currency",
                  "Take photos",
                  "Remain seated while moving"
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "We apologize, but the ten fifteen train to Kyoto has been delayed by twenty minutes due to signal issues. We appreciate your patience and will provide further updates as they become available.",
            "questions": [
              {
                "q": "What is the announcement about?",
                "choices": [
                  "A ticket price change",
                  "A train delay",
                  "A platform change"
                ],
                "answer": 1
              },
              {
                "q": "How long is the delay?",
                "choices": [
                  "Twenty minutes",
                  "Ten minutes",
                  "One hour"
                ],
                "answer": 0
              },
              {
                "q": "Why is the train delayed?",
                "choices": [
                  "Signal issues",
                  "Bad weather",
                  "A staff shortage"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Thank you for choosing Sunshine Car Rentals. Please return the vehicle with a full tank of fuel to avoid an additional charge. Return the keys at the drop-off counter, and a staff member will inspect the vehicle before you leave.",
            "questions": [
              {
                "q": "What should customers do before returning the car?",
                "choices": [
                  "Fill the tank with fuel",
                  "Wash the car",
                  "Remove the license plate"
                ],
                "answer": 0
              },
              {
                "q": "Why should the tank be full?",
                "choices": [
                  "It is required by law",
                  "To avoid an additional charge",
                  "To pass inspection faster"
                ],
                "answer": 1
              },
              {
                "q": "What happens at the drop-off counter?",
                "choices": [
                  "Customers pay in full",
                  "A staff member inspects the vehicle",
                  "Customers receive a receipt only"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Good afternoon, passengers. We will be arriving at our next port of call in approximately one hour. Please remember to bring your ship identification card whenever you go ashore, as it is required to reboard the vessel.",
            "questions": [
              {
                "q": "When will the ship arrive at the next port?",
                "choices": [
                  "Tomorrow",
                  "In about one hour",
                  "In thirty minutes"
                ],
                "answer": 1
              },
              {
                "q": "What must passengers bring ashore?",
                "choices": [
                  "Their ship identification card",
                  "Cash only",
                  "A passport only"
                ],
                "answer": 0
              },
              {
                "q": "Why is the ID card needed?",
                "choices": [
                  "To enter the dining hall",
                  "To receive a discount",
                  "To reboard the vessel"
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "Welcome to the Grand Hotel Conference Center. Registration for the summit is located in the east lobby. Name badges must be worn at all times inside the conference areas. Coffee and refreshments are available throughout the day in the main hallway.",
            "questions": [
              {
                "q": "Where is registration located?",
                "choices": [
                  "The west entrance",
                  "The east lobby",
                  "The main ballroom"
                ],
                "answer": 1
              },
              {
                "q": "What must attendees wear?",
                "choices": [
                  "Name badges at all times",
                  "Colored wristbands",
                  "Formal business attire"
                ],
                "answer": 0
              },
              {
                "q": "Where can attendees find refreshments?",
                "choices": [
                  "Only in the cafeteria",
                  "In the main hallway",
                  "In the parking lot"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Please note that each passenger is allowed one carry-on bag and one personal item free of charge. Checked baggage fees apply for all additional bags. Oversized items must be checked at the counter, not brought to the gate.",
            "questions": [
              {
                "q": "What is included free of charge?",
                "choices": [
                  "Two checked bags",
                  "One carry-on and one personal item",
                  "Unlimited carry-on bags"
                ],
                "answer": 1
              },
              {
                "q": "What applies to additional bags?",
                "choices": [
                  "A discount",
                  "Checked baggage fees",
                  "No extra charge"
                ],
                "answer": 1
              },
              {
                "q": "Where must oversized items be checked?",
                "choices": [
                  "At the counter",
                  "On the plane",
                  "At the gate"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Welcome to today's walking tour of the historic district. The tour will last about two hours and cover roughly three kilometers. Please wear comfortable shoes, and let me know if you need a break at any point along the way.",
            "questions": [
              {
                "q": "How long will the tour last?",
                "choices": [
                  "About two hours",
                  "Thirty minutes",
                  "All day"
                ],
                "answer": 0
              },
              {
                "q": "What are participants advised to wear?",
                "choices": [
                  "Rain jackets",
                  "Comfortable shoes",
                  "Formal clothing"
                ],
                "answer": 1
              },
              {
                "q": "What can participants request during the tour?",
                "choices": [
                  "A break",
                  "A map",
                  "A refund"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "This is a message regarding item number four-five-one-two. We have located a black umbrella matching your description at our lost and found office. Please visit the office on the ground floor with a valid ID to collect it.",
            "questions": [
              {
                "q": "What item was found?",
                "choices": [
                  "A black umbrella",
                  "A passport",
                  "A laptop bag"
                ],
                "answer": 0
              },
              {
                "q": "Where is the lost and found office?",
                "choices": [
                  "Near gate ten",
                  "On the ground floor",
                  "On the third floor"
                ],
                "answer": 1
              },
              {
                "q": "What must the listener bring to collect the item?",
                "choices": [
                  "A boarding pass",
                  "A receipt",
                  "A valid ID"
                ],
                "answer": 2
              }
            ]
          }
        ]
      },
      "reading": {
        "part5": [
          {
            "sentence": "The hotel is located ______ walking distance of the beach.",
            "choices": [
              "within",
              "between",
              "onto",
              "among"
            ],
            "answer": 0
          },
          {
            "sentence": "Guests are ______ to check out before noon.",
            "choices": [
              "require",
              "requirement",
              "requiring",
              "required"
            ],
            "answer": 3
          },
          {
            "sentence": "We apologize for the ______ caused by the delay.",
            "choices": [
              "inconvenienced",
              "inconvenient",
              "inconveniently",
              "inconvenience"
            ],
            "answer": 3
          },
          {
            "sentence": "The tour guide spoke ______ so that everyone could understand.",
            "choices": [
              "clearer",
              "clear",
              "clearly",
              "clarity"
            ],
            "answer": 2
          },
          {
            "sentence": "Please make sure your luggage is ______ labeled.",
            "choices": [
              "property",
              "proper",
              "propriety",
              "properly"
            ],
            "answer": 3
          },
          {
            "sentence": "The plane ______ off two hours late because of the storm.",
            "choices": [
              "take",
              "taken",
              "took",
              "taking"
            ],
            "answer": 2
          },
          {
            "sentence": "You can request a refund ______ you cancel within 24 hours.",
            "choices": [
              "although",
              "despite",
              "unless",
              "if"
            ],
            "answer": 3
          },
          {
            "sentence": "All passengers ______ their seatbelts during takeoff and landing.",
            "choices": [
              "to wear",
              "must wear",
              "worn",
              "wearing"
            ],
            "answer": 1
          },
          {
            "sentence": "The airline offers a ______ range of destinations.",
            "choices": [
              "wide",
              "widen",
              "widely",
              "width"
            ],
            "answer": 0
          },
          {
            "sentence": "Passengers ______ connecting flights should proceed to the transfer desk.",
            "choices": [
              "for",
              "of",
              "with",
              "among"
            ],
            "answer": 2
          },
          {
            "sentence": "The resort ______ over five hundred rooms.",
            "choices": [
              "has",
              "have",
              "having",
              "had"
            ],
            "answer": 0
          },
          {
            "sentence": "Guests can enjoy the pool ______ seven in the morning until ten at night.",
            "choices": [
              "since",
              "from",
              "at",
              "by"
            ],
            "answer": 1
          },
          {
            "sentence": "The flight attendant ______ safety instructions before takeoff.",
            "choices": [
              "explain",
              "to explain",
              "explaining",
              "explained"
            ],
            "answer": 3
          },
          {
            "sentence": "We recommend arriving ______ two hours before international flights.",
            "choices": [
              "less than",
              "at most",
              "at least",
              "no more than"
            ],
            "answer": 2
          },
          {
            "sentence": "The itinerary was ______ changed due to weather conditions.",
            "choices": [
              "suddenly",
              "sudden",
              "suddenness",
              "suddens"
            ],
            "answer": 0
          },
          {
            "sentence": "Travelers ______ valid passports may not board the flight.",
            "choices": [
              "of",
              "for",
              "with",
              "without"
            ],
            "answer": 3
          },
          {
            "sentence": "The hotel staff were extremely ______ during our stay.",
            "choices": [
              "help",
              "helper",
              "helpful",
              "helps"
            ],
            "answer": 2
          },
          {
            "sentence": "Passengers should keep their boarding pass ______ at all times.",
            "choices": [
              "accessible",
              "accessed",
              "accessibly",
              "accessibility"
            ],
            "answer": 0
          },
          {
            "sentence": "The cruise ship ______ at the next port tomorrow morning.",
            "choices": [
              "arrives",
              "arriving",
              "will arrive",
              "arrived"
            ],
            "answer": 2
          },
          {
            "sentence": "Due to overbooking, some passengers were asked to ______ their seats voluntarily.",
            "choices": [
              "give away",
              "give up",
              "give out",
              "give in"
            ],
            "answer": 1
          },
          {
            "sentence": "The train station is ______ accessible by taxi or bus.",
            "choices": [
              "easy",
              "ease",
              "eased",
              "easily"
            ],
            "answer": 3
          },
          {
            "sentence": "Visitors are advised to carry a copy of their ______ at all times.",
            "choices": [
              "identification",
              "identified",
              "identify",
              "identifying"
            ],
            "answer": 0
          },
          {
            "sentence": "The tour operator offers a full refund ______ cancellations made in advance.",
            "choices": [
              "in",
              "at",
              "of",
              "for"
            ],
            "answer": 3
          },
          {
            "sentence": "This ticket is valid ______ thirty days from the date of purchase.",
            "choices": [
              "by",
              "since",
              "for",
              "during"
            ],
            "answer": 2
          },
          {
            "sentence": "The airline's customer service team responded ______ to our complaint.",
            "choices": [
              "prompted",
              "promptly",
              "promptness",
              "prompt"
            ],
            "answer": 1
          },
          {
            "sentence": "Passengers are asked to remain ______ during turbulence.",
            "choices": [
              "seating",
              "seated",
              "seat",
              "seats"
            ],
            "answer": 1
          },
          {
            "sentence": "The hotel's cancellation policy ______ from one property to another.",
            "choices": [
              "varies",
              "varying",
              "vary",
              "varied"
            ],
            "answer": 0
          },
          {
            "sentence": "We were ______ impressed by the quality of the service.",
            "choices": [
              "genuineness",
              "genuine",
              "genuinize",
              "genuinely"
            ],
            "answer": 3
          },
          {
            "sentence": "The airport shuttle runs ______ every fifteen minutes.",
            "choices": [
              "approximates",
              "approximately",
              "approximate",
              "approximation"
            ],
            "answer": 1
          },
          {
            "sentence": "Guests must present a valid ID ______ checking in.",
            "choices": [
              "although",
              "despite",
              "when",
              "unless"
            ],
            "answer": 2
          }
        ],
        "part6": [
          {
            "passage": "Dear Guest, thank you for choosing Sunrise Hotel. To help us serve you better, we invite you to ___1___ a short survey about your stay. Your feedback will help us ___2___ our services. As a thank-you, guests who complete the survey will receive a discount on their next booking. The survey should only take a few ___3___ to complete, and all responses are kept strictly ___4___.",
            "blanks": [
              {
                "choices": [
                  "completes",
                  "completely",
                  "completion",
                  "complete"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "improves",
                  "improve",
                  "improving",
                  "improvement"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "minutes",
                  "minute",
                  "minuted",
                  "minutely"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "confide",
                  "confidential",
                  "confidence",
                  "confidentially"
                ],
                "answer": 1
              }
            ]
          },
          {
            "passage": "Dear Traveler, thank you for booking with SkyLine Airlines. Your flight confirmation number is SL4521. Please ___1___ that you arrive at the airport at least two hours before departure for international flights. Online check-in ___2___ 24 hours before your flight and closes one hour prior to departure. If you need to make any ___3___ to your booking, please contact our support team. We wish you a ___4___ journey.",
            "blanks": [
              {
                "choices": [
                  "ensuring",
                  "ensured",
                  "ensure",
                  "ensures"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "open",
                  "opens",
                  "opening",
                  "opened"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "changing",
                  "change",
                  "changed",
                  "changes"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "please",
                  "pleasantly",
                  "pleasant",
                  "pleasing"
                ],
                "answer": 2
              }
            ]
          },
          {
            "passage": "Dear Customer, we are writing to ___1___ you that your city tour scheduled for Saturday has been moved to Sunday due to a public holiday closure. All other details of your ___2___ remain the same, including pickup time and location. We apologize for any ___3___ this may cause and hope you still ___4___ the tour.",
            "blanks": [
              {
                "choices": [
                  "informing",
                  "informed",
                  "informs",
                  "inform"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "booking",
                  "booked",
                  "books",
                  "book"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "inconveniently",
                  "inconvenienced",
                  "inconvenience",
                  "inconvenient"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "enjoying",
                  "enjoy",
                  "enjoyed",
                  "enjoys"
                ],
                "answer": 1
              }
            ]
          },
          {
            "passage": "Thank you for choosing Sunshine Car Rentals. All vehicles must be ___1___ with a full tank of fuel. A young driver surcharge may ___2___ to renters under the age of 25. Additional drivers must be ___3___ at the time of pickup. For roadside assistance, please call the number ___4___ on your rental agreement.",
            "blanks": [
              {
                "choices": [
                  "returning",
                  "returned",
                  "returns",
                  "return"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "applied",
                  "applying",
                  "apply",
                  "applies"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "registers",
                  "registered",
                  "registering",
                  "register"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "listed",
                  "list",
                  "listing",
                  "lists"
                ],
                "answer": 0
              }
            ]
          }
        ],
        "part7": {
          "single": [
            {
              "passage": "Notice to All Guests: Our rooftop pool will be closed for cleaning this Wednesday from eight in the morning until noon. The fitness center and spa will remain open as usual during this time. We apologize for any inconvenience and appreciate your understanding.",
              "questions": [
                {
                  "q": "What is closed on Wednesday?",
                  "choices": [
                    "The rooftop pool",
                    "The fitness center",
                    "The spa"
                  ],
                  "answer": 0
                },
                {
                  "q": "What time will it reopen?",
                  "choices": [
                    "Six in the evening",
                    "Noon",
                    "Eight in the morning"
                  ],
                  "answer": 1
                },
                {
                  "q": "Why is the pool closed?",
                  "choices": [
                    "For repairs",
                    "Due to weather",
                    "For cleaning"
                  ],
                  "answer": 2
                },
                {
                  "q": "What remains open during this time?",
                  "choices": [
                    "Nothing",
                    "The fitness center and spa",
                    "Only the spa"
                  ],
                  "answer": 1
                },
                {
                  "q": "How long will the pool be closed?",
                  "choices": [
                    "Four hours",
                    "One hour",
                    "All day"
                  ],
                  "answer": 0
                },
                {
                  "q": "What does the hotel ask of guests?",
                  "choices": [
                    "A written complaint",
                    "A survey",
                    "Their understanding"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passage": "Dear Passenger, we are writing to inform you of a schedule change to your upcoming flight. Flight SL220, originally departing at 9:00 a.m., will now depart at 11:30 a.m. on the same day. All other flight details remain unchanged. We apologize for any inconvenience this may cause and thank you for flying with SkyLine Airlines.",
              "questions": [
                {
                  "q": "What is the purpose of this email?",
                  "choices": [
                    "To offer a refund",
                    "To confirm a cancellation",
                    "To inform about a schedule change"
                  ],
                  "answer": 2
                },
                {
                  "q": "What was the original departure time?",
                  "choices": [
                    "Noon",
                    "11:30 a.m.",
                    "9:00 a.m."
                  ],
                  "answer": 2
                },
                {
                  "q": "What is the new departure time?",
                  "choices": [
                    "1:00 p.m.",
                    "9:00 a.m.",
                    "11:30 a.m."
                  ],
                  "answer": 2
                },
                {
                  "q": "Does the date of the flight change?",
                  "choices": [
                    "Yes, it moves one day later.",
                    "No, it remains the same day.",
                    "Yes, it moves one day earlier."
                  ],
                  "answer": 1
                },
                {
                  "q": "What else changed about the flight?",
                  "choices": [
                    "Nothing else changed.",
                    "The destination changed.",
                    "The gate number changed."
                  ],
                  "answer": 0
                },
                {
                  "q": "What airline sent this email?",
                  "choices": [
                    "Global Air",
                    "Pacific Airways",
                    "SkyLine Airlines"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passage": "Five Tips for Packing Light. Traveling with just a carry-on bag can make your trip much easier. First, choose clothing that can be mixed and matched. Second, pack items that serve multiple purposes, such as a scarf that can also be used as a blanket. Third, roll your clothes instead of folding them to save space. Fourth, limit yourself to one pair of extra shoes. Finally, always leave a little extra room in your bag for souvenirs.",
              "questions": [
                {
                  "q": "What is this article about?",
                  "choices": [
                    "Tips for booking flights",
                    "Tips for packing light",
                    "Tips for choosing hotels"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is the first tip mentioned?",
                  "choices": [
                    "Buy a bigger suitcase",
                    "Choose clothing that can be mixed and matched",
                    "Pack heavy items first"
                  ],
                  "answer": 1
                },
                {
                  "q": "Why should items serve multiple purposes?",
                  "choices": [
                    "To save space and be efficient",
                    "To look more stylish",
                    "To avoid customs issues"
                  ],
                  "answer": 0
                },
                {
                  "q": "What method is suggested for packing clothes?",
                  "choices": [
                    "Using vacuum bags only",
                    "Folding instead of rolling",
                    "Rolling instead of folding"
                  ],
                  "answer": 2
                },
                {
                  "q": "How many pairs of extra shoes are recommended?",
                  "choices": [
                    "One",
                    "Three",
                    "None"
                  ],
                  "answer": 0
                },
                {
                  "q": "Why should travelers leave extra room in their bag?",
                  "choices": [
                    "For water bottles",
                    "For duty-free items only",
                    "For souvenirs"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passage": "Discover Paradise Bay Resort. Nestled along a private white-sand beach, Paradise Bay offers oceanfront villas, three restaurants, and a full-service spa. Guests can enjoy complimentary snorkeling equipment and daily yoga classes. Rates start at one hundred eighty dollars per night, and children under twelve stay free when sharing a room with a paying adult.",
              "questions": [
                {
                  "q": "What is being advertised?",
                  "choices": [
                    "An airline",
                    "A cruise line",
                    "A beach resort"
                  ],
                  "answer": 2
                },
                {
                  "q": "What type of accommodation is offered?",
                  "choices": [
                    "Mountain cabins",
                    "Oceanfront villas",
                    "City apartments"
                  ],
                  "answer": 1
                },
                {
                  "q": "What activity is offered daily?",
                  "choices": [
                    "Dance lessons",
                    "Yoga classes",
                    "Cooking classes"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is complimentary at the resort?",
                  "choices": [
                    "Snorkeling equipment",
                    "Airport transfers",
                    "Laundry service"
                  ],
                  "answer": 0
                },
                {
                  "q": "What are the starting rates?",
                  "choices": [
                    "Three hundred dollars per night",
                    "One hundred eighty dollars per night",
                    "Fifty dollars per night"
                  ],
                  "answer": 1
                },
                {
                  "q": "Under what condition do children stay free?",
                  "choices": [
                    "Only during off-season",
                    "Sharing a room with a paying adult",
                    "Only on weekdays"
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passage": "Passenger Notice: Due to track maintenance, the express service between Central Station and North Terminal will be temporarily replaced by a regular service, adding approximately fifteen minutes to journey times. This change will remain in effect from Monday to Friday of next week. We apologize for any inconvenience and thank you for your patience.",
              "questions": [
                {
                  "q": "Why is the express service being replaced?",
                  "choices": [
                    "A staff shortage",
                    "Low ridership",
                    "Track maintenance"
                  ],
                  "answer": 2
                },
                {
                  "q": "How much longer will journeys take?",
                  "choices": [
                    "One hour",
                    "About fifteen minutes",
                    "Thirty minutes"
                  ],
                  "answer": 1
                },
                {
                  "q": "Which days does this affect?",
                  "choices": [
                    "Monday to Friday",
                    "Every day",
                    "Weekends only"
                  ],
                  "answer": 0
                },
                {
                  "q": "What service will passengers use instead?",
                  "choices": [
                    "Regular service",
                    "A shuttle bus",
                    "No service at all"
                  ],
                  "answer": 0
                },
                {
                  "q": "What does the notice thank passengers for?",
                  "choices": [
                    "Their patience",
                    "Their loyalty",
                    "Their feedback"
                  ],
                  "answer": 0
                }
              ]
            }
          ],
          "double": [
            {
              "passages": [
                "Special Offer: Book three nights at Bayview Hotel and get the fourth night free. This offer is valid for stays between June 1 and August 31 and must be booked at least two weeks in advance. Not valid with any other promotion.",
                "Hello, I'm interested in the three-nights-get-one-free offer. I'd like to book a stay from July 10 to July 14, which would be four nights. Does this qualify for the promotion? Also, can I combine it with my loyalty member discount? Thank you, Priya Nair."
              ],
              "questions": [
                {
                  "q": "What is the hotel promotion?",
                  "choices": [
                    "Stay three nights, get the fourth free",
                    "Free breakfast for a week",
                    "Fifty percent off all rooms"
                  ],
                  "answer": 0
                },
                {
                  "q": "When is the offer valid?",
                  "choices": [
                    "July only",
                    "June 1 to August 31",
                    "All year round"
                  ],
                  "answer": 1
                },
                {
                  "q": "How far in advance must guests book?",
                  "choices": [
                    "One month",
                    "At least two weeks",
                    "No advance notice needed"
                  ],
                  "answer": 1
                },
                {
                  "q": "How many nights does Priya want to book?",
                  "choices": [
                    "Four nights",
                    "Five nights",
                    "Three nights"
                  ],
                  "answer": 0
                },
                {
                  "q": "What does Priya ask about combining?",
                  "choices": [
                    "A student discount",
                    "Her loyalty member discount",
                    "A group discount"
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passages": [
                "Itinerary: Flight SL118, Departing New York (JFK) 8:15 AM, Arriving London (LHR) 8:30 PM local time. Return Flight SL119, Departing London (LHR) 10:00 AM, Arriving New York (JFK) 1:15 PM local time. Seat: 14C. Class: Economy.",
                "Hello, I recently booked flight SL118/SL119 and would like to request an aisle seat instead of 14C, if possible. I would also like to know whether meals are included on both flights. Please let me know at your earliest convenience. Thank you, Marco Bellini."
              ],
              "questions": [
                {
                  "q": "What is the departure time of flight SL118?",
                  "choices": [
                    "8:15 AM",
                    "8:30 PM",
                    "10:00 AM"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is Marco's current seat number?",
                  "choices": [
                    "10A",
                    "14C",
                    "8:15"
                  ],
                  "answer": 1
                },
                {
                  "q": "What does Marco request instead?",
                  "choices": [
                    "A window seat",
                    "An aisle seat",
                    "A seat upgrade"
                  ],
                  "answer": 1
                },
                {
                  "q": "What does Marco ask about?",
                  "choices": [
                    "Baggage allowance",
                    "Whether meals are included",
                    "Flight duration"
                  ],
                  "answer": 1
                },
                {
                  "q": "What class is Marco's ticket?",
                  "choices": [
                    "Economy",
                    "Business",
                    "First class"
                  ],
                  "answer": 0
                }
              ]
            }
          ],
          "triple": [
            {
              "passages": [
                "Mountain Adventure Tours — Full-Day Hiking Package. Includes guided hiking, lunch, and transportation from your hotel. Price: sixty-five dollars per person. Minimum age: twelve. Tours run Tuesday, Thursday, and Saturday, departing at seven in the morning.",
                "Hi, I'm interested in booking the hiking tour for my family, including my ten-year-old daughter. Would she be able to join, or is there an age restriction? Also, is the sixty-five dollar price per person or per family? Thanks, Elena Ruiz.",
                "Hello Ms. Ruiz, thank you for your interest. Unfortunately, the minimum age for this tour is twelve, so your daughter would not be able to join this particular hike. However, we do offer a shorter, family-friendly nature walk suitable for all ages at forty dollars per person. The sixty-five dollar rate is per person for the full-day hike. Let us know if you'd like to book the family walk instead."
              ],
              "questions": [
                {
                  "q": "What is included in the hiking package?",
                  "choices": [
                    "Guided hiking, lunch, and transportation",
                    "Camping equipment",
                    "Hotel accommodation"
                  ],
                  "answer": 0
                },
                {
                  "q": "How much does the full-day hike cost?",
                  "choices": [
                    "Sixty-five dollars per person",
                    "Forty dollars per person",
                    "Free"
                  ],
                  "answer": 0
                },
                {
                  "q": "Why can't Elena's daughter join the hiking tour?",
                  "choices": [
                    "The tour is fully booked",
                    "She needs a guardian's signature",
                    "She is under the minimum age of twelve"
                  ],
                  "answer": 2
                },
                {
                  "q": "What alternative is suggested?",
                  "choices": [
                    "A shorter hiking route",
                    "A family-friendly nature walk",
                    "A private tour"
                  ],
                  "answer": 1
                },
                {
                  "q": "How much does the alternative cost?",
                  "choices": [
                    "Sixty-five dollars per person",
                    "Twenty dollars per person",
                    "Forty dollars per person"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passages": [
                "Baggage Policy: Economy passengers may check one bag up to 23kg free of charge. Additional bags cost 50 dollars each. Overweight bags (23-32kg) incur a 30 dollar surcharge. Bags over 32kg are not accepted.",
                "Hello, I'll be traveling with two suitcases, one weighing about 20kg and another around 25kg. Can you tell me what fees I should expect to pay? Thank you, Hassan Ahmed.",
                "Hello Mr. Ahmed, based on your bags, your first bag (20kg) is included free of charge. Your second bag will incur the additional bag fee of 50 dollars, plus a 30 dollar overweight surcharge since it exceeds 23kg, for a total of 80 dollars for the second bag."
              ],
              "questions": [
                {
                  "q": "How much can economy passengers check for free?",
                  "choices": [
                    "One bag up to 23kg",
                    "Unlimited weight",
                    "Two bags up to 20kg each"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the fee for an additional bag?",
                  "choices": [
                    "30 dollars",
                    "50 dollars",
                    "80 dollars"
                  ],
                  "answer": 1
                },
                {
                  "q": "How much does Hassan's first bag cost?",
                  "choices": [
                    "50 dollars",
                    "30 dollars",
                    "Nothing, it's free"
                  ],
                  "answer": 2
                },
                {
                  "q": "Why does the second bag have a surcharge?",
                  "choices": [
                    "It exceeds 23kg",
                    "It is the wrong size",
                    "It is checked late"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the total fee for Hassan's second bag?",
                  "choices": [
                    "30 dollars",
                    "50 dollars",
                    "80 dollars"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passages": [
                "Deck Information: Deck 5 features the main dining room and theater. Deck 8 includes the pool, spa, and fitness center. Deck 10 has the buffet restaurant and outdoor bar. Cabins are located on decks 6, 7, and 9.",
                "Hi, my cabin is on deck 7. Could you tell me which deck has the fitness center, and how I can get there from my cabin? Thanks, Noor Rahman.",
                "Hello Ms. Rahman, the fitness center is located on deck 8, along with the pool and spa. From deck 7, you can take the elevator near the main staircase directly up one floor to deck 8."
              ],
              "questions": [
                {
                  "q": "What is on deck 5?",
                  "choices": [
                    "The main dining room and theater",
                    "The buffet restaurant",
                    "The pool and spa"
                  ],
                  "answer": 0
                },
                {
                  "q": "Where is Noor's cabin located?",
                  "choices": [
                    "Deck 10",
                    "Deck 8",
                    "Deck 7"
                  ],
                  "answer": 2
                },
                {
                  "q": "What does Noor ask about?",
                  "choices": [
                    "Wi-Fi access",
                    "The location of the fitness center",
                    "The dinner menu"
                  ],
                  "answer": 1
                },
                {
                  "q": "Which deck has the fitness center?",
                  "choices": [
                    "Deck 10",
                    "Deck 8",
                    "Deck 5"
                  ],
                  "answer": 1
                },
                {
                  "q": "How can Noor get to the fitness center?",
                  "choices": [
                    "Walk down two flights of stairs",
                    "Take a shuttle",
                    "Take the elevator near the main staircase"
                  ],
                  "answer": 2
                }
              ]
            }
          ]
        }
      }
    },
    {
      "set": 3,
      "title": "ชุดที่ 3 · Finance & Orders",
      "listening": {
        "part1": [
          {
            "scene": "โต๊ะทำงาน ผู้ชายคนหนึ่งก้มดูเอกสารที่กางอยู่ตรงหน้า มือขวาวางอยู่บนเครื่องคิดเลข มีแฟ้มวางซ้อนอยู่มุมโต๊ะ",
            "choices": [
              "A man is signing a check.",
              "A man is filing papers in a cabinet.",
              "A man is examining some documents.",
              "The calculator is being replaced."
            ],
            "answer": 2,
            "why": "เขาดูเอกสาร ไม่ได้เก็บเข้าแฟ้มหรือเซ็นอะไร แม้จะมีแฟ้มอยู่ในภาพก็ตาม จึงเป็นกับดักของที่มีอยู่จริงแต่กริยาผิด",
            "art": "accountant_desk"
          },
          {
            "scene": "เคาน์เตอร์ธนาคาร พนักงานหญิงถือปึกธนบัตรอยู่ในมือทั้งสองข้าง ด้านหน้ามีเครื่องนับเงินวางอยู่",
            "choices": [
              "A woman is opening a safe.",
              "A woman is handling some money.",
              "The money is being deposited.",
              "A woman is closing the counter."
            ],
            "answer": 1,
            "why": "handling ครอบคลุมทั้งถือและนับ จึงปลอดภัยที่สุด ส่วน being deposited ต้องมีลูกค้าฝากเงินอยู่ ซึ่งไม่มีในภาพ",
            "art": "bank_counting"
          },
          {
            "scene": "ลานหน้าคลังสินค้า รถบรรทุกจอดเปิดท้าย มีคนงานสองคนกำลังส่งกล่องต่อกันขึ้นรถ มีรถยกจอดอยู่ด้านหลัง",
            "choices": [
              "The men are sitting on the boxes.",
              "The truck is parked inside a garage.",
              "A forklift is being driven.",
              "Some men are lifting boxes."
            ],
            "answer": 3,
            "why": "รถยกอยู่ในภาพแต่จอดอยู่ ไม่มีคนขับ จึงเป็นกับดัก being + ช่อง 3 ที่คลาสสิกที่สุดของ Part 1",
            "art": "yard_forklift_idle"
          },
          {
            "scene": "เคาน์เตอร์ธนาคาร ลูกค้าก้มเขียนบนเอกสารที่วางอยู่บนเคาน์เตอร์ มือถือปากกา พนักงานยืนรออีกฝั่ง",
            "choices": [
              "A customer is counting bills.",
              "A customer is using a telephone.",
              "The document is being stamped.",
              "A customer is writing on a form."
            ],
            "answer": 3,
            "why": "เขียนคือกริยาที่เห็น ส่วน being stamped ต้องมีคนกำลังประทับตรา และไม่มีธนบัตรหรือโทรศัพท์ในภาพ",
            "art": "bank_signing"
          },
          {
            "scene": "ในห้องทำงาน ชายสองคนยืนหันหน้าเข้าหากันและจับมือกัน บนโต๊ะข้างๆ มีเอกสารวางเปิดอยู่พร้อมปากกา",
            "choices": [
              "Two men are exchanging business cards.",
              "Two men are shaking hands.",
              "A contract is being signed.",
              "Two men are seated across a desk."
            ],
            "answer": 1,
            "why": "สัญญาวางอยู่บนโต๊ะแต่ไม่มีใครกำลังเซ็น จึงเป็นกับดัก being + ช่อง 3 และทั้งคู่ยืนอยู่ ไม่ได้นั่ง",
            "art": "handshake_contract"
          },
          {
            "scene": "ห้องเก็บของ พนักงานคนหนึ่งยกกล่องวางซ้อนขึ้นบนกองกล่องที่สูงระดับอก มีชั้นวางว่างอยู่ด้านหลัง",
            "choices": [
              "The shelves are being assembled.",
              "A man is carrying a ladder.",
              "A man is stacking boxes.",
              "A man is opening a carton."
            ],
            "answer": 2,
            "why": "ชั้นวางอยู่ในภาพแต่ประกอบเสร็จแล้ว ไม่มีใครกำลังประกอบ และไม่มีบันไดในภาพ",
            "art": "storeroom_stacking"
          }
        ],
        "part2": [
          {
            "q": "When is the invoice due?",
            "choices": [
              "Yes, I paid it.",
              "At the end of the month.",
              "In the accounting office."
            ],
            "answer": 1
          },
          {
            "q": "How many units did the client order?",
            "choices": [
              "By truck.",
              "Five hundred.",
              "Last Tuesday."
            ],
            "answer": 1
          },
          {
            "q": "Could you send me the updated price list?",
            "choices": [
              "He is the supplier.",
              "It's on the shelf.",
              "Sure, right away."
            ],
            "answer": 2
          },
          {
            "q": "Why was the payment declined?",
            "choices": [
              "The card has expired.",
              "At the bank.",
              "Two thousand dollars."
            ],
            "answer": 0
          },
          {
            "q": "Where should I send the invoice?",
            "choices": [
              "It's overdue.",
              "Next Friday.",
              "To the finance department."
            ],
            "answer": 2
          },
          {
            "q": "Did the shipment arrive yet?",
            "choices": [
              "Yes, this morning.",
              "In the warehouse.",
              "About ten boxes."
            ],
            "answer": 0
          },
          {
            "q": "How much was the total order?",
            "choices": [
              "By courier.",
              "Last week.",
              "About three thousand dollars."
            ],
            "answer": 2
          },
          {
            "q": "Who approved the purchase order?",
            "choices": [
              "Two days ago.",
              "In cash.",
              "The finance director."
            ],
            "answer": 2
          },
          {
            "q": "Is the invoice number correct?",
            "choices": [
              "It's a large invoice.",
              "Yes, I double-checked it.",
              "Next month."
            ],
            "answer": 1
          },
          {
            "q": "When will we receive the refund?",
            "choices": [
              "At the register.",
              "It's a small amount.",
              "Within a week."
            ],
            "answer": 2
          },
          {
            "q": "Why did the price increase?",
            "choices": [
              "Due to rising material costs.",
              "Last quarter.",
              "By ten dollars."
            ],
            "answer": 0
          },
          {
            "q": "Could you confirm the wire transfer?",
            "choices": [
              "It's a large sum.",
              "Yes, it was received today.",
              "In the bank."
            ],
            "answer": 1
          },
          {
            "q": "How often do we review the budget?",
            "choices": [
              "By the manager.",
              "Every quarter.",
              "In the office."
            ],
            "answer": 1
          },
          {
            "q": "Is this expense tax-deductible?",
            "choices": [
              "Yesterday afternoon.",
              "I'll check with the accountant.",
              "It's a small amount."
            ],
            "answer": 1
          },
          {
            "q": "Who is handling the audit this year?",
            "choices": [
              "Next month.",
              "An outside firm.",
              "It's routine."
            ],
            "answer": 1
          },
          {
            "q": "What's the deadline for expense reports?",
            "choices": [
              "In the accounting office.",
              "The fifth of every month.",
              "About ten pages."
            ],
            "answer": 1
          },
          {
            "q": "Has the client paid the deposit?",
            "choices": [
              "Yes, last week.",
              "It's fifty percent.",
              "At checkout."
            ],
            "answer": 0
          },
          {
            "q": "Why is the account overdrawn?",
            "choices": [
              "A payment was processed twice.",
              "By fifty dollars.",
              "Last Friday."
            ],
            "answer": 0
          },
          {
            "q": "Could you double check these numbers?",
            "choices": [
              "In the spreadsheet.",
              "Sure, I'll review them now.",
              "They're accurate."
            ],
            "answer": 1
          },
          {
            "q": "When does the fiscal year end?",
            "choices": [
              "At the end of December.",
              "In the finance office.",
              "Next quarter."
            ],
            "answer": 0
          },
          {
            "q": "How should I categorize this expense?",
            "choices": [
              "As office supplies.",
              "Last Tuesday.",
              "About twenty dollars."
            ],
            "answer": 0
          },
          {
            "q": "Is the discount still available?",
            "choices": [
              "Yes, until Friday.",
              "At checkout.",
              "It's ten percent."
            ],
            "answer": 0
          },
          {
            "q": "Who signed off on this purchase?",
            "choices": [
              "The department head.",
              "By email.",
              "This morning."
            ],
            "answer": 0
          },
          {
            "q": "What's the exchange rate today?",
            "choices": [
              "It changes daily.",
              "At the bank.",
              "About thirty-five per dollar."
            ],
            "answer": 2
          },
          {
            "q": "Could we extend the payment deadline?",
            "choices": [
              "I'll ask the supplier.",
              "It's thirty days.",
              "Two weeks ago."
            ],
            "answer": 0
          }
        ],
        "part3": [
          {
            "lines": [
              "W: I'm calling about order four-five-two, two items are missing.",
              "M: I'm sorry, which items didn't arrive?",
              "W: The keyboards, though the monitors did arrive.",
              "M: I'll have the keyboards shipped out today."
            ],
            "questions": [
              {
                "q": "What is the problem?",
                "choices": [
                  "The order was cancelled",
                  "Some items are missing",
                  "The price was wrong"
                ],
                "answer": 1
              },
              {
                "q": "Which items are missing?",
                "choices": [
                  "Both",
                  "Keyboards",
                  "Monitors"
                ],
                "answer": 1
              },
              {
                "q": "What will the man do?",
                "choices": [
                  "Give a refund",
                  "Send a new invoice",
                  "Ship the missing items today"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: Have we stayed within the marketing budget this quarter?",
              "W: Almost, we're about five percent over.",
              "M: What caused the increase?",
              "W: Mainly extra spending on online ads."
            ],
            "questions": [
              {
                "q": "What are they discussing?",
                "choices": [
                  "Staff hiring",
                  "A new product",
                  "The marketing budget"
                ],
                "answer": 2
              },
              {
                "q": "How much over budget are they?",
                "choices": [
                  "Fifteen percent",
                  "About five percent",
                  "They are under budget"
                ],
                "answer": 1
              },
              {
                "q": "What caused the increase?",
                "choices": [
                  "Higher salaries",
                  "Travel costs",
                  "Extra spending on online ads"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "W: I'd like to check the status of my loan application.",
              "M: Let me pull that up... it's currently under review.",
              "W: How long does the review usually take?",
              "M: About five to seven business days."
            ],
            "questions": [
              {
                "q": "What is the woman checking?",
                "choices": [
                  "Her loan application status",
                  "Her credit score",
                  "Her account balance"
                ],
                "answer": 0
              },
              {
                "q": "What is the current status?",
                "choices": [
                  "Denied",
                  "Approved",
                  "Under review"
                ],
                "answer": 2
              },
              {
                "q": "How long does review usually take?",
                "choices": [
                  "A month",
                  "One day",
                  "Five to seven business days"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: We were billed twice for the same shipment.",
              "W: I apologize, let me check the records.",
              "M: The duplicate charge was for three hundred dollars.",
              "W: I see the error, I'll process a refund immediately."
            ],
            "questions": [
              {
                "q": "What is the man's complaint?",
                "choices": [
                  "The invoice was late",
                  "He was billed twice",
                  "The price was wrong"
                ],
                "answer": 1
              },
              {
                "q": "How much was the duplicate charge?",
                "choices": [
                  "Three hundred dollars",
                  "Three thousand dollars",
                  "Thirty dollars"
                ],
                "answer": 0
              },
              {
                "q": "What will the woman do?",
                "choices": [
                  "Escalate to a manager",
                  "Process a refund immediately",
                  "Ask for more information"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "W: We're considering switching to a new supplier.",
              "M: What's driving that decision?",
              "W: Their prices are about ten percent lower.",
              "M: Let's schedule a call with them next week."
            ],
            "questions": [
              {
                "q": "What are they discussing?",
                "choices": [
                  "Switching suppliers",
                  "A product recall",
                  "Hiring a consultant"
                ],
                "answer": 0
              },
              {
                "q": "Why are they considering the switch?",
                "choices": [
                  "Faster delivery",
                  "Lower prices",
                  "Better quality"
                ],
                "answer": 1
              },
              {
                "q": "What will they do next week?",
                "choices": [
                  "Visit the factory",
                  "Sign a contract",
                  "Schedule a call with the new supplier"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: I need to submit my expense report from the trip.",
              "W: Make sure to attach all your receipts.",
              "M: I have most of them, but I lost one for a taxi.",
              "W: That's fine, just note it and explain in the comments."
            ],
            "questions": [
              {
                "q": "What is the man doing?",
                "choices": [
                  "Requesting a loan",
                  "Booking a trip",
                  "Submitting an expense report"
                ],
                "answer": 2
              },
              {
                "q": "What does the woman remind him to do?",
                "choices": [
                  "Convert currency",
                  "Get manager approval",
                  "Attach all receipts"
                ],
                "answer": 2
              },
              {
                "q": "What problem does the man mention?",
                "choices": [
                  "He lost a receipt",
                  "He overspent",
                  "He missed the deadline"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: I noticed some charges I didn't make on my statement.",
              "M: I'm sorry to hear that. Let's cancel your card right away.",
              "W: Will I be charged for those transactions?",
              "M: No, we'll investigate and reverse any fraudulent charges."
            ],
            "questions": [
              {
                "q": "What is the woman's problem?",
                "choices": [
                  "A lost card",
                  "Unauthorized charges on her card",
                  "A declined payment"
                ],
                "answer": 1
              },
              {
                "q": "What will the man do?",
                "choices": [
                  "Cancel her card",
                  "Close her account",
                  "Increase her limit"
                ],
                "answer": 0
              },
              {
                "q": "What does the man promise?",
                "choices": [
                  "To issue a new card immediately",
                  "To reverse fraudulent charges",
                  "To refund the annual fee"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: When is the deadline to file our corporate taxes?",
              "W: It's the end of next month.",
              "M: Do we need an extension this year?",
              "W: I don't think so, we're almost finished."
            ],
            "questions": [
              {
                "q": "What are they discussing?",
                "choices": [
                  "An audit",
                  "A budget meeting",
                  "A tax filing deadline"
                ],
                "answer": 2
              },
              {
                "q": "When is the deadline?",
                "choices": [
                  "Next week",
                  "The end of next month",
                  "Tomorrow"
                ],
                "answer": 1
              },
              {
                "q": "Do they need an extension?",
                "choices": [
                  "Probably not",
                  "They already requested one",
                  "Yes, definitely"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: Has the wire transfer to our supplier gone through?",
              "M: Yes, it was confirmed this morning.",
              "W: Great, could you send me the confirmation number?",
              "M: Sure, I'll email it to you right now."
            ],
            "questions": [
              {
                "q": "What are they discussing?",
                "choices": [
                  "A stock purchase",
                  "A wire transfer",
                  "A loan application"
                ],
                "answer": 1
              },
              {
                "q": "When was it confirmed?",
                "choices": [
                  "Next week",
                  "This morning",
                  "Yesterday"
                ],
                "answer": 1
              },
              {
                "q": "What does the woman ask for?",
                "choices": [
                  "A refund",
                  "The confirmation number",
                  "A receipt"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: I need to file a claim for the damaged equipment.",
              "W: Do you have photos of the damage?",
              "M: Yes, I took several right after it happened.",
              "W: Good, please email those along with the claim form."
            ],
            "questions": [
              {
                "q": "What is the man doing?",
                "choices": [
                  "Filing an insurance claim",
                  "Requesting a repair",
                  "Cancelling a policy"
                ],
                "answer": 0
              },
              {
                "q": "What does the woman ask about?",
                "choices": [
                  "Photos of the damage",
                  "A receipt",
                  "A witness statement"
                ],
                "answer": 0
              },
              {
                "q": "What should the man send?",
                "choices": [
                  "Only the claim form",
                  "A written report",
                  "Photos and the claim form"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "W: My paycheck this month seems lower than usual.",
              "M: Let me check, it looks like a benefits deduction was added.",
              "W: I wasn't aware of that change.",
              "M: I'll send you a breakdown of the deduction by email."
            ],
            "questions": [
              {
                "q": "What is the woman's concern?",
                "choices": [
                  "Her paycheck is lower than usual",
                  "Her hours were miscounted",
                  "She wasn't paid at all"
                ],
                "answer": 0
              },
              {
                "q": "What caused the change?",
                "choices": [
                  "A tax increase",
                  "A payroll error",
                  "A benefits deduction"
                ],
                "answer": 2
              },
              {
                "q": "What will the man send?",
                "choices": [
                  "A breakdown of the deduction",
                  "An apology letter",
                  "A corrected paycheck"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "M: The vendor wants to raise prices by eight percent.",
              "W: That seems high, can we negotiate?",
              "M: I already asked, they might agree to five percent.",
              "W: Let's try to push for that lower rate."
            ],
            "questions": [
              {
                "q": "What is the vendor proposing?",
                "choices": [
                  "A discount",
                  "A new contract",
                  "An eight percent price increase"
                ],
                "answer": 2
              },
              {
                "q": "What did the man already do?",
                "choices": [
                  "Signed the new contract",
                  "Cancelled the order",
                  "Asked about negotiating the increase"
                ],
                "answer": 2
              },
              {
                "q": "What does the woman want to do?",
                "choices": [
                  "Accept the increase",
                  "Push for the lower rate",
                  "Find a new vendor"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "W: Are you ready for the earnings call this afternoon?",
              "M: Almost, I'm still finalizing the slides.",
              "W: Don't forget to include the revenue comparison chart.",
              "M: Right, I'll add that now."
            ],
            "questions": [
              {
                "q": "What is happening this afternoon?",
                "choices": [
                  "An earnings call",
                  "A job interview",
                  "A product launch"
                ],
                "answer": 0
              },
              {
                "q": "What is the man doing?",
                "choices": [
                  "Finalizing slides",
                  "Booking a flight",
                  "Reviewing contracts"
                ],
                "answer": 0
              },
              {
                "q": "What does the woman remind him to include?",
                "choices": [
                  "A competitor analysis",
                  "A staff photo",
                  "A revenue comparison chart"
                ],
                "answer": 2
              }
            ]
          }
        ],
        "part4": [
          {
            "script": "This is a message from First City Bank. Starting in September, monthly account statements will be sent by email instead of by paper mail. If you wish to continue receiving paper statements, please update your preferences in the online banking app.",
            "questions": [
              {
                "q": "What change is being announced?",
                "choices": [
                  "Statements will be sent by email",
                  "Fees will increase",
                  "Branches will close early"
                ],
                "answer": 0
              },
              {
                "q": "What should customers do to keep paper statements?",
                "choices": [
                  "Visit a branch",
                  "Call customer service",
                  "Update their preferences in the app"
                ],
                "answer": 2
              },
              {
                "q": "When does this change start?",
                "choices": [
                  "September",
                  "Immediately",
                  "January"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Hi, this is Maria from Bright Supplies. I'm calling to confirm your recent order of office chairs. Unfortunately, the blue model is out of stock, but we can offer the gray model at the same price. Please let me know how you'd like to proceed.",
            "questions": [
              {
                "q": "Why is Maria calling?",
                "choices": [
                  "To ask for payment",
                  "To cancel a delivery",
                  "To confirm an order and report a stock issue"
                ],
                "answer": 2
              },
              {
                "q": "What does Maria offer?",
                "choices": [
                  "A full refund",
                  "The gray model at the same price",
                  "Free shipping"
                ],
                "answer": 1
              },
              {
                "q": "What is out of stock?",
                "choices": [
                  "The blue model",
                  "The gray model",
                  "All models"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Good afternoon, everyone. I'm pleased to report that our quarterly revenue increased by ten percent compared to last year. Operating costs were also reduced by three percent due to improved efficiency. We expect similar growth to continue into next quarter.",
            "questions": [
              {
                "q": "What is the speaker reporting?",
                "choices": [
                  "A new product launch",
                  "A staff restructuring",
                  "Quarterly financial results"
                ],
                "answer": 2
              },
              {
                "q": "How much did revenue increase?",
                "choices": [
                  "Three percent",
                  "Ten percent",
                  "Twenty percent"
                ],
                "answer": 1
              },
              {
                "q": "What happened to operating costs?",
                "choices": [
                  "They stayed the same",
                  "They decreased by three percent",
                  "They increased"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Hello, this is a security alert from Crestline Bank. We noticed unusual activity on your account and have temporarily frozen your card as a precaution. Please call us back at the number on the back of your card to verify recent transactions.",
            "questions": [
              {
                "q": "Why is the bank calling?",
                "choices": [
                  "Unusual account activity was detected",
                  "A payment was declined",
                  "A new card is ready"
                ],
                "answer": 0
              },
              {
                "q": "What action did the bank take?",
                "choices": [
                  "Temporarily froze the card",
                  "Closed the account",
                  "Increased the credit limit"
                ],
                "answer": 0
              },
              {
                "q": "What should the customer do?",
                "choices": [
                  "Call back to verify transactions",
                  "Visit a branch in person",
                  "Ignore the message"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Welcome to today's investment seminar. We'll begin with an overview of market trends, followed by a session on retirement planning after a short break. Please silence your phones, and feel free to ask questions during the Q&A at the end.",
            "questions": [
              {
                "q": "What is the first topic of the seminar?",
                "choices": [
                  "Retirement planning",
                  "Market trends",
                  "Tax strategies"
                ],
                "answer": 1
              },
              {
                "q": "When will retirement planning be discussed?",
                "choices": [
                  "At the very beginning",
                  "Only during Q&A",
                  "After a short break"
                ],
                "answer": 2
              },
              {
                "q": "When can attendees ask questions?",
                "choices": [
                  "Only by email",
                  "At any time",
                  "During the Q&A at the end"
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "This is a reminder to all department managers that invoices for reimbursement must be submitted by the fifteenth of each month. Late submissions will be processed in the following payment cycle. Please contact accounts payable with any questions.",
            "questions": [
              {
                "q": "Who is this reminder for?",
                "choices": [
                  "Department managers",
                  "External vendors",
                  "New employees"
                ],
                "answer": 0
              },
              {
                "q": "What is the deadline for invoices?",
                "choices": [
                  "The first of each month",
                  "The fifteenth of each month",
                  "The last day of the month"
                ],
                "answer": 1
              },
              {
                "q": "What happens to late submissions?",
                "choices": [
                  "They are charged a fee",
                  "They are processed the next cycle",
                  "They are rejected"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Attention customers, today's exchange rates have been updated and are posted on the board near the entrance. Rates are subject to change without notice, and a small service fee applies to all transactions. Thank you for banking with us.",
            "questions": [
              {
                "q": "What has been updated?",
                "choices": [
                  "Branch hours",
                  "Interest rates",
                  "Exchange rates"
                ],
                "answer": 2
              },
              {
                "q": "Where can customers see the rates?",
                "choices": [
                  "On the board near the entrance",
                  "Only online",
                  "On their receipt"
                ],
                "answer": 0
              },
              {
                "q": "What applies to all transactions?",
                "choices": [
                  "A small service fee",
                  "A tax exemption",
                  "A discount"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Hello, this is a reminder that your business insurance policy is set to expire at the end of this month. To avoid a lapse in coverage, please renew before the expiration date. You can renew online or by calling our office directly.",
            "questions": [
              {
                "q": "What is expiring?",
                "choices": [
                  "A business license",
                  "A business insurance policy",
                  "A lease agreement"
                ],
                "answer": 1
              },
              {
                "q": "When does it expire?",
                "choices": [
                  "In six months",
                  "The end of this month",
                  "Next week"
                ],
                "answer": 1
              },
              {
                "q": "How can the policy be renewed?",
                "choices": [
                  "Only in person",
                  "Online or by calling the office",
                  "Only by mail"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Attention all staff, starting next month, all purchase requests over five hundred dollars must be approved by the procurement department before ordering. This new process is intended to help control spending and ensure the best pricing.",
            "questions": [
              {
                "q": "What new process is being introduced?",
                "choices": [
                  "A new expense app",
                  "A hiring freeze",
                  "Approval for purchases over five hundred dollars"
                ],
                "answer": 2
              },
              {
                "q": "When does this take effect?",
                "choices": [
                  "Immediately",
                  "Next month",
                  "Next year"
                ],
                "answer": 1
              },
              {
                "q": "What is the purpose of this change?",
                "choices": [
                  "To speed up deliveries",
                  "To control spending and ensure best pricing",
                  "To reduce staff"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Dear members, we are pleased to announce a new mobile app that allows you to deposit checks, transfer funds, and pay bills from your phone. The app will be available for download starting next Monday. We hope this makes managing your account easier.",
            "questions": [
              {
                "q": "What is being announced?",
                "choices": [
                  "A change in interest rates",
                  "A new mobile app",
                  "A new branch location"
                ],
                "answer": 1
              },
              {
                "q": "What can members do with the app?",
                "choices": [
                  "Deposit checks and transfer funds",
                  "Only view their balance",
                  "Only pay bills"
                ],
                "answer": 0
              },
              {
                "q": "When will the app be available?",
                "choices": [
                  "Next year",
                  "Immediately",
                  "Next Monday"
                ],
                "answer": 2
              }
            ]
          }
        ]
      },
      "reading": {
        "part5": [
          {
            "sentence": "The payment must be made ______ 30 days of receiving the invoice.",
            "choices": [
              "within",
              "through",
              "since",
              "among"
            ],
            "answer": 0
          },
          {
            "sentence": "Our profits have risen ______ compared to last year.",
            "choices": [
              "sharp",
              "sharply",
              "sharpness",
              "sharpen"
            ],
            "answer": 1
          },
          {
            "sentence": "The accountant is responsible ______ preparing the monthly reports.",
            "choices": [
              "of",
              "with",
              "for",
              "to"
            ],
            "answer": 2
          },
          {
            "sentence": "The supplier promised a ______ delivery of the goods.",
            "choices": [
              "prompt",
              "prompted",
              "promptness",
              "promptly"
            ],
            "answer": 0
          },
          {
            "sentence": "Please review the contract ______ signing it.",
            "choices": [
              "before",
              "during",
              "while",
              "since"
            ],
            "answer": 0
          },
          {
            "sentence": "The finance team ______ the report before the deadline.",
            "choices": [
              "to complete",
              "completion",
              "completed",
              "completing"
            ],
            "answer": 2
          },
          {
            "sentence": "If the shipment is late, we ______ the customer immediately.",
            "choices": [
              "to notify",
              "notifying",
              "will notify",
              "notified"
            ],
            "answer": 2
          },
          {
            "sentence": "All expenses must be ______ by a receipt.",
            "choices": [
              "supported",
              "support",
              "supportive",
              "supporting"
            ],
            "answer": 0
          },
          {
            "sentence": "The company's ______ increased significantly this year.",
            "choices": [
              "revenue",
              "revenues",
              "revenued",
              "revenuing"
            ],
            "answer": 0
          },
          {
            "sentence": "The accountant ______ the figures twice before submitting them.",
            "choices": [
              "check",
              "checking",
              "to check",
              "checked"
            ],
            "answer": 3
          },
          {
            "sentence": "We need to ______ the budget before the end of the quarter.",
            "choices": [
              "finalized",
              "finalization",
              "finalize",
              "finalizing"
            ],
            "answer": 2
          },
          {
            "sentence": "The invoice was rejected ______ a missing signature.",
            "choices": [
              "due to",
              "unless",
              "despite",
              "although"
            ],
            "answer": 0
          },
          {
            "sentence": "Our accounts department handles all ______ matters.",
            "choices": [
              "financially",
              "finance",
              "financier",
              "financial"
            ],
            "answer": 3
          },
          {
            "sentence": "The client requested a ______ breakdown of all charges.",
            "choices": [
              "detailing",
              "detail",
              "detailed",
              "details"
            ],
            "answer": 2
          },
          {
            "sentence": "The auditor found the records to be ______ accurate.",
            "choices": [
              "completely",
              "completes",
              "complete",
              "completion"
            ],
            "answer": 0
          },
          {
            "sentence": "Please ensure the wire transfer is ______ before Friday.",
            "choices": [
              "completed",
              "complete",
              "completes",
              "completing"
            ],
            "answer": 0
          },
          {
            "sentence": "The company's stock price ______ by ten percent last month.",
            "choices": [
              "rising",
              "risen",
              "rise",
              "rose"
            ],
            "answer": 3
          },
          {
            "sentence": "We ______ a refund if the product is defective.",
            "choices": [
              "to issue",
              "issued",
              "issuing",
              "will issue"
            ],
            "answer": 3
          },
          {
            "sentence": "The new policy applies to ______ employee in the finance department.",
            "choices": [
              "every",
              "most",
              "all",
              "each of"
            ],
            "answer": 0
          },
          {
            "sentence": "The bank ______ a low interest rate on savings accounts.",
            "choices": [
              "offers",
              "offered",
              "offering",
              "offer"
            ],
            "answer": 0
          },
          {
            "sentence": "This transaction cannot be ______ once it is confirmed.",
            "choices": [
              "reversing",
              "reversed",
              "reverse",
              "reversal"
            ],
            "answer": 1
          },
          {
            "sentence": "The report shows a ______ decline in expenses.",
            "choices": [
              "gradual",
              "gradualness",
              "grade",
              "gradually"
            ],
            "answer": 0
          },
          {
            "sentence": "Employees must submit receipts ______ than the fifth of the month.",
            "choices": [
              "no more",
              "no sooner",
              "no less",
              "no later"
            ],
            "answer": 3
          },
          {
            "sentence": "The finance director ______ the new budget proposal yesterday.",
            "choices": [
              "approves",
              "approving",
              "approve",
              "approved"
            ],
            "answer": 3
          },
          {
            "sentence": "Our records indicate the payment was ______ on time.",
            "choices": [
              "receiving",
              "receipt",
              "received",
              "receive"
            ],
            "answer": 2
          },
          {
            "sentence": "The company offers a two percent discount for early ______.",
            "choices": [
              "paying",
              "payment",
              "paid",
              "pay"
            ],
            "answer": 1
          },
          {
            "sentence": "The spreadsheet ______ all transactions from last month.",
            "choices": [
              "list",
              "listing",
              "lists",
              "listed"
            ],
            "answer": 2
          },
          {
            "sentence": "We are currently ______ our accounting software to a newer version.",
            "choices": [
              "upgraded",
              "upgrade",
              "upgrading",
              "upgrades"
            ],
            "answer": 2
          },
          {
            "sentence": "The client's account was ______ due to non-payment.",
            "choices": [
              "suspend",
              "suspends",
              "suspending",
              "suspended"
            ],
            "answer": 3
          },
          {
            "sentence": "Please retain this receipt ______ your records.",
            "choices": [
              "in",
              "for",
              "at",
              "of"
            ],
            "answer": 1
          }
        ],
        "part6": [
          {
            "passage": "Attention all department heads: Please submit your budget requests for next year by October 15. Each request should ___1___ a short explanation of any major expenses. The finance committee will ___2___ all requests and announce the approved budgets in November. Requests submitted ___3___ this deadline may not be considered. Please direct any questions to the finance ___4___.",
            "blanks": [
              {
                "choices": [
                  "including",
                  "inclusion",
                  "included",
                  "include"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "reviewer",
                  "review",
                  "reviewed",
                  "reviewing"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "after",
                  "before",
                  "since",
                  "during"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "depart",
                  "departure",
                  "departed",
                  "department"
                ],
                "answer": 3
              }
            ]
          },
          {
            "passage": "Dear Customer, we would like to ___1___ you of upcoming changes to our account fees, effective next month. The monthly maintenance fee will ___2___ from five dollars to seven dollars. Customers who maintain a minimum balance of one thousand dollars will continue to have this fee ___3___. If you have questions about how this affects your account, please ___4___ our customer service team.",
            "blanks": [
              {
                "choices": [
                  "notify",
                  "notified",
                  "notifies",
                  "notifying"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "increase",
                  "increased",
                  "increases",
                  "increasing"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "waive",
                  "waived",
                  "waiving",
                  "waives"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "contact",
                  "contacts",
                  "contacting",
                  "contacted"
                ],
                "answer": 0
              }
            ]
          },
          {
            "passage": "Dear Client, this is a reminder that invoice number 5523 remains ___1___. The original due date was two weeks ago, and a late fee will be ___2___ if payment is not received within five business days. If you have already ___3___ payment, please disregard this notice. We value your business and hope to resolve this matter ___4___.",
            "blanks": [
              {
                "choices": [
                  "unpays",
                  "unpay",
                  "unpaying",
                  "unpaid"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "applying",
                  "applied",
                  "applies",
                  "apply"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "send",
                  "sends",
                  "sent",
                  "sending"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "quickly",
                  "quick",
                  "quicken",
                  "quickness"
                ],
                "answer": 0
              }
            ]
          },
          {
            "passage": "To all staff: Effective immediately, all business expenses over one hundred dollars must be ___1___ by a department manager before purchase. Receipts must be ___2___ to the finance team within five business days of the ___3___. Failure to comply may result in delayed ___4___.",
            "blanks": [
              {
                "choices": [
                  "approving",
                  "approve",
                  "approved",
                  "approves"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "submits",
                  "submit",
                  "submitting",
                  "submitted"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "purchasing",
                  "purchase",
                  "purchases",
                  "purchased"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "reimbursed",
                  "reimburse",
                  "reimbursement",
                  "reimbursing"
                ],
                "answer": 2
              }
            ]
          }
        ],
        "part7": {
          "single": [
            {
              "passage": "This is a friendly reminder that invoice number 7781, for the amount of two thousand four hundred dollars, is due on the 30th of this month. If payment has already been sent, please disregard this notice. For any questions about the invoice, contact our billing department.",
              "questions": [
                {
                  "q": "What is the purpose of this email?",
                  "choices": [
                    "To confirm a delivery",
                    "To offer a discount",
                    "To remind the customer about a due invoice"
                  ],
                  "answer": 2
                },
                {
                  "q": "What is the invoice number?",
                  "choices": [
                    "1787",
                    "7871",
                    "7781"
                  ],
                  "answer": 2
                },
                {
                  "q": "How much is owed?",
                  "choices": [
                    "Two thousand dollars",
                    "Four hundred dollars",
                    "Two thousand four hundred dollars"
                  ],
                  "answer": 2
                },
                {
                  "q": "When is payment due?",
                  "choices": [
                    "The 13th of this month",
                    "Next month",
                    "The 30th of this month"
                  ],
                  "answer": 2
                },
                {
                  "q": "What should the reader do if they have questions?",
                  "choices": [
                    "Visit the office",
                    "Wait for another email",
                    "Contact the billing department"
                  ],
                  "answer": 2
                },
                {
                  "q": "What should the reader do if they already paid?",
                  "choices": [
                    "Call immediately",
                    "Send proof of payment",
                    "Disregard the notice"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passage": "Due to high demand, our popular Model X printer is currently out of stock. New shipments are expected to arrive within two weeks. Customers who have already placed orders will receive their printers as soon as the stock arrives, and no further action is needed.",
              "questions": [
                {
                  "q": "Why is the Model X printer unavailable?",
                  "choices": [
                    "It was recalled",
                    "It is out of stock due to high demand",
                    "It was discontinued"
                  ],
                  "answer": 1
                },
                {
                  "q": "When are new shipments expected?",
                  "choices": [
                    "Next month",
                    "Within two weeks",
                    "Tomorrow"
                  ],
                  "answer": 1
                },
                {
                  "q": "What should customers who already ordered do?",
                  "choices": [
                    "Choose a different model",
                    "Reorder the product",
                    "Nothing; they will receive it when stock arrives"
                  ],
                  "answer": 2
                },
                {
                  "q": "What model is out of stock?",
                  "choices": [
                    "Model Y",
                    "Model Z",
                    "Model X"
                  ],
                  "answer": 2
                },
                {
                  "q": "What is the reason given for the shortage?",
                  "choices": [
                    "A factory closure",
                    "A shipping strike",
                    "High demand"
                  ],
                  "answer": 2
                },
                {
                  "q": "Is any action needed from customers who already ordered?",
                  "choices": [
                    "Yes, they must pay again",
                    "No further action is needed",
                    "Yes, they must re-confirm"
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passage": "Market Update: Shares of TechCore Inc. rose by six percent today following the announcement of stronger-than-expected quarterly earnings. Analysts note that the company's cloud computing division was the primary driver of growth, while its hardware division saw only modest gains. TechCore's stock has now risen twenty percent since the start of the year.",
              "questions": [
                {
                  "q": "What is this article about?",
                  "choices": [
                    "A stock market update",
                    "A company merger",
                    "A product launch"
                  ],
                  "answer": 0
                },
                {
                  "q": "By how much did shares rise today?",
                  "choices": [
                    "Twenty percent",
                    "Six percent",
                    "Two percent"
                  ],
                  "answer": 1
                },
                {
                  "q": "Why did shares rise?",
                  "choices": [
                    "Stronger-than-expected quarterly earnings",
                    "A new CEO was appointed",
                    "A competitor went bankrupt"
                  ],
                  "answer": 0
                },
                {
                  "q": "Which division drove growth?",
                  "choices": [
                    "Retail",
                    "Cloud computing",
                    "Hardware"
                  ],
                  "answer": 1
                },
                {
                  "q": "How did the hardware division perform?",
                  "choices": [
                    "It declined sharply",
                    "It outperformed cloud computing",
                    "It saw only modest gains"
                  ],
                  "answer": 2
                },
                {
                  "q": "How much has the stock risen since the start of the year?",
                  "choices": [
                    "Six percent",
                    "Twenty percent",
                    "Fifty percent"
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passage": "Dear Mr. Kim, we are pleased to inform you that your business loan application has been approved for the amount of fifty thousand dollars. The interest rate is fixed at four point five percent, and the repayment term is five years. Please visit our branch within ten business days to sign the final loan agreement.",
              "questions": [
                {
                  "q": "What is this letter about?",
                  "choices": [
                    "A loan rejection",
                    "An account closure",
                    "A loan approval"
                  ],
                  "answer": 2
                },
                {
                  "q": "How much was the loan approved for?",
                  "choices": [
                    "Five thousand dollars",
                    "Fifty thousand dollars",
                    "Fifteen thousand dollars"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is the interest rate?",
                  "choices": [
                    "Four point five percent",
                    "Five percent",
                    "Four percent"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the repayment term?",
                  "choices": [
                    "One year",
                    "Ten years",
                    "Five years"
                  ],
                  "answer": 2
                },
                {
                  "q": "What must Mr. Kim do next?",
                  "choices": [
                    "Make a first payment",
                    "Provide more documents",
                    "Visit the branch to sign the agreement"
                  ],
                  "answer": 2
                },
                {
                  "q": "How much time does he have to do this?",
                  "choices": [
                    "Five days",
                    "Thirty days",
                    "Ten business days"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passage": "Order Confirmation: Thank you for your order of 200 units of Product SKU-3391. Your total, including shipping, is 4,850 dollars. Payment is due within 15 days of the invoice date. Estimated delivery is 7 to 10 business days from the order date.",
              "questions": [
                {
                  "q": "How many units were ordered?",
                  "choices": [
                    "200",
                    "300",
                    "150"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the total cost?",
                  "choices": [
                    "5,850 dollars",
                    "4,500 dollars",
                    "4,850 dollars"
                  ],
                  "answer": 2
                },
                {
                  "q": "When is payment due?",
                  "choices": [
                    "Within 30 days",
                    "Within 15 days of the invoice date",
                    "Upon delivery"
                  ],
                  "answer": 1
                },
                {
                  "q": "How long is estimated delivery?",
                  "choices": [
                    "1 to 2 business days",
                    "7 to 10 business days",
                    "One month"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is the product's SKU?",
                  "choices": [
                    "SKU-1339",
                    "SKU-9331",
                    "SKU-3391"
                  ],
                  "answer": 2
                }
              ]
            }
          ],
          "double": [
            {
              "passages": [
                "Purchase Order #PO-2291: Item: Office Desks, Quantity: 40, Unit Price: 120 dollars, Total: 4,800 dollars. Requested Delivery Date: March 15. Ship to: 220 Harbor Road, Warehouse B.",
                "Hello, this confirms receipt of purchase order PO-2291 for 40 office desks. Please note that due to current demand, we can only guarantee delivery by March 22, one week later than requested. Let us know if this revised date works for you. Thank you, Owen Clarke."
              ],
              "questions": [
                {
                  "q": "How many desks were ordered?",
                  "choices": [
                    "40",
                    "20",
                    "400"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the total cost of the order?",
                  "choices": [
                    "1,200 dollars",
                    "4,800 dollars",
                    "4,200 dollars"
                  ],
                  "answer": 1
                },
                {
                  "q": "What was the requested delivery date?",
                  "choices": [
                    "March 1",
                    "March 15",
                    "March 22"
                  ],
                  "answer": 1
                },
                {
                  "q": "What delivery date can Owen guarantee?",
                  "choices": [
                    "March 22",
                    "March 15",
                    "March 8"
                  ],
                  "answer": 0
                },
                {
                  "q": "Why is the delivery delayed?",
                  "choices": [
                    "Bad weather",
                    "Current demand",
                    "A shipping error"
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passages": [
                "Account Summary: Beginning Balance: 3,200 dollars. Deposits: 1,500 dollars. Withdrawals: 900 dollars. Fees: 15 dollars. Ending Balance: 3,785 dollars.",
                "Hello, I reviewed my latest statement and the fee of 15 dollars is unfamiliar to me. Could you explain what this charge is for? I don't recall any activity that would result in a fee. Thank you, Grace Liu."
              ],
              "questions": [
                {
                  "q": "What was the beginning balance?",
                  "choices": [
                    "3,200 dollars",
                    "1,500 dollars",
                    "3,785 dollars"
                  ],
                  "answer": 0
                },
                {
                  "q": "How much was withdrawn?",
                  "choices": [
                    "1,500 dollars",
                    "900 dollars",
                    "15 dollars"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is the ending balance?",
                  "choices": [
                    "3,200 dollars",
                    "3,785 dollars",
                    "4,700 dollars"
                  ],
                  "answer": 1
                },
                {
                  "q": "What does Grace want to know about?",
                  "choices": [
                    "Her interest rate",
                    "The 15-dollar fee",
                    "A missing deposit"
                  ],
                  "answer": 1
                },
                {
                  "q": "Does Grace remember any activity causing the fee?",
                  "choices": [
                    "She caused it intentionally",
                    "No, she does not recall any",
                    "Yes, she remembers clearly"
                  ],
                  "answer": 1
                }
              ]
            }
          ],
          "triple": [
            {
              "passages": [
                "To all department heads: Budget requests for next fiscal year are due by October 15. Requests should not exceed a 10 percent increase over the current year's budget without written justification.",
                "Hi Finance Team, our department needs a 15 percent increase next year due to a new project launch. What kind of justification do you need from us, and is there a specific form to use?",
                "Hello, thank you for reaching out. For increases above 10 percent, please submit a one-page justification explaining the project and expected costs, along with the standard budget request form. Both are due by October 15."
              ],
              "questions": [
                {
                  "q": "What is the deadline for budget requests?",
                  "choices": [
                    "September 30",
                    "October 15",
                    "November 1"
                  ],
                  "answer": 1
                },
                {
                  "q": "What increase is allowed without justification?",
                  "choices": [
                    "10 percent",
                    "20 percent",
                    "15 percent"
                  ],
                  "answer": 0
                },
                {
                  "q": "Why does the department need a 15 percent increase?",
                  "choices": [
                    "Staff bonuses",
                    "Rising rent costs",
                    "A new project launch"
                  ],
                  "answer": 2
                },
                {
                  "q": "What must be submitted for increases above 10 percent?",
                  "choices": [
                    "Only a verbal explanation",
                    "Approval from the CEO",
                    "A one-page justification and the standard form"
                  ],
                  "answer": 2
                },
                {
                  "q": "When is the justification due?",
                  "choices": [
                    "End of the fiscal year",
                    "October 15",
                    "Within 30 days of the request"
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passages": [
                "Wholesale Price List: Item A - 12 dollars per unit (minimum order 50). Item B - 8 dollars per unit (minimum order 100). Bulk discount: 5 percent off orders over 1,000 dollars.",
                "Hello, I'd like to order 60 units of Item A and 150 units of Item B. Would this order qualify for the bulk discount? Thanks, Farah Yusuf.",
                "Hi Farah, your order totals 60 x 12 = 720 dollars for Item A and 150 x 8 = 1,200 dollars for Item B, for a combined total of 1,920 dollars. Since this exceeds 1,000 dollars, you do qualify for the 5 percent bulk discount."
              ],
              "questions": [
                {
                  "q": "What is the minimum order for Item A?",
                  "choices": [
                    "10 units",
                    "100 units",
                    "50 units"
                  ],
                  "answer": 2
                },
                {
                  "q": "How many units of Item A does Farah want?",
                  "choices": [
                    "60",
                    "150",
                    "50"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the combined order total before discount?",
                  "choices": [
                    "1,920 dollars",
                    "720 dollars",
                    "1,200 dollars"
                  ],
                  "answer": 0
                },
                {
                  "q": "Does Farah's order qualify for the bulk discount?",
                  "choices": [
                    "Yes, because it exceeds 1,000 dollars",
                    "Only Item B qualifies",
                    "No, it is too small"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the bulk discount amount?",
                  "choices": [
                    "10 percent",
                    "15 percent",
                    "5 percent"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passages": [
                "Notice: Your account balance of 1,450 dollars is now 45 days past due. Please remit payment immediately to avoid additional late fees or service suspension.",
                "Hello, I apologize for the delay. Due to a temporary cash flow issue, could we arrange a payment plan instead of paying the full amount at once?",
                "We understand, and we can offer a payment plan of three monthly installments of 483.33 dollars each, starting next week. Please confirm if this works for you, and we will send the updated agreement."
              ],
              "questions": [
                {
                  "q": "How much is the overdue balance?",
                  "choices": [
                    "1,450 dollars",
                    "450 dollars",
                    "1,045 dollars"
                  ],
                  "answer": 0
                },
                {
                  "q": "How many days past due is the account?",
                  "choices": [
                    "90 days",
                    "15 days",
                    "45 days"
                  ],
                  "answer": 2
                },
                {
                  "q": "What does the customer request?",
                  "choices": [
                    "A full refund",
                    "A payment plan",
                    "A discount"
                  ],
                  "answer": 1
                },
                {
                  "q": "How many installments are offered?",
                  "choices": [
                    "Three",
                    "Two",
                    "Four"
                  ],
                  "answer": 0
                },
                {
                  "q": "When does the first installment start?",
                  "choices": [
                    "Next month",
                    "Next week",
                    "Immediately"
                  ],
                  "answer": 1
                }
              ]
            }
          ]
        }
      }
    },
    {
      "set": 4,
      "title": "ชุดที่ 4 · HR & Technology",
      "listening": {
        "part1": [
          {
            "scene": "ในห้องเล็ก ชายและหญิงนั่งคนละฝั่งโต๊ะ ฝ่ายหนึ่งถือแฟ้มเปิดอ่าน อีกฝ่ายนั่งฟังโดยวางมือบนตัก",
            "choices": [
              "One person is leaving the room.",
              "Two people are looking at a computer.",
              "Two people are facing each other.",
              "Résumés are being printed."
            ],
            "answer": 2,
            "why": "นั่งหันหน้าเข้าหากันคือสิ่งที่เห็นชัดที่สุด ไม่มีคอมพิวเตอร์หรือเครื่องพิมพ์ในภาพ และไม่มีใครลุกออกไป",
            "art": "interview_desk"
          },
          {
            "scene": "ห้องเซิร์ฟเวอร์ ชายคนหนึ่งยืนหันหน้าเข้าตู้แร็ค มือทั้งสองจับอุปกรณ์ที่กำลังเลื่อนเข้าช่อง มีสายไฟห้อยอยู่ด้านข้าง",
            "choices": [
              "A man is watching a monitor.",
              "A man is unplugging a cable.",
              "Equipment is being installed.",
              "The room is being cleaned."
            ],
            "answer": 2,
            "why": "ข้อนี้ being installed ถูก เพราะมีคนกำลังติดตั้งอยู่จริงในภาพ ซึ่งเป็นข้อยกเว้นที่ต้องแยกให้ออกจากกรณีที่ไม่มีคนทำ",
            "art": "server_install"
          },
          {
            "scene": "ห้องอบรม คนหลายคนนั่งเรียงเป็นแถวหันหน้าไปทางหน้าห้อง แต่ละคนมีสมุดวางบนตัก ด้านหน้ามีจอฉายภาพ",
            "choices": [
              "People are seated in rows.",
              "People are standing in a circle.",
              "People are erasing a whiteboard.",
              "Notebooks are being distributed."
            ],
            "answer": 0,
            "why": "สมุดอยู่กับแต่ละคนแล้ว ไม่มีใครกำลังแจก จึงเป็นกับดัก being + ช่อง 3 และไม่มีใครยืนหรือลบกระดาน",
            "art": "orientation_rows"
          },
          {
            "scene": "โต๊ะทำงาน ผู้หญิงคนหนึ่งนั่งหน้าจอสองจอที่ตั้งเรียงกัน มือวางบนคีย์บอร์ด สายตามองไปที่จอด้านซ้าย",
            "choices": [
              "A woman is working at a computer.",
              "A woman is answering a phone.",
              "The desk is being moved.",
              "A woman is adjusting a monitor."
            ],
            "answer": 0,
            "why": "adjusting แปลว่ากำลังปรับจอ ซึ่งต่างจากการมองจอ เป็นกับดักที่ใช้ของชิ้นเดียวกันแต่กริยาคนละอย่าง",
            "art": "two_monitors"
          },
          {
            "scene": "ในห้องโถง คนจำนวนมากยืนและปรบมือ ด้านหน้ามีชายคนหนึ่งยืนถือโล่รางวัลอยู่บนเวทีเล็ก",
            "choices": [
              "An award is being presented.",
              "An audience is applauding.",
              "People are taking their seats.",
              "A man is giving a speech."
            ],
            "answer": 1,
            "why": "โล่อยู่ในมือผู้รับแล้ว การมอบจบไปแล้ว being presented จึงไม่ตรงกับจังหวะในภาพ และคนกำลังยืน ไม่ได้นั่งลง",
            "art": "award_applause"
          },
          {
            "scene": "ใต้โต๊ะทำงาน ชายคนหนึ่งนั่งยองๆ ถือสายไฟพันกันเป็นก้อนอยู่ในมือ มีปลั๊กพ่วงวางอยู่บนพื้นข้างๆ",
            "choices": [
              "The cables are being cut.",
              "A man is climbing a ladder.",
              "A man is working under a desk.",
              "A man is moving a chair."
            ],
            "answer": 2,
            "why": "cables กับ tables เสียงใกล้กัน ระวังฟังสลับ และไม่มีใครตัดสาย เขาแค่แกะสายที่พันกัน",
            "art": "under_desk_cables"
          }
        ],
        "part2": [
          {
            "q": "Have you submitted your application yet?",
            "choices": [
              "In the HR office.",
              "She's the manager.",
              "Yes, last week."
            ],
            "answer": 2
          },
          {
            "q": "Who should I contact about the job opening?",
            "choices": [
              "The HR manager.",
              "Next Monday.",
              "It's a good salary."
            ],
            "answer": 0
          },
          {
            "q": "Why is the system running so slowly?",
            "choices": [
              "In the server room.",
              "Yes, I restarted it.",
              "It needs an update."
            ],
            "answer": 2
          },
          {
            "q": "When does the training program begin?",
            "choices": [
              "On the first of March.",
              "About twenty people.",
              "In room 210."
            ],
            "answer": 0
          },
          {
            "q": "Could you help me reset my password?",
            "choices": [
              "Of course, one moment.",
              "It's a new laptop.",
              "At the help desk."
            ],
            "answer": 0
          },
          {
            "q": "How many candidates did we interview?",
            "choices": [
              "Yesterday afternoon.",
              "In the meeting room.",
              "Around fifteen."
            ],
            "answer": 2
          },
          {
            "q": "Is the new hire starting this week?",
            "choices": [
              "She's very experienced.",
              "Yes, on Monday.",
              "In the sales department."
            ],
            "answer": 1
          },
          {
            "q": "Why did the server crash?",
            "choices": [
              "This morning.",
              "An overload during peak hours.",
              "In the data center."
            ],
            "answer": 1
          },
          {
            "q": "Who's responsible for onboarding new staff?",
            "choices": [
              "Next week.",
              "It takes two days.",
              "The HR coordinator."
            ],
            "answer": 2
          },
          {
            "q": "Could you back up these files before the update?",
            "choices": [
              "They're important.",
              "Sure, I'll do it now.",
              "In the cloud."
            ],
            "answer": 1
          },
          {
            "q": "How long is the probation period?",
            "choices": [
              "Very strict.",
              "For new hires.",
              "Three months."
            ],
            "answer": 2
          },
          {
            "q": "Did IT fix the network issue?",
            "choices": [
              "In the server room.",
              "About an hour ago.",
              "Yes, it's working now."
            ],
            "answer": 2
          },
          {
            "q": "When is the performance review scheduled?",
            "choices": [
              "In HR's office.",
              "Next Friday.",
              "About thirty minutes."
            ],
            "answer": 1
          },
          {
            "q": "Why was the candidate rejected?",
            "choices": [
              "Last week.",
              "She lacked the required experience.",
              "By the manager."
            ],
            "answer": 1
          },
          {
            "q": "Could you install this software on my laptop?",
            "choices": [
              "It's compatible.",
              "Sure, give me a few minutes.",
              "Yes, I bought it."
            ],
            "answer": 1
          },
          {
            "q": "How many employees work remotely?",
            "choices": [
              "About a third of the staff.",
              "Very flexible.",
              "Since last year."
            ],
            "answer": 0
          },
          {
            "q": "Is the job posting still open?",
            "choices": [
              "It pays well.",
              "Yes, until Friday.",
              "In the marketing department."
            ],
            "answer": 1
          },
          {
            "q": "Why does my computer keep freezing?",
            "choices": [
              "It might need more memory.",
              "Every morning.",
              "Since yesterday."
            ],
            "answer": 0
          },
          {
            "q": "Who approved the new hire's salary?",
            "choices": [
              "The HR director.",
              "By email.",
              "Two weeks ago."
            ],
            "answer": 0
          },
          {
            "q": "Could you send me the login credentials?",
            "choices": [
              "Sure, I'll email them now.",
              "At the help desk.",
              "They're confidential."
            ],
            "answer": 0
          },
          {
            "q": "How was the interview process?",
            "choices": [
              "Three rounds.",
              "About an hour long.",
              "It went smoothly."
            ],
            "answer": 2
          },
          {
            "q": "When will the new software be deployed?",
            "choices": [
              "It's user-friendly.",
              "Next Monday.",
              "In the IT department."
            ],
            "answer": 1
          },
          {
            "q": "Why is the recruiter calling again?",
            "choices": [
              "This afternoon.",
              "To schedule a second interview.",
              "About the salary."
            ],
            "answer": 1
          },
          {
            "q": "Could I get access to the shared drive?",
            "choices": [
              "It's very large.",
              "Yes, I'll set that up.",
              "Only for managers."
            ],
            "answer": 1
          },
          {
            "q": "How do I update my emergency contact?",
            "choices": [
              "Ask your supervisor.",
              "This week.",
              "Through the HR portal."
            ],
            "answer": 2
          }
        ],
        "part3": [
          {
            "lines": [
              "W: I'd like to schedule an interview for the analyst position.",
              "M: Certainly. Are you available on Thursday morning?",
              "W: Thursday works, but I'd prefer the afternoon.",
              "M: No problem. Let's say two o'clock on Thursday."
            ],
            "questions": [
              {
                "q": "What are the speakers arranging?",
                "choices": [
                  "A team lunch",
                  "A job interview",
                  "A product demo"
                ],
                "answer": 1
              },
              {
                "q": "When will the interview take place?",
                "choices": [
                  "Thursday morning",
                  "Friday afternoon",
                  "Thursday at two o'clock"
                ],
                "answer": 2
              },
              {
                "q": "What position is the interview for?",
                "choices": [
                  "Receptionist",
                  "Analyst",
                  "Manager"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: My computer won't connect to the network.",
              "W: Have you tried restarting it?",
              "M: Yes, twice, but it still doesn't work.",
              "W: Okay, I'll send someone from IT to your desk."
            ],
            "questions": [
              {
                "q": "What is the man's problem?",
                "choices": [
                  "He forgot his password",
                  "His printer is broken",
                  "His computer won't connect to the network"
                ],
                "answer": 2
              },
              {
                "q": "What will the woman do?",
                "choices": [
                  "Replace the computer",
                  "Send someone from IT",
                  "Restart the server"
                ],
                "answer": 1
              },
              {
                "q": "What has the man already tried?",
                "choices": [
                  "Using a different computer",
                  "Restarting his computer twice",
                  "Calling IT"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "W: We'd like to offer you the position at sixty thousand a year.",
              "M: Thank you, is there any flexibility on that number?",
              "W: We could go up to sixty-three thousand.",
              "M: That works for me, I accept the offer."
            ],
            "questions": [
              {
                "q": "What are the speakers discussing?",
                "choices": [
                  "A performance bonus",
                  "A relocation package",
                  "A salary offer"
                ],
                "answer": 2
              },
              {
                "q": "What was the man's response to the initial offer?",
                "choices": [
                  "He rejected it",
                  "He accepted immediately",
                  "He asked about flexibility"
                ],
                "answer": 2
              },
              {
                "q": "What is the final agreed salary?",
                "choices": [
                  "Sixty-three thousand",
                  "Sixty-five thousand",
                  "Sixty thousand"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "M: When is the new HR software going live?",
              "W: It's scheduled for next Monday.",
              "M: Will there be training beforehand?",
              "W: Yes, two sessions this week."
            ],
            "questions": [
              {
                "q": "What are they discussing?",
                "choices": [
                  "A new software launch",
                  "An office move",
                  "A hiring freeze"
                ],
                "answer": 0
              },
              {
                "q": "When will the software go live?",
                "choices": [
                  "Next month",
                  "Next Monday",
                  "This Friday"
                ],
                "answer": 1
              },
              {
                "q": "What is happening this week?",
                "choices": [
                  "Interviews",
                  "A system shutdown",
                  "Training sessions"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "W: An employee reported feeling overworked on her team.",
              "M: Did she specify what's causing the issue?",
              "W: Mainly the recent increase in overtime hours.",
              "M: Let's schedule a meeting with her supervisor."
            ],
            "questions": [
              {
                "q": "What is the employee's complaint about?",
                "choices": [
                  "Low pay",
                  "Feeling overworked",
                  "Poor communication"
                ],
                "answer": 1
              },
              {
                "q": "What is the main cause mentioned?",
                "choices": [
                  "Increased overtime hours",
                  "A difficult coworker",
                  "Lack of training"
                ],
                "answer": 0
              },
              {
                "q": "What will they do next?",
                "choices": [
                  "Give her a raise",
                  "Schedule a meeting with the supervisor",
                  "Transfer her to another team"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: I submitted a ticket for my broken monitor two days ago.",
              "W: Let me check the status for you.",
              "M: It still shows as pending.",
              "W: I'll escalate this and get someone to you today."
            ],
            "questions": [
              {
                "q": "What is the man's issue?",
                "choices": [
                  "A locked account",
                  "A slow computer",
                  "A broken monitor"
                ],
                "answer": 2
              },
              {
                "q": "How long ago did he submit the ticket?",
                "choices": [
                  "One week ago",
                  "This morning",
                  "Two days ago"
                ],
                "answer": 2
              },
              {
                "q": "What will the woman do?",
                "choices": [
                  "Escalate the ticket",
                  "Close the ticket",
                  "Order a new monitor"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: Thank you for agreeing to this exit interview.",
              "M: Of course, happy to share my feedback.",
              "W: What was your main reason for leaving?",
              "M: I received a better opportunity closer to home."
            ],
            "questions": [
              {
                "q": "What kind of meeting is this?",
                "choices": [
                  "An exit interview",
                  "A hiring interview",
                  "A performance review"
                ],
                "answer": 0
              },
              {
                "q": "What is the man asked about?",
                "choices": [
                  "His reason for leaving",
                  "His job title",
                  "His salary expectations"
                ],
                "answer": 0
              },
              {
                "q": "Why is the man leaving?",
                "choices": [
                  "A conflict with his manager",
                  "A pay cut",
                  "A better opportunity closer to home"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: We need to back up the entire database before the migration.",
              "W: How long will that take?",
              "M: Roughly three hours, depending on the size.",
              "W: Let's schedule it for tonight to avoid downtime."
            ],
            "questions": [
              {
                "q": "What needs to happen before the migration?",
                "choices": [
                  "A database backup",
                  "A software update",
                  "A staff meeting"
                ],
                "answer": 0
              },
              {
                "q": "How long will the backup take?",
                "choices": [
                  "Thirty minutes",
                  "All day",
                  "Roughly three hours"
                ],
                "answer": 2
              },
              {
                "q": "When will they schedule the backup?",
                "choices": [
                  "Tonight",
                  "Tomorrow morning",
                  "Next week"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: I still haven't received my employee badge.",
              "M: I'm sorry about that, let me check with security.",
              "W: I've been here for a week already.",
              "M: I'll make sure you get it by tomorrow."
            ],
            "questions": [
              {
                "q": "What is the woman's problem?",
                "choices": [
                  "Her badge doesn't work",
                  "She hasn't received her badge",
                  "She lost her badge"
                ],
                "answer": 1
              },
              {
                "q": "How long has she been waiting?",
                "choices": [
                  "A month",
                  "A day",
                  "A week"
                ],
                "answer": 2
              },
              {
                "q": "What does the man promise?",
                "choices": [
                  "He can't help her",
                  "She'll get it by tomorrow",
                  "She'll get it today"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: I heard the marketing team is being restructured.",
              "W: Yes, two teams are merging into one.",
              "M: Will anyone lose their job?",
              "W: No, everyone is being reassigned to new roles."
            ],
            "questions": [
              {
                "q": "What is happening to the marketing team?",
                "choices": [
                  "It is being expanded",
                  "It is being restructured",
                  "It is being eliminated"
                ],
                "answer": 1
              },
              {
                "q": "What is happening to two teams?",
                "choices": [
                  "They are being renamed",
                  "They are merging into one",
                  "They are being separated"
                ],
                "answer": 1
              },
              {
                "q": "What happens to the employees?",
                "choices": [
                  "They are reassigned to new roles",
                  "They are demoted",
                  "They are laid off"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: Have you completed the cybersecurity training yet?",
              "M: Not yet, when is it due?",
              "W: By the end of this week.",
              "M: I'll finish it today then."
            ],
            "questions": [
              {
                "q": "What training is being discussed?",
                "choices": [
                  "Cybersecurity training",
                  "Sales training",
                  "Safety training"
                ],
                "answer": 0
              },
              {
                "q": "When is the training due?",
                "choices": [
                  "By the end of this week",
                  "Today",
                  "Next month"
                ],
                "answer": 0
              },
              {
                "q": "What will the man do?",
                "choices": [
                  "Ask for an extension",
                  "Finish it today",
                  "Skip the training"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: I'd like to request permission to work remotely two days a week.",
              "W: Let me check with your manager first.",
              "M: Of course, take your time.",
              "W: I'll get back to you by Friday."
            ],
            "questions": [
              {
                "q": "What is the man requesting?",
                "choices": [
                  "A schedule change",
                  "A salary increase",
                  "Permission to work remotely"
                ],
                "answer": 2
              },
              {
                "q": "What will the woman do first?",
                "choices": [
                  "Deny the request",
                  "Approve it immediately",
                  "Check with his manager"
                ],
                "answer": 2
              },
              {
                "q": "When will she respond?",
                "choices": [
                  "Next month",
                  "By Friday",
                  "Today"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "W: My laptop is over five years old and very slow.",
              "M: I'll put in a request for a replacement.",
              "W: How long does that usually take?",
              "M: About two weeks for approval and delivery."
            ],
            "questions": [
              {
                "q": "What is the woman's problem?",
                "choices": [
                  "Her laptop won't turn on",
                  "Her laptop was stolen",
                  "Her laptop is old and slow"
                ],
                "answer": 2
              },
              {
                "q": "What will the man do?",
                "choices": [
                  "Request a replacement",
                  "Order new software",
                  "Repair the laptop"
                ],
                "answer": 0
              },
              {
                "q": "How long will it take?",
                "choices": [
                  "A few days",
                  "About two weeks",
                  "One month"
                ],
                "answer": 1
              }
            ]
          }
        ],
        "part4": [
          {
            "script": "Welcome to the company. During today's orientation, you will receive your employee badge, set up your email account, and take a short tour of the building. If you have any questions, your team leader will be happy to help.",
            "questions": [
              {
                "q": "What is the purpose of the talk?",
                "choices": [
                  "To report a problem",
                  "To welcome new employees at orientation",
                  "To announce a promotion"
                ],
                "answer": 1
              },
              {
                "q": "Which activity is NOT mentioned?",
                "choices": [
                  "Taking a building tour",
                  "Signing a new contract",
                  "Receiving an employee badge"
                ],
                "answer": 1
              },
              {
                "q": "Who can answer questions?",
                "choices": [
                  "Security staff",
                  "The team leader",
                  "The CEO"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Please note that the email system will be down for maintenance this Saturday, from midnight to six in the morning. During this time, you will not be able to send or receive messages. We recommend saving any important drafts before Friday evening.",
            "questions": [
              {
                "q": "When will the email system be unavailable?",
                "choices": [
                  "All weekend",
                  "Saturday from midnight to six a.m.",
                  "Friday afternoon"
                ],
                "answer": 1
              },
              {
                "q": "What are employees advised to do?",
                "choices": [
                  "Work from home",
                  "Save important drafts before Friday evening",
                  "Turn off their computers"
                ],
                "answer": 1
              },
              {
                "q": "What causes the downtime?",
                "choices": [
                  "A security breach",
                  "A power outage",
                  "Scheduled maintenance"
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "This is a reminder that open enrollment for employee benefits ends this Friday. Please log into the benefits portal to review and confirm your selections for health insurance, dental, and retirement contributions. Changes cannot be made after the deadline.",
            "questions": [
              {
                "q": "What is ending this Friday?",
                "choices": [
                  "Open enrollment for benefits",
                  "A training program",
                  "The fiscal year"
                ],
                "answer": 0
              },
              {
                "q": "Where should employees go to make changes?",
                "choices": [
                  "Their manager",
                  "The benefits portal",
                  "The HR office in person"
                ],
                "answer": 1
              },
              {
                "q": "What happens after the deadline?",
                "choices": [
                  "Enrollment automatically renews",
                  "A late fee applies",
                  "Changes cannot be made"
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "Good afternoon, everyone. Today I want to share some exciting updates about our technology roadmap for next year. We'll be investing heavily in artificial intelligence tools to improve efficiency across all departments. More details will follow in next month's newsletter.",
            "questions": [
              {
                "q": "What is the main topic of this talk?",
                "choices": [
                  "The technology roadmap for next year",
                  "A merger announcement",
                  "A hiring freeze"
                ],
                "answer": 0
              },
              {
                "q": "What will the company invest in?",
                "choices": [
                  "New office furniture",
                  "Artificial intelligence tools",
                  "A new logo"
                ],
                "answer": 1
              },
              {
                "q": "Where will more details be shared?",
                "choices": [
                  "Next month's newsletter",
                  "A follow-up meeting",
                  "The company website"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Attention all staff, our customer database system will be upgraded this weekend. The system will be unavailable from six on Saturday evening until nine on Sunday morning. Please complete any urgent data entry before this window begins.",
            "questions": [
              {
                "q": "What is happening this weekend?",
                "choices": [
                  "A security audit",
                  "A database system upgrade",
                  "A staff meeting"
                ],
                "answer": 1
              },
              {
                "q": "When will the system be unavailable?",
                "choices": [
                  "Saturday evening until Sunday morning",
                  "Friday only",
                  "All weekend"
                ],
                "answer": 0
              },
              {
                "q": "What should staff do beforehand?",
                "choices": [
                  "Back up their laptops",
                  "Change their passwords",
                  "Complete urgent data entry"
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "Hi, this is Sandra from Human Resources. Welcome to the team! I wanted to let you know your start date is confirmed for next Monday. Please arrive by nine in the morning and bring a photo ID for your badge. Looking forward to meeting you.",
            "questions": [
              {
                "q": "Who is Sandra?",
                "choices": [
                  "An IT technician",
                  "Someone from Human Resources",
                  "The new employee's manager"
                ],
                "answer": 1
              },
              {
                "q": "What is confirmed?",
                "choices": [
                  "The salary",
                  "The start date",
                  "The job title"
                ],
                "answer": 1
              },
              {
                "q": "What should the listener bring?",
                "choices": [
                  "A laptop",
                  "A resume",
                  "A photo ID"
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "As part of our updated security policy, all employees will be required to use two-factor authentication starting next month. You will receive setup instructions by email. Please complete the setup before the deadline to avoid being locked out of your account.",
            "questions": [
              {
                "q": "What new requirement is being introduced?",
                "choices": [
                  "Two-factor authentication",
                  "Biometric login",
                  "A longer password"
                ],
                "answer": 0
              },
              {
                "q": "How will employees receive instructions?",
                "choices": [
                  "During a meeting",
                  "By email",
                  "In a printed memo"
                ],
                "answer": 1
              },
              {
                "q": "What happens if setup isn't completed?",
                "choices": [
                  "Employees may be locked out",
                  "Nothing happens",
                  "A fine is charged"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "We're excited to announce this year's company picnic will be held on the last Saturday of June at Riverside Park. Food, drinks, and activities for the whole family will be provided. Please RSVP through the HR portal by June 10 so we can plan accordingly.",
            "questions": [
              {
                "q": "What event is being announced?",
                "choices": [
                  "A retirement celebration",
                  "A holiday party",
                  "A company picnic"
                ],
                "answer": 2
              },
              {
                "q": "Where will the event take place?",
                "choices": [
                  "Riverside Park",
                  "The office rooftop",
                  "A downtown hotel"
                ],
                "answer": 0
              },
              {
                "q": "How should employees RSVP?",
                "choices": [
                  "Through the HR portal",
                  "By replying to the email",
                  "By calling HR"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Please note that access to the server room now requires a keycard and manager approval. This change is part of our new security protocol. If you need access, please submit a request through the IT service desk at least two business days in advance.",
            "questions": [
              {
                "q": "What is now required for server room access?",
                "choices": [
                  "A keycard and manager approval",
                  "Nothing has changed",
                  "A written form only"
                ],
                "answer": 0
              },
              {
                "q": "Why was this change made?",
                "choices": [
                  "Cost savings",
                  "A new security protocol",
                  "A recent theft"
                ],
                "answer": 1
              },
              {
                "q": "How far in advance should requests be submitted?",
                "choices": [
                  "Same day",
                  "One week",
                  "At least two business days"
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "I'm pleased to announce that this quarter's Employee of the Quarter award goes to the customer support team for their outstanding response times. Please join us in the main hallway at three o'clock today for a small celebration.",
            "questions": [
              {
                "q": "What is being announced?",
                "choices": [
                  "An employee recognition award",
                  "A department closure",
                  "A new hire"
                ],
                "answer": 0
              },
              {
                "q": "Who won the award?",
                "choices": [
                  "The IT team",
                  "The sales team",
                  "The customer support team"
                ],
                "answer": 2
              },
              {
                "q": "What time is the celebration?",
                "choices": [
                  "Five o'clock",
                  "Three o'clock",
                  "Noon"
                ],
                "answer": 1
              }
            ]
          }
        ]
      },
      "reading": {
        "part5": [
          {
            "sentence": "The company offers excellent ______ to its employees, including health insurance.",
            "choices": [
              "beneficial",
              "benefit",
              "benefits",
              "benefited"
            ],
            "answer": 2
          },
          {
            "sentence": "All new staff must complete the ______ program within their first month.",
            "choices": [
              "training",
              "trained",
              "trainer",
              "train"
            ],
            "answer": 0
          },
          {
            "sentence": "The technician will ______ the software this afternoon.",
            "choices": [
              "updates",
              "updated",
              "updating",
              "update"
            ],
            "answer": 3
          },
          {
            "sentence": "Candidates ______ experience in marketing are preferred.",
            "choices": [
              "among",
              "of",
              "onto",
              "with"
            ],
            "answer": 3
          },
          {
            "sentence": "The manager was impressed ______ her presentation skills.",
            "choices": [
              "by",
              "to",
              "for",
              "at"
            ],
            "answer": 0
          },
          {
            "sentence": "Employees are encouraged to ______ their passwords regularly.",
            "choices": [
              "changed",
              "changing",
              "change",
              "changes"
            ],
            "answer": 2
          },
          {
            "sentence": "The interview went well, ______ she felt confident about the job.",
            "choices": [
              "but",
              "so",
              "despite",
              "although"
            ],
            "answer": 1
          },
          {
            "sentence": "Our new system is far more ______ than the old one.",
            "choices": [
              "reliability",
              "rely",
              "reliable",
              "reliably"
            ],
            "answer": 2
          },
          {
            "sentence": "The HR department ______ all new hire paperwork.",
            "choices": [
              "process",
              "processed",
              "processes",
              "processing"
            ],
            "answer": 2
          },
          {
            "sentence": "Employees must complete the online course ______ their first week.",
            "choices": [
              "between",
              "among",
              "within",
              "through"
            ],
            "answer": 2
          },
          {
            "sentence": "The recruiter ______ over fifty resumes last week.",
            "choices": [
              "to review",
              "reviewed",
              "reviewing",
              "review"
            ],
            "answer": 1
          },
          {
            "sentence": "The new system allows employees to ______ their own schedules.",
            "choices": [
              "management",
              "manager",
              "managed",
              "manage"
            ],
            "answer": 3
          },
          {
            "sentence": "Staff ______ complete the survey will be entered into a prize draw.",
            "choices": [
              "whose",
              "whom",
              "which",
              "who"
            ],
            "answer": 3
          },
          {
            "sentence": "The IT department is ______ for maintaining all company devices.",
            "choices": [
              "responsibly",
              "responsibility",
              "responsible",
              "respond"
            ],
            "answer": 2
          },
          {
            "sentence": "Please back up your files ______ the system update.",
            "choices": [
              "unless",
              "before",
              "although",
              "despite"
            ],
            "answer": 1
          },
          {
            "sentence": "The new hire orientation ______ next Monday.",
            "choices": [
              "began",
              "begin",
              "begins",
              "beginning"
            ],
            "answer": 2
          },
          {
            "sentence": "Our servers experienced a brief ______ last night.",
            "choices": [
              "outing",
              "outage",
              "outed",
              "out"
            ],
            "answer": 1
          },
          {
            "sentence": "The company values ______ and teamwork above all else.",
            "choices": [
              "honestly",
              "honesty",
              "honester",
              "honest"
            ],
            "answer": 1
          },
          {
            "sentence": "Employees should report any technical issues ______ the help desk.",
            "choices": [
              "at",
              "on",
              "in",
              "to"
            ],
            "answer": 3
          },
          {
            "sentence": "The training session will be ______ recorded for future reference.",
            "choices": [
              "digitally",
              "digital",
              "digitization",
              "digitize"
            ],
            "answer": 0
          },
          {
            "sentence": "The candidate's resume ______ strong leadership experience.",
            "choices": [
              "highlighted",
              "highlighting",
              "highlight",
              "highlights"
            ],
            "answer": 3
          },
          {
            "sentence": "We ______ the interview process to make it more efficient.",
            "choices": [
              "streamlined",
              "streamlining",
              "streamlines",
              "streamline"
            ],
            "answer": 0
          },
          {
            "sentence": "The security update ______ automatically on all company laptops.",
            "choices": [
              "installs",
              "install",
              "installing",
              "installed"
            ],
            "answer": 0
          },
          {
            "sentence": "New employees ______ a mentor during their first three months.",
            "choices": [
              "assigns",
              "assign",
              "are assigned",
              "assigning"
            ],
            "answer": 2
          },
          {
            "sentence": "The IT policy requires ______ passwords every ninety days.",
            "choices": [
              "update",
              "updating",
              "updates",
              "updated"
            ],
            "answer": 1
          },
          {
            "sentence": "Our recruitment team is ______ for a new software developer.",
            "choices": [
              "search",
              "searched",
              "searching",
              "searches"
            ],
            "answer": 2
          },
          {
            "sentence": "The company's turnover rate has ______ significantly this year.",
            "choices": [
              "decreased",
              "decreases",
              "decreasing",
              "decrease"
            ],
            "answer": 0
          },
          {
            "sentence": "Employees are ______ to use strong, unique passwords.",
            "choices": [
              "require",
              "requiring",
              "required",
              "requires"
            ],
            "answer": 2
          },
          {
            "sentence": "The onboarding checklist ______ several important steps.",
            "choices": [
              "include",
              "includes",
              "included",
              "including"
            ],
            "answer": 1
          },
          {
            "sentence": "All laptops must be ______ before being issued to new staff.",
            "choices": [
              "configure",
              "configuring",
              "configures",
              "configured"
            ],
            "answer": 3
          }
        ],
        "part6": [
          {
            "passage": "To all employees: The company will launch a new online learning platform next week. Through this platform, staff can ___1___ courses to improve their skills at any time. Completing courses may also help employees ___2___ for promotions. Login details will be sent to your email on Monday. Employees are ___3___ encouraged to complete at least one course per quarter. For technical support, please contact the IT ___4___ desk.",
            "blanks": [
              {
                "choices": [
                  "taking",
                  "taken",
                  "takes",
                  "take"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "qualified",
                  "qualify",
                  "qualifying",
                  "qualification"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "strengthen",
                  "strongly",
                  "strong",
                  "strength"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "helping",
                  "help",
                  "helps",
                  "helped"
                ],
                "answer": 1
              }
            ]
          },
          {
            "passage": "To all staff: We are ___1___ a new two-factor authentication system starting next month to improve account security. All employees will need to ___2___ their mobile number to receive verification codes. This extra step will only ___3___ a few seconds when logging in. If you experience any issues, our IT team is ___4___ to assist.",
            "blanks": [
              {
                "choices": [
                  "introducing",
                  "introduced",
                  "introduces",
                  "introduce"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "registration",
                  "registered",
                  "register",
                  "registering"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "takes",
                  "taken",
                  "taking",
                  "take"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "availed",
                  "avail",
                  "available",
                  "availability"
                ],
                "answer": 2
              }
            ]
          },
          {
            "passage": "Dear Employees, open enrollment for next year's benefits ___1___ on November 1 and closes on November 15. During this period, you may ___2___ your health insurance plan, add dependents, or adjust your retirement contributions. Any changes made ___3___ this window will take effect on January 1. Please ___4___ the benefits portal to make your selections.",
            "blanks": [
              {
                "choices": [
                  "opening",
                  "opened",
                  "opens",
                  "open"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "changes",
                  "changing",
                  "change",
                  "changed"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "during",
                  "since",
                  "although",
                  "despite"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "visiting",
                  "visits",
                  "visited",
                  "visit"
                ],
                "answer": 3
              }
            ]
          },
          {
            "passage": "To all managers: Please review the updated remote work policy ___1___ before discussing it with your teams. Employees requesting remote work must have their schedule ___2___ in advance. All remote employees must remain ___3___ during core business hours. Questions about the policy should be ___4___ to Human Resources.",
            "blanks": [
              {
                "choices": [
                  "careful",
                  "carefully",
                  "cares",
                  "care"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "approves",
                  "approved",
                  "approving",
                  "approve"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "reachable",
                  "reaching",
                  "reach",
                  "reached"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "direct",
                  "directing",
                  "directed",
                  "directs"
                ],
                "answer": 2
              }
            ]
          }
        ],
        "part7": {
          "single": [
            {
              "passage": "Marketing Assistant Wanted. Bright Media is seeking a full-time marketing assistant to join our growing team. The ideal candidate has strong communication skills and at least one year of experience. Interested applicants should send a resume and cover letter to our HR office by June 20.",
              "questions": [
                {
                  "q": "What position is being advertised?",
                  "choices": [
                    "Marketing assistant",
                    "Sales manager",
                    "IT technician"
                  ],
                  "answer": 0
                },
                {
                  "q": "What must applicants do?",
                  "choices": [
                    "Send a resume and cover letter by June 20",
                    "Call the office",
                    "Attend an open house"
                  ],
                  "answer": 0
                },
                {
                  "q": "What skill is required?",
                  "choices": [
                    "Coding experience",
                    "Strong communication skills",
                    "A driver's license"
                  ],
                  "answer": 1
                },
                {
                  "q": "How much experience is required?",
                  "choices": [
                    "Five years",
                    "No experience needed",
                    "At least one year"
                  ],
                  "answer": 2
                },
                {
                  "q": "Where should applications be sent?",
                  "choices": [
                    "The marketing director",
                    "The HR office",
                    "An online portal"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is the application deadline?",
                  "choices": [
                    "June 1",
                    "June 20",
                    "July 1"
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passage": "IT Reminder: To keep our systems secure, all employees are required to change their passwords every 90 days. Your current password will expire on Friday. Please update it before then to avoid being locked out of your account. Contact the help desk if you need assistance.",
              "questions": [
                {
                  "q": "How often must passwords be changed?",
                  "choices": [
                    "Every month",
                    "Every 90 days",
                    "Once a year"
                  ],
                  "answer": 1
                },
                {
                  "q": "What may happen if the password is not updated?",
                  "choices": [
                    "The computer will shut down",
                    "The employee may be locked out of the account",
                    "A fee will be charged"
                  ],
                  "answer": 1
                },
                {
                  "q": "When does the current password expire?",
                  "choices": [
                    "Friday",
                    "Monday",
                    "Next month"
                  ],
                  "answer": 0
                },
                {
                  "q": "Who should employees contact for help?",
                  "choices": [
                    "Their manager",
                    "The help desk",
                    "Security"
                  ],
                  "answer": 1
                },
                {
                  "q": "Why is this policy in place?",
                  "choices": [
                    "To reduce costs",
                    "To save server space",
                    "To keep systems secure"
                  ],
                  "answer": 2
                },
                {
                  "q": "What is the reminder mainly about?",
                  "choices": [
                    "A meeting schedule",
                    "A new hire",
                    "Password expiration"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passage": "NovaTech Announces New Headquarters. NovaTech Inc. announced today that it will relocate its headquarters to a larger facility downtown, effective next quarter. The move is expected to accommodate the company's growing workforce, which has doubled in size over the past two years. The new building will include expanded office space, a larger cafeteria, and additional meeting rooms.",
              "questions": [
                {
                  "q": "What is this press release about?",
                  "choices": [
                    "A product recall",
                    "A headquarters relocation",
                    "A merger"
                  ],
                  "answer": 1
                },
                {
                  "q": "When will the move take effect?",
                  "choices": [
                    "Immediately",
                    "Next quarter",
                    "Next year"
                  ],
                  "answer": 1
                },
                {
                  "q": "Why is the company moving?",
                  "choices": [
                    "Due to a lease expiration",
                    "To accommodate its growing workforce",
                    "To reduce costs"
                  ],
                  "answer": 1
                },
                {
                  "q": "How much has the workforce grown?",
                  "choices": [
                    "It has tripled in one year",
                    "It grew by ten percent",
                    "It has doubled in two years"
                  ],
                  "answer": 2
                },
                {
                  "q": "What will the new building include?",
                  "choices": [
                    "A rooftop garden only",
                    "A gym only",
                    "Expanded office space and a larger cafeteria"
                  ],
                  "answer": 2
                },
                {
                  "q": "What company is mentioned?",
                  "choices": [
                    "NovaTech Inc.",
                    "Bright Media",
                    "Crestline Bank"
                  ],
                  "answer": 0
                }
              ]
            },
            {
              "passage": "Remote Work Guidelines. Employees approved for remote work must remain available during core hours, nine to three, and respond to messages within one hour. Remote employees are expected to attend all scheduled video meetings with their camera on unless otherwise agreed. Equipment issues should be reported to IT immediately.",
              "questions": [
                {
                  "q": "What is this document about?",
                  "choices": [
                    "Dress code",
                    "Vacation policy",
                    "Remote work guidelines"
                  ],
                  "answer": 2
                },
                {
                  "q": "What are core hours?",
                  "choices": [
                    "Nine to three",
                    "Eight to five",
                    "Ten to two"
                  ],
                  "answer": 0
                },
                {
                  "q": "How quickly must employees respond to messages?",
                  "choices": [
                    "Within one hour",
                    "Immediately",
                    "Within a day"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is expected during video meetings?",
                  "choices": [
                    "Attendance is optional",
                    "Camera always off",
                    "Camera on unless otherwise agreed"
                  ],
                  "answer": 2
                },
                {
                  "q": "What should be reported to IT?",
                  "choices": [
                    "Personal complaints",
                    "Schedule changes",
                    "Equipment issues"
                  ],
                  "answer": 2
                },
                {
                  "q": "Who does this policy apply to?",
                  "choices": [
                    "Only managers",
                    "New hires only",
                    "Remote employees"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passage": "Congratulations! You have successfully completed the Workplace Safety training course. Your certificate is now available for download in the training portal. This certification is valid for two years, after which you will need to retake the course to remain compliant.",
              "questions": [
                {
                  "q": "What course was completed?",
                  "choices": [
                    "Customer Service",
                    "Workplace Safety",
                    "Cybersecurity"
                  ],
                  "answer": 1
                },
                {
                  "q": "Where can the certificate be found?",
                  "choices": [
                    "The HR office",
                    "Sent by mail",
                    "The training portal"
                  ],
                  "answer": 2
                },
                {
                  "q": "How long is the certification valid?",
                  "choices": [
                    "Five years",
                    "One year",
                    "Two years"
                  ],
                  "answer": 2
                },
                {
                  "q": "What must be done after it expires?",
                  "choices": [
                    "Retake the course",
                    "Nothing further is needed",
                    "Pay a renewal fee"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is required to remain compliant?",
                  "choices": [
                    "Attending a meeting",
                    "Retaking the course after expiration",
                    "Submitting a form"
                  ],
                  "answer": 1
                }
              ]
            }
          ],
          "double": [
            {
              "passages": [
                "Software Developer Position. NovaTech is hiring a software developer with experience in JavaScript and Python. Remote work is available. Salary range: 70,000 to 90,000 dollars depending on experience. Apply by submitting your resume and a code sample to careers@novatech.example.",
                "Hello, I am applying for the software developer position. I have four years of experience with JavaScript and two years with Python. I've attached my resume and a link to a recent project as my code sample. I'm also interested in the remote work option. Thank you, Diego Fernandez."
              ],
              "questions": [
                {
                  "q": "What position is advertised?",
                  "choices": [
                    "Marketing assistant",
                    "HR coordinator",
                    "Software developer"
                  ],
                  "answer": 2
                },
                {
                  "q": "What programming languages are required?",
                  "choices": [
                    "Only Python",
                    "JavaScript and Python",
                    "Java and C++"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is the salary range?",
                  "choices": [
                    "90,000 to 100,000 dollars",
                    "50,000 to 60,000 dollars",
                    "70,000 to 90,000 dollars"
                  ],
                  "answer": 2
                },
                {
                  "q": "How much JavaScript experience does Diego have?",
                  "choices": [
                    "One year",
                    "Four years",
                    "Two years"
                  ],
                  "answer": 1
                },
                {
                  "q": "What did Diego submit as his code sample?",
                  "choices": [
                    "A written test",
                    "A certificate",
                    "A link to a recent project"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passages": [
                "Support Ticket #4471: Issue: Unable to access shared drive. Priority: Medium. Submitted: Monday, 9:15 AM. Assigned to: IT Support Team.",
                "Hello, this is regarding ticket #4471. We identified the issue as an expired access permission and have restored your access to the shared drive. Please try logging in again, and let us know if the problem persists. Thank you for your patience."
              ],
              "questions": [
                {
                  "q": "What was the issue in ticket #4471?",
                  "choices": [
                    "A forgotten password",
                    "Unable to access shared drive",
                    "A broken keyboard"
                  ],
                  "answer": 1
                },
                {
                  "q": "What priority was assigned?",
                  "choices": [
                    "High",
                    "Medium",
                    "Low"
                  ],
                  "answer": 1
                },
                {
                  "q": "When was the ticket submitted?",
                  "choices": [
                    "Tuesday morning",
                    "Friday afternoon",
                    "Monday at 9:15 AM"
                  ],
                  "answer": 2
                },
                {
                  "q": "What caused the issue?",
                  "choices": [
                    "A server outage",
                    "A virus",
                    "An expired access permission"
                  ],
                  "answer": 2
                },
                {
                  "q": "What should the user do next?",
                  "choices": [
                    "Try logging in again",
                    "Submit a new ticket",
                    "Call IT support"
                  ],
                  "answer": 0
                }
              ]
            }
          ],
          "triple": [
            {
              "passages": [
                "Data Analyst Position. Requirements: Bachelor's degree in a related field, two years of experience with SQL, and strong analytical skills. This is a hybrid position requiring three days in the office per week.",
                "Hello, I have a Bachelor's degree in statistics and three years of SQL experience, but my analytical experience is mostly self-taught through online courses rather than a formal job. Would I still be considered for this role?",
                "Hello, thank you for reaching out. We do value formal experience, but relevant self-taught skills combined with your degree and SQL background are certainly worth considering. We encourage you to apply and highlight your projects in your cover letter."
              ],
              "questions": [
                {
                  "q": "What degree is required?",
                  "choices": [
                    "A Bachelor's degree in a related field",
                    "No degree is required",
                    "A Master's degree"
                  ],
                  "answer": 0
                },
                {
                  "q": "How much SQL experience is required?",
                  "choices": [
                    "Five years",
                    "One year",
                    "Two years"
                  ],
                  "answer": 2
                },
                {
                  "q": "How many days per week is the position in the office?",
                  "choices": [
                    "Three days",
                    "Five days",
                    "One day"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the applicant unsure about?",
                  "choices": [
                    "Whether the job is remote",
                    "Whether self-taught experience counts",
                    "Whether the salary is negotiable"
                  ],
                  "answer": 1
                },
                {
                  "q": "What does HR suggest the applicant do?",
                  "choices": [
                    "Retake a certification course",
                    "Wait for a different posting",
                    "Apply and highlight projects in the cover letter"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passages": [
                "New Employee Training Schedule: Day 1 - Company orientation and IT setup. Day 2 - Department-specific training. Day 3 - Shadowing a team member. Training location: Main office, Room 204.",
                "Hi, I noticed the training schedule says three days, but I was told my department also requires a safety certification. When should I complete that?",
                "Hello, good question. Safety certification should be completed during Day 2, as part of your department-specific training. Please let your department trainer know so they can include it in your session."
              ],
              "questions": [
                {
                  "q": "What happens on Day 1 of training?",
                  "choices": [
                    "Shadowing a team member",
                    "Department-specific training",
                    "Company orientation and IT setup"
                  ],
                  "answer": 2
                },
                {
                  "q": "Where does the training take place?",
                  "choices": [
                    "Off-site",
                    "Room 204 at the main office",
                    "The HR building"
                  ],
                  "answer": 1
                },
                {
                  "q": "What does the employee ask about?",
                  "choices": [
                    "When training starts",
                    "How to get a badge",
                    "When to complete safety certification"
                  ],
                  "answer": 2
                },
                {
                  "q": "When should the certification be completed?",
                  "choices": [
                    "During Day 2",
                    "After training ends",
                    "During Day 1"
                  ],
                  "answer": 0
                },
                {
                  "q": "Who should be informed about the certification?",
                  "choices": [
                    "IT support",
                    "Security",
                    "The department trainer"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passages": [
                "System Status: Our customer database experienced an unexpected outage today at 2:00 PM. Our team is investigating the cause. Updates will be posted every 30 minutes until the issue is resolved.",
                "Hi, I'm still unable to access the database as of 3:30 PM. Is there an estimated time for resolution? This is affecting my ability to complete client reports.",
                "Hello, thank you for your patience. We identified the cause as a server memory issue and expect the database to be fully restored within the next hour. We apologize for the disruption to your work."
              ],
              "questions": [
                {
                  "q": "When did the outage begin?",
                  "choices": [
                    "2:00 PM",
                    "Overnight",
                    "3:30 PM"
                  ],
                  "answer": 0
                },
                {
                  "q": "How often are updates posted?",
                  "choices": [
                    "Once a day",
                    "Every hour",
                    "Every 30 minutes"
                  ],
                  "answer": 2
                },
                {
                  "q": "What is the user unable to do?",
                  "choices": [
                    "Access the database",
                    "Print documents",
                    "Log into email"
                  ],
                  "answer": 0
                },
                {
                  "q": "What caused the outage?",
                  "choices": [
                    "A power failure",
                    "A cyberattack",
                    "A server memory issue"
                  ],
                  "answer": 2
                },
                {
                  "q": "When is the database expected to be restored?",
                  "choices": [
                    "Tomorrow",
                    "By end of day",
                    "Within the next hour"
                  ],
                  "answer": 2
                }
              ]
            }
          ]
        }
      }
    },
    {
      "set": 5,
      "title": "ชุดที่ 5 · Service & Logistics",
      "listening": {
        "part1": [
          {
            "scene": "หน้าประตูบ้าน ชายในเครื่องแบบยื่นกล่องพัสดุให้ผู้หญิงที่ยืนอยู่ในกรอบประตู มือทั้งสองฝ่ายแตะกล่องอยู่",
            "choices": [
              "A package is being handed over.",
              "A package is left on the ground.",
              "A woman is opening a package.",
              "A man is ringing a doorbell."
            ],
            "answer": 0,
            "why": "ข้อนี้ being handed over ถูก เพราะการส่งมอบกำลังเกิดขึ้นจริง ส่วนกล่องยังไม่ถูกเปิดและไม่ได้วางกับพื้น",
            "art": "delivery_handover"
          },
          {
            "scene": "โต๊ะทำงาน ผู้หญิงคนหนึ่งสวมหูฟังพร้อมไมค์ นั่งหน้าจอคอมพิวเตอร์ มือข้างหนึ่งวางบนเมาส์ ปากขยับพูด",
            "choices": [
              "The computer is being repaired.",
              "A woman is writing in a notebook.",
              "A woman is wearing a headset.",
              "A woman is hanging up a telephone."
            ],
            "answer": 2,
            "why": "สวมหูฟังอยู่แล้ว ไม่ใช่กำลังวางสาย และไม่มีใครซ่อมคอมพิวเตอร์ในภาพ",
            "art": "service_headset"
          },
          {
            "scene": "ในคลังสินค้า คนงานสองคนถือเครื่องสแกนเล็งไปที่ฉลากบนกล่อง มีชั้นวางสูงเต็มไปด้วยกล่องอยู่ด้านหลัง",
            "choices": [
              "The workers are pushing a cart.",
              "The shelves are being installed.",
              "Some workers are sealing cartons.",
              "Some workers are holding devices."
            ],
            "answer": 3,
            "why": "ถือเครื่องสแกนคือสิ่งที่เห็นชัด ส่วนชั้นวางเต็มแล้วและไม่มีใครติดตั้ง และไม่มีรถเข็นในภาพ",
            "art": "warehouse_scanning"
          },
          {
            "scene": "เคาน์เตอร์รับคืนสินค้า ลูกค้าวางกล่องที่มีรอยยุบไว้บนเคาน์เตอร์และชี้นิ้วไปที่กล่อง พนักงานยืนฟังอยู่อีกฝั่ง",
            "choices": [
              "A customer is trying on a jacket.",
              "A customer is pointing at an item.",
              "A customer is paying for a purchase.",
              "The item is being wrapped."
            ],
            "answer": 1,
            "why": "ชี้คือกริยาที่เห็น ไม่มีการจ่ายเงินหรือห่อของในภาพ ซึ่งเป็นกิจกรรมที่ฟังดูเข้ากับฉากร้านค้าแต่ไม่ได้เกิดขึ้น",
            "art": "return_counter"
          },
          {
            "scene": "ในคลังสินค้า รถยกกำลังเคลื่อนที่โดยมีพาเลทกล่องอยู่บนงา มีคนขับนั่งอยู่บนรถ",
            "choices": [
              "A man is climbing onto a pallet.",
              "A forklift is parked near a wall.",
              "Boxes are being unloaded by hand.",
              "A forklift is being operated."
            ],
            "answer": 3,
            "why": "ข้อนี้ being operated ถูก เพราะมีคนขับอยู่บนรถจริง ต่างจากภาพที่รถยกจอดเปล่าซึ่งจะทำให้ข้อนี้ผิดทันที",
            "art": "forklift_driving"
          },
          {
            "scene": "ทางเดินในซูเปอร์มาร์เก็ต ผู้หญิงคนหนึ่งยืนหันหน้าเข้าชั้นวางสินค้า มือเอื้อมไปหยิบของบนชั้น มีรถเข็นจอดอยู่ข้างตัว",
            "choices": [
              "A woman is paying at a register.",
              "The shelves are being restocked.",
              "A woman is pushing a shopping cart.",
              "A woman is reaching for a product."
            ],
            "answer": 3,
            "why": "รถเข็นจอดอยู่ ไม่ได้ถูกเข็น และ being restocked ต้องมีพนักงานกำลังเติมของ ซึ่งไม่มีในภาพ",
            "art": "supermarket_reach"
          }
        ],
        "part2": [
          {
            "q": "How can I track my order?",
            "choices": [
              "Use the number in your email.",
              "At the post office.",
              "Yes, it arrived."
            ],
            "answer": 0
          },
          {
            "q": "Why was my package returned?",
            "choices": [
              "The address was incorrect.",
              "By express delivery.",
              "Two days ago."
            ],
            "answer": 0
          },
          {
            "q": "When will my refund be processed?",
            "choices": [
              "It was damaged.",
              "At the store.",
              "Within five business days."
            ],
            "answer": 2
          },
          {
            "q": "Is this product still under warranty?",
            "choices": [
              "Yes, for another year.",
              "About fifty dollars.",
              "In the box."
            ],
            "answer": 0
          },
          {
            "q": "Where should I return the item?",
            "choices": [
              "Last week.",
              "To our nearest branch.",
              "It's too small."
            ],
            "answer": 1
          },
          {
            "q": "Would you like a replacement or a refund?",
            "choices": [
              "At checkout.",
              "It's out of stock.",
              "A replacement, please."
            ],
            "answer": 2
          },
          {
            "q": "How long does standard shipping take?",
            "choices": [
              "At the warehouse.",
              "About ten dollars.",
              "Three to five business days."
            ],
            "answer": 2
          },
          {
            "q": "Why is my order delayed?",
            "choices": [
              "A backlog at the warehouse.",
              "Last Friday.",
              "Two boxes."
            ],
            "answer": 0
          },
          {
            "q": "Can I change my delivery address?",
            "choices": [
              "It's free.",
              "Yes, if it hasn't shipped yet.",
              "At checkout."
            ],
            "answer": 1
          },
          {
            "q": "Who do I contact about a damaged item?",
            "choices": [
              "Next week.",
              "Our customer service team.",
              "In the box."
            ],
            "answer": 1
          },
          {
            "q": "How much is the shipping fee?",
            "choices": [
              "At the counter.",
              "It's five dollars.",
              "Within a week."
            ],
            "answer": 1
          },
          {
            "q": "Is express shipping available?",
            "choices": [
              "Three days.",
              "Yes, for an extra charge.",
              "At checkout."
            ],
            "answer": 1
          },
          {
            "q": "Why was my payment declined?",
            "choices": [
              "Yesterday.",
              "Fifty dollars.",
              "The card information was incorrect."
            ],
            "answer": 2
          },
          {
            "q": "Could you check the status of order 5521?",
            "choices": [
              "Sure, one moment.",
              "Yesterday afternoon.",
              "It's a large order."
            ],
            "answer": 0
          },
          {
            "q": "How do I return a defective item?",
            "choices": [
              "Within thirty days.",
              "Fill out the return form online.",
              "At the register."
            ],
            "answer": 1
          },
          {
            "q": "Is same-day delivery available in this area?",
            "choices": [
              "At an extra cost.",
              "Yes, for select items.",
              "About two hours."
            ],
            "answer": 1
          },
          {
            "q": "Why haven't I received a confirmation email?",
            "choices": [
              "About ten minutes ago.",
              "Yesterday.",
              "It may be in your spam folder."
            ],
            "answer": 2
          },
          {
            "q": "Could I speak with a supervisor?",
            "choices": [
              "She's busy today.",
              "At the front desk.",
              "Of course, one moment please."
            ],
            "answer": 2
          },
          {
            "q": "How can I cancel my order?",
            "choices": [
              "Contact us within one hour of purchase.",
              "It's non-refundable.",
              "At checkout."
            ],
            "answer": 0
          },
          {
            "q": "Is the item eligible for a warranty claim?",
            "choices": [
              "In the box.",
              "Yes, it's still covered.",
              "It's fifty dollars."
            ],
            "answer": 1
          },
          {
            "q": "Why did the courier miss my delivery window?",
            "choices": [
              "Heavy traffic delayed the route.",
              "Last week.",
              "Two hours ago."
            ],
            "answer": 0
          },
          {
            "q": "How do I update my shipping preferences?",
            "choices": [
              "By calling support.",
              "Through your account settings.",
              "At checkout."
            ],
            "answer": 1
          },
          {
            "q": "Could you resend the tracking number?",
            "choices": [
              "At the warehouse.",
              "It's already sent.",
              "Sure, I'll email it now."
            ],
            "answer": 2
          },
          {
            "q": "Is curbside pickup available?",
            "choices": [
              "It's free.",
              "Within an hour.",
              "Yes, at all locations."
            ],
            "answer": 2
          },
          {
            "q": "Why is the warehouse running behind schedule?",
            "choices": [
              "By two days.",
              "Since Monday.",
              "A shortage of staff."
            ],
            "answer": 2
          }
        ],
        "part3": [
          {
            "lines": [
              "W: I received the wrong size shirt in my order.",
              "M: I'm sorry about that. Do you have your order number?",
              "W: Yes, it's three-three-nine-one.",
              "M: Thank you. I'll send the correct size right away."
            ],
            "questions": [
              {
                "q": "What is the woman's problem?",
                "choices": [
                  "The item was broken",
                  "The order was late",
                  "She received the wrong size"
                ],
                "answer": 2
              },
              {
                "q": "What will the man do?",
                "choices": [
                  "Give a discount",
                  "Send the correct size",
                  "Cancel the order"
                ],
                "answer": 1
              },
              {
                "q": "What does the man ask for?",
                "choices": [
                  "Her payment details",
                  "Her address",
                  "Her order number"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: Can you deliver the furniture before the weekend?",
              "W: We can schedule it for Friday afternoon.",
              "W: But someone will need to be home to receive it.",
              "M: That's fine. I'll be there all afternoon."
            ],
            "questions": [
              {
                "q": "When will the furniture be delivered?",
                "choices": [
                  "Next Monday",
                  "Saturday morning",
                  "Friday afternoon"
                ],
                "answer": 2
              },
              {
                "q": "What does the woman say is needed?",
                "choices": [
                  "Someone must be home to receive it",
                  "Payment in advance",
                  "A signature at the store"
                ],
                "answer": 0
              },
              {
                "q": "What does the man agree to?",
                "choices": [
                  "Picking it up himself",
                  "Paying extra for delivery",
                  "Being home all afternoon"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "W: My package shows as delivered, but I never received it.",
              "M: I'm sorry to hear that, let me check the tracking details.",
              "W: The tracking says it was left at the door.",
              "M: I'll file a claim and send a replacement right away."
            ],
            "questions": [
              {
                "q": "What is the woman's problem?",
                "choices": [
                  "Her package was never shipped",
                  "Her package is missing despite showing as delivered",
                  "Her package was damaged"
                ],
                "answer": 1
              },
              {
                "q": "What does the tracking information show?",
                "choices": [
                  "It was returned to sender",
                  "It's still in transit",
                  "It was left at the door"
                ],
                "answer": 2
              },
              {
                "q": "What will the man do?",
                "choices": [
                  "Refund her immediately",
                  "Ask her to wait longer",
                  "File a claim and send a replacement"
                ],
                "answer": 2
              }
            ]
          },
          {
            "lines": [
              "M: We're running low on the blue jackets in medium size.",
              "W: How many do we have left?",
              "M: Only about five units.",
              "W: I'll place a reorder with the supplier today."
            ],
            "questions": [
              {
                "q": "What are they discussing?",
                "choices": [
                  "A shipping delay",
                  "A pricing error",
                  "A low stock item"
                ],
                "answer": 2
              },
              {
                "q": "How many units are left?",
                "choices": [
                  "None",
                  "About five",
                  "About fifty"
                ],
                "answer": 1
              },
              {
                "q": "What will the woman do?",
                "choices": [
                  "Place a reorder",
                  "Offer a discount",
                  "Discontinue the item"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: My blender stopped working after two months.",
              "M: Is it still under warranty?",
              "W: Yes, I have the receipt here.",
              "M: Great, we can send a replacement or issue store credit."
            ],
            "questions": [
              {
                "q": "What is the woman's problem?",
                "choices": [
                  "She wants a refund only",
                  "She lost her receipt",
                  "Her blender stopped working"
                ],
                "answer": 2
              },
              {
                "q": "What does the man ask about?",
                "choices": [
                  "The store location",
                  "The purchase date",
                  "Whether it's under warranty"
                ],
                "answer": 2
              },
              {
                "q": "What options does the man offer?",
                "choices": [
                  "A discount on a new item",
                  "A replacement or store credit",
                  "A repair only"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: The delivery truck is running about an hour behind schedule.",
              "W: What's causing the delay?",
              "M: Heavy traffic on the highway.",
              "W: Let's notify the customers on today's route."
            ],
            "questions": [
              {
                "q": "What is the issue?",
                "choices": [
                  "The truck broke down",
                  "The driver called in sick",
                  "The delivery truck is delayed"
                ],
                "answer": 2
              },
              {
                "q": "What is causing the delay?",
                "choices": [
                  "A flat tire",
                  "Bad weather",
                  "Heavy traffic"
                ],
                "answer": 2
              },
              {
                "q": "What will they do?",
                "choices": [
                  "Cancel today's deliveries",
                  "Notify customers on the route",
                  "Add another driver"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "W: A customer is very upset about a repeated billing error.",
              "M: How many times has this happened?",
              "W: This is the third time this year.",
              "M: Let's escalate this to the billing manager immediately."
            ],
            "questions": [
              {
                "q": "What is the customer upset about?",
                "choices": [
                  "A late delivery",
                  "A damaged product",
                  "A repeated billing error"
                ],
                "answer": 2
              },
              {
                "q": "How many times has this occurred?",
                "choices": [
                  "Twice this month",
                  "Once",
                  "Three times this year"
                ],
                "answer": 2
              },
              {
                "q": "What will they do?",
                "choices": [
                  "Ignore the complaint",
                  "Escalate to the billing manager",
                  "Offer a small discount"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: I'm here for curbside pickup, order number 7734.",
              "W: Great, I'll have someone bring it right out.",
              "M: How long should I expect to wait?",
              "W: Just a few minutes, thank you for your patience."
            ],
            "questions": [
              {
                "q": "What is the man doing?",
                "choices": [
                  "Picking up a curbside order",
                  "Returning an item",
                  "Making a new purchase"
                ],
                "answer": 0
              },
              {
                "q": "What is his order number?",
                "choices": [
                  "4737",
                  "7743",
                  "7734"
                ],
                "answer": 2
              },
              {
                "q": "How long will he wait?",
                "choices": [
                  "Just a few minutes",
                  "Until tomorrow",
                  "About an hour"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: We need to notify customers about the product recall.",
              "M: How many units were affected?",
              "W: Around two thousand units sold this month.",
              "M: I'll draft the notification email today."
            ],
            "questions": [
              {
                "q": "What are they discussing?",
                "choices": [
                  "A product recall",
                  "A price increase",
                  "A new product launch"
                ],
                "answer": 0
              },
              {
                "q": "How many units were affected?",
                "choices": [
                  "About two thousand",
                  "About twenty thousand",
                  "About two hundred"
                ],
                "answer": 0
              },
              {
                "q": "What will the man do?",
                "choices": [
                  "Visit the warehouse",
                  "Draft a notification email",
                  "Call each customer"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "M: Can I return this item without the original packaging?",
              "W: Unfortunately, we require the original packaging for returns.",
              "M: I no longer have it, unfortunately.",
              "W: In that case, we can only offer store credit instead of a refund."
            ],
            "questions": [
              {
                "q": "What does the man want to do?",
                "choices": [
                  "Exchange an item",
                  "Return an item",
                  "Get a warranty extension"
                ],
                "answer": 1
              },
              {
                "q": "What does the store require for returns?",
                "choices": [
                  "A receipt only",
                  "Nothing special",
                  "The original packaging"
                ],
                "answer": 2
              },
              {
                "q": "What can the store offer instead?",
                "choices": [
                  "Store credit",
                  "A full refund",
                  "A replacement item"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "W: How much would it cost to ship this internationally?",
              "M: Let me calculate that based on weight and destination.",
              "W: It's going to Canada, and it weighs about two kilograms.",
              "M: That would be approximately thirty-five dollars."
            ],
            "questions": [
              {
                "q": "What is the woman asking about?",
                "choices": [
                  "A refund amount",
                  "A discount code",
                  "International shipping cost"
                ],
                "answer": 2
              },
              {
                "q": "Where is the package going?",
                "choices": [
                  "The United Kingdom",
                  "Mexico",
                  "Canada"
                ],
                "answer": 2
              },
              {
                "q": "How much will shipping cost?",
                "choices": [
                  "About thirty-five dollars",
                  "About fifteen dollars",
                  "About seventy dollars"
                ],
                "answer": 0
              }
            ]
          },
          {
            "lines": [
              "M: Several boxes in this shipment arrived damaged.",
              "W: I'll document the damage with photos right away.",
              "M: We should also contact the shipping carrier.",
              "W: Agreed, I'll file a claim with them today."
            ],
            "questions": [
              {
                "q": "What is the problem?",
                "choices": [
                  "Several boxes arrived damaged",
                  "The shipment is missing",
                  "The wrong items were sent"
                ],
                "answer": 0
              },
              {
                "q": "What will the woman do first?",
                "choices": [
                  "Call the customer",
                  "Document the damage with photos",
                  "Reorder the items"
                ],
                "answer": 1
              },
              {
                "q": "Who else will they contact?",
                "choices": [
                  "The customer",
                  "The shipping carrier",
                  "The manufacturer"
                ],
                "answer": 1
              }
            ]
          },
          {
            "lines": [
              "W: A customer is asking about our loyalty rewards program.",
              "M: Let's explain how they earn points on purchases.",
              "W: She also wants to know if points expire.",
              "M: Points are valid for two years from the purchase date."
            ],
            "questions": [
              {
                "q": "What is the customer asking about?",
                "choices": [
                  "The loyalty rewards program",
                  "A discount code",
                  "A return policy"
                ],
                "answer": 0
              },
              {
                "q": "What does the customer want to know?",
                "choices": [
                  "How to redeem points",
                  "Whether points expire",
                  "How to sign up"
                ],
                "answer": 1
              },
              {
                "q": "How long are points valid?",
                "choices": [
                  "Two years",
                  "They never expire",
                  "One year"
                ],
                "answer": 0
              }
            ]
          }
        ],
        "part4": [
          {
            "script": "Attention shoppers. Our customer service desk is located on the first floor, near the main entrance. If you need help with returns, exchanges, or gift wrapping, our staff will be glad to assist you until nine this evening.",
            "questions": [
              {
                "q": "Where is the customer service desk located?",
                "choices": [
                  "Next to the parking lot",
                  "On the top floor",
                  "On the first floor near the main entrance"
                ],
                "answer": 2
              },
              {
                "q": "Until what time is the desk open?",
                "choices": [
                  "Nine in the evening",
                  "Six in the evening",
                  "Noon"
                ],
                "answer": 0
              },
              {
                "q": "What services are offered there?",
                "choices": [
                  "Only exchanges",
                  "Only returns",
                  "Returns, exchanges, and gift wrapping"
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "Hello, this is a message from Quick Delivery. We attempted to deliver your package today, but no one was available to sign for it. We will try again tomorrow between nine and noon. To arrange a different time, please call us back at this number.",
            "questions": [
              {
                "q": "Why was the package not delivered?",
                "choices": [
                  "No one was available to sign for it",
                  "It was damaged",
                  "The address was wrong"
                ],
                "answer": 0
              },
              {
                "q": "When will delivery be attempted again?",
                "choices": [
                  "Tomorrow between nine and noon",
                  "This evening",
                  "Next week"
                ],
                "answer": 0
              },
              {
                "q": "What should the listener do for a different time?",
                "choices": [
                  "Call the number back",
                  "Do nothing",
                  "Visit the depot"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Before starting your shift, please make sure to wear your safety vest and steel-toe boots at all times in the warehouse. Forklifts must yield to pedestrians in all marked walkways. Report any spills or hazards to your shift supervisor immediately.",
            "questions": [
              {
                "q": "What must workers wear at all times?",
                "choices": [
                  "Safety vest and steel-toe boots",
                  "Hard hats only",
                  "Gloves only"
                ],
                "answer": 0
              },
              {
                "q": "What must forklifts do in marked walkways?",
                "choices": [
                  "Sound their horn",
                  "Stop completely",
                  "Yield to pedestrians"
                ],
                "answer": 2
              },
              {
                "q": "What should be reported immediately?",
                "choices": [
                  "Nothing, just continue working",
                  "Broken equipment only",
                  "Spills or hazards"
                ],
                "answer": 2
              }
            ]
          },
          {
            "script": "Thank you for calling customer support. Your call is important to us, and the current wait time is approximately five minutes. Please stay on the line, or press one to receive a callback instead of waiting.",
            "questions": [
              {
                "q": "What is the current wait time?",
                "choices": [
                  "About fifteen minutes",
                  "No wait",
                  "About five minutes"
                ],
                "answer": 2
              },
              {
                "q": "What can callers press to receive a callback?",
                "choices": [
                  "One",
                  "Two",
                  "Zero"
                ],
                "answer": 0
              },
              {
                "q": "What kind of message is this?",
                "choices": [
                  "A voicemail",
                  "An automated phone greeting",
                  "A live agent's message"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Good morning, drivers. Today's routes have been updated due to road construction on Fifth Avenue. Please check your GPS for the revised routes before heading out. Also, remember to get a signature for all packages over one hundred dollars in value.",
            "questions": [
              {
                "q": "Why were routes updated?",
                "choices": [
                  "Road construction on Fifth Avenue",
                  "New delivery software",
                  "A traffic accident"
                ],
                "answer": 0
              },
              {
                "q": "What should drivers check before heading out?",
                "choices": [
                  "Their GPS for revised routes",
                  "Fuel levels",
                  "Weather reports"
                ],
                "answer": 0
              },
              {
                "q": "When is a signature required?",
                "choices": [
                  "For packages over one hundred dollars",
                  "Only for international packages",
                  "For all packages"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Attention shoppers, our store will be closing in fifteen minutes. Please bring your final selections to the checkout counters at this time. Thank you for shopping with us today, and we look forward to seeing you again soon.",
            "questions": [
              {
                "q": "What is being announced?",
                "choices": [
                  "The store is closing soon",
                  "A store closure permanently",
                  "A sale is starting"
                ],
                "answer": 0
              },
              {
                "q": "How much time do shoppers have?",
                "choices": [
                  "Five minutes",
                  "Fifteen minutes",
                  "One hour"
                ],
                "answer": 1
              },
              {
                "q": "What are shoppers asked to do?",
                "choices": [
                  "Bring selections to checkout",
                  "Leave the store immediately",
                  "Return unwanted items"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "You have reached the returns department. Items may be returned within thirty days with a valid receipt for a full refund. Items without a receipt may be exchanged for store credit only. For further assistance, please stay on the line.",
            "questions": [
              {
                "q": "What is the return window?",
                "choices": [
                  "Thirty days",
                  "Sixty days",
                  "Fourteen days"
                ],
                "answer": 0
              },
              {
                "q": "What is required for a full refund?",
                "choices": [
                  "A valid receipt",
                  "The original box",
                  "Nothing"
                ],
                "answer": 0
              },
              {
                "q": "What happens without a receipt?",
                "choices": [
                  "A full refund is still given",
                  "Items may be exchanged for store credit",
                  "No return is possible"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Hi, this is an update regarding shipment number 8890. The container has cleared customs and is now en route to the distribution center. We expect it to arrive within two business days, at which point your order will be processed.",
            "questions": [
              {
                "q": "What is the update about?",
                "choices": [
                  "A shipment's status",
                  "A cancelled order",
                  "A payment issue"
                ],
                "answer": 0
              },
              {
                "q": "What has the container just cleared?",
                "choices": [
                  "Customs",
                  "A weight check",
                  "Inspection"
                ],
                "answer": 0
              },
              {
                "q": "When is it expected to arrive?",
                "choices": [
                  "Today",
                  "Within two business days",
                  "Next month"
                ],
                "answer": 1
              }
            ]
          },
          {
            "script": "Welcome to curbside pickup. Please park in one of the numbered spots and call the number posted on the sign. A staff member will bring your order out within ten minutes. Please have your order confirmation ready.",
            "questions": [
              {
                "q": "What should customers do first?",
                "choices": [
                  "Wait in a line",
                  "Enter the store",
                  "Park in a numbered spot"
                ],
                "answer": 2
              },
              {
                "q": "What should customers have ready?",
                "choices": [
                  "Their order confirmation",
                  "A membership card",
                  "Cash payment"
                ],
                "answer": 0
              },
              {
                "q": "How long does pickup usually take?",
                "choices": [
                  "Within ten minutes",
                  "Within one hour",
                  "Immediately"
                ],
                "answer": 0
              }
            ]
          },
          {
            "script": "Good morning, team. Due to a shortage of raw materials, we expect production delays of about two weeks on several product lines. We are working with alternative suppliers to minimize the impact and will update customers as needed.",
            "questions": [
              {
                "q": "What is causing the delays?",
                "choices": [
                  "Equipment failure",
                  "A shortage of raw materials",
                  "A labor strike"
                ],
                "answer": 1
              },
              {
                "q": "How long are the expected delays?",
                "choices": [
                  "About two days",
                  "About two months",
                  "About two weeks"
                ],
                "answer": 2
              },
              {
                "q": "What is the team doing to help?",
                "choices": [
                  "Working with alternative suppliers",
                  "Raising prices",
                  "Cancelling all orders"
                ],
                "answer": 0
              }
            ]
          }
        ]
      },
      "reading": {
        "part5": [
          {
            "sentence": "If you are not ______ with your purchase, you may return it within 30 days.",
            "choices": [
              "satisfy",
              "satisfaction",
              "satisfied",
              "satisfying"
            ],
            "answer": 2
          },
          {
            "sentence": "Our staff will ______ you with any questions you may have.",
            "choices": [
              "assistance",
              "assisted",
              "assist",
              "assistant"
            ],
            "answer": 2
          },
          {
            "sentence": "The damaged item will be replaced ______ no extra cost.",
            "choices": [
              "for",
              "at",
              "in",
              "by"
            ],
            "answer": 1
          },
          {
            "sentence": "Please keep your receipt, ______ you may need it for returns.",
            "choices": [
              "unless",
              "as",
              "despite",
              "although"
            ],
            "answer": 1
          },
          {
            "sentence": "We aim to ______ all complaints within 24 hours.",
            "choices": [
              "resolved",
              "resolving",
              "resolve",
              "resolution"
            ],
            "answer": 2
          },
          {
            "sentence": "The delivery driver called to confirm the ______ address.",
            "choices": [
              "deliver",
              "delivering",
              "delivered",
              "delivery"
            ],
            "answer": 3
          },
          {
            "sentence": "Customers can choose ______ a refund or a replacement.",
            "choices": [
              "whether",
              "neither",
              "either",
              "both"
            ],
            "answer": 2
          },
          {
            "sentence": "Thank you for your ______; your order will be shipped soon.",
            "choices": [
              "patients",
              "patience",
              "patient",
              "patiently"
            ],
            "answer": 1
          },
          {
            "sentence": "The warehouse team ______ all incoming shipments daily.",
            "choices": [
              "inspects",
              "inspected",
              "inspecting",
              "inspect"
            ],
            "answer": 0
          },
          {
            "sentence": "Please allow ______ five business days for delivery.",
            "choices": [
              "up at",
              "up on",
              "up until",
              "up to"
            ],
            "answer": 3
          },
          {
            "sentence": "The customer service team ______ trained to handle complaints professionally.",
            "choices": [
              "was",
              "are",
              "is",
              "be"
            ],
            "answer": 2
          },
          {
            "sentence": "Our return policy is ______ than most competitors'.",
            "choices": [
              "flexible than",
              "flexibler",
              "most flexible",
              "more flexible"
            ],
            "answer": 3
          },
          {
            "sentence": "The package was ______ delivered to the wrong address.",
            "choices": [
              "mistaking",
              "mistakenly",
              "mistaken",
              "mistake"
            ],
            "answer": 1
          },
          {
            "sentence": "All orders ______ before noon ship the same day.",
            "choices": [
              "place",
              "placing",
              "places",
              "placed"
            ],
            "answer": 3
          },
          {
            "sentence": "We ______ our customers for their continued loyalty.",
            "choices": [
              "thank",
              "thanked",
              "thanking",
              "thanks"
            ],
            "answer": 0
          },
          {
            "sentence": "The tracking number ______ once the item has shipped.",
            "choices": [
              "provides",
              "providing",
              "is provided",
              "provide"
            ],
            "answer": 2
          },
          {
            "sentence": "Customers ______ a discount code will see it applied at checkout.",
            "choices": [
              "of",
              "for",
              "among",
              "with"
            ],
            "answer": 3
          },
          {
            "sentence": "The warranty ______ accidental damage.",
            "choices": [
              "does not cover",
              "not covered",
              "do not cover",
              "not covering"
            ],
            "answer": 0
          },
          {
            "sentence": "This item is ______ available in three colors.",
            "choices": [
              "currents",
              "current",
              "currently",
              "currency"
            ],
            "answer": 2
          },
          {
            "sentence": "Please contact us ______ you have not received your order within a week.",
            "choices": [
              "unless",
              "despite",
              "if",
              "although"
            ],
            "answer": 2
          },
          {
            "sentence": "The courier ______ the package before nine this morning.",
            "choices": [
              "to deliver",
              "delivering",
              "deliver",
              "delivered"
            ],
            "answer": 3
          },
          {
            "sentence": "Our support team responds ______ to all inquiries.",
            "choices": [
              "quick",
              "quickly",
              "quicken",
              "quickness"
            ],
            "answer": 1
          },
          {
            "sentence": "The item you ordered is ______ out of stock.",
            "choices": [
              "temporariness",
              "temporarily",
              "temporize",
              "temporary"
            ],
            "answer": 1
          },
          {
            "sentence": "We appreciate your ______ while we resolve this issue.",
            "choices": [
              "understanding",
              "understandable",
              "understand",
              "understood"
            ],
            "answer": 0
          },
          {
            "sentence": "The refund will be ______ to your original payment method.",
            "choices": [
              "credit",
              "crediting",
              "credited",
              "credits"
            ],
            "answer": 2
          },
          {
            "sentence": "Please double-check your shipping address ______ placing your order.",
            "choices": [
              "while",
              "during",
              "before",
              "since"
            ],
            "answer": 2
          },
          {
            "sentence": "Our fulfillment center ______ orders around the clock.",
            "choices": [
              "processed",
              "processes",
              "processing",
              "process"
            ],
            "answer": 1
          },
          {
            "sentence": "The return label is ______ included in your package.",
            "choices": [
              "automation",
              "automatic",
              "automate",
              "automatically"
            ],
            "answer": 3
          },
          {
            "sentence": "We are ______ committed to fast and reliable delivery.",
            "choices": [
              "full",
              "fully",
              "fullness",
              "fill"
            ],
            "answer": 1
          },
          {
            "sentence": "Please note that sale items cannot be ______.",
            "choices": [
              "returned",
              "return",
              "returning",
              "returns"
            ],
            "answer": 0
          }
        ],
        "part6": [
          {
            "passage": "Thank you for shopping with us. If you are not completely happy with your order, you may return any item within 30 days for a full refund. To start a return, simply ___1___ the return form included in your package. Once we receive the item, your refund will be ___2___ within five business days. Return shipping is ___3___ for defective items. If you have questions, our support team is ___4___ to help.",
            "blanks": [
              {
                "choices": [
                  "complete",
                  "completes",
                  "completely",
                  "completion"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "processor",
                  "processed",
                  "process",
                  "processing"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "freedom",
                  "freely",
                  "freeing",
                  "free"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "availed",
                  "avail",
                  "available",
                  "availability"
                ],
                "answer": 2
              }
            ]
          },
          {
            "passage": "Dear Customer, we want to ___1___ you that your recent order has been delayed due to a temporary shortage of packaging materials. We expect the delay to ___2___ no more than three additional days. We understand this is ___3___, and as an apology, we have applied a ten percent discount to your next order. Thank you for your ___4___.",
            "blanks": [
              {
                "choices": [
                  "informing",
                  "informs",
                  "inform",
                  "informed"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "lasted",
                  "lasts",
                  "lasting",
                  "last"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "frustrated",
                  "frustrate",
                  "frustrating",
                  "frustration"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "patient",
                  "patients",
                  "patiently",
                  "patience"
                ],
                "answer": 3
              }
            ]
          },
          {
            "passage": "Now Hiring: Warehouse Associates. We are ___1___ for reliable team members to join our fulfillment center. Responsibilities ___2___ picking, packing, and scanning orders. No prior experience is ___3___, as full training is provided. Interested candidates should ___4___ in person at our warehouse office.",
            "blanks": [
              {
                "choices": [
                  "looking",
                  "looked",
                  "looks",
                  "look"
                ],
                "answer": 0
              },
              {
                "choices": [
                  "includes",
                  "include",
                  "including",
                  "included"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "require",
                  "requires",
                  "requiring",
                  "required"
                ],
                "answer": 3
              },
              {
                "choices": [
                  "applies",
                  "applying",
                  "applied",
                  "apply"
                ],
                "answer": 3
              }
            ]
          },
          {
            "passage": "Dear Valued Customer, thank you for your recent purchase. We would ___1___ appreciate it if you could take a moment to ___2___ a short satisfaction survey about your experience. Your feedback helps us ___3___ our service for all customers. As a thank-you, you will receive a coupon ___4___ your next purchase.",
            "blanks": [
              {
                "choices": [
                  "greaten",
                  "greatly",
                  "great",
                  "greatness"
                ],
                "answer": 1
              },
              {
                "choices": [
                  "completing",
                  "completed",
                  "complete",
                  "completion"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "improvement",
                  "improving",
                  "improve",
                  "improves"
                ],
                "answer": 2
              },
              {
                "choices": [
                  "of",
                  "in",
                  "for",
                  "at"
                ],
                "answer": 2
              }
            ]
          }
        ],
        "part7": {
          "single": [
            {
              "passage": "Our Return Policy: Items may be returned within 30 days of purchase, provided they are unused and in their original packaging. Refunds will be issued to the original payment method. Please note that shipping fees are non-refundable, and sale items can be exchanged but not refunded.",
              "questions": [
                {
                  "q": "What condition must returned items meet?",
                  "choices": [
                    "They must be gift-wrapped",
                    "They must be unused and in their original packaging",
                    "They must include a photo"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is true about sale items?",
                  "choices": [
                    "They can be exchanged but not refunded",
                    "They cannot be returned at all",
                    "They can be fully refunded"
                  ],
                  "answer": 0
                },
                {
                  "q": "How long is the return window?",
                  "choices": [
                    "30 days",
                    "14 days",
                    "60 days"
                  ],
                  "answer": 0
                },
                {
                  "q": "How will refunds be issued?",
                  "choices": [
                    "To the original payment method",
                    "By check",
                    "As store credit only"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is non-refundable?",
                  "choices": [
                    "The item price",
                    "Taxes",
                    "Shipping fees"
                  ],
                  "answer": 2
                },
                {
                  "q": "What is this document mainly about?",
                  "choices": [
                    "A product catalog",
                    "A shipping schedule",
                    "The return policy"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passage": "Good news! Your order has shipped and is on its way. You can expect delivery within three to five business days. A tracking number has been sent to your email so you can follow your package. If you are not home at the time of delivery, the driver will leave a note with instructions.",
              "questions": [
                {
                  "q": "What is the purpose of this message?",
                  "choices": [
                    "To confirm a return",
                    "To offer a discount",
                    "To inform the customer that the order has shipped"
                  ],
                  "answer": 2
                },
                {
                  "q": "How can the customer follow the package?",
                  "choices": [
                    "By visiting the warehouse",
                    "With the tracking number sent by email",
                    "By calling the store"
                  ],
                  "answer": 1
                },
                {
                  "q": "How long will delivery take?",
                  "choices": [
                    "Three to five business days",
                    "One day",
                    "Two weeks"
                  ],
                  "answer": 0
                },
                {
                  "q": "What happens if no one is home?",
                  "choices": [
                    "The package is returned immediately",
                    "The order is cancelled",
                    "The driver leaves a note with instructions"
                  ],
                  "answer": 2
                },
                {
                  "q": "Where was the tracking number sent?",
                  "choices": [
                    "In the package",
                    "By text message",
                    "To the customer's email"
                  ],
                  "answer": 2
                },
                {
                  "q": "What has happened to the order?",
                  "choices": [
                    "It was cancelled",
                    "It has shipped",
                    "It is delayed"
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passage": "Warehouse Associate Wanted. FastShip Logistics is hiring warehouse associates for our growing distribution center. Duties include picking, packing, and loading orders. Shifts are available in both day and night schedules. Starting pay is eighteen dollars per hour, with opportunities for overtime.",
              "questions": [
                {
                  "q": "What position is being advertised?",
                  "choices": [
                    "Warehouse associate",
                    "Customer service agent",
                    "Delivery driver"
                  ],
                  "answer": 0
                },
                {
                  "q": "What company is hiring?",
                  "choices": [
                    "FastShip Logistics",
                    "Pacific Freight",
                    "Quick Delivery"
                  ],
                  "answer": 0
                },
                {
                  "q": "What duties are listed?",
                  "choices": [
                    "Picking, packing, and loading orders",
                    "Managing inventory reports",
                    "Answering phones"
                  ],
                  "answer": 0
                },
                {
                  "q": "What shifts are available?",
                  "choices": [
                    "Day and night schedules",
                    "Day shifts only",
                    "Weekend shifts only"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the starting pay?",
                  "choices": [
                    "Eighteen dollars per hour",
                    "Fifteen dollars per hour",
                    "Twenty-five dollars per hour"
                  ],
                  "answer": 0
                },
                {
                  "q": "What additional opportunity is mentioned?",
                  "choices": [
                    "Free housing",
                    "Remote work",
                    "Overtime"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passage": "Customer Satisfaction Report: This quarter, our customer satisfaction score improved to ninety-two percent, up from eighty-five percent last quarter. The improvement is largely attributed to faster response times and a new live chat feature. However, delivery speed remains an area for improvement, according to customer feedback.",
              "questions": [
                {
                  "q": "What is this report about?",
                  "choices": [
                    "Customer satisfaction results",
                    "Sales figures",
                    "Employee performance"
                  ],
                  "answer": 0
                },
                {
                  "q": "What was this quarter's satisfaction score?",
                  "choices": [
                    "Ninety-two percent",
                    "Seventy percent",
                    "Eighty-five percent"
                  ],
                  "answer": 0
                },
                {
                  "q": "What contributed to the improvement?",
                  "choices": [
                    "Faster response times and live chat",
                    "A new logo",
                    "Lower prices"
                  ],
                  "answer": 0
                },
                {
                  "q": "What area needs improvement?",
                  "choices": [
                    "Product quality",
                    "Website design",
                    "Delivery speed"
                  ],
                  "answer": 2
                },
                {
                  "q": "What was last quarter's score?",
                  "choices": [
                    "Seventy-five percent",
                    "Ninety-two percent",
                    "Eighty-five percent"
                  ],
                  "answer": 2
                },
                {
                  "q": "What new feature was introduced?",
                  "choices": [
                    "A loyalty program",
                    "Live chat",
                    "A mobile app"
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passage": "Product Recall Notice: We are voluntarily recalling Model 220 space heaters due to a potential overheating issue. Customers who purchased this model should stop using it immediately and contact us for a full refund or free replacement. This recall affects units sold between January and March of this year.",
              "questions": [
                {
                  "q": "What product is being recalled?",
                  "choices": [
                    "Model 110 heaters",
                    "Model 220 blenders",
                    "Model 220 space heaters"
                  ],
                  "answer": 2
                },
                {
                  "q": "Why is the product being recalled?",
                  "choices": [
                    "A battery defect",
                    "A labeling error",
                    "A potential overheating issue"
                  ],
                  "answer": 2
                },
                {
                  "q": "What should customers do?",
                  "choices": [
                    "Return it to any store",
                    "Stop using it and contact the company",
                    "Continue using it carefully"
                  ],
                  "answer": 1
                },
                {
                  "q": "What options are offered?",
                  "choices": [
                    "Store credit only",
                    "A full refund or free replacement",
                    "A discount on the next purchase"
                  ],
                  "answer": 1
                },
                {
                  "q": "Which units are affected?",
                  "choices": [
                    "Those sold between January and March",
                    "All units ever sold",
                    "Only units sold in March"
                  ],
                  "answer": 0
                }
              ]
            }
          ],
          "double": [
            {
              "passages": [
                "Shipping Rates: Standard (5-7 days): 5 dollars. Expedited (2-3 days): 12 dollars. Overnight (1 day): 25 dollars. Free standard shipping on orders over 50 dollars.",
                "Hi, my order total is 48 dollars, but I'd like to add one more item to qualify for free shipping. Can you tell me the cheapest item available so I can reach the 50 dollar threshold? Thanks, Layla Haddad."
              ],
              "questions": [
                {
                  "q": "How much is standard shipping?",
                  "choices": [
                    "12 dollars",
                    "5 dollars",
                    "25 dollars"
                  ],
                  "answer": 1
                },
                {
                  "q": "How long does overnight shipping take?",
                  "choices": [
                    "2-3 days",
                    "1 day",
                    "5-7 days"
                  ],
                  "answer": 1
                },
                {
                  "q": "What qualifies for free standard shipping?",
                  "choices": [
                    "All orders",
                    "Orders over 50 dollars",
                    "Orders over 100 dollars"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is Layla's current order total?",
                  "choices": [
                    "50 dollars",
                    "48 dollars",
                    "52 dollars"
                  ],
                  "answer": 1
                },
                {
                  "q": "Why does Layla want to add an item?",
                  "choices": [
                    "To use a coupon",
                    "To qualify for free shipping",
                    "To get a discount"
                  ],
                  "answer": 1
                }
              ]
            },
            {
              "passages": [
                "Warranty Terms: All electronics come with a one-year manufacturer warranty covering defects in materials and workmanship. The warranty does not cover accidental damage, water damage, or normal wear and tear.",
                "Hello, my blender stopped working after eight months of normal use. There is no visible damage, and I believe this is a manufacturing defect. Can I file a warranty claim? Thank you, Tom Baker."
              ],
              "questions": [
                {
                  "q": "How long is the warranty period?",
                  "choices": [
                    "Six months",
                    "Two years",
                    "One year"
                  ],
                  "answer": 2
                },
                {
                  "q": "What does the warranty cover?",
                  "choices": [
                    "Accidental damage",
                    "Water damage",
                    "Defects in materials and workmanship"
                  ],
                  "answer": 2
                },
                {
                  "q": "How long has Tom owned the blender?",
                  "choices": [
                    "Eight months",
                    "Two months",
                    "One year"
                  ],
                  "answer": 0
                },
                {
                  "q": "What does Tom believe caused the issue?",
                  "choices": [
                    "Accidental damage",
                    "Normal wear and tear",
                    "A manufacturing defect"
                  ],
                  "answer": 2
                },
                {
                  "q": "Is Tom's blender still under warranty?",
                  "choices": [
                    "Yes, it is within one year",
                    "No, the warranty expired",
                    "It depends on the store"
                  ],
                  "answer": 0
                }
              ]
            }
          ],
          "triple": [
            {
              "passages": [
                "Delivery Confirmation: Your order #6612 was delivered today at 2:15 PM to your front door, as confirmed by GPS and photo evidence.",
                "Hello, I received a delivery confirmation for order #6612, but I never received the package. I checked around my house and it's not there. Please advise.",
                "Hello, we're sorry to hear this. We've reviewed the delivery photo, which shows the package at your door. Since it appears to have gone missing after delivery, we recommend checking with neighbors or filing a police report if not found. We will also send a replacement at no cost."
              ],
              "questions": [
                {
                  "q": "What is order #6612's status?",
                  "choices": [
                    "It is still in transit",
                    "It was delivered today at 2:15 PM",
                    "It was returned to sender"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is the customer's complaint?",
                  "choices": [
                    "The wrong item arrived",
                    "They never received the package",
                    "The package was damaged"
                  ],
                  "answer": 1
                },
                {
                  "q": "What evidence does the company have?",
                  "choices": [
                    "A delivery photo",
                    "A signature",
                    "A video recording"
                  ],
                  "answer": 0
                },
                {
                  "q": "What does the company recommend?",
                  "choices": [
                    "Checking with neighbors or filing a police report",
                    "Contacting the courier directly",
                    "Waiting another week"
                  ],
                  "answer": 0
                },
                {
                  "q": "What will the company do?",
                  "choices": [
                    "Issue a partial refund",
                    "Nothing further",
                    "Send a replacement at no cost"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passages": [
                "Bulk Order Form: Minimum order for wholesale pricing is 100 units. Standard wholesale price is 8 dollars per unit. Orders over 500 units receive an additional 10 percent discount.",
                "Hello, we'd like to place an order for 600 units. Can you confirm the final price after the bulk discount, and what the estimated delivery time would be?",
                "Hello, thank you for your order. At 600 units, your price per unit would be 7.20 dollars after the 10 percent discount, for a total of 4,320 dollars. Estimated delivery time for bulk orders is 10 to 14 business days."
              ],
              "questions": [
                {
                  "q": "What is the minimum order for wholesale pricing?",
                  "choices": [
                    "100 units",
                    "500 units",
                    "50 units"
                  ],
                  "answer": 0
                },
                {
                  "q": "What is the standard wholesale price per unit?",
                  "choices": [
                    "8 dollars",
                    "7.20 dollars",
                    "10 dollars"
                  ],
                  "answer": 0
                },
                {
                  "q": "How many units does the client want to order?",
                  "choices": [
                    "100",
                    "600",
                    "500"
                  ],
                  "answer": 1
                },
                {
                  "q": "What is the final price per unit after discount?",
                  "choices": [
                    "6.50 dollars",
                    "8 dollars",
                    "7.20 dollars"
                  ],
                  "answer": 2
                },
                {
                  "q": "What is the estimated delivery time for bulk orders?",
                  "choices": [
                    "3 to 5 business days",
                    "One month",
                    "10 to 14 business days"
                  ],
                  "answer": 2
                }
              ]
            },
            {
              "passages": [
                "Subscription Notice: Your monthly subscription box will renew on the 1st of next month, and your card will be charged 35 dollars. To make changes, please update your account before the 25th of this month.",
                "Hi, I would like to cancel my subscription before the next billing date. Please confirm once this has been processed. Thanks, Amir Farouk.",
                "Hello Mr. Farouk, your subscription has been successfully cancelled, and you will not be charged on the 1st. You are welcome to resubscribe at any time through your account page."
              ],
              "questions": [
                {
                  "q": "When does the subscription renew?",
                  "choices": [
                    "The 25th of this month",
                    "The 1st of next month",
                    "The 15th of this month"
                  ],
                  "answer": 1
                },
                {
                  "q": "How much will be charged upon renewal?",
                  "choices": [
                    "35 dollars",
                    "50 dollars",
                    "25 dollars"
                  ],
                  "answer": 0
                },
                {
                  "q": "By when must changes be made?",
                  "choices": [
                    "The 30th of this month",
                    "The 25th of this month",
                    "The 1st of next month"
                  ],
                  "answer": 1
                },
                {
                  "q": "What does Amir request?",
                  "choices": [
                    "To cancel his subscription",
                    "To change his address",
                    "To upgrade his plan"
                  ],
                  "answer": 0
                },
                {
                  "q": "Will Amir be charged next month?",
                  "choices": [
                    "Yes, as scheduled",
                    "No, the subscription was cancelled",
                    "Only a partial charge"
                  ],
                  "answer": 1
                }
              ]
            }
          ]
        }
      }
    }
  ]
};
