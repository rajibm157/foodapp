import Images from './images';

const Constants = {
  onboarding: {
    body: [
      {
        image: Images.onboardingFirst,
        title: 'Order from your favourite\nstores or vendors',
      },
      {
        image: Images.onboardingSecond,
        title: 'Choose from a wide range of\ndelicious meals',
      },
      {
        image: Images.onboardingThird,
        title: 'Enjoy instant delivery\nand payment',
      },
    ],
    button: 'Create an account',
    link: 'login',
  },
  login: {
    title: 'Login to your account',
    description: `Good to see you again, enter your details${'\n'}below to continue ordering.`,
    button: 'Login',
    link: 'Forgot your password?',
  },
  sidebar: {
    profile: 'My profile',
    payment: 'Payment method',
    settings: 'Settings',
    help: 'Help',
    policy: 'Privacy policy',
    button: 'Log Out',
  },
};

export default Constants;
