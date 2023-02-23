// core components/views for Admin layout

const dashboardRoutes = [
  {
    path: '/home',
    name: 'Home',
    // component: HomePage,
  },
  {
    path: '/blockchain',
    name: 'Blockchain',
    children: [
      {
        path: '/accounts',
        name: 'Top Accounts',
        // component: HomePage,
      },
      {
        path: '/txs/list',
        name: 'View Txns',
        // component: HomePage,
      },
      {
        path: '/txsPending',
        name: 'View Pending Txns',
        // component: HomePage,
      },
      // {
      //   path: '/tsxInternal',
      //   name: 'Veiw Contract Internal Txns',
      //   // component: HomePage,
      // },
      {
        path: '/block',
        name: 'View Blocks',
        // component: HomePage,
      },
      // {
      //   path: '/contractVerified',
      //   name: 'Verified Contracts',
      //   // component: HomePage,
      // },
    ],
  },
  {
    path: '/staking',
    name: 'Staking',
    children: [
      {
        path: '/validators',
        name: 'Validators Leaderboard',
        // component: Validator,
      },
      {
        path: '/epochs',
        name: 'Epochs',
        // component: HomePage,
      },
    ],
  },
  {
    path: '/tokens',
    name: 'Tokens',
    children: [
      {
        path: '/tokens',
        name: 'ERC-20 Top Tokens',
        // component: HomePage,
      },
      {
        path: '/tokenstxns',
        name: 'View ERC Transfers',
        // component: HomePage,
      },
      {
        path: '/tokens-nft',
        name: 'ERC721 Top Tokens',
        // component: HomePage,
      },
      {
        path: '/tokentxns-nft',
        name: 'VIew ERC721 Transfers',
        // component: HomePage,
      },
    ],
  },
  {
    path: '/resources',
    name: 'Resource',
    children: [
      {
        path: '/chart',
        name: 'Charts & Stats',
        // component: ChartPage,
      },
      // {
      //   path: '/topstat',
      //   name: 'Top Stastics',
      //   // component: HomePage,
      // },
    ],
  },
  {
    path: '/misc',
    name: 'Misc',
    children: [
      {
        path: '/apis',
        name: 'APIs',
        // component: HomePage,
      },
      {
        path: '/verifyContract',
        name: 'Verify Contract',
        // component: VerifyContract,
      },
      {
        path: '/opcode-tool',
        name: 'Byte to Opcode',
        // component: ByteToOpcode,
      },
      {
        path: '/pushTx',
        name: 'Broad TXN',
        // component: HomePage,
      },
      // {
      //   path: '/vyper',
      //   name: 'Vyper Online Compiler',
      //   // component: Vyper,
      // },
      {
        path: '/tokenapprovalchecker',
        name: 'Token Approvals',
        // component: TokenApprovals,
      },
    ],
  },
  {
    path: '/login',
    name: 'Sign In',
    // component: AuthPage,
  },
  {
    path: '/logout',
    name: 'Sign Out',
    children: [
      {
        path: '/myaccount',
        name: 'My Profile',
        // component: HomePage,
      },
      {
        path: '/myaddress',
        name: 'Watch List',
        // component: VerifyContract,
      },
      {
        path: '/mynotes_tx',
        name: 'Txn Private Notes',
        // component: ByteToOpcode,
      },
      {
        path: '/mynotes_address',
        name: 'Address Private Notes',
        // component: HomePage,
      },
      {
        path: '/mytokenignore',
        name: 'Token Ignore List',
        // component: Vyper,
      },
      {
        path: '/myapikey',
        name: 'API-KEYs',
        // component: TokenApprovals,
      },
      {
        path: '/myverify_address',
        name: 'Verified Addresses',
        // component: Vyper,
      },
      {
        path: '/mycustomabi',
        name: 'Custom ABIs',
        // component: TokenApprovals,
      },
      {
        path: '/signoutbutton',
        name: 'Sign Out',
      },
    ],
  },
  // {
  //   path: '/change',
  //   name: 'Change',
  //   // component: AuthPage,
  //   children: [
  //     {
  //       path: 'http://54.251.117.51:3000',
  //       name: 'ZNX Mainnet',
  //       // component: Mainnet,
  //     },
  //     {
  //       path: 'http://173.225.100.220:443',
  //       name: 'ZNX Testnet',
  //       // component: Testnet,
  //     },
  //   ],
  // },
]

export default dashboardRoutes
