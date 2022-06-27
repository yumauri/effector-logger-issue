import {
  sample,
  createStore,
  createEvent,
  createEffect,
} from "effector";
import { debug } from "patronum/debug";

const inc = createEvent({ name: "inc" });
const dec = createEvent({ name: "dec" });
const $counter = createStore(0, { name: "$counter" })
  .on(inc, (x) => x + 1)
  .on(dec, (x) => x - 1);

const fx = createEffect({ handler: () => undefined, name: "fx" });

sample({ clock: fx, target: inc });
sample({ clock: fx.done, target: dec });

debug(inc, dec, $counter, fx);

fx();
