import f from 'node:fs'
let O = process.env.MAKEFUN_OUTPUT_DIR || '/output'
let T = "At 3 a.m. the piano plays one note, then stops. No one is in the room. The next night, two notes. You have started leaving the door open, and a glass of water beside the keys, because whatever is learning the piano is thirsty, and you want to hear the third note."
let n = [...T].length
if (n < 1 || n > 280) throw new Error(`entry.txt must be 1-280 code points, got ${n}`)
if (!T.trim()) throw new Error(`entry.txt must not be only white space`)
f.mkdirSync(O, { recursive: true })
f.writeFileSync(O + '/entry.txt', T)
