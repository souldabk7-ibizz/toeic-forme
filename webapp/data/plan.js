/* The study plan driving the Dashboard & Plan tabs.

   Rebuilt around the time that actually exists: about 30 minutes on a
   weekday, 60-90 minutes on Saturday, Sunday off — roughly 4 hours a week.
   A 12-week plan asking for more than that is not a plan, it is a wish, so
   this runs 20 weeks instead and keeps each weekday session inside half an
   hour.

   Weighted toward Reading on purpose. Listening at 73-80 out of 100 on real
   past papers is already close to a 770-level section score, while Reading
   is where the remaining gap sits — and Reading is also the half the
   candidate has to pace themselves, which is a trainable skill. Listening
   therefore gets one maintenance day a week rather than half the plan. */
window.PLAN = {
  title: "แผน 20 สัปดาห์: 510 → 770",
  dailyMinutes: 30,
  sessionWindow: "วันธรรมดา 30 นาที · เสาร์ 60-90 นาที · อาทิตย์พัก",
  startDate: null, // set on first run in app.js and cached in localStorage

  // Day of week -> session type. JS Date.getDay(): 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat
  dayTypes: {
    0: "rest",
    1: "reading",
    2: "reading",
    3: "listening",
    4: "reading",
    5: "mixed",
    6: "long"
  },

  dayLabels: {
    rest: "พัก",
    listening: "Listening (รักษาระดับ)",
    reading: "Reading",
    mixed: "เก็บข้อที่ผิด",
    long: "รอบยาว 60-90 นาที"
  },

  sessionTemplates: {
    reading: [
      { minutes: 10, label: "ศัพท์", detail: "ทบทวนคำที่ครบกำหนด + เรียนคำใหม่ 5 คำของวันนี้ แล้วทำแบบทดสอบ 10 ข้อ ใช้โหมดยาก (ไทย → อังกฤษ) ถ้าไหว" },
      { minutes: 15, label: "Reading drill", detail: "Part 5 และ Part 6 ของสัปดาห์นี้ในแท็บ Reading จับเวลาไปด้วย ข้อละไม่เกิน 25 วินาที" },
      { minutes: 5, label: "สรุปข้อที่ผิด", detail: "ข้อที่ผิดแต่ละข้อ ถามตัวเองว่าผิดเพราะไม่รู้ศัพท์ ไม่รู้กฎ หาไม่เจอ หรือหมดเวลา แล้วจดไว้" }
    ],
    listening: [
      { minutes: 10, label: "ศัพท์", detail: "ทบทวนคำที่ครบกำหนด + เรียนคำใหม่ 5 คำของวันนี้ แล้วทำแบบทดสอบ 10 ข้อ" },
      { minutes: 15, label: "Listening drill", detail: "Part 2 และ Part 3/4 ของสัปดาห์นี้ กดปุ่มเล่นเสียงแล้วตอบ ห้ามอ่านสคริปต์ก่อนตอบ" },
      { minutes: 5, label: "ฟังซ้ำ", detail: "ฟังซ้ำเฉพาะข้อที่ผิด จับให้ได้ว่าคำไหนที่ฟังไม่ออก" }
    ],
    mixed: [
      { minutes: 10, label: "ศัพท์", detail: "ทบทวนคำที่ครบกำหนด + เรียนคำใหม่ 5 คำของวันนี้" },
      { minutes: 15, label: "เก็บข้อที่ผิด", detail: "ทำชุด “คำที่เคยตอบผิด” และ “คำที่ลืมซ้ำๆ” ในแท็บทบทวนรวม แล้วทำข้อ Reading ที่ผิดของสัปดาห์นี้ซ้ำ" },
      { minutes: 5, label: "อ่านบทเรียน 1 หัวข้อ", detail: "เปิดหมวดกลยุทธ์รายพาร์ทหรือไวยากรณ์ อ่านหัวข้อเดียวที่เกี่ยวกับข้อที่ผิดบ่อยสัปดาห์นี้" }
    ],
    long: [
      { minutes: 10, label: "ศัพท์", detail: "ทบทวนคำที่ครบกำหนด + เรียนคำใหม่ 5 คำของวันนี้" },
      { minutes: 15, label: "ซ้อม Part 5 จับเวลา", detail: "เปิดแท็บ Reading แล้วกดซ้อม Part 5 จับเวลา 30 ข้อ 12 นาที เป้าหมายคือคุมเวลาให้ได้ ไม่ใช่ได้เต็ม" },
      { minutes: 35, label: "Part 7 จากข้อสอบเก่า", detail: "ทำ Part 7 จากข้อสอบเก่าที่มี จับเวลาข้อละ 1 นาที ขีดเส้นใต้วันที่และตัวเลขทุกอันขณะอ่าน" },
      { minutes: 20, label: "ตรวจและแยกสาเหตุ", detail: "ตรวจแล้วแยกข้อที่ผิดเป็น 4 กอง (ไม่รู้ศัพท์ / ไม่รู้กฎ / หาไม่เจอ / หมดเวลา) จดจำนวนแต่ละกองไว้ ใช้ตัดสินว่าสัปดาห์หน้าจะลงแรงกับอะไร" }
    ],
    rest: [
      { minutes: 0, label: "วันพัก", detail: "ไม่ต้องทำอะไร ถ้าอยากทำจริงๆ ให้เปิดการ์ดศัพท์กวาดผ่านตารอบเดียวพอ การพักคือส่วนหนึ่งของการจำ" }
    ]
  },

  /* Weeks 1-6 build the Part 5/6 base, 7-14 move to Part 7 where most of the
     reading questions live, 15-18 add timing pressure, 19-20 rehearse the
     full test. Listening keeps its one day a week throughout. */
  weeks: [
    { week: 1, theme: "รูปแบบคำและชนิดของคำ", focus: "Part 5: ดูตำแหน่งไม่ต้องแปล — เรียนบทไวยากรณ์ 1-2 ควบคู่" },
    { week: 2, theme: "กริยาและความสอดคล้อง", focus: "Part 5: ประธาน-กริยา, tense — บทไวยากรณ์ 2-4" },
    { week: 3, theme: "บุพบทและคำเชื่อม", focus: "Part 5: บุพบท, คำเชื่อม — บทไวยากรณ์ 5, 8" },
    { week: 4, theme: "ทบทวนจุดตรวจ", focus: "ทำ Part 5 จับเวลา 30 ข้อ 12 นาที 2 รอบ + ทบทวนข้อผิดสัปดาห์ 1-3" },
    { week: 5, theme: "คำที่ใช้คู่กัน", focus: "Part 5 โจทย์คำศัพท์: collocation และคำ+บุพบท — บทคำศัพท์ 2, 5" },
    { week: 6, theme: "Part 6 เต็มรูปแบบ", focus: "Part 6: ช่องคำเชื่อม, ช่องเติมประโยค, tense ทั้งบทความ — บทกลยุทธ์ 6" },
    { week: 7, theme: "Part 7 อีเมลและจดหมาย", focus: "อ่านโจทย์ก่อนแล้วกวาดหา — บทกลยุทธ์ 7 และ 10" },
    { week: 8, theme: "ทบทวนจุดตรวจ", focus: "ทำ Reading เต็มชุดจากข้อสอบเก่า ชุดที่ 1 จับเวลา 75 นาที" },
    { week: 9, theme: "Part 7 ประกาศและโฆษณา", focus: "จับโครงบทความแต่ละประเภท — บทกลยุทธ์ 10" },
    { week: 10, theme: "Part 7 แชทและฟอร์ม", focus: "ข้อถามความหมายแฝงในบทสนทนาแชท และการอ่านตาราง/ใบแจ้งหนี้" },
    { week: 11, theme: "คำพ้องความหมาย", focus: "ข้อ closest in meaning — ใช้โหมดแนว Part 7 ในแบบทดสอบศัพท์ทุกวัน" },
    { week: 12, theme: "ทบทวนจุดตรวจ", focus: "Reading เต็มชุด ชุดที่ 2 + เทียบกับชุดที่ 1 ว่ากองไหนลดลง" },
    { week: 13, theme: "Part 7 บทความคู่", focus: "ข้อที่ต้องใช้ 2 บทความ — บทกลยุทธ์ 8" },
    { week: 14, theme: "Part 7 บทความสามชิ้น", focus: "ลำดับอ่านทีละชิ้นแล้วตอบเท่าที่ตอบได้ + ระวังหมายเหตุใต้ตาราง" },
    { week: 15, theme: "ความเร็วในการกวาดตา", focus: "ฝึกหาข้อมูลจับเวลา 30 วินาทีต่อคำถาม ไม่ต้องตอบ แค่หาให้เจอ" },
    { week: 16, theme: "ทบทวนจุดตรวจ", focus: "Reading เต็มชุด ชุดที่ 3 คุมนาฬิกาเช็กพอยต์ 3 จุดให้ได้" },
    { week: 17, theme: "เก็บจุดอ่อนที่เหลือ", focus: "ทำเฉพาะประเภทข้อที่ผิดบ่อยที่สุดจาก 3 ชุดที่ผ่านมา (ข้อสอบเก่าชุดที่ 4)" },
    { week: 18, theme: "Listening เร่งท้าย", focus: "กลับมาเติม Listening 3 วันในสัปดาห์นี้ เน้น Part 3/4 ข้อที่มีตารางประกอบ" },
    { week: 19, theme: "ซ้อมเต็มรูปแบบ", focus: "ข้อสอบเก่าชุดที่ 5 ทำต่อเนื่อง 2 ชั่วโมงเหมือนสอบจริง" },
    { week: 20, theme: "ทบทวนก่อนสอบ", focus: "อ่านบทกลยุทธ์ทั้ง 9 บทซ้ำ + ชุดคำที่ลืมซ้ำๆ + พักให้พอ" }
  ],

  milestones: [
    { afterWeek: 4, note: "ทำ Part 5 จับเวลา 30 ข้อ 12 นาที ให้ได้จริง ตอนนี้ยังไม่ต้องหวังคะแนน ขอแค่คุมเวลาได้", targetListening: 355, targetReading: 365 },
    { afterWeek: 8, note: "Reading เต็มชุดครั้งแรก ดูว่าทำถึงข้อที่เท่าไหร่ตอนหมดเวลา และกองไหนมีข้อผิดมากที่สุด", targetListening: 360, targetReading: 385 },
    { afterWeek: 12, note: "Reading เต็มชุดครั้งที่สอง กอง “หมดเวลา” ควรลดลงชัดเจนแล้ว ถ้ายังไม่ลด ปัญหาคือการคุมเวลาไม่ใช่ภาษา", targetListening: 365, targetReading: 400 },
    { afterWeek: 16, note: "Reading เต็มชุดครั้งที่สาม ควรทำครบทุกข้อในเวลาแล้ว จากนี้คะแนนจะขึ้นจากความแม่นของศัพท์", targetListening: 370, targetReading: 415 },
    { afterWeek: 20, note: "ซ้อมเต็มรูปแบบ 2 ชั่วโมง ถ้าผลรวม 2 ครั้งติดกันถึง 770 ให้จองสอบจริงได้", targetListening: 375, targetReading: 430 }
  ],

  phaseNote: "แผนนี้ตั้งอยู่บนเวลาที่มีจริง คือวันธรรมดาวันละ 30 นาที วันเสาร์ 60-90 นาที วันอาทิตย์พัก รวมประมาณ 4 ชั่วโมงต่อสัปดาห์ การขยับจาก 510 ไป 770 ด้วยเวลาเท่านี้ใช้เวลาประมาณ 5 เดือน ซึ่งคือ 20 สัปดาห์นี้พอดี\n\nน้ำหนักเทไปที่ Reading โดยตั้งใจ เพราะคะแนน Listening จากข้อสอบเก่าจริงอยู่ที่ 73-80 จาก 100 ซึ่งใกล้ระดับที่ต้องการแล้ว ส่วน Reading คือช่องว่างที่เหลือ และเป็นฝั่งที่ต้องคุมเวลาเอง ซึ่งเป็นทักษะที่ฝึกได้ตรงๆ Listening จึงเหลือสัปดาห์ละวันไว้รักษาระดับ แล้วกลับมาเร่งอีกครั้งในสัปดาห์ที่ 18\n\nถ้าสัปดาห์ไหนทำไม่ครบ ไม่ต้องไล่ตามให้ทัน ให้ข้ามไปทำของสัปดาห์ปัจจุบันต่อ ความสม่ำเสมอสำคัญกว่าความครบ"
};
