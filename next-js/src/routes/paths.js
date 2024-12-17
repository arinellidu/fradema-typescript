export const paths = {
  /**
   * Marketing
   */
  marketing: {
    root: '/marketing',
    services: '/',
    caseStudies: '/marketing/case-studies',
    caseStudy: (id) => `/marketing/case-studies/${id}`,
    posts: '/marketing/posts',
    post: '/marketing/posts/details',
    about: '/marketing/about',
    contact: '/marketing/contact',
  },
  /**
   * filiais
   */
  filiais: {
    root: '/filiais',
    tours: '/filiais/tours',
    tour: '/filiais/tours/details',
    checkout: '/filiais/checkout',
    orderCompleted: '/filiais/order-completed',
    posts: '/filiais/posts',
    post: '/filiais/posts/details',
    about: '/filiais/about',
    contact: '/filiais/contact',
  },
  /**
   * Career
   */
  career: {
    root: '/career',
    jobs: '/career/jobs',
    job: '/career/jobs/details',
    posts: '/career/posts',
    post: '/career/posts/details',
    about: '/career/about',
    contact: '/career/contact',
  },
  /**
   * E-learning
   */
  eLearning: {
    root: '/e-learning',
    courses: '/e-learning/courses',
    course: '/e-learning/courses/details',
    posts: '/e-learning/posts',
    post: '/e-learning/posts/details',
    about: '/e-learning/about',
    contact: '/e-learning/contact',
  },
  /**
   * E-commerce
   */
  eCommerce: {
    root: '/e-commerce',
    products: '/e-commerce/products',
    product: '/e-commerce/products/details',
    cart: '/e-commerce/cart',
    checkout: '/e-commerce/checkout',
    orderCompleted: '/e-commerce/order-completed',
    wishlist: '/e-commerce/wishlist',
    compare: '/e-commerce/compare',
  },
  /**
   * Account
   */
  account: {
    root: '/account',
    personal: '/account/personal',
    wishlist: '/account/wishlist',
    vouchers: '/account/vouchers',
    orders: '/account/orders',
    payment: '/account/payment',
  },
  /**
   * Auth
   */
  split: {
    signIn: '/split/sign-in',
    signUp: '/split/sign-up',
  },
  centered: {
    signIn: '/centered/sign-in',
    signUp: '/centered/sign-up',
  },
  illustration: {
    signIn: '/illustration/sign-in',
    signUp: '/illustration/sign-up',
  },
  verify: '/verify',
  resetPassword: '/reset-password',
  updatePassword: '/update-password',
  /**
   * Common
   */
  maintenance: '/maintenance',
  comingsoon: '/coming-soon',
  pricingCards: '/pricing-cards',
  pricingColumns: '/pricing-columns',
  payment: '/payment',
  support: '/support',
  page404: '/error/404',
  page500: '/error/500',
  /**
   * Others
   */
  components: '/components',
  pages: '/pages',
  docs: '',
  license: '',
  minimalStore: '',
  zoneStore: '',
  figmaUrl: '',
};
