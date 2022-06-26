enum Action {
    ADVANCE = 'advance',
    LEFT = 'left',
    RIGHT = 'right',
    BACK = 'back'
}

const DEFAULT_KEYBINDS = {
    w: Action.ADVANCE,
    a: Action.LEFT,
    d: Action.RIGHT,
    s: Action.BACK
} as const;

type KeybindsObject = typeof DEFAULT_KEYBINDS;

class Keybinds {
    #keybinds: KeybindsObject;
    #keybindMap: Map<Action, boolean>;
    #cb?: (keybinds: Record<Action, boolean>) => void;

    constructor(
        keybinds?: KeybindsObject
    ){
        this.#keybinds = {
            ...DEFAULT_KEYBINDS,
            ...(keybinds ?? {})
        }
        this.#keybindMap = new Map(Object.values(this.#keybinds).map((value) => [value, false]));
        addEventListener('keydown', (e) => this.keypress(e.key, true));
        addEventListener('keyup', (e) => this.keypress(e.key, false));
    }

    keypress(key: string, up: boolean) {
        if(!(key in this.#keybinds)) {
            return;
        }
        const action = this.#keybinds[key as keyof typeof DEFAULT_KEYBINDS];

        if(this.#keybindMap.get(action) === up) {
            // repeating action, nothing to do
            return;
        }

        this.#keybindMap.set(action, up);

        if(this.#cb) {
            const keybinds = Object.fromEntries(Array.from(this.#keybindMap)) as Record<Action, boolean>;
            this.#cb(keybinds);
        }
    }

    onChange(cb: (keybinds: Record<Action, boolean>) => void) {
        this.#cb = cb;
    }

    toArray() {
        return Array.from(this.#keybindMap);
    }
}

export default Keybinds;
