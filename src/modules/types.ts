import { 
  ContactGender,
  Contact,
  FriendshipScene,
  Friendship,
  Image,
  Message,
  Payload,
  Post,
  Tap,
  Sayable,
  Tag,
  TagEvent,
  TagGroupEvent,
} from '@juzi/wechaty-puppet/types'

export {
  ContactGender,
  Contact as ContactType,
  FriendshipScene as FriendshipSceneType,
  Friendship as FriendshipType,
  Image as ImageType,
  Message as MessageType,
  Post as PostType,
  Tap as TapType,
  Sayable as sayableTypes,
  Payload as DirtyType,
  Payload as PayloadType,
  Tag as TagType,
  TagEvent as TagEventType,
  TagGroupEvent as TagGroupEventType,
}

export {
  ScanStatus,
  YOU,
  CHAT_EVENT_DICT,
  PUPPET_EVENT_DICT,
} from '@juzi/wechaty-puppet/types'

export type { FriendshipAddOptions, MessageSendTextOptions } from '@juzi/wechaty-puppet/types'
