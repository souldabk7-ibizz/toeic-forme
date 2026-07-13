/* The 12-week study plan structure driving the Dashboard & Plan tabs. */
window.PLAN = {
  dailyMinutes: 30,
  sessionWindow: "21:00–22:00 (or any 30–60 min slot that works that day)",
  startDate: null, // set on first run in app.js and cached in localStorage

  // Day of week -> session type. JS Date.getDay(): 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat
  dayTypes: {
    0: "rest",
    1: "listening",
    2: "reading",
    3: "listening",
    4: "reading",
    5: "mixed",
    6: "review"
  },

  sessionTemplates: {
    listening: [
      { minutes: 7, label: "Vocab warm-up", detail: "Flashcards: review due words + learn today's new words for this week's list." },
      { minutes: 18, label: "Listening drill", detail: "Part 2 (Q&A) + Part 3/4 (conversations & talks) for this week. Use Play to hear it read aloud, then answer." },
      { minutes: 5, label: "Wrap-up", detail: "Re-listen to any question you missed. Note the word/phrase that tripped you up." }
    ],
    reading: [
      { minutes: 7, label: "Vocab warm-up", detail: "Flashcards: review due words + learn today's new words for this week's list." },
      { minutes: 18, label: "Reading drill", detail: "Part 5 (sentence completion) + Part 6/7 (text completion & comprehension) for this week." },
      { minutes: 5, label: "Wrap-up", detail: "Re-read any sentence you got wrong and say why the correct choice fits grammatically." }
    ],
    mixed: [
      { minutes: 5, label: "Vocab quiz", detail: "Quiz mode on this week's vocab list — aim for 80%+ before moving on." },
      { minutes: 12, label: "Mini listening set", detail: "Redo the listening items you missed this week, plus one new Part 3/4 item." },
      { minutes: 13, label: "Mini reading set", detail: "Redo the reading items you missed this week, plus one new Part 7 passage." }
    ],
    review: [
      { minutes: 30, label: "Free review (optional)", detail: "Catch up on anything missed this week, redo weak items, or rest if you're on track. This day is a buffer — 0 to 30 min is fine." }
    ],
    rest: [
      { minutes: 0, label: "Rest day", detail: "No session required. Light optional: skim this week's vocab once." }
    ]
  },

  // Mirrors the themes in vocab.js/listening.js/reading.js, with the specific TOEIC parts drilled each week.
  weeks: [
    { week: 1, theme: "Office & Workplace", focus: "Foundation: Part 2 short Q&A, Part 5 word forms" },
    { week: 2, theme: "Meetings & Communication", focus: "Part 3 conversations, Part 5 verb forms" },
    { week: 3, theme: "Travel & Transportation", focus: "Part 4 short talks, Part 6 text completion" },
    { week: 4, theme: "Marketing & Sales", focus: "Checkpoint week: mixed mock + review Weeks 1-3 errors" },
    { week: 5, theme: "Finance & Banking", focus: "Part 2/3 numbers & money details, Part 7 single passages" },
    { week: 6, theme: "Human Resources & Recruitment", focus: "Part 3/4 inference questions, Part 5 prepositions" },
    { week: 7, theme: "Contracts & Legal", focus: "Part 4 longer talks, Part 6 connecting words" },
    { week: 8, theme: "Technology & IT", focus: "Checkpoint week: mixed mock + review Weeks 5-7 errors" },
    { week: 9, theme: "Shipping & Logistics", focus: "Part 3 three-speaker conversations, Part 7 double passages" },
    { week: 10, theme: "Health, Safety & Environment", focus: "Part 4 announcements, Part 5 relative clauses" },
    { week: 11, theme: "Customer Service & Complaints", focus: "Part 3/4 tone & purpose questions, Part 7 inference" },
    { week: 12, theme: "General Business Adjectives (Review)", focus: "Full review + full-length practice test" }
  ],

  milestones: [
    { afterWeek: 4, note: "Take a free full-length practice test. Expect small but real gains as habits form.", targetListening: 190, targetReading: 380 },
    { afterWeek: 8, note: "Take another practice test. Listening should be catching up — this is normally the slower mover.", targetListening: 260, targetReading: 410 },
    { afterWeek: 12, note: "End of Phase 1. Take a practice test and compare to your 510 baseline.", targetListening: 320, targetReading: 430 }
  ],

  phaseNote: "Going from 510 to 770 (+260 points) realistically takes about 4-6 months of consistent practice, not 12 weeks. This plan is Phase 1 (weeks 1-12): it builds the vocabulary base and daily habit, and should already move your score meaningfully. After week 12, repeat the same structure as Phase 2 with a fresh set of full-length practice tests, keep the flashcard deck running in spaced-repetition mode, and re-take the real TOEIC when two consecutive practice tests land at or above 770."
};
