/* Shared drawing primitives for the Part 1 pictures.
   Flat line art on a 320x200 stage. Strokes use currentColor so the pictures
   follow the page theme; fills use the app's own palette variables. */
const W = 320, H = 200;
const L = (x1,y1,x2,y2,w=3) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="${w}" stroke-linecap="round"/>`;
const C = (cx,cy,r,fill='none') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="currentColor" stroke-width="3"/>`;
const R = (x,y,w,h,fill='none',rx=2) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="currentColor" stroke-width="3"/>`;
const P = (d,fill='none',w=3) => `<path d="${d}" fill="${fill}" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const T = (x,y,s,size=11) => `<text x="${x}" y="${y}" font-size="${size}" fill="currentColor" opacity="0.55" text-anchor="middle">${s}</text>`;

const ACCENT = 'var(--series-1)';
const WARM   = 'var(--series-3)';
const SOFT   = 'var(--gridline)';

/* ---------- people ----------
   Every figure is built from the same head/body so the pictures read as one
   set; only the arms and legs change, because in Part 1 the arms are what the
   question turns on. */
function head(x,y){ return C(x,y,11); }
function torso(x,y){ return L(x,y+11,x,y+44); }

// arms: give the two hand targets relative to the shoulder
function arms(x,y,l,r){
  const sh = y+18;
  return L(x,sh,x+l[0],sh+l[1]) + L(x,sh,x+r[0],sh+r[1]);
}
function legsStand(x,y){ return L(x,y+44,x-10,y+74) + L(x,y+44,x+10,y+74); }
function legsSeated(x,y){ return L(x,y+44,x+18,y+44) + L(x+18,y+44,x+18,y+70)
                               + L(x+2,y+46,x+22,y+48) + L(x+22,y+48,x+22,y+72); }
function legsKneel(x,y){ return L(x,y+44,x+18,y+50) + L(x+18,y+50,x+18,y+70)
                              + L(x,y+44,x-12,y+62) + L(x-12,y+62,x+6,y+70); }
function legsWalk(x,y){ return L(x,y+44,x-12,y+74) + L(x,y+44,x+12,y+70); }

const personSeated = (x,y,ax=[22,10],bx=[26,4]) => head(x,y)+torso(x,y)+arms(x,y,ax,bx)+legsSeated(x,y);
const personStand  = (x,y,ax=[-12,26],bx=[12,26]) => head(x,y)+torso(x,y)+arms(x,y,ax,bx)+legsStand(x,y);
const personKneel  = (x,y,ax=[20,12],bx=[24,4]) => head(x,y)+torso(x,y)+arms(x,y,ax,bx)+legsKneel(x,y);
const personWalk   = (x,y,ax=[-14,18],bx=[14,20]) => head(x,y)+torso(x,y)+arms(x,y,ax,bx)+legsWalk(x,y);

