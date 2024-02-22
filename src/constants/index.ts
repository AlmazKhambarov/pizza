import {
    account, AccountWhite,
    cart, CartWhite,
    discount,
    graph,
    home, HomeWhite,
    item1,
    item2,
    item3,
    item4,
    menu, MenuWhite,
    message,
    notification
} from "../assets";

const buttonImgArr = [
    {img: menu, name:'home', whiteImg: MenuWhite},
    {img: home, name:'home', whiteImg: HomeWhite},
    {img: graph, name:'graph'},
    {img: message, name:'message'},
    {img: discount, name:'discount'},
    {img: notification, name:'notification'},
    {img: cart, name:'cart', whiteImg: CartWhite},
    {img: account, name:'account', whiteImg: AccountWhite},
]

const imgs = [item1, item2, item3, item4, item1, item2, item3, item4, item1, item2, item3, item4, item1]

const selectOptions = ['A-Z', 'Z-A', 'Price', 'Default']

export {buttonImgArr, imgs, selectOptions}