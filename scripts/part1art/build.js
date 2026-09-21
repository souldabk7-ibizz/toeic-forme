const A = require('./lib.js');
const {L,C,R,P,T,ACCENT,WARM,SOFT,floor,desk,table,counter,laptop,monitor,cup,phone,box,boxPile,shelf,truck,cart,suitcase,
       screen,mapProp,machine,forklift,wrench,doorway,planeDoor,chairRow,umbrella,rack,safe,papers,cables,headsetOn,scanner,
       trophy,stage,calc,wheel,jug,pour,glassRow,personSeated,personStand,personKneel,personWalk,stage_} = A;

/* Each picture must carry the facts the four options are judged against:
   what the person's hands are doing, and which objects are present but idle. */
const SCENES = {
  // ---- set 1 : office ----
  office_typing: [
    floor()+personSeated(74,96,[24,14],[28,8])+desk(96,138)+laptop(112,136)+cup(160,136)+phone(178,136)+T(160,192,'office'),
    'ผู้ชายนั่งที่โต๊ะ มือวางบนแป้นพิมพ์แล็ปท็อป มีแก้วกาแฟและโทรศัพท์ตั้งโต๊ะวางอยู่บนโต๊ะ'],
  meeting_seated: [
    floor()+personSeated(64,90,[18,8],[22,4])+personSeated(112,90,[18,8],[22,4])+
      personSeated(196,90,[-18,8],[-22,4])+personSeated(244,90,[-18,8],[-22,4])+table(84,132,150)+papers(140,130)+cup(176,130)+T(160,192,'meeting room'),
    'คนหลายคนนั่งรอบโต๊ะประชุม มีเอกสารและแก้วน้ำบนโต๊ะ ไม่มีใครยืน'],
  cafe_pouring: [
    floor()+personStand(104,86,[-10,24],[34,10])+jug(132,112)+pour(148,116)+counter(74,136,170)+R(142,124,12,12,'none',1)+
      glassRow(190,124,4)+T(160,192,'cafe'),
    'ผู้หญิงถือเหยือกเอียงรินของเหลวลงแก้ว ด้านหลังมีแก้วเปล่าเรียงอยู่'],
  warehouse_loading: [
    floor()+truck(176,166)+personStand(60,96,[16,-14],[24,-8])+personStand(110,96,[18,-16],[26,-10])+
      box(128,110,20)+box(30,176,22)+box(54,176,22)+T(160,192,'warehouse'),
    'คนงานสองคนยกกล่องขึ้นท้ายรถบรรทุกที่เปิดอยู่ มีกล่องอีกหลายใบวางบนพื้น'],
  meeting_pointing: [
    floor()+screen(196,140)+personStand(150,92,[-12,26],[36,-18])+personSeated(64,104,[18,8],[22,4])+
      personSeated(104,104,[18,8],[22,4])+T(160,192,'presentation'),
    'ผู้หญิงยืนชี้ไปที่จอที่แสดงกราฟแท่ง คนอื่นนั่งมองอยู่'],
  factory_repair: [
    floor()+machine(206,166)+personKneel(148,100,[34,18],[30,10])+wrench(180,120)+R(88,160,30,16,SOFT)+L(94,160,94,152,2)+T(160,192,'factory'),
    'ช่างคุกเข่าข้างเครื่องจักร ถือประแจ มีกล่องเครื่องมือเปิดวางบนพื้น'],
  // ---- set 2 : travel ----
  hotel_checkin: [
    floor()+personStand(92,90,[-10,26],[26,16])+personStand(214,90,[-26,16],[12,24])+counter(120,132,140)+
      suitcase(60,176)+papers(158,128)+T(160,192,'hotel'),
    'ผู้หญิงยืนหน้าเคาน์เตอร์ มีกระเป๋าเดินทางวางที่พื้นข้างเท้า พนักงานยื่นเอกสารให้'],
  plane_boarding: [
    floor()+planeDoor(244,176)+personWalk(70,96)+personWalk(116,96)+personWalk(162,96)+
      suitcase(84,168,16,12)+suitcase(130,168,16,12)+T(140,192,'jet bridge'),
    'ผู้โดยสารเดินเรียงแถวถือกระเป๋าถือ มุ่งไปทางประตูเครื่องบิน'],
  tour_map: [
    floor()+personStand(160,86,[-26,14],[26,14])+mapProp(146,124)+personStand(96,96,[10,22],[18,18])+
      personStand(224,96,[-18,18],[-10,22])+T(160,192,'tour group'),
    'นักท่องเที่ยวล้อมรอบผู้ชายที่กางแผนที่ นิ้วแตะอยู่บนแผนที่'],
  porter_cart: [
    floor()+cart(186,170)+personStand(112,92,[18,-6],[30,2])+suitcase(146,126,28,22)+
      suitcase(192,162,24,18)+suitcase(218,162,24,18)+T(160,192,'luggage'),
    'พนักงานยกกระเป๋าใบใหญ่ขึ้นวางบนรถเข็นที่มีกระเป๋าอยู่แล้วสองใบ'],
  cafe_outdoor: [
    floor()+umbrella(160,54)+personSeated(66,96,[18,8],[22,4])+personSeated(110,96,[18,8],[22,4])+
      personSeated(212,96,[-18,8],[-22,4])+personSeated(252,96,[-18,8],[-22,4])+table(90,136,140)+papers(150,134)+cup(182,134)+T(160,192,'outdoor cafe'),
    'คนสี่คนนั่งที่โต๊ะกลางแจ้ง มีจานและแก้วบนโต๊ะ มีร่มกางอยู่เหนือโต๊ะ'],
  cockpit_headset: [
    floor()+R(178,96,110,60,'none')+[0,1,2].map(i=>C(200+i*28,126,7,SOFT)).join('')+
      personSeated(120,96,[30,12],[34,4])+headsetOn(120,90)+L(150,108,164,104,2.5)+T(160,192,'cockpit'),
    'ชายสวมหูฟังนั่งหน้าแผงควบคุม มือจับคันบังคับ ปากอยู่ใกล้ไมโครโฟน'],
  // ---- set 3 : finance ----
  accountant_desk: [
    floor()+personSeated(70,96,[22,14],[30,10])+desk(92,138,130)+papers(116,136)+calc(156,136)+
      box(196,136,18)+T(160,192,'desk'),
    'ผู้ชายก้มดูเอกสาร มือขวาวางบนเครื่องคิดเลข มีแฟ้มวางซ้อนที่มุมโต๊ะ'],
  bank_counting: [
    floor()+personStand(150,88,[-14,22],[14,22])+R(140,112,22,12,WARM)+counter(96,132,150)+
      R(198,116,30,16,SOFT)+T(160,192,'bank'),
    'พนักงานธนาคารถือปึกธนบัตรอยู่ในมือทั้งสองข้าง มีเครื่องนับเงินวางอยู่'],
  yard_forklift_idle: [
    floor()+truck(186,166)+personStand(54,96,[18,-10],[26,-4])+personStand(102,96,[16,-12],[24,-6])+
      box(120,108,20)+forklift(20,150)+T(160,192,'warehouse yard'),
    'คนงานสองคนส่งกล่องขึ้นรถบรรทุก มีรถยกจอดอยู่ด้านหลังโดยไม่มีคนขับ'],
  bank_signing: [
    floor()+personStand(134,88,[-6,26],[26,14])+personStand(214,88,[-12,26],[12,26])+counter(96,132,150)+papers(156,128)+L(176,124,186,114,2.5)+T(160,192,'bank counter'),
    'ลูกค้าก้มเขียนบนเอกสารที่วางบนเคาน์เตอร์ พนักงานยืนรออีกฝั่ง'],
  handshake_contract: [
    floor()+personStand(112,92,[26,10],[-14,26])+personStand(186,92,[-26,10],[14,26])+
      L(138,110,160,110,3)+desk(214,140,80)+papers(232,138)+L(258,134,266,124,2.5)+T(160,192,'office'),
    'ชายสองคนยืนจับมือกัน มีสัญญาวางเปิดอยู่บนโต๊ะข้างๆ พร้อมปากกา'],
  storeroom_stacking: [
    floor()+shelf(226,176,70)+personStand(96,92,[20,-8],[28,-2])+box(126,116,22)+box(126,138,22)+
      box(126,160,22)+T(160,192,'storage room'),
    'พนักงานยกกล่องวางซ้อนบนกองกล่อง มีชั้นวางว่างอยู่ด้านหลัง'],
  // ---- set 4 : personnel / IT ----
  interview_desk: [
    floor()+personSeated(88,94,[20,10],[24,4])+personSeated(232,94,[-20,10],[-24,4])+desk(118,134,90)+papers(126,132)+T(160,192,'interview'),
    'ชายและหญิงนั่งคนละฝั่งโต๊ะ ฝ่ายหนึ่งถืออ่านแฟ้ม อีกฝ่ายวางมือบนตัก'],
  server_install: [
    floor()+rack(210,176)+personStand(160,90,[34,14],[40,8])+R(196,124,26,12,ACCENT)+cables(240,120)+T(160,192,'server room'),
    'ชายยืนหันหน้าเข้าตู้แร็ค มือทั้งสองจับอุปกรณ์กำลังเลื่อนเข้าช่อง'],
  orientation_rows: [
    floor()+screen(226,120)+personSeated(56,100,[14,10],[18,6])+personSeated(102,100,[14,10],[18,6])+
      personSeated(148,100,[14,10],[18,6])+chairRow(44,176,3)+T(140,192,'training room'),
    'คนหลายคนนั่งเรียงแถวหันหน้าไปทางหน้าห้อง มีสมุดวางบนตัก ด้านหน้ามีจอฉาย'],
  two_monitors: [
    floor()+personSeated(76,96,[24,14],[30,10])+desk(100,138,140)+monitor(126,136)+monitor(170,136)+T(160,192,'workstation'),
    'ผู้หญิงนั่งหน้าจอสองจอ มือวางบนคีย์บอร์ด มองไปที่จอด้านซ้าย'],
  award_applause: [
    floor()+stage(196,176)+personStand(232,88,[-8,20],[8,20])+trophy(226,126)+
      personStand(60,96,[-6,-10],[6,-10])+personStand(104,96,[-6,-10],[6,-10])+personStand(148,96,[-6,-10],[6,-10])+T(120,192,'ceremony'),
    'คนจำนวนมากยืนปรบมือ ด้านหน้ามีชายยืนถือโล่รางวัลบนเวทีเล็ก'],
  under_desk_cables: [
    floor()+desk(150,120,140)+personKneel(120,120,[26,14],[30,8])+cables(148,152)+
      R(210,164,26,10,SOFT)+T(160,192,'under a desk'),
    'ชายนั่งยองๆ ใต้โต๊ะ ถือสายไฟพันกันอยู่ในมือ มีปลั๊กพ่วงวางบนพื้น'],
  // ---- set 5 : service / warehouse ----
  delivery_handover: [
    floor()+doorway(232,176)+personStand(112,94,[26,6],[30,14])+box(146,118,20)+
      personStand(206,94,[-26,6],[-14,24])+T(150,192,'doorway'),
    'ชายในเครื่องแบบยื่นกล่องพัสดุให้ผู้หญิงที่ยืนในกรอบประตู มือทั้งสองฝ่ายแตะกล่อง'],
  service_headset: [
    floor()+personSeated(88,96,[24,12],[30,10])+headsetOn(88,90)+desk(112,138,120)+monitor(150,136)+
      C(186,134,4,SOFT)+T(160,192,'service desk'),
    'ผู้หญิงสวมหูฟังพร้อมไมค์ นั่งหน้าคอมพิวเตอร์ มือวางบนเมาส์'],
  warehouse_scanning: [
    floor()+shelf(214,176,84)+personStand(70,94,[22,-2],[14,22])+scanner(96,110)+
      personStand(140,94,[22,-2],[14,22])+scanner(166,110)+box(96,164,22)+box(166,164,22)+T(150,192,'warehouse'),
    'คนงานสองคนถือเครื่องสแกนเล็งไปที่ฉลากบนกล่อง ด้านหลังมีชั้นวางเต็มไปด้วยกล่อง'],
  return_counter: [
    floor()+personStand(128,88,[-8,26],[32,2])+personStand(216,88,[-12,26],[12,26])+counter(96,132,150)+box(158,132,20)+L(170,128,170,120,3)+T(160,192,'returns'),
    'ลูกค้าวางกล่องที่ยุบไว้บนเคาน์เตอร์และชี้ไปที่กล่อง พนักงานยืนฟังอยู่'],
  forklift_driving: [
    floor()+forklift(92,164)+personSeated(112,92,[18,10],[22,4])+box(160,150,22)+box(160,128,22)+
      R(156,152,30,4,SOFT)+T(160,192,'warehouse'),
    'รถยกกำลังเคลื่อนที่โดยมีพาเลทกล่องอยู่บนงา และมีคนขับนั่งอยู่บนรถ'],
  supermarket_reach: [
    floor()+shelf(196,176,90)+personStand(132,92,[-10,26],[40,-16])+cart(56,168)+T(150,192,'supermarket'),
    'ผู้หญิงยืนหันหน้าเข้าชั้นวาง เอื้อมมือไปหยิบของบนชั้น มีรถเข็นจอดอยู่ข้างตัว'],
};

const order = Object.keys(SCENES);
if (order.length !== 30) throw new Error('need 30 scenes, have ' + order.length);
const out = {};
order.forEach(k => { out[k] = A.stage_(SCENES[k][0], SCENES[k][1]); });

const header = `/* Part 1 pictures.

   The real Part 1 shows a photograph. This app has no photographs, so each
   item gets a drawing instead — flat vector line art, built from a shared set
   of figures and props so the whole set reads as one hand.

   A picture is not decoration here: it is the question. Each one has to carry
   the facts the four options are judged against — what the hands are doing,
   and which objects are present but idle, since an option naming a real object
   with the wrong verb is Part 1's commonest trap. The Thai caption under each
   picture describes the same scene for anyone who cannot make out the drawing.

   Drawn with currentColor so they follow the page theme in light and dark. */
window.PART1ART = `;
require('fs').writeFileSync(require('path').join(__dirname,'..','..','webapp','data','part1art.js'),
  header + JSON.stringify(out, null, 2) + ';\n');
console.log('wrote', order.length, 'pictures |',
  Math.round(JSON.stringify(out).length/1024) + 'KB');
