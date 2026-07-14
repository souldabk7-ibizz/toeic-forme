/* Progressive TOEIC grammar & vocabulary-building lessons (Part 5/6 focus).
   Original explanations and practice items — not copied from any ETS material. */
window.GRAMMAR = {
  lessons: [
    {
      id: 1,
      title: "รูปแบบคำ (Word Forms): นาม กริยา คุณศัพท์ กริยาวิเศษณ์",
      explain: [
        {
          heading: "หลักการ",
          body: "โจทย์ Part 5 ส่วนใหญ่ให้ดู “ตำแหน่ง” ของช่องว่างในประโยค ไม่ใช่ความหมายอย่างเดียว\n- หลัง a/an/the/this/my และหน้ากริยา → มักต้องเป็น คำนาม (Noun)\n- หน้าคำนามเปล่าๆ (ไม่มีคำนามอื่นคั่น) → มักต้องเป็น คุณศัพท์ (Adjective)\n- ตำแหน่งกริยาหลักของประโยค (หลังประธาน) → ต้องเป็น กริยา (Verb)\n- ขยายกริยา/คุณศัพท์/ทั้งประโยค (มักอยู่ท้ายประโยคหรือหน้ากริยา) → มักเป็น กริยาวิเศษณ์ (Adverb)",
          examples: [
            { en: "The company's growth was impressive.", th: "การเติบโตของบริษัทน่าประทับใจ (growth = คำนาม อยู่หลัง the...'s)" },
            { en: "She performed the task efficiently.", th: "เธอทำงานอย่างมีประสิทธิภาพ (efficiently = กริยาวิเศษณ์ ขยายกริยา performed)" }
          ]
        },
        {
          heading: "คำลงท้ายที่พบบ่อย",
          body: "คำนาม: -tion/-sion (production), -ment (agreement), -ness (happiness), -ity (ability), -ance/-ence (performance)\nคำกริยา: -ize/-ise (organize), -ify (clarify), -en (strengthen), -ate (create)\nคุณศัพท์: -ive (active), -ous (dangerous), -al (national), -ful (helpful), -able/-ible (reliable), -ic (economic)\nกริยาวิเศษณ์: ส่วนใหญ่ลงท้าย -ly (quickly) — แต่ระวัง friendly, lovely เป็นคุณศัพท์ ไม่ใช่กริยาวิเศษณ์"
        }
      ],
      practice: [
        { sentence: "The manager praised the team's ______ on the project.", choices: ["performance", "perform", "performed", "performing"], answer: 0 },
        { sentence: "Please complete the form ______.", choices: ["accurately", "accurate", "accuracy", "accurateness"], answer: 0 },
        { sentence: "The new policy will ______ productivity across all departments.", choices: ["increase", "increasing", "increased", "increases"], answer: 0 },
        { sentence: "His explanation was very ______ and easy to understand.", choices: ["clear", "clearly", "clarity", "clarify"], answer: 0 },
        { sentence: "The committee reached its decision ______.", choices: ["quickly", "quick", "quickness", "quicken"], answer: 0 }
      ]
    },
    {
      id: 2,
      title: "ประธาน-กริยาสอดคล้องกัน (Subject-Verb Agreement)",
      explain: [
        {
          heading: "หลักการ",
          body: "กริยาต้องสอดคล้องกับประธานว่าเป็นเอกพจน์หรือพหูพจน์\n- Every / Each / Everyone + คำนามเอกพจน์ → กริยาเอกพจน์ (เติม s/es หรือใช้ is/was)\n- “The number of + คำนามพหูพจน์” → ถือเป็นเอกพจน์ (the number ตัวมันเองคือประธาน)\n- “A number of + คำนามพหูพจน์” → ถือเป็นพหูพจน์ (แปลว่า “หลาย ๆ ...”)\n- Neither...nor / Either...or → กริยาสอดคล้องกับประธานตัวที่อยู่ใกล้กริยาที่สุด (ตัวหลัง)",
          examples: [
            { en: "Each employee is required to attend.", th: "พนักงานแต่ละคนต้องเข้าร่วม (Each + เอกพจน์ + is)" },
            { en: "The number of applicants is increasing.", th: "จำนวนผู้สมัครกำลังเพิ่มขึ้น (the number of ถือเป็นเอกพจน์)" }
          ]
        }
      ],
      practice: [
        { sentence: "Every member of the team ______ responsible for the outcome.", choices: ["is", "are", "be", "being"], answer: 0 },
        { sentence: "The number of complaints ______ decreased significantly this year.", choices: ["has", "have", "is", "are"], answer: 0 },
        { sentence: "Neither the manager nor the employees ______ aware of the change.", choices: ["were", "was", "is", "be"], answer: 0 },
        { sentence: "A number of clients ______ requested a refund.", choices: ["have", "has", "having", "had"], answer: 0 },
        { sentence: "Each of the reports ______ reviewed carefully before submission.", choices: ["was", "were", "are", "be"], answer: 0 }
      ]
    },
    {
      id: 3,
      title: "Tense พื้นฐาน: Present Simple / Present Continuous / Past Simple",
      explain: [
        {
          heading: "หลักการ",
          body: "ดู “คำสัญญาณเวลา” ในประโยคเพื่อเลือก tense ที่ถูกต้อง\n- Present Simple: ความเป็นจริง/นิสัย/ตารางเวลาประจำ — มักมี usually, every day, on Mondays\n- Present Continuous: กำลังเกิดขึ้นตอนนี้ หรือช่วงนี้ — มักมี now, right now, currently, at the moment\n- Past Simple: เหตุการณ์จบแล้วในอดีต ระบุเวลาชัดเจน — มักมี yesterday, last week, in 2020",
          examples: [
            { en: "The store usually opens at nine.", th: "ร้านมักเปิดตอนเก้าโมง (นิสัย/ตารางประจำ)" },
            { en: "We are currently reviewing your application.", th: "เรากำลังพิจารณาใบสมัครของคุณอยู่ (กำลังเกิดขึ้นตอนนี้)" }
          ]
        }
      ],
      practice: [
        { sentence: "The train usually ______ on time.", choices: ["arrives", "arrive", "is arriving", "arrived"], answer: 0 },
        { sentence: "Right now, the technicians ______ the printer.", choices: ["are repairing", "repair", "repaired", "repairs"], answer: 0 },
        { sentence: "We ______ the contract last Friday.", choices: ["signed", "sign", "are signing", "have sign"], answer: 0 },
        { sentence: "She ______ to the Tokyo office every quarter.", choices: ["travels", "travel", "is traveling", "traveled"], answer: 0 },
        { sentence: "At the moment, the manager ______ with a client.", choices: ["is meeting", "meets", "met", "meet"], answer: 0 }
      ]
    },
    {
      id: 4,
      title: "Present Perfect vs Past Simple",
      explain: [
        {
          heading: "หลักการ",
          body: "Present Perfect (have/has + V3): เหตุการณ์ที่เชื่อมโยงถึงปัจจุบัน หรือไม่ระบุเวลาชัดเจน — มักมี already, yet, since, for, ever, never, just\nPast Simple: เหตุการณ์จบแล้วในอดีต ระบุเวลาที่แน่นอน — มักมี yesterday, last year, in 2020, two days ago",
          examples: [
            { en: "The company has moved its headquarters twice since 2010.", th: "บริษัทย้ายสำนักงานใหญ่ไปแล้วสองครั้งตั้งแต่ปี 2010 (since = present perfect)" },
            { en: "We installed the new system last month.", th: "เราติดตั้งระบบใหม่เมื่อเดือนที่แล้ว (ระบุเวลาชัดเจน = past simple)" }
          ]
        }
      ],
      practice: [
        { sentence: "The company ______ its headquarters twice since 2010.", choices: ["has moved", "moved", "was moving", "move"], answer: 0 },
        { sentence: "We ______ the new system last month.", choices: ["installed", "have installed", "install", "installing"], answer: 0 },
        { sentence: "I ______ finished the report yet.", choices: ["haven't", "didn't", "don't", "wasn't"], answer: 0 },
        { sentence: "She ______ for this company for five years.", choices: ["has worked", "worked", "works", "is working"], answer: 0 },
        { sentence: "They ______ the meeting yesterday afternoon.", choices: ["attended", "have attended", "attend", "are attending"], answer: 0 }
      ]
    },
    {
      id: 5,
      title: "บุพบทบอกเวลาและสถานที่ (Prepositions)",
      explain: [
        {
          heading: "หลักการ",
          body: "at: จุดเวลาชัดเจน (at 9 a.m.) / จุดสถานที่เล็ก (at the front desk)\non: วันที่/วัน (on Monday, on July 5th) / พื้นผิว (on the table)\nin: เดือน/ปี/ฤดู/ช่วงเวลายาว (in July, in 2024, in the morning) / พื้นที่ใหญ่ (in Bangkok)\nby: ภายในกำหนดเวลานั้น (ไม่เกิน) · during: ตลอดช่วงเวลานั้น (+ นาม) · for: ระยะเวลา (+ จำนวน) · between: ระหว่างสองสิ่ง · among: ท่ามกลางมากกว่าสองสิ่ง",
          examples: [
            { en: "The meeting will begin at 9 a.m. sharp.", th: "การประชุมจะเริ่มตรงเก้าโมงเช้า" },
            { en: "Please submit your application by the end of the month.", th: "กรุณาส่งใบสมัครภายในสิ้นเดือน" }
          ]
        }
      ],
      practice: [
        { sentence: "The meeting will begin ______ 9 a.m. sharp.", choices: ["at", "on", "in", "by"], answer: 0 },
        { sentence: "The report is due ______ Friday.", choices: ["on", "at", "in", "during"], answer: 0 },
        { sentence: "Sales increased significantly ______ the holiday season.", choices: ["during", "for", "since", "by"], answer: 0 },
        { sentence: "Please submit your application ______ the end of the month.", choices: ["by", "until", "since", "at"], answer: 0 },
        { sentence: "The negotiations continued ______ three hours.", choices: ["for", "during", "since", "at"], answer: 0 }
      ]
    },
    {
      id: 6,
      title: "Gerund (V-ing) vs Infinitive (to V)",
      explain: [
        {
          heading: "หลักการ",
          body: "กริยาบางกลุ่มตามด้วย V-ing (Gerund): enjoy, avoid, consider, finish, suggest, recommend, keep, mind, admit, deny\nกริยาบางกลุ่มตามด้วย to + V (Infinitive): want, decide, plan, need, agree, promise, hope, offer, expect\nกฎเหล็ก: หลัง “บุพบท” (preposition) ต้องตามด้วย V-ing เสมอ เช่น for, about, of, in, by, without",
          examples: [
            { en: "The manager suggested postponing the meeting.", th: "ผู้จัดการเสนอให้เลื่อนการประชุม (suggest + V-ing)" },
            { en: "We have decided to hire a new supplier.", th: "เราตัดสินใจจ้างซัพพลายเออร์ใหม่ (decide + to V)" }
          ]
        }
      ],
      practice: [
        { sentence: "The manager suggested ______ the meeting until next week.", choices: ["postponing", "to postpone", "postpone", "postponed"], answer: 0 },
        { sentence: "We have decided ______ a new supplier.", choices: ["to hire", "hiring", "hire", "hired"], answer: 0 },
        { sentence: "She is responsible for ______ the weekly reports.", choices: ["preparing", "to prepare", "prepare", "prepared"], answer: 0 },
        { sentence: "The team agreed ______ the deadline.", choices: ["to extend", "extending", "extend", "extended"], answer: 0 },
        { sentence: "Please avoid ______ personal calls during work hours.", choices: ["making", "to make", "make", "made"], answer: 0 }
      ]
    },
    {
      id: 7,
      title: "Relative Pronouns: who / which / that / whose",
      explain: [
        {
          heading: "หลักการ",
          body: "who: แทนคน ทำหน้าที่ประธาน\nwhich: แทนสิ่งของ/สัตว์\nthat: แทนได้ทั้งคนและสิ่งของ (ในประโยคขยายความแบบจำกัดความ)\nwhose: แสดงความเป็นเจ้าของ ตามด้วยคำนามเสมอ",
          examples: [
            { en: "The employee who submitted the report on time received a bonus.", th: "พนักงานที่ส่งรายงานตรงเวลาได้รับโบนัส (who = แทนคน)" },
            { en: "This is the client whose contract we renewed last month.", th: "นี่คือลูกค้าที่เราต่อสัญญาให้เมื่อเดือนที่แล้ว (whose = แสดงความเป็นเจ้าของ)" }
          ]
        }
      ],
      practice: [
        { sentence: "The employee ______ submitted the report on time received a bonus.", choices: ["who", "which", "whose", "whom"], answer: 0 },
        { sentence: "The laptop ______ was damaged has been replaced.", choices: ["which", "who", "whom", "whose"], answer: 0 },
        { sentence: "This is the client ______ contract we renewed last month.", choices: ["whose", "who", "which", "whom"], answer: 0 },
        { sentence: "Employees ______ work overtime will be compensated fairly.", choices: ["who", "which", "whom", "whose"], answer: 0 },
        { sentence: "The proposal, ______ was reviewed by the board, was approved.", choices: ["which", "who", "whom", "whose"], answer: 0 }
      ]
    },
    {
      id: 8,
      title: "คำเชื่อมประโยค (Conjunctions & Connectors)",
      explain: [
        {
          heading: "หลักการ",
          body: "Conjunction: เชื่อมสองอนุประโยคในประโยคเดียวกัน (because, although, since, if, while, so)\nTransition word: เชื่อมสองประโยคที่แยกกัน มักตามหลัง semicolon (;) หรือขึ้นต้นประโยคใหม่ (however, therefore, in addition, as a result)\nกับดักที่พบบ่อยใน Part 6: เลือกผิดระหว่างสองกลุ่มนี้ เพราะแปลคล้ายกันแต่ใช้โครงสร้างต่างกัน",
          examples: [
            { en: "The store closed early because the manager was ill.", th: "ร้านปิดเร็วเพราะผู้จัดการป่วย (because + ประธาน+กริยา)" },
            { en: "The product is expensive; however, it is very reliable.", th: "สินค้าราคาแพง แต่ก็เชื่อถือได้มาก (however ตามหลัง ;)" }
          ]
        }
      ],
      practice: [
        { sentence: "The flight was delayed ______ the heavy storm.", choices: ["because of", "because", "although", "however"], answer: 0 },
        { sentence: "The store closed early ______ the manager was ill.", choices: ["because", "because of", "however", "moreover"], answer: 0 },
        { sentence: "The product is expensive; ______, it is very reliable.", choices: ["however", "because", "although", "since"], answer: 0 },
        { sentence: "______ the rain, the outdoor event went ahead as planned.", choices: ["Despite", "Although", "Because", "Since"], answer: 0 },
        { sentence: "He missed the deadline; ______, he was not penalized.", choices: ["nevertheless", "because", "although", "since"], answer: 0 }
      ]
    },
    {
      id: 9,
      title: "การเปรียบเทียบ (Comparatives & Superlatives)",
      explain: [
        {
          heading: "หลักการ",
          body: "คุณศัพท์สั้น (1 พยางค์ และบางคำ 2 พยางค์): เติม -er / -est เช่น cheap → cheaper → cheapest\nคุณศัพท์ยาว (2 พยางค์ขึ้นไปส่วนใหญ่): ใช้ more / most เช่น expensive → more expensive → most expensive\nคำผิดปกติ: good → better → best, bad → worse → worst\nการเปรียบเทียบเท่ากัน: as + คุณศัพท์ + as",
          examples: [
            { en: "This model is more efficient than the previous version.", th: "รุ่นนี้มีประสิทธิภาพมากกว่ารุ่นก่อนหน้า (คุณศัพท์ยาว + more)" },
            { en: "Of all the branches, the downtown store is the busiest.", th: "ในบรรดาทุกสาขา ร้านใจกลางเมืองคือร้านที่คนพลุกพล่านที่สุด (busy → busiest)" }
          ]
        }
      ],
      practice: [
        { sentence: "This model is ______ than the previous version.", choices: ["more efficient", "efficienter", "most efficient", "efficient"], answer: 0 },
        { sentence: "Of all the branches, the downtown store is the ______.", choices: ["busiest", "busier", "more busy", "most busy"], answer: 0 },
        { sentence: "Our new software is ______ as the old one.", choices: ["as reliable", "more reliable", "reliabler", "reliable than"], answer: 0 },
        { sentence: "This is the ______ decision the board has ever made.", choices: ["most important", "more important", "importantest", "importanter"], answer: 0 },
        { sentence: "Prices this year are ______ than last year.", choices: ["higher", "more high", "highest", "high"], answer: 0 }
      ]
    },
    {
      id: 10,
      title: "Passive Voice (ประโยคถูกกระทำ)",
      explain: [
        {
          heading: "หลักการ",
          body: "โครงสร้าง: be + กริยาช่องที่ 3 (V3)\nใช้เมื่อไม่รู้ว่าใครเป็นผู้กระทำ, ผู้กระทำไม่สำคัญ, หรือต้องการเน้นผู้ถูกกระทำ — พบบ่อยมากในประกาศ/ข้อความทางการของ TOEIC",
          examples: [
            { en: "The meeting has been rescheduled.", th: "การประชุมถูกเลื่อนแล้ว (ไม่ระบุว่าใครเลื่อน)" },
            { en: "New employees are trained during their first week.", th: "พนักงานใหม่จะได้รับการฝึกอบรมในสัปดาห์แรก" }
          ]
        }
      ],
      practice: [
        { sentence: "The new policy ______ next Monday.", choices: ["will be announced", "will announce", "announces", "is announcing"], answer: 0 },
        { sentence: "All applications ______ carefully before an interview is scheduled.", choices: ["are reviewed", "review", "reviewing", "have review"], answer: 0 },
        { sentence: "The report ______ by the finance team every quarter.", choices: ["is prepared", "prepares", "preparing", "has prepare"], answer: 0 },
        { sentence: "The building ______ by a well-known architect in 1990.", choices: ["was designed", "designed", "has design", "designs"], answer: 0 },
        { sentence: "New employees ______ during their first week.", choices: ["are trained", "train", "training", "have train"], answer: 0 }
      ]
    }
  ]
};
