```
pnpm i
node effector.mjs
node effector-logger.mjs
```

There are two files with one difference:

```
$ diff effector.mjs effector-logger.mjs
6c6
< } from "effector";
---
> } from "effector-logger";
```

With effector everything is OK:

```
$ node effector.mjs
[store] $counter 0
[effect] fx undefined
[event] inc undefined
[store] $counter 1
[effect] fx.done { params: undefined, result: undefined }
[event] dec { params: undefined, result: undefined }
[store] $counter 0
```

With effector-logger counter goes down to -1:

```
$ node effector-logger.mjs
☄️  effector  $counter  ->   0     $counter
[store] @effector-logger/$counter 0
☄️  effector  fx  undefined     fx
[effect] @effector-logger/fx undefined
☄️  effector  fx  done ✅  (undefined)  ->   undefined     fx
[effect] @effector-logger/fx.done { params: undefined, result: undefined }
☄️  effector  dec  { params: undefined, result: undefined }     dec
[event] @effector-logger/dec { params: undefined, result: undefined }
[store] @effector-logger/$counter -1
☄️  effector  $counter  ->   -1     $counter
☄️  effector  inc  undefined     inc
[event] @effector-logger/inc undefined
[store] @effector-logger/$counter 0
☄️  effector  $counter  ->   0     $counter
☄️  effector  new  Initialized  events(2)  effects(1)  stores(1)
  ☄️  effector  new  $counter  ->   0     $counter
  ☄️  effector  new  inc     inc
  ☄️  effector  new  dec     dec
  ☄️  effector  new  fx     fx
```
