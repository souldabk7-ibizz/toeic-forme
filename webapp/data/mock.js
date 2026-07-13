/* Original TOEIC-style full practice sets (Mock Tests).
   Written in the TOEIC format — NOT copied from any official ETS test.
   Each set: Listening Part 2/3/4 + Reading Part 5/6/7. */
window.MOCK = {
  sets: [
    /* ======================= SET 1 — Office & Meetings ======================= */
    {
      set: 1,
      title: "ชุดที่ 1 · Office & Meetings",
      listening: {
        part2: [
          { q: "When will the new manager start?", choices: ["Next Monday.", "In the meeting room.", "Yes, he is."], answer: 0 },
          { q: "Where did you put the sales report?", choices: ["At three o'clock.", "On your desk.", "It was very long."], answer: 1 },
          { q: "Why isn't the printer working?", choices: ["It's out of paper.", "In the supply room.", "Yes, please."], answer: 0 },
          { q: "Who is leading today's meeting?", choices: ["About the budget.", "The marketing director.", "In an hour."], answer: 1 },
          { q: "How long will the training last?", choices: ["Two hours.", "In room 305.", "The new staff."], answer: 0 },
          { q: "Would you like me to email the schedule?", choices: ["Yes, that would be great.", "It's on Friday.", "He already left."], answer: 0 }
        ],
        part3: [
          {
            lines: [
              "M: Have you booked the conference room for tomorrow?",
              "W: Not yet. How many people will attend?",
              "M: About twelve, including the two new interns.",
              "W: Then I'll reserve the large room on the third floor."
            ],
            questions: [
              { q: "What are the speakers mainly discussing?", choices: ["Booking a meeting room", "Hiring new interns", "Writing a sales report"], answer: 0 },
              { q: "How many people will attend?", choices: ["About twenty", "About twelve", "About two"], answer: 1 }
            ]
          },
          {
            lines: [
              "W: Did you finish the budget proposal?",
              "M: Almost, but I still need last month's figures.",
              "W: I can send them to you right after lunch.",
              "M: Perfect. Then I'll submit it by the end of the day."
            ],
            questions: [
              { q: "What does the man still need?", choices: ["Last month's figures", "A meeting room", "A new laptop"], answer: 0 },
              { q: "When will the man submit the proposal?", choices: ["By the end of the day", "Next week", "Tomorrow morning"], answer: 0 }
            ]
          }
        ],
        part4: [
          {
            script: "Good afternoon, everyone. This is a reminder that the office will close early, at four o'clock, this Friday for building maintenance. Please save your work and log off your computers before you leave.",
            questions: [
              { q: "Why will the office close early on Friday?", choices: ["For building maintenance", "For a public holiday", "For a company party"], answer: 0 },
              { q: "What are listeners asked to do?", choices: ["Save their work and log off", "Attend a meeting", "Submit a report"], answer: 0 }
            ]
          },
          {
            script: "Hello, this is David from the IT department. I'm calling about the laptop you requested. It's ready for pickup at the help desk on the second floor. Please bring your employee ID when you come.",
            questions: [
              { q: "Why is the speaker calling?", choices: ["A laptop is ready for pickup", "A meeting was cancelled", "A password was reset"], answer: 0 },
              { q: "What should the listener bring?", choices: ["A report", "An employee ID", "A laptop"], answer: 1 }
            ]
          }
        ]
      },
      reading: {
        part5: [
          { sentence: "The manager asked all employees to ______ the meeting on time.", choices: ["attend", "attention", "attendance", "attentive"], answer: 0 },
          { sentence: "Sales have increased ______ since the new campaign began.", choices: ["significantly", "significant", "significance", "signify"], answer: 0 },
          { sentence: "Please submit your report ______ Friday afternoon.", choices: ["by", "among", "into", "of"], answer: 0 },
          { sentence: "The new software is much easier to use than the ______ one.", choices: ["previous", "previously", "preview", "previews"], answer: 0 },
          { sentence: "Employees ______ work overtime will receive additional pay.", choices: ["who", "which", "whose", "where"], answer: 0 },
          { sentence: "The company plans ______ a new office next year.", choices: ["to open", "opening", "opened", "opens"], answer: 0 },
          { sentence: "All visitors must ______ in at the front desk.", choices: ["sign", "signs", "signed", "to signing"], answer: 0 },
          { sentence: "The presentation was ______ organized and easy to follow.", choices: ["well", "good", "goodness", "welling"], answer: 0 }
        ],
        part6: {
          passage: "To all staff: Beginning next month, we will introduce a new system for booking meeting rooms. Employees will be able to ___1___ rooms online instead of calling the front desk. This change should make scheduling faster and more ___2___. A short training session will be held on the first Monday of the month.",
          blanks: [
            { choices: ["reserve", "reservation", "reserved", "reserving"], answer: 0 },
            { choices: ["convenient", "convenience", "conveniently", "convenienced"], answer: 0 }
          ],
          questions: [
            { q: "What is the main purpose of the notice?", choices: ["To announce a new room-booking system", "To cancel a training session", "To hire new staff"], answer: 0 }
          ]
        },
        part7: [
          {
            passage: "Notice from the Facilities Department: The north parking lot will be closed next Wednesday for resurfacing. Employees who normally park there should use the south lot or street parking on Elm Avenue instead. The lot is expected to reopen on Thursday morning. We apologize for any inconvenience.",
            questions: [
              { q: "When is the north parking lot expected to reopen?", choices: ["Thursday morning", "Wednesday evening", "Next Monday"], answer: 0 },
              { q: "What are affected employees advised to do?", choices: ["Use the south lot or street parking", "Work from home", "Take the day off"], answer: 0 }
            ]
          },
          {
            passage: "Green Cafe is pleased to announce the opening of its second location downtown on Pine Street. To celebrate, all coffee drinks will be half price during the first week. The new branch will open daily from seven in the morning until eight in the evening.",
            questions: [
              { q: "What is being announced?", choices: ["The opening of a new cafe branch", "A change in opening hours", "A new coffee flavor"], answer: 0 },
              { q: "What special offer is mentioned?", choices: ["Half-price coffee drinks for one week", "A free breakfast", "A loyalty card"], answer: 0 }
            ]
          }
        ]
      }
    },

    /* ======================= SET 2 — Travel & Hotels ======================= */
    {
      set: 2,
      title: "ชุดที่ 2 · Travel & Hotels",
      listening: {
        part2: [
          { q: "What time does the shuttle leave for the airport?", choices: ["At half past six.", "From the lobby.", "Yes, it's free."], answer: 0 },
          { q: "Where can I find a taxi?", choices: ["In twenty minutes.", "Just outside the main entrance.", "It was expensive."], answer: 1 },
          { q: "Has the flight been delayed?", choices: ["Yes, by about an hour.", "At gate ten.", "A window seat, please."], answer: 0 },
          { q: "Would you prefer a room with a sea view?", choices: ["Yes, if it's available.", "On the fifth floor.", "For three nights."], answer: 0 },
          { q: "Why are you visiting the city?", choices: ["By train.", "Last weekend.", "For a business conference."], answer: 2 },
          { q: "How would you like to pay?", choices: ["By credit card, please.", "At the front desk.", "It's room 210."], answer: 0 }
        ],
        part3: [
          {
            lines: [
              "W: Good evening. I have a reservation under the name Carter.",
              "M: Let me check. Yes, a double room for two nights.",
              "W: That's right. Is breakfast included?",
              "M: Yes, it's served from seven to ten in the restaurant."
            ],
            questions: [
              { q: "Where does this conversation most likely take place?", choices: ["At a hotel", "At an airport", "At a travel agency"], answer: 0 },
              { q: "When is breakfast served?", choices: ["From seven to ten", "From six to nine", "All day"], answer: 0 }
            ]
          },
          {
            lines: [
              "M: Our train to Osaka leaves at nine, right?",
              "W: Actually, they changed it to nine thirty.",
              "M: Good, then we have time for coffee.",
              "W: Let's meet at the station cafe at nine."
            ],
            questions: [
              { q: "What time does the train leave now?", choices: ["Nine thirty", "Nine", "Ten"], answer: 0 },
              { q: "Where will the speakers meet?", choices: ["At the station cafe", "On the platform", "At the hotel"], answer: 0 }
            ]
          }
        ],
        part4: [
          {
            script: "Attention passengers on flight BA204 to London. Boarding will begin shortly at gate fifteen. Please have your boarding pass and passport ready. Passengers traveling with small children may board first.",
            questions: [
              { q: "Which gate will be used for boarding?", choices: ["Gate fifteen", "Gate fifty", "Gate five"], answer: 0 },
              { q: "Who may board first?", choices: ["Passengers with small children", "Business-class passengers", "Airport staff"], answer: 0 }
            ]
          },
          {
            script: "Thank you for staying with us. Please remember that check-out time is eleven in the morning. If you would like a late check-out, contact the front desk before ten, and we will do our best to help.",
            questions: [
              { q: "What is the check-out time?", choices: ["Eleven in the morning", "Ten in the morning", "Noon"], answer: 0 },
              { q: "How can a guest request a late check-out?", choices: ["By contacting the front desk before ten", "By paying online", "By emailing the manager"], answer: 0 }
            ]
          }
        ]
      },
      reading: {
        part5: [
          { sentence: "The hotel is located ______ walking distance of the beach.", choices: ["within", "among", "between", "onto"], answer: 0 },
          { sentence: "Guests are ______ to check out before noon.", choices: ["required", "require", "requirement", "requiring"], answer: 0 },
          { sentence: "We apologize for the ______ caused by the delay.", choices: ["inconvenience", "inconvenient", "inconveniently", "inconvenienced"], answer: 0 },
          { sentence: "The tour guide spoke ______ so that everyone could understand.", choices: ["clearly", "clear", "clearer", "clarity"], answer: 0 },
          { sentence: "Please make sure your luggage is ______ labeled.", choices: ["properly", "proper", "property", "propriety"], answer: 0 },
          { sentence: "The plane ______ off two hours late because of the storm.", choices: ["took", "take", "taken", "taking"], answer: 0 },
          { sentence: "You can request a refund ______ you cancel within 24 hours.", choices: ["if", "despite", "although", "unless"], answer: 0 },
          { sentence: "All passengers ______ their seatbelts during takeoff and landing.", choices: ["must wear", "wearing", "to wear", "worn"], answer: 0 }
        ],
        part6: {
          passage: "Dear Guest, thank you for choosing Sunrise Hotel. To help us serve you better, we invite you to ___1___ a short survey about your stay. Your feedback will help us ___2___ our services. As a thank-you, guests who complete the survey will receive a discount on their next booking.",
          blanks: [
            { choices: ["complete", "completion", "completely", "completes"], answer: 0 },
            { choices: ["improve", "improvement", "improving", "improves"], answer: 0 }
          ],
          questions: [
            { q: "What will guests receive for completing the survey?", choices: ["A discount on their next booking", "A free room upgrade", "A gift card"], answer: 0 }
          ]
        },
        part7: [
          {
            passage: "Reminder for the Tokyo business trip: The team will meet at the airport information desk at eight in the morning on Monday. Please bring a printed copy of your itinerary and your passport. Lunch will be provided during the flight, so there is no need to buy food beforehand.",
            questions: [
              { q: "Where will the team meet?", choices: ["At the airport information desk", "At the hotel lobby", "At the train station"], answer: 0 },
              { q: "What are travelers told to bring?", choices: ["A printed itinerary and passport", "A laptop and charger", "Cash for lunch"], answer: 0 }
            ]
          },
          {
            passage: "Escape to Lakeside Resort this summer. Our special weekend package includes two nights' accommodation, breakfast for two, and free use of the swimming pool and gym. Book before the end of June to enjoy a twenty percent early-bird discount.",
            questions: [
              { q: "What is included in the weekend package?", choices: ["Two nights, breakfast, and use of the pool and gym", "Airport transfer and dinner", "A guided city tour"], answer: 0 },
              { q: "How can guests get the discount?", choices: ["By booking before the end of June", "By staying three nights", "By joining a membership"], answer: 0 }
            ]
          }
        ]
      }
    },

    /* ======================= SET 3 — Finance & Orders ======================= */
    {
      set: 3,
      title: "ชุดที่ 3 · Finance & Orders",
      listening: {
        part2: [
          { q: "When is the invoice due?", choices: ["At the end of the month.", "In the accounting office.", "Yes, I paid it."], answer: 0 },
          { q: "How many units did the client order?", choices: ["Last Tuesday.", "Five hundred.", "By truck."], answer: 1 },
          { q: "Could you send me the updated price list?", choices: ["Sure, right away.", "It's on the shelf.", "He is the supplier."], answer: 0 },
          { q: "Why was the payment declined?", choices: ["The card has expired.", "At the bank.", "Two thousand dollars."], answer: 0 },
          { q: "Where should I send the invoice?", choices: ["Next Friday.", "It's overdue.", "To the finance department."], answer: 2 },
          { q: "Did the shipment arrive yet?", choices: ["Yes, this morning.", "In the warehouse.", "About ten boxes."], answer: 0 }
        ],
        part3: [
          {
            lines: [
              "W: I'm calling about order number four-five-two. Two items are missing.",
              "M: I'm sorry about that. Which items didn't arrive?",
              "W: The keyboards. We received the monitors, though.",
              "M: I'll arrange for the keyboards to be shipped today."
            ],
            questions: [
              { q: "What is the problem?", choices: ["Some items are missing", "The order was cancelled", "The price was wrong"], answer: 0 },
              { q: "What will the man do?", choices: ["Ship the missing keyboards today", "Give a refund", "Send a new invoice"], answer: 0 }
            ]
          },
          {
            lines: [
              "M: Have we stayed within the marketing budget this quarter?",
              "W: Almost. We're about five percent over.",
              "M: That's not too bad. What caused the increase?",
              "W: Mainly the extra online advertising."
            ],
            questions: [
              { q: "What are the speakers discussing?", choices: ["The marketing budget", "A new product", "A staff meeting"], answer: 0 },
              { q: "What caused the increase?", choices: ["Extra online advertising", "Higher salaries", "Travel costs"], answer: 0 }
            ]
          }
        ],
        part4: [
          {
            script: "This is a message from First City Bank. Starting in September, monthly account statements will be sent by email instead of by paper mail. If you wish to continue receiving paper statements, please update your preferences in the online banking app.",
            questions: [
              { q: "What change is being announced?", choices: ["Statements will be sent by email", "Branches will close early", "Fees will increase"], answer: 0 },
              { q: "What should customers do to keep paper statements?", choices: ["Update their preferences in the app", "Visit a branch", "Call customer service"], answer: 0 }
            ]
          },
          {
            script: "Hi, this is Maria from Bright Supplies. I'm calling to confirm your recent order of office chairs. Unfortunately, the blue model is out of stock, but we can offer the gray model at the same price. Please let me know how you'd like to proceed.",
            questions: [
              { q: "Why is Maria calling?", choices: ["To confirm an order and report a stock issue", "To ask for payment", "To cancel a delivery"], answer: 0 },
              { q: "What does Maria offer?", choices: ["The gray model at the same price", "A full refund", "Free shipping"], answer: 0 }
            ]
          }
        ]
      },
      reading: {
        part5: [
          { sentence: "The payment must be made ______ 30 days of receiving the invoice.", choices: ["within", "since", "among", "through"], answer: 0 },
          { sentence: "Our profits have risen ______ compared to last year.", choices: ["sharply", "sharp", "sharpen", "sharpness"], answer: 0 },
          { sentence: "The accountant is responsible ______ preparing the monthly reports.", choices: ["for", "to", "with", "of"], answer: 0 },
          { sentence: "The supplier promised a ______ delivery of the goods.", choices: ["prompt", "promptly", "promptness", "prompted"], answer: 0 },
          { sentence: "Please review the contract ______ signing it.", choices: ["before", "during", "while", "since"], answer: 0 },
          { sentence: "The finance team ______ the report before the deadline.", choices: ["completed", "completing", "completion", "to complete"], answer: 0 },
          { sentence: "If the shipment is late, we ______ the customer immediately.", choices: ["will notify", "notifying", "notified", "to notify"], answer: 0 },
          { sentence: "All expenses must be ______ by a receipt.", choices: ["supported", "support", "supporting", "supportive"], answer: 0 }
        ],
        part6: {
          passage: "Attention all department heads: Please submit your budget requests for next year by October 15. Each request should ___1___ a short explanation of any major expenses. The finance committee will ___2___ all requests and announce the approved budgets in November.",
          blanks: [
            { choices: ["include", "including", "included", "inclusion"], answer: 0 },
            { choices: ["review", "reviewing", "reviewed", "reviewer"], answer: 0 }
          ],
          questions: [
            { q: "By when should budget requests be submitted?", choices: ["October 15", "November 1", "The end of the year"], answer: 0 }
          ]
        },
        part7: [
          {
            passage: "This is a friendly reminder that invoice number 7781, for the amount of two thousand four hundred dollars, is due on the 30th of this month. If payment has already been sent, please disregard this notice. For any questions about the invoice, contact our billing department.",
            questions: [
              { q: "What is the purpose of this email?", choices: ["To remind the customer about a due invoice", "To confirm a delivery", "To offer a discount"], answer: 0 },
              { q: "What should the reader do if they have questions?", choices: ["Contact the billing department", "Visit the office", "Wait for another email"], answer: 0 }
            ]
          },
          {
            passage: "Due to high demand, our popular Model X printer is currently out of stock. New shipments are expected to arrive within two weeks. Customers who have already placed orders will receive their printers as soon as the stock arrives, and no further action is needed.",
            questions: [
              { q: "Why is the Model X printer unavailable?", choices: ["It is out of stock due to high demand", "It was discontinued", "It was recalled"], answer: 0 },
              { q: "What should customers who already ordered do?", choices: ["Nothing; they will receive it when stock arrives", "Reorder the product", "Choose a different model"], answer: 0 }
            ]
          }
        ]
      }
    },

    /* ======================= SET 4 — HR & Technology ======================= */
    {
      set: 4,
      title: "ชุดที่ 4 · HR & Technology",
      listening: {
        part2: [
          { q: "Have you submitted your application yet?", choices: ["Yes, last week.", "In the HR office.", "She's the manager."], answer: 0 },
          { q: "Who should I contact about the job opening?", choices: ["Next Monday.", "The HR manager.", "It's a good salary."], answer: 1 },
          { q: "Why is the system running so slowly?", choices: ["It needs an update.", "In the server room.", "Yes, I restarted it."], answer: 0 },
          { q: "When does the training program begin?", choices: ["On the first of March.", "In room 210.", "About twenty people."], answer: 0 },
          { q: "Could you help me reset my password?", choices: ["It's a new laptop.", "At the help desk.", "Of course, one moment."], answer: 2 },
          { q: "How many candidates did we interview?", choices: ["Around fifteen.", "Yesterday afternoon.", "In the meeting room."], answer: 0 }
        ],
        part3: [
          {
            lines: [
              "W: I'd like to schedule an interview for the analyst position.",
              "M: Certainly. Are you available on Thursday morning?",
              "W: Thursday works, but I'd prefer the afternoon.",
              "M: No problem. Let's say two o'clock on Thursday."
            ],
            questions: [
              { q: "What are the speakers arranging?", choices: ["A job interview", "A team lunch", "A product demo"], answer: 0 },
              { q: "When will the interview take place?", choices: ["Thursday at two o'clock", "Thursday morning", "Friday afternoon"], answer: 0 }
            ]
          },
          {
            lines: [
              "M: My computer won't connect to the network.",
              "W: Have you tried restarting it?",
              "M: Yes, twice, but it still doesn't work.",
              "W: Okay, I'll send someone from IT to your desk."
            ],
            questions: [
              { q: "What is the man's problem?", choices: ["His computer won't connect to the network", "He forgot his password", "His printer is broken"], answer: 0 },
              { q: "What will the woman do?", choices: ["Send someone from IT", "Restart the server", "Replace the computer"], answer: 0 }
            ]
          }
        ],
        part4: [
          {
            script: "Welcome to the company. During today's orientation, you will receive your employee badge, set up your email account, and take a short tour of the building. If you have any questions, your team leader will be happy to help.",
            questions: [
              { q: "What is the purpose of the talk?", choices: ["To welcome new employees at orientation", "To announce a promotion", "To report a problem"], answer: 0 },
              { q: "Which activity is NOT mentioned?", choices: ["Signing a new contract", "Receiving an employee badge", "Taking a building tour"], answer: 0 }
            ]
          },
          {
            script: "Please note that the email system will be down for maintenance this Saturday, from midnight to six in the morning. During this time, you will not be able to send or receive messages. We recommend saving any important drafts before Friday evening.",
            questions: [
              { q: "When will the email system be unavailable?", choices: ["Saturday from midnight to six a.m.", "All weekend", "Friday afternoon"], answer: 0 },
              { q: "What are employees advised to do?", choices: ["Save important drafts before Friday evening", "Turn off their computers", "Work from home"], answer: 0 }
            ]
          }
        ]
      },
      reading: {
        part5: [
          { sentence: "The company offers excellent ______ to its employees, including health insurance.", choices: ["benefits", "benefit", "beneficial", "benefited"], answer: 0 },
          { sentence: "All new staff must complete the ______ program within their first month.", choices: ["training", "train", "trained", "trainer"], answer: 0 },
          { sentence: "The technician will ______ the software this afternoon.", choices: ["update", "updated", "updating", "updates"], answer: 0 },
          { sentence: "Candidates ______ experience in marketing are preferred.", choices: ["with", "of", "among", "onto"], answer: 0 },
          { sentence: "The manager was impressed ______ her presentation skills.", choices: ["by", "for", "to", "at"], answer: 0 },
          { sentence: "Employees are encouraged to ______ their passwords regularly.", choices: ["change", "changing", "changed", "changes"], answer: 0 },
          { sentence: "The interview went well, ______ she felt confident about the job.", choices: ["so", "but", "although", "despite"], answer: 0 },
          { sentence: "Our new system is far more ______ than the old one.", choices: ["reliable", "reliably", "reliability", "rely"], answer: 0 }
        ],
        part6: {
          passage: "To all employees: The company will launch a new online learning platform next week. Through this platform, staff can ___1___ courses to improve their skills at any time. Completing courses may also help employees ___2___ for promotions. Login details will be sent to your email on Monday.",
          blanks: [
            { choices: ["take", "takes", "taking", "taken"], answer: 0 },
            { choices: ["qualify", "qualification", "qualified", "qualifying"], answer: 0 }
          ],
          questions: [
            { q: "What is the announcement mainly about?", choices: ["A new online learning platform", "A change in work hours", "A company holiday"], answer: 0 }
          ]
        },
        part7: [
          {
            passage: "Marketing Assistant Wanted. Bright Media is seeking a full-time marketing assistant to join our growing team. The ideal candidate has strong communication skills and at least one year of experience. Interested applicants should send a resume and cover letter to our HR office by June 20.",
            questions: [
              { q: "What position is being advertised?", choices: ["Marketing assistant", "IT technician", "Sales manager"], answer: 0 },
              { q: "What must applicants do?", choices: ["Send a resume and cover letter by June 20", "Call the office", "Attend an open house"], answer: 0 }
            ]
          },
          {
            passage: "IT Reminder: To keep our systems secure, all employees are required to change their passwords every 90 days. Your current password will expire on Friday. Please update it before then to avoid being locked out of your account. Contact the help desk if you need assistance.",
            questions: [
              { q: "How often must passwords be changed?", choices: ["Every 90 days", "Every month", "Once a year"], answer: 0 },
              { q: "What may happen if the password is not updated?", choices: ["The employee may be locked out of the account", "The computer will shut down", "A fee will be charged"], answer: 0 }
            ]
          }
        ]
      }
    },

    /* ======================= SET 5 — Customer Service & Logistics ======================= */
    {
      set: 5,
      title: "ชุดที่ 5 · Service & Logistics",
      listening: {
        part2: [
          { q: "How can I track my order?", choices: ["Use the number in your email.", "At the post office.", "Yes, it arrived."], answer: 0 },
          { q: "Why was my package returned?", choices: ["By express delivery.", "The address was incorrect.", "Two days ago."], answer: 1 },
          { q: "When will my refund be processed?", choices: ["Within five business days.", "At the store.", "It was damaged."], answer: 0 },
          { q: "Is this product still under warranty?", choices: ["Yes, for another year.", "In the box.", "About fifty dollars."], answer: 0 },
          { q: "Where should I return the item?", choices: ["Last week.", "It's too small.", "To our nearest branch."], answer: 2 },
          { q: "Would you like a replacement or a refund?", choices: ["A replacement, please.", "At checkout.", "It's out of stock."], answer: 0 }
        ],
        part3: [
          {
            lines: [
              "W: I received the wrong size shirt in my order.",
              "M: I'm sorry about that. Do you have your order number?",
              "W: Yes, it's three-three-nine-one.",
              "M: Thank you. I'll send the correct size right away."
            ],
            questions: [
              { q: "What is the woman's problem?", choices: ["She received the wrong size", "The item was broken", "The order was late"], answer: 0 },
              { q: "What will the man do?", choices: ["Send the correct size", "Give a discount", "Cancel the order"], answer: 0 }
            ]
          },
          {
            lines: [
              "M: Can you deliver the furniture before the weekend?",
              "W: We can schedule it for Friday afternoon.",
              "W: But someone will need to be home to receive it.",
              "M: That's fine. I'll be there all afternoon."
            ],
            questions: [
              { q: "When will the furniture be delivered?", choices: ["Friday afternoon", "Saturday morning", "Next Monday"], answer: 0 },
              { q: "What does the woman say is needed?", choices: ["Someone must be home to receive it", "A signature at the store", "Payment in advance"], answer: 0 }
            ]
          }
        ],
        part4: [
          {
            script: "Attention shoppers. Our customer service desk is located on the first floor, near the main entrance. If you need help with returns, exchanges, or gift wrapping, our staff will be glad to assist you until nine this evening.",
            questions: [
              { q: "Where is the customer service desk located?", choices: ["On the first floor near the main entrance", "On the top floor", "Next to the parking lot"], answer: 0 },
              { q: "Until what time is the desk open?", choices: ["Nine in the evening", "Six in the evening", "Noon"], answer: 0 }
            ]
          },
          {
            script: "Hello, this is a message from Quick Delivery. We attempted to deliver your package today, but no one was available to sign for it. We will try again tomorrow between nine and noon. To arrange a different time, please call us back at this number.",
            questions: [
              { q: "Why was the package not delivered?", choices: ["No one was available to sign for it", "The address was wrong", "It was damaged"], answer: 0 },
              { q: "When will delivery be attempted again?", choices: ["Tomorrow between nine and noon", "This evening", "Next week"], answer: 0 }
            ]
          }
        ]
      },
      reading: {
        part5: [
          { sentence: "If you are not ______ with your purchase, you may return it within 30 days.", choices: ["satisfied", "satisfy", "satisfaction", "satisfying"], answer: 0 },
          { sentence: "Our staff will ______ you with any questions you may have.", choices: ["assist", "assistance", "assistant", "assisted"], answer: 0 },
          { sentence: "The damaged item will be replaced ______ no extra cost.", choices: ["at", "in", "for", "by"], answer: 0 },
          { sentence: "Please keep your receipt, ______ you may need it for returns.", choices: ["as", "despite", "although", "unless"], answer: 0 },
          { sentence: "We aim to ______ all complaints within 24 hours.", choices: ["resolve", "resolution", "resolved", "resolving"], answer: 0 },
          { sentence: "The delivery driver called to confirm the ______ address.", choices: ["delivery", "deliver", "delivered", "delivering"], answer: 0 },
          { sentence: "Customers can choose ______ a refund or a replacement.", choices: ["either", "neither", "both", "whether"], answer: 0 },
          { sentence: "Thank you for your ______; your order will be shipped soon.", choices: ["patience", "patient", "patiently", "patients"], answer: 0 }
        ],
        part6: {
          passage: "Thank you for shopping with us. If you are not completely happy with your order, you may return any item within 30 days for a full refund. To start a return, simply ___1___ the return form included in your package. Once we receive the item, your refund will be ___2___ within five business days.",
          blanks: [
            { choices: ["complete", "completion", "completely", "completes"], answer: 0 },
            { choices: ["processed", "process", "processing", "processor"], answer: 0 }
          ],
          questions: [
            { q: "How long do customers have to return an item?", choices: ["30 days", "5 days", "One year"], answer: 0 }
          ]
        },
        part7: [
          {
            passage: "Our Return Policy: Items may be returned within 30 days of purchase, provided they are unused and in their original packaging. Refunds will be issued to the original payment method. Please note that shipping fees are non-refundable, and sale items can be exchanged but not refunded.",
            questions: [
              { q: "What condition must returned items meet?", choices: ["They must be unused and in their original packaging", "They must be gift-wrapped", "They must include a photo"], answer: 0 },
              { q: "What is true about sale items?", choices: ["They can be exchanged but not refunded", "They cannot be returned at all", "They can be fully refunded"], answer: 0 }
            ]
          },
          {
            passage: "Good news! Your order has shipped and is on its way. You can expect delivery within three to five business days. A tracking number has been sent to your email so you can follow your package. If you are not home at the time of delivery, the driver will leave a note with instructions.",
            questions: [
              { q: "What is the purpose of this message?", choices: ["To inform the customer that the order has shipped", "To confirm a return", "To offer a discount"], answer: 0 },
              { q: "How can the customer follow the package?", choices: ["With the tracking number sent by email", "By calling the store", "By visiting the warehouse"], answer: 0 }
            ]
          }
        ]
      }
    }
  ]
};
