import { Routes } from '@angular/router';
import { RouterLink } from '@angular/router';

export const routes: Routes = [
    {path: '',
        loadComponent: () =>
            import('./features/inicio/inicio').then((m) => m.Inicio),
    },

    
    {path: 'sobremim',
        loadComponent: () =>
            import('./features/sobre-mim/sobre-mim').then((m) => m.SobreMim),
    },

    {path: 'contatos',
        loadComponent: () =>
            import('./features/contatos/contatos').then((m) => m.Contatos),
    },


];
