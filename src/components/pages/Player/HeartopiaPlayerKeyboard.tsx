import {memo} from 'react'
import Note from './PlayerNote'
import type {ObservableNote} from '$lib/audio/Instrument'
import type {ApproachingNote} from '$lib/Songs/SongClasses'
import type {NoteNameType, Pitch} from '$config'
import {Instrument} from '$lib/audio/Instrument'

/**
 * Heartopia piano keyboard — Player version
 * Same layout as Composer: HIGH / MID / LOW rows, black keys overlaid
 */

const BK_GAP_POSITIONS = [0, 1, 3, 4, 5] as const
const BK_LEFT_POS: Record<number, string> = {
    0: "calc(1 * (var(--htp-wk) + var(--htp-gap)) - var(--htp-gap) / 2 - var(--htp-bk) / 2)",
    1: "calc(2 * (var(--htp-wk) + var(--htp-gap)) - var(--htp-gap) / 2 - var(--htp-bk) / 2)",
    3: "calc(4 * (var(--htp-wk) + var(--htp-gap)) - var(--htp-gap) / 2 - var(--htp-bk) / 2)",
    4: "calc(5 * (var(--htp-wk) + var(--htp-gap)) - var(--htp-gap) / 2 - var(--htp-bk) / 2)",
    5: "calc(6 * (var(--htp-wk) + var(--htp-gap)) - var(--htp-gap) / 2 - var(--htp-bk) / 2)",
}

const ROWS = [
    {whiteStart: 14, blackStart: 32, hasHighDO: true,  label: 'high'},
    {whiteStart: 7,  blackStart: 27, hasHighDO: false, label: 'mid'},
    {whiteStart: 0,  blackStart: 22, hasHighDO: false, label: 'low'},
] as const

interface Props {
    keyboard: ObservableNote[]
    instrument: Instrument
    noteNameType: NoteNameType
    pitch: Pitch
    approachingNotes: ApproachingNote[][]
    approachRate: number
    hideNotes: boolean
    handleClick: (note: ObservableNote) => void
}

function HeartopiaPlayerKeyboard({
    keyboard, instrument, noteNameType, pitch,
    approachingNotes, approachRate, hideNotes, handleClick
}: Props) {
    if (!keyboard.length) return <div className="loading">Loading...</div>

    return (
        <div className="heartopia-keyboard">
            {ROWS.map((row) => (
                <div key={row.label} className="heartopia-row">
                    <div className="heartopia-row-inner">

                        {/* ── 7 white keys ── */}
                        {Array.from({length: 7}, (_, i) => {
                            const ni = row.whiteStart + i
                            const note = keyboard[ni]
                            if (!note) return null
                            return (
                                <div key={ni} className="heartopia-white-key-slot">
                                    <Note
                                        note={note}
                                        data={{approachRate, instrument: instrument.name}}
                                        approachingNotes={approachingNotes[ni] ?? []}
                                        noteText={instrument.getNoteText(ni, noteNameType, pitch)}
                                        hideNote={hideNotes}
                                        handleClick={handleClick}
                                    />
                                </div>
                            )
                        })}

                        {/* ── High DO (index 21) — HIGH row only ── */}
                        {row.hasHighDO && (() => {
                            const note = keyboard[21]
                            if (!note) return null
                            return (
                                <div key={21} className="heartopia-white-key-slot heartopia-high-do">
                                    <Note
                                        note={note}
                                        data={{approachRate, instrument: instrument.name}}
                                        approachingNotes={approachingNotes[21] ?? []}
                                        noteText={instrument.getNoteText(21, noteNameType, pitch)}
                                        hideNote={hideNotes}
                                        handleClick={handleClick}
                                    />
                                </div>
                            )
                        })()}

                        {/* ── 5 black keys overlaid ── */}
                        {BK_GAP_POSITIONS.map((gapPos, bkIdx) => {
                            const ni = row.blackStart + bkIdx
                            const note = keyboard[ni]
                            if (!note) return null
                            return (
                                <div
                                    key={ni}
                                    className="heartopia-black-key-slot"
                                    style={{ left: BK_LEFT_POS[gapPos] }}
                                >
                                    <Note
                                        note={note}
                                        data={{approachRate, instrument: instrument.name}}
                                        approachingNotes={approachingNotes[ni] ?? []}
                                        noteText={instrument.getNoteText(ni, noteNameType, pitch)}
                                        hideNote={hideNotes}
                                        handleClick={handleClick}
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

export default memo(HeartopiaPlayerKeyboard)
