export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        // component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                // authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    // authority: ['admin'],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'upload',
                path: '/list',
                component: './TableList',
              },
              {
                name: 'antd-Practice',
                icon: 'pic-center',
                path: '/antdPractice',
                // component:'./antdPractice',
                routes: [
                  {
                    path: '/antdPractice/SubComponents',
                    name: 'sub-Components',
                    icon: 'pic-center',
                    component: './SubComponents',
                  },
                ],
              },
              {
                name: 'antd-Success',
                icon: 'strikethrough',
                path: '/antdSuccess',
                routes: [
                  {
                    path: '/antdSuccess',
                    name: 'successComponent',
                    component: './antdSuccess',
                  },
                ],
              },
              {
                name: 'demo',
                icon: 'strikethrough',
                path: '/demo',
                component: './DemoTest',
              },
              {
                name: 'Take-Test',
                icon: 'strikethrough',
                path: '/test',
                component: './Practice',
              },
              {
                name: "student's Exam Portal",
                icon: 'aliwangwang',
                path: '/index',
                // component: './StudentExam',
                routes: [
                  {
                    name: 'take-test',
                    path: '/index/test',
                    component: './StudentExam',
                  },
                  {
                    name: 'admin-portal',
                    path: '/index/admin',
                    component: './StudentExam/AdminSide',
                  },
                  {
                    name: 'student-portal',
                    path: '/index/student',
                    component: './StudentExam/StudentSide',
                  },
                ],
              },
              {
                name: 'e-Exams',
                icon: 'reddit',
                path: '/indexExam',
                routes: [
                  {
                    name: 'Take Test',
                    path: '/indexExam/StudentTest',
                    component:'./StudentExam/StudentTest',
                  },
                  {
                    name: 'Admin portal',
                    path: '/indexExam/adminExamine',
                    component: './StudentExam/AdminExamine',
                  },
                  {
                    name: 'Student Attendance',
                    path: '/indexExam/attendance',
                    component:'./StudentExam/StudentAttendance',
                  },
                ],
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
