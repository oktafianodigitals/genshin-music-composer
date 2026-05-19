import type {Tauri} from "$types/TauriTypes"
import type {NoteImage} from "$cmp/shared/SvgNotes"

export const APP_NAME: AppName = process.env.NEXT_PUBLIC_APP_NAME as AppName || ["Sky", "Genshin"][1]
export const APP_VERSION = '3.7.0' as const
console.log(`${APP_NAME}-V${APP_VERSION}`)
export const UPDATE_MESSAGE = (APP_NAME === 'Genshin'
    ? `
Added new instruments: Harmonic Key (genshin)
Added new Layout: number layout
    `
    : `
Added new instruments: Harmonic Key (genshin)
Added new Layout: number layout
    `).trim()

export const UPDATE_URL = process.env.NODE_ENV === 'development'
    ? '/updates.json'
    : 'https://raw.githubusercontent.com/Specy/genshin-music/main/public/updates.json'


//@ts-ignore
export const TAURI: Tauri = undefined //window?.__TAURI__
//@ts-ignore
export const IS_TAURI = !!TAURI
export const NOTES_CSS_CLASSES = {
    noteComposer: APP_NAME === "Genshin" ? "note-composer" : APP_NAME === "Heartopia" ? "note-composer-heartopia" : "note-composer-sky",
    note: APP_NAME === "Genshin" ? "note" : APP_NAME === "Heartopia" ? "note-heartopia" : "note-sky",
    noteAnimation: APP_NAME === 'Genshin' ? "note-animation" : APP_NAME === "Heartopia" ? "note-animation-heartopia" : "note-animation-sky",
    approachCircle: APP_NAME === "Genshin" ? "approach-circle" : APP_NAME === "Heartopia" ? "approach-circle-heartopia" : "approach-circle-sky",
    noteName: APP_NAME === "Genshin" ? "note-name" : APP_NAME === "Heartopia" ? "note-name-heartopia" : "note-name-sky"
}

export const BASE_THEME_CONFIG = {
    text: {
        light: '#eae8e6',
        dark: '#151414',
        note: APP_NAME === 'Genshin' ? '#aaaa82' : APP_NAME === 'Heartopia' ? '#d4a96a' : '#eae8e6'
    }
}
export const INSTRUMENTS = APP_NAME === "Genshin"
    ? [
        "Lyre",
        "Vintage-Lyre",
        "Zither",
        "Old-Zither",
        "Ukulele",
        "LingeringEuphonia",
        "LeapingSpiritPiano",
        "HarmonicKey",
        "DunDun",
        "DjemDjemDrum"
    ] as const
    : APP_NAME === "Heartopia"
    ? [
        "PianoHato",
        "GuitarHato",
        "FluteHato",
    ] as const
    : [
        "Piano",
        "GrandPiano",
        "Contrabass",
        "Guitar",
        "LightGuitar",
        "Harp",
        "Horn",
        "Trumpet",
        "Pipa",
        "WinterPiano",
        "Xylophone",
        "Flute",
        "Panflute",
        "Ocarina",
        "MantaOcarina",
        "Aurora",
        "Kalimba",
        "ToyUkulele",
        "Drum",
        "Bells",
        "DunDun",
        "HandPan",
        "SFX_SineSynth",
        "SFX_BassSynth",
        "SFX_ChimeSynth",
        "SFX_TR-909",
        "SFX_Dance",
        "SFX_BirdCall",
        "SFX_CrabCall",
        "SFX_FishCall",
        "SFX_SpiritMantaCall",
        "SFX_JellyCall",
        "SFX_MantaCall",
        "SFX_MothCall"
    ] as const