/* ---------- props ---------- */
const floor  = (y=176) => L(8,y,W-8,y,2);
const desk   = (x,y,w=110) => R(x,y,w,6,SOFT) + L(x+8,y+6,x+8,y+34,2) + L(x+w-8,y+6,x+w-8,y+34,2);
const table  = (x,y,w=140) => R(x,y,w,6,SOFT) + L(x+w/2,y+6,x+w/2,y+30,2);
const counter= (x,y,w=150) => R(x,y,w,8,SOFT) + R(x,y+8,w,26,'none',0);
const laptop = (x,y) => P(`M${x} ${y} l26 -20 l4 0 l0 20 z`,ACCENT) + R(x,y,30,4,SOFT);
const monitor= (x,y) => R(x,y-24,30,22,ACCENT) + L(x+15,y-2,x+15,y+4,2) + L(x+7,y+4,x+23,y+4,2);
const cup    = (x,y) => R(x,y-9,10,9,WARM) + P(`M${x+10} ${y-7} q5 2 0 5`,'none',2);
const phone  = (x,y) => R(x,y-6,16,6,SOFT) + L(x+2,y-6,x+14,y-12,2);
const box    = (x,y,s=22) => R(x,y-s,s,s,SOFT) + L(x,y-s/2,x+s,y-s/2,2);
const boxPile= (x,y) => box(x,y,22)+box(x,y-22,22)+box(x+24,y,22);
const shelf  = (x,y,w=70) => R(x,y-56,w,56,'none',0) + L(x,y-38,x+w,y-38,2) + L(x,y-19,x+w,y-19,2);
const truck  = (x,y) => R(x,y-40,74,40,'none') + P(`M${x+74} ${y-26} l22 0 l8 14 l0 12 l-30 0 z`) + C(x+18,y+8,9,SOFT) + C(x+82,y+8,9,SOFT);
const cart   = (x,y) => R(x,y-8,54,8,SOFT) + L(x+54,y-8,x+54,y-34,2) + C(x+8,y+6,6,SOFT) + C(x+46,y+6,6,SOFT);
const suitcase=(x,y,w=26,h=20) => R(x,y-h,w,h,SOFT) + P(`M${x+w/2-5} ${y-h} q5 -7 10 0`,'none',2);
const screen = (x,y) => R(x,y-52,66,46,'none') + L(x+12,y-14,x+12,y-30,3) + L(x+28,y-14,x+28,y-38,3) + L(x+44,y-14,x+44,y-24,3);
const mapProp= (x,y) => P(`M${x} ${y} l34 -6 l0 -22 l-34 6 z`,SOFT) + L(x+12,y-6,x+12,y-26,2);
const machine= (x,y) => R(x,y-44,50,44,SOFT) + C(x+25,y-22,10) + L(x+25,y-32,x+25,y-22,2);
const forklift=(x,y) => R(x,y-34,42,28,'none') + L(x+42,y-46,x+42,y-2,3) + L(x+42,y-8,x+66,y-8,3) + C(x+10,y+4,8,SOFT) + C(x+34,y+4,8,SOFT);
const doorway= (x,y) => R(x,y-96,44,96,'none',0) + C(x+36,y-46,2.5,'currentColor');
const planeDoor=(x,y) => P(`M${x} ${y} l0 -70 q22 -14 44 0 l0 70 z`,'none') + R(x+12,y-56,20,30,SOFT);
const chairRow=(x,y,n=3) => Array.from({length:n},(_,i)=>R(x+i*34,y-18,20,18,'none',1)).join('');
const umbrella=(x,y) => P(`M${x-34} ${y} q34 -26 68 0 z`,WARM) + L(x,y,x,y+38,2);
const rack   = (x,y) => R(x,y-70,44,70,'none',0) + [0,1,2,3].map(i=>L(x,y-58+i*16,x+44,y-58+i*16,2)).join('');
const safe   = (x,y) => R(x,y-34,38,34,SOFT) + C(x+26,y-17,5);
const papers = (x,y) => R(x,y-14,26,14,'none',1) + L(x+4,y-9,x+22,y-9,2) + L(x+4,y-5,x+18,y-5,2);
const wrench = (x,y) => P(`M${x} ${y} l16 -10`,'none',4) + C(x+18,y-11,4,'currentColor');
const cables = (x,y) => P(`M${x} ${y} q10 -14 20 0 q10 14 20 0`,'none',2.5);
const headsetOn=(x,y) => P(`M${x-11} ${y-2} q11 -14 22 0`,'none',2.5) + C(x-11,y+1,3,'currentColor') + C(x+11,y+1,3,'currentColor') + L(x+11,y+2,x+5,y+8,2);
const scanner=(x,y) => R(x,y-12,12,12,ACCENT) + L(x+6,y-12,x+6,y-20,2);
const trophy = (x,y) => P(`M${x} ${y} l0 -8 l-8 0 l0 -16 l24 0 l0 16 l-8 0 l0 8 z`,WARM);
const stage  = (x,y) => R(x,y-10,90,10,SOFT);
const calc   = (x,y) => R(x,y-16,20,16,SOFT) + L(x+4,y-12,x+16,y-12,2);
const wheel  = (x,y,r=9) => C(x,y,r,SOFT);
const jug    = (x,y) => P(`M${x} ${y} l0 -18 l14 0 l0 18 z`,SOFT) + P(`M${x+14} ${y-14} q6 3 0 7`,'none',2);
const pour   = (x,y) => P(`M${x} ${y} l0 14`,'none',2);
const glassRow=(x,y,n=4) => Array.from({length:n},(_,i)=>R(x+i*14,y-12,10,12,'none',1)).join('');

function stage_(inner, caption){
  return `<svg class="part1-art" viewBox="0 0 ${W} ${H}" role="img" aria-label="${caption}" preserveAspectRatio="xMidYMid meet">${inner}</svg>`;
}
module.exports = { W,H,L,C,R,P,T,ACCENT,WARM,SOFT,floor,desk,table,counter,laptop,monitor,cup,phone,box,boxPile,shelf,truck,cart,
  suitcase,screen,mapProp,machine,forklift,doorway,planeDoor,chairRow,umbrella,rack,safe,papers,cables,wrench,headsetOn,scanner,trophy,
  stage,calc,wheel,jug,pour,glassRow,personSeated,personStand,personKneel,personWalk,stage_ };
