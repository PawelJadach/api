import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 'c421274d-1992-4073-9027-760fcd6d5577',
      name: 'Bert',
      surname: 'Camm',
      email: 'bcamm0@telegraph.co.uk',
      age: 28,
      salary: 13400.99,
    },
    {
      id: '9fd17b42-fc6e-47ed-a37a-046892c8e6be',
      name: 'Drucy',
      surname: 'Neild',
      email: 'dneild1@skype.com',
      age: 22,
      salary: 6695.58,
    },
    {
      id: '381f8ac6-6968-458b-82b5-f8fee9184db1',
      name: 'Jyoti',
      surname: 'Fancourt',
      email: 'jfancourt2@meetup.com',
      age: 20,
      salary: 13882.73,
    },
    {
      id: 'ac73fcca-645e-415a-afd4-b82b9b5f8cc3',
      name: 'Raychel',
      surname: 'Gregh',
      email: 'rgregh3@wisc.edu',
      age: 40,
      salary: 11476.85,
    },
    {
      id: 'feb047e5-d88c-41f1-977c-328716ee3ea7',
      name: 'Koren',
      surname: 'Eidler',
      email: 'keidler4@google.com.au',
      age: 38,
      salary: 5936.49,
    },
    {
      id: '5233b2e4-bb7d-4d91-ae2b-132fca63832a',
      name: 'Yves',
      surname: 'Barrett',
      email: 'ybarrett5@blogtalkradio.com',
      age: 27,
      salary: 6085.9,
    },
    {
      id: '058d9d90-feda-44de-b48e-b544d7c2984b',
      name: 'Yelena',
      surname: 'Assandri',
      email: 'yassandri6@boston.com',
      age: 26,
      salary: 14561.79,
    },
    {
      id: '9b4e26c0-9542-4ea7-b830-5c5813b496f9',
      name: 'Giff',
      surname: 'Heball',
      email: 'gheball7@liveinternet.ru',
      age: 29,
      salary: 8472.76,
    },
    {
      id: '3252c6b2-4045-4592-b48f-aeadd189b472',
      name: 'Michael',
      surname: 'Ogbourne',
      email: 'mogbourne8@t-online.de',
      age: 20,
      salary: 5257.43,
    },
    {
      id: '6400ae1a-36f6-43a7-894b-3ec71889f088',
      name: 'Kathlin',
      surname: 'Gamage',
      email: 'kgamage9@is.gd',
      age: 33,
      salary: 7429.14,
    },
    {
      id: '75e600e2-2129-4d32-bd0c-c15833f087f0',
      name: 'Fairleigh',
      surname: 'Yurasov',
      email: 'fyurasova@is.gd',
      age: 28,
      salary: 13963.35,
    },
    {
      id: '595022fa-fba2-4d55-b470-b4078cee1d10',
      name: 'Niccolo',
      surname: 'Lukesch',
      email: 'nlukeschb@so-net.ne.jp',
      age: 26,
      salary: 14772.13,
    },
    {
      id: '8d3236e5-beae-4271-ba9d-0fbf497ed8a2',
      name: 'Abigale',
      surname: 'Chree',
      email: 'achreec@naver.com',
      age: 20,
      salary: 8686.27,
    },
    {
      id: '5f7d28df-d5e9-47ce-a949-aaf7fecba18d',
      name: 'Stefano',
      surname: 'Dagg',
      email: 'sdaggd@slashdot.org',
      age: 32,
      salary: 8134.91,
    },
    {
      id: '4cb15ad0-7087-4783-8266-88c6e016a469',
      name: 'Jeni',
      surname: 'Benini',
      email: 'jbeninie@com.com',
      age: 22,
      salary: 6719.48,
    },
    {
      id: '599178c0-6188-4000-9512-f2ded1e25572',
      name: 'Juan',
      surname: 'Benyon',
      email: 'jbenyonf@dailymotion.com',
      age: 35,
      salary: 9667.45,
    },
    {
      id: '815d66c0-15c7-4967-9995-3915f87bf7fe',
      name: 'Evin',
      surname: 'Siward',
      email: 'esiwardg@bravesites.com',
      age: 20,
      salary: 13360.32,
    },
    {
      id: 'cc7e3687-e299-4369-8f5a-367ece5cca33',
      name: 'Adena',
      surname: 'Kadwallider',
      email: 'akadwalliderh@weebly.com',
      age: 21,
      salary: 9080.37,
    },
    {
      id: 'e07cd601-9929-4c6b-86f1-8156a5016021',
      name: 'Rodge',
      surname: 'Armin',
      email: 'rarmini@networksolutions.com',
      age: 34,
      salary: 11873.13,
    },
    {
      id: '67a5875b-e53e-4e85-bc54-60febaafab3b',
      name: 'Maddi',
      surname: 'Berge',
      email: 'mbergej@ow.ly',
      age: 24,
      salary: 9715.75,
    },
    {
      id: '8f0ace44-2a45-4556-bb98-b12d5fabe910',
      name: 'Boote',
      surname: 'Habron',
      email: 'bhabronk@cnn.com',
      age: 38,
      salary: 7834.85,
    },
    {
      id: 'ea465d85-b243-466f-9dc5-4b0ef55f79c7',
      name: 'Stacia',
      surname: 'Offell',
      email: 'soffelll@cargocollective.com',
      age: 23,
      salary: 14203.46,
    },
    {
      id: 'a9a3df65-2bed-48d8-9237-083aecc1e7f8',
      name: 'Nat',
      surname: 'Matyas',
      email: 'nmatyasm@domainmarket.com',
      age: 24,
      salary: 13469.52,
    },
    {
      id: '2839630b-3c67-4772-9a25-915d5eee07b0',
      name: 'Freida',
      surname: 'Nutton',
      email: 'fnuttonn@comcast.net',
      age: 36,
      salary: 14176.35,
    },
    {
      id: '5cb4b56a-3a5f-41b6-973b-5604086851d0',
      name: 'Paul',
      surname: 'Humberston',
      email: 'phumberstono@ft.com',
      age: 37,
      salary: 14681.39,
    },
    {
      id: '25888899-23b4-42f3-9d4f-62d7443544d5',
      name: 'Matthias',
      surname: 'Wickersley',
      email: 'mwickersleyp@dmoz.org',
      age: 29,
      salary: 7860.19,
    },
    {
      id: 'a5ab8010-6b50-49a7-a291-25385f678439',
      name: 'Leland',
      surname: 'Burlay',
      email: 'lburlayq@mac.com',
      age: 22,
      salary: 5143.98,
    },
    {
      id: '4ec7749c-3559-40d1-a56a-e4ff8c105b98',
      name: 'Shurlocke',
      surname: 'Witchalls',
      email: 'switchallsr@odnoklassniki.ru',
      age: 30,
      salary: 11505.75,
    },
    {
      id: '00793928-633a-490b-aa3b-9f0ac878efe2',
      name: 'Nonie',
      surname: 'Rollin',
      email: 'nrollins@java.com',
      age: 29,
      salary: 8730.84,
    },
    {
      id: 'bfb70920-1b89-46d2-93c8-d5e3de00cdca',
      name: 'Tyler',
      surname: 'Brewett',
      email: 'tbrewettt@facebook.com',
      age: 36,
      salary: 14298.53,
    },
  ];

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: uuidv4(),
      ...createUserDto,
    };

    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user: User) => user.id === id);
  }

  remove(id: string) {
    this.users.filter((user: User) => user.id !== id);
  }
}
