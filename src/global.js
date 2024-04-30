import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--paragraph: Poppins;
--heading-01: Merienda;

/* font sizes */
--font-size-base: 16px;
--heading-06-size: 20px;
--paragraph-size: 18px;
--font-size-23xl-5: 42.5px;
--font-size-15xl: 34px;
--font-size-6xl: 25px;
--special-text-01-size: 40px;
--font-size-13xl: 32px;
--heading-05-size: 24px;
--bt-01-size: 22px;
--font-size-lgi: 19px;
--heading-04-size: 30px;
--font-size-2xl: 21px;
--font-size-mid: 17px;
--heading-01-size: 65px;
--font-size-33xl: 52px;
--font-size-20xl: 39px;
--font-size-9xl-3: 28.3px;
--font-size-4xl: 23px;
--heading-02-size: 50px;

/* Colors */
--color-white: #fff;
--color-gainsboro: #dedede;
--paragraph-1: #676767;
--paragraph1: #525252;
--primary-c: #396c03;
--color-darkgreen-100: rgba(57, 108, 3, 0.05);
--color-darkorange-100: #ff8b00;
--color-darkorange-200: rgba(255, 139, 0, 0.05);
--color-darkorange-300: rgba(255, 139, 0, 0.1);
--color-gray-100: #838383;
--color-gray-200: rgba(255, 255, 255, 0.3);
--color-gray-300: rgba(0, 0, 0, 0.3);
--color-black: #000;
--color-olivedrab-100: #6b9142;
--color-olivedrab-200: #5e9129;
--color-olivedrab-300: rgba(94, 145, 41, 0.09);
--balck-basic: #3f3f3f;
--color-whitesmoke: #ededed;
--disable: #c7c7c7;
--color-lightgreen: rgba(167, 217, 126, 0.1);
--color-darkolivegreen: #224300;

/* Gaps */
--gap-55xl: 74px;
--gap-18xl: 37px;
--gap-lg: 18px;
--gap-xl: 20px;
--gap-10xs: 3px;
--gap-16xl: 35px;
--gap-4xs: 9px;
--gap-4xs-5: 8.5px;
--gap-mid: 17px;
--gap-3xs: 10px;
--gap-11xl: 30px;
--gap-xl-9: 20.9px;
--gap-xs: 12px;
--gap-17xl: 36px;
--gap-28xl: 47px;
--gap-4xl: 23px;
--gap-10xl: 29px;
--gap-13xl: 32px;
--gap-base: 16px;
--gap-mid-5: 17.5px;
--gap-mini: 15px;
--gap-30xl: 49px;
--gap-5xl: 24px;
--gap-8xl: 27px;
--gap-6xl: 25px;
--gap-3xl: 22px;
--gap-33xl: 52px;
--gap-7xl: 26px;
--gap-smi: 13px;
--gap-36xl: 55px;
--gap-5xs-6: 7.6px;
--gap-10xs-7: 2.7px;
--gap-31xl: 50px;
--gap-8xs: 5px;
--gap-lgi: 19px;
--gap-74xl: 93px;
--gap-27xl: 46px;
--gap-9xl-6: 28.6px;
--gap-78xl: 97px;
--gap-29xl: 48px;
--gap-6xs: 7px;
--gap-sm: 14px;
--gap-43xl: 62px;
--gap-12xl: 31px;

/* Paddings */
--padding-xl: 20px;
--padding-7xs: 6px;
--padding-35xl: 54px;
--padding-6xs: 7px;
--padding-11xs-6: 1.6px;
--padding-22xl: 41px;
--padding-94xl: 113px;
--padding-37xl: 56px;
--padding-82xl: 101px;
--padding-8xl: 27px;
--padding-17xl: 36px;
--padding-31xl: 50px;
--padding-47xl: 66px;
--padding-12xs: 1px;
--padding-2xl: 21px;
--padding-78xl: 97px;
--padding-44xl: 63px;
--padding-xs: 12px;
--padding-11xl: 30px;
--padding-5xl: 24px;
--padding-3xs: 10px;
--padding-73xl: 92px;
--padding-41xl: 60px;
--padding-10xs: 3px;
--padding-21xl: 40px;
--padding-20xl: 39px;
--padding-smi: 13px;
--padding-40xl: 59px;
--padding-mini: 15px;
--padding-129xl: 148px;
--padding-sm-5: 13.5px;
--padding-3xl: 22px;
--padding-667xl: 686px;
--padding-271xl: 290px;
--padding-427xl: 446px;
--padding-12xl: 31px;
--padding-18xl: 37px;
--padding-9xs: 4px;
--padding-28xl: 47px;
--padding-19xl: 38px;
--padding-6xl: 25px;
--padding-119xl: 138px;
--padding-75xl: 94px;
--padding-71xl: 90px;
--padding-lg: 18px;
--padding-2xs: 11px;
--padding-93xl: 112px;
--padding-49xl: 68px;
--padding-15xl: 34px;
--padding-54xl: 73px;
--padding-9xl: 28px;
--padding-12xs-4: 0.4px;
--padding-12xs-8: 0.8px;
--padding-4xs: 9px;
--padding-5xs-1: 7.1px;
--padding-3xs-2: 9.2px;
--padding-13xl: 32px;
--padding-11xs: 2px;
--padding-10xs-5: 2.5px;
--padding-74xl: 93px;
--padding-7xl: 26px;
--padding-85xl: 104px;
--padding-33xl: 52px;
--padding-86xl: 105px;
--padding-25xl: 44px;
--padding-4xl: 23px;
--padding-101xl: 120px;
--padding-27xl: 46px;
--padding-676xl: 695px;
--padding-8xs: 5px;
--padding-172xl: 191px;
--padding-275xl: 294px;
--padding-433xl: 452px;
--padding-23xl: 42px;
--padding-mid: 17px;
--padding-38xl-3: 57.3px;
--padding-76xl: 95px;
--padding-77xl: 96px;
--padding-43xl: 62px;
--padding-46xl: 65px;
--padding-base: 16px;
--padding-5xs: 8px;

/* Border radiuses */
--br-3xs: 10px;
--br-205xl-4: 224.4px;
--br-mini: 15px;
--br-31xl: 50px;
--br-4xs-9: 8.9px;
--br-81xl: 100px;
--br-101xl: 120px;
--br-9xl-7: 28.7px;
--br-206xl: 225px;

}
`;
}
