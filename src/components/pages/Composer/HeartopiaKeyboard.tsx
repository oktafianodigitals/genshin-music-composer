
import ComposerNote from '$cmp/pages/Composer/ComposerNote'
import {InstrumentData, NoteColumn} from '$lib/Songs/SongClasses'
import {NoteNameType, Pitch} from '$config'
import {Instrument, ObservableNote} from '$lib/audio/Instrument'
import {Theme} from '$stores/ThemeStore/ThemeProvider'

/**
 * Heartopia piano keyboard — Composer version
 *
 * Layout (top → bottom):
 *   HIGH row: white keys 14-20 (C5-B5) + High DO key 21 (C6) at far right
 *   MID  row: white keys  7-13 (C4-B4)
 *   LOW  row: white keys  0-6  (C3-B3)
 *
 * Black keys per row (5, piano pattern):
 *   Gap 0-1 → C#  (bkIdx 0)
 *   Gap 1-2 → D#  (bkIdx 1)
 *   Gap 2-3 → EMPTY (E-F, no black key)
 *   Gap 3-4 → F#  (bkIdx 2)
 *   Gap 4-5 → G#  (bkIdx 3)
 *   Gap 5-6 → A#  (bkIdx 4)
 *   Gap 6-7 → EMPTY (B-C, no black key)
 *
 * Black key index scheme:
 *   LOW:  22=C#3, 23=D#3, 24=F#3, 25=G#3, 26=A#3
 *   MID:  27=C#4, 28=D#4, 29=F#4, 30=G#4, 31=A#4
 *   HIGH: 32=C#5, 33=D#5, 34=F#5, 35=G#5, 36=A#5
 *
 * Positioning:
 *   Row inner width = 7 × (--htp-wk) + 6 × (--htp-gap)  [7 white keys + 6 gaps]
 *   Black key center = (gapIndex + 1) × (--htp-wk + --htp-gap) - (--htp-gap / 2)
 *   Simplified as percentage: center at (leftKeyIdx + 1) / 7 × 100% of inner width
 */

// Which gap index (left white key 0-indexed) each black key sits in
// Gap index 0 = between white key 0 and 1, etc.
const BK_GAP_POSITIONS = [0, 1, 3, 4, 5] as const
// Pre-computed CSS left positions for each black key gap
// Formula: (N+1) × (white_key + gap) - gap/2 - black_key/2
const BK_LEFT_POS: Record<number, string> = {
    0: "calc(1 * (var(--htp-wk) + var(--htp-gap)) - var(--htp-gap) / 2 - var(--htp-bk) / 2)",
    1: "calc(2 * (var(--htp-wk) + var(--htp-gap)) - var(--htp-gap) / 2 - var(--htp-bk) / 2)",
    3: "calc(4 * (var(--htp-wk) + var(--htp-gap)) - var(--htp-gap) / 2 - var(--htp-bk) / 2)",
    4: "calc(5 * (var(--htp-wk) + var(--htp-gap)) - var(--htp-gap) / 2 - var(--htp-bk) / 2)",
    5: "calc(6 * (var(--htp-wk) + var(--htp-gap)) - var(--htp-gap) / 2 - var(--htp-bk) / 2)",
}

interface Props {
    keyboard: Instrument
    instruments: InstrumentData[]
    currentColumn: NoteColumn
    currentLayer: number
    noteNameType: NoteNameType
    pitch: Pitch
    theme: Theme
    handleClick: (note: ObservableNote) => void
    // Used to invalidate memo cache when column notes mutate in-place
    columnHash: string
}

const ROWS = [
    {whiteStart: 14, blackStart: 32, hasHighDO: true,  label: 'high'},
    {whiteStart: 7,  blackStart: 27, hasHighDO: false, label: 'mid'},
    {whiteStart: 0,  blackStart: 22, hasHighDO: false, label: 'low'},
] as const

function getLayer(currentColumn: NoteColumn, noteIndex: number, currentLayer: number, instruments: InstrumentData[]) {
    const idx = currentColumn.notes.findIndex(n => n.index === noteIndex)
    return idx >= 0 ? currentColumn.notes[idx].layer.toLayerStatus(currentLayer, instruments) : 0
}

function HeartopiaKeyboard({
    keyboard, instruments, currentColumn, currentLayer,
    noteNameType, pitch, theme, handleClick
}: Props) {
    const notes = keyboard.notes
    if (!notes.length) return <div className="loading">Loading...</div>

    return (
        <div className="heartopia-keyboard">
            {ROWS.map((row) => (
                <div key={row.label} className="heartopia-row">
                    <div className="heartopia-row-inner">

                        {/* ── 7 white keys ── */}
                        {Array.from({length: 7}, (_, i) => {
                            const ni = row.whiteStart + i
                            const note = notes[ni]
                            if (!note) return null
                            return (
                                <div key={ni} className="heartopia-white-key-slot">
                                    <ComposerNote
                                        data={note}
                                        layer={getLayer(currentColumn, ni, currentLayer, instruments)}
                                        theme={theme}
                                        noteText={keyboard.getNoteText(ni, noteNameType, pitch)}
                                        instrument={keyboard.name}
                                        noteImage={note.noteImage}
                                        clickAction={handleClick}
                                    />
                                </div>
                            )
                        })}

                        {/* ── High DO (index 21) — only on HIGH row ── */}
                        {row.hasHighDO && (() => {
                            const ni = 21
                            const note = notes[ni]
                            if (!note) return null
                            return (
                                <div key={ni} className="heartopia-white-key-slot heartopia-high-do">
                                    <ComposerNote
                                        data={note}
                                        layer={getLayer(currentColumn, ni, currentLayer, instruments)}
                                        theme={theme}
                                        noteText={keyboard.getNoteText(ni, noteNameType, pitch)}
                                        instrument={keyboard.name}
                                        noteImage={note.noteImage}
                                        clickAction={handleClick}
                                    />
                                </div>
                            )
                        })()}

                        {/* ── 5 black keys overlaid ── */}
                        {BK_GAP_POSITIONS.map((gapPos, bkIdx) => {
                            const ni = row.blackStart + bkIdx
                            const note = notes[ni]
                            if (!note) return null
                            // Center of gap = right edge of white key [gapPos]
                            // Each white key occupies (100/7)% of 7-key row width
                            // The center between key gapPos and gapPos+1:
                            //   left = (gapPos + 1) * (100/7)%  minus half of black key width
                            return (
                                <div
                                    key={ni}
                                    className="heartopia-black-key-slot"
                                    style={{ left: BK_LEFT_POS[gapPos] }}
                                >
                                    <ComposerNote
                                        data={note}
                                        layer={getLayer(currentColumn, ni, currentLayer, instruments)}
                                        theme={theme}
                                        noteText={keyboard.getNoteText(ni, noteNameType, pitch)}
                                        instrument={keyboard.name}
                                        noteImage={note.noteImage}
                                        clickAction={handleClick}
                                    />
                                </div>
                            )
                        })}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeartopiaKeyboard
