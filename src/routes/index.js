import loginComponent from "../containers/login";
import ContactsComponent from "../containers/Contacts/contacts";
import RegisterComponent from "../containers/Register";
import CreateContactComponent from"../containers/CreateContact";


const routes=[
{
    path:"auth/register",
    component: RegisterComponent,
    title:"Register",
},
{
    path:"/auth/login",
    component:loginComponent,
    title:"login",
},
{
    path:"/contact",
    component:ContactsComponent,
    title:"contacts title",
},
{
    path:"/contacts/create",
    component:CreateContactComponent,
    title:"CreateContact",
},


];

export default routes;