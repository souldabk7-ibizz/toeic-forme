/* TOEIC listening drills — 12 weeks. Read aloud in-browser with the Web Speech API (no audio files needed). */
window.LISTENING = {
  weeks: [
    {
      week: 1,
      part2: [
        { q: "When does the meeting start?", choices: ["At nine o'clock.", "By the elevator.", "Yes, I did."], answer: 0 },
        { q: "Who is going to review the agenda?", choices: ["It's on the table.", "My supervisor will.", "Twice a week."], answer: 1 }
      ],
      part3: {
        lines: [
          "W: Have you finished the sales report yet?",
          "M: Almost. I just need ten more minutes.",
          "W: The client is waiting for it by email.",
          "M: No problem, I'll send it right now."
        ],
        questions: [
          { q: "What is the woman asking about?", choices: ["A sales report", "A job interview", "A train schedule"], answer: 0 },
          { q: "What will the man do next?", choices: ["Call the client", "Send an email", "Take a break"], answer: 1 }
        ]
      },
      part4: {
        script: "Good morning, everyone. Before we begin today's meeting, please remember to submit your weekly reports by Friday afternoon. Also, the meeting room has been changed to Room 402.",
        questions: [
          { q: "What are listeners reminded to do?", choices: ["Submit weekly reports", "Book a flight", "Call a client"], answer: 0 },
          { q: "What has been changed?", choices: ["The meeting time", "The meeting room", "The report deadline"], answer: 1 }
        ]
      }
    },
    {
      week: 2,
      part2: [
        { q: "Could you clarify the new policy for me?", choices: ["Sure, let me explain.", "It's very expensive.", "Yes, I attended."], answer: 0 },
        { q: "Why was the conference postponed?", choices: ["Because of the storm.", "It's in Bangkok.", "For two participants."], answer: 0 }
      ],
      part3: {
        lines: [
          "M: Did you get my feedback on the proposal?",
          "W: Yes, thank you. I'll revise the budget section.",
          "M: Great. Can you send it back by tomorrow?",
          "W: Sure, I'll have it ready by noon."
        ],
        questions: [
          { q: "What will the woman revise?", choices: ["The schedule", "The budget section", "The staff list"], answer: 1 },
          { q: "When will the woman send the file?", choices: ["Tonight", "Next week", "By noon tomorrow"], answer: 2 }
        ]
      },
      part4: {
        script: "Attention all participants. The afternoon session has been rescheduled to three o'clock. Please take the minutes of the morning session and email them to the coordinator before lunch.",
        questions: [
          { q: "What time is the afternoon session now?", choices: ["One o'clock", "Two o'clock", "Three o'clock"], answer: 2 },
          { q: "What should listeners email before lunch?", choices: ["The minutes", "The invoice", "The itinerary"], answer: 0 }
        ]
      }
    },
    {
      week: 3,
      part2: [
        { q: "What time does the flight depart?", choices: ["At six thirty.", "From gate twelve.", "It's my luggage."], answer: 0 },
        { q: "Is there a fee to change the reservation?", choices: ["It's a window seat.", "No, it's free.", "Two nights, please."], answer: 1 }
      ],
      part3: {
        lines: [
          "W: Excuse me, is this the line for boarding?",
          "M: Yes, but boarding hasn't started yet.",
          "W: Do you know if the flight is delayed?",
          "M: I heard it will depart on time."
        ],
        questions: [
          { q: "What is the woman asking about?", choices: ["A refund", "The boarding line", "A hotel reservation"], answer: 1 },
          { q: "What does the man say about the flight?", choices: ["It was cancelled", "It will depart on time", "It needs a new gate"], answer: 1 }
        ]
      },
      part4: {
        script: "We are sorry to announce that flight two-two-one to Chiang Mai will be delayed by forty minutes due to weather conditions. Passengers may wait at gate seven. We apologize for any inconvenience.",
        questions: [
          { q: "Why is the flight delayed?", choices: ["Weather conditions", "A mechanical problem", "A staff shortage"], answer: 0 },
          { q: "Where should passengers wait?", choices: ["At the check-in desk", "At gate seven", "In the luggage area"], answer: 1 }
        ]
      }
    },
    {
      week: 4,
      part2: [
        { q: "How much is the discount on this item?", choices: ["Twenty percent.", "Near the entrance.", "Yes, I bought it."], answer: 0 },
        { q: "Who is our biggest competitor this year?", choices: ["Last Tuesday.", "A company from Korea.", "About two hundred dollars."], answer: 1 }
      ],
      part3: {
        lines: [
          "M: How did the customer survey turn out?",
          "W: Most customers were happy with the new packaging.",
          "M: That's good news. Should we launch the campaign now?",
          "W: Yes, let's start it next Monday."
        ],
        questions: [
          { q: "What were customers happy about?", choices: ["The price", "The new packaging", "The delivery time"], answer: 1 },
          { q: "When will the campaign launch?", choices: ["Today", "Next Monday", "Next month"], answer: 1 }
        ]
      },
      part4: {
        script: "Thank you for shopping with us. This weekend only, all clothing items are twenty percent off. Members of our loyalty program receive an extra ten percent discount at checkout.",
        questions: [
          { q: "What is on sale this weekend?", choices: ["Clothing items", "Electronics", "Furniture"], answer: 0 },
          { q: "How do members get an extra discount?", choices: ["By calling ahead", "At checkout", "By mail"], answer: 1 }
        ]
      }
    },
    {
      week: 5,
      part2: [
        { q: "When is the invoice due?", choices: ["By the end of the month.", "In the top drawer.", "Yes, I paid it."], answer: 0 },
        { q: "Did the bank approve the loan?", choices: ["Not yet.", "It's a savings account.", "Twice a year."], answer: 0 }
      ],
      part3: {
        lines: [
          "W: I need to withdraw some cash for the trip.",
          "M: The ATM near the lobby is out of service.",
          "W: Then I'll check my account online instead.",
          "M: Good idea, that should work fine."
        ],
        questions: [
          { q: "What does the woman want to do?", choices: ["Withdraw cash", "Apply for a loan", "Close her account"], answer: 0 },
          { q: "What is wrong with the ATM?", choices: ["It's too far", "It's out of service", "It's out of cash"], answer: 1 }
        ]
      },
      part4: {
        script: "This is a reminder from the finance department. All expense reports for last month must be submitted before the audit begins on Friday. Please attach your receipts to each report.",
        questions: [
          { q: "What must employees submit?", choices: ["Expense reports", "Sales contracts", "Training schedules"], answer: 0 },
          { q: "What starts on Friday?", choices: ["A training session", "The audit", "The interview"], answer: 1 }
        ]
      }
    },
    {
      week: 6,
      part2: [
        { q: "How many applicants applied for the job?", choices: ["Over two hundred.", "Yes, she did.", "In the HR office."], answer: 0 },
        { q: "When is your performance evaluation?", choices: ["Next Tuesday.", "It's a fair salary.", "About the benefits."], answer: 0 }
      ],
      part3: {
        lines: [
          "M: Did you send your resume for the vacancy?",
          "W: Yes, and I have an interview on Monday.",
          "M: That's great! What position is it for?",
          "W: It's for a training coordinator role."
        ],
        questions: [
          { q: "What did the woman send?", choices: ["A contract", "Her resume", "An invoice"], answer: 1 },
          { q: "What position is the woman applying for?", choices: ["Sales manager", "Training coordinator", "Accountant"], answer: 1 }
        ]
      },
      part4: {
        script: "Welcome to your first day of training. During this week, you will learn about our benefits program, meet your supervisor, and complete a short evaluation on Friday.",
        questions: [
          { q: "Who will new employees meet?", choices: ["Their supervisor", "A customer", "A competitor"], answer: 0 },
          { q: "What happens on Friday?", choices: ["A short evaluation", "A company trip", "A salary review"], answer: 0 }
        ]
      }
    },
    {
      week: 7,
      part2: [
        { q: "Has the client signed the agreement?", choices: ["Not yet.", "It's a long contract.", "Every month."], answer: 0 },
        { q: "What happens if we breach the contract?", choices: ["We may face a penalty.", "It's on page ten.", "Yes, we signed it."], answer: 0 }
      ],
      part3: {
        lines: [
          "W: Have you read the new clause about late payments?",
          "M: Yes, it says we must comply within thirty days.",
          "W: What if we can't meet that deadline?",
          "M: Then the client can terminate the contract."
        ],
        questions: [
          { q: "What does the new clause concern?", choices: ["Late payments", "Vacation days", "Product quality"], answer: 0 },
          { q: "What can happen if the deadline is missed?", choices: ["A bonus is given", "The contract is terminated", "The price increases"], answer: 1 }
        ]
      },
      part4: {
        script: "As part of our new compliance policy, all suppliers must sign the updated agreement by the end of this month. Failure to comply may result in the contract being terminated.",
        questions: [
          { q: "Who must sign the updated agreement?", choices: ["All suppliers", "Only new customers", "Government officials"], answer: 0 },
          { q: "What may happen if suppliers do not comply?", choices: ["A discount is offered", "The contract is terminated", "A training is required"], answer: 1 }
        ]
      }
    },
    {
      week: 8,
      part2: [
        { q: "Why isn't the software working?", choices: ["It needs an upgrade.", "It's near the printer.", "Yes, I installed it."], answer: 0 },
        { q: "Could you help troubleshoot my computer?", choices: ["Of course, one moment.", "It's a new device.", "About two megabytes."], answer: 0 }
      ],
      part3: {
        lines: [
          "M: The database seems to be down again.",
          "W: I know, the network has been unstable all day.",
          "M: Should I install the latest update?",
          "W: Yes, that should fix the malfunction."
        ],
        questions: [
          { q: "What problem are they discussing?", choices: ["A broken printer", "A database problem", "A late shipment"], answer: 1 },
          { q: "What does the woman suggest?", choices: ["Calling a supplier", "Installing an update", "Changing the password"], answer: 1 }
        ]
      },
      part4: {
        script: "IT Department notice: our network will be upgraded this weekend. Please back up your files before Friday evening, and change your password once the system restarts on Monday.",
        questions: [
          { q: "What should employees do before Friday evening?", choices: ["Back up their files", "Install new software", "Attend a training"], answer: 0 },
          { q: "What should employees do on Monday?", choices: ["Change their password", "Submit a report", "Contact a supplier"], answer: 0 }
        ]
      }
    },
    {
      week: 9,
      part2: [
        { q: "When will the shipment arrive?", choices: ["On Monday morning.", "It's in the warehouse.", "Yes, I ordered it."], answer: 0 },
        { q: "Is the inventory up to date?", choices: ["Yes, I updated it today.", "About five boxes.", "Near the loading dock."], answer: 0 }
      ],
      part3: {
        lines: [
          "W: The supplier says the freight costs have increased.",
          "M: That's not good. Will the delivery still be on time?",
          "W: Yes, but customs might cause a small delay.",
          "M: Let's inform the client just in case."
        ],
        questions: [
          { q: "What has increased?", choices: ["Freight costs", "Staff salaries", "Office rent"], answer: 0 },
          { q: "What might cause a delay?", choices: ["Customs", "The weather", "A strike"], answer: 0 }
        ]
      },
      part4: {
        script: "Attention warehouse staff. Today's shipment will be dispatched by three o'clock. Please make sure the packaging is complete and the inventory list is updated before it leaves.",
        questions: [
          { q: "What time will the shipment be dispatched?", choices: ["One o'clock", "Two o'clock", "Three o'clock"], answer: 2 },
          { q: "What must be updated before the shipment leaves?", choices: ["The inventory list", "The delivery van", "The customer contract"], answer: 0 }
        ]
      }
    },
    {
      week: 10,
      part2: [
        { q: "Is it safe to enter that room?", choices: ["Not without protective gear.", "Yes, I inspected it.", "About an hour ago."], answer: 0 },
        { q: "Why did the alarm go off?", choices: ["There may be a hazard.", "It's a new device.", "Every Friday."], answer: 0 }
      ],
      part3: {
        lines: [
          "M: The fire alarm just went off again.",
          "W: We should evacuate the building immediately.",
          "M: I already told everyone on this floor.",
          "W: Good, let's meet at the front entrance."
        ],
        questions: [
          { q: "What should employees do?", choices: ["Evacuate the building", "Call a supervisor", "Finish their reports"], answer: 0 },
          { q: "Where will they meet?", choices: ["At the front entrance", "In the meeting room", "At the warehouse"], answer: 0 }
        ]
      },
      part4: {
        script: "As a safety precaution, the factory floor will be inspected this afternoon. All workers must wear protective equipment and ensure proper ventilation is maintained in their work area.",
        questions: [
          { q: "What will happen this afternoon?", choices: ["An inspection", "A training session", "A company party"], answer: 0 },
          { q: "What must workers wear?", choices: ["Protective equipment", "Formal clothing", "Name tags"], answer: 0 }
        ]
      }
    },
    {
      week: 11,
      part2: [
        { q: "Did the customer file a complaint?", choices: ["Yes, about the delivery.", "It's under warranty.", "Twice this week."], answer: 0 },
        { q: "How can I resolve this issue quickly?", choices: ["Contact customer service.", "It's a small package.", "Yes, I complained."], answer: 0 }
      ],
      part3: {
        lines: [
          "W: A customer is asking about a replacement item.",
          "M: Let's check if it's still under warranty.",
          "W: It is, so we can send one for free.",
          "M: Great, I'll respond to the inquiry now."
        ],
        questions: [
          { q: "What does the customer want?", choices: ["A refund", "A replacement item", "A discount"], answer: 1 },
          { q: "What will the man do next?", choices: ["Call the supplier", "Respond to the inquiry", "Update the inventory"], answer: 1 }
        ]
      },
      part4: {
        script: "Thank you for contacting customer service. We apologize for the inconvenience you experienced with your order. A staff member will assist you and resolve your complaint within one business day.",
        questions: [
          { q: "What does the message apologize for?", choices: ["A price increase", "An inconvenience with an order", "A cancelled meeting"], answer: 1 },
          { q: "How soon will the complaint be resolved?", choices: ["Within one business day", "Within one week", "Within one month"], answer: 0 }
        ]
      }
    },
    {
      week: 12,
      part2: [
        { q: "Is the new process more efficient?", choices: ["Yes, much faster.", "It's a flexible schedule.", "About ten employees."], answer: 0 },
        { q: "Do we have sufficient staff for the event?", choices: ["I'm afraid not.", "It's very competitive.", "Yes, I attended."], answer: 0 }
      ],
      part3: {
        lines: [
          "M: This quarter's results look very productive.",
          "W: Yes, our new process is much more efficient.",
          "M: Do you think it's sustainable long term?",
          "W: I believe so, as long as staffing stays flexible."
        ],
        questions: [
          { q: "How do the results look this quarter?", choices: ["Disappointing", "Very productive", "Delayed"], answer: 1 },
          { q: "What does the woman say about staffing?", choices: ["It must stay flexible", "It needs to be reduced", "It is not important"], answer: 0 }
        ]
      },
      part4: {
        script: "In closing, this year's growth shows that our team is both efficient and innovative. Looking ahead, we must remain competitive and stay flexible as market conditions change.",
        questions: [
          { q: "How does the speaker describe the team?", choices: ["Efficient and innovative", "Slow and careful", "New and untrained"], answer: 0 },
          { q: "What must the company remain, according to the speaker?", choices: ["Competitive and flexible", "Small and local", "Traditional"], answer: 0 }
        ]
      }
    }
  ]
};
