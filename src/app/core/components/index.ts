// imports
import { layoutComponents } from './layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// exports
export * from './layout';
export * from './page-not-found/page-not-found.component';
//exports group
export const components: any = [...layoutComponents, PageNotFoundComponent];
