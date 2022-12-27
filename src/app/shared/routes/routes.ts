import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/apps/dashboard/dashboard.module').then(m => m.dashboardModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('../../components/apps/expenses/expenses.module').then(m => m.expensesModule)
  },
  {
    path: 'financial-statement',
    loadChildren: () => import('../../components/apps/financial/financial.module').then(m => m.financialModule)
  },
  {
    path: 'accounts-payable',
    loadChildren: () => import('../../components/apps/paybale/payable.module').then(m => m.payableModule)
  },
  {
    path: 'accounts-recievable',
    loadChildren: () => import('../../components/apps/recievable/recievable.module').then(m => m.recievableModule)
  },
  {
    path: 'accountants',
    loadChildren: () => import('../../components/apps/accountants/accountants.module').then(m => m.AccountantsModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('../../components/apps/clients/clients.module').then(m => m.clientModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('../../components/apps/documents/documents.module').then(m => m.documentsModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('../../components/apps/chat/chat.module').then(m => m.chatModule)
  },
];
