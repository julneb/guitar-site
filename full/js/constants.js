var SCALE_SEMITONES_NUMBER = 12;
var MAX_HALF_STEP = 11;
var MIN_HALF_STEP = -11;
var MAX_STRINGS_NUMBER = 12;
var MIN_STRINGS_NUMBER = 3;
var MAX_ITEMS_NUMBER = 5;
var ITEMS_ID_BASE = "menuItem";
var FRETS_NUMBER = 24;
var DEFAULT_METR_BEATS = 4;
var DEFAULT_METR_BEAT_VAL = 4;
var DEFAULT_METR_VOLUME = 50;
var DEFAULT_METR_TEMPO = 120;
var MIN_BEATS = 1;
var MAX_BEATS = 16;
var MIN_BEAT_VAL = 1;
var MAX_BEAT_VAL = 32;
var MIN_TEMPO = 40;
var MAX_TEMPO = 320;
var DEFAULT_SCALE_OPTIONS_EXPIRE_DAYS = 30;
var DEFAULT_NOTES_SHOW_PATTERN = [true, true, true, true, true, true, true, true, true, true, true, true];
var DEFAULT_TRIADS_SHOW_PATTERN = [true, false, true, false, true, false, false, false, false, false, false, false];
var SECOND_CLICK_FREQ = 880;
var FIRST_CLICK_FREQ = 1480;

var NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var DEFAULT_SCALE_SEMITONES = [2, 2, 1, 2, 2, 2, 1];
var DEFAULT_STRING_TUNES = ["E", "B", "G", "D", "A", "E", "B", "F#", "C#", "G#", "D#", "A#"];
var DEFAULT_SCALE_NOTES = ["C", "D", "E", "F", "G", "A", "B"];
var SCALES = {
    "major": [2, 2, 1, 2, 2, 2, 1],
    "aeolian": [2, 2, 1, 2, 2, 2, 1],
    "minor": [2, 1, 2, 2, 1, 2, 2],
    "ionian": [2, 1, 2, 2, 1, 2, 2],
    "harmonic_min": [2, 1, 2, 2, 1, 3, 1],
    "chromatic": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "dorian": [2, 1, 2, 2, 2, 1, 2],
    "phrygian": [1, 2, 2, 2, 1, 2, 2],
    "lydian": [2, 2, 2, 1, 2, 2, 1],
    "myxolydian": [2, 2, 1, 2, 2, 1, 2],
    "locrian": [1, 2, 2, 1, 2, 2, 2],
    "melodic_min": [2, 1, 2, 2, 2, 2, 1],
    "alt_dom": [1, 2, 1, 2, 2, 2, 2],
    "sup_locrian": [1, 2, 1, 2, 2, 2, 2],
    "dim_whole_tone": [1, 2, 1, 2, 2, 2, 2],
    "alt_scale": [1, 2, 1, 2, 2, 2, 2],
    "blues_min_hex": [3, 2, 1, 1, 3, 2],
    "blues_pent": [3, 2, 1, 4, 2],
    "blues": [3, 2, 1, 1, 3, 1, 1],
    "major_pent": [2, 2, 3, 2, 3],
    "suspended_pent": [2, 3, 2, 3, 2],
    "dorian_pent": [2, 3, 2, 3, 2],
    "phrygian_pent": [3, 2, 3, 2, 2],
    "myxolydian_pent": [2, 3, 2, 2, 3],
    "aeolian_pent": [3, 2, 2, 3, 2],
    "minor_pent": [3, 2, 2, 3, 2],
    "major_beb": [2, 2, 1, 2, 1, 1, 2, 1],
    "minor_beb": [2, 1, 1, 1, 2, 2, 1, 2],
    "dom_beb": [2, 2, 1, 2, 2, 1, 1, 1],
    "dorian_beb": [2, 1, 1, 1, 2, 2, 1, 2],
    "whole_tone": [2, 2, 2, 2, 2, 2],
    "whole_half_tone": [2, 1, 2, 1, 2, 1, 2, 1],
    "half_whole_tone": [1, 2, 1, 2, 1, 2, 1, 2],
    "dim": [2, 1, 2, 1, 2, 1, 2, 1],
    "dom_dim": [1, 2, 1, 2, 1, 2, 1, 2],
    "symm_dim": [1, 2, 1, 2, 1, 2, 1, 2],
    "spanish": [1, 2, 2, 2, 1, 2, 2],
    "acoustic": [2, 2, 2, 1, 2, 1, 2],
    "bartok": [2, 2, 2, 1, 2, 1, 2]
}
var TUNINGS = {
    "standart_e": ["E", "B", "G", "D", "A", "E", "B", "F#", "C#", "G#", "D#", "A#"],
    "standart_e_bass": ["G", "D", "A", "E", "B"],
    "standart_e_bass_6": ["C", "G", "D", "A", "E", "B"],
    "drop_d_6": ["E", "B", "G", "D", "A", "D", "B", "F#", "C#", "G#", "D#", "A#"],
    "drop_a_7": ["E", "B", "G", "D", "A", "E", "A", "F#", "C#", "G#", "D#", "A#"],
    "drop_e_8": ["E", "B", "G", "D", "A", "E", "B", "E", "C#", "G#", "D#", "A#"]
}
var CUSTOM_TUNING_VALUE = "custom";

