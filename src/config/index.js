export default {
  title: 'E-ROOM',
  menus: [
    {
      title: '홈',
      url: '/board/list',
    },
    {
      title: '이용안내',
      url: '/travel/list',
    },
    {
      title: '고객지원',
      url: '/gallery/list',
    },
  ],

  accoutMenus: {
    login: {
      url: '/auth/login',
      title: '로그인',
      icon: 'fa-solid fa-right-to-bracket',
    },

    join: {
      url: '/auth/join',
      title: '시작하기',
      icon: 'fa-solid fa-user-plus',
    },
  },
};
