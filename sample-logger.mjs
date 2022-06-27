import {
  sample,
  createStore,
  createEvent,
} from "effector-logger";
import { debug } from "patronum/debug";

const passingBy = createEvent({ name: "passingBy" });
const goAhead = createEvent({ name: "goAhead" });
const $gate = createStore(true, { name: "$gate" })
  .on(passingBy, () => false)
  .on(goAhead, () => true);

sample({
  clock: passingBy,
  target: goAhead
});

debug(passingBy, goAhead, $gate);

passingBy();