var ITEM_CLASS = "item_block";
var STRING_NUMBER_CLASS = "strings_number";
var SCALE_SELECT_CLASS = "scale_select";
var NECK_BLOCK_CLASS = "neck_block";
var FRETBOARD_CLASS = "fretboard";
var HOR_FRET_CLASS = "fret_hor";
var NULL_VER_FRET_CLASS = "fret_null";
var VER_FRET_CLASS = "fret_ver";
var VER_FRET_INNER_CLASS = "fret_ver_inner";
var FRET_HOVER_CLASS = "fret_ver_hover";
var FRET_HOVER_ACTIVE_CENTER_CLASS = "fret_ver_hover_active_center";
var FRET_HOVER_ACTIVE_START_CLASS = "fret_ver_hover_active_start";
var FRET_HOVER_ACTIVE_END_CLASS = "fret_ver_hover_active_end";
var NOTE_CLASS = "note";
var NORMAL_NOTE_CLASS = "normal_note";
var HIGHLIGHTED_NOTE_CLASS = "highlighted_note";
var TRANSPARENT_NOTE_CLASS = "transparent_note";
var HIDDEN_NOTE_CLASS = "hidden_note";
var STRINGS_OPTIONS_BLOCK_CLASS = "strings_options_block";
var STRING_TUNE_BLOCK_CLASS = "string_tune";
var STRING_TUNE_SELECT_CLASS = "string_tune_select";
var LEFT_ARROW_CLASS = "left_arrow";
var RIGHT_ARROW_CLASS = "right_arrow";
var TUNING_OPTIONS_CLASS = "tuning_options";
var HALF_STEP_BLOCK_CLASS = "half_step_block";
var HALF_STEP_SELECT_CLASS = "half_step_select";
var TUNING_SELECT_CLASS = "tuning_select";
var ROOT_NOTE_CLASS = "root_note";
var SELECTED_TEXT_CLASS = "selected_text";
var SCALE_NOTES_BLOCK_CLASS = "scale_notes_and_semitones_block";
var SCALE_NOTES_CLASS = "scale_notes";
var SCALE_NOTE_CLASS = "scale_note";
var SCALE_NOTE_TEXT_CLASS = "scale_note_text";
var ADD_STRING_BTN_CLASS = "add_string";
var DEL_STRING_BTN_CLASS = "delete_string";
var CLOSE_BTN_CLASS = "close_btn";
var SET_DEFAULT_BTN_CLASS = "set_default_btn";
var TRIADS_CHECKBOX_CLASS = "triads_checkbox";
var TRIADS_CHECKBOX_EMPTY_CLASS = "triads_checkbox_empty";
var LH_TOGGLE_BLOCK_CLASS = "lh_toggle_block";
var TOGGLE_CHECKBOX_CLASS = "toggle_checkbox";
var LH_TOGGLE_CLASS = "lh_toggle";
var RH_TOGGLE_CLASS = "rh_toggle";
var TOGGLE_SLIDER_CLASS = "toggle_checkbox_slider";
var SLIDER_LH_CLASS = "slider_lh";
var SLIDER_RH_CLASS = "slider_rh";
var LH_CLASS = "lh";

var METRONOME_DISABLED_ID = "metronome_disabled_block";
var ADD_NEW_ITEM_BTN_ID = "add_new_item_btn";
var METR_PLAY_BTN_ID = "metronome_play_btn";
var METR_STOP_BTN_ID = "metronome_stop_btn";
var METR_VOLUME_RANGE_ID = "metronome_volume_range";
var METR_TEMPO_RANGE_ID = "metronome_tempo_range";
var METR_TEMPO_INPUT_ID = "metronome_tempo_input";
var METR_TEMPO_LEFT_ARROW_ID = "metronome_tempo_left_arrow";
var METR_TEMPO_RIGHT_ARROW_ID = "metronome_tempo_right_arrow";
var METR_BEATS_SELECT_ID = "metronome_beats_select";
var METR_BEATS_LEFT_ARROW_ID = "metronome_beats_left_arrow";
var METR_BEATS_RIGHT_ARROW_ID = "metronome_beats_right_arrow";
var METR_BEAT_VAL_SELECT_ID = "metronome_beat_val_select";
var METR_BEAT_VAL_LEFT_ARROW_ID = "metronome_beat_val_left_arrow";
var METR_BEAT_VAL_RIGHT_ARROW_ID = "metronome_beat_val_right_arrow";
var METR_BEAT_VIS_BLOCK_ID = "metronome_beat_vis_block";
var METR_BEAT_VIS_NUMBER_ID = "metronome_beat_number_vis";

var WRONG_SEMITONE_NUMBER_MSG = "Wrong sum of semitones, must be equal to " + SCALE_SEMITONES_NUMBER;
var WRONG_ROOT_NOTE_MSG = "Wrong root note";
var WRONG_NOTE_MSG = "Wrong note";
var WRONG_SCALE_NAME_MSG = "Wrong scale name (value)";
var WRONG_STRING_TUNE_NOTE_MSG = "Wrong string tune note";
var WRONG_TUNING_NAME = "Wrong tuning name (value)";
var PARAMS_ATOB_ERROR_MSG = "GET parameter cannot be decoded";

var SCALE_NOTES_TMPL = doT.template($("#scale_notes_tmpl").html());
var STRING_VER_FRET_TMPL = doT.template($("#string_ver_fret_tmpl").html());
var STRING_FRET_TMPL = doT.template($("#string_hor_fret_tmpl").html());
var STRING_FRET_MARK_TMPL = doT.template($("#fretboard_single_mark").html());
var STRING_DOUBLE_FRET_MARK_TMPL = doT.template($("#fretboard_double_mark").html());
var FRET_DOT_TMPL = doT.template($("#fret_dot_tmpl").html());
var FRET_DOUBLE_DOT_TMPL = doT.template($("#fret_double_dot_tmpl").html());
var STRING_TUNE_BLOCK_TMPL = doT.template($("#string_tune_block_tmpl").html());
var SCALES_ITEM_BLOCK_TMPL = doT.template($("#scales_item_tmpl").html());