export const NOTES_PER_COLUMN = APP_NAME === "Genshin" ? 21 : APP_NAME === "Heartopia" ? 37 : 15
export const NOTE_SCALE = {
    "Cb": ["Cb", "Dbb", "Db", "Ebb", "Eb", "Fb", "Gbb", "Gb", "Abb", "Ab", "Bbb", "Bb"],
    "C": ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
    "C#": ["C#", "D", "D#", "E", "E#", "F#", "G", "G#", "A", "A#", "B", "B#"],
    "Db": ["Db", "Ebb", "Eb", "Fb", "F", "Gb", "Abb", "Ab", "Bbb", "Bb", "Cb", "C"],
    "D": ["D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B", "C", "C#"],
    "D#": ["D#", "E", "E#", "F#", "F##", "G#", "A", "A#", "B", "B#", "C#", "C##"],
    "Eb": ["Eb", "Fb", "F", "Gb", "G", "Ab", "Bbb", "Bb", "Cb", "C", "Db", "D"],
    "E": ["E", "F", "F#", "G", "G#", "A", "Bb", "B", "C", "C#", "D", "D#"],
    "E#": ["E#", "F#", "F##", "G#", "G##", "A#", "B", "B#", "C#", "C##", "D#", "D##"],
    "Fb": ["Fb", "Gbb", "Gb", "Abb", "Ab", "Bbb", "Cbb", "Cb", "Dbb", "Db", "Ebb", "Eb"],
    "F": ["F", "Gb", "G", "Ab", "A", "Bb", "Cb", "C", "Db", "D", "Eb", "E"],
    "F#": ["F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "E#"],
    "Gb": ["Gb", "Abb", "Ab", "Bbb", "Bb", "Cb", "Dbb", "Db", "Ebb", "Eb", "Fb", "F"],
    "G": ["G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "F#"],
    "G#": ["G#", "A", "A#", "B", "B#", "C#", "D", "D#", "E", "E#", "F#", "F##"],
    "Ab": ["Ab", "Bbb", "Bb", "Cb", "C", "Db", "Ebb", "Eb", "Fb", "F", "Gb", "G"],
    "A": ["A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#"],
    "A#": ["A#", "B", "B#", "C#", "C##", "D#", "E", "E#", "F#", "F##", "G#", "G##"],
    "Bb": ["Bb", "Cb", "C", "Db", "D", "Eb", "Fb", "F", "Gb", "G", "Ab", "A"],
    "B": ["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#"],
    "B#": ["B#", "C#", "C##", "D#", "D##", "E#", "F#", "F##", "G#", "G##", "A#", "A##"],
    "": ["", "", "", "", "", "", "", "", "", "", "", ""]
} as const
export const DO_RE_MI_NOTE_SCALE = {
    "Cb": ["dob", "rebb", "reb", "mibb", "mib", "fab", "solbb", "solb", "labb", "lab", "tibb", "tib"],
    "C": ["do", "reb", "re", "mib", "mi", "fa", "solb", "sol", "lab", "la", "tib", "ti"],
    "C#": ["do#", "re", "re#", "mi", "mi#", "fa#", "sol", "sol#", "la", "la#", "ti", "ti#"],
    "Db": ["reb", "mibb", "mib", "fab", "fa", "solb", "labb", "lab", "tibb", "tib", "dob", "do"],
    "D": ["re", "mib", "mi", "fa", "fa#", "sol", "lab", "la", "tib", "ti", "do", "do#"],
    "D#": ["re#", "mi", "mi#", "fa#", "fa##", "sol#", "la", "la#", "ti", "ti#", "do#", "do##"],
    "Eb": ["mib", "fab", "fa", "solb", "sol", "lab", "tibb", "tib", "dob", "do", "reb", "re"],
    "E": ["mi", "fa", "fa#", "sol", "sol#", "la", "tib", "ti", "do", "do#", "re", "re#"],
    "E#": ["mi#", "fa#", "fa##", "sol#", "sol##", "la#", "ti", "ti#", "do#", "do##", "re#", "re##"],
    "Fb": ["fab", "solbb", "solb", "labb", "lab", "tibb", "dobb", "dob", "rebb", "reb", "mibb", "mib"],
    "F": ["fa", "solb", "sol", "lab", "la", "tib", "dob", "do", "reb", "re", "mib", "mi"],
    "F#": ["fa#", "sol", "sol#", "la", "la#", "ti", "do", "do#", "re", "re#", "mi", "mi#"],
    "Gb": ["solb", "labb", "lab", "tibb", "tib", "dob", "rebb", "reb", "mibb", "mib", "fab", "fa"],
    "G": ["sol", "lab", "la", "tib", "ti", "do", "reb", "re", "mib", "mi", "fa", "fa#"],
    "G#": ["sol#", "la", "la#", "ti", "ti#", "do#", "re", "re#", "mi", "mi#", "fa#", "fa##"],
    "Ab": ["lab", "tibb", "tib", "dob", "do", "reb", "mibb", "mib", "fab", "fa", "solb", "sol"],
    "A": ["la", "tib", "ti", "do", "do#", "re", "mib", "mi", "fa", "fa#", "sol", "sol#"],
    "A#": ["la#", "ti", "ti#", "do#", "do##", "re#", "mi", "mi#", "fa#", "fa##", "sol#", "sol##"],
    "Bb": ["tib", "dob", "do", "reb", "re", "mib", "fab", "fa", "solb", "sol", "lab", "la"],
    "B": ["ti", "do", "do#", "re", "re#", "mi", "fa", "fa#", "sol", "sol#", "la", "la#"],
    "B#": ["ti#", "do#", "do##", "re#", "re##", "mi#", "fa#", "fa##", "sol#", "sol##", "la#", "la##"],
    "": ["", "", "", "", "", "", "", "", "", "", "", ""]
} as const
export type BaseNote = keyof typeof NOTE_SCALE
export const INSTRUMENT_NOTE_LAYOUT_KINDS = {
    defaultSky: ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B", "C"],
    defaultGenshin: ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B"],
    // Heartopia: 22 white keys (indices 0–21), low→mid→high + high DO
    defaultHeartopia: [
        // Row Bottom — Low octave (indices 0–6)
        "C", "D", "E", "F", "G", "A", "B",
        // Row Middle — Mid octave (indices 7–13)
        "C", "D", "E", "F", "G", "A", "B",
        // Row Top — High octave (indices 14–20)
        "C", "D", "E", "F", "G", "A", "B",
        // High DO — top right (index 21)
        "C"
    ],
    skyBell: ["C", "D", "G", "A", "C", "D", "G", "A"],
    skyHandpan: ["D", "A", "C", "D", "F", "G", "A", "C"],
    defaultDrums: ["C", "D", "E", "F", "G", "A", "B", "C"],
    skySFX6: ["", "", "", "", "", ""],
    skySFX14: ["C#", "E", "G", "A#", "C#", "E", "G", "A#", "C#", "E", "G", "A#", "C#", "E"],
    genshinVintageLyre: ["C", "Db", "Eb", "F", "G", "Ab", "Bb", "C", "D", "Eb", "F", "G", "A", "Bb", "C", "D", "Eb", "F", "G", "A", "Bb"],
    genshinUkulele: ["C", "Db", "Eb", "F", "G", "Ab", "G", "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B"]

} as const
Object.freeze(NOTE_SCALE)
Object.freeze(INSTRUMENT_NOTE_LAYOUT_KINDS)
export const INSTRUMENT_MIDI_LAYOUT_KINDS = {
    defaultSky: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84],
    defaultGenshin: [72, 74, 76, 77, 79, 81, 83, 60, 62, 64, 65, 67, 69, 71, 48, 50, 52, 53, 55, 57, 59,],
    // Heartopia: 22 white keys, C3–C6 (low→mid→high + high DO)
    defaultHeartopia: [
        48, 50, 52, 53, 55, 57, 59,   // C3–B3 (low octave)
        60, 62, 64, 65, 67, 69, 71,   // C4–B4 (mid octave)
        72, 74, 76, 77, 79, 81, 83,   // C5–B5 (high octave)
        84                              // C6 (high DO)
    ],
    skyBell: [60, 62, 67, 69, 72, 74, 79, 81],
    skyHandpan: [62, 69, 72, 74, 77, 79, 81, 84],
    defaultDrums: [60, 62, 64, 65, 67, 69, 71, 72],
    skySFX6: [60, 62, 64, 65, 67, 69],
    skySFX14: [61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 100],
    //genshinVintageLyre: [, 72, 74, 75, 77, 79, 81, 82, 84, 86, 88, 89, 91, 93, 95, 96],
}

export const MIDI_PRESETS = [
    {
        name: "default",
        notes: APP_NAME === "Sky" ? INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky
             : APP_NAME === "Heartopia" ? INSTRUMENT_MIDI_LAYOUT_KINDS.defaultHeartopia
             : INSTRUMENT_MIDI_LAYOUT_KINDS.defaultGenshin
    }
] satisfies MIDIPreset[]

export type MIDIPreset = {
    name: string,
    notes: number[]
}


export const LAYOUT_KINDS = {
    defaultGenshin: {
        keyboardLayout: (
            "Q W E R T Y U " +
            "A S D F G H J " +
            "Z X C V B N M").split(" "),
        numberLayout: (
            "1\u0307 2\u0307 3\u0307 4\u0307 5\u0307 6\u0307 7\u0307 " +
            "1 2 3 4 5 6 7 " +
            "1\u0323 2\u0323 3\u0323 4\u0323 5\u0323 6\u0323 7\u0323").split(" "),
        abcLayout: (
            "A1 A2 A3 A4 A5 A6 A7 " +
            "B1 B2 B3 B4 B5 B6 B7 " +
            "C1 C2 C3 C4 C5 C6 C7").split(" "),
        playstationLayout: new Array(21).fill(" "),
        switchLayout: new Array(21).fill(" "),
    },
    // Heartopia: 3×7 white keys + 1 high DO (indices 0–21) + 3×5 black keys (indices 22–36) = 37 positions
    // Heartopia: 3x7 white keys + 1 high DO (indices 0-21) + 3x5 black keys (indices 22-36) = 37 positions
    // keyboardLayout index MUST match note index:
    //   indices 0-6   = low  octave white keys
    //   indices 7-13  = mid  octave white keys
    //   indices 14-21 = high octave white keys + high DO
    //   indices 22-26 = low  octave black keys
    //   indices 27-31 = mid  octave black keys
    //   indices 32-36 = high octave black keys
    defaultHeartopia: {
        keyboardLayout: (
            // WHITE KEYS (low -> mid -> high, must match note indices 0-21)
            // Row bottom - low  octave (indices 0-6)  : , . / O P [ ]
            ", . / O P [ ] " +
            // Row middle - mid  octave (indices 7-13) : Z X C V B N M
            "Z X C V B N M " +
            // Row top    - high octave (indices 14-20): Q W E R T Y U
            // High DO                  (index 21)     : I
            "Q W E R T Y U I " +
            // BLACK KEYS (low -> mid -> high, must match note indices 22-36)
            // Low  black keys (indices 22-26): C#3 D#3 F#3 G#3 A#3 -> L ; 0 - =
            "L ; 0 - = " +
            // Mid  black keys (indices 27-31): C#4 D#4 F#4 G#4 A#4 -> S D G H J
            "S D G H J " +
            // High black keys (indices 32-36): C#5 D#5 F#5 G#5 A#5 -> 2 3 5 6 7
            "2 3 5 6 7"
        ).split(" "),
        numberLayout: (
            // White keys - low octave (dots below, indices 0-6)
            "1\u0323 2\u0323 3\u0323 4\u0323 5\u0323 6\u0323 7\u0323 " +
            // White keys - mid octave (plain, indices 7-13)
            "1 2 3 4 5 6 7 " +
            // White keys - high octave (dots above, indices 14-21)
            "1\u0307 2\u0307 3\u0307 4\u0307 5\u0307 6\u0307 7\u0307 1\u0307\u0307 " +
            // Black keys - low octave (indices 22-26)
            "1\u0323\u266f 2\u0323\u266f 4\u0323\u266f 5\u0323\u266f 6\u0323\u266f " +
            // Black keys - mid octave (indices 27-31)
            "1\u266f 2\u266f 4\u266f 5\u266f 6\u266f " +
            // Black keys - high octave (indices 32-36)
            "1\u0307\u266f 2\u0307\u266f 4\u0307\u266f 5\u0307\u266f 6\u0307\u266f"
        ).split(" "),
        abcLayout: (
            // White keys - low -> mid -> high
            "C1 C2 C3 C4 C5 C6 C7 " +
            "B1 B2 B3 B4 B5 B6 B7 " +
            "A1 A2 A3 A4 A5 A6 A7 A8 " +
            // Black keys - low -> mid -> high
            "C1# C2# C3# C4# C5# " +
            "B1# B2# B3# B4# B5# " +
            "A1# A2# A3# A4# A5#"
        ).split(" "),
        playstationLayout: new Array(37).fill(" "),
        switchLayout: new Array(37).fill(" "),
    },
    defaultDrums: {
        keyboardLayout: (
            "Q W E R " +
            "A S D F").split(" "),
        numberLayout: (
            "1 2 3 4 " +
            "1\u0323 2\u0323 3\u0323 4\u0323").split(" "),
        abcLayout: (
            "A1 A2 A3 A4 " +
            "B1 B2 B3 B4").split(" "),
        playstationLayout: (
            "⟰ ▲ ⭅ ◼ " +
            "⟱ X L2 R2"
        ).split(" "),
        switchLayout: (
            "⟰ X ⭅ Y " +
            "⟱ B Zl Zr"
        ).split(" "),
    },
    defaultSky: {
        keyboardLayout: (
            "Q W E R T " +
            "A S D F G " +
            "Z X C V B").split(" "),
        numberLayout: (
            "1 2 3 4 5 " +
            "6 7 1\u0307 2\u0307 3\u0307 " +
            "4\u0307 5\u0307 6\u0307 7\u0307 1\u0307\u0307").split(" "),
        abcLayout: (
            "A1 A2 A3 A4 A5 " +
            "B1 B2 B3 B4 B5 " +
            "C1 C2 C3 C4 C5").split(" "),
        playstationLayout: (
            "L2 R2 ⟱ X ⭅ " +
            "◼ ⟰ ▲ ⭆ ⬤ " +
            "L1 R1 ❰L ❰R L❱"
        ).split(" "),
        switchLayout: (
            "Zl Zr ⟱ B ⭅ " +
            "Y ⟰ X ⭆ A " +
            "L R ❰L ❰R L❱"
        ).split(" ")
    },
    skySFX6: {
        keyboardLayout: (
            "Q W E " +
            "A S D").split(" "),
        abcLayout: (
            "A1 A2 A3 " +
            "B1 B2 B3").split(" "),
        playstationLayout: (
            "⟰ ▲ ⭅ " +
            "⟱ X L2"
        ).split(" "),
        switchLayout: (
            "Zl Zr ⟱ " +
            "Y ⟰ X"
        ).split(" "),
        numberLayout: (
            "1 2 3 " +
            "1\u0307 2\u0307 3\u0307"
        ).split(" ")
    },

}
//TODO add the instrument data like layout kinds here instead of LAYOUT_KINDS
export const LAYOUT_ICONS_KINDS = {
    defaultSky: "dmcr dm cr dm cr cr dm dmcr dm cr cr dm cr dm dmcr".split(" ") as NoteImage[],
    defaultSkyDrums: "cr dm cr dm cr dm cr dm".split(" ") as NoteImage[],
    defaultSkySynth: "dmcr dm cr dm cr dm cr dmcr".split(" ") as NoteImage[],
    defaultGenshinDrums: "do re mi fa do re mi fa".split(" ") as NoteImage[],
    skySFX6: "cr dm cr cr dm cr".split(" ") as NoteImage[],
    defaultGenshin: "do re mi fa so la ti do re mi fa so la ti do re mi fa so la ti".split(" ") as NoteImage[],
    genshinVintageLyre: "do reb mib fa so lab tib do re mib fa so la tib do re mib fa so la tib".split(" ") as NoteImage[],
    // Heartopia: 22 white key positions (3 octaves + high DO)
    defaultHeartopia: (
        "do re mi fa so la ti " +   // low octave
        "do re mi fa so la ti " +   // mid octave
        "do re mi fa so la ti " +   // high octave
        "do"                         // high DO
    ).split(" ") as NoteImage[],
}
export type NoteNameType =
    'Note name'
    | 'Keyboard layout'
    | 'Your Keyboard layout'
    | 'Do Re Mi'
    | 'ABC'
    | 'No Text'
    | 'Playstation'
    | 'Switch'
    | '1 2 3'

export const NOTE_NAME_TYPES: NoteNameType[] = APP_NAME === "Genshin" || APP_NAME === "Heartopia"
    ? [
        "Note name",
        "Keyboard layout",
        "Your Keyboard layout",
        "Do Re Mi",
        "ABC",
        "No Text",
        "1 2 3",
    ]
    : [
        "Note name",
        "Keyboard layout",
        "Your Keyboard layout",
        "Do Re Mi",
        "ABC",
        "No Text",
        "Playstation",
        "Switch",
        "1 2 3",
    ]

export type InstrumentDataType = {
    notes: number
    family: string
    midiName: string
    baseNotes: readonly BaseNote[]
    layout: typeof LAYOUT_KINDS[keyof typeof LAYOUT_KINDS]
    icons: readonly NoteImage[]
    midiNotes: readonly number[]
    clickColor?: string
    fill?: string
}


const skySfx14 = {
    notes: 15,
    family: "percussive",
    midiName: "synth drum",
    baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
    layout: LAYOUT_KINDS.defaultSky,
    icons: LAYOUT_ICONS_KINDS.defaultSky,
    midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
}

export const BaseinstrumentsData: { [key in string]: InstrumentDataType } = APP_NAME === "Genshin" ? {
    Lyre: {
        notes: 21,
        family: "strings",
        midiName: "pizzicato strings",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultGenshin,
        layout: LAYOUT_KINDS.defaultGenshin,
        icons: LAYOUT_ICONS_KINDS.defaultGenshin,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultGenshin,
    },
    Zither: {
        notes: 21,
        fill: '#cdb68e',
        family: "strings",
        midiName: "pizzicato strings", //maybe koto?
        clickColor: '#ddcba8',
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultGenshin,
        layout: LAYOUT_KINDS.defaultGenshin,
        icons: LAYOUT_ICONS_KINDS.defaultGenshin,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultGenshin,

    },
    "Vintage-Lyre": {
        notes: 21,
        family: "strings",
        midiName: "pizzicato strings",
        fill: '#7FB363',
        clickColor: '#7FB363',
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.genshinVintageLyre,
        layout: LAYOUT_KINDS.defaultGenshin,
        icons: LAYOUT_ICONS_KINDS.genshinVintageLyre,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultGenshin //genshinVintageLyre,
    },
    "Old-Zither": {
        notes: 21,
        fill: '#cdb68e',
        family: "strings",
        midiName: "pizzicato strings",
        clickColor: '#ddcba8',
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultGenshin,
        layout: LAYOUT_KINDS.defaultGenshin,
        icons: LAYOUT_ICONS_KINDS.defaultGenshin,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultGenshin,
    },
    "Ukulele": {
        notes: 21,
        fill: '#4d719a',
        family: "strings",
        midiName: "pizzicato strings",
        clickColor: '#6586d9',
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.genshinUkulele,
        layout: LAYOUT_KINDS.defaultGenshin,
        icons: LAYOUT_ICONS_KINDS.defaultGenshin,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultGenshin
    },
    "LingeringEuphonia": {//guitar
        notes: 21,
        fill: '#9288d3',
        family: "strings",
        midiName: "pizzicato strings",
        clickColor: '#9591df',
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.genshinUkulele,
        layout: LAYOUT_KINDS.defaultGenshin,
        icons: LAYOUT_ICONS_KINDS.defaultGenshin,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultGenshin
    },
    "HarmonicKey": {
        notes: 21,
        fill: '#ddb055',
        family: "piano",
        midiName: "acoustic grand",
        clickColor: '#e1cba3',
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultGenshin,
        layout: LAYOUT_KINDS.defaultGenshin,
        icons: LAYOUT_ICONS_KINDS.defaultGenshin,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultGenshin
    },
    "LeapingSpiritPiano": {
        notes: 21,
        fill: '#5cadbd',
        family: "piano",
        midiName: "acoustic grand",
        clickColor: '#5cadbd',
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultGenshin,
        layout: LAYOUT_KINDS.defaultGenshin,
        icons: LAYOUT_ICONS_KINDS.defaultGenshin,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultGenshin
    },
    DunDun: {
        notes: 8,
        family: "percussive",
        midiName: "synth drum",
        fill: '#F99C55',
        clickColor: '#f5a262',
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultDrums,
        layout: LAYOUT_KINDS.defaultDrums,
        icons: LAYOUT_ICONS_KINDS.defaultGenshinDrums,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultDrums,
    },
    DjemDjemDrum: {
        notes: 8,
        family: "percussive",
        midiName: "synth drum",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultDrums,
        layout: LAYOUT_KINDS.defaultDrums,
        icons: LAYOUT_ICONS_KINDS.defaultGenshinDrums,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultDrums,
    },
} : APP_NAME === "Heartopia" ? {
    // Heartopia instruments — all share the 37-note defaultHeartopia layout
    // Audio samples: reuse Genshin assets as placeholder (place heartopia audio in /assets/audio/heartopia/)
    PianoHato: {
        notes: 37,
        family: "strings",
        midiName: "orchestral harp",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultHeartopia,
        layout: LAYOUT_KINDS.defaultHeartopia,
        icons: LAYOUT_ICONS_KINDS.defaultHeartopia,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultHeartopia,
    },
    GuitarHato: {
        notes: 37,
        family: "strings",
        midiName: "acoustic guitar (nylon)",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultHeartopia,
        layout: LAYOUT_KINDS.defaultHeartopia,
        icons: LAYOUT_ICONS_KINDS.defaultHeartopia,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultHeartopia,
    },
    FluteHato: {
        notes: 37,
        family: "pipe",
        midiName: "flute",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultHeartopia,
        layout: LAYOUT_KINDS.defaultHeartopia,
        icons: LAYOUT_ICONS_KINDS.defaultHeartopia,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultHeartopia,
    },
} : {
    "SFX_Dance": {
        notes: 6,
        family: "percussive",
        midiName: "synth drum",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.skySFX6,
        layout: LAYOUT_KINDS.skySFX6,
        icons: LAYOUT_ICONS_KINDS.skySFX6,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.skySFX6
    },
    "SFX_BirdCall": skySfx14,
    "SFX_CrabCall": skySfx14,
    "SFX_FishCall": skySfx14,
    "SFX_SpiritMantaCall": skySfx14,
    "SFX_JellyCall": skySfx14,
    "SFX_MantaCall": skySfx14,
    "SFX_MothCall": skySfx14,
    "SFX_SineSynth": {
        notes: 8,
        family: "synth",
        midiName: "sine",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultDrums,
        layout: LAYOUT_KINDS.defaultDrums,
        icons: LAYOUT_ICONS_KINDS.defaultSkySynth,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultDrums,
    },
    "SFX_BassSynth": {
        notes: 8,
        family: "Bass",
        midiName: "Electric Bass",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultDrums,
        layout: LAYOUT_KINDS.defaultDrums,
        icons: LAYOUT_ICONS_KINDS.defaultSkySynth,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultDrums,
    },
    "SFX_ChimeSynth": {
        notes: 8,
        family: "percussion",
        midiName: "Bellchime",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultDrums,
        layout: LAYOUT_KINDS.defaultDrums,
        icons: LAYOUT_ICONS_KINDS.defaultSkySynth,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultDrums,
    },
    "SFX_TR-909": {
        notes: 8,
        family: "percussion",
        midiName: "Roland TR-808",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultDrums,
        layout: LAYOUT_KINDS.defaultDrums,
        icons: LAYOUT_ICONS_KINDS.defaultSkySynth,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultDrums,
    },
    Panflute: {
        notes: 15,
        family: "pipe",
        midiName: "pan flute",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    LightGuitar: {
        notes: 15,
        family: "guitar",
        midiName: "electric guitar (clean)",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,

    },
    Bells: {
        notes: 8,
        family: "chromatic percussion",
        midiName: "tubular bells",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.skyBell,
        layout: LAYOUT_KINDS.defaultDrums,
        icons: LAYOUT_ICONS_KINDS.defaultSkyDrums,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.skyBell,
    },
    Trumpet: {
        notes: 15,
        family: "brass",
        midiName: "trumpet",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Aurora: {
        notes: 15,
        family: "vocal",
        midiName: "voice oohs",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Aurora_Short: {
        notes: 15,
        family: "vocal",
        midiName: "voice oohs",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Contrabass: {
        notes: 15,
        family: "guitar",
        midiName: "contrabass",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,

    },
    Drum: {
        notes: 8,
        family: "percussive",
        midiName: "synth drum",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultDrums,
        layout: LAYOUT_KINDS.defaultDrums,
        icons: LAYOUT_ICONS_KINDS.defaultSkyDrums,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultDrums,
    },
    Flute: {
        notes: 15,
        family: "pipe",
        midiName: "flute",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Guitar: {
        notes: 15,
        family: "guitar",
        midiName: "acoustic guitar (steel)",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    HandPan: {
        notes: 8,
        family: "percussive",
        midiName: "steel drums",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.skyHandpan,
        layout: LAYOUT_KINDS.defaultDrums,
        icons: LAYOUT_ICONS_KINDS.defaultSkyDrums,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.skyHandpan,
    },
    ToyUkulele: {
        notes: 15,
        family: "guitar",
        midiName: "acoustic guitar (nylon)",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Harp: {
        notes: 15,
        family: "strings",
        midiName: "orchestral harp",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Horn: {
        notes: 15,
        family: "brass",
        midiName: "tuba",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Piano: {
        notes: 15,
        family: "piano",
        midiName: "acoustic grand piano",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    GrandPiano: {
        notes: 15,
        family: "piano",
        midiName: "acoustic grand piano",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Pipa: {
        notes: 15,
        family: "reed",
        midiName: "oboe",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Kalimba: {
        notes: 15,
        family: "piano",
        midiName: "bright acoustic piano",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    WinterPiano: {
        notes: 15,
        family: "piano",
        midiName: "bright acoustic piano",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Xylophone: {
        notes: 15,
        family: "chromatic percussion",
        midiName: "xylophone",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    Ocarina: {
        notes: 15,
        family: "pipe",
        midiName: "pan flute",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    MantaOcarina: {
        notes: 15,
        family: "pipe",
        midiName: "pan flute",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultSky,
        layout: LAYOUT_KINDS.defaultSky,
        icons: LAYOUT_ICONS_KINDS.defaultSky,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultSky,
    },
    DunDun: {
        notes: 8,
        family: "percussive",
        midiName: "synth drum",
        baseNotes: INSTRUMENT_NOTE_LAYOUT_KINDS.defaultDrums,
        layout: LAYOUT_KINDS.defaultDrums,
        icons: LAYOUT_ICONS_KINDS.defaultSkyDrums,
        midiNotes: INSTRUMENT_MIDI_LAYOUT_KINDS.defaultDrums,
    },
}
type InstrumentsDataKeys = keyof typeof BaseinstrumentsData
type InstrumentsDataProps = {
    [key in InstrumentsDataKeys]: InstrumentDataType
}

export const INSTRUMENTS_DATA: InstrumentsDataProps = BaseinstrumentsData

export const SPEED_CHANGERS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map(e => {
    return {
        name: `x${e}`,
        value: e
    }
})

export const PITCHES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"] as const
export const PITCH_TO_INDEX = new Map<Pitch, number>(PITCHES.map((pitch, index) => [pitch, index]))
export type Pitch = typeof PITCHES[number]
// Heartopia COMPOSER_NOTE_POSITIONS: 37 notes (indices 0–36)
// positions[noteIndex] = canvas Y row (0=top/highest, 36=bottom/lowest)
// LOW notes (C3) at BOTTOM (row 36), HIGH notes (C6) at TOP (row 0)
// Chromatic interleaved: white + black keys ordered by pitch
const _heartopiaComposerPositions = [
    // noteIndex: 0   1   2   3   4   5   6   7   8   9  10  11  12  13
    /* white  */ 36, 34, 32, 31, 29, 27, 25, 24, 22, 20, 19, 17, 15, 13,
    // noteIndex: 14  15  16  17  18  19  20  21
    /* white  */ 12, 10,  8,  7,  5,  3,  1,  0,
    // noteIndex: 22  23  24  25  26
    /* blk low*/ 35, 33, 30, 28, 26,
    // noteIndex: 27  28  29  30  31
    /* blk mid*/ 23, 21, 18, 16, 14,
    // noteIndex: 32  33  34  35  36
    /* blk hi */ 11,  9,  6,  4,  2,
]

export const COMPOSER_NOTE_POSITIONS = APP_NAME === "Genshin"
    ? [14, 15, 16, 17, 18, 19, 20, 7, 8, 9, 10, 11, 12, 13, 0, 1, 2, 3, 4, 5, 6].reverse()
    : APP_NAME === "Heartopia"
    ? _heartopiaComposerPositions
    : [15, 16, 17, 18, 19, 20, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].reverse()

export const IMPORT_NOTE_POSITIONS = APP_NAME === "Genshin"
    ? [14, 15, 16, 17, 18, 19, 20, 7, 8, 9, 10, 11, 12, 13, 0]
    : APP_NAME === "Heartopia"
    ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

export const CACHE_DATA = {
    noteData: {
        background: "#d3bd8e",
        border: "#de6b45",
        center: "#de6b45"
    },
    // Heartopia: HIGH=13 notes (7w+5b+highDO), MID=12, LOW=12
    // Line 1 after row 13 (HIGH/MID), line 2 after row 25 (MID/LOW)
    // Custom array [line1Row, line2Row]; other apps use single value
    horizontalLineBreak: APP_NAME === "Heartopia" ? [13, 25] : NOTES_PER_COLUMN / 3,
    standards: [
        {
            color: 0x515c6f //lighter
        }, {
            color: 0x485363 //darker
        }, {
            color: 0x1a968b //current
        }, {
            color: 0xd6722f //selected
        }
    ],
    layersCombination: new Array(16).fill(0).map((_, index) => index),
    breakpoints: [
        {
            type: "short",
            color: "#282875"
        }, {
            type: "long",
            color: "#282875"
        }
    ]
}
export const TEMPO_CHANGERS = [
    {
        id: 0,
        text: "1",
        changer: 1,
        color: 0x515c6f
    }, {
        id: 1,
        text: "1/2",
        changer: 1 / 2,
        color: 0x517553
    }, {
        id: 2,
        text: "1/4",
        changer: 1 / 4,
        color: 0x434c7d
    }, {
        id: 3,
        text: "1/8",
        changer: 1 / 8,
        color: 0x774D6D
    }
] as const
export type TempoChanger = typeof TEMPO_CHANGERS[number]

export type AppName = 'Sky' | 'Genshin' | 'Heartopia'

export const EMPTY_LAYER = "0000"
export const VSRG_TEMPO_CHANGER = [2, 1.75, 1.5, 1.25, 1, 0.75, 0.50, 0.25]
export const MIDI_MAP_TO_NOTE = new Map(Object.entries((APP_NAME === 'Sky'
    ? {
        60: [0, false],
        61: [0, true],
        62: [1, false],
        63: [1, true],
        64: [2, false],
        65: [3, false],
        66: [3, true],
        67: [4, false],
        68: [4, true],
        69: [5, false],
        70: [5, true],
        71: [6, false],
        72: [7, false],
        73: [7, true],
        74: [8, false],
        75: [8, true],
        76: [9, false],
        77: [10, false],
        78: [10, true],
        79: [11, false],
        80: [11, true],
        81: [12, false],
        82: [12, true],
        83: [13, false],
        84: [14, false],
    }
    : APP_NAME === 'Heartopia'
    ? {
        // White keys (isAccidental = false) — indices 0–21
        48: [0, false],   // C3  (do low)
        50: [1, false],   // D3  (re low)
        52: [2, false],   // E3  (mi low)
        53: [3, false],   // F3  (fa low)
        55: [4, false],   // G3  (sol low)
        57: [5, false],   // A3  (la low)
        59: [6, false],   // B3  (si low)
        60: [7, false],   // C4  (do mid)
        62: [8, false],   // D4  (re mid)
        64: [9, false],   // E4  (mi mid)
        65: [10, false],  // F4  (fa mid)
        67: [11, false],  // G4  (sol mid)
        69: [12, false],  // A4  (la mid)
        71: [13, false],  // B4  (si mid)
        72: [14, false],  // C5  (do high)
        74: [15, false],  // D5  (re high)
        76: [16, false],  // E5  (mi high)
        77: [17, false],  // F5  (fa high)
        79: [18, false],  // G5  (sol high)
        81: [19, false],  // A5  (la high)
        83: [20, false],  // B5  (si high)
        84: [21, false],  // C6  (high DO)
        // Black keys (isAccidental = true) — 5 per octave, piano layout
        // Low octave black keys (indices 22–26)
        49: [22, true],   // C#3 (between do–re, low)
        51: [23, true],   // D#3 (between re–mi, low)
        // no E#3 (mi–fa gap has no black key)
        54: [24, true],   // F#3 (between fa–sol, low)
        56: [25, true],   // G#3 (between sol–la, low)
        58: [26, true],   // A#3 (between la–si, low)
        // no B#3 (si–do gap has no black key)
        // Mid octave black keys (indices 27–31)
        61: [27, true],   // C#4 (between do–re, mid)
        63: [28, true],   // D#4 (between re–mi, mid)
        66: [29, true],   // F#4 (between fa–sol, mid)
        68: [30, true],   // G#4 (between sol–la, mid)
        70: [31, true],   // A#4 (between la–si, mid)
        // High octave black keys (indices 32–36)
        73: [32, true],   // C#5 (between do–re, high)
        75: [33, true],   // D#5 (between re–mi, high)
        78: [34, true],   // F#5 (between fa–sol, high)
        80: [35, true],   // G#5 (between sol–la, high)
        82: [36, true],   // A#5 (between la–si, high)
    }
    : {
        48: [14, false],
        49: [14, true],
        50: [15, false],
        51: [15, true],
        52: [16, false],
        53: [17, false],
        54: [17, true],
        55: [18, false],
        56: [18, true],
        57: [19, false],
        58: [19, true],
        59: [20, false],
        60: [7, false],
        61: [7, true],
        62: [8, false],
        63: [8, true],
        64: [9, false],
        65: [10, false],
        66: [10, true],
        67: [11, false],
        68: [11, true],
        69: [12, false],
        70: [12, true],
        71: [13, false],
        72: [0, false],
        73: [0, true],
        74: [1, false],
        75: [1, true],
        76: [2, false],
        77: [3, false],
        78: [3, true],
        79: [4, false],
        80: [4, true],
        81: [5, false],
        82: [5, true],
        83: [6, false],
    })))
export const DEFAULT_VSRG_KEYS_MAP = {
    4: ["A", "S", "G", "H"],
    6: ["A", "S", "D", "G", "H", "J"],
}
export const VSRG_SCORE_COLOR_MAP = {
    amazing: '#cff3e3',
    perfect: '#d9af0a',
    great: '#358a55 ',
    good: '#380cc4',
    bad: '#dd8d46',
    miss: '#f24b5b',
    '': '#ffffff',
}
export const FOLDER_FILTER_TYPES = ["alphabetical", "date-created"] as const

export const MIDI_BOUNDS = APP_NAME === "Genshin" || APP_NAME === "Heartopia"
    ? {
        upper: 84,
        lower: 48
    }
    : {
        upper: 84,
        lower: 60
    }
export const PIXI_VERTICAL_ALIGN = [0.5, 0] as [number, number]
export const PIXI_HORIZONTAL_ALIGN = [0, 0.5] as [number, number]
export const PIXI_CENTER_X_END_Y = [0.5, 1] as [number, number]
export const PIXI_CENTER_ALIGN = 0.5
//get only non accidentals
const entries = Object.entries(Object.fromEntries(MIDI_MAP_TO_NOTE)).filter(([k, v]) => v[1] === false)
export const NOTE_MAP_TO_MIDI = new Map(entries.map(([k, v]) => [v[0], Number(k)]))
export const DEFAULT_DOM_RECT = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
} as DOMRect

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
export const HAS_BIGINT = typeof BigInt !== 'undefined'
export const BASE_LAYER_LIMIT = HAS_BIGINT ? 52 : 30
export const IS_BETA = process.env.NEXT_PUBLIC_IS_BETA === "true"
export const IS_DEV = process.env.NODE_ENV === "development"
export const LANG_PREFERENCE_KEY_NAME = APP_NAME + "_Lang"
