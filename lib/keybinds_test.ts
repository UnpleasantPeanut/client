import { assertEquals } from "https://deno.land/std@0.145.0/testing/asserts.ts";
import Keybinds from "./keybinds.ts";

Deno.test('should be able to initiate a keybind', () => {
    const keybinds = new Keybinds();
    assertEquals(keybinds.toArray(), [
        ['advance', false],
        ['left', false],
        ['right', false],
        ['back', false]
    ]);
});