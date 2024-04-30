import favourite from '/ProjectImages/favourite.png'
import profile from '/ProjectImages/profile.png'
import {LogoutOutlined} from '@ant-design/icons';

export const textMenuElements = [
    {
      title: "О нас",
      linkValue: "/about"
    },
    {
      title: "Каталог",
      linkValue: "/catalog"
    },
    {
      title: "Подписка",
      linkValue: "/subscription"
    }
  ];

export const iconsMenuElements = [
    {
        photo: favourite,
        linkValue: "/favourite"
    },
    {
        photo: profile,
        linkValue: "/profile",
    }
];
