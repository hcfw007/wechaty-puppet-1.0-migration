# wechaty-puppet-1.0-migration

***Note: This project is deprecated since we he have moved to wechaty 1.0 completly.***

A temporary solution when moving to wechaty 1.x

## how to use

### install

```bash
npm install wechaty-puppet-1.0-migration wechaty-puppet file-box
```

Note: You need to insall wechaty-puppet and file-box yourself. So that you can choose your ideal version of these dependencies. It supports wechaty-puppet@1.10.x so far.

### usage

import everything from wechaty-puppet-1.0-migration just as you did before from wechaty-puppet

e.g.

old:

```ts
import {
  ContactPayload,
  ContactType,

  FileBox,
  FriendshipPayload,

  ImageType,
  MessagePayload,

  Puppet,
  PuppetOptions,
} from 'wechaty-puppet
```

now:
```ts
import {
  ContactPayload,
  ContactType,

  FileBox,
  FriendshipPayload,

  ImageType,
  MessagePayload,

  Puppet,
  PuppetOptions,
} from 'wechaty-puppet-1.0-migration'
```

You still need to rewrite to fit new puppet api such as: ```onStart()``` instead of ```start()```.

### note

Only use this as a temporary solution and move to wechaty-puppet 1.0 asap.
