import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons-react';
import {BiMessageSquareAdd} from 'react-icons/bi'
import {FcUpload} from 'react-icons/fc'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/admin',
  },
  {
    navlabel: true,
    subheader: 'Utilities',
  },
  {
    id: uniqueId(),
    title: 'Add Product',
    icon: BiMessageSquareAdd,
    href: '/admin/add',
  },
  {
    id: uniqueId(),
    title: 'View Product',
    icon: IconCopy,
    href: '/admin/allProducts',
  },
  {
    id: uniqueId(),
    title: 'Image Uploader',
    icon: FcUpload,
    href: '/admin/imageUploader',
  },
  {
    id: uniqueId(),
    title: 'Orders',
    icon: AiOutlineShoppingCart,
    href: '/admin/allOrder',
  },
];

export default Menuitems;
