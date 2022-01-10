import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard'));
const Myorder = React.lazy(() => import('./views/myorder'))
const machinselected = React.lazy(() => import('./views/machinselected'))
// const addemployee = React.lazy(() => import('./Views/Addemployee'))
// const editemployee = React.lazy(() => import('./Views/Editemployee'))
const profile = React.lazy(() => import('./views/profile'))
// const notfound = React.lazy(() => import('./PageNotFound'))
const routes = [
    { path: '/Dashboard', component: Dashboard },
    { path: '/myorder', component: Myorder },
    { path: '/machine', component: machinselected },
    // { path: '/addemployee', component: addemployee },
    { path: '/profile', component: profile },
    // { path: '/editemployee/:id', exact: true, component: editemployee },
    // { component: notfound }
];

export default routes;  